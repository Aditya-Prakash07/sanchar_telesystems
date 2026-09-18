import { Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';
import KeyStatsSection from '@/Components/KeyStatsSection';
import WelcomeVideoSection from '@/Components/WelcomeVideoSection';
import AnimatedHeading from '@/Components/AnimatedHeading';

const SECTOR_DATA = [
    {
        title: 'Homeland Security & Defense',
        model: 'ST-200R',
        tag: 'MISSION CRITICAL TIER-1',
        headline: 'Tactical Voice, Encrypted DMR & P25 Networks',
        description: 'Secure, zero-interruption radio communication topologies and ruggedized 4G/LTE PoC terminals engineered for defense forces, tactical SWAT squads, and central police organizations operating in hostile RF environments.',
        features: [
            'AES-256 Bit Hardware Encryption',
            'Full Duplex Interoperability Gateways',
            'MIL-STD-810G & IP67 Rugged Handsets',
            'Sub-300ms Call Setup Latency'
        ],
        image: '/storage/media/products/1710240493_ST-200R(1).jpg',
        specs: { coverage: 'All-India 4G/LTE Range', channels: 'Unlimited Groups & Channels', battery: '3800 / 5000 mAh Li-Ion' }
    },
    {
        title: 'Railways & Metro Transit',
        model: 'LTE-R Cab Radio',
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
        model: 'ATEX V-710',
        tag: 'ATEX & INTRINSICALLY SAFE',
        headline: 'Explosion-Proof Terminals for Hazardous Zones',
        description: 'Zone 1 & Zone 2 certified communications equipment designed to prevent electrical sparks in flammable refineries, offshore drilling platforms, and chemical storage facilities.',
        features: [
            'ATEX / IECEx Certified Handhelds',
            'Gas Group IIA, IIB, IIC Protection',
            'IP68 Submersible Ingress Proofing',
            'Emergency Man-Down & Lone-Worker Alarms'
        ],
        image: '/storage/media/products/1707159990_ATEXV-710.png',
        specs: { cert: 'ATEX Zone 1 / 21 Certified', ingress: 'IP68 (2m Submersion for 4h)', audio: 'Noise-Cancelling Boom Mics' }
    },
    {
        title: 'Mining & Heavy Industries',
        model: 'Diamond Antenna',
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
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(59,130,246,0.55)]">
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

    const SLIDE_DURATION = 3400; // 3.4s fast transition

    // Continuous smooth auto-advance every 3.4s, resetting when slide changes or paused
    useEffect(() => {
        if (slides.length <= 1 || isPaused) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, SLIDE_DURATION);
        return () => clearInterval(timer);
    }, [currentSlide, slides.length, isPaused]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    // Featured Hardware single-row interactive shelf controls & telemetry
    const hardwareScrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateHardwareScrollState = () => {
        if (!hardwareScrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = hardwareScrollRef.current;
        setCanScrollLeft(scrollLeft > 15);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
    };

    useEffect(() => {
        const el = hardwareScrollRef.current;
        if (!el) return;
        updateHardwareScrollState();
        el.addEventListener('scroll', updateHardwareScrollState, { passive: true });
        window.addEventListener('resize', updateHardwareScrollState);
        return () => {
            el.removeEventListener('scroll', updateHardwareScrollState);
            window.removeEventListener('resize', updateHardwareScrollState);
        };
    }, [featuredProducts]);

    const scrollHardware = (direction) => {
        if (!hardwareScrollRef.current) return;
        const cardWidth = hardwareScrollRef.current.firstElementChild?.clientWidth || 360;
        const scrollDistance = cardWidth + 24;
        hardwareScrollRef.current.scrollBy({
            left: direction === 'next' ? scrollDistance : -scrollDistance,
            behavior: 'smooth'
        });
    };

    return (
        <MainLayout>
            <Seo
                title={seo?.title || 'Sanchar Telesystems — Mission-Critical Wireless Communication Systems'}
                description={seo?.description || 'India’s premier supplier and turnkey contractor for DMR, TETRA, PoC over Cellular, and Railway LTE-R communication networks.'}
                canonicalPath="/"
            />

            {/* =========================================================================
                1. HERO SECTION WITH ORIGINAL LIVE BANNERS CAROUSEL (EQUAL FULL VIEWPORT HEIGHT)
            ========================================================================= */}
            <section 
                className="relative bg-slate-950 text-paper overflow-hidden h-[100dvh] min-h-[640px] max-h-[980px] flex flex-col justify-center pt-20 pb-12 sm:pt-24 sm:pb-16"
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

                <div className="container-content relative z-10 my-auto">
                    <div className="min-h-[480px] grid lg:grid-cols-12 gap-8 items-center py-6 sm:py-10">
                        {/* Slide Content firmly anchored to the left side */}
                        <div className="lg:col-span-8 xl:col-span-7 max-w-2xl text-left">
                            <div key={currentSlide} className="space-y-6">
                                {/* Top Operational Pill Badge */}
                                <div className="animate-hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-beacon/35 bg-black/50 backdrop-blur-md text-beacon font-mono text-xs tracking-wider uppercase shadow-md">
                                    <span className="w-2 h-2 rounded-full bg-beacon animate-pulse" />
                                    <span>{slides[currentSlide].badge || 'TELECOM ENGINEERING • WPC TYPE APPROVED'}</span>
                                </div>

                                {/* Hero Heading with Smooth Kinetic & Interactive Letter Reveal */}
                                <div className="py-1">
                                    <AnimatedHeading
                                        key={currentSlide}
                                        as="h1"
                                        immediate={true}
                                        delay={30}
                                        letterStagger={24}
                                        highlight="last"
                                        highlightCount={1}
                                        className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.12] text-white drop-shadow-xl"
                                        gradientClass="bg-gradient-to-r from-blue-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(59,130,246,0.55)]"
                                    >
                                        {slides[currentSlide].heading}
                                    </AnimatedHeading>
                                </div>

                                {/* Luminous Telemetry Tracer Accent Line */}
                                <div className="relative h-1 w-28 overflow-hidden rounded-full bg-white/15 my-1">
                                    <div className="animate-hero-tracer h-full w-full bg-gradient-to-r from-beacon via-sky-400 to-transparent rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                                </div>

                                {/* Subtitle */}
                                <p className="text-lg sm:text-xl text-slate-200/95 max-w-2xl leading-relaxed font-sans min-h-[3.5rem] drop-shadow-md">
                                    {slides[currentSlide].subheading}
                                </p>

                                {/* Telemetry Capability Chips */}
                                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                                    {(slides[currentSlide].chips || ['WPC & TEC Approved', 'MIL-STD-810 Tested', 'Govt. of India OEM']).map((chip, chipIdx) => (
                                        <div 
                                             key={chipIdx} 
                                             className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/45 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/90 shadow-sm"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            <span>{chip}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="pt-3 flex flex-wrap items-center gap-4">
                                    <Link 
                                        href={slides[currentSlide].cta_url || '/products'} 
                                        className="btn-shimmer !py-3.5 !px-8 text-sm uppercase tracking-wider font-mono font-bold shadow-xl hover:shadow-blue-500/40"
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

                            {/* Slide Controls with Play/Pause and Live Progress */}
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

                                {/* Dedicated Play / Pause Toggle Button */}
                                <button 
                                    onClick={() => setIsPaused((prev) => !prev)}
                                    className="h-9 w-9 rounded-full border border-white/20 bg-black/40 hover:bg-black/70 text-white/90 hover:text-beacon hover:border-beacon/60 flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
                                    aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                                    title={isPaused ? "Play" : "Pause"}
                                >
                                    {isPaused ? (
                                        <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                        </svg>
                                    )}
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
                    </div>
                </div>
            </section>


            {/* =========================================================================
                2. NATIONAL DEPLOYMENT PROOF BAR
            ========================================================================= */}
            <section className="bg-slate-50/80 dark:bg-[#080c14] py-8 transition-colors duration-300">
                <div className="container-content">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <div className="shrink-0 max-w-sm">
                            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-beacon font-bold block mb-1">
                                CRITICAL DEPLOYMENTS
                            </span>
                            <h2 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-paper leading-snug">
                                Trusted by National Security & Key Infrastructure
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 items-center flex-1">
                            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/60 dark:bg-navy-surface/50 hover:bg-white dark:hover:bg-navy-surface hover:border-blue-500/40 dark:hover:border-beacon/30 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-beacon/5 hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-lg bg-white dark:bg-white/10 p-1.5 flex items-center justify-center border border-slate-200/60 dark:border-white/10 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                                    <img 
                                        src="/storage/media/clients/Parliament.png" 
                                        alt="Parliament of India" 
                                        className="max-h-full max-w-full object-contain filter group-hover:filter-none transition-all"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <span className="block text-xs font-bold text-slate-900 dark:text-paper group-hover:text-blue-600 dark:group-hover:text-beacon transition-colors truncate">
                                        Parliament of India
                                    </span>
                                    <span className="block text-[10px] font-mono text-slate-500 dark:text-steel uppercase tracking-wider">
                                        New Delhi &bull; Security Grid
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/60 dark:bg-navy-surface/50 hover:bg-white dark:hover:bg-navy-surface hover:border-blue-500/40 dark:hover:border-beacon/30 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-beacon/5 hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-lg bg-white dark:bg-white/10 p-1.5 flex items-center justify-center border border-slate-200/60 dark:border-white/10 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                                    <img 
                                        src="/storage/media/clients/DelhiPolice.png" 
                                        alt="Delhi Police" 
                                        className="max-h-full max-w-full object-contain filter group-hover:filter-none transition-all"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <span className="block text-xs font-bold text-slate-900 dark:text-paper group-hover:text-blue-600 dark:group-hover:text-beacon transition-colors truncate">
                                        Delhi Police
                                    </span>
                                    <span className="block text-[10px] font-mono text-slate-500 dark:text-steel uppercase tracking-wider">
                                        2,500+ PoC Radios
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/60 dark:bg-navy-surface/50 hover:bg-white dark:hover:bg-navy-surface hover:border-blue-500/40 dark:hover:border-beacon/30 hover:shadow-lg hover:shadow-blue-500/5 dark:hover:shadow-beacon/5 hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-lg bg-white dark:bg-white/10 p-1.5 flex items-center justify-center border border-slate-200/60 dark:border-white/10 shadow-sm shrink-0 group-hover:scale-105 transition-transform">
                                    <img 
                                        src="/storage/media/clients/sdb.png" 
                                        alt="Surat Diamond Bourse" 
                                        className="max-h-full max-w-full object-contain filter group-hover:filter-none transition-all"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <span className="block text-xs font-bold text-slate-900 dark:text-paper group-hover:text-blue-600 dark:group-hover:text-beacon transition-colors truncate">
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
            <section id="sectors" className="py-12 sm:py-14 bg-slate-50 dark:bg-navy-dark transition-colors duration-300 relative overflow-hidden">
                <div className="container-content relative z-10">
                    <div className="max-w-3xl mb-6 sm:mb-8">
                        <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-beacon font-bold block mb-1.5">
                            CROSS-INDUSTRY DOMAINS
                        </span>
                        <AnimatedHeading 
                            as="h2" 
                            highlightPhrase="Industry Verticals"
                            className="text-2xl sm:text-3xl lg:text-[34px] font-display font-bold text-slate-900 dark:text-paper"
                        >
                            Specialized Telecom for Critical Industry Verticals
                        </AnimatedHeading>
                        <p className="mt-2.5 text-slate-600 dark:text-steel max-w-2xl text-sm sm:text-base leading-relaxed">
                            Sanchar excels in offering reliable wireless communication solutions tailored for mission-critical operations across public safety, railways, petrochemical facilities, and heavy industries with DMR, TETRA, analog radio, and LTE systems.
                        </p>
                    </div>

                    {/* Interactive Icon-Enhanced Tab Controls */}
                    <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-200/70 dark:bg-navy-surface border border-slate-300/80 dark:border-navy-border max-w-full mb-6 shadow-xs">
                        {SECTOR_DATA.map((sec, idx) => (
                            <button
                                key={sec.title}
                                onClick={() => setSelectedSector(idx)}
                                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                                    selectedSector === idx
                                        ? 'bg-white dark:bg-beacon text-slate-950 dark:text-white shadow-md shadow-blue-500/10 dark:shadow-beacon/20 scale-[1.02]'
                                        : 'text-slate-600 dark:text-steel hover:text-slate-950 dark:hover:text-paper hover:bg-white/60 dark:hover:bg-white/5'
                                }`}
                            >
                                <span className={selectedSector === idx ? 'text-blue-600 dark:text-white' : 'text-slate-400 dark:text-steel'}>
                                    {getSectorIcon(idx)}
                                </span>
                                <span>{sec.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Selected Sector Showcase Card with Telemetry Specs */}
                    <div className="panel p-5 sm:p-8 border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-black/30">
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
                                             className="flex items-start gap-2.5 text-sm font-medium text-slate-800 dark:text-paper p-2 rounded-lg hover:bg-blue-500/5 dark:hover:bg-beacon/5 hover:translate-x-1.5 transition-all duration-200 group cursor-default"
                                        >
                                            <div className="w-5 h-5 rounded-full bg-blue-500/15 dark:bg-beacon/15 text-blue-600 dark:text-beacon flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
                                            <div key={key} className="p-3 rounded-lg bg-slate-100/80 dark:bg-white/[0.04] border border-slate-200/80 dark:border-white/10 hover:border-blue-500/40 dark:hover:border-beacon/40 hover:-translate-y-0.5 transition-all duration-200">
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
                                        <span>Inquire About {SECTOR_DATA[selectedSector].title.split('&')[0]} Solutions</span>
                                        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Sector Imagery with deep black pedestal in dark mode, Interactive Zoom & Verified Deployment Badge */}
                            <div className="lg:col-span-5 relative bg-gradient-to-b from-slate-100/80 via-slate-50/50 to-slate-100/90 dark:bg-black dark:from-black dark:via-black dark:to-black rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center p-6 border border-slate-200 dark:border-white/10 group shadow-xl">
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] dark:hidden pointer-events-none" />
                                <img 
                                    src={SECTOR_DATA[selectedSector].image} 
                                    alt={SECTOR_DATA[selectedSector].title}
                                    className="max-h-full w-auto object-contain rounded-lg transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_16px_32px_rgba(0,0,0,0.65)] relative z-10"
                                />
                                <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md border border-white/10 text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                                    <span>Field Proven</span>
                                </div>
                                {SECTOR_DATA[selectedSector].model && (
                                    <div className="absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded-md bg-blue-600/90 dark:bg-beacon/90 text-white font-mono text-[11px] font-bold tracking-wider uppercase shadow-md backdrop-blur-xs">
                                        Model: {SECTOR_DATA[selectedSector].model}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================================
                4. FEATURED HARDWARE SHOWCASE — SINGLE ROW INTERACTIVE SHELF
            ========================================================================= */}
            <section id="hardware" className="py-12 sm:py-14 bg-white dark:bg-navy transition-colors duration-300 relative overflow-hidden">
                <div className="container-content">
                    {/* Header with Title, Browse Catalog Link & Interactive Controls */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-6">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-beacon font-bold block mb-1">
                                MISSION-READY TERMINALS & SYSTEMS
                            </span>
                            <AnimatedHeading 
                                as="h2" 
                                highlightPhrase="Wireless Hardware"
                                className="text-2xl sm:text-3xl lg:text-[34px] font-display font-bold text-slate-900 dark:text-paper"
                            >
                                Featured Wireless Hardware
                            </AnimatedHeading>
                            <p className="mt-2 text-slate-600 dark:text-steel text-sm max-w-2xl">
                                High-durability handheld transceivers, dispatch consoles, and base stations in active deployment.
                            </p>
                        </div>

                        <div className="flex items-center gap-4 shrink-0">
                            <Link 
                                href="/products" 
                                className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-paper hover:text-blue-600 dark:hover:text-beacon transition-colors font-mono"
                            >
                                <span>Browse 120+ Products</span>
                                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>

                            {/* Interactive Shelf Navigation Controls */}
                            <div className="flex items-center gap-2 border-l border-slate-200 dark:border-white/10 pl-4">
                                <button 
                                    onClick={() => scrollHardware('prev')}
                                    disabled={!canScrollLeft}
                                    className={`h-9 w-9 rounded-full border flex items-center justify-center transition-all shadow-xs ${
                                        canScrollLeft
                                            ? 'border-slate-300 dark:border-white/20 bg-white dark:bg-navy-surface text-slate-800 dark:text-white hover:border-blue-500 hover:text-blue-600 dark:hover:border-beacon dark:hover:text-beacon active:scale-95 cursor-pointer shadow-sm'
                                            : 'border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/[0.03] text-slate-300 dark:text-white/20 cursor-not-allowed'
                                    }`}
                                    aria-label="Previous hardware"
                                    title="Previous"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button 
                                    onClick={() => scrollHardware('next')}
                                    disabled={!canScrollRight}
                                    className={`h-9 w-9 rounded-full border flex items-center justify-center transition-all shadow-xs ${
                                        canScrollRight
                                            ? 'border-slate-300 dark:border-white/20 bg-white dark:bg-navy-surface text-slate-800 dark:text-white hover:border-blue-500 hover:text-blue-600 dark:hover:border-beacon dark:hover:text-beacon active:scale-95 cursor-pointer shadow-sm'
                                            : 'border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/[0.03] text-slate-300 dark:text-white/20 cursor-not-allowed'
                                    }`}
                                    aria-label="Next hardware"
                                    title="Next"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CSS-Tricks Style Hardware Showcase: Left Fixed Animated Anchor Card + Separate Overlapping Fanning Deck */}
                    <div className="flex flex-col lg:flex-row lg:items-center gap-5 xl:gap-6 relative">
                        {/* 1. Left Fixed Anchor Card (Visibly larger, taller framing anchor, continuous flowing gradient animation) */}
                        <div className="csstricks-anchor shrink-0 w-full lg:w-[250px] xl:w-[265px] h-auto lg:h-[385px] xl:h-[395px]">
                            <div className="csstricks-anchor-inner h-full flex flex-col justify-between p-6 xl:p-7">
                                {/* Top Glowing Header */}
                                <div className="space-y-3.5">
                                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-400/30 text-[10px] font-mono font-bold text-blue-700 dark:text-sky-300 uppercase tracking-widest shadow-xs">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-ping" />
                                        <span>Field Proven</span>
                                    </div>
                                    <div className="font-display font-black text-2xl sm:text-3xl xl:text-[28px] text-slate-900 dark:text-white tracking-tight leading-tight pt-1">
                                        Mission-Critical<br />Wireless Systems<br />
                                        <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 dark:from-sky-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent dark:drop-shadow-[0_2px_12px_rgba(56,189,248,0.5)]">
                                            Field Deployed
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                                        Standardized RF platforms and transceivers deployed nationwide across defense and rail.
                                    </p>
                                </div>

                                {/* Bottom Info & Link */}
                                <div className="pt-5 border-t border-slate-200 dark:border-white/10 space-y-3 mt-4">
                                    <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 flex items-center gap-2">
                                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                                        <span>WPC &amp; TEC Approved</span>
                                    </div>
                                    <Link
                                        href="/products"
                                        className="group/cta inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 hover:text-blue-800 dark:text-sky-400 dark:hover:text-white transition-colors"
                                    >
                                        <span>Explore 120+ Products</span>
                                        <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* 2. Overlapping Product Deck (Squarish cards vertically centered with the larger black card) */}
                        <div className="relative flex-1 min-w-0 group/shelf overflow-hidden">
                            {canScrollLeft && (
                                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 z-30 bg-gradient-to-r from-white dark:from-navy to-transparent transition-opacity duration-300" />
                            )}
                            {canScrollRight && (
                                <div className="pointer-events-none absolute right-2 top-0 bottom-0 w-12 z-30 bg-gradient-to-l from-white dark:from-navy to-transparent transition-opacity duration-300" />
                            )}

                            <div 
                                ref={hardwareScrollRef}
                                className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-8 pl-6 pr-8 csstricks-deck hardware-deck items-center"
                            >
                                {(featuredProducts || []).map((item, index) => (
                                    <div 
                                        key={item.id}
                                        style={{ zIndex: index + 1 }}
                                        className="csstricks-card snap-start shrink-0 w-[220px] sm:w-[225px] lg:w-auto h-[285px] sm:h-[290px] group/card flex flex-col justify-between border border-slate-200/90 dark:border-white/10 bg-white dark:bg-navy-surface rounded-2xl overflow-hidden cursor-pointer"
                                    >
                                        <div className="flex-1 flex flex-col">
                                            {/* Square Image Pedestal with horizontally centered product image & deep black in dark mode */}
                                            <div className="h-28 sm:h-30 w-full bg-gradient-to-b from-slate-100/70 via-slate-50/40 to-slate-100/80 dark:bg-black dark:from-black dark:via-black dark:to-black overflow-hidden relative flex items-center justify-center p-2 border-b border-slate-100 dark:border-white/10 shrink-0">
                                                {/* Subtle radial spotlight in light mode */}
                                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_70%)] dark:hidden pointer-events-none" />

                                                <div className="w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center relative mx-auto">
                                                    <img
                                                        src={`/storage/${item.cover_image_path}`}
                                                        alt={item.name}
                                                        className="max-h-full max-w-full object-contain transition-all duration-500 group-hover/card:scale-110 group-hover/card:-translate-y-1 drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] relative z-10"
                                                        loading="lazy"
                                                        onError={(e) => {
                                                            e.target.onerror = null;
                                                            e.target.src = '/storage/media/products/1559989450_nx3220_ht.jpg';
                                                        }}
                                                    />
                                                </div>

                                                <div className="absolute bottom-2 left-2 z-20">
                                                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8px] font-mono uppercase tracking-wider font-semibold bg-white/90 dark:bg-black/90 text-slate-700 dark:text-paper/80 border border-slate-200 dark:border-white/10 shadow-xs">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                        WPC
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Details with Complete Text Visible (Zero ... Truncation) */}
                                            <div className="p-2.5 sm:p-3 space-y-1 flex-1 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="badge-rf text-[8px] px-1.5 py-0.5">
                                                            {item.subcategory?.name || 'Radio System'}
                                                        </span>
                                                    </div>

                                                    <h3 className="font-display font-bold text-xs sm:text-[13px] text-slate-900 dark:text-paper group-hover/card:text-blue-600 dark:group-hover/card:text-beacon transition-colors leading-snug">
                                                        {item.name}
                                                    </h3>

                                                    <p className="text-[10px] text-slate-500 dark:text-steel leading-relaxed mt-1">
                                                        {item.short_description || 'High-reliability wireless communication equipment engineered for critical infrastructure.'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-2 sm:p-2 px-3 border-t border-slate-100 dark:border-navy-border/40 mt-auto flex items-center justify-between bg-slate-50/50 dark:bg-navy-surface/30 shrink-0">
                                            <Link
                                                href={`/products/${item.subcategory?.category?.slug || 'professional-amateur-radio'}/${item.subcategory?.slug || 'dmr'}/${item.slug}`}
                                                className="text-[10px] font-mono font-semibold text-slate-900 dark:text-paper hover:text-blue-600 dark:hover:text-beacon flex items-center gap-1 group/link"
                                            >
                                                <span>Specs</span>
                                                <svg className="w-3 h-3 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>

                                            <Link
                                                href={`/contact-us?subject=Quote%20Request%20for%20${encodeURIComponent(item.name)}`}
                                                className="btn-shimmer !py-0.5 !px-2.5 text-[9px] font-mono uppercase font-bold shadow-xs hover:shadow-sm"
                                            >
                                                RFQ
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================================
                5. IMPACT METRICS (STATS) — ANIMATED SCROLL COUNTER & TIER-1 CSS EFFECTS
            ========================================================================= */}
            <KeyStatsSection stats={stats} />


            {/* =========================================================================
                6. OEM PARTNERS SHOWCASE — SINGLE ROW CONTINUOUS MARQUEE (LEFT TO RIGHT)
            ========================================================================= */}
            <section id="oem" className="py-12 sm:py-14 bg-slate-50 dark:bg-navy-dark transition-colors duration-300 overflow-hidden">
                <div className="container-content">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-beacon font-bold block mb-1">
                                GLOBAL TECHNOLOGY ALLIANCES
                            </span>
                            <AnimatedHeading 
                                as="h2" 
                                highlightPhrase="OEM Ecosystem"
                                className="text-2xl sm:text-3xl lg:text-[34px] font-display font-bold text-slate-900 dark:text-paper"
                            >
                                Authorized OEM Ecosystem
                            </AnimatedHeading>
                            <p className="mt-2 text-slate-600 dark:text-steel text-sm">
                                Direct factory relationships bringing global component standards to the Indian subcontinent.
                            </p>
                        </div>
                        <Link 
                            href="/oem-partners" 
                            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-paper hover:text-blue-600 dark:hover:text-beacon font-mono shrink-0"
                        >
                            <span>View All Partners</span>
                            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Single Continuous Row Marquee (Left to Right) with Edge Gradient Feathering */}
                <div className="relative w-full overflow-hidden py-3">
                    {/* Left and Right Edge Fade Gradients */}
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-r from-slate-50 dark:from-navy-dark to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-10 bg-gradient-to-l from-slate-50 dark:from-navy-dark to-transparent" />

                    <div className="animate-marquee-ltr flex items-center gap-5 sm:gap-6">
                        {/* Duplicate array for continuous seamless infinite loop */}
                        {[...(oemPartners || []), ...(oemPartners || [])].map((partner, pIdx) => (
                            <a
                                key={`${partner.name}-${pIdx}`}
                                href={partner.website_url || '#'}
                                target={partner.website_url && partner.website_url !== '#' ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                className="group shrink-0 min-w-[190px] sm:min-w-[210px] h-[104px] p-3.5 rounded-2xl bg-white dark:bg-navy-surface border border-slate-200/90 dark:border-white/10 flex flex-col items-center justify-between text-center hover:border-blue-500/50 dark:hover:border-beacon/50 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-beacon/5 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-full h-12 px-3 py-1.5 rounded-xl bg-white dark:bg-white/95 border border-slate-200/80 dark:border-slate-300 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                                    <img
                                        src={`/storage/${partner.logo_path}`}
                                        alt={partner.name}
                                        className="max-h-8 max-w-[130px] w-auto object-contain"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = '/storage/media/branding/logo-emblem.svg';
                                        }}
                                    />
                                </div>
                                <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-steel group-hover:text-slate-900 dark:group-hover:text-paper truncate w-full transition-colors">
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
            <section className="py-14 sm:py-16 bg-white dark:bg-navy transition-colors duration-300 relative overflow-hidden">
                {/* Ambient Radial Backdrop Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/5 dark:bg-beacon/5 rounded-full blur-3xl pointer-events-none" />

                <div className="container-content text-center max-w-3xl mx-auto space-y-6 relative z-10">
                    <span className="badge-rf text-xs">GOVERNMENT & ENTERPRISE PROCUREMENT</span>
                    <AnimatedHeading 
                        as="h2" 
                        highlightPhrase="Wireless Communication?"
                        className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-paper tracking-tight"
                    >
                        Ready to Upgrade Your Wireless Communication?
                    </AnimatedHeading>
                    <p className="text-slate-600 dark:text-steel text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                        Get in touch with our New Delhi technical and sales team for expert product advice, turnkey system design, or Government e-Marketplace (GeM) procurement support.
                    </p>
                    <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                        <Link href="/contact-us" className="btn-shimmer !py-3.5 !px-8 text-sm font-mono uppercase tracking-wider font-bold shadow-xl hover:shadow-blue-500/40">
                            Talk with Our Technical Team
                        </Link>
                        <a 
                            href="tel:+911146528894" 
                            className="btn-secondary !py-3.5 !px-6 text-sm font-mono inline-flex items-center gap-2 group"
                        >
                            <svg className="w-4 h-4 text-blue-600 dark:text-beacon transition-transform duration-200 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
