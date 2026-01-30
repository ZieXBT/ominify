'use client';

import { motion } from 'framer-motion';
import { Check, X, Award, Crown } from 'lucide-react';

const comparisonData = [
    { feature: "24/7 coverage", receptionist: false, competitors: true, us: true },
    { feature: "Answers in <3s", receptionist: false, competitors: true, us: true },
    { feature: "Cross-channel memory", receptionist: false, competitors: false, us: true, highlight: true },
    { feature: "Books estimates", receptionist: true, competitors: true, us: true },
    { feature: "Handles 100+ calls at once", receptionist: false, competitors: true, us: true },
    { feature: "Multi-language support", receptionist: false, competitors: false, us: true, highlight: true },
    { feature: "Cost/month", receptionist: "$3,500+", competitors: "$600+", us: "$99", isText: true },
];

export function ComparisonTableHomeService() {
    return (
        <section className="w-full py-20 px-6 md:px-8 relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
                        <Award className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Comparison</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
                        Cheaper than a receptionist. <br /><span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Smarter than another voicemail.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card overflow-hidden relative"
                >
                    {/* Omnify column highlight */}
                    <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-b from-emerald-500/[0.08] via-emerald-500/[0.04] to-emerald-500/[0.08] pointer-events-none" />

                    {/* Header */}
                    <div className="grid grid-cols-4 p-5 md:p-6 border-b border-white/[0.06] bg-white/[0.02]">
                        <div className="col-span-1 flex items-center">
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</span>
                        </div>
                        <div className="text-center">
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Receptionist</span>
                        </div>
                        <div className="text-center">
                            <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Other AI</span>
                        </div>
                        <div className="text-center relative">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                <Crown className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Omnify</span>
                            </div>
                        </div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-white/[0.04]">
                        {comparisonData.map((row, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={`grid grid-cols-4 p-4 md:p-5 items-center hover:bg-white/[0.02] transition-colors ${row.highlight ? 'bg-emerald-500/[0.02]' : ''}`}
                            >
                                <div className="col-span-1 text-sm font-medium text-gray-300 pr-2 flex items-center gap-2">
                                    {row.feature}
                                    {row.highlight && (
                                        <span className="px-1.5 py-0.5 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 rounded uppercase">New</span>
                                    )}
                                </div>

                                {/* Receptionist */}
                                <div className="flex justify-center">
                                    {row.isText ? (
                                        <span className="text-xs text-gray-500">{row.receptionist}</span>
                                    ) : row.receptionist ? (
                                        <div className="w-6 h-6 rounded-lg bg-gray-800/50 flex items-center justify-center border border-white/5">
                                            <Check className="w-3.5 h-3.5 text-gray-400" />
                                        </div>
                                    ) : (
                                        <div className="w-6 h-6 rounded-lg bg-red-500/5 flex items-center justify-center border border-red-500/10">
                                            <X className="w-3.5 h-3.5 text-red-400/60" />
                                        </div>
                                    )}
                                </div>

                                {/* Competitors */}
                                <div className="flex justify-center">
                                    {row.isText ? (
                                        <span className="text-xs text-gray-500">{row.competitors}</span>
                                    ) : row.competitors ? (
                                        <div className="w-6 h-6 rounded-lg bg-gray-800/50 flex items-center justify-center border border-white/5">
                                            <Check className="w-3.5 h-3.5 text-gray-400" />
                                        </div>
                                    ) : (
                                        <div className="w-6 h-6 rounded-lg bg-red-500/5 flex items-center justify-center border border-red-500/10">
                                            <X className="w-3.5 h-3.5 text-red-400/60" />
                                        </div>
                                    )}
                                </div>

                                {/* Us */}
                                <div className="flex justify-center">
                                    {row.isText ? (
                                        <span className="text-sm font-bold text-emerald-400 bg-emerald-500/15 px-3 py-1 rounded-lg border border-emerald-500/20">{row.us}</span>
                                    ) : row.us ? (
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25"
                                        >
                                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                        </motion.div>
                                    ) : (
                                        <div className="w-6 h-6 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                            <X className="w-3.5 h-3.5 text-red-400" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
