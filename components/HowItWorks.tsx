'use client';

import { motion } from 'framer-motion';
import { Phone, Brain, Zap, Sparkles } from 'lucide-react';

const steps = [
    {
        number: "01",
        icon: Phone,
        title: "Connect your phone",
        description: "Link your existing phone number and calendar. Takes 2 minutes.",
        gradient: "from-blue-500 to-cyan-400",
        bgGradient: "from-blue-500/20 to-blue-600/5",
        iconColor: "text-blue-400",
    },
    {
        number: "02",
        icon: Brain,
        title: "Train your AI",
        description: "Tell it your services, pricing, and service area in plain English.",
        gradient: "from-emerald-500 to-teal-400",
        bgGradient: "from-emerald-500/20 to-emerald-600/5",
        iconColor: "text-emerald-400",
    },
    {
        number: "03",
        icon: Zap,
        title: "Go live",
        description: "AI starts handling calls, texts, and chats instantly. Watch your calendar fill up.",
        gradient: "from-purple-500 to-pink-400",
        bgGradient: "from-purple-500/20 to-purple-600/5",
        iconColor: "text-purple-400",
    }
];

export function HowItWorks() {
    return (
        <section className="w-full py-20 px-6 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Simple Setup</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
                        Up and running in <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">15 minutes</span>.
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">No coding required. Just simple setup.</p>
                </motion.div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Connecting Line - Centered with icons */}
                    <div className="hidden md:block absolute top-16 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-0.5">
                        <div className="h-full bg-gradient-to-r from-blue-500/50 via-emerald-500/50 to-purple-500/50 rounded-full" />
                        <motion.div
                            className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"
                            animate={{ x: ['-100%', '500%'] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Icon Container */}
                                <div className="relative mb-8">
                                    {/* Icon Box */}
                                    <motion.div
                                        className={`relative w-32 h-32 rounded-2xl bg-gradient-to-br ${step.bgGradient} flex items-center justify-center border border-white/10 backdrop-blur-sm overflow-hidden`}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {/* Top shine */}
                                        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.08] to-transparent" />

                                        {/* Icon */}
                                        <step.icon className={`w-12 h-12 ${step.iconColor}`} strokeWidth={1.5} />
                                    </motion.div>

                                    {/* Step Number Badge */}
                                    <motion.div
                                        className={`absolute -top-2 -right-2 w-9 h-9 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white font-bold text-xs shadow-lg`}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {step.number}
                                    </motion.div>
                                </div>

                                {/* Text Content */}
                                <h3 className="text-lg font-bold text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-[220px]">
                                    {step.description}
                                </p>

                                {/* Mobile connector */}
                                {index < steps.length - 1 && (
                                    <div className="md:hidden mt-6 mb-2 flex flex-col items-center gap-1">
                                        <div className="w-0.5 h-8 bg-gradient-to-b from-white/20 to-transparent" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom stat */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-500 text-sm">
                        Average setup time: <span className="text-emerald-400 font-semibold">12 minutes</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
