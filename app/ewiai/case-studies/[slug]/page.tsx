import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/lib/ewiai-case-studies';
import { CaseStudyDetailContent } from '@/components/ewiai/CaseStudyDetailContent';

// SEO meta descriptions for each case study
const seoMeta: Record<string, { title: string; description: string }> = {
    'renu-property-management': {
        title: 'RENU Property Mgmt: 6-Figure Savings via AI Leasing Agent | ElevateWithAI',
        description: 'How RENU Property Management saved 6 figures annually and cut lead response to under 30 seconds using an AI Voice Leasing Agent and SMS automation.',
    },
    'texas-tax-protest': {
        title: 'Texas Tax Protest: 80% Lead Handling Automated with AI | ElevateWithAI',
        description: 'How Texas Tax Protest automated 80%+ of inbound lead handling and streamlined customer onboarding with AI Voice Agents and website chatbots.',
    },
    'sold-com': {
        title: 'SOLD.com: 60% Vendor Workload Cut with AI Calls | ElevateWithAI',
        description: 'How SOLD.com cut vendor workload by 60% and qualified leads 3x faster using 24/7 AI Voice Agents for inbound seller and vendor calls.',
    },
    'keyrenter-property-management': {
        title: 'Keyrenter: 278+ Appointments Booked Weekly via AI | ElevateWithAI',
        description: 'How Keyrenter Property Management books 278+ appointments per week and handles 65K+ monthly calls with a dual AI Voice Agent system.',
    },
    'tn-homebuyers': {
        title: 'TN Homebuyers: 5x Faster Lead Qualification with AI | ElevateWithAI',
        description: 'How TN Homebuyers achieved 5x faster lead qualification and eliminated manual triage using a multi-scenario AI Voice Agent across 10+ call types.',
    },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies.find(s => s.slug === slug);
    const meta = seoMeta[slug];

    if (!study || !meta) {
        return { title: 'Case Study Not Found | ElevateWithAI' };
    }

    return {
        title: meta.title,
        description: meta.description,
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: 'article',
            locale: 'en_US',
            siteName: 'Elevate With AI',
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
        },
    };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const studyIndex = caseStudies.findIndex(s => s.slug === slug);
    const study = caseStudies[studyIndex];

    if (!study) {
        notFound();
    }

    const nextStudy = caseStudies[(studyIndex + 1) % caseStudies.length];
    const prevStudy = caseStudies[(studyIndex - 1 + caseStudies.length) % caseStudies.length];

    return (
        <CaseStudyDetailContent
            study={study}
            prevStudy={prevStudy}
            nextStudy={nextStudy}
        />
    );
}
