'use client';

import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
}

function AnimatedCounter({ value, suffix = '', prefix = '', duration = 2 }: AnimatedCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration,
                ease: [0.22, 1, 0.36, 1],
                onUpdate: (latest) => setDisplayValue(Math.round(latest)),
            });
            return () => controls.stop();
        }
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
            {prefix}{displayValue}{suffix}
        </span>
    );
}

const stats = [
    {
        value: 97,
        suffix: '%',
        label: 'of missed callers',
        sublabel: "hang up — no voicemail",
        color: 'text-white',
    },
    {
        value: 78,
        suffix: '%',
        label: 'of homeowners hire',
        sublabel: 'the first company that answers',
        color: 'text-emerald-400',
        highlight: true,
    },
    {
        value: 52,
        prefix: '$',
        suffix: 'K',
        label: 'Lost Annually From',
        sublabel: '2 Missed Calls/Week',
        color: 'text-white',
    },
];

export function SocialProofHomeService() {
    return (
        <section className="w-full py-16 border-y border-white/[0.04] bg-gradient-to-b from-[#0a0a0f]/50 to-[#0a0a0f] backdrop-blur-sm relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03),transparent_70%)]" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-0">
                    {stats.map((stat, index) => (
                        <div key={index} className="contents">
                            {index > 0 && (
                                <div className="hidden md:flex items-center justify-center px-12">
                                    <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                </div>
                            )}
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                className="text-center group"
                            >
                                <div className="relative inline-block">
                                    {stat.highlight && (
                                        <div className="absolute -inset-4 bg-emerald-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    )}
                                    <p className={`text-5xl md:text-6xl font-bold ${stat.color} mb-3 relative tracking-tight`}>
                                        <AnimatedCounter
                                            value={stat.value}
                                            suffix={stat.suffix}
                                            prefix={stat.prefix}
                                            duration={2.5}
                                        />
                                    </p>
                                </div>
                                <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-medium leading-relaxed">
                                    {stat.label}<br />{stat.sublabel}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
