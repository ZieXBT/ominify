'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full py-8 px-6 border-t border-white/[0.04] bg-[#0a0a0f]">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <motion.div
                        className="group"
                        whileHover={{ x: 2 }}
                    >
                        <Link href="/" className="flex items-center gap-2.5">
                            <Image src="/omnify-logo.png" alt="Omnify" width={32} height={32} className="w-8 h-8 rounded-xl" />
                            <span className="text-lg font-bold text-white">Omnify</span>
                        </Link>
                    </motion.div>

                    {/* Essential Links */}
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-and-conditions" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                            Terms of Service
                        </Link>
                    </div>

                    {/* Copyright */}
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} Omnify Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
}
