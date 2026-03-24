'use client';

import { motion } from 'framer-motion';
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
                <section className="w-full max-w-5xl mx-auto px-5 pt-32 pb-20">
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
                        className="max-w-3xl mx-auto"
                    >
                        {/* Calendly Embed Placeholder */}
                        <div className="ewiai-glass-card p-8 md:p-12 border-blue-500/10">
                            <div className="w-full min-h-[600px] rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center">
                                {/* Replace this div with your Calendly embed */}
                                <div className="text-center p-8">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">Calendly Booking Widget</h3>
                                    <p className="text-gray-500 text-sm max-w-sm mx-auto">
                                        Your Calendly embed will appear here. Replace this placeholder with your Calendly inline widget code.
                                    </p>
                                </div>
                            </div>
                        </div>

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
