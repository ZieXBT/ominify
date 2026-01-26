'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader2, Phone, Sparkles, User, Mail, Globe, PhoneCall, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Country codes with flags
const countryCodes = [
    { code: '+1', country: 'US', flag: '🇺🇸', name: 'United States' },
    { code: '+1', country: 'CA', flag: '🇨🇦', name: 'Canada' },
    { code: '+44', country: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
    { code: '+91', country: 'IN', flag: '🇮🇳', name: 'India' },
    { code: '+61', country: 'AU', flag: '🇦🇺', name: 'Australia' },
    { code: '+49', country: 'DE', flag: '🇩🇪', name: 'Germany' },
    { code: '+33', country: 'FR', flag: '🇫🇷', name: 'France' },
    { code: '+81', country: 'JP', flag: '🇯🇵', name: 'Japan' },
    { code: '+86', country: 'CN', flag: '🇨🇳', name: 'China' },
    { code: '+971', country: 'AE', flag: '🇦🇪', name: 'UAE' },
    { code: '+65', country: 'SG', flag: '🇸🇬', name: 'Singapore' },
    { code: '+52', country: 'MX', flag: '🇲🇽', name: 'Mexico' },
    { code: '+55', country: 'BR', flag: '🇧🇷', name: 'Brazil' },
];

// Map timezone to country code
function detectCountryFromTimezone(): string {
    try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const timezoneToCountry: Record<string, string> = {
            'America/New_York': 'US',
            'America/Los_Angeles': 'US',
            'America/Chicago': 'US',
            'America/Denver': 'US',
            'America/Phoenix': 'US',
            'America/Toronto': 'CA',
            'America/Vancouver': 'CA',
            'Europe/London': 'GB',
            'Asia/Kolkata': 'IN',
            'Asia/Calcutta': 'IN',
            'Australia/Sydney': 'AU',
            'Australia/Melbourne': 'AU',
            'Europe/Berlin': 'DE',
            'Europe/Paris': 'FR',
            'Asia/Tokyo': 'JP',
            'Asia/Shanghai': 'CN',
            'Asia/Dubai': 'AE',
            'Asia/Singapore': 'SG',
            'America/Mexico_City': 'MX',
            'America/Sao_Paulo': 'BR',
        };
        return timezoneToCountry[timezone] || 'US';
    } catch {
        return 'US';
    }
}

const callDemoSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    phone: z.string()
        .min(6, 'Phone number must be at least 6 digits')
        .regex(/^[\d\s\-\(\)]+$/, 'Please enter a valid phone number'),
    website: z.string()
        .url('Please enter a valid website URL')
        .or(z.string().regex(/^[\w\-]+(\.[\w\-]+)+/, 'Please enter a valid website')),
    email: z.string().email('Please enter a valid email address'),
});

type CallDemoFormData = z.infer<typeof callDemoSchema>;

export function CallDemoForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [countdown, setCountdown] = useState(30);
    const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
    const [showCountryPicker, setShowCountryPicker] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch,
    } = useForm<CallDemoFormData>({
        resolver: zodResolver(callDemoSchema),
    });

    const watchedFields = watch();

    // Detect country on mount
    useEffect(() => {
        const detectedCountry = detectCountryFromTimezone();
        const country = countryCodes.find(c => c.country === detectedCountry) || countryCodes[0];
        setSelectedCountry(country);
    }, []);

    // Countdown timer effect
    useEffect(() => {
        if (isSubmitted && countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitted, countdown]);

    // Close country picker when clicking outside
    useEffect(() => {
        const handleClickOutside = () => setShowCountryPicker(false);
        if (showCountryPicker) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [showCountryPicker]);

    const onSubmit = async (data: CallDemoFormData) => {
        setSubmitError(null);
        try {
            // Combine country code with phone number
            const fullPhone = `${selectedCountry.code}${data.phone.replace(/\D/g, '')}`;

            const response = await fetch('/api/call-demo', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    phone: fullPhone,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                if (response.status === 409) {
                    setSubmitError('You\'ve already requested a demo call!');
                } else {
                    setSubmitError(result.error || 'Something went wrong. Please try again.');
                }
                return;
            }

            setIsSubmitted(true);
            setCountdown(30);
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
                {/* Animated rings */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full border border-emerald-500/20"
                            style={{
                                width: `${150 + i * 80}px`,
                                height: `${150 + i * 80}px`,
                            }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.1, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </div>

                {/* Phone icon with pulse */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30 relative z-10"
                >
                    <motion.div
                        animate={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                    >
                        <PhoneCall className="w-12 h-12 text-white" />
                    </motion.div>
                </motion.div>

                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-bold text-white mb-3 relative z-10"
                >
                    Get ready — you're about to be amazed
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 mb-6 relative z-10"
                >
                    AI is researching your business right now...
                </motion.p>

                {/* Countdown Timer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="relative z-10"
                >
                    <div className="w-32 h-32 mx-auto relative">
                        {/* Progress ring */}
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="64"
                                cy="64"
                                r="58"
                                stroke="rgba(16, 185, 129, 0.1)"
                                strokeWidth="8"
                                fill="none"
                            />
                            <motion.circle
                                cx="64"
                                cy="64"
                                r="58"
                                stroke="url(#gradient)"
                                strokeWidth="8"
                                fill="none"
                                strokeLinecap="round"
                                initial={{ strokeDasharray: '364.4', strokeDashoffset: 0 }}
                                animate={{ strokeDashoffset: (30 - countdown) * (364.4 / 30) }}
                                transition={{ duration: 1, ease: 'linear' }}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#10b981" />
                                    <stop offset="100%" stopColor="#34d399" />
                                </linearGradient>
                            </defs>
                        </svg>
                        {/* Countdown number */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.span
                                key={countdown}
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-4xl font-bold text-white"
                            >
                                {countdown}
                            </motion.span>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">seconds</p>
                </motion.div>

                {/* Status message */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mt-6 relative z-10"
                >
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-400 tracking-wide">
                        {countdown > 20 ? 'Scanning your website...' : countdown > 10 ? 'Crafting personalized pitch...' : countdown > 5 ? 'Dialing your number...' : 'Connecting...'}
                    </span>
                </motion.div>
            </motion.div>
        );
    }

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
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-transparent border border-white/20 mb-4">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">LIVE AI DEMO</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">Get a call in 30 seconds</h2>
                    <p className="text-sm text-gray-400">
                        Our AI will scan your website, learn your services, then call you like a real customer would hear it.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Field */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-1.5"
                    >
                        <Label htmlFor="name" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1">
                            Your Name
                        </Label>
                        <div className="relative group">
                            <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 ${focusedField === 'name' ? 'text-emerald-400' : 'text-gray-500'}`}>
                                <User className="w-4 h-4" />
                            </div>
                            <Input
                                id="name"
                                type="text"
                                {...register('name')}
                                placeholder="John Smith"
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                                className="pl-10 bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 h-11 rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50 transition-all duration-200 hover:border-white/20"
                            />
                        </div>
                        <AnimatePresence>
                            {errors.name && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    className="text-xs text-red-400 ml-1"
                                >
                                    {errors.name?.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Phone Field with Country Picker */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.18 }}
                        className="space-y-1.5"
                    >
                        <Label htmlFor="phone" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1">
                            Phone Number
                        </Label>
                        <div className="relative group flex">
                            {/* Country Picker Button */}
                            <div className="relative">
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowCountryPicker(!showCountryPicker);
                                    }}
                                    className="h-11 px-3 bg-white/[0.03] border border-white/10 border-r-0 rounded-l-xl flex items-center gap-1.5 hover:bg-white/[0.06] transition-colors"
                                >
                                    <span className="text-lg">{selectedCountry.flag}</span>
                                    <span className="text-sm text-gray-300">{selectedCountry.code}</span>
                                    <ChevronDown className="w-3 h-3 text-gray-500" />
                                </button>

                                {/* Country Dropdown */}
                                <AnimatePresence>
                                    {showCountryPicker && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute top-full left-0 mt-1 z-50 bg-[#1a1a1f] border border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[200px] max-h-[250px] overflow-y-auto"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {countryCodes.map((country, idx) => (
                                                <button
                                                    key={`${country.country}-${idx}`}
                                                    type="button"
                                                    onClick={() => {
                                                        setSelectedCountry(country);
                                                        setShowCountryPicker(false);
                                                    }}
                                                    className={`w-full px-4 py-2.5 flex items-center gap-3 hover:bg-white/[0.06] transition-colors text-left ${selectedCountry.country === country.country ? 'bg-emerald-500/10' : ''
                                                        }`}
                                                >
                                                    <span className="text-lg">{country.flag}</span>
                                                    <span className="text-sm text-white">{country.name}</span>
                                                    <span className="text-sm text-gray-500 ml-auto">{country.code}</span>
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Phone Input */}
                            <Input
                                id="phone"
                                type="tel"
                                {...register('phone')}
                                placeholder="(555) 123-4567"
                                onFocus={() => setFocusedField('phone')}
                                onBlur={() => setFocusedField(null)}
                                className="flex-1 bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 h-11 rounded-l-none rounded-r-xl focus-visible:ring-2 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50 transition-all duration-200 hover:border-white/20"
                            />
                        </div>
                        <AnimatePresence>
                            {errors.phone && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    className="text-xs text-red-400 ml-1"
                                >
                                    {errors.phone?.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Website Field */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.26 }}
                        className="space-y-1.5"
                    >
                        <Label htmlFor="website" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1">
                            Website
                        </Label>
                        <div className="relative group">
                            <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 ${focusedField === 'website' ? 'text-emerald-400' : 'text-gray-500'}`}>
                                <Globe className="w-4 h-4" />
                            </div>
                            <Input
                                id="website"
                                type="text"
                                {...register('website')}
                                placeholder="yourcompany.com"
                                onFocus={() => setFocusedField('website')}
                                onBlur={() => setFocusedField(null)}
                                className="pl-10 bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 h-11 rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50 transition-all duration-200 hover:border-white/20"
                            />
                        </div>
                        <AnimatePresence>
                            {errors.website && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    className="text-xs text-red-400 ml-1"
                                >
                                    {errors.website?.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.34 }}
                        className="space-y-1.5"
                    >
                        <Label htmlFor="email" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1">
                            Email
                        </Label>
                        <div className="relative group">
                            <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 ${focusedField === 'email' ? 'text-emerald-400' : 'text-gray-500'}`}>
                                <Mail className="w-4 h-4" />
                            </div>
                            <Input
                                id="email"
                                type="email"
                                {...register('email')}
                                placeholder="john@company.com"
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                                className="pl-10 bg-white/[0.03] border-white/10 text-white placeholder:text-white/25 h-11 rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500/30 focus-visible:border-emerald-500/50 transition-all duration-200 hover:border-white/20"
                            />
                        </div>
                        <AnimatePresence>
                            {errors.email && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    className="text-xs text-red-400 ml-1"
                                >
                                    {errors.email?.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>

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
                        transition={{ delay: 0.5 }}
                        className="pt-2"
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
                                    <PhoneCall className="w-4 h-4 mr-2" />
                                    <span>Call Me in 30 Seconds</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-1"
                    >
                        <Phone className="w-3 h-3" />
                        <span>Real AI. Real call. Zero spam.</span>
                    </motion.div>

                </form>
            </div>

            {/* Glow effect behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-emerald-500/8 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
        </motion.div>
    );
}
