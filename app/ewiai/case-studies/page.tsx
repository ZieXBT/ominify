'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { EWIAINavigation } from '@/components/ewiai/EWIAINavigation';
import { EWIAIFooter } from '@/components/ewiai/EWIAIFooter';
import { EWIAIFloatingOrbs } from '@/components/ewiai/EWIAIFloatingOrbs';
import { caseStudies } from '@/lib/ewiai-case-studies';

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen relative flex flex-col items-center bg-[#0a0b1e] ewiai-page">
            <div className="ewiai-bg-gradient" />
            <div className="ewiai-bg-grid" />
            <EWIAIFloatingOrbs />
            <EWIAINavigation />

            <main className="w-full relative z-10 flex-1">
                <section className="w-full max-w-5xl mx-auto px-5 pt-32 pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Case <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">Studies</span>
                        </h1>
                        <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
                            Real results, real clients. Discover the tangible impact of our outbound systems and the revenue growth our clients have achieved. Explore our case studies and see the numbers for yourself.
                        </p>
                    </motion.div>

                    {/* Case Study Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Link
                                    href={`/ewiai/case-studies/${study.slug}`}
                                    className="block h-full ewiai-glass-card p-8 hover:border-white/[0.12] transition-all duration-300 group"
                                >
                                    {/* Logo */}
                                    <div className="w-full h-16 flex items-center mb-6">
                                        <img
                                            src={study.logo}
                                            alt={study.company}
                                            className="max-h-full max-w-[200px] object-contain brightness-0 invert"
                                        />
                                    </div>

                                    {/* Headline */}
                                    <h3 className="text-white font-semibold text-base leading-snug mb-6">
                                        {study.headline}
                                    </h3>

                                    {/* Read More */}
                                    <span className="inline-flex items-center gap-1 bg-[#2a24d6] hover:bg-[#3530e8] text-white text-sm font-medium px-5 py-2 rounded-lg transition-all duration-300">
                                        Read More
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <EWIAIFooter />
        </div>
    );
}
