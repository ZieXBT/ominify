'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full py-8 px-6 border-t border-white/[0.04] bg-[#0a0a0f]">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-2.5 group"
                        whileHover={{ x: 2 }}
                    >
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                            <Zap className="w-4 h-4 text-white" fill="currentColor" />
                        </div>
                        <span className="text-lg font-bold text-white">Omnify</span>
                    </motion.a>

                    {/* Essential Links */}
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                            Terms of Service
                        </a>
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
