'use client';

import { motion } from 'framer-motion';
import { Database, MessageCircle, CreditCard, Plug } from 'lucide-react';

// Google Calendar Icon
const GoogleCalendarIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
        <path d="M9 4V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 4V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="7" y="14" width="3" height="3" rx="0.5" fill="currentColor" />
        <rect x="14" y="14" width="3" height="3" rx="0.5" fill="currentColor" />
    </svg>
);

// Microsoft Calendar/Outlook Icon
const MicrosoftCalendarIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
        <path d="M9 4V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 4V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 15l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const integrations = [
    {
        name: "ServiceTitan",
        icon: Database,
        description: "Full 2-way sync for jobs, customers, and estimates.",
        colSpan: 2,
        gradient: "from-blue-500/20 to-blue-600/5",
        border: "group-hover:border-blue-500/30"
    },
    {
        name: "Google Calendar",
        icon: GoogleCalendarIcon,
        description: "Sync appointments directly to Google Calendar.",
        colSpan: 1,
        gradient: "from-red-500/20 to-yellow-600/5",
        border: "group-hover:border-red-500/30",
        isCustomIcon: true
    },
    {
        name: "Microsoft Calendar",
        icon: MicrosoftCalendarIcon,
        description: "Enterprise Outlook calendar integration.",
        colSpan: 1,
        gradient: "from-blue-600/20 to-blue-700/5",
        border: "group-hover:border-blue-600/30",
        isCustomIcon: true
    },
    {
        name: "Quickbooks",
        icon: CreditCard,
        description: "Sync invoices and payments automatically.",
        colSpan: 1,
        gradient: "from-green-500/20 to-green-600/5",
        border: "group-hover:border-green-500/30"
    },
    {
        name: "Twilio",
        icon: MessageCircle,
        description: "Enterprise-grade voice and SMS infrastructure.",
        colSpan: 2,
        gradient: "from-red-500/20 to-red-600/5",
        border: "group-hover:border-red-500/30"
    },
    {
        name: "Custom API",
        icon: Plug,
        description: "Build your own workflows.",
        colSpan: 1,
        gradient: "from-gray-500/20 to-gray-600/5",
        border: "group-hover:border-gray-500/30"
    }
];

export function Integrations() {
    return (
        <section className="w-full py-24 px-6 md:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Deep integrations with your <br /> <span className="text-gradient-sub">existing stack</span>.
                    </h2>
                    <p className="text-gray-400 text-lg">No more data silos. Everything stays in sync.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {integrations.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group glass-card relative p-8 flex flex-col justify-between overflow-hidden ${item.colSpan === 2 ? 'md:col-span-2' : 'md:col-span-1'} border hover:border-white/20 transition-all duration-300`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="w-6 h-6" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
