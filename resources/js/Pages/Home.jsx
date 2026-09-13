import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';
import SignalWave from '@/Components/SignalWave';

export default function Home({ banners, categories, featuredProducts, stats, testimonials, oemPartners, seo }) {
    const hero = banners?.[0];
    const [selectedSector, setSelectedSector] = useState(0);

    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} canonicalPath="/" />

            {/* =========================================================================
                1. COMMAND-CENTER HERO SECTION
            ========================================================================= */}
            <section className="relative bg-navy-dark text-paper overflow-hidden pt-36 pb-24 border-b border-navy-border">
                {/* Background telemetry grid & radial illumination */}
                <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-beacon/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Animated RF wave anchored to bottom */}
                <SignalWave className="absolute inset-x-0 bottom-0 h-32 sm:h-44 w-full opacity-80 pointer-events-none" />

                <div className="container-content relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        {/* Left Hero Narrative */}
                        <div className="lg:col-span-7 space-y-6">
                            {/* Mission Status Badge */}
                            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-beacon/30 bg-beacon/10 text-beacon text-xs font-mono tracking-wider uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-beacon opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-beacon"></span>
                                </span>
                                <span>CRITICAL TELECOM • TRUSTED SINCE 1990s</span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.08] tracking-tight text-paper">
                                {hero?.heading || 'Mission-Critical Wireless When Every Second Counts.'}
                            </h1>

                            {/* Subtitle */}
                            <p className="text-lg sm:text-xl text-paper/80 leading-relaxed max-w-2xl font-sans font-normal">
                                {hero?.subheading ||
                                    'Sanchar Telesystems engineers, deploys, and supports DMR, TETRA, PoC over Cellular, and Railway LTE-R networks for law enforcement, railways, defense, and high-hazard industry across India.'}
                            </p>

                            {/* Key Security / Standards Highlights */}
                            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-steel-light">
                                <span className="inline-flex items-center gap-1.5 bg-navy-surface/90 px-2.5 py-1 border border-navy-border rounded">
                                    <svg className="w-3.5 h-3.5 text-beacon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                    AES-256 E2E Encryption
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-navy-surface/90 px-2.5 py-1 border border-navy-border rounded">
                                    <svg className="w-3.5 h-3.5 text-beacon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    Sub-300ms Call Latency
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-navy-surface/90 px-2.5 py-1 border border-navy-border rounded">
                                    <svg className="w-3.5 h-3.5 text-beacon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                                    IP68 Submersible / MIL-STD
                                </span>
                            </div>

                            {/* Hero Action Buttons */}
                            <div className="pt-4 flex flex-wrap items-center gap-4">
                                <Link href="/products" className="btn-primary text-sm sm:text-base">
                                    <span>Explore Mission Hardware</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </Link>
                                <Link href="/contact-us" className="btn-outline-dark text-sm sm:text-base">
                                    <span>Consult an RF Architect</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right Hero Hardware Telemetry Showcase */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative mx-auto max-w-md bg-navy-surface/90 border border-navy-border rounded-lg p-6 shadow-2xl backdrop-blur-md">
                                {/* Header bar inside card */}
                                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                                    <div className="flex items-center gap-2">
                                        <span className="h-2.5 w-2.5 rounded-full bg-beacon animate-pulse" />
                                        <span className="text-xs font-mono font-semibold tracking-wider text-paper uppercase">
                                            LIVE HARDWARE TELEMETRY
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                                        ACTIVE CARRIER
                                    </span>
                                </div>

                                {/* Terminal Graphic Preview */}
                                <div className="relative aspect-[4/3] bg-navy-dark/90 rounded border border-white/5 overflow-hidden flex items-center justify-center p-4 group">
                                    <img 
                                        src="/storage/media/50kpoc.png" 
                                        alt="Sanchar Mission Terminal"
                                        className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = '/storage/media/p1.jpg';
                                        }}
                                    />
                                    {/* Overlay specs tag */}
                                    <div className="absolute bottom-2 left-2 right-2 bg-navy-dark/90 backdrop-blur-md border border-white/10 p-2.5 rounded text-xs font-mono">
                                        <div className="flex justify-between items-center text-paper">
                                            <span className="font-semibold text-beacon">SANCHAR ST-POC50K</span>
                                            <span className="text-steel-light">4G LTE / PTT</span>
                                        </div>
                                        <p className="text-[11px] text-steel mt-0.5">2,500+ Active Terminals in Delhi Police Fleet</p>
                                    </div>
                                </div>

                                {/* Mini Telemetry Metrics Grid */}
                                <div className="grid grid-cols-2 gap-3 mt-4 text-xs font-mono">
                                    <div className="bg-navy-dark/60 p-2.5 rounded border border-white/5">
                                        <span className="text-steel-light block text-[10px]">ENCRYPTION</span>
                                        <span className="text-paper font-semibold">AES-256 Standard</span>
                                    </div>
                                    <div className="bg-navy-dark/60 p-2.5 rounded border border-white/5">
                                        <span className="text-steel-light block text-[10px]">INGRESS RATING</span>
                                        <span className="text-paper font-semibold">IP68 (2m / 2hr)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================================
                2. GOVERNMENT & CRITICAL INFRASTRUCTURE DEPLOYMENTS BAR
            ========================================================================= */}
            <section className="py-10 bg-navy border-b border-navy-border relative">
                <div className="container-content">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="lg:w-1/4 text-center lg:text-left">
                            <span className="text-xs font-mono uppercase tracking-widest text-beacon font-semibold block">
                                PROVEN NATIONAL TRUST
                            </span>
                            <h2 className="text-base font-display font-semibold text-paper mt-0.5">
                                Critical Deployments Across India
                            </h2>
                        </div>

                        <div className="lg:w-3/4 grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {/* Parliament */}
                            <div className="flex items-center gap-3 bg-navy-surface/60 border border-navy-border p-3.5 rounded hover:border-beacon/40 transition-colors">
                                <img src="/storage/media/Parliament.png" alt="Parliament of India" className="h-10 w-auto object-contain shrink-0" />
                                <div>
                                    <h3 className="text-xs font-display font-semibold text-paper">Parliament of India</h3>
                                    <p className="text-[11px] text-steel font-mono">TETRA Network & 24/7 AMC</p>
                                </div>
                            </div>

                            {/* Delhi Police */}
                            <div className="flex items-center gap-3 bg-navy-surface/60 border border-navy-border p-3.5 rounded hover:border-beacon/40 transition-colors">
                                <img src="/storage/media/DelhiPolice.png" alt="Delhi Police" className="h-10 w-auto object-contain shrink-0" />
                                <div>
                                    <h3 className="text-xs font-display font-semibold text-paper">Delhi Police HQ</h3>
                                    <p className="text-[11px] text-steel font-mono">2,500+ Smart LTE Terminals</p>
                                </div>
                            </div>

                            {/* Surat Diamond Bourse */}
                            <div className="flex items-center gap-3 bg-navy-surface/60 border border-navy-border p-3.5 rounded hover:border-beacon/40 transition-colors">
                                <img src="/storage/media/sdb.png" alt="Surat Diamond Bourse" className="h-10 w-auto object-contain shrink-0" />
                                <div>
                                    <h3 className="text-xs font-display font-semibold text-paper">Surat Diamond Bourse</h3>
                                    <p className="text-[11px] text-steel font-mono">Private Captive LTE Network</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================================
                3. INTERACTIVE INDUSTRY VERTICALS & SECTOR SOLUTIONS
            ========================================================================= */}
            <section className="py-24 bg-paper relative">
                <div className="absolute inset-0 bg-grid-paper opacity-70 pointer-events-none" />
                <div className="container-content relative z-10">
                    <div className="max-w-2xl mb-14">
                        <span className="text-xs font-mono uppercase tracking-widest text-beacon font-semibold block mb-2">
                            TAILORED INDUSTRY ARCHITECTURE
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink">
                            Engineered for Zero-Downtime Operations
                        </h2>
                        <p className="mt-3 text-steel leading-relaxed">
                            Every sector presents distinct RF propagation challenges and mission requirements. 
                            Explore how Sanchar architects purpose-built networks for India’s most demanding environments.
                        </p>
                    </div>

                    {/* Sector Tabs Header */}
                    <div className="flex flex-wrap gap-2 border-b border-steel/20 pb-4 mb-8">
                        {SECTOR_DATA.map((sec, idx) => (
                            <button
                                key={sec.title}
                                onClick={() => setSelectedSector(idx)}
                                className={`px-4 py-2.5 rounded text-sm font-medium transition-all ${
                                    selectedSector === idx
                                        ? 'bg-navy text-beacon shadow-md font-semibold'
                                        : 'bg-white text-steel hover:text-ink hover:bg-steel/10'
                                }`}
                            >
                                {sec.title}
                            </button>
                        ))}
                    </div>

                    {/* Selected Sector Showcase Card */}
                    <div className="bg-white border border-steel/20 shadow-sm p-8 lg:p-10 rounded-sm">
                        <div className="grid lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="badge-rf font-mono text-xs">
                                    {SECTOR_DATA[selectedSector].tag}
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                                    {SECTOR_DATA[selectedSector].headline}
                                </h3>
                                <p className="text-steel leading-relaxed text-sm sm:text-base">
                                    {SECTOR_DATA[selectedSector].description}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 pt-2">
                                    {SECTOR_DATA[selectedSector].features.map((feat) => (
                                        <div key={feat} className="flex items-start gap-2 text-sm text-ink font-medium">
                                            <svg className="w-4 h-4 text-beacon shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span>{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <Link href="/contact-us" className="btn-primary text-sm">
                                        Request {SECTOR_DATA[selectedSector].title} Architecture &rarr;
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:col-span-5 bg-navy-light rounded overflow-hidden aspect-[4/3] flex items-center justify-center p-6 border border-steel/15">
                                <img 
                                    src={SECTOR_DATA[selectedSector].image} 
                                    alt={SECTOR_DATA[selectedSector].title}
                                    className="max-h-full w-auto object-contain rounded transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================================================
                4. FEATURED HARDWARE SHOWCASE GRID
            ========================================================================= */}
            <section className="py-24 bg-white border-y border-steel/15">
                <div className="container-content">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-beacon font-semibold block mb-2">
                                MISSION-READY TERMINALS & SYSTEMS
                            </span>
                            <h2 className="text-3xl font-display font-bold text-ink">
                                Featured Wireless Hardware
                            </h2>
                            <p className="mt-2 text-steel">
                                High-durability handheld transceivers, dispatch consoles, and base stations.
                            </p>
                        </div>
                        <Link href="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink border-b-2 border-beacon pb-0.5 hover:text-beacon transition-colors">
                            <span>Browse Complete Catalog</span>
                            <span>&rarr;</span>
                        </Link>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(featuredProducts || []).map((item) => (
                            <div 
                                key={item.id}
                                className="group panel-hover flex flex-col justify-between overflow-hidden bg-white"
                            >
                                <div>
                                    {/* Image Container */}
                                    <div className="aspect-[4/3] bg-navy-surface overflow-hidden relative flex items-center justify-center p-6 border-b border-steel/10">
                                        {item.cover_image_path ? (
                                            <img
                                                src={`/storage/${item.cover_image_path}`}
                                                alt={item.name}
                                                className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = '/storage/media/p1.jpg';
                                                }}
                                            />
                                        ) : (
                                            <div className="text-steel font-mono text-xs">HARDWARE IMAGE</div>
                                        )}

                                        {item.model_number && (
                                            <span className="absolute top-3 right-3 text-[11px] font-mono px-2 py-0.5 rounded bg-navy-dark/80 text-beacon border border-white/10">
                                                {item.model_number}
                                            </span>
                                        )}
                                    </div>

                                    {/* Content Details */}
                                    <div className="p-6">
                                        <span className="text-xs font-mono text-steel uppercase tracking-wider block mb-1">
                                            {item.subcategory?.name || 'WIRELESS SYSTEM'}
                                        </span>
                                        <h3 className="font-display font-semibold text-lg text-ink group-hover:text-beacon transition-colors line-clamp-1">
                                            {item.name}
                                        </h3>
                                        <p className="mt-2 text-sm text-steel line-clamp-2 leading-relaxed">
                                            {item.short_description}
                                        </p>
                                    </div>
                                </div>

                                <div className="px-6 pb-6 pt-2 border-t border-steel/10 flex items-center justify-between">
                                    <span className="text-xs font-mono text-steel-dark font-medium">
                                        WPC & TEC Certified
                                    </span>
                                    <Link 
                                        href={item.subcategory ? `/products/${item.subcategory.category?.slug}/${item.subcategory.slug}/${item.slug}` : '/products'}
                                        className="text-xs font-semibold text-ink group-hover:text-beacon transition-colors flex items-center gap-1"
                                    >
                                        <span>View Specifications</span>
                                        <span>&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                5. LIVE TELEMETRY & SCALE METRICS (STATS)
            ========================================================================= */}
            <section className="py-20 bg-navy-dark text-paper border-b border-navy-border relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
                <div className="container-content relative z-10">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {(stats || []).map((stat) => (
                            <div key={stat.label} className="bg-navy-surface/80 border border-navy-border p-6 rounded-sm text-center">
                                <StatCounter label={stat.label} value={stat.value} suffix={stat.suffix} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* =========================================================================
                6. PRESTIGIOUS CASE STUDIES / DEPLOYMENTS
            ========================================================================= */}
            {testimonials?.length > 0 && (
                <section className="py-24 bg-paper">
                    <div className="container-content">
                        <div className="max-w-2xl mb-14">
                            <span className="text-xs font-mono uppercase tracking-widest text-beacon font-semibold block mb-2">
                                FIELD-PROVEN CASE STUDIES
                            </span>
                            <h2 className="text-3xl font-display font-bold text-ink">
                                High-Consequence Deployments
                            </h2>
                            <p className="mt-2 text-steel">
                                Reliable mission communications deployed where failure is simply not an option.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {testimonials.map((t) => (
                                <article key={t.id} className="bg-white border border-steel/20 p-8 rounded-sm flex flex-col justify-between shadow-sm">
                                    <div>
                                        <div className="h-14 flex items-center mb-6 border-b border-steel/10 pb-4">
                                            {t.logo_path && (
                                                <img
                                                    src={`/storage/${t.logo_path}`}
                                                    alt={t.client_name}
                                                    className="max-h-12 w-auto object-contain"
                                                    loading="lazy"
                                                />
                                            )}
                                        </div>
                                        <p className="text-sm text-steel leading-relaxed">
                                            "{t.story}"
                                        </p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-steel/10 flex items-center justify-between">
                                        <span className="font-display font-bold text-sm text-ink">{t.client_name}</span>
                                        <span className="text-[11px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                            OPERATIONAL
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}


            {/* =========================================================================
                7. GLOBAL OEM ALLIANCES
            ========================================================================= */}
            {oemPartners?.length > 0 && (
                <section className="py-20 bg-white border-t border-steel/15">
                    <div className="container-content text-center">
                        <span className="text-xs font-mono uppercase tracking-widest text-steel font-semibold block mb-2">
                            GLOBAL TECHNOLOGY PARTNERSHIPS
                        </span>
                        <h2 className="text-2xl font-display font-bold text-ink mb-10">
                            Authorized OEM Collaboration
                        </h2>

                        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
                            {oemPartners.map((p) => (
                                <a
                                    key={p.name}
                                    href={p.website_url || '#'}
                                    target={p.website_url && p.website_url !== '#' ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="p-4 border border-steel/15 rounded bg-paper/50 hover:bg-white hover:border-beacon/40 transition-all"
                                >
                                    <img
                                        src={`/storage/${p.logo_path}`}
                                        alt={p.name}
                                        className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-200"
                                        loading="lazy"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}


            {/* =========================================================================
                8. FINAL RFQ / CONSULTATION CTA
            ========================================================================= */}
            <section className="py-24 bg-navy-dark text-paper relative border-t border-navy-border overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
                <div className="container-content text-center max-w-3xl mx-auto relative z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-beacon/30 bg-beacon/10 text-beacon text-xs font-mono">
                        ENGINEERING CONSULTATION DESK
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight">
                        Need a Mission-Critical Wireless Architecture You Can Trust?
                    </h2>
                    <p className="text-paper/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                        Whether designing a nationwide PoC cellular fleet, a railway LTE-R corridor, or private TETRA coverage, our senior RF architects will assist your technical specifications and RFP requirements.
                    </p>
                    <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                        <Link href="/contact-us" className="btn-primary text-base px-8 py-3.5 shadow-lg shadow-beacon/20">
                            Request Architecture Review & Quote
                        </Link>
                        <a 
                            href="tel:+911146528894" 
                            className="btn-outline-dark text-base px-6 py-3.5"
                        >
                            Call Defense Desk: +91 (11) 4652 8894
                        </a>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

const SECTOR_DATA = [
    {
        title: 'Public Safety & Police',
        tag: 'DMR TIER III • TETRA • REAL-TIME DISPATCH',
        headline: 'Tactical Coordination with Zero Communication Gaps',
        description: 'Instant group communication with GPS tracking, AES-256 encrypted voice channels, emergency SOS panic buttons, and central GIS dispatch console.',
        features: [
            '2,500+ Terminals deployed with Delhi Police',
            'Sub-300ms Push-to-Talk latency across India',
            'Full duplex emergency override & geo-fencing',
            'MIL-STD-810G drop resistance & IP68 waterproofing'
        ],
        image: '/storage/media/50kpoc.png',
    },
    {
        title: 'Railways & Metro Transit',
        tag: 'LTE-R • MCPTT • 500 KM/H HANDOVER',
        headline: 'Mission-Critical Rail Control & Cab Signaling',
        description: 'Broadband communication standard engineered for train collision avoidance, railway telemetry, passenger safety, and high-speed Doppler compensation.',
        features: [
            'Seamless handovers at speeds up to 500 km/h',
            'Integrated voice, train control, and trackside CCTV',
            'EN 50155 certified railway rolling-stock compliant',
            'Emergency cab-to-station priority pre-emption'
        ],
        image: '/storage/media/LTTE-R.jpeg',
    },
    {
        title: 'Oil, Gas & Petrochemical',
        tag: 'ATEX INTRINSICALLY SAFE • HIGH-HAZARD',
        headline: 'Explosion-Proof Radios for Hazardous Atmospheres',
        description: 'Engineered for refineries, chemical manufacturing, and offshore platforms where flammable gasses demand certified explosion-proof transceivers.',
        features: [
            'Zone 1 / Zone 2 ATEX & IECEx certification',
            'Lone-worker and automatic man-down sensors',
            'Superior noise-cancellation in heavy machinery',
            'Robust long-life battery in extreme temperatures'
        ],
        image: '/storage/media/p1.jpg',
    },
    {
        title: 'Enterprise & Hospitality',
        tag: 'LICENSE-FREE • SMART POC • MULTI-FLOOR',
        headline: 'Effortless Coordination for Hotels & Facilities',
        description: 'WPC-approved royalty-free communications requiring no recurring license fees, delivering crystal audio across multi-acre campuses and high-rises.',
        features: [
            '100% royalty-free, legal and WPC approved in India',
            'Multi-floor penetration up to 15 concrete levels',
            'Rapid USB Type-C charging with long standby',
            'Compact, lightweight ergonomic design'
        ],
        image: '/storage/media/p2.jpg',
    },
];

function StatCounter({ label, value, suffix }) {
    const [display, setDisplay] = useState(0);
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const duration = 1400;
                    const start = performance.now();

                    const tick = (now) => {
                        const progress = Math.min((now - start) / duration, 1);
                        // Ease out cubic
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        setDisplay(Math.floor(easeOut * value));
                        if (progress < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [value, hasAnimated]);

    return (
        <div ref={ref}>
            <div className="font-display text-4xl sm:text-5xl font-bold text-beacon tracking-tight">
                {display.toLocaleString()}
                {suffix}
            </div>
            <p className="mt-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-steel-light">{label}</p>
        </div>
    );
}

