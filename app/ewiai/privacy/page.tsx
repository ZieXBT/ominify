'use client';

import { motion } from 'framer-motion';
import { EWIAINavigation } from '@/components/ewiai/EWIAINavigation';
import { EWIAIFooter } from '@/components/ewiai/EWIAIFooter';
import { EWIAIFloatingOrbs } from '@/components/ewiai/EWIAIFloatingOrbs';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen relative flex flex-col items-center bg-[#0a0b1e] ewiai-page">
            <div className="ewiai-bg-gradient" />
            <div className="ewiai-bg-grid" />
            <EWIAIFloatingOrbs />
            <EWIAINavigation />

            <main className="w-full relative z-10 flex-1">
                <section className="w-full max-w-3xl mx-auto px-5 pt-32 pb-20">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>

                        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-gray-300 leading-relaxed">
                            <p>At Elevate With AI, your privacy is our priority. This policy explains how we collect, use, and protect your personal information when you interact with our website and platform.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">1. Information We Collect</h2>
                            <p>We may collect personal details such as your name, email address, phone number, and browsing data when you visit our website.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">2. How We Use Your Information</h2>
                            <p>We use your information to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Provide services and customer support.</li>
                                <li>Enhance your overall user experience.</li>
                                <li>Send you updates and communications for which you have provided your consent.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">3. Data Security</h2>
                            <p>We implement robust security measures to safeguard your personal information against unauthorized access or misuse.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">4. Cookies</h2>
                            <p>Our website uses cookies to improve your browsing experience and to analyze site traffic.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">5. Data Sharing and Third Parties</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li><strong className="text-gray-300">Mobile Information:</strong> No mobile information, including phone numbers, will be shared with any third parties, affiliates, or partners for marketing or promotional purposes.</li>
                                <li><strong className="text-gray-300">Text Messaging Data:</strong> All text messaging originator opt-in data and related consent details will remain confidential and will not be shared with any third parties.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">6. Your Responsibilities</h2>
                            <p>You are responsible for the data you upload, store, or process through our platform. This includes ensuring that your data complies with applicable laws and obtaining any necessary consents for contacting individuals. Elevate With AI is not liable for the content, accuracy, or legality of the data you provide.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">7. Platform Security</h2>
                            <p>While we take measures to secure our platform and systems, ethical management and use of your data is your responsibility.</p>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">8. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul className="list-disc list-inside space-y-2 text-gray-400">
                                <li>Opt out of marketing communications.</li>
                                <li>Request access to, update, or delete your personal information.</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-white mt-8 mb-3">9. Contact Us</h2>
                            <p>If you have any questions about this policy, please contact us at: <a href="mailto:support@ewiai.com" className="text-blue-400 hover:underline">support@ewiai.com</a></p>
                        </div>
                    </motion.div>
                </section>
            </main>

            <EWIAIFooter />
        </div>
    );
}
