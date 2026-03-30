'use client';

import { motion } from 'framer-motion';

export function WaitlistForm() {
    return (
        <motion.div
            className="glass-card max-w-md mx-auto p-[1px] relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="bg-[#0a0a0f]/90 backdrop-blur-xl rounded-[20px] p-6 md:p-8 border border-white/[0.06] relative text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Join the Waitlist</h2>
                <p className="text-gray-400 text-base">
                    We are not taking any new submissions right now.
                </p>
            </div>

            {/* Glow effect behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-emerald-500/8 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
        </motion.div>
    );
}
