'use client';

import { motion } from 'framer-motion';
import { EWIAINavigation } from '@/components/ewiai/EWIAINavigation';
import { EWIAIFooter } from '@/components/ewiai/EWIAIFooter';
import { EWIAIFloatingOrbs } from '@/components/ewiai/EWIAIFloatingOrbs';

export default function TermsPage() {
    return (
        <div className="min-h-screen relative flex flex-col items-center bg-[#0a0b1e] ewiai-page">
            <div className="ewiai-bg-gradient" />
            <div className="ewiai-bg-grid" />
            <EWIAIFloatingOrbs />
            <EWIAINavigation />

            <main className="w-full relative z-10 flex-1">
                <section className="w-full max-w-3xl mx-auto px-5 pt-32 pb-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms and Conditions</h1>
                        <p className="text-gray-400 mb-8 text-sm">
                            These Terms and Conditions (&ldquo;Agreement&rdquo;) govern your use of the website ElevateWithAI.com (&ldquo;Website&rdquo;) and all products and services provided by Elevate With AI LLC (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). By accessing or using the Website or engaging with our services, you agree to be legally bound by the terms of this Agreement.
                        </p>
                        <p className="text-gray-500 mb-8 text-sm">If you do not agree with any part of these Terms, you must not use our Website or services.</p>

                        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-gray-300 leading-relaxed">
                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">1. Services Offered</h2>
                            <p>Elevate With AI provides AI-driven software and automation services, including but not limited to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>AI voice and chat agents</li>
                                <li>CRM and third-party integrations</li>
                                <li>API workflows</li>
                                <li>Custom campaign scripting and automation pipelines</li>
                                <li>Usage-based billing and minutes-based credits (&ldquo;Minutes&rdquo;)</li>
                            </ul>
                            <p>All services are provided in accordance with a written agreement, proposal, or service contract signed or accepted electronically by both parties.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">2. User Eligibility</h2>
                            <p>By using this Website or our services, you confirm that you are at least 18 years of age and authorized to enter into this Agreement on behalf of your company or organization.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">3. Ownership and Intellectual Property</h2>
                            <p>All intellectual property, including source code, scripts, agent logic, visuals, designs, documentation, and custom automations created by or for Elevate With AI, remains the exclusive property of the Company unless explicitly transferred by contract.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">4. Payment Terms</h2>
                            <h3 className="text-lg font-medium text-white mt-4 mb-2">4.1 Billing &amp; Invoicing</h3>
                            <p>Clients agree to pay all fees outlined in service agreements, proposals, or invoices. All amounts are due in accordance with the billing schedule and method specified in the agreement.</p>

                            <h3 className="text-lg font-medium text-white mt-4 mb-2">4.2 Minutes-Based Recharge and Usage</h3>
                            <p>For usage-based voice or SMS AI systems, Clients may be required to pre-purchase Minutes (&ldquo;Recharge&rdquo;) to continue service operation. All Minutes purchases are final, non-refundable, and non-transferrable once the payment is processed.</p>

                            <h3 className="text-lg font-medium text-white mt-4 mb-2">4.3 Chargebacks and Disputes</h3>
                            <p>In the event of a payment dispute or chargeback initiated by the Client for any Minutes Recharge, the Company reserves the right to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Immediately suspend all services, agents, and access to related software;</li>
                                <li>Seek full reimbursement including chargeback fees, penalties, and administrative costs;</li>
                                <li>Pursue legal remedies, including but not limited to debt collection, legal filing, and recovery of associated damages.</li>
                            </ul>
                            <p>Chargebacks on Minute recharges will not be honored under any circumstances and are strictly prohibited. All usage is tracked and auditable, and disputes related to Minutes must be addressed directly with the Company.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">5. Refund Policy</h2>
                            <p>Except as otherwise stated in a specific service contract, all fees and payments made to Elevate With AI are non-refundable, including but not limited to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Onboarding fees</li>
                                <li>Setup charges</li>
                                <li>Custom development</li>
                                <li>Minutes or usage-based credits</li>
                            </ul>
                            <p>Partial project completion, early termination, or dissatisfaction with performance does not entitle the Client to a refund unless explicitly agreed in writing.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">6. Confidentiality</h2>
                            <p>Each party agrees to treat all data, strategies, login credentials, processes, and scripts as confidential. Disclosure to third parties without prior written consent is strictly prohibited. This clause survives the termination of this Agreement.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">7. Termination of Services</h2>
                            <p>We reserve the right to suspend or terminate access to our services immediately if:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Payments are overdue</li>
                                <li>Terms of service are violated</li>
                                <li>Fraudulent or abusive behavior is detected</li>
                            </ul>
                            <p>In the event of early termination initiated by the Client, all outstanding balances will be due immediately and access to software and agents will be revoked.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">8. Limitation of Liability</h2>
                            <p>Under no circumstances shall Elevate With AI be liable for:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Loss of profits, business, or data</li>
                                <li>Downtime due to external services or vendors</li>
                                <li>Indirect or consequential damages</li>
                            </ul>
                            <p>Liability for any claim shall not exceed the amount paid by the Client in the last 30 days preceding the claim.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">9. Governing Law and Dispute Resolution</h2>
                            <p>This Agreement shall be governed by and construed in accordance with the laws of the State of New Mexico, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration in United States, unless otherwise agreed by both parties.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">10. Amendments</h2>
                            <p>Elevate With AI reserves the right to modify these Terms at any time. Updates will be posted on the Website. Continued use of the Website or services after updates constitutes acceptance.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">11. Contact Information</h2>
                            <p>For legal inquiries or to request clarification on any term: <a href="mailto:support@ewiai.com" className="text-blue-400 hover:underline">support@ewiai.com</a></p>
                        </div>
                    </motion.div>
                </section>
            </main>

            <EWIAIFooter />
        </div>
    );
}
