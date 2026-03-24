'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Phone, User, Mail, Globe, PhoneCall, ChevronDown } from 'lucide-react';

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

function detectCountryFromTimezone(): string {
    try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const map: Record<string, string> = {
            'America/New_York': 'US', 'America/Los_Angeles': 'US', 'America/Chicago': 'US',
            'America/Denver': 'US', 'America/Phoenix': 'US', 'America/Toronto': 'CA',
            'America/Vancouver': 'CA', 'Europe/London': 'GB', 'Asia/Kolkata': 'IN',
            'Asia/Calcutta': 'IN', 'Australia/Sydney': 'AU', 'Australia/Melbourne': 'AU',
            'Europe/Berlin': 'DE', 'Europe/Paris': 'FR', 'Asia/Tokyo': 'JP',
            'Asia/Shanghai': 'CN', 'Asia/Dubai': 'AE', 'Asia/Singapore': 'SG',
            'America/Mexico_City': 'MX', 'America/Sao_Paulo': 'BR',
        };
        return map[timezone] || 'US';
    } catch { return 'US'; }
}

export function EWIAICallDemoForm() {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
    const [showCountryPicker, setShowCountryPicker] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [countdown, setCountdown] = useState(10);

    // Form field states
    const [name, setName] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        const detected = detectCountryFromTimezone();
        const country = countryCodes.find(c => c.country === detected) || countryCodes[0];
        setSelectedCountry(country);
    }, []);

    useEffect(() => {
        if (isSubmitted && countdown > 0) {
            const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [isSubmitted, countdown]);

    useEffect(() => {
        const handleClickOutside = () => setShowCountryPicker(false);
        if (showCountryPicker) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [showCountryPicker]);

    const validate = () => {
        const errs: Record<string, string> = {};
        if (name.length < 2) errs.name = 'Name must be at least 2 characters';
        if (!/^[\d\s\-\(\)]{6,}$/.test(phoneNum)) errs.phone = 'Please enter a valid phone number';
        if (!website.match(/^[\w\-]+(\.[\w\-]+)+/) && !website.match(/^https?:\/\//)) errs.website = 'Please enter a valid website';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email address';
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        // Show success animation — actual API integration will be added later
        setIsSubmitted(true);
        setCountdown(10);
    };

    if (isSubmitted) {
        return (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
                className="ewiai-glass-card text-center py-12 px-8 max-w-md mx-auto relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                        <motion.div key={i} className="absolute rounded-full border border-blue-500/20"
                            style={{ width: `${150 + i * 80}px`, height: `${150 + i * 80}px` }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }} />
                    ))}
                </div>
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="relative z-10 mb-4">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                        className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
                        <motion.div animate={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}>
                            <PhoneCall className="w-7 h-7 text-white" />
                        </motion.div>
                    </motion.div>
                    <motion.span key={countdown} initial={{ scale: 1.3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-5xl font-bold text-white block">{countdown}</motion.span>
                    <p className="text-white/50 text-xs mt-1">seconds until your call</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="relative z-10 w-full">
                    <div className="h-1 bg-white/10 rounded-full mb-2 overflow-hidden">
                        <motion.div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" initial={{ width: '0%' }} animate={{ width: `${Math.min(100, ((10 - countdown) / 10) * 100)}%` }} transition={{ duration: 0.5 }} />
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-xs">
                        <span className={countdown <= 7 ? 'text-blue-400' : 'text-white/30'}>{countdown <= 7 ? '✓' : '○'} Scanning</span>
                        <span className="text-white/20">→</span>
                        <span className={countdown <= 4 ? 'text-blue-400' : 'text-white/30'}>{countdown <= 4 ? '✓' : '○'} Crafting pitch</span>
                        <span className="text-white/20">→</span>
                        <span className={countdown <= 1 ? 'text-blue-400' : 'text-white/30'}>{countdown <= 1 ? '✓' : '○'} Dialing</span>
                    </div>
                </motion.div>
            </motion.div>
        );
    }

    const fieldClass = "w-full bg-white/[0.03] border border-white/10 text-white placeholder:text-white/25 h-11 rounded-xl px-10 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all duration-200 hover:border-white/20 outline-none text-sm";

    return (
        <motion.div className="ewiai-glass-card max-w-md mx-auto p-[1px] relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-[#0a0b1e]/90 backdrop-blur-xl rounded-[20px] p-5 md:p-8 border border-white/[0.06] relative">
                <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-md bg-transparent border border-white/20 mb-3 md:mb-4">
                        <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-gray-400"></span></span>
                        <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">LIVE AI DEMO</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">Get a call in 30 seconds</h2>
                    <p className="text-sm text-gray-400">Our AI will scan your website, learn your services, then call you like a real customer would hear it.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-1.5">
                        <label htmlFor="ewiai-name" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1 block">Your Name</label>
                        <div className="relative group">
                            <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 z-10 ${focusedField === 'name' ? 'text-blue-400' : 'text-gray-500'}`}><User className="w-4 h-4" /></div>
                            <input id="ewiai-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="John Smith" onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} className={fieldClass} />
                        </div>
                        <AnimatePresence>{errors.name && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-xs text-red-400 ml-1">{errors.name}</motion.p>}</AnimatePresence>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18 }} className="space-y-1.5">
                        <label htmlFor="ewiai-phone" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1 block">Phone Number</label>
                        <div className="relative group flex gap-0">
                            <div className="relative flex-shrink-0">
                                <button type="button" onClick={(e) => { e.stopPropagation(); setShowCountryPicker(!showCountryPicker); }}
                                    className="h-11 px-3 bg-white/[0.03] border border-white/10 border-r-0 rounded-l-xl flex items-center gap-1.5 hover:bg-white/[0.06] transition-colors whitespace-nowrap">
                                    <span className="text-lg leading-none">{selectedCountry.flag}</span><span className="text-sm text-gray-300">{selectedCountry.code}</span><ChevronDown className="w-3 h-3 text-gray-500" />
                                </button>
                                <AnimatePresence>
                                    {showCountryPicker && (
                                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                            className="absolute top-full left-0 mt-1 z-50 bg-[#1a1a2e] border border-white/10 rounded-xl shadow-xl overflow-hidden min-w-[200px] max-h-[250px] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                                            {countryCodes.map((country, idx) => (
                                                <button key={`${country.country}-${idx}`} type="button" onClick={() => { setSelectedCountry(country); setShowCountryPicker(false); }}
                                                    className={`w-full px-4 py-2.5 flex items-center gap-3 hover:bg-white/[0.06] transition-colors text-left ${selectedCountry.country === country.country ? 'bg-blue-500/10' : ''}`}>
                                                    <span className="text-lg">{country.flag}</span><span className="text-sm text-white">{country.name}</span><span className="text-sm text-gray-500 ml-auto">{country.code}</span>
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            <input id="ewiai-phone" type="tel" value={phoneNum} onChange={e => setPhoneNum(e.target.value)} placeholder="(555) 123-4567" onFocus={() => setFocusedField('phone')} onBlur={() => setFocusedField(null)}
                                className="flex-1 min-w-0 bg-white/[0.03] border border-white/10 text-white placeholder:text-white/25 h-11 rounded-r-xl px-4 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all duration-200 hover:border-white/20 outline-none text-sm" />
                        </div>
                        <AnimatePresence>{errors.phone && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-xs text-red-400 ml-1">{errors.phone}</motion.p>}</AnimatePresence>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.26 }} className="space-y-1.5">
                        <label htmlFor="ewiai-website" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1 block">Website</label>
                        <div className="relative group">
                            <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 z-10 ${focusedField === 'website' ? 'text-blue-400' : 'text-gray-500'}`}><Globe className="w-4 h-4" /></div>
                            <input id="ewiai-website" type="text" value={website} onChange={e => setWebsite(e.target.value)} placeholder="yourcompany.com" onFocus={() => setFocusedField('website')} onBlur={() => setFocusedField(null)} className={fieldClass} />
                        </div>
                        <AnimatePresence>{errors.website && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-xs text-red-400 ml-1">{errors.website}</motion.p>}</AnimatePresence>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.34 }} className="space-y-1.5">
                        <label htmlFor="ewiai-email" className="text-xs font-medium text-gray-400 uppercase tracking-wide ml-1 block">Email</label>
                        <div className="relative group">
                            <div className={`absolute left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-200 z-10 ${focusedField === 'email' ? 'text-blue-400' : 'text-gray-500'}`}><Mail className="w-4 h-4" /></div>
                            <input id="ewiai-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="john@company.com" onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} className={fieldClass} />
                        </div>
                        <AnimatePresence>{errors.email && <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="text-xs text-red-400 ml-1">{errors.email}</motion.p>}</AnimatePresence>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="pt-2">
                        <button type="submit"
                            className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 border border-blue-400/20 transition-all duration-300 group flex items-center justify-center">
                            <PhoneCall className="w-4 h-4 mr-2" /><span>Call Me in 30 Seconds</span><ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-1">
                        <Phone className="w-3 h-3" /><span>Real AI. Real call. Zero spam.</span>
                    </motion.div>
                </form>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-500/8 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
        </motion.div>
    );
}
