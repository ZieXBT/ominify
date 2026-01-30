'use client';

import { motion } from 'framer-motion';

import { CallDemoForm } from '@/components/CallDemoForm';
import { FeatureCard } from '@/components/FeatureCard';
import { VoiceDemo } from '@/components/VoiceDemo';
import { SocialProof } from '@/components/SocialProof';
import { HowItWorks } from '@/components/HowItWorks';
import { SingleBrain } from '@/components/SingleBrain';
import { Channels } from '@/components/Channels';
import { UseCases } from '@/components/UseCases';
import { ComparisonTable } from '@/components/ComparisonTable';
import { Footer } from '@/components/Footer';
import { Integrations } from '@/components/Integrations';
import { FloatingOrbs } from '@/components/FloatingOrbs';
import { PhoneOff, Brain, Calendar, MessageSquareMore, Globe } from 'lucide-react';

const features = [
  {
    icon: PhoneOff,
    title: "Never miss a call",
    description: "AI answers every call instantly, 24/7. No more voicemails that never get returned."
  },
  {
    icon: Brain,
    title: "One brain, every channel",
    description: "Customer mentions their 15-year-old AC on a call? AI remembers when texting them 3 days later."
  },
  {
    icon: Calendar,
    title: "Books while you sleep",
    description: "AI qualifies leads and books appointments directly into your calendar. Wake up to a full schedule."
  },
  {
    icon: MessageSquareMore,
    title: "Instant Follow-ups",
    description: "Automated follow-up texts after every call. Never let a warm lead go cold."
  },
  {
    icon: Globe,
    title: "Multi-Language",
    description: "AI speaks English and Spanish naturally. Reach more customers in their preferred language."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col items-center bg-[#0a0a0f]">
      {/* Background Elements */}
      <div className="bg-gradient-fixed" />
      <div className="bg-grid-fixed" />
      <FloatingOrbs />



      {/* Main Content */}
      <main className="w-full relative z-10">

        {/* Section 2: Hero + Waitlist - Centered Layout */}
        <section className="w-full max-w-5xl mx-auto px-5 pt-12 pb-16 md:pt-20 md:pb-28 relative">
          {/* Hero glow effects */}
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="flex flex-col items-center text-center relative z-10">
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[1.4rem] sm:text-4xl md:text-[2.75rem] lg:text-[3rem] font-bold text-white mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight max-w-4xl"
            >
              Omnify AI handles the <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">calls</span> you miss and the <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">follow-ups</span> you forget.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 md:mb-10 leading-relaxed max-w-xl md:max-w-2xl mx-auto px-2"
            >
              Enter your info. Our AI will research your business, then call you in <span className="text-emerald-400 font-semibold">30 seconds</span> with a pitch so good you'll forget it's not human.
            </motion.p>

            {/* Third heading - Value proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="relative mb-6"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/15 via-emerald-400/5 to-emerald-500/15 rounded-full blur-lg" />

              {/* Badge with gradient border */}
              <div className="relative inline-flex items-center gap-3 text-base font-medium px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/25 backdrop-blur-sm">
                <span className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-white/80">Works</span>
                  <span className="text-emerald-400 font-semibold">24/7</span>
                </span>
                <span className="text-white/40">•</span>
                <span className="flex items-center gap-1">
                  <span className="text-white/80">Just</span>
                  <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-bold">$6/day</span>
                </span>
              </div>
            </motion.div>

            {/* Waitlist Form - Center of Attention */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-lg relative"
            >
              {/* Spotlight glow behind form */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-emerald-500/20 rounded-3xl blur-2xl opacity-60 pointer-events-none" />
              <CallDemoForm />
            </motion.div>

            {/* Trust indicators - Below Form */}
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
                <div
                  key={index}
                  className="flex items-center gap-2.5 text-sm text-gray-400"
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 flex items-center justify-center border border-emerald-500/30">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 3: Social Proof */}
        <SocialProof />

        {/* Section 4: Voice Demo - Your Tone Your Rules */}
        <section className="py-20">
          <VoiceDemo />
        </section>

        {/* Section 5: Features Grid */}
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
                Everything you need to <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">scale</span>.
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {features.map((feature, index) => (
                <FeatureCard
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

        {/* Section 6: How It Works */}
        <div id="how-it-works">
          <HowItWorks />
        </div>

        {/* Section 7: Single Brain Difference */}
        <SingleBrain />

        {/* Section 8: Channels */}
        <div id="channels">
          <Channels />
        </div>

        {/* Section 9: Comparison Table / Pricing */}
        <div id="pricing">
          <ComparisonTable />
        </div>

        {/* Section 10: Final CTA */}
        <section className="w-full py-20 px-6 text-center relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/[0.03] via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-card p-10 md:p-14 bg-gradient-to-b from-emerald-500/[0.08] via-emerald-500/[0.03] to-transparent border-emerald-500/20 relative z-10"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Limited Time Offer</span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Stop losing jobs to <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">slow response times.</span>
            </h2>
            <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">
              Join 847+ contractors on the waitlist. Lock in <span className="text-emerald-400 font-semibold">50% off for life</span>.
            </p>

            <div className="max-w-sm mx-auto">
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full h-14 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold rounded-xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all duration-300 border border-emerald-400/20 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Request Demo Call
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Section 14: Footer */}
      <Footer />
    </div >
  );
}
