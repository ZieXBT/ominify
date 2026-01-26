import { NextResponse } from 'next/server';

// Airtable configuration
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

    const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}?filterByFormula={Phone}="${phone}"`;

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

        // Check for duplicate in Airtable
        const isDuplicate = await checkDuplicateInAirtable(normalizedPhone);
        if (isDuplicate) {
            return NextResponse.json(
                { error: 'You have already requested a demo call' },
                { status: 409 }
            );
        }

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
            const webhookUrl = 'https://primary-production-538b.up.railway.app/webhook/omnify';
            // Don't await this to keep the response fast for the user (fire and forget)
            fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...leadData,
                    submittedAt: new Date().toISOString(),
                }),
            }).catch(err => console.error('Webhook trigger failed:', err));

            console.log('🔗 Webhook triggered:', webhookUrl);
        } catch (error) {
            console.error('Error triggering webhook:', error);
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

export async function GET() {
    return NextResponse.json({
        status: 'API is running',
        airtableConfigured: !!(AIRTABLE_API_KEY && AIRTABLE_BASE_ID),
    });
}
