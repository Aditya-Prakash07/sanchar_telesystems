import { Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

export default function OemPartners({ partners = [], seo = {} }) {
    return (
        <MainLayout>
            <Seo
                title={seo?.title || 'OEM Partners & Global Technology Alliances | Sanchar Telesystems'}
                description={seo?.description || "Sanchar collaborates with the world's leading original equipment manufacturers to deliver turnkey, WPC-approved RF systems to India."}
                canonicalPath="/oem-partners"
            />

            {/* Header */}
            <header className="relative bg-white dark:bg-navy border-b border-slate-200/80 dark:border-navy-border pt-36 pb-20 overflow-hidden transition-colors duration-300">
                <div className="container-content relative z-10">
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-beacon uppercase tracking-wider mb-4 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-beacon animate-pulse" />
                        <span>GLOBAL TECHNOLOGY ALLIANCES &bull; OEM NETWORK</span>
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                            World-Class Hardware, Calibrated for Indian Spectrum.
                        </h1>
                        <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                            We collaborate with Tier-1 international radio manufacturers, antenna specialists, and tactical audio engineers to engineer turnkey, WPC-certified communication systems for India's defense, public safety, and enterprise sectors.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 dark:border-white/10 pt-8 max-w-4xl text-xs font-mono">
                        <div>
                            <span className="text-slate-500 dark:text-slate-400 block">INTEGRATION MODEL</span>
                            <span className="text-slate-900 dark:text-white font-bold mt-1 block">DIRECT AUTHORIZED TIER-1</span>
                        </div>
                        <div>
                            <span className="text-slate-500 dark:text-slate-400 block">COMPLIANCE PROTOCOL</span>
                            <span className="text-slate-900 dark:text-white font-bold mt-1 block">WPC ETA &bull; TEC CAB CERTIFIED</span>
                        </div>
                        <div>
                            <span className="text-slate-500 dark:text-slate-400 block">BAND CALIBRATION</span>
                            <span className="text-slate-900 dark:text-white font-bold mt-1 block">INDIGENOUS LAB TUNING</span>
                        </div>
                        <div>
                            <span className="text-slate-500 dark:text-slate-400 block">SLA SUPPORT</span>
                            <span className="text-slate-900 dark:text-white font-bold mt-1 block">24/7 LEVEL-3 REPAIR BENCH</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Partners Grid */}
            <section className="py-20 bg-slate-50 dark:bg-navy-dark transition-colors duration-300">
                <div className="container-content">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-200 dark:border-steel/20 pb-6">
                        <div>
                            <span className="text-xs font-mono text-amber-600 dark:text-beacon uppercase tracking-wider font-bold block mb-1">
                                AUTHORIZED ECOSYSTEM
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-paper">
                                Global Technology Partners & Component Providers
                            </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-steel mt-2 md:mt-0 font-mono">
                            {partners.length} Technology Principals Represented
                        </p>
                    </div>

                    {/* Symmetrical OEM Partner Alliance Cards with Full Descriptions & Verified Working Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {partners.map((p) => {
                            const hasLink = Boolean(p.website_url && p.website_url !== '#');

                            return (
                                <div
                                    key={p.name || p.id}
                                    className="card-symmetric p-8 flex flex-col justify-between group hover:border-amber-500/40 dark:hover:border-beacon/40 transition-all shadow-md hover:shadow-xl"
                                >
                                    <div>
                                        {/* Card Top: Logo Container & Status Chip */}
                                        <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-white/10 mb-6">
                                            <div className="h-14 px-4 py-2 rounded-xl bg-white dark:bg-white/95 border border-slate-200 dark:border-slate-300 flex items-center justify-center shadow-sm">
                                                <img
                                                    src={p.logo_path ? `/storage/${p.logo_path}` : '/storage/media/branding/logo0.png'}
                                                    alt={p.name}
                                                    className="max-h-10 max-w-[140px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-amber-500/10 dark:bg-beacon/10 text-amber-700 dark:text-beacon border border-amber-500/20 dark:border-beacon/20">
                                                Authorized OEM
                                            </span>
                                        </div>

                                        {/* Partner Name */}
                                        <h3 className="font-display font-bold text-xl text-slate-900 dark:text-paper mb-3 group-hover:text-amber-600 dark:group-hover:text-beacon transition-colors">
                                            {p.name}
                                        </h3>

                                        {/* Authentic Partnership Description */}
                                        <p className="text-sm text-slate-600 dark:text-steel leading-relaxed">
                                            {p.description || 'Global technology leader partnering with Sanchar Telesystems to bring mission-critical communications infrastructure and certified hardware to the Indian market.'}
                                        </p>
                                    </div>

                                    {/* Card Footer: Verified Working Link */}
                                    <div className="pt-6 mt-6 border-t border-slate-100 dark:border-white/10 flex items-center justify-between">
                                        <span className="text-xs font-mono text-slate-400 dark:text-steel">
                                            Official Technology Partner
                                        </span>

                                        {hasLink && (
                                            <a
                                                href={p.website_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-600 dark:text-beacon hover:underline"
                                            >
                                                <span>Visit Official Website</span>
                                                <svg className="w-3.5 h-3.5 text-amber-600 dark:text-beacon shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Technical Standards */}
                    <div className="mt-20 grid md:grid-cols-3 gap-8">
                        <div className="card-symmetric p-8 flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-lg bg-amber-500/10 dark:bg-beacon/10 text-amber-600 dark:text-beacon font-mono font-bold flex items-center justify-center mb-5 text-sm">
                                    01
                                </div>
                                <h3 className="font-display font-bold text-slate-900 dark:text-paper text-lg mb-2">
                                    WPC Spectrum Compliance
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-steel leading-relaxed">
                                    Every imported terminal and RF repeater undergoes stringent harmonic testing, frequency calibration, and Wireless Planning & Coordination (WPC) ETA licensing.
                                </p>
                            </div>
                        </div>

                        <div className="card-symmetric p-8 flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-lg bg-amber-500/10 dark:bg-beacon/10 text-amber-600 dark:text-beacon font-mono font-bold flex items-center justify-center mb-5 text-sm">
                                    02
                                </div>
                                <h3 className="font-display font-bold text-slate-900 dark:text-paper text-lg mb-2">
                                    Tactical Ruggedization
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-steel leading-relaxed">
                                    Partner hardware is tested against MIL-STD-810G and IP67/IP68 ingress standards to withstand extreme Indian operating conditions from Himalayan cold to coastal humidity.
                                </p>
                            </div>
                        </div>

                        <div className="card-symmetric p-8 flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-lg bg-amber-500/10 dark:bg-beacon/10 text-amber-600 dark:text-beacon font-mono font-bold flex items-center justify-center mb-5 text-sm">
                                    03
                                </div>
                                <h3 className="font-display font-bold text-slate-900 dark:text-paper text-lg mb-2">
                                    Tier-1 RMA & Spares Depot
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-steel leading-relaxed">
                                    Direct OEM parts inventory in New Delhi guarantees sub-48-hour turnarounds on mission-critical board replacements, battery cells, and RF antenna modules.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Partnership Inquiry Banner */}
                    <div className="mt-16 card-dual !bg-white dark:!bg-navy-surface p-8 sm:p-12 border border-slate-200 dark:border-navy-border flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <span className="text-xs font-mono text-amber-600 dark:text-beacon uppercase tracking-wider font-bold block mb-2">
                                GLOBAL TECHNOLOGY PROVIDERS
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                                Expand Into the Indian Defense & Enterprise Market
                            </h3>
                            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                Sanchar Telesystems offers end-to-end WPC/TEC licensing, government GeM channel distribution, and an active network of over 500+ defense and enterprise dealers across India.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link href="/contact-us" className="btn-beacon !py-3.5 !px-7 font-semibold font-mono text-sm uppercase tracking-wider">
                                Initiate OEM Partnership
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
