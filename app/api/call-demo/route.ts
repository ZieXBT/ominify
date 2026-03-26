import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';

// ─── Rate Limiting Configuration ─────────────────────────────
const RATE_LIMIT_MAX = 3; // max submissions per 24h window
const TURNSTILE_REQUIRED_AFTER = 1; // require CAPTCHA after this many submissions
const COOKIE_NAME = 'ewiai_sub_count';
const COOKIE_MAX_AGE = 24 * 60 * 60; // 24 hours in seconds

// ─── Cookie-based submission tracking ────────────────────────
// Uses a signed cookie to persist count across serverless cold starts

function getSubmissionCountFromCookie(cookieValue: string | undefined): number {
    if (!cookieValue) return 0;
    try {
        const parsed = JSON.parse(cookieValue);
        // Check if the cookie has expired
        if (parsed.expires && Date.now() > parsed.expires) return 0;
        return typeof parsed.count === 'number' ? parsed.count : 0;
    } catch {
        return 0;
    }
}

function createCookieValue(count: number): string {
    return JSON.stringify({
        count,
        expires: Date.now() + COOKIE_MAX_AGE * 1000,
    });
}

// ─── Turnstile Verification ─────────────────────────────────
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY || '0x4AAAAAACvh8xuKAV5bnBWZ8RMfCBCu1_k';

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
    if (!TURNSTILE_SECRET) {
        console.warn('⚠️ Turnstile secret not configured. Skipping verification.');
        return true;
    }

    try {
        const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret: TURNSTILE_SECRET,
                response: token,
                remoteip: ip,
            }),
        });

        const result = await response.json();
        return result.success === true;
    } catch (error) {
        console.error('Turnstile verification error:', error);
        return false;
    }
}

// ─── Airtable configuration ─────────────────────────────────
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Demo Leads';

async function addToAirtable(data: {
    name: string;
    phone: string;
    website: string;
    email: string;
}) {
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
        console.warn('⚠️ Airtable not configured. Skipping...');
        return null;
    }

    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            fields: {
                'Name': data.name,
                'Phone': data.phone,
                'Email': data.email,
                'Website': data.website,
                'Submitted At': new Date().toISOString(),
            },
        }),
    });

    if (!response.ok) {
        const error = await response.json();
        console.error('Airtable error:', error);
        throw new Error('Failed to save to Airtable');
    }

    return await response.json();
}

async function checkDuplicateInAirtable(phone: string): Promise<boolean> {
    if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
        return false;
    }

    // Sanitize phone to prevent Airtable formula injection
    const sanitizedPhone = phone.replace(/[^\d+]/g, '');
    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}?filterByFormula={Phone}="${sanitizedPhone}"`;

    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        },
    });

    if (!response.ok) {
        return false;
    }

    const data = await response.json();
    return data.records && data.records.length > 0;
}

export async function POST(request: Request) {
    try {
        // ─── Get IP ──────────────────────────────────────
        const headersList = await headers();
        const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim()
            || headersList.get('x-real-ip')
            || 'unknown';

        // ─── Get submission count from cookie ────────────
        const cookieStore = await cookies();
        const cookieValue = cookieStore.get(COOKIE_NAME)?.value;
        const currentCount = getSubmissionCountFromCookie(cookieValue);

        // ─── Check Rate Limit ────────────────────────────
        if (currentCount >= RATE_LIMIT_MAX) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again tomorrow.' },
                {
                    status: 429,
                    headers: {
                        'Retry-After': '86400',
                        'X-RateLimit-Limit': String(RATE_LIMIT_MAX),
                        'X-RateLimit-Remaining': '0',
                    },
                }
            );
        }

        const body = await request.json();
        const { name, phone, website, email, turnstileToken } = body;

        // ─── Turnstile Check (required on 2nd+ submission) ──
        if (currentCount >= TURNSTILE_REQUIRED_AFTER) {
            if (!turnstileToken) {
                return NextResponse.json(
                    { error: 'CAPTCHA verification required.', captcha_required: true },
                    { status: 403 }
                );
            }

            const isValid = await verifyTurnstile(turnstileToken, ip);
            if (!isValid) {
                return NextResponse.json(
                    { error: 'CAPTCHA verification failed. Please try again.', captcha_required: true },
                    { status: 403 }
                );
            }
        }

        // ─── Server-side validation ──────────────────────
        if (!name || name.trim().length < 2) {
            return NextResponse.json(
                { error: 'Name must be at least 2 characters' },
                { status: 400 }
            );
        }

        if (!phone || phone.replace(/\D/g, '').length < 10) {
            return NextResponse.json(
                { error: 'Please provide a valid phone number' },
                { status: 400 }
            );
        }

        if (!website || website.trim().length < 3) {
            return NextResponse.json(
                { error: 'Please provide a valid website' },
                { status: 400 }
            );
        }

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        // ─── Record this submission ──────────────────────
        const newCount = currentCount + 1;
        const remaining = RATE_LIMIT_MAX - newCount;

        // Normalize phone number
        const normalizedPhone = phone.replace(/\D/g, '');

        // Prepare lead data
        const leadData = {
            name: name.trim(),
            phone: normalizedPhone,
            website: website.trim().toLowerCase(),
            email: email.toLowerCase().trim(),
        };

        // Save to Airtable
        await addToAirtable(leadData);

        console.log('🚀 New Demo Call Request saved to Airtable:', leadData);

        // Trigger Webhook
        try {
            const webhookUrl = process.env.WEBHOOK_URL || 'https://primary-production-538b.up.railway.app/webhook/omnify';

            console.log('🔗 Triggering webhook:', webhookUrl);
            const webhookResponse = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...leadData,
                    submittedAt: new Date().toISOString(),
                }),
            });

            if (webhookResponse.ok) {
                console.log('✅ Webhook delivered successfully');
            } else {
                console.error(`❌ Webhook failed with status: ${webhookResponse.status} ${webhookResponse.statusText}`);
                try {
                    const responseText = await webhookResponse.text();
                    console.error('Webhook error response:', responseText);
                } catch {
                    console.error('Could not read webhook error response');
                }
            }
        } catch (error) {
            console.error('❌ Error triggering webhook:', error);
        }

        // ─── Set cookie with updated count ───────────────
        const response = NextResponse.json({
            success: true,
            message: 'Demo call initiated! AI will call you shortly.',
            remaining,
        });

        response.cookies.set(COOKIE_NAME, createCookieValue(newCount), {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: COOKIE_MAX_AGE,
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Demo call request error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
