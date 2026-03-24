'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { EWIAINavigation } from '@/components/ewiai/EWIAINavigation';
import { EWIAIFooter } from '@/components/ewiai/EWIAIFooter';
import { EWIAIFloatingOrbs } from '@/components/ewiai/EWIAIFloatingOrbs';
import { caseStudies } from '@/lib/ewiai-case-studies';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const studyIndex = caseStudies.findIndex(s => s.slug === slug);
    const study = caseStudies[studyIndex];

    if (!study) {
        notFound();
    }

    const nextStudy = caseStudies[(studyIndex + 1) % caseStudies.length];
    const prevStudy = caseStudies[(studyIndex - 1 + caseStudies.length) % caseStudies.length];

    return (
        <div className="min-h-screen relative flex flex-col items-center bg-[#0a0b1e] ewiai-page">
            <div className="ewiai-bg-gradient" />
            <div className="ewiai-bg-grid" />
            <EWIAIFloatingOrbs />
            <EWIAINavigation />

            <main className="w-full relative z-10 flex-1">
                <section className="w-full max-w-4xl mx-auto px-5 pt-32 pb-20">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-10"
                    >
                        <Link
                            href="/ewiai/case-studies"
                            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Case Studies
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-12"
                    >
                        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
                            <div className="w-48 h-20 bg-white/[0.05] rounded-xl flex items-center justify-center p-4 border border-white/[0.06]">
                                <img
                                    src={study.logo}
                                    alt={study.company}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-white">{study.company}</h1>
                                <span className="text-sm text-blue-400 font-medium">{study.industry}</span>
                            </div>
                        </div>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                            <span className="text-blue-400 font-bold text-sm">{study.highlight}</span>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="ewiai-glass-card p-8"
                        >
                            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">The Problem</h2>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line">{study.problem}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="ewiai-glass-card p-8"
                        >
                            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">The Solution</h2>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line">{study.solution}</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="ewiai-glass-card p-8"
                        >
                            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Results</h2>
                            <ul className="space-y-3">
                                {study.results.map((result, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 mt-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-300">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Navigation + CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 space-y-8"
                    >
                        {/* CTA */}
                        <div className="text-center ewiai-glass-card p-10">
                            <h3 className="text-xl font-bold text-white mb-3">Want results like these?</h3>
                            <p className="text-gray-400 mb-6 text-sm">See how AI Voice Agents can transform your business.</p>
                            <Link
                                href="/ewiai/contact"
                                className="inline-flex items-center gap-2 bg-[#2a24d6] hover:bg-[#3530e8] text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-[#2a24d6]/30 hover:shadow-[#2a24d6]/50 transition-all duration-300"
                            >
                                Book a call
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Prev/Next */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href={`/ewiai/case-studies/${prevStudy.slug}`}
                                className="flex-1 ewiai-glass-card p-5 hover:border-white/[0.12] transition-all group"
                            >
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Previous</span>
                                <p className="text-white font-medium mt-1 group-hover:text-blue-400 transition-colors">{prevStudy.company}</p>
                            </Link>
                            <Link
                                href={`/ewiai/case-studies/${nextStudy.slug}`}
                                className="flex-1 ewiai-glass-card p-5 hover:border-white/[0.12] transition-all text-right group"
                            >
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Next</span>
                                <p className="text-white font-medium mt-1 group-hover:text-blue-400 transition-colors">{nextStudy.company}</p>
                            </Link>
                        </div>
                    </motion.div>
                </section>
            </main>

            <EWIAIFooter />
        </div>
    );
}
