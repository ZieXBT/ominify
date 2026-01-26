'use client';

import { motion } from 'framer-motion';

export function FloatingOrbs() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Large slow-moving orb */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                }}
                initial={{ x: '-10%', y: '20%' }}
                animate={{
                    x: ['0%', '10%', '5%', '0%'],
                    y: ['20%', '30%', '25%', '20%'],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Medium orb - top right */}
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(5, 150, 105, 0.06) 0%, transparent 70%)',
                    filter: 'blur(50px)',
                    right: '-5%',
                    top: '10%',
                }}
                animate={{
                    x: ['0%', '-15%', '-5%', '0%'],
                    y: ['0%', '10%', '5%', '0%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Smaller accent orb */}
            <motion.div
                className="absolute w-[300px] h-[300px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(52, 211, 153, 0.05) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    left: '60%',
                    top: '50%',
                }}
                animate={{
                    x: ['0%', '20%', '10%', '0%'],
                    y: ['0%', '-15%', '-5%', '0%'],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
            />

            {/* Bottom left orb */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.04) 0%, transparent 70%)',
                    filter: 'blur(70px)',
                    left: '-10%',
                    bottom: '10%',
                }}
                animate={{
                    x: ['0%', '8%', '4%', '0%'],
                    y: ['0%', '-12%', '-6%', '0%'],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 5,
                }}
            />

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-emerald-500/30"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 4 + i,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.5,
                    }}
                />
            ))}
        </div>
    );
}
