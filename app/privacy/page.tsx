'use client';

import Link from 'next/link';
import { Zap, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] relative">
            {/* Background */}
            <div className="bg-gradient-fixed" />
            <div className="bg-grid-fixed" />

            {/* Header */}
            <header className="w-full border-b border-white/[0.06] bg-[#0a0a0f]/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <Zap className="w-4 h-4 text-white" fill="currentColor" />
                        </div>
                        <span className="text-lg font-bold text-white">Omnify</span>
                    </Link>
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-6 py-16 relative z-10">
                {/* Page Title */}
                <div className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Privacy{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            Policy
                        </span>
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Last updated: February 12, 2026
                    </p>
                </div>

                {/* Legal Content */}
                <div className="prose prose-invert max-w-none space-y-10 text-gray-300 leading-relaxed">

                    {/* 1. Introduction */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">01</span>
                            Introduction & Scope
                        </h2>
                        <p>
                            Omnify Inc. (&ldquo;Omnify,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
                            protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard
                            your information when you use the Omnify platform, mobile applications, APIs, and related services (collectively,
                            the &ldquo;Service&rdquo;).
                        </p>
                        <p className="mt-3">
                            By using the Service, you consent to the data practices described in this policy. If you do not agree with the
                            terms of this Privacy Policy, please do not access or use the Service.
                        </p>
                    </section>

                    {/* 2. Information We Collect */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">02</span>
                            Information We Collect
                        </h2>
                        <p>
                            We collect several types of information depending on which features you use and which third-party integrations
                            you enable:
                        </p>

                        <div className="mt-4 space-y-5">
                            <div>
                                <h3 className="text-white font-medium mb-2">2.1 Account Information</h3>
                                <p className="text-gray-400">
                                    When you create an account via Google Sign-In, Apple Sign-In, or any supported authentication method, we
                                    collect your name, email address, and profile picture (if provided). If you use Apple&rsquo;s &ldquo;Hide My
                                    Email&rdquo; feature, we receive Apple&rsquo;s private relay email address instead.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">2.2 Google Services Data</h3>
                                <p className="text-gray-400">
                                    When you connect your Google account, we may access the following data depending on the permissions you grant:
                                </p>
                                <ul className="list-disc pl-6 space-y-1.5 mt-2 text-gray-400 text-sm">
                                    <li>
                                        <strong className="text-gray-200">Gmail:</strong> Access to send emails on your behalf. We access only the
                                        minimum data necessary to compose and send messages. We do not read, index, or mine the contents of your
                                        inbox or existing emails.
                                    </li>
                                    <li>
                                        <strong className="text-gray-200">Google Calendar:</strong> Access to read and write calendar events,
                                        including event titles, times, attendee information, and descriptions, for scheduling and availability management.
                                    </li>
                                    <li>
                                        <strong className="text-gray-200">Google Ads:</strong> Access to retrieve lead form submissions, including
                                        lead names, email addresses, phone numbers, and form responses from your Google Ads campaigns.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">2.3 Microsoft / Outlook Data</h3>
                                <p className="text-gray-400">
                                    When you connect your Microsoft account, we access only your Outlook calendar data, including event titles,
                                    times, attendees, and descriptions. We do not access your Outlook email, contacts, OneDrive files, or any
                                    other Microsoft services.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">2.4 Meta Ads Data</h3>
                                <p className="text-gray-400">
                                    When you connect your Meta Ads account, we retrieve lead form submission data from your Facebook and/or
                                    Instagram ad campaigns, including lead names, email addresses, phone numbers, and form responses. We do not
                                    access your personal social media profile, friends list, posts, or direct messages.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">2.5 CRM & Communication Data</h3>
                                <p className="text-gray-400">
                                    We collect and store data generated through your use of the Service, including:
                                </p>
                                <ul className="list-disc pl-6 space-y-1.5 mt-2 text-gray-400 text-sm">
                                    <li>Contact information for your leads and customers (as entered by you or synced from integrations)</li>
                                    <li>Phone call recordings, transcripts, and metadata (duration, time, phone numbers)</li>
                                    <li>Text message content, delivery status, and metadata</li>
                                    <li>Email content and delivery status for messages sent through the Service</li>
                                    <li>Appointment and scheduling data</li>
                                    <li>Notes, tags, and other CRM data you create</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">2.6 Usage & Device Data</h3>
                                <p className="text-gray-400">
                                    We automatically collect certain information when you use the Service, including your IP address, browser type,
                                    device type, operating system, referring URLs, pages viewed, features used, timestamps, and other diagnostic
                                    data. This is collected via server logs and, where applicable, cookies or similar technologies.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 3. How We Use Your Information */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">03</span>
                            How We Use Your Information
                        </h2>
                        <p>We use the information we collect for the following purposes:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-400">
                            <li>
                                <strong className="text-gray-200">Provide the Service:</strong> To operate the CRM, make and receive AI-powered
                                calls, send follow-up texts and emails, schedule appointments, and sync lead data.
                            </li>
                            <li>
                                <strong className="text-gray-200">Account Management:</strong> To create, authenticate, and manage your account.
                            </li>
                            <li>
                                <strong className="text-gray-200">Calendar Synchronization:</strong> To read your availability and create/manage
                                appointments in your connected Google Calendar or Outlook calendar.
                            </li>
                            <li>
                                <strong className="text-gray-200">Lead Management:</strong> To import, organize, and follow up on leads from
                                Google Ads and Meta Ads campaigns.
                            </li>
                            <li>
                                <strong className="text-gray-200">AI Communications:</strong> To generate phone call scripts, text messages, and
                                email content; to improve AI accuracy and performance over time.
                            </li>
                            <li>
                                <strong className="text-gray-200">Service Improvement:</strong> To analyze usage patterns, diagnose technical
                                issues, and improve the Service.
                            </li>
                            <li>
                                <strong className="text-gray-200">Compliance:</strong> To comply with legal obligations, resolve disputes, and
                                enforce our agreements.
                            </li>
                            <li>
                                <strong className="text-gray-200">Customer Support:</strong> To respond to your inquiries and provide technical
                                assistance.
                            </li>
                        </ul>
                    </section>

                    {/* 4. Google API Limited Use Disclosure */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">04</span>
                            Google API Services — Limited Use Disclosure
                        </h2>
                        <div className="p-5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20">
                            <p className="text-gray-300 mb-3">
                                Omnify&rsquo;s use and transfer of information received from Google APIs adheres to the{' '}
                                <a
                                    href="https://developers.google.com/terms/api-services-user-data-policy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-400 underline hover:text-emerald-300"
                                >
                                    Google API Services User Data Policy
                                </a>
                                , including the Limited Use requirements. Specifically:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-400 text-sm">
                                <li>
                                    We only use Google user data to provide and improve the user-facing features of Omnify that are
                                    visible and apparent to you.
                                </li>
                                <li>
                                    We do not transfer Google user data to third parties except as necessary to provide the Service,
                                    comply with applicable law, or as part of a merger/acquisition with adequate data protection.
                                </li>
                                <li>
                                    We do not use Google user data for serving advertisements, including retargeting, personalized, or
                                    interest-based advertising.
                                </li>
                                <li>
                                    We do not allow humans to read Google user data unless: (a) we have your affirmative consent;
                                    (b) it is necessary for security purposes (e.g., investigating abuse); (c) it is necessary to comply
                                    with applicable law; or (d) the data is aggregated and anonymized for internal operations.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* 5. Third-Party Data Sharing */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">05</span>
                            Third-Party Data Sharing
                        </h2>
                        <p>
                            We do not sell your personal information to third parties. We may share your information only in the following
                            circumstances:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-400">
                            <li>
                                <strong className="text-gray-200">Service Providers:</strong> We share data with trusted third-party vendors who
                                assist us in operating the Service, such as cloud hosting providers, telephony (voice/SMS) providers,
                                email delivery services, and analytics tools. These providers are contractually obligated to use your
                                data only for the services they perform on our behalf.
                            </li>
                            <li>
                                <strong className="text-gray-200">Legal Requirements:</strong> We may disclose your information if required to do
                                so by law, in response to a subpoena, court order, or other legal process, or if we believe disclosure is
                                necessary to protect our rights, your safety, or the safety of others.
                            </li>
                            <li>
                                <strong className="text-gray-200">Business Transfers:</strong> In the event of a merger, acquisition,
                                reorganization, or sale of assets, your information may be transferred as part of that transaction. We will
                                notify you of any such change in ownership or control.
                            </li>
                            <li>
                                <strong className="text-gray-200">With Your Consent:</strong> We may share your information with third parties
                                when you have given us explicit consent to do so.
                            </li>
                        </ul>
                    </section>

                    {/* 6. Text Messaging Privacy */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">06</span>
                            Text Messaging Privacy
                        </h2>
                        <p>
                            The following disclosures apply to text messages sent through the Omnify platform:
                        </p>

                        <div className="mt-4 space-y-5">
                            <div>
                                <h3 className="text-white font-medium mb-2">6.1 Phone Numbers & Messaging Data</h3>
                                <p className="text-gray-400">
                                    When leads and customers provide their phone numbers (via ad forms, verbal communication, direct entry, or
                                    other means), those numbers are stored in your Omnify CRM. We use these phone numbers to deliver text messages
                                    on your behalf, including follow-up messages, appointment reminders, and AI-generated communications.
                                    Phone numbers and message content are stored securely and are never sold to third parties.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">6.2 Consent & Opt-In Records</h3>
                                <p className="text-gray-400">
                                    Omnify requires that all text message recipients have provided valid consent before receiving messages. Consent
                                    may be given verbally (e.g., by calling the business and being informed they will receive follow-up SMS), in
                                    writing (e.g., via a web form or lead form), or through an active inquiry where a phone number is provided.
                                    All communication aligns with TCPA guidelines, and businesses using Omnify are responsible for maintaining
                                    verifiable records of consent for each recipient.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">6.3 Message Logs</h3>
                                <p className="text-gray-400">
                                    We retain logs of all text messages sent through the Service, including message content, recipient phone
                                    numbers, timestamps, and delivery status. These logs are retained for the purposes of providing the Service,
                                    troubleshooting, compliance, and dispute resolution. Message logs are subject to the data retention periods
                                    described in Section 8.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">6.4 Opt-Out Data</h3>
                                <p className="text-gray-400">
                                    When a message recipient opts out by replying STOP (or similar keywords such as UNSUBSCRIBE, CANCEL, END,
                                    or QUIT), we record their phone number on a suppression list to prevent future messages. Upon opting out,
                                    recipients receive a confirmation message. Opt-out records are retained indefinitely to ensure continued
                                    compliance. We do not share opt-out lists with third parties except as required by our telephony service
                                    providers for message filtering purposes. Recipients may re-subscribe at any time by texting START or by
                                    providing fresh consent.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">6.5 Telephony Service Providers</h3>
                                <p className="text-gray-400">
                                    To facilitate message delivery, we share recipient phone numbers and message content with our trusted
                                    telephony service providers. These providers are contractually obligated to handle data securely and use
                                    it solely for the purpose of delivering messages on your behalf. We do not share messaging data with any
                                    third parties for marketing or advertising purposes.
                                </p>
                            </div>

                            <div className="glass-card p-5 !rounded-xl hover:transform-none">
                                <h3 className="text-white font-medium mb-2">Consumer Messaging Disclosure</h3>
                                <p className="text-gray-400 text-sm">
                                    If you are a consumer receiving text messages from a business using Omnify, please note:
                                </p>
                                <ul className="list-disc pl-6 space-y-1.5 mt-2 text-gray-400 text-sm">
                                    <li>Messages are sent by the business whose name appears in the message. Omnify is the technology platform facilitating delivery.</li>
                                    <li>Message and data rates may apply depending on your mobile carrier and plan.</li>
                                    <li>You can opt out at any time by replying <strong className="text-white">STOP</strong> to any message.</li>
                                    <li>You can request help by replying <strong className="text-white">HELP</strong> to any message.</li>
                                    <li>Message frequency varies by business and communication type.</li>
                                    <li>For privacy concerns, contact the business that sent you the message directly, or reach out to us at{' '}
                                        <a href="mailto:team@omnifycrm.com" className="text-emerald-400 hover:text-emerald-300 underline">
                                            team@omnifycrm.com
                                        </a>.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 7. AI & Automated Decision-Making */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">07</span>
                            AI & Automated Decision-Making
                        </h2>
                        <p>
                            Omnify uses artificial intelligence and machine learning to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-400">
                            <li>Generate natural-sounding voice calls to leads and customers.</li>
                            <li>Compose follow-up text messages and emails based on conversation context.</li>
                            <li>Qualify leads based on conversation data and form responses.</li>
                            <li>Schedule appointments based on calendar availability and customer preferences.</li>
                            <li>Provide real-time conversation recommendations and response suggestions.</li>
                        </ul>
                        <p className="mt-3">
                            AI decisions (such as lead qualification scores) are advisory in nature and are designed to assist your business
                            operations. You retain full control over how leads are handled and can override or adjust any AI-generated actions
                            at any time. We do not use AI to make decisions that produce legal effects or similarly significant effects on
                            individuals without human oversight.
                        </p>
                    </section>

                    {/* 8. Data Retention & Deletion */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">08</span>
                            Data Retention & Deletion
                        </h2>
                        <p>
                            We retain your data for as long as your account is active or as needed to provide the Service. Specific retention
                            periods include:
                        </p>
                        <div className="mt-4 overflow-x-auto">
                            <table className="w-full text-sm text-gray-400 border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10">
                                        <th className="text-left py-3 pr-4 text-gray-200 font-medium">Data Type</th>
                                        <th className="text-left py-3 text-gray-200 font-medium">Retention Period</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/[0.04]">
                                    <tr>
                                        <td className="py-3 pr-4">Account information</td>
                                        <td className="py-3">Until account deletion + 30 days</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">CRM data (contacts, notes)</td>
                                        <td className="py-3">Until account deletion + 30 days</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">Call recordings & transcripts</td>
                                        <td className="py-3">12 months or until deletion request</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">Text message logs</td>
                                        <td className="py-3">12 months or until deletion request</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">Email send logs</td>
                                        <td className="py-3">12 months or until deletion request</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">Calendar event data</td>
                                        <td className="py-3">Synced in real-time; deleted upon disconnection</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">Opt-out / suppression records</td>
                                        <td className="py-3">Retained indefinitely for compliance</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">Usage & analytics data</td>
                                        <td className="py-3">24 months (aggregated/anonymized)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4">
                            You may request deletion of your data at any time by contacting us at{' '}
                            <a href="mailto:team@omnifycrm.com" className="text-emerald-400 hover:text-emerald-300 underline">
                                team@omnifycrm.com
                            </a>
                            . Upon receiving a verified deletion request, we will delete your personal data within thirty (30) days, unless
                            retention is required by law or for legitimate business purposes (e.g., fraud prevention, legal compliance).
                        </p>
                    </section>

                    {/* 9. Data Security */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">09</span>
                            Data Security
                        </h2>
                        <p>
                            We implement industry-standard security measures to protect your data, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-400">
                            <li>Encryption of data in transit (TLS 1.2+) and at rest (AES-256).</li>
                            <li>Role-based access controls limiting data access to authorized personnel only.</li>
                            <li>Regular security audits and vulnerability assessments.</li>
                            <li>Secure storage of authentication tokens; we never store your third-party passwords.</li>
                            <li>Monitoring and logging of access to sensitive data.</li>
                        </ul>
                        <p className="mt-3">
                            While we strive to protect your data, no method of electronic storage or transmission is 100% secure. We cannot
                            guarantee absolute security, and you use the Service at your own risk.
                        </p>
                    </section>

                    {/* 10. Your Rights */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">10</span>
                            Your Rights
                        </h2>
                        <p>
                            Depending on your jurisdiction, you may have the following rights regarding your personal information:
                        </p>

                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                { right: 'Right to Access', desc: 'Request a copy of the personal data we hold about you.' },
                                { right: 'Right to Rectification', desc: 'Request correction of inaccurate or incomplete data.' },
                                { right: 'Right to Deletion', desc: 'Request deletion of your personal data (subject to legal exceptions).' },
                                { right: 'Right to Portability', desc: 'Receive your data in a structured, machine-readable format.' },
                                { right: 'Right to Opt Out', desc: 'Opt out of data processing for marketing purposes.' },
                                { right: 'Right to Non-Discrimination', desc: 'Exercise your rights without receiving discriminatory treatment.' },
                            ].map((item) => (
                                <div key={item.right} className="glass-card p-4 !rounded-xl hover:transform-none">
                                    <h3 className="text-white font-medium text-sm mb-1">{item.right}</h3>
                                    <p className="text-gray-400 text-xs">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-4">
                            To exercise any of these rights, please contact us at{' '}
                            <a href="mailto:team@omnifycrm.com" className="text-emerald-400 hover:text-emerald-300 underline">
                                team@omnifycrm.com
                            </a>
                            . We will respond to your request within thirty (30) days. We may require identity verification before processing
                            your request.
                        </p>

                        <div className="mt-4 space-y-3">
                            <div>
                                <h3 className="text-white font-medium mb-2">California Residents (CCPA/CPRA)</h3>
                                <p className="text-gray-400 text-sm">
                                    If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA)
                                    and the California Privacy Rights Act (CPRA), including the right to know what personal information is collected,
                                    the right to delete personal information, and the right to opt out of the sale or sharing of personal information.
                                    We do not sell your personal information. To submit a verifiable consumer request, contact us at{' '}
                                    <a href="mailto:team@omnifycrm.com" className="text-emerald-400 hover:text-emerald-300 underline">
                                        team@omnifycrm.com
                                    </a>
                                    .
                                </p>
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-2">EU/EEA Residents (GDPR)</h3>
                                <p className="text-gray-400 text-sm">
                                    If you are located in the European Union or European Economic Area, you have rights under the General Data
                                    Protection Regulation (GDPR), including the rights listed above. Our legal basis for processing your data
                                    includes performance of a contract (providing the Service), legitimate interests (improving the Service), and
                                    your consent (where applicable). You also have the right to lodge a complaint with your local data protection
                                    authority.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 11. Children's Privacy */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">11</span>
                            Children&rsquo;s Privacy
                        </h2>
                        <p>
                            The Service is not directed to individuals under the age of 13 (or 16 in the EU/EEA). We do not knowingly collect
                            personal information from children. If we become aware that we have collected personal information from a child
                            without parental consent, we will take steps to delete that information promptly. If you believe a child has
                            provided us with personal information, please contact us at{' '}
                            <a href="mailto:team@omnifycrm.com" className="text-emerald-400 hover:text-emerald-300 underline">
                                team@omnifycrm.com
                            </a>
                            .
                        </p>
                    </section>

                    {/* 12. International Data Transfers */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">12</span>
                            International Data Transfers
                        </h2>
                        <p>
                            Your information may be transferred to and processed in countries other than the country in which you reside.
                            These countries may have data protection laws that differ from those of your country. When we transfer data
                            internationally, we implement appropriate safeguards, including Standard Contractual Clauses (SCCs) approved
                            by the European Commission, to ensure your data receives adequate protection regardless of where it is processed.
                        </p>
                    </section>

                    {/* 13. Cookies & Tracking Technologies */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">13</span>
                            Cookies & Tracking Technologies
                        </h2>
                        <p>
                            We use cookies and similar tracking technologies to enhance your experience, analyze usage, and support the
                            Service. The types of cookies we use include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-400">
                            <li>
                                <strong className="text-gray-200">Essential Cookies:</strong> Required for the Service to function (e.g.,
                                authentication, session management).
                            </li>
                            <li>
                                <strong className="text-gray-200">Analytics Cookies:</strong> Help us understand how users interact with the
                                Service to improve performance and usability.
                            </li>
                        </ul>
                        <p className="mt-3">
                            You can control cookies through your browser settings. Disabling essential cookies may impact the functionality
                            of the Service.
                        </p>
                    </section>

                    {/* 14. Changes to This Policy */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">14</span>
                            Changes to This Privacy Policy
                        </h2>
                        <p>
                            We may update this Privacy Policy from time to time. If we make material changes, we will notify you by posting
                            the updated policy on our website and/or sending a notification via email at least thirty (30) days before the
                            changes take effect. The &ldquo;Last updated&rdquo; date at the top of this policy indicates when the latest
                            revision was made. Your continued use of the Service after the effective date constitutes acceptance of the updated
                            Privacy Policy.
                        </p>
                    </section>

                    {/* 15. Contact */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">15</span>
                            Contact Information
                        </h2>
                        <p>
                            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="mt-4 glass-card p-6 !rounded-xl hover:transform-none">
                            <p className="text-white font-medium mb-2">Omnify Inc.</p>
                            <p className="text-gray-400 text-sm">
                                Privacy Inquiries:{' '}
                                <a href="mailto:team@omnifycrm.com" className="text-emerald-400 hover:text-emerald-300 underline">
                                    team@omnifycrm.com
                                </a>
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                General Inquiries:{' '}
                                <a href="mailto:team@omnifycrm.com" className="text-emerald-400 hover:text-emerald-300 underline">
                                    team@omnifycrm.com
                                </a>
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                Website:{' '}
                                <a href="https://omni5crm.com" className="text-emerald-400 hover:text-emerald-300 underline">
                                    omni5crm.com
                                </a>
                            </p>
                        </div>
                    </section>
                </div>

                {/* Bottom navigation */}
                <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link
                        href="/terms-and-conditions"
                        className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                    >
                        Read our Terms & Conditions →
                    </Link>
                    <p className="text-xs text-gray-600">© {new Date().getFullYear()} Omnify Inc. All rights reserved.</p>
                </div>
            </main>
        </div>
    );
}
