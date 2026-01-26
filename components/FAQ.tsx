'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "How long does setup take?",
        answer: "Most customers are up and running in 15-30 minutes. Connect your phone number, add your calendar, tell the AI about your business, and you're live."
    },
    {
        question: "Can I use my existing phone number?",
        answer: "Yes. We integrate with your current phone system. No need to change your number or tell customers anything different."
    },
    {
        question: "What if the AI can't handle a question?",
        answer: "You set the rules. AI can transfer to you or your team instantly, take a message, or schedule a callback. You're always in control."
    },
    {
        question: "Does it integrate with my CRM?",
        answer: "We integrate with ServiceTitan, Housecall Pro, Jobber, and more. All leads and conversations sync automatically."
    },
    {
        question: "Is there a contract?",
        answer: "No. Month-to-month. Cancel anytime. We keep customers by being useful, not by locking them in."
    },
    {
        question: "What happens to the 50% discount?",
        answer: "Once you're on the waitlist, your 50% lifetime discount is locked in. You'll pay $150/month instead of $300 — forever."
    },
    {
        question: "Will customers know they're talking to AI?",
        answer: "The AI introduces itself by name (you choose the name). It's transparent but conversational. Most customers don't mind — they care about getting help fast."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="w-full py-24 px-6 md:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Questions? <span className="text-gray-500">We've got answers.</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left text-white hover:bg-white/5 transition-colors"
                            >
                                <span className="font-medium text-lg">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="w-5 h-5 text-emerald-400 shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-500 shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
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
