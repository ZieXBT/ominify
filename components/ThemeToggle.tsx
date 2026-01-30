'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/20 light:border-black/20 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
                <Moon className="w-5 h-5 text-slate-700" />
            )}
        </motion.button>
    );
}
