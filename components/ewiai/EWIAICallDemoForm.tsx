'use client';

import { motion } from 'framer-motion';

export function EWIAICallDemoForm() {
    return (
        <motion.div
            className="ewiai-glass-card max-w-md mx-auto p-[1px] relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="bg-[#0a0b1e]/90 backdrop-blur-xl rounded-[20px] p-5 md:p-8 border border-white/[0.06] relative text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-md bg-transparent border border-white/20 mb-3 md:mb-4">
                    <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">LIVE AI DEMO</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Get a call in 30 seconds</h2>
                <p className="text-gray-400 text-base">
                    We are not taking any new submissions right now.
                </p>
            </div>

            {/* Glow effect behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-500/8 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
        </motion.div>
    );
}
