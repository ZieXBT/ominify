'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
    variant?: 'default' | 'gradient' | 'dots';
}

export function SectionDivider({ variant = 'default' }: SectionDividerProps) {
    if (variant === 'gradient') {
        return (
            <div className="w-full h-px relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"
                    initial={{ opacity: 0, x: '-100%' }}
                    whileInView={{ opacity: 1, x: '0%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                />
            </div>
        );
    }

    if (variant === 'dots') {
        return (
            <div className="w-full py-8 flex items-center justify-center gap-2">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-emerald-500/30"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className="w-full max-w-6xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        </div>
    );
}
