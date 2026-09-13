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
            <header className="relative bg-slate-950 text-paper pt-36 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-25" />
                <div className="container-content relative z-10">
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 dark:text-beacon uppercase tracking-wider mb-4 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-beacon animate-pulse" />
                        <span>GLOBAL TECHNOLOGY ALLIANCES &bull; OEM NETWORK</span>
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight">
                            World-Class Hardware, Calibrated for Indian Spectrum.
                        </h1>
                        <p className="mt-5 text-lg text-slate-300 leading-relaxed font-sans">
                            We collaborate with Tier-1 international radio manufacturers, antenna specialists, and tactical audio engineers to engineer turnkey, WPC-certified communication systems for India's defense, public safety, and enterprise sectors.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-8 max-w-4xl text-xs font-mono">
                        <div>
                            <span className="text-slate-400 block">INTEGRATION MODEL</span>
                            <span className="text-white font-bold mt-1 block">DIRECT AUTHORIZED TIER-1</span>
                        </div>
                        <div>
                            <span className="text-slate-400 block">COMPLIANCE PROTOCOL</span>
                            <span className="text-white font-bold mt-1 block">WPC ETA &bull; TEC CAB CERTIFIED</span>
                        </div>
                        <div>
                            <span className="text-slate-400 block">BAND CALIBRATION</span>
                            <span className="text-white font-bold mt-1 block">INDIGENOUS LAB TUNING</span>
                        </div>
                        <div>
                            <span className="text-slate-400 block">SLA SUPPORT</span>
                            <span className="text-white font-bold mt-1 block">24/7 LEVEL-3 REPAIR BENCH</span>
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

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {partners.map((p) => {
                            const hasLink = Boolean(p.website_url && p.website_url !== '#');
                            const Component = hasLink ? 'a' : 'div';
                            const linkProps = hasLink
                                ? { href: p.website_url, target: '_blank', rel: 'noopener noreferrer' }
                                : {};

                            return (
                                <Component
                                    key={p.name || p.id}
                                    {...linkProps}
                                    className="panel-hover p-8 flex flex-col items-center justify-center min-h-[160px] text-center group"
                                >
                                    <div className="w-full flex items-center justify-center flex-1">
                                        <img
                                            src={p.logo_path ? `/storage/${p.logo_path}` : '/storage/media/branding/logo0.png'}
                                            alt={p.name}
                                            className="max-h-14 max-w-[140px] w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-navy-border/40 w-full flex items-center justify-between text-xs font-mono text-slate-500 dark:text-steel">
                                        <span className="font-semibold text-slate-900 dark:text-paper truncate">{p.name}</span>
                                        {hasLink && (
                                            <span className="text-amber-500 dark:text-beacon opacity-0 group-hover:opacity-100 transition-opacity">
                                                &nearr;
                                            </span>
                                        )}
                                    </div>
                                </Component>
                            );
                        })}
                    </div>

                    {/* Technical Standards */}
                    <div className="mt-20 grid md:grid-cols-3 gap-8">
                        <div className="panel p-8">
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

                        <div className="panel p-8">
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

                        <div className="panel p-8">
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

                    {/* Partnership Inquiry Banner */}
                    <div className="mt-16 card-dual !bg-slate-900 text-paper p-8 sm:p-12 border border-slate-800 dark:border-navy-border flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <span className="text-xs font-mono text-beacon uppercase tracking-wider font-bold block mb-2">
                                GLOBAL TECHNOLOGY PROVIDERS
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                                Expand Into the Indian Defense & Enterprise Market
                            </h3>
                            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                                Sanchar Telesystems offers end-to-end WPC/TEC licensing, government GeM channel distribution, and an active network of over 500+ defense and enterprise dealers across India.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link href="/contact-us" className="btn-beacon !py-3.5 !px-7 font-semibold font-mono text-sm uppercase tracking-wider">
                                Initiate OEM Partnership &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
