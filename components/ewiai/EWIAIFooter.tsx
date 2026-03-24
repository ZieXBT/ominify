'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function EWIAIFooter() {
    return (
        <footer className="w-full py-16 px-6 border-t border-white/[0.04] bg-[#0a0b1e]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                    {/* Brand */}
                    <motion.div className="md:col-span-1" whileHover={{ x: 2 }}>
                        <Link href="/ewiai" className="flex items-center gap-2.5 mb-4">
                            <img src="/ewiai-logo.avif" alt="Elevate With AI" className="w-8 h-8 rounded-xl object-cover" />
                            <span className="text-lg font-bold text-white">Elevate With AI</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Revolutionizing businesses through automated customer acquisition and support using AI Voice Agents.
                        </p>
                    </motion.div>

                    {/* Pages */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-[#2a24d6]" />
                            <h3 className="text-white font-semibold text-sm">Pages</h3>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <Link href="/ewiai#features" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                                Features
                            </Link>
                            <Link href="/ewiai#how-it-works" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                                How it Works
                            </Link>
                            <Link href="/ewiai#channels" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                                Channels
                            </Link>
                            <Link href="/ewiai/case-studies" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                                Case Studies
                            </Link>
                        </div>
                    </div>

                    {/* Information */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-[#2a24d6]" />
                            <h3 className="text-white font-semibold text-sm">Information</h3>
                        </div>
                        <div className="flex flex-col gap-2.5">
                            <Link href="/ewiai/contact" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                                Contact
                            </Link>
                            <Link href="/ewiai/refund-policy" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                                Refund Policy
                            </Link>
                            <Link href="/ewiai/terms" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                                Terms and Conditions
                            </Link>
                            <Link href="/ewiai/privacy" className="text-sm text-gray-500 hover:text-blue-400 transition-colors">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    {/* CTA */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-[#2a24d6]" />
                            <h3 className="text-white font-semibold text-sm">Get Started</h3>
                        </div>
                        <p className="text-gray-500 text-sm mb-4">Ready to automate your business?</p>
                        <Link
                            href="/ewiai/contact"
                            className="inline-flex items-center bg-[#2a24d6] hover:bg-[#3530e8] text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-[#2a24d6]/20 hover:shadow-[#2a24d6]/40 transition-all duration-300 text-sm"
                        >
                            Book a call
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} Elevate With AI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="/ewiai/privacy" className="text-xs text-gray-600 hover:text-blue-400 transition-colors">
                            Privacy
                        </Link>
                        <Link href="/ewiai/terms" className="text-xs text-gray-600 hover:text-blue-400 transition-colors">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
