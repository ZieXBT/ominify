'use client';

import { motion } from 'framer-motion';

const stats = [
    {
        percentage: "27%",
        label: "of calls go unanswered",
        subtext: "by service contractors"
    },
    {
        percentage: "40%",
        label: "of calls come after 5pm",
        subtext: "when your office is closed"
    },
    {
        percentage: "5 min",
        label: "response = 21x conversions",
        subtext: "vs the 42-hour industry average"
    }
];

export function ProblemSection() {
    return (
        <section className="w-full py-24 px-6 md:px-8 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        The calls you're missing are <span className="text-emerald-400">costing you jobs</span>.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-400 max-w-2xl mx-auto"
                    >
                        Your competitors are responding in minutes. If you're taking hours, you've already lost.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-2xl font-bold text-emerald-400">{stat.percentage}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{stat.label}</h3>
                            <p className="text-sm text-gray-400">{stat.subtext}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
