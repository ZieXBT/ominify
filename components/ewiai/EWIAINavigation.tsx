'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export function EWIAINavigation() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { href: "/ewiai#features", label: "Features" },
        { href: "/ewiai#how-it-works", label: "How it Works" },
        { href: "/ewiai#channels", label: "Channels" },
        { href: "/ewiai/case-studies", label: "Case Studies" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
                    ? 'bg-[#0a0b1e]/90 backdrop-blur-xl border-b border-transparent py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
                    : 'py-5 bg-transparent'}`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <motion.a
                        href="/ewiai"
                        className="flex items-center gap-2.5 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="relative">
                            <img src="/ewiai-logo.avif" alt="Elevate With AI" className="w-9 h-9 rounded-xl object-cover" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">Elevate With AI</span>
                    </motion.a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-4/5 transition-all duration-300 rounded-full" />
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/ewiai/contact"
                            className="relative overflow-hidden bg-[#2a24d6] hover:bg-[#3530e8] text-white font-semibold px-7 py-2.5 rounded-xl shadow-lg shadow-[#2a24d6]/30 hover:shadow-[#2a24d6]/50 transition-all duration-300 text-sm"
                        >
                            Book a call
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <AnimatePresence mode="wait">
                            {mobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-5 h-5" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-5 h-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="md:hidden absolute top-full left-0 right-0 bg-[#0a0b1e]/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden shadow-2xl"
                        >
                            <div className="p-6 flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="pt-2"
                                >
                                    <Link
                                        href="/ewiai/contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="w-full block text-center bg-[#2a24d6] hover:bg-[#3530e8] text-white font-semibold py-3 rounded-xl shadow-lg shadow-[#2a24d6]/30 transition-all duration-300"
                                    >
                                        Book a call
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}
