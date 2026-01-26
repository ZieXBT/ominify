'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader2, Lock, Sparkles, CheckCircle2, User, Mail, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const waitlistSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    companyName: z.string().min(2, 'Company name must be at least 2 characters'),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export function WaitlistForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch,
    } = useForm<WaitlistFormData>({
        resolver: zodResolver(waitlistSchema),
    });

    const watchedFields = watch();

    const onSubmit = async (data: WaitlistFormData) => {
        setSubmitError(null);
        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                if (response.status === 409) {
                    setSubmitError('This email is already on the waitlist!');
                } else {
                    setSubmitError(result.error || 'Something went wrong. Please try again.');
                }
                return;
            }

            setIsSubmitted(true);
        } catch {
            setSubmitError('Network error. Check connection.');
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card text-center py-12 px-8 max-w-md mx-auto relative overflow-hidden"
            >
                {/* Confetti-like particles */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full"
                            style={{
                                background: i % 2 === 0 ? '#10b981' : '#34d399',
                                left: `${Math.random() * 100}%`,
                                top: '-10%',
                            }}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{
                                y: [0, 400],
                                opacity: [1, 0],
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: 2 + Math.random(),
                                delay: Math.random() * 0.5,
                                ease: 'easeOut',
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30"
                >
                    <CheckCircle2 className="w-10 h-10 text-white" />
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-white mb-3"
                >
                    You're on the list!
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 mb-6"
                >
                    We'll email you with early access soon.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20"
                >
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-400 tracking-wide">
                        50% Lifetime Discount Locked
                    </span>
                </motion.div>
            </motion.div>
        );
    }

    const formFields = [
        { id: 'name', label: 'Name', placeholder: 'John Smith', icon: User, type: 'text' },
        { id: 'email', label: 'Work Email', placeholder: 'john@company.com', icon: Mail, type: 'email' },
        { id: 'companyName', label: 'Company', placeholder: 'Company Inc.', icon: Building2, type: 'text' },
    ] as const;

    return (
        <motion.div
            className="glass-card max-w-md mx-auto p-[1px] relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-emerald-500/20 via-transparent to-emerald-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <div className="bg-[#0a0a0f]/90 backdrop-blur-xl rounded-[20px] p-6 md:p-8 border border-white/[0.06] relative">

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-white mb-3">Join the Waitlist</h2>
                    <div className="flex items-center justify-center gap-3">
                        <span className="text-gray-500 line-through text-lg">$299/mo</span>
                        <span className="text-2xl font-bold text-white">$99<span className="text-sm font-normal text-gray-400">/mo</span></span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Lock in this price for life when we launch.</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {formFields.map((field, index) => (
                        <motion.div
                            key={field.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className="space-y-2"
                        >
                            <Label
                                htmlFor={field.id}
                                className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1 flex items-center gap-1.5"
                            >
                                {field.label}
                            </Label>
                            <div className="relative group">
                                <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 ${focusedField === field.id ? 'text-emerald-400' : 'text-gray-500'}`}>
                                    <field.icon className="w-4 h-4" />
                                </div>
                                <Input
                                    id={field.id}
                                    type={field.type}
                                    {...register(field.id)}
                                    placeholder={field.placeholder}
                                    onFocus={() => setFocusedField(field.id)}
                                    onBlur={() => setFocusedField(null)}
                                    className="pl-10 bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 h-12 rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50 transition-all duration-200 hover:border-white/20"
                                />
                                {/* Field valid indicator */}
                                <AnimatePresence>
                                    {watchedFields[field.id] && watchedFields[field.id].length >= 2 && !errors[field.id] && (
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0, opacity: 0 }}
                                            className="absolute right-3.5 top-1/2 -translate-y-1/2"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <AnimatePresence>
                                {errors[field.id] && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -5 }}
                                        className="text-xs text-red-400 ml-1"
                                    >
                                        {errors[field.id]?.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}

                    <AnimatePresence>
                        {submitError && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, height: 0 }}
                                animate={{ opacity: 1, y: 0, height: 'auto' }}
                                exit={{ opacity: 0, y: -10, height: 0 }}
                                className="p-3 rounded-xl bg-red-500/10 border border-red-500/20"
                            >
                                <p className="text-xs text-red-400 text-center">{submitError}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 border border-emerald-400/20 transition-all duration-300 group"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <>
                                    <span>Confirm Waitlist Spot</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-1"
                    >
                        <Lock className="w-3 h-3" />
                        <span>Secure encryption. Unsubscribe anytime.</span>
                    </motion.div>

                </form>
            </div>

            {/* Glow effect behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-emerald-500/8 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
        </motion.div>
    );
}
