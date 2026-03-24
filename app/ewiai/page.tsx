'use client';

import { motion } from 'framer-motion';

import { EWIAICallDemoForm } from '@/components/ewiai/EWIAICallDemoForm';
import { EWIAIFeatureCard } from '@/components/ewiai/EWIAIFeatureCard';
import { EWIAIVoiceDemo } from '@/components/ewiai/EWIAIVoiceDemo';
import { EWIAISocialProof } from '@/components/ewiai/EWIAISocialProof';
import { EWIAIHowItWorks } from '@/components/ewiai/EWIAIHowItWorks';
import { EWIAISingleBrain } from '@/components/ewiai/EWIAISingleBrain';
import { EWIAIChannels } from '@/components/ewiai/EWIAIChannels';
import { EWIAIComparisonTable } from '@/components/ewiai/EWIAIComparisonTable';
import { EWIAIFaq } from '@/components/ewiai/EWIAIFaq';
import { EWIAIFooter } from '@/components/ewiai/EWIAIFooter';
import { EWIAIFloatingOrbs } from '@/components/ewiai/EWIAIFloatingOrbs';
import { EWIAINavigation } from '@/components/ewiai/EWIAINavigation';
import Link from 'next/link';
import { PhoneOff, Brain, Calendar, MessageSquareMore, Globe } from 'lucide-react';

const features = [
  {
    icon: PhoneOff,
    title: "Never miss a lead",
    description: "AI answers every call instantly, 24/7. No more voicemails that never get returned."
  },
  {
    icon: Brain,
    title: "One brain, every channel",
    description: "Customer mentions their needs on a call? AI remembers when following up 3 days later."
  },
  {
    icon: Calendar,
    title: "Books while you sleep",
    description: "AI qualifies leads and books appointments directly into your calendar. Wake up to a full schedule."
  },
  {
    icon: MessageSquareMore,
    title: "Instant Follow-ups",
    description: "Automated follow-up calls and texts after every interaction. Never let a warm lead go cold."
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "AI speaks multiple languages naturally. Reach more customers in their preferred language."
  }
];

export default function EWIAIPage() {
  return (
    <div className="min-h-screen relative flex flex-col items-center bg-[#0a0b1e] ewiai-page">
      {/* Background Elements */}
      <div className="ewiai-bg-gradient" />
      <div className="ewiai-bg-grid" />
      <EWIAIFloatingOrbs />

      {/* Navigation */}
      <EWIAINavigation />

      {/* Main Content */}
      <main className="w-full relative z-10">

        {/* Hero + Form */}
        <section className="w-full max-w-5xl mx-auto px-5 pt-28 pb-16 md:pt-36 md:pb-28 relative">
          {/* Hero glow effects */}
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="flex flex-col items-center text-center relative z-10">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[1.4rem] sm:text-4xl md:text-[2.75rem] lg:text-[3rem] font-bold text-white mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight max-w-4xl"
            >
              Book <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">30% more</span> appointments with our <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">AI Sales System</span>.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-10 leading-relaxed max-w-xl md:max-w-2xl mx-auto px-2"
            >
              Enter your info. Our AI will research your business, then call you in <span className="text-blue-400 font-semibold">30 seconds</span> with a pitch so good you&apos;ll forget it&apos;s not human.
            </motion.p>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="relative mb-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-blue-400/5 to-blue-500/15 rounded-full blur-lg" />
              <div className="relative inline-flex items-center gap-3 text-base font-medium px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-500/10 border border-blue-500/25 backdrop-blur-sm">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                  </span>
                  <span className="text-white/80">200+</span>
                  <span className="text-blue-400 font-semibold">businesses automated</span>
                </span>
                <span className="text-white/40">•</span>
                <span className="flex items-center gap-1">
                  <span className="text-white/80">80%</span>
                  <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent font-bold">sales automated</span>
                </span>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-lg relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-blue-500/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />
              <EWIAICallDemoForm />
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10"
            >
              {[
                { text: "Calls in 30 seconds" },
                { text: "Learns your business" },
                { text: "Sounds 100% human" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-sm text-gray-400">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-600/20 flex items-center justify-center border border-blue-500/30">
                    <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Social Proof */}
        <EWIAISocialProof />

        {/* Voice Demo */}
        <section className="py-20">
          <EWIAIVoiceDemo />
        </section>

        {/* Features Grid */}
        <section id="features" className="w-full py-20 px-4 md:px-6 relative">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Core Features</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
                Everything you need to <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">scale</span>.
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {features.map((feature, index) => (
                <EWIAIFeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <div id="how-it-works">
          <EWIAIHowItWorks />
        </div>

        {/* Single Brain */}
        <EWIAISingleBrain />

        {/* Channels */}
        <div id="channels">
          <EWIAIChannels />
        </div>

        {/* Comparison Table - Hidden */}
        {/* <div id="pricing">
          <EWIAIComparisonTable />
        </div> */}

        {/* FAQ */}
        <EWIAIFaq />

        {/* Final CTA */}
        <section className="w-full py-20 px-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.03] via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto ewiai-glass-card p-10 md:p-14 bg-gradient-to-b from-blue-500/[0.08] via-blue-500/[0.03] to-transparent border-blue-500/20 relative z-10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Limited Spots Available</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Stop losing deals to <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">slow follow-ups.</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">
              Join 200+ businesses already automated. <span className="text-blue-400 font-semibold">Book a call today</span>.
            </p>

            <div className="max-w-sm mx-auto">
              <Link
                href="/ewiai/contact"
                className="w-full h-14 bg-[#2a24d6] hover:bg-[#3530e8] text-white font-semibold rounded-xl shadow-xl shadow-[#2a24d6]/25 hover:shadow-[#2a24d6]/35 transition-all duration-300 group flex items-center justify-center gap-2"
              >
                  Book a Call
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
              </Link>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <EWIAIFooter />
    </div>
  );
}
