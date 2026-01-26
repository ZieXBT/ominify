'use client';

import { motion } from 'framer-motion';

const industries = [
    {
        icon: "❄️",
        name: "HVAC",
        quote: "40% of our calls were after-hours emergencies. Now AI handles triage and books slots.",
    },
    {
        icon: "🔧",
        name: "Plumbing",
        quote: "We were missing calls during jobs. Now every call gets answered and I get a text summary.",
    },
    {
        icon: "⚡",
        name: "Electrical",
        quote: "Our office manager was drowning. AI now handles 70% of routine inquiries automatically.",
    },
    {
        icon: "🏠",
        name: "Roofing",
        quote: "Estimate follow-ups used to fall through. Now AI chases them until they schedule.",
    }
];

export function UseCases() {
    return (
        <section className="w-full py-24 px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Built for contractors tired of <br /><span className="text-red-400">losing jobs to voicemail</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 flex gap-6 items-start"
                        >
                            <div className="text-4xl bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                                {industry.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
                                <p className="text-gray-400 italic leading-relaxed">"{industry.quote}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
