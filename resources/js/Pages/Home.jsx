import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';
import SignalWave from '@/Components/SignalWave';
import KeyStatsSection from '@/Components/KeyStatsSection';
import WelcomeVideoSection from '@/Components/WelcomeVideoSection';
import AnimatedHeading from '@/Components/AnimatedHeading';

const SECTOR_DATA = [
    {
        title: 'Homeland Security & Defense',
        tag: 'MISSION CRITICAL TIER-1',
        headline: 'Tactical Voice, Encrypted DMR & P25 Networks',
        description: 'Secure, zero-interruption radio communication topologies engineered for defense forces, tactical SWAT squads, and central police organizations operating in hostile RF environments.',
        features: [
            'AES-256 Bit Hardware Encryption',
            'Full Duplex Interoperability Gateways',
            'MIL-STD-810G Rugged Handsets',
            'Sub-300ms Call Setup Latency'
        ],
        image: '/storage/media/sectors/p1.jpg',
        specs: { coverage: '35–50 km Direct Line-of-Sight', channels: '1024 Secure Digital Channels', frequency: 'VHF 136-174 / UHF 400-470 MHz' }
    },
    {
        title: 'Railways & Metro Transit',
        tag: 'LTE-R & CAB RADIO',
        headline: 'Train-to-Trackside Broadband & Passenger Security',
        description: 'Railway-certified wireless solutions conforming to EN 50155. Providing continuous high-speed voice dispatch, train collision avoidance telemetry, and mission-critical cab communications.',
        features: [
            'Doppler Compensation up to 500 km/h',
            'MCPTT Mission Critical Push-to-Talk',
            'Dual Redundant RF Hot Standby',
            'Driver-Guard Emergency Intercom'
        ],
        image: '/storage/media/sectors/LTTE-R.jpeg',
        specs: { coverage: 'Continuous Corridor Coverage', speed: 'Up to 500 km/h Operation', latency: '< 50ms Priority Call Setup' }
    },
    {
        title: 'Oil, Gas & Petrochemical',
        tag: 'ATEX & INTRINSICALLY SAFE',
        headline: 'Explosion-Proof Terminals for Hazardous Zones',
        description: 'Zone 1 & Zone 2 certified communications equipment designed to prevent electrical sparks in flammable refineries, offshore drilling platforms, and chemical storage facilities.',
        features: [
            'ATEX / IECEx Certified Handhelds',
            'Gas Group IIA, IIB, IIC Protection',
            'IP68 Submersible Ingress Proofing',
            'Emergency Man-Down & Lone-Worker Alarms'
        ],
        image: '/storage/media/sectors/back1.png',
        specs: { cert: 'ATEX Zone 1 / 21 Certified', ingress: 'IP68 (2m Submersion for 4h)', audio: 'Noise-Cancelling Boom Mics' }
    },
    {
        title: 'Mining & Heavy Industries',
        tag: 'DEEP MINE & HIGH-NOISE',
        headline: 'Underground Leaky Feeder & Repeater Topologies',
        description: 'Ruggedized repeater and telemetry systems ensuring continuous communication through subterranean tunnels, open-cast mines, steel mills, and heavy logistics yards.',
        features: [
            'Leaky Feeder Distributed Antenna Arrays',
            'Heavy Equipment Anti-Vibration Mounts',
            'Ultra-Loud 3W Acoustic Speaker Drivers',
            'High-Gain Diamond Mast Antennas'
        ],
        image: '/storage/media/sectors/Diamond_Antenna_1.jpg',
        specs: { penetration: 'Subterranean Multi-Shaft RF', chassis: 'Die-cast Aluminum Alloy', battery: 'High-Capacity 3000mAh Lithium' }
    }
];

// Helper to format heading with dynamic dual-tone glowing gradient on the key phrase
const formatHeading = (text) => {
    if (!text) return null;
    const words = text.trim().split(' ');
    if (words.length <= 1) {
        return <span className="text-white drop-shadow-xl">{text}</span>;
    }
    const lastWord = words.pop();
    const leadWords = words.join(' ');
    return (
        <>
            <span className="text-white drop-shadow-xl">{leadWords} </span>
            <span className="bg-gradient-to-r from-amber-300 via-beacon to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(245,158,11,0.45)]">
                {lastWord}
            </span>
        </>
    );
};

const getSectorIcon = (idx) => {
    switch (idx) {
        case 0:
            return (
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            );
        case 1:
            return (
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h8m-6 4h4M6 3h12a2 2 0 012 2v11a3 3 0 01-3 3H7a3 3 0 01-3-3V5a2 2 0 012-2zm2 17l-2 2m12-2l2 2" />
                </svg>
            );
        case 2:
            return (
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343a7.975 7.975 0 012.344 5.657c0 2.122-.859 4.157-2.343 5.657z" />
                </svg>
            );
        case 3:
            return (
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            );
        default:
            return null;
    }
};

export default function Home({ banners = [], categories = [], featuredProducts = [], stats = [], testimonials = [], oemPartners = [], seo = {} }) {
    const [selectedSector, setSelectedSector] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Default hero slides if none in database
    const slides = banners.length > 0 ? banners : [
        {
            heading: 'CONNECTION EVERYWHERE',
            subheading: 'World-class wireless communication solutions engineered for India’s defense, homeland security, and critical industrial sectors.',
            image_path: 'media/banners/banner1.png',
            cta_label: 'Explore Products',
            cta_url: '/products',
            badge: 'MISSION CRITICAL TIER-1 • WPC TYPE APPROVED',
            chips: ['MIL-STD-810G Rugged', 'AES-256 Encryption', '35–50 km Range']
        },
        {
            heading: 'SEAMLESS COMMUNICATION',
            subheading: 'Integrated DMR, TETRA, and P25 trunking architectures built for zero failure in high-risk operational environments.',
            image_path: 'media/banners/banner2.jpg',
            cta_label: 'View DMR Systems',
            cta_url: '/products',
            badge: 'TACTICAL DMR & TETRA • ENCRYPTED VOICE',
            chips: ['Zero-Interruption Voice', 'Sub-300ms Call Setup', 'Full Duplex Interop']
        },
        {
            heading: 'PTT OVER CELLULAR',
            subheading: 'Nationwide instant group voice and live dispatch over LTE & Wi-Fi networks — keeping emergency forces connected without range limits.',
            image_path: 'media/banners/banner3.jpg',
            cta_label: 'Discover PoC Platforms',
            cta_url: '/products',
            badge: 'BROADBAND PoC & LTE • NATIONWIDE CARRIER',
            chips: ['Unlimited Range Dispatch', 'Live GPS Tracking', 'Instant SOS Emergency']
        },
        {
            heading: 'STAY CONNECTED',
            subheading: 'Turnkey wireless communications and engineering excellence trusted by the Parliament of India, Delhi Police, and Indian Railways.',
            image_path: 'media/banners/banner4.jpg',
            cta_label: 'Consult with Engineering Desk',
            cta_url: '/contact-us',
            badge: 'GOVT. OF INDIA WPC & TEC APPROVED SUPPLIER',
            chips: ['GeM Registered OEM', 'TEC & WPC Certified', 'Turnkey Network EPC']
        }
    ];

    const SLIDE_DURATION = 3800; // 3.8s for lively, frequent transitions

    // Continuous smooth auto-advance every 3.8s, resetting when slide changes or paused
    useEffect(() => {
        if (slides.length <= 1 || isPaused) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, SLIDE_DURATION);
        return () => clearInterval(timer);
    }, [currentSlide, slides.length, isPaused]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <MainLayout>
            <Seo
                title={seo?.title || 'Sanchar Telesystems — Mission-Critical Wireless Communication Systems'}
                description={seo?.description || 'India’s premier supplier and turnkey contractor for DMR, TETRA, PoC over Cellular, and Railway LTE-R communication networks.'}
                canonicalPath="/"
            />

            {/* =========================================================================
                1. HERO SECTION WITH ORIGINAL LIVE BANNERS CAROUSEL
            ========================================================================= */}
            <section 
                className="relative bg-slate-950 text-paper overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Background Slider Imagery — Vivid, High-Visibility with Smooth Ken Burns Motion */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {slides.map((s, idx) => (
                        <div
                            key={s.id || idx}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                                currentSlide === idx ? 'opacity-90 sm:opacity-95 z-10' : 'opacity-0 pointer-events-none z-0'
                            }`}
                        >
                            <img
                                src={`/storage/${s.image_path}`}
                                alt={s.heading}
                                className={`w-full h-full object-cover object-center transform transition-transform duration-[4200ms] ease-out will-change-transform ${
                                    currentSlide === idx ? 'scale-108' : 'scale-100'
                                }`}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/storage/media/banners/banner1.png';
                                }}
                            />
                        </div>
                    ))}
                    {/* Cinematic directional gradient: high contrast behind text on left, clear & vivid view of banner photo on center/right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 sm:via-slate-950/35 to-slate-950/10 z-10 pointer-events-none" />
                    {/* Bottom and top edge vignette blends */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/80 via-slate-950/30 to-transparent z-10 pointer-events-none" />
                </div>

                <div className="container-content relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[480px]">
                        {/* Slide Content with Kinetic Masked Typography & Staggered Telemetry Entrance */}
                        <div className="lg:col-span-8">
                            <div key={currentSlide} className="space-y-6">
                                {/* Top Operational Pill Badge */}
                                <div className="animate-hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-beacon/35 bg-black/50 backdrop-blur-md text-beacon font-mono text-xs tracking-wider uppercase shadow-md">
                                    <span className="w-2 h-2 rounded-full bg-beacon animate-pulse" />
                                    <span>{slides[currentSlide].badge || 'TELECOM ENGINEERING • WPC TYPE APPROVED'}</span>
                                </div>

                                {/* Masked Kinetic Dual-Tone Heading */}
                                <div className="py-1">
                                    <AnimatedHeading
                                        key={currentSlide}
                                        as="h1"
                                        immediate={true}
                                        delay={60}
                                        stagger={42}
                                        highlight="last"
                                        highlightCount={1}
                                        className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.12] text-white drop-shadow-xl"
                                        gradientClass="bg-gradient-to-r from-amber-300 via-beacon to-amber-400 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(245,158,11,0.45)] animate-text-sheen"
                                    >
                                        {slides[currentSlide].heading}
                                    </AnimatedHeading>
                                </div>

                                {/* Luminous Telemetry Tracer Accent Line */}
                                <div className="relative h-1 w-28 overflow-hidden rounded-full bg-white/15 my-1">
                                    <div className="animate-hero-tracer h-full w-full bg-gradient-to-r from-beacon via-amber-400 to-transparent rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                                </div>

                                {/* Subtitle with Blur-to-Focus Motion */}
                                <p className="animate-hero-subtitle text-lg sm:text-xl text-slate-200/95 max-w-2xl leading-relaxed font-sans min-h-[3.5rem] drop-shadow-md">
                                    {slides[currentSlide].subheading}
                                </p>

                                {/* Animated Telemetry Capability Chips */}
                                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                                    {(slides[currentSlide].chips || ['WPC & TEC Approved', 'MIL-STD-810 Tested', 'Govt. of India OEM']).map((chip, chipIdx) => (
                                        <div 
                                            key={chipIdx} 
                                            className={`animate-hero-chip-${chipIdx + 1} inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/45 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/90 shadow-sm`}
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            <span>{chip}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Staggered CTA Buttons */}
                                <div className="animate-hero-cta pt-3 flex flex-wrap items-center gap-4">
                                    <Link 
                                        href={slides[currentSlide].cta_url || '/products'} 
                                        className="btn-shimmer !py-3.5 !px-8 text-sm uppercase tracking-wider font-mono font-bold shadow-xl hover:shadow-amber-500/40"
                                    >
                                        {slides[currentSlide].cta_label || 'Explore Products'}
                                    </Link>

                                    <Link 
                                        href="/contact-us" 
                                        className="btn-outline-paper !py-3.5 !px-6 text-sm font-mono uppercase tracking-wider text-white bg-black/35 backdrop-blur-md hover:bg-black/60 border border-white/25 hover:border-white/50"
                                    >
                                        Engineering Consultation
                                    </Link>
                                </div>
                            </div>

                            {/* Slide Controls & Live Progress Telemetry */}
                            <div className="pt-8 flex items-center gap-4">
                                {/* Slide Counter Badge */}
                                <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-white/90 flex items-center gap-1.5 shadow-md select-none">
                                    <span className="text-beacon">0{currentSlide + 1}</span>
                                    <span className="text-white/40">/</span>
                                    <span>0{slides.length}</span>
                                </div>

                                <button 
                                    onClick={prevSlide}
                                    className="h-9 w-9 rounded-full border border-white/20 bg-black/40 hover:bg-black/70 text-white/90 hover:text-beacon hover:border-beacon/60 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                                    aria-label="Previous Slide"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button 
                                    onClick={nextSlide}
                                    className="h-9 w-9 rounded-full border border-white/20 bg-black/40 hover:bg-black/70 text-white/90 hover:text-beacon hover:border-beacon/60 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                                    aria-label="Next Slide"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                <div className="flex items-center gap-2 ml-1">
                                    {slides.map((s, dotIdx) => (
                                        <button
                                            key={dotIdx}
                                            onClick={() => setCurrentSlide(dotIdx)}
                                            className={`relative h-2 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                                                currentSlide === dotIdx ? 'w-14 bg-white/25 shadow-sm' : 'w-3 bg-white/30 hover:bg-white/60 hover:w-5'
                                            }`}
                                            aria-label={`Go to slide ${dotIdx + 1}: ${s.heading}`}
                                            title={`Slide ${dotIdx + 1}: ${s.heading}`}
                                        >
                                            {currentSlide === dotIdx && (
                                                <span 
                                                    className="absolute inset-0 bg-beacon rounded-full animate-slide-progress shadow-sm shadow-beacon/50" 
                                                    style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right: Real-time Telemetry Status Card (Floating Glass HUD) */}
                        <div className="lg:col-span-4 hidden lg:block">
                            <div className="card-dual !bg-slate-950/65 dark:!bg-[#12151b]/75 border border-white/15 p-6 space-y-5 shadow-2xl backdrop-blur-xl">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
                                    <span className="text-beacon font-bold">SYSTEM TELEMETRY</span>
                                    <span className="flex items-center gap-1.5 text-emerald-400">
                                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                        ONLINE
                                    </span>
                                </div>

                                <div className="space-y-3 font-mono text-xs text-slate-300">
                                    <div className="flex justify-between py-1 border-b border-white/5">
                                        <span className="text-slate-400">DISPATCH PROTOCOL</span>
                                        <span className="text-white font-semibold">DMR TIER III / TETRA</span>
                                    </div>
                                    <div className="flex justify-between py-1 border-b border-white/5">
                                        <span className="text-slate-400">SPECTRUM CLEARANCE</span>
                                        <span className="text-white font-semibold">WPC ETA VERIFIED</span>
                                    </div>
                                    <div className="flex justify-between py-1 border-b border-white/5">
                                        <span className="text-slate-400">LATENCY BENCHMARK</span>
                                        <span className="text-beacon font-bold">&lt; 300 MS DIRECT PTT</span>
                                    </div>
                                    <div className="flex justify-between py-1 border-b border-white/5">
                                        <span className="text-slate-400">SECURITY ENCRYPTION</span>
                                        <span className="text-white font-semibold">AES-256 BIT E2EE</span>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <SignalWave className="w-full h-12 text-beacon/80" />
                                </div>

                                <div className="text-[11px] font-mono text-slate-400 text-center">
                                    Continuous Carrier Wave • Okhla RF Testing Lab
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================================
                2. NATIONAL DEPLOYMENT PROOF BAR
            ========================================================================= */}
            <section className="bg-white dark:bg-navy border-y border-slate-200 dark:border-navy-border/80 py-8 transition-colors duration-300">
                <div className="container-content">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="shrink-0 max-w-sm">
                            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-beacon font-bold block mb-1">
                                CRITICAL DEPLOYMENTS
                            </span>
                            <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-paper leading-snug">
                                Trusted by National Security & Key Infrastructure
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 items-center flex-1">
                            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/60 dark:bg-navy-surface/50 hover:bg-white dark:hover:bg-navy-surface hover:border-amber-500/40 dark:hover:border-beacon/30 hover:shadow-lg hover:shadow-amber-500/5 dark:hover:shadow-beacon/5 hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-lg bg-white dark:bg-white/10 p-1.5 flex items-center justify-center border border-slate-200/60 dark:border-white/10 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                                    <img 
                                        src="/storage/media/clients/Parliament.png" 
                                        alt="Parliament of India" 
                                        className="max-h-full max-w-full object-contain filter group-hover:filter-none transition-all"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <span className="block text-xs font-bold text-slate-900 dark:text-paper group-hover:text-amber-600 dark:group-hover:text-beacon transition-colors truncate">
                                        Parliament of India
                                    </span>
                                    <span className="block text-[10px] font-mono text-slate-500 dark:text-steel uppercase tracking-wider">
                                        New Delhi &bull; Security Grid
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/60 dark:bg-navy-surface/50 hover:bg-white dark:hover:bg-navy-surface hover:border-amber-500/40 dark:hover:border-beacon/30 hover:shadow-lg hover:shadow-amber-500/5 dark:hover:shadow-beacon/5 hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-lg bg-white dark:bg-white/10 p-1.5 flex items-center justify-center border border-slate-200/60 dark:border-white/10 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                                    <img 
                                        src="/storage/media/clients/DelhiPolice.png" 
                                        alt="Delhi Police" 
                                        className="max-h-full max-w-full object-contain filter group-hover:filter-none transition-all"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <span className="block text-xs font-bold text-slate-900 dark:text-paper group-hover:text-amber-600 dark:group-hover:text-beacon transition-colors truncate">
                                        Delhi Police
                                    </span>
                                    <span className="block text-[10px] font-mono text-slate-500 dark:text-steel uppercase tracking-wider">
                                        2,500+ PoC Radios
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/60 dark:bg-navy-surface/50 hover:bg-white dark:hover:bg-navy-surface hover:border-amber-500/40 dark:hover:border-beacon/30 hover:shadow-lg hover:shadow-amber-500/5 dark:hover:shadow-beacon/5 hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-lg bg-white dark:bg-white/10 p-1.5 flex items-center justify-center border border-slate-200/60 dark:border-white/10 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                                    <img 
                                        src="/storage/media/clients/sdb.png" 
                                        alt="Surat Diamond Bourse" 
                                        className="max-h-full max-w-full object-contain filter group-hover:filter-none transition-all"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <span className="block text-xs font-bold text-slate-900 dark:text-paper group-hover:text-amber-600 dark:group-hover:text-beacon transition-colors truncate">
                                        Surat Diamond Bourse
                                    </span>
                                    <span className="block text-[10px] font-mono text-slate-500 dark:text-steel uppercase tracking-wider">
                                        Private LTE Architecture
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================================
                2B. WELCOME & CORPORATE HD VIDEO SHOWCASE (FROM ORIGINAL WEBSITE)
            ========================================================================= */}
            <WelcomeVideoSection />


            {/* =========================================================================
                3. TAILORED INDUSTRY SECTORS (INTERACTIVE TABS)
            ========================================================================= */}
            <section className="py-20 sm:py-24 bg-slate-50 dark:bg-navy-dark transition-colors duration-300 relative overflow-hidden">
                <div className="container-content relative z-10">
                    <div className="max-w-3xl mb-12">
                        <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-beacon font-bold block mb-2">
                            TAILORED INDUSTRY ARCHITECTURE
                        </span>
                        <AnimatedHeading 
                            as="h2" 
                            highlight="last"
                            highlightCount={2}
                            className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-paper"
                        >
                            Engineered for Zero-Downtime Operations
                        </AnimatedHeading>
                        <p className="mt-3 text-slate-600 dark:text-steel leading-relaxed">
                            Every operational environment presents unique RF propagation physics. Explore how Sanchar architects purpose-built networks for India’s most demanding sectors.
                        </p>
                    </div>

                    {/* Interactive Icon-Enhanced Tab Controls */}
                    <div className="flex flex-wrap gap-2.5 p-2 rounded-2xl bg-slate-200/70 dark:bg-navy-surface border border-slate-300/80 dark:border-navy-border max-w-full mb-8 shadow-xs">
                        {SECTOR_DATA.map((sec, idx) => (
                            <button
                                key={sec.title}
                                onClick={() => setSelectedSector(idx)}
                                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                    selectedSector === idx
                                        ? 'bg-white dark:bg-beacon text-slate-950 dark:text-slate-950 shadow-md shadow-amber-500/10 dark:shadow-beacon/20 scale-[1.02]'
                                        : 'text-slate-600 dark:text-steel hover:text-slate-950 dark:hover:text-paper hover:bg-white/60 dark:hover:bg-white/5'
                                }`}
                            >
                                <span className={selectedSector === idx ? 'text-amber-600 dark:text-slate-950' : 'text-slate-400 dark:text-steel'}>
                                    {getSectorIcon(idx)}
                                </span>
                                <span>{sec.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Selected Sector Showcase Card with Telemetry Specs */}
                    <div className="panel p-8 sm:p-12 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-black/30">
                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                            <div className="lg:col-span-7 space-y-5">
                                <span className="badge-rf font-mono text-xs">
                                    {SECTOR_DATA[selectedSector].tag}
                                </span>

                                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-paper leading-snug">
                                    {SECTOR_DATA[selectedSector].headline}
                                </h3>

                                <p className="text-slate-600 dark:text-steel leading-relaxed">
                                    {SECTOR_DATA[selectedSector].description}
                                </p>

                                {/* Interactive Feature Checkmarks */}
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    {SECTOR_DATA[selectedSector].features.map((feat) => (
                                        <div 
                                            key={feat} 
                                            className="flex items-start gap-2.5 text-sm font-medium text-slate-800 dark:text-paper p-2 rounded-lg hover:bg-amber-500/5 dark:hover:bg-beacon/5 transition-colors group"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-amber-500/15 dark:bg-beacon/15 text-amber-600 dark:text-beacon flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <span className="leading-snug">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Engineering Telemetry Specs */}
                                {SECTOR_DATA[selectedSector].specs && (
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-white/10 font-mono text-xs">
                                        {Object.entries(SECTOR_DATA[selectedSector].specs).map(([key, value]) => (
                                            <div key={key} className="p-3 rounded-lg bg-slate-100/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10">
                                                <span className="block text-[10px] uppercase text-slate-500 dark:text-steel font-semibold tracking-wider">{key}</span>
                                                <span className="block text-xs font-bold text-slate-900 dark:text-paper truncate mt-0.5" title={value}>{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="pt-3 flex items-center gap-4">
                                    <Link 
                                        href="/contact-us" 
                                        className="btn-shimmer !py-3.5 !px-7 text-xs font-mono uppercase tracking-wider font-bold inline-flex items-center gap-2 group"
                                    >
                                        <span>Request {SECTOR_DATA[selectedSector].title.split('&')[0]} Architecture</span>
                                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Sector Imagery with Interactive Zoom & Verified Deployment Badge */}
                            <div className="lg:col-span-5 relative bg-slate-100 dark:bg-navy-dark rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center p-6 border border-slate-200 dark:border-navy-border/60 group shadow-lg">
                                <img 
                                    src={SECTOR_DATA[selectedSector].image} 
                                    alt={SECTOR_DATA[selectedSector].title}
                                    className="max-h-full w-auto object-contain rounded-lg shadow-sm transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                    <span>Field Proven</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================================
                4. FEATURED HARDWARE SHOWCASE GRID
            ========================================================================= */}
            <section className="py-20 sm:py-24 bg-white dark:bg-navy border-y border-slate-200 dark:border-navy-border transition-colors duration-300">
                <div className="container-content">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-beacon font-bold block mb-1">
                                MISSION-READY TERMINALS & SYSTEMS
                            </span>
                            <AnimatedHeading 
                                as="h2" 
                                highlight="last"
                                highlightCount={1}
                                className="text-3xl font-display font-bold text-slate-900 dark:text-paper"
                            >
                                Featured Wireless Hardware
                            </AnimatedHeading>
                            <p className="mt-2 text-slate-600 dark:text-steel text-sm">
                                High-durability handheld transceivers, dispatch consoles, and base stations in active deployment.
                            </p>
                        </div>
                        <Link 
                            href="/products" 
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-paper border-b-2 border-amber-500 dark:border-beacon pb-1 hover:text-amber-600 dark:hover:text-beacon transition-colors font-mono"
                        >
                            <span>Browse Complete 120+ Product Catalog</span>
                            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(featuredProducts || []).map((item) => (
                            <div 
                                key={item.id}
                                className="group relative flex flex-col justify-between border border-slate-200/90 dark:border-white/10 bg-white dark:bg-navy-surface rounded-2xl shadow-sm hover:border-amber-500/50 dark:hover:border-beacon/40 hover:shadow-2xl hover:shadow-amber-500/5 dark:hover:shadow-beacon/5 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                            >
                                <div className="flex-1 flex flex-col">
                                    {/* Image Pedestal with interactive zoom & ambient glow */}
                                    <div className="aspect-[4/3] w-full bg-slate-50/80 dark:bg-navy-dark/90 overflow-hidden relative flex items-center justify-center p-8 border-b border-slate-100 dark:border-navy-border/40">
                                        <img
                                            src={`/storage/${item.cover_image_path}`}
                                            alt={item.name}
                                            className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                                            loading="lazy"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = '/storage/media/products/1559989450_nx3220_ht.jpg';
                                            }}
                                        />

                                        {item.model_number && (
                                            <span className="absolute top-3 right-3 text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/85 dark:bg-slate-950/90 text-amber-400 dark:text-beacon border border-amber-500/25 shadow-sm font-semibold">
                                                {item.model_number}
                                            </span>
                                        )}
                                        
                                        <div className="absolute bottom-3 left-3">
                                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold bg-white/90 dark:bg-navy/90 text-slate-700 dark:text-paper/80 border border-slate-200 dark:border-white/10 shadow-xs">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                WPC Approved
                                            </span>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    <div className="p-6 space-y-3 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="badge-rf text-[10px]">
                                                {item.subcategory?.name || 'Radio System'}
                                            </span>
                                        </div>

                                        <h3 className="font-display font-bold text-lg text-slate-900 dark:text-paper group-hover:text-amber-600 dark:group-hover:text-beacon transition-colors min-h-[3.25rem] line-clamp-2 leading-snug">
                                            {item.name}
                                        </h3>

                                        <p className="text-xs sm:text-sm text-slate-600 dark:text-steel min-h-[2.5rem] line-clamp-2 leading-relaxed">
                                            {item.short_description || 'High-reliability wireless communication equipment engineered for critical infrastructure.'}
                                        </p>
                                    </div>
                                </div>

                                <div className="p-6 pt-4 border-t border-slate-100 dark:border-navy-border/40 mt-auto flex items-center justify-between bg-slate-50/50 dark:bg-navy-surface/30">
                                    <Link
                                        href={`/products/${item.subcategory?.category?.slug || 'professional-amateur-radio'}/${item.subcategory?.slug || 'dmr'}/${item.slug}`}
                                        className="text-xs font-mono font-semibold text-slate-900 dark:text-paper hover:text-amber-600 dark:hover:text-beacon flex items-center gap-1.5 group/link"
                                    >
                                        <span>Specifications</span>
                                        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>

                                    <Link
                                        href={`/contact-us?subject=Quote%20Request%20for%20${encodeURIComponent(item.name)}`}
                                        className="btn-shimmer !py-2 !px-4 text-xs font-mono uppercase font-bold shadow-sm hover:shadow-md"
                                    >
                                        RFQ
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                5. IMPACT METRICS (STATS) — ANIMATED SCROLL COUNTER & TIER-1 CSS EFFECTS
            ========================================================================= */}
            <KeyStatsSection stats={stats} />


            {/* =========================================================================
                6. OEM PARTNERS SHOWCASE
            ========================================================================= */}
            <section className="py-20 sm:py-24 bg-slate-50 dark:bg-navy-dark border-t border-slate-200 dark:border-navy-border transition-colors duration-300">
                <div className="container-content">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-beacon font-bold block mb-1">
                                GLOBAL TECHNOLOGY ALLIANCES
                            </span>
                            <AnimatedHeading 
                                as="h2" 
                                highlight="last"
                                highlightCount={1}
                                className="text-3xl font-display font-bold text-slate-900 dark:text-paper"
                            >
                                Authorized OEM Ecosystem
                            </AnimatedHeading>
                            <p className="mt-2 text-slate-600 dark:text-steel text-sm">
                                Direct factory relationships bringing global component standards to the Indian subcontinent.
                            </p>
                        </div>
                        <Link 
                            href="/oem-partners" 
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-paper hover:text-amber-600 dark:hover:text-beacon font-mono"
                        >
                            <span>View All 10 Partners</span>
                            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {(oemPartners || []).map((partner) => (
                            <a
                                key={partner.name}
                                href={partner.website_url || '#'}
                                target={partner.website_url && partner.website_url !== '#' ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="group relative p-6 rounded-2xl bg-white dark:bg-navy-surface border border-slate-200/90 dark:border-white/10 flex flex-col items-center justify-center min-h-[130px] text-center hover:border-amber-500/50 dark:hover:border-beacon/50 hover:shadow-xl hover:shadow-amber-500/5 dark:hover:shadow-beacon/5 hover:-translate-y-1.5 transition-all duration-300"
                            >
                                <img
                                    src={`/storage/${partner.logo_path}`}
                                    alt={partner.name}
                                    className="max-h-12 max-w-[120px] w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                                    loading="lazy"
                                />
                                <span className="mt-3 text-[11px] font-mono font-medium text-slate-500 dark:text-steel group-hover:text-slate-900 dark:group-hover:text-paper truncate w-full transition-colors">
                                    {partner.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                7. BOTTOM CALL TO ACTION
            ========================================================================= */}
            <section className="py-24 bg-white dark:bg-navy border-t border-slate-200 dark:border-navy-border transition-colors duration-300 relative overflow-hidden">
                {/* Ambient Radial Backdrop Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 dark:bg-beacon/5 rounded-full blur-3xl pointer-events-none" />

                <div className="container-content text-center max-w-3xl mx-auto space-y-6 relative z-10">
                    <span className="badge-rf text-xs">GOVERNMENT & ENTERPRISE PROCUREMENT</span>
                    <AnimatedHeading 
                        as="h2" 
                        highlight="last"
                        highlightCount={2}
                        className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-paper tracking-tight"
                    >
                        Ready to Engineer Your Wireless Network?
                    </AnimatedHeading>
                    <p className="text-slate-600 dark:text-steel text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                        Connect with our New Delhi engineering and spectrum clearance team for technical consultations, RF site propagation surveys, or GeM portal procurement assistance.
                    </p>
                    <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                        <Link href="/contact-us" className="btn-shimmer !py-3.5 !px-8 text-sm font-mono uppercase tracking-wider font-bold shadow-xl hover:shadow-amber-500/40">
                            Contact Technical Desk
                        </Link>
                        <a 
                            href="tel:+911146528894" 
                            className="btn-secondary !py-3.5 !px-6 text-sm font-mono inline-flex items-center gap-2 group"
                        >
                            <svg className="w-4 h-4 text-amber-600 dark:text-beacon transition-transform duration-200 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>Call +91 (11) 4652 8894</span>
                        </a>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
