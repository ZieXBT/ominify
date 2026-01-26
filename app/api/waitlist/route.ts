import { NextResponse } from 'next/server';

// In-memory storage for demo purposes
// Replace with Airtable, Supabase, or database in production
const waitlistEmails = new Set<string>();

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, companyName } = body;

        // Server-side validation
        if (!name || name.trim().length < 2) {
            return NextResponse.json(
                { error: 'Name must be at least 2 characters' },
                { status: 400 }
            );
        }

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Please provide a valid email address' },
                { status: 400 }
            );
        }

        if (!companyName || companyName.trim().length < 2) {
            return NextResponse.json(
                { error: 'Company name must be at least 2 characters' },
                { status: 400 }
            );
        }

        // Check for duplicate email
        const normalizedEmail = email.toLowerCase().trim();
        if (waitlistEmails.has(normalizedEmail)) {
            return NextResponse.json(
                { error: 'This email is already on the waitlist' },
                { status: 409 }
            );
        }

        // Add to waitlist
        waitlistEmails.add(normalizedEmail);

        // Log for demo (replace with actual storage in production)
        console.log('New waitlist signup:', {
            name: name.trim(),
            email: normalizedEmail,
            companyName: companyName.trim(),
            signedUp: new Date().toISOString(),
            discount: '50% Lifetime',
        });

        // TODO: In production, integrate with one of:
        // - Airtable: await base('Waitlist').create({ ... })
        // - Supabase: await supabase.from('waitlist').insert({ ... })
        // - Google Sheets: via Apps Script API
        // - Email service (Resend, ConvertKit): send welcome email

        return NextResponse.json({
            success: true,
            message: 'Successfully joined the waitlist!',
        });
    } catch (error) {
        console.error('Waitlist signup error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function GET() {
    // Return current waitlist count (for admin/demo purposes)
    return NextResponse.json({
        count: waitlistEmails.size,
    });
}
