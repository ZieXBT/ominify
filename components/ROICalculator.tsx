'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Phone, DollarSign, Percent, Calculator } from 'lucide-react';

interface SliderProps {
    label: string;
    value: number;
    min: number;
    max: number;
    step?: number;
    prefix?: string;
    suffix?: string;
    icon: React.ElementType;
    onChange: (value: number) => void;
}

function CustomSlider({ label, value, min, max, step = 1, prefix = '', suffix = '', icon: Icon, onChange }: SliderProps) {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className="space-y-4 group">
            <div className="flex justify-between items-center">
                <label className="flex items-center gap-2.5 text-sm font-medium text-gray-300">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                        <Icon className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    {label}
                </label>
                <motion.span
                    key={value}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-lg text-sm font-bold"
                >
                    {prefix}{value.toLocaleString()}{suffix}
                </motion.span>
            </div>
            <div className="relative h-3 group/slider">
                {/* Track background */}
                <div className="absolute inset-0 bg-white/[0.04] rounded-full border border-white/[0.06]" />

                {/* Filled track */}
                <motion.div
                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
                    style={{ width: `${percentage}%` }}
                    initial={false}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.1 }}
                />

                {/* Thumb indicator glow */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-emerald-500/30 blur-md"
                    style={{ left: `calc(${percentage}% - 10px)` }}
                />

                {/* Actual input */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                {/* Custom thumb */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow-lg shadow-emerald-500/30 border-2 border-emerald-400 pointer-events-none"
                    style={{ left: `calc(${percentage}% - 10px)` }}
                    whileHover={{ scale: 1.2 }}
                />
            </div>
        </div>
    );
}

export function ROICalculator() {
    const [missedCalls, setMissedCalls] = useState(5);
    const [avgJobValue, setAvgJobValue] = useState(1500);
    const [conversionRate, setConversionRate] = useState(30);

    const calculateROI = () => {
        const weeklyLostJobs = missedCalls * (conversionRate / 100);
        const weeklyLostRevenue = weeklyLostJobs * avgJobValue;
        const annualLostRevenue = weeklyLostRevenue * 52;
        return {
            annual: Math.round(annualLostRevenue),
            jobs: Math.round(weeklyLostJobs * 52)
        };
    };

    const results = calculateROI();

    const maxPotential = 1000000;
    const potentialHeight = Math.min((results.annual / maxPotential) * 100, 100);

    return (
        <section className="w-full py-28 px-6 md:px-8 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] mb-6">
                        <Calculator className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">ROI Calculator</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
                        Grow Revenue, <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Not Overhead</span>.
                    </h2>
                    <p className="text-gray-400 text-lg">See what you're leaving on the table.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-emerald-500/10 to-transparent blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-600/5 to-transparent blur-[80px] rounded-full pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative z-10 items-center">

                        {/* Sliders */}
                        <div className="space-y-8">
                            <CustomSlider
                                label="Missed calls / week"
                                value={missedCalls}
                                min={1}
                                max={50}
                                icon={Phone}
                                onChange={setMissedCalls}
                            />

                            <CustomSlider
                                label="Average Job Value"
                                value={avgJobValue}
                                min={100}
                                max={5000}
                                step={100}
                                prefix="$"
                                icon={DollarSign}
                                onChange={setAvgJobValue}
                            />

                            <CustomSlider
                                label="Close Rate"
                                value={conversionRate}
                                min={1}
                                max={100}
                                suffix="%"
                                icon={Percent}
                                onChange={setConversionRate}
                            />

                            {/* Summary stat */}
                            <div className="pt-4 border-t border-white/[0.06]">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-500">Estimated lost jobs/year:</span>
                                    <span className="font-bold text-red-400">{results.jobs} jobs</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual Graph Result */}
                        <div className="flex flex-col items-center justify-end h-full min-h-[420px] bg-gradient-to-br from-white/[0.02] to-transparent rounded-3xl border border-white/[0.06] p-8 relative">
                            {/* Top badge */}
                            <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                                <TrendingUp className="w-4 h-4 text-emerald-400" />
                                <span className="text-xs font-medium text-emerald-400">Live Projection</span>
                            </div>

                            <div className="w-full flex items-end gap-6 h-60 mb-10 px-4">
                                {/* Baseline Bar (Current) */}
                                <div className="w-1/2 h-full flex flex-col justify-end items-center gap-3">
                                    <div className="w-full bg-white/[0.03] rounded-xl h-[20%] border border-white/[0.06] relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 to-transparent" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-medium text-gray-600 uppercase tracking-wider">Without</p>
                                        <p className="text-xs text-gray-500 mt-0.5">$0 recovered</p>
                                    </div>
                                </div>

                                {/* Projection Bar (Potential) */}
                                <div className="w-1/2 h-full flex flex-col justify-end items-center gap-3">
                                    <motion.div
                                        initial={{ height: "0%" }}
                                        animate={{ height: `${Math.max(potentialHeight, 25)}%` }}
                                        transition={{ type: "spring", stiffness: 80, damping: 20 }}
                                        className="w-full bg-gradient-to-t from-emerald-600 via-emerald-500 to-emerald-400 rounded-xl relative shadow-[0_0_50px_rgba(16,185,129,0.25)] border border-emerald-400/30"
                                    >
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl" />
                                    </motion.div>
                                    <div className="text-center">
                                        <p className="text-xs font-medium text-emerald-400 uppercase tracking-wider">With Omnify</p>
                                        <p className="text-xs text-emerald-400/70 mt-0.5">Revenue captured</p>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <p className="text-gray-500 text-sm font-medium mb-2">Potential Annual Recovery</p>
                                <motion.div
                                    key={results.annual}
                                    initial={{ scale: 0.95, opacity: 0.8 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="relative"
                                >
                                    <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent tracking-tight">
                                        ${results.annual.toLocaleString()}
                                    </p>
                                    <div className="absolute inset-0 bg-emerald-500/20 blur-3xl -z-10" />
                                </motion.div>
                            </div>

                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
