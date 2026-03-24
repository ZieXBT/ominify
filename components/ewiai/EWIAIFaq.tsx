'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What types of businesses benefit from AI Voice Agents?",
        answer: "AI Voice Agents are ideal for businesses managing or looking to start high-volume inbound and outbound calling, such as real estate, solar energy, property management, and SaaS companies. They streamline customer acquisition, support, and appointment booking processes."
    },
    {
        question: "How powerful are AI Voice Agents in terms of scale?",
        answer: "Our AI Voice Agents can make up to 10,000 calls in just 2 hours, handling inbound and outbound calls simultaneously without breaking a sweat. This allows your business to engage with an enormous number of prospects or customers in a fraction of the time."
    },
    {
        question: "Is the AI system customized for my business?",
        answer: "Yes, the entire system is tailored to your specific business needs. From call scripts to tone and behavior, we fully customize the AI Voice Agents to align with your goals—whether it's increasing appointments, managing leads, or automating customer service."
    },
    {
        question: "What results can I expect from using AI Voice Agents?",
        answer: "Our clients typically experience up to an 80% appointment booking rate and a 70% reduction in manual outreach. The AI runs around the clock, making sure no lead slips through the cracks, while you enjoy automated growth without lifting a finger."
    },
    {
        question: "Will I still need human agents?",
        answer: "Our AI Voice Agents handle the bulk of high-volume, repetitive tasks, allowing your human agents to focus on more strategic conversations. They work together to supercharge your business operations—maximizing efficiency and boosting growth effortlessly."
    },
    {
        question: "How do AI Voice Agents improve customer experience?",
        answer: "AI Voice Agents provide instant, consistent responses and are available 24/7, reducing wait times and ensuring customers are always attended to. They handle high volumes efficiently, making interactions smoother and faster, while also transferring complex cases to human agents when needed for a personal touch."
    }
];

export function EWIAIFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-20 px-6 relative">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">Questions</span>
                    </h2>
                </motion.div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300 text-left group"
                            >
                                <span className="text-white font-medium text-sm md:text-base pr-4">
                                    {faq.question}
                                </span>
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center">
                                    {openIndex === index ? (
                                        <Minus className="w-4 h-4 text-blue-400" />
                                    ) : (
                                        <Plus className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                    )}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-5 pb-5 pt-3 text-gray-400 text-sm leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
