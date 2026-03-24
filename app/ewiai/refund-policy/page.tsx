'use client';

import { motion } from 'framer-motion';
import { EWIAINavigation } from '@/components/ewiai/EWIAINavigation';
import { EWIAIFooter } from '@/components/ewiai/EWIAIFooter';
import { EWIAIFloatingOrbs } from '@/components/ewiai/EWIAIFloatingOrbs';

export default function RefundPolicyPage() {
    return (
        <div className="min-h-screen relative flex flex-col items-center bg-[#0a0b1e] ewiai-page">
            <div className="ewiai-bg-gradient" />
            <div className="ewiai-bg-grid" />
            <EWIAIFloatingOrbs />
            <EWIAINavigation />

            <main className="w-full relative z-10 flex-1">
                <section className="w-full max-w-3xl mx-auto px-5 pt-32 pb-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Refund Policy</h1>

                        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-gray-300 leading-relaxed">
                            <p>
                                At Elevate With AI, we are committed to providing high-quality AI-powered solutions to enhance your business operations. To ensure clarity and fairness, we have established the following No Refund Policy:
                            </p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">1. Non-Refundable Payments</h2>
                            <p>All payments made for services provided by Elevate With AI are non-refundable. This includes, but is not limited to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Prepaid balances for usage of our AI-powered voice and chat automation systems.</li>
                                <li>Fees for setup, customization, or implementation of services.</li>
                                <li>Any other payments made in connection with the use of our platform.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">2. Exceptions</h2>
                            <p>Refunds will only be considered in cases where a written agreement explicitly states otherwise. Such agreements must be documented and signed by an authorized representative of Elevate With AI.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">3. Service Quality</h2>
                            <p>While we strive to maintain uninterrupted, high-quality services, occasional technical issues or interruptions may occur. These do not qualify as grounds for a refund. However, we are committed to resolving any service-related issues promptly.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">4. Disputes and Chargebacks</h2>
                            <p>Any disputes regarding payments should be communicated to us at <a href="mailto:support@ewiai.com" className="text-blue-400 hover:underline">support@ewiai.com</a>. Unauthorized chargebacks will be contested, and users may face account suspension for initiating fraudulent claims.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">5. Acknowledgment of Policy</h2>
                            <p>By using our services and making payments, you acknowledge and agree to this No Refund Policy.</p>

                            <p className="text-gray-500 mt-8">
                                For further questions about our policies, please contact us at <a href="mailto:support@ewiai.com" className="text-blue-400 hover:underline">support@ewiai.com</a>.
                            </p>
                            <p className="text-gray-500">Effective Date: 13/12/2024</p>
                        </div>
                    </motion.div>
                </section>
            </main>

            <EWIAIFooter />
        </div>
    );
}
