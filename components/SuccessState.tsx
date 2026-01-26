'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function SuccessState() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-8"
        >
            {/* Animated Checkmark */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: 0.1
                }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center"
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <Check className="w-10 h-10 text-emerald-600" strokeWidth={3} />
                </motion.div>
            </motion.div>

            {/* Success Message */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    You're on the list!
                </h3>
                <p className="text-slate-500 mb-4">
                    We'll email you when we're ready.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200">
                    <span className="text-sm font-medium text-emerald-700">
                        ✨ Your 50% lifetime discount is locked in
                    </span>
                </div>
            </motion.div>
        </motion.div>
    );
}
