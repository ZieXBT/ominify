'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export function Badge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200"
    >
      <Sparkles className="w-4 h-4 text-emerald-600" />
      <span className="text-sm font-semibold text-emerald-700">
        50% OFF FOR LIFE
      </span>
      <span className="text-sm text-emerald-600">
        — Founding members only
      </span>
    </motion.div>
  );
}
