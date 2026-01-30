'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Customer logos from /public/clients folder
const customers = [
    { name: "Advent Roofing", logo: "/clients/65b0155b9b9cf0a402a55052_AdventLogo.png" },
    { name: "Nationwide Renewables", logo: "/clients/672208a764044956c8be965d_logo horizontal svg.png" },
    { name: "Eclipse Energy", logo: "/clients/682b259f0ba82a7a381a915a_logotyp-sekundarni-varianta-tyrkysovo-cerna-01.avif" },
    { name: "Spartan Solar", logo: "/clients/686590d380aa1a78b10c55a4_Group 2.svg" },
    { name: "Arrow Solar Electric", logo: "/clients/New+Logo+Alternative+Bold.webp" },
    { name: "Alpha Solar", logo: "/clients/Solar-alphasolarsa-1.png" },
    { name: "Summers PHC", logo: "/clients/images.png" },
    { name: "JAK Concrete Coatings", logo: "/clients/logo.webp" },
];

export function CustomerLogos() {
    // Duplicate the array to create seamless loop
    const duplicatedCustomers = [...customers, ...customers, ...customers];

    return (
        <section className="w-full py-12 border-y border-white/10 bg-gradient-to-b from-[#0d0d14] to-[#0a0a0f] overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-8">
                <p className="text-center text-xs font-medium text-white/50 uppercase tracking-[0.2em]">
                    Trusted by home service companies
                </p>
            </div>

            {/* Scrolling container */}
            <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-10 pointer-events-none" />

                {/* Scrolling logos */}
                <motion.div
                    className="flex items-center gap-20"
                    animate={{
                        x: [0, -200 * customers.length],
                    }}
                    transition={{
                        x: {
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedCustomers.map((customer, index) => (
                        <div
                            key={`${customer.name}-${index}`}
                            className="flex-shrink-0 h-14 min-w-[180px] flex items-center justify-center group"
                        >
                            <Image
                                src={customer.logo}
                                alt={customer.name}
                                width={180}
                                height={56}
                                className="object-contain max-h-14 w-auto brightness-110 contrast-110 opacity-90 group-hover:opacity-100 group-hover:brightness-125 transition-all duration-300"
                                style={{ maxWidth: '180px' }}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
