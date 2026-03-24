import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

// ─── Rate Limiting ───────────────────────────────────────────
const RATE_LIMIT_MAX = 3; // max submissions per IP
const RATE_LIMIT_WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

// In-memory store: IP → array of timestamps
const ipSubmissions = new Map<string, number[]>();

// Cleanup old entries every 10 minutes to prevent memory leaks
setInterval(() => {
    const now = Date.now();
    for (const [ip, timestamps] of ipSubmissions.entries()) {
        const valid = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
        if (valid.length === 0) {
            ipSubmissions.delete(ip);
        } else {
            ipSubmissions.set(ip, valid);
        }
    }
}, 10 * 60 * 1000);

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
    const now = Date.now();
    const timestamps = (ipSubmissions.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);

    if (timestamps.length >= RATE_LIMIT_MAX) {
        return { allowed: false, remaining: 0 };
    }

    timestamps.push(now);
    ipSubmissions.set(ip, timestamps);
    return { allowed: true, remaining: RATE_LIMIT_MAX - timestamps.length };
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
        // ─── Rate Limit Check ────────────────────────────
        const headersList = await headers();
        const ip = headersList.get('x-forwarded-for')?.split(',')[0]?.trim()
            || headersList.get('x-real-ip')
            || 'unknown';

        const { allowed, remaining } = checkRateLimit(ip);

        if (!allowed) {
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
        const { name, phone, website, email } = body;

        // Server-side validation
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
                } catch (e) {
                    console.error('Could not read webhook error response');
                }
            }
        } catch (error) {
            console.error('❌ Error triggering webhook:', error);
        }

        return NextResponse.json({
            success: true,
            message: 'Demo call initiated! AI will call you shortly.',
        });
    } catch (error) {
        console.error('Demo call request error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

