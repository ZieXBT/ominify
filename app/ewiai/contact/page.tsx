'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';
import { EWIAINavigation } from '@/components/ewiai/EWIAINavigation';
import { EWIAIFooter } from '@/components/ewiai/EWIAIFooter';
import { EWIAIFloatingOrbs } from '@/components/ewiai/EWIAIFloatingOrbs';

export default function EWIAIContactPage() {
    return (
        <div className="min-h-screen relative flex flex-col items-center bg-[#0a0b1e] ewiai-page">
            <div className="ewiai-bg-gradient" />
            <div className="ewiai-bg-grid" />
            <EWIAIFloatingOrbs />
            <EWIAINavigation />

            <main className="w-full relative z-10 flex-1">
                <section className="w-full max-w-6xl mx-auto px-5 pt-32 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Get in touch.
                        </h1>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto">
                            Ready to scale your brand to new heights? Book a call and let&apos;s discuss how we can bring your vision to life.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mx-auto"
                    >
                        <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-blue-500/5">
                            <div
                                className="calendly-inline-widget w-full"
                                data-url="https://calendly.com/ewiai/dfy-ai-sales-system?hide_gdpr_banner=1&primary_color=3b82f6"
                                style={{ minWidth: '320px', height: '1000px' }}
                            />
                        </div>
                        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

                        <p className="text-center text-gray-500 text-xs mt-6">
                            Disclaimer: By providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message &amp; data rates may apply. You can reply STOP to opt-out of further messaging.
                        </p>
                    </motion.div>
                </section>
            </main>

            <EWIAIFooter />
        </div>
    );
}
