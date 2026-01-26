'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="glass-card p-6 md:p-8 group relative"
        >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-emerald-600/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Preview Window Accent */}
            <div className="bg-[#0d0d14] border border-white/[0.06] rounded-xl overflow-hidden mb-6 relative">
                <div className="bg-white/[0.02] border-b border-white/[0.04] px-4 py-2.5 flex items-center gap-2">
                    <div className="dot dot-red"></div>
                    <div className="dot dot-yellow"></div>
                    <div className="dot dot-green"></div>
                    <span className="ml-auto text-[10px] text-gray-600 font-mono">preview</span>
                </div>
                <div className="p-6 flex items-center justify-center min-h-[110px] bg-gradient-to-br from-emerald-500/[0.04] via-transparent to-emerald-600/[0.02] relative">
                    {/* Animated background pulse */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            className="w-24 h-24 rounded-full bg-emerald-500/10 blur-xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </div>
                    <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 flex items-center justify-center border border-emerald-500/20 relative z-10 shadow-lg shadow-emerald-500/10"
                        whileHover={{
                            scale: 1.1,
                            rotate: 5,
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <Icon className="w-7 h-7 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                    </motion.div>
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-50 transition-colors">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/30 transition-all duration-500" />
        </motion.div>
    );
}
