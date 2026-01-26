'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

const demos = [
    {
        id: 1,
        title: "Solar Sales Call",
        industry: "Solar",
        audioSrc: "/1-Solar.mp3",
        audioDuration: 169000,
        conversation: [
            { role: 'ai', text: "Hi, Tom. I'm Jonathan from Solar Savings Alliance. How are you doing today?", delay: 0 },
            { role: 'customer', text: "I'm good. How are you?", delay: 4000 },
            { role: 'ai', text: "I'm doing well. Thank you for asking. I noticed that you recently filled out a form on Facebook showing interest in our Zero Down Solar Programme.", delay: 6000 },
            { role: 'ai', text: "Has anyone had a chance to speak with you about this programme yet?", delay: 16000 },
            { role: 'customer', text: "Not yet.", delay: 19000 },
            { role: 'ai', text: "Great. I'm glad I could connect with you today.", delay: 20000 },
            { role: 'ai', text: "Let me give you a brief overview. This programme allows homeowners like you to install solar panels with no upfront costs. You could start saving on your energy bills right away.", delay: 23000 },
            { role: 'ai', text: "Would it be okay if I asked you a few quick questions to see if you qualify?", delay: 36000 },
            { role: 'customer', text: "Yeah, but how much is this going to cost?", delay: 42000 },
            { role: 'ai', text: "I completely understand your concern. With our Zero Down Solar Programme, there are no upfront costs for qualified homeowners.", delay: 45000 },
            { role: 'ai', text: "Any remaining balance after incentives can be covered by a monthly payment equal to or less than your current electric bill.", delay: 53000 },
            { role: 'ai', text: "Would you be open to answering a few questions to see if you qualify?", delay: 70000 },
            { role: 'customer', text: "Sure.", delay: 75000 },
            { role: 'ai', text: "That's fantastic, Tom.", delay: 76000 },
            { role: 'ai', text: "Are you currently spending more than $100 per month on your electricity bill?", delay: 79000 },
            { role: 'customer', text: "Yes, I am.", delay: 87000 },
            { role: 'ai', text: "Great to know, Tom.", delay: 89000 },
            { role: 'ai', text: "Who is your current electric provider?", delay: 91000 },
            { role: 'customer', text: "South Central Power.", delay: 94000 },
            { role: 'ai', text: "Thank you for sharing that. Is your home a single-family residence?", delay: 96000 },
            { role: 'customer', text: "Yes, it is.", delay: 100000 },
            { role: 'ai', text: "Are you the homeowner of the property?", delay: 102000 },
            { role: 'customer', text: "Yes, I am.", delay: 106000 },
            { role: 'ai', text: "Do you have any trees that shade your roof?", delay: 108000 },
            { role: 'customer', text: "I do.", delay: 112000 },
            { role: 'ai', text: "If the trees are on your property, there are available funds for tree trimming or removal.", delay: 114000 },
            { role: 'ai', text: "What type of roof do you have, shingles or tile?", delay: 122000 },
            { role: 'customer', text: "They're shingles.", delay: 126000 },
            { role: 'ai', text: "Is your roof in good condition?", delay: 129000 },
            { role: 'customer', text: "It's 25 years old, so no.", delay: 132000 },
            { role: 'ai', text: "Is your credit score 650 or better?", delay: 135000 },
            { role: 'customer', text: "Would what be an issue?", delay: 141000 },
            { role: 'ai', text: "I apologise for any confusion. I was referring to your credit score.", delay: 143000 },
            { role: 'ai', text: "Would you happen to know if your credit score is 650 or better?", delay: 148000 },
            { role: 'customer', text: "It is not 650 or better.", delay: 154000 },
            { role: 'ai', text: "Thank you for letting me know, Tom.", delay: 157000 },
            { role: 'ai', text: "Can you please verify your address so we can send the energy expert to the correct location?", delay: 160000 },
        ]
    },
    {
        id: 2,
        title: "Solar Qualification Call",
        industry: "Solar",
        audioSrc: "/2-Solar.mp3",
        audioDuration: 107000, // 1:47
        conversation: [
            // (0:00 - 0:08)
            { role: 'ai', text: "Hey Jackson.", delay: 0 },
            { role: 'customer', text: "Hello, who's this?", delay: 2000 },
            { role: 'ai', text: "Hey, this is Jesse calling from SolarSphere. How have you been?", delay: 3000 },
            { role: 'customer', text: "I'm doing good, how are you?", delay: 6000 },
            { role: 'ai', text: "I'm doing great, thanks for asking.", delay: 7000 },
            // (0:08 - 0:15)
            { role: 'ai', text: "Just reaching out to talk to you about the electrical meter that was installed on 506 Woodrow Road. That's your property, right?", delay: 8000 },
            { role: 'customer', text: "That's right.", delay: 14000 },
            // (0:15 - 0:24)
            { role: 'ai', text: "Great. So over the last few years, they've upgraded everyone's meter from analog to digital. And because of that, a program called Net Metering was formed.", delay: 15000 },
            // (0:25 - 0:30)
            { role: 'ai', text: "Has anybody come by to talk to you about this program yet?", delay: 25000 },
            { role: 'customer', text: "No, they haven't.", delay: 28000 },
            { role: 'ai', text: "Got it. So let me explain the program to you.", delay: 29000 },
            // (0:31 - 0:42)
            { role: 'ai', text: "Not everyone qualifies, but the federal government has put incentives in place that allow you to eliminate all electric bills and replace them with a cheaper fixed rate.", delay: 31000 },
            // (0:42 - 0:51)
            { role: 'ai', text: "But to check if you qualify, how much are you currently paying for your electric bill each month?", delay: 42000 },
            { role: 'customer', text: "About $240.", delay: 47000 },
            { role: 'ai', text: "Wow, that's quite a bill. You are definitely a good candidate for the program.", delay: 48000 },
            // (0:51 - 1:00)
            { role: 'ai', text: "We can set up a free consultation call with one of our reps. What time zone are you in?", delay: 51000 },
            { role: 'customer', text: "I'm in eastern time.", delay: 58000 },
            // (1:00 - 1:08)
            { role: 'ai', text: "Okay, eastern time. What time between 10 a.m. and 2 p.m. works best for you tomorrow?", delay: 60000 },
            { role: 'customer', text: "I could do 11:30.", delay: 65000 },
            { role: 'ai', text: "Perfect. I'll lock in that time for you.", delay: 67000 },
            // (1:09 - 1:19)
            { role: 'ai', text: "So just to confirm, our appointment will be at 11:30 a.m. eastern time tomorrow. Is there anyone else involved in making this decision, like a spouse?", delay: 69000 },
            { role: 'customer', text: "Yeah, my wife will be on there.", delay: 76000 },
            // (1:20 - 1:28)
            { role: 'ai', text: "It's always good to have everyone involved. There's no reason you or your wife would miss this call at 11:30 a.m. tomorrow, right?", delay: 80000 },
            { role: 'customer', text: "Nope. We should be good.", delay: 87000 },
            // (1:29 - 1:42)
            { role: 'ai', text: "Amazing. Please remember to be available for our solar technicians. You should receive a text asking you to send a utility bill.", delay: 89000 },
            // (1:42 - 1:47)
            { role: 'ai', text: "So if anything changes, feel free to text that number. Have a good day.", delay: 102000 },
            { role: 'customer', text: "Thanks, Jesse. See you tomorrow.", delay: 106000 },
        ]
    },
    {
        id: 3,
        title: "Roofing Consultation",
        industry: "Roofing",
        audioSrc: "/3-Solar.mp3",
        audioDuration: 120000, // ~2 minutes
        conversation: [
            { role: 'ai', text: "Hi Elbert, I'm Jessica from Advent Roofing and Restoration. How are you doing today?", delay: 0 },
            { role: 'customer', text: "Alright.", delay: 4000 },
            { role: 'ai', text: "I hope your day is going well. I noticed that you recently filled out a form on Facebook showing interest in our roof replacement program.", delay: 5000 },
            { role: 'ai', text: "Has anyone had a chance to speak with you about this program yet?", delay: 12000 },
            { role: 'customer', text: "No.", delay: 15000 },
            { role: 'ai', text: "No problem at all. I'm here to help. Our roof replacement program is designed to assist homeowners like you in replacing aging roofs with high quality, durable materials.", delay: 16000 },
            { role: 'ai', text: "Would it be okay if I asked you a few quick questions to see if you qualify?", delay: 26000 },
            { role: 'customer', text: "Sure.", delay: 30000 },
            { role: 'ai', text: "Great. First question, how old is your current roof?", delay: 31000 },
            { role: 'customer', text: "About 20 years old.", delay: 35000 },
            { role: 'ai', text: "Thank you for that. What type of roof do you currently have? Shingles, tile, or something else?", delay: 37000 },
            { role: 'customer', text: "I don't know exactly what it is.", delay: 42000 },
            { role: 'ai', text: "That's okay. Many homeowners aren't sure about the specifics. Is your roof showing any visible signs of damage like leaks, missing shingles, or cracks?", delay: 44000 },
            { role: 'customer', text: "Missing shingles.", delay: 51000 },
            { role: 'ai', text: "Got it. It sounds like there might be some issues there. Are you the homeowner?", delay: 53000 },
            { role: 'customer', text: "Yes.", delay: 58000 },
            { role: 'ai', text: "Perfect. Can you please verify your address so we can send our roofing expert to the correct location?", delay: 59000 },
            { role: 'customer', text: "1623 Red Cloud Drive, Dallas, TX 75217.", delay: 62000 },
            { role: 'ai', text: "Thank you for that information. Based on what we've discussed, it sounds like you might be a good candidate for our roof replacement program.", delay: 68000 },
            { role: 'ai', text: "Would you be open to scheduling a free, no-obligation consultation with one of our roofing experts?", delay: 75000 },
            { role: 'customer', text: "Sure.", delay: 80000 },
            { role: 'ai', text: "Great. What date would you prefer for the consultation?", delay: 81000 },
            { role: 'customer', text: "What date is y'all available?", delay: 84000 },
            { role: 'ai', text: "We have several slots available for tomorrow. 12 p.m., 12:30 p.m., 1 p.m., 1:30 p.m., 2 p.m. Which time works best for you?", delay: 86000 },
            { role: 'customer', text: "As long as they do it before 2 p.m.", delay: 94000 },
            { role: 'ai', text: "Got it. How about 1:30 p.m.? Would that work for you?", delay: 97000 },
            { role: 'customer', text: "That's fine. Early.", delay: 100000 },
            { role: 'ai', text: "Let's go with 1 p.m. then. I'll book that slot for you.", delay: 102000 },
            { role: 'ai', text: "Your consultation has been successfully booked for tomorrow, October 11th at 1 p.m. Thank you for your time!", delay: 106000 },
            { role: 'customer', text: "Thank you.", delay: 114000 },
            { role: 'ai', text: "You're welcome. Take care!", delay: 116000 },
        ]
    },
    {
        id: 4,
        title: "Home Buyer Call",
        industry: "Real Estate",
        audioSrc: "/4-Demo.wav",
        audioDuration: 240000, // ~4 minutes
        conversation: [
            { role: 'ai', text: "Hi, this is Sam with Tennessee Homebuyers. How can I help you today?", delay: 0 },
            { role: 'customer', text: "Hi, I need to sell my house.", delay: 4000 },
            { role: 'ai', text: "Okay, yeah, absolutely. I can help with that. Can I get your name?", delay: 6000 },
            { role: 'customer', text: "Samantha.", delay: 10000 },
            { role: 'ai', text: "Nice to meet you, Samantha. What's the address of the property you're looking to sell?", delay: 11000 },
            { role: 'customer', text: "It is 123 Main Street.", delay: 15000 },
            { role: 'ai', text: "Gotcha, thank you. And what city and zip code is that in?", delay: 17000 },
            { role: 'customer', text: "It's in Murfreesboro 37127.", delay: 20000 },
            { role: 'ai', text: "Perfect, thank you for that. So Samantha, what's going on with the house? What made you decide to reach out?", delay: 22000 },
            { role: 'customer', text: "I need to get it sold. I'm getting a divorce.", delay: 28000 },
            { role: 'ai', text: "Oh gosh, I'm really sorry Samantha, that's such a heavy thing to be going through. We'll take this one step at a time, okay? No pressure at all.", delay: 31000 },
            { role: 'ai', text: "Is the divorce finalized already?", delay: 40000 },
            { role: 'customer', text: "No, it's not finalized yet.", delay: 43000 },
            { role: 'ai', text: "Okay, gotcha. That limbo part is really hard, you know? So it sounds like you're trying to get the house taken care of before everything is finalized.", delay: 45000 },
            { role: 'ai', text: "Let me ask you a few quick things about the house if that's okay. How many bedrooms and bathrooms does it have?", delay: 54000 },
            { role: 'customer', text: "It's a two bed one bath.", delay: 60000 },
            { role: 'ai', text: "Gotcha, thank you. And about how many square feet is it?", delay: 62000 },
            { role: 'customer', text: "It's like 1500 square feet.", delay: 66000 },
            { role: 'ai', text: "Got it, thanks. And do you know roughly when it was built?", delay: 68000 },
            { role: 'customer', text: "I have no idea.", delay: 72000 },
            { role: 'ai', text: "No problem at all. Is it a single family home or is it like a townhouse or condo?", delay: 74000 },
            { role: 'customer', text: "It's a townhouse.", delay: 78000 },
            { role: 'ai', text: "Gotcha. And how would you describe the overall condition of the place right now?", delay: 80000 },
            { role: 'customer', text: "It's fine. It probably needs some updating.", delay: 84000 },
            { role: 'ai', text: "Okay, that makes sense. Kind of livable, but dated. Are there any major repairs needed?", delay: 87000 },
            { role: 'customer', text: "Nothing major. It just really needs to be updated.", delay: 92000 },
            { role: 'ai', text: "Gotcha. And is anyone living there right now?", delay: 96000 },
            { role: 'customer', text: "Yeah, I am.", delay: 99000 },
            { role: 'ai', text: "Okay, got it. And do you have a mortgage on the place? Roughly what do you owe?", delay: 101000 },
            { role: 'customer', text: "Yeah, I owe like a hundred and fifteen maybe on it.", delay: 106000 },
            { role: 'ai', text: "Okay, gotcha. And last thing here, what are you hoping to get for it?", delay: 110000 },
            { role: 'customer', text: "I have no idea.", delay: 115000 },
            { role: 'ai', text: "No problem at all. A lot of people aren't sure yet. Based on what you've told me, I think it'd help to have one of our team members come out and take a look in person.", delay: 117000 },
            { role: 'ai', text: "We could do Tuesday at 10 a.m. or Tuesday at 12 p.m. Which of those would work better for you?", delay: 128000 },
            { role: 'customer', text: "10 a.m.", delay: 136000 },
            { role: 'ai', text: "Perfect. So I have you down for Tuesday, January 20th at 10 a.m. at 123 Main Street, Murfreesboro. Caleb will be the one coming out to meet with you.", delay: 138000 },
            { role: 'customer', text: "Okay, yep, sounds good.", delay: 148000 },
            { role: 'ai', text: "Samantha, thank you so much for trusting me with all of this today. I know the divorce stuff is a lot to carry. This visit is just about giving you clarity and options. No pressure at all.", delay: 150000 },
            { role: 'ai', text: "Take care and we'll see you Tuesday.", delay: 162000 },
            { role: 'customer', text: "Alright, thanks. Bye bye.", delay: 166000 },
        ]
    }
];

type Demo = typeof demos[0];

function DemoCard({
    demo,
    index,
    isPlaying,
    progress,
    currentLineIndex,
    onPlay,
}: {
    demo: Demo;
    index: number;
    isPlaying: boolean;
    progress: number;
    currentLineIndex: number;
    onPlay: () => void;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Auto-scroll to current line
    useEffect(() => {
        if (isPlaying && currentLineIndex >= 0 && containerRef.current && lineRefs.current[currentLineIndex]) {
            const container = containerRef.current;
            const lineElement = lineRefs.current[currentLineIndex];
            if (lineElement) {
                const containerTop = container.scrollTop;
                const containerHeight = container.clientHeight;
                const lineTop = lineElement.offsetTop - container.offsetTop;
                const lineHeight = lineElement.clientHeight;

                // Scroll so the current line is in the upper third of the container
                const targetScroll = lineTop - containerHeight / 4;

                if (lineTop < containerTop || lineTop + lineHeight > containerTop + containerHeight) {
                    container.scrollTo({
                        top: Math.max(0, targetScroll),
                        behavior: 'smooth'
                    });
                }
            }
        }
    }, [currentLineIndex, isPlaying]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={onPlay}
            className={`glass-card bg-[#0a0a0f] border overflow-hidden flex flex-col cursor-pointer transition-all duration-300 ${isPlaying ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/10' : 'border-white/10 hover:border-emerald-500/30'}`}
        >
            {/* Header */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
                <div>
                    <h3 className="text-white font-semibold text-sm">{demo.title}</h3>
                    <p className="text-gray-500 text-xs">{demo.industry}</p>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg ${isPlaying ? 'bg-emerald-500' : 'bg-white'}`}>
                    {isPlaying ? (
                        <Pause className="w-4 h-4 text-white fill-current" />
                    ) : (
                        <Play className="w-4 h-4 text-black fill-current ml-0.5" />
                    )}
                </div>
            </div>

            {/* Progress bar */}
            <div className="h-1 bg-white/5">
                <div className="h-full bg-emerald-500 transition-all duration-100" style={{ width: `${progress}%` }} />
            </div>

            {/* Conversation */}
            <div ref={containerRef} className={`p-4 flex-1 space-y-3 min-h-[200px] max-h-[300px] relative ${isPlaying ? 'overflow-y-auto' : 'overflow-hidden'}`}>
                {demo.conversation.map((line, idx) => (
                    <motion.div
                        key={idx}
                        ref={(el) => { lineRefs.current[idx] = el; }}
                        initial={{ opacity: 0.3 }}
                        animate={{
                            opacity: currentLineIndex >= idx ? 1 : 0.3,
                            scale: currentLineIndex === idx ? 1.01 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                        className={`flex gap-2 ${line.role === 'ai' ? '' : 'flex-row-reverse'}`}
                    >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${line.role === 'ai' ? 'bg-emerald-500 text-black' : 'bg-white/10 text-white'}`}>
                            {line.role === 'ai' ? 'AI' : 'C'}
                        </div>
                        <div className={`py-2 px-3 rounded-xl text-xs leading-relaxed max-w-[85%] ${line.role === 'ai' ? 'bg-white/5 text-white/80 rounded-tl-none' : 'bg-emerald-500/10 text-emerald-200 rounded-tr-none'} ${currentLineIndex === idx ? 'ring-1 ring-emerald-500/40' : ''}`}>
                            {line.text}
                        </div>
                    </motion.div>
                ))}

                {!isPlaying && progress === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]">
                        <p className="text-white/50 text-xs font-medium">Click to play</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

export function VoiceDemo() {
    const [activeDemo, setActiveDemo] = useState<number | null>(null);
    const [progress, setProgress] = useState(0);
    const [currentLineIndex, setCurrentLineIndex] = useState(-1);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const isPlaying = activeDemo !== null;
    const currentDemo = activeDemo !== null ? demos[activeDemo] : null;
    const currentConversation = currentDemo?.conversation || [];

    // Handle audio playback for demos with real audio
    useEffect(() => {
        const demo = activeDemo !== null ? demos[activeDemo] : null;

        if (demo?.audioSrc) {
            // Stop previous audio if playing
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }

            audioRef.current = new Audio(demo.audioSrc);
            audioRef.current.play().catch(console.error);

            const handleTimeUpdate = () => {
                if (audioRef.current && demo.audioDuration) {
                    const currentMs = audioRef.current.currentTime * 1000;
                    setCurrentTime(currentMs);
                    setProgress((currentMs / demo.audioDuration) * 100);
                }
            };

            const handleEnded = () => {
                setActiveDemo(null);
                setProgress(0);
                setCurrentLineIndex(-1);
                setCurrentTime(0);
            };

            audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
            audioRef.current.addEventListener('ended', handleEnded);

            return () => {
                if (audioRef.current) {
                    audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
                    audioRef.current.removeEventListener('ended', handleEnded);
                    audioRef.current.pause();
                    audioRef.current = null;
                }
            };
        } else if (activeDemo === null && audioRef.current) {
            audioRef.current.pause();
            audioRef.current = null;
        }
    }, [activeDemo]);

    // Simulated progress for demos without real audio
    useEffect(() => {
        let interval: NodeJS.Timeout;
        // Only simulate for demos without audioSrc
        if (isPlaying && currentDemo && !currentDemo.audioSrc) {
            const duration = currentDemo.audioDuration || 8000;

            interval = setInterval(() => {
                setCurrentTime((prev) => {
                    const newTime = prev + 80;
                    if (newTime >= duration) {
                        setActiveDemo(null);
                        setProgress(0);
                        setCurrentLineIndex(-1);
                        return 0;
                    }
                    setProgress((newTime / duration) * 100);
                    return newTime;
                });
            }, 80);
        }
        return () => clearInterval(interval);
    }, [isPlaying, activeDemo, currentDemo]);

    // Track current line based on time
    useEffect(() => {
        if (isPlaying && currentConversation.length > 0) {
            let activeLine = -1;
            for (let i = currentConversation.length - 1; i >= 0; i--) {
                if (currentTime >= currentConversation[i].delay) {
                    activeLine = i;
                    break;
                }
            }

            if (activeLine !== currentLineIndex) {
                setCurrentLineIndex(activeLine);
            }
        } else if (!isPlaying) {
            setCurrentLineIndex(-1);
        }
    }, [currentTime, isPlaying, currentLineIndex, currentConversation]);

    const handlePlay = useCallback((index: number) => {
        if (activeDemo === index) {
            if (audioRef.current && index === 0) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
            setActiveDemo(null);
            setProgress(0);
            setCurrentLineIndex(-1);
            setCurrentTime(0);
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
            setActiveDemo(index);
            setProgress(0);
            setCurrentLineIndex(-1);
            setCurrentTime(0);
        }
    }, [activeDemo]);

    return (
        <div className="w-full max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Your Tone, Your Rules.</h2>
                <p className="text-white/60 text-lg">Indistinguishable from a human agent. Try it yourself.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {demos.map((demo, index) => (
                    <DemoCard
                        key={demo.id}
                        demo={demo}
                        index={index}
                        isPlaying={activeDemo === index}
                        progress={activeDemo === index ? progress : 0}
                        currentLineIndex={activeDemo === index ? currentLineIndex : -1}
                        onPlay={() => handlePlay(index)}
                    />
                ))}
            </div>
        </div>
    );
}
