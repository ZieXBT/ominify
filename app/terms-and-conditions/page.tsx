'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] relative">
            {/* Background */}
            <div className="bg-gradient-fixed" />
            <div className="bg-grid-fixed" />

            {/* Header */}
            <header className="w-full border-b border-white/[0.06] bg-[#0a0a0f]/80 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <Image src="/omnify-logo.png" alt="Omnify" width={32} height={32} className="w-8 h-8 rounded-xl" />
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
                        Terms &{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            Conditions
                        </span>
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Last updated: February 12, 2026
                    </p>
                </div>

                {/* Legal Content */}
                <div className="prose prose-invert max-w-none space-y-10 text-gray-300 leading-relaxed">

                    {/* 1. Acceptance */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">01</span>
                            Acceptance of Terms
                        </h2>
                        <p>
                            By accessing, downloading, or using the Omnify platform, mobile applications, APIs, or any related services
                            (collectively, the &ldquo;Service&rdquo;), you agree to be bound by these Terms & Conditions (&ldquo;Terms&rdquo;).
                            If you do not agree, you must not use the Service. These Terms constitute a legally binding agreement between you
                            (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) and Omnify Inc. (&ldquo;Omnify,&rdquo; &ldquo;we,&rdquo;
                            &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
                        </p>
                        <p>
                            By creating an account, you represent that you are at least 18 years old and have the legal authority to enter into
                            these Terms. If you are using the Service on behalf of a business entity, you represent that you have the authority
                            to bind that entity to these Terms.
                        </p>
                    </section>

                    {/* 2. Description of Service */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">02</span>
                            Description of Service
                        </h2>
                        <p>
                            Omnify is an AI-powered customer relationship management (CRM) platform designed for service-based businesses.
                            The Service includes, but is not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-400">
                            <li>AI-powered inbound and outbound phone call handling</li>
                            <li>Automated follow-up text messages and communications</li>
                            <li>Calendar synchronization and appointment scheduling (Google Calendar, Microsoft Outlook)</li>
                            <li>Lead capture and management from advertising platforms (Google Ads, Meta Ads)</li>
                            <li>Email integration for sending messages via connected accounts (Gmail)</li>
                            <li>CRM data management, lead tracking, and pipeline tools</li>
                            <li>AI-driven lead qualification, engagement, and nurturing</li>
                        </ul>
                    </section>

                    {/* 3. Account Registration & Authentication */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">03</span>
                            Account Registration & Authentication
                        </h2>
                        <p>
                            To use the Service, you must create an account using one of the following third-party authentication methods:
                        </p>

                        <div className="mt-4 space-y-4">
                            <div className="glass-card p-5 !rounded-xl hover:transform-none">
                                <h3 className="text-white font-medium mb-2">Sign In with Google</h3>
                                <p className="text-sm text-gray-400">
                                    You may log in to the Omnify application using your Google account. By authenticating via Google, you authorize
                                    Omnify to access your basic profile information (name, email address, profile picture) for account creation and
                                    identification purposes. Additional Google service integrations (Gmail, Calendar, Google Ads) are described in
                                    Section 4.
                                </p>
                            </div>
                            <div className="glass-card p-5 !rounded-xl hover:transform-none">
                                <h3 className="text-white font-medium mb-2">Sign In with Apple</h3>
                                <p className="text-sm text-gray-400">
                                    You may log in to the Omnify application using your Apple ID. By authenticating via Apple, you authorize Omnify
                                    to access your name and email address (or Apple&rsquo;s private relay email, if you choose to hide your email)
                                    solely for account creation and identification. Apple Sign-In is used exclusively for authentication and does
                                    not grant Omnify access to any other Apple services or data.
                                </p>
                            </div>
                            <div className="glass-card p-5 !rounded-xl hover:transform-none">
                                <h3 className="text-white font-medium mb-2">Microsoft / Outlook OAuth</h3>
                                <p className="text-sm text-gray-400">
                                    You may connect your Microsoft account to synchronize your Outlook calendar with Omnify. Microsoft OAuth is used
                                    exclusively for calendar integration and does not serve as a login method for the Omnify application.
                                    By connecting your Microsoft account, you authorize Omnify to read and write calendar events for scheduling
                                    purposes as described in Section 4.
                                </p>
                            </div>
                        </div>

                        <p className="mt-4">
                            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur
                            under your account. You must immediately notify us of any unauthorized use of your account.
                        </p>
                    </section>

                    {/* 4. Third-Party Integrations & Data Access */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">04</span>
                            Third-Party Integrations & Data Access
                        </h2>
                        <p>
                            Omnify connects with several third-party platforms to deliver its features. By enabling each integration,
                            you grant Omnify the specific permissions described below. You may revoke any integration at any time through
                            your account settings or by revoking access in the respective third-party platform.
                        </p>

                        <div className="mt-4 space-y-6">
                            {/* Google */}
                            <div>
                                <h3 className="text-white font-semibold mb-2">4.1 Google Services</h3>
                                <p className="mb-3">
                                    By connecting your Google account, you authorize Omnify to access the following Google services:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                                    <li>
                                        <strong className="text-gray-200">Gmail (Send Messages):</strong> Omnify accesses your Gmail account to send
                                        emails on your behalf, such as follow-up messages, appointment confirmations, and lead communications. Omnify
                                        will only send messages that you authorize or that are triggered by automated workflows you configure. We do
                                        not read, scan, or store the contents of your inbox beyond what is strictly necessary to perform the send action.
                                    </li>
                                    <li>
                                        <strong className="text-gray-200">Google Calendar (Sync Meetings):</strong> Omnify reads and writes events to
                                        your Google Calendar to schedule, reschedule, and cancel appointments on your behalf. This includes viewing your
                                        availability, creating new events with customer details, and updating existing bookings.
                                    </li>
                                    <li>
                                        <strong className="text-gray-200">Google Ads (Lead Sync):</strong> Omnify accesses your Google Ads account to
                                        retrieve lead form submission data (e.g., name, email, phone number, form responses). These leads are synced
                                        into your Omnify CRM for follow-up, including AI-powered calling and messaging.
                                    </li>
                                </ul>
                                <div className="mt-3 p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20">
                                    <p className="text-sm text-gray-300">
                                        <strong className="text-emerald-400">Google API Limited Use Disclosure:</strong> Omnify&rsquo;s use and
                                        transfer to any other app of information received from Google APIs will adhere to the{' '}
                                        <a
                                            href="https://developers.google.com/terms/api-services-user-data-policy"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-emerald-400 underline hover:text-emerald-300"
                                        >
                                            Google API Services User Data Policy
                                        </a>
                                        , including the Limited Use requirements. We do not use Google user data for advertising, do not
                                        sell Google user data, and do not allow humans to read your data unless required for security
                                        purposes, compliance with law, or with your explicit consent.
                                    </p>
                                </div>
                            </div>

                            {/* Apple */}
                            <div>
                                <h3 className="text-white font-semibold mb-2">4.2 Apple Services</h3>
                                <p className="text-gray-400">
                                    Apple Sign-In is used solely for authentication. Omnify does not access any Apple services beyond
                                    authentication (e.g., iCloud, Apple Mail, Apple Calendar). The only data received from Apple is your
                                    name and email address (or relay address), which is used for account identification.
                                </p>
                            </div>

                            {/* Microsoft / Outlook */}
                            <div>
                                <h3 className="text-white font-semibold mb-2">4.3 Microsoft / Outlook Services</h3>
                                <p className="text-gray-400">
                                    By connecting your Microsoft account, you authorize Omnify to access only your Outlook calendar.
                                    Omnify reads and writes calendar events to schedule, reschedule, and cancel appointments. This
                                    integration functions identically to the Google Calendar integration described above. Omnify does
                                    not access your Outlook email, contacts, files, or any other Microsoft services. Microsoft / Outlook
                                    OAuth is not used as a login method for the Omnify application.
                                </p>
                            </div>

                            {/* Meta Ads */}
                            <div>
                                <h3 className="text-white font-semibold mb-2">4.4 Meta (Facebook / Instagram) Ads</h3>
                                <p className="text-gray-400">
                                    By connecting your Meta Ads account, you authorize Omnify to retrieve lead form submissions from
                                    your Facebook and/or Instagram advertising campaigns. Lead data (e.g., name, email, phone number,
                                    form responses) is synced into your Omnify CRM for follow-up, including AI-powered outbound calling
                                    and messaging. Omnify does not post content to your social media accounts, manage your ad campaigns,
                                    or access your personal Facebook/Instagram profile data.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 5. AI-Powered Communications */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">05</span>
                            AI-Powered Communications
                        </h2>
                        <p>
                            Omnify uses artificial intelligence to handle phone calls, send text messages, and send emails on your behalf.
                            By using the Service, you acknowledge and agree that:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-400">
                            <li>
                                AI-generated voice calls and text messages will be made to your leads and customers using your configured
                                business phone number.
                            </li>
                            <li>
                                You are responsible for ensuring that all persons contacted have provided appropriate consent to receive
                                communications, including calls and text messages, from your business.
                            </li>
                            <li>
                                AI-generated communications may be identified as being from your business. You authorize Omnify to act as
                                your representative for these communications.
                            </li>
                            <li>
                                You must comply with all applicable laws regarding automated communications, including but not limited to
                                the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, and any applicable state or local regulations.
                            </li>
                            <li>
                                Call recordings and transcripts may be stored for quality assurance, training, and your future reference.
                                You are responsible for notifying call recipients of recording in jurisdictions that require it.
                            </li>
                        </ul>
                    </section>

                    {/* 6. Text Messaging Compliance */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">06</span>
                            Text Messaging Compliance
                        </h2>
                        <p>
                            Omnify enables your business to send text messages (SMS/MMS) to your leads and customers as part of its
                            CRM and AI communication features. By using the messaging capabilities of the Service, you agree to the
                            following terms and acknowledge your responsibilities under applicable telecommunications regulations.
                        </p>

                        <div className="mt-4 space-y-5">
                            <div>
                                <h3 className="text-white font-medium mb-2">6.1 End-User Consent & Opt-In</h3>
                                <p className="text-gray-400">
                                    You must obtain proper consent from every individual before sending them text messages through the Service.
                                    Consent may be obtained through any of the following methods:
                                </p>
                                <ul className="list-disc pl-6 space-y-1.5 mt-2 text-gray-400 text-sm">
                                    <li>
                                        <strong className="text-gray-200">Verbal Opt-In:</strong> End-users may consent to receive messages from
                                        your business verbally — for example, by contacting the phone number listed on your website
                                        (e.g., <a href="https://omnifycrm.com" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline hover:text-emerald-300">omnifycrm.com</a>).
                                        When an end-user calls your business, your team must explicitly inform them that by providing their phone
                                        number and discussing their inquiries, they agree to receive follow-up messages via SMS or other
                                        communication channels related to their request or services offered by your business. This verbal opt-in
                                        process ensures that end-users are aware they will receive communications and gives them the opportunity
                                        to decline if they do not wish to receive further messages.
                                    </li>
                                    <li>
                                        <strong className="text-gray-200">Written / Digital Opt-In:</strong> End-users may consent by submitting
                                        a web form, filling out a lead form (e.g., via Google Ads or Meta Ads), or signing a physical or electronic
                                        document that clearly discloses they will receive text messages from your business.
                                    </li>
                                    <li>
                                        <strong className="text-gray-200">Inquiry-Based Opt-In:</strong> When end-users initiate contact with your
                                        business (e.g., by requesting a quote, scheduling a consultation, or submitting an inquiry), and their
                                        phone number is provided in that context, they consent to receive follow-up communications related to
                                        their inquiry via SMS.
                                    </li>
                                </ul>
                                <p className="text-gray-400 mt-3">
                                    Regardless of the consent method, you must ensure the following disclosures are made to the end-user
                                    at or before the time of opt-in:
                                </p>
                                <ul className="list-disc pl-6 space-y-1.5 mt-2 text-gray-400 text-sm">
                                    <li>Clear disclosure that they are opting in to receive text messages from your business.</li>
                                    <li>The types of messages they will receive (e.g., appointment reminders, follow-ups, promotional offers).</li>
                                    <li>Approximate message frequency (e.g., &ldquo;Message frequency varies&rdquo; or &ldquo;Up to 5 messages per week&rdquo;).</li>
                                    <li>That message and data rates may apply.</li>
                                    <li>Clear instructions on how to opt out at any time (e.g., &ldquo;Reply STOP to unsubscribe&rdquo;).</li>
                                    <li>Clear instructions on how to get help (e.g., &ldquo;Reply HELP for assistance&rdquo;).</li>
                                    <li>A link to your terms of service and privacy policy.</li>
                                </ul>
                                <p className="text-gray-400 mt-3">
                                    All communication must align with TCPA (Telephone Consumer Protection Act) guidelines. You are solely
                                    responsible for obtaining and maintaining records of consent. Omnify is not responsible for messages sent to
                                    recipients who have not provided valid consent.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">6.2 Opt-Out & STOP Handling</h3>
                                <p className="text-gray-400">
                                    Omnify automatically processes opt-out requests to ensure full transparency and compliance. When a recipient
                                    replies with <strong className="text-white">STOP</strong>, <strong className="text-white">UNSUBSCRIBE</strong>,
                                    {' '}<strong className="text-white">CANCEL</strong>, <strong className="text-white">END</strong>, or
                                    {' '}<strong className="text-white">QUIT</strong>, they will be immediately unsubscribed from all future
                                    messages. Upon opting out, the end-user will receive a confirmation message acknowledging their request
                                    (e.g., &ldquo;You have been unsubscribed. You will no longer receive messages from [Business Name]. Reply
                                    HELP if you need assistance.&rdquo;).
                                </p>
                                <p className="text-gray-400 mt-2">
                                    You agree not to send messages to any recipient who has opted out, and you must not attempt to circumvent
                                    the opt-out mechanism. Opt-out processing is handled at the platform level and cannot be overridden.
                                    End-users may re-subscribe at any time by texting <strong className="text-white">START</strong> or by
                                    providing fresh consent through any of the methods described above.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">6.3 HELP & Support Responses</h3>
                                <p className="text-gray-400">
                                    When a recipient replies with <strong className="text-white">HELP</strong>, they will receive an automated
                                    response with your business contact information and instructions on how to opt out. For example:
                                    &ldquo;[Business Name]: For support, contact us at [phone/email]. To stop receiving messages, reply STOP.
                                    Msg & data rates may apply.&rdquo;
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">6.4 Message Content Standards</h3>
                                <p className="text-gray-400">
                                    All messages sent through the Service must comply with applicable telecommunications guidelines and
                                    carrier-acceptable use policies. The following content is strictly prohibited:
                                </p>
                                <ul className="list-disc pl-6 space-y-1.5 mt-2 text-gray-400 text-sm">
                                    <li>Unsolicited messages (spam) to individuals who have not opted in</li>
                                    <li>Phishing, fraud, or deceptive messages</li>
                                    <li>Messages that impersonate another entity or individual</li>
                                    <li>Content that violates any applicable law or regulation</li>
                                    <li>Misleading or false information</li>
                                    <li>Sexually explicit, hateful, or violent content</li>
                                    <li>Content promoting illegal substances or activities</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">6.5 Message Delivery</h3>
                                <p className="text-gray-400">
                                    You acknowledge that mobile carriers may filter, block, or delay messages based on content, volume, or
                                    other factors. Omnify does not guarantee delivery of every message and is not liable for messages that are
                                    filtered or blocked by carriers. Message delivery rates may vary depending on carrier policies and
                                    network conditions.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white font-medium mb-2">6.6 Your Responsibilities</h3>
                                <p className="text-gray-400">
                                    You are solely responsible for the content of messages sent through the Service and for ensuring compliance
                                    with all applicable laws and regulations, including but not limited to the Telephone Consumer Protection Act
                                    (TCPA), CAN-SPAM Act, and any applicable state or local messaging laws. Omnify provides tools and guidance
                                    to help you comply, but compliance is ultimately your responsibility. Violation of messaging regulations may
                                    result in message delivery restrictions, number deactivation, or account termination.
                                </p>
                            </div>

                            <div className="glass-card p-5 !rounded-xl hover:transform-none">
                                <h3 className="text-white font-medium mb-2">Sample Opt-In Disclosure</h3>
                                <p className="text-gray-400 text-sm italic">
                                    &ldquo;By providing your phone number, you consent to receive text messages from [Your Business Name]
                                    regarding your inquiry, appointment reminders, follow-ups, and service-related communications. Message
                                    frequency varies. Message and data rates may apply. Reply STOP to opt out at any time. Reply HELP
                                    for assistance. View our{' '}
                                    <a href="/privacy" className="text-emerald-400 underline hover:text-emerald-300">Privacy Policy</a>
                                    {' '}and{' '}
                                    <a href="/terms-and-conditions" className="text-emerald-400 underline hover:text-emerald-300">Terms of Service</a>.
                                    &rdquo;
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 7. Acceptable Use Policy */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">07</span>
                            Acceptable Use Policy
                        </h2>
                        <p>You agree not to use the Service to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-400">
                            <li>Violate any applicable local, state, national, or international law or regulation.</li>
                            <li>Send unsolicited communications (spam) or messages to persons who have not consented to receiving them.</li>
                            <li>Harass, abuse, threaten, or intimidate any person or entity.</li>
                            <li>Transmit any malware, viruses, or other harmful code.</li>
                            <li>Attempt to gain unauthorized access to any part of the Service, other user accounts, or third-party systems.</li>
                            <li>Use the Service for any illegal, fraudulent, or deceptive purpose.</li>
                            <li>Interfere with or disrupt the integrity or performance of the Service.</li>
                            <li>Resell, redistribute, or sublicense access to the Service without prior written consent from Omnify.</li>
                            <li>Use the Service to make robocalls or send automated messages without proper consent as required by law.</li>
                        </ul>
                        <p className="mt-3">
                            We reserve the right to suspend or terminate your account immediately and without prior notice if we determine, in
                            our sole discretion, that you have violated this Acceptable Use Policy.
                        </p>
                    </section>

                    {/* 8. Data Ownership & Intellectual Property */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">08</span>
                            Data Ownership & Intellectual Property
                        </h2>
                        <p>
                            You retain ownership of all data you input into or generate through the Service (&ldquo;Your Data&rdquo;). By
                            using the Service, you grant Omnify a limited, non-exclusive, worldwide license to use, process, and store Your
                            Data solely for the purpose of providing the Service to you.
                        </p>
                        <p className="mt-3">
                            All intellectual property rights in the Service, including software, design, trademarks, and AI models, are owned
                            by Omnify or its licensors. Nothing in these Terms grants you any rights to Omnify&rsquo;s intellectual property
                            beyond the limited right to use the Service as described herein.
                        </p>
                    </section>

                    {/* 9. Limitation of Liability */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">09</span>
                            Limitation of Liability & Disclaimer of Warranties
                        </h2>
                        <p className="uppercase text-sm tracking-wide text-gray-500 mb-3">
                            PLEASE READ THIS SECTION CAREFULLY.
                        </p>
                        <p>
                            THE SERVICE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF ANY
                            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                            PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                        </p>
                        <p className="mt-3">
                            OMNIFY DOES NOT WARRANT THAT: (A) THE SERVICE WILL MEET YOUR REQUIREMENTS; (B) THE SERVICE WILL BE UNINTERRUPTED,
                            TIMELY, SECURE, OR ERROR-FREE; (C) THE AI-GENERATED COMMUNICATIONS WILL BE ACCURATE, COMPLETE, OR FREE FROM ERRORS;
                            (D) ANY MESSAGES WILL BE DELIVERED SUCCESSFULLY TO ALL RECIPIENTS; OR (E) THE RESULTS OBTAINED FROM THE USE OF THE
                            SERVICE WILL BE ACCURATE OR RELIABLE.
                        </p>
                        <p className="mt-3">
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL OMNIFY, ITS DIRECTORS, EMPLOYEES, PARTNERS, OR AFFILIATES
                            BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION,
                            LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF THE
                            SERVICE. OMNIFY&rsquo;S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO OMNIFY IN THE TWELVE (12) MONTHS
                            PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
                        </p>
                    </section>

                    {/* 10. Termination */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">10</span>
                            Termination
                        </h2>
                        <p>
                            We may terminate or suspend your account and access to the Service immediately, without prior notice or liability,
                            for any reason, including if you breach these Terms. Upon termination, your right to use the Service will cease
                            immediately. You may terminate your account at any time by contacting us at{' '}
                            <a href="mailto:team@omnifycrm.com" className="text-emerald-400 hover:text-emerald-300 underline">
                                team@omnifycrm.com
                            </a>
                            .
                        </p>
                        <p className="mt-3">
                            Upon termination, we will make reasonable efforts to allow you to export Your Data for a period of thirty (30) days.
                            After this period, we may delete Your Data in accordance with our Privacy Policy. Any provisions of these Terms that
                            by their nature should survive termination shall survive, including but not limited to ownership provisions, warranty
                            disclaimers, and limitations of liability.
                        </p>
                    </section>

                    {/* 11. Governing Law */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">11</span>
                            Governing Law & Dispute Resolution
                        </h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States,
                            without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall
                            be resolved through binding arbitration in accordance with the rules of the American Arbitration Association (AAA).
                            The arbitration shall take place in the State of Delaware, and the arbitrator&rsquo;s decision shall be final and
                            binding. You agree to waive any right to a jury trial or to participate in a class action.
                        </p>
                    </section>

                    {/* 12. Changes to Terms */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">12</span>
                            Changes to Terms
                        </h2>
                        <p>
                            We reserve the right to modify or replace these Terms at any time. If we make material changes, we will provide at
                            least thirty (30) days&rsquo; notice before the new terms take effect, by posting the updated Terms on our website
                            and/or sending you a notification via email. Your continued use of the Service after the effective date of the revised
                            Terms constitutes your acceptance of the changes. If you do not agree to the new terms, you must stop using the
                            Service.
                        </p>
                    </section>

                    {/* 13. Contact */}
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                            <span className="text-emerald-400 font-mono text-sm">13</span>
                            Contact Information
                        </h2>
                        <p>
                            If you have any questions about these Terms, please contact us:
                        </p>
                        <div className="mt-4 glass-card p-6 !rounded-xl hover:transform-none">
                            <p className="text-white font-medium mb-2">Omnify Inc.</p>
                            <p className="text-gray-400 text-sm">
                                Email:{' '}
                                <a href="mailto:team@omnifycrm.com" className="text-emerald-400 hover:text-emerald-300 underline">
                                    team@omnifycrm.com
                                </a>
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                Website:{' '}
                                <a href="https://omnifycrm.com" className="text-emerald-400 hover:text-emerald-300 underline">
                                    omnifycrm.com
                                </a>
                            </p>
                        </div>
                    </section>
                </div>

                {/* Bottom navigation */}
                <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <Link
                        href="/privacy"
                        className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                    >
                        Read our Privacy Policy →
                    </Link>
                    <p className="text-xs text-gray-600">© {new Date().getFullYear()} Omnify Inc. All rights reserved.</p>
                </div>
            </main>
        </div>
    );
}
