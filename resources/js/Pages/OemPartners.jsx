import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';
import { Link } from '@inertiajs/react';

export default function OemPartners({ partners = [], seo = {} }) {
    return (
        <MainLayout>
            <Seo
                title={seo?.title || 'OEM Partners & Global Technology Alliances | Sanchar Telesystems'}
                description={seo?.description || "Sanchar collaborates with the world's leading original equipment manufacturers to bring mission-critical RF communication solutions to India."}
                canonicalPath="/oem-partners"
            />

            {/* Telemetry Header */}
            <header className="bg-navy text-paper pt-36 pb-20 relative overflow-hidden bg-grid-pattern">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-beacon/10 blur-[130px] pointer-events-none rounded-full" />
                <div className="container-content relative z-10">
                    <div className="flex items-center gap-3 text-xs font-mono text-beacon tracking-wider uppercase mb-4">
                        <span className="inline-block w-2 h-2 rounded-full bg-beacon animate-pulse" />
                        <span>GLOBAL TECHNOLOGY ALLIANCES &bull; OEM NETWORK</span>
                    </div>

                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-paper">
                            World-class hardware, calibrated for Indian spectrum.
                        </h1>
                        <p className="mt-5 text-lg text-paper/75 leading-relaxed">
                            We collaborate with Tier-1 international radio manufacturers, antenna specialists, and tactical audio engineers to engineer turnkey, WPC-certified communication systems for India's defense, public safety, and enterprise sectors.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-paper/10 pt-8 max-w-4xl text-xs font-mono">
                        <div>
                            <span className="text-paper/40 block">INTEGRATION MODEL</span>
                            <span className="text-paper font-semibold mt-1 block">DIRECT AUTHORIZED TIER-1</span>
                        </div>
                        <div>
                            <span className="text-paper/40 block">COMPLIANCE PROTOCOL</span>
                            <span className="text-paper font-semibold mt-1 block">WPC ETA &bull; TEC CAB CERTIFIED</span>
                        </div>
                        <div>
                            <span className="text-paper/40 block">BAND RE-TUNING</span>
                            <span className="text-paper font-semibold mt-1 block">INDIGENOUS LAB CALIBRATION</span>
                        </div>
                        <div>
                            <span className="text-paper/40 block">SLA SUPPORT</span>
                            <span className="text-paper font-semibold mt-1 block">24/7 LEVEL-3 REPAIR BENCH</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Partners Grid */}
            <section className="py-20 bg-paper">
                <div className="container-content">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-steel/15 pb-6">
                        <div>
                            <span className="text-xs font-mono text-beacon uppercase tracking-wider font-semibold block mb-1">
                                Authorized Ecosystem
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                                Global Technology Partners & Component Providers
                            </h2>
                        </div>
                        <p className="text-sm text-steel mt-2 md:mt-0 font-mono">
                            {partners.length} Technology Principals Represented
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {partners.map((p) => {
                            const hasLink = Boolean(p.website_url);
                            const Component = hasLink ? 'a' : 'div';
                            const linkProps = hasLink
                                ? { href: p.website_url, target: '_blank', rel: 'noopener noreferrer' }
                                : {};

                            return (
                                <Component
                                    key={p.name || p.id}
                                    {...linkProps}
                                    className="group relative bg-white border border-steel/15 rounded-xl p-8 flex flex-col items-center justify-center min-h-[160px] shadow-sm hover:shadow-xl hover:border-beacon/40 transition-all duration-300 panel-hover text-center"
                                >
                                    <div className="w-full flex items-center justify-center flex-1">
                                        <img
                                            src={p.logo_path ? `/storage/${p.logo_path}` : '/storage/media/sanchar-logo.png'}
                                            alt={p.name}
                                            className="max-h-16 max-w-[140px] w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-steel/10 w-full flex items-center justify-between text-xs font-mono text-steel">
                                        <span className="font-semibold text-ink truncate">{p.name}</span>
                                        {hasLink && (
                                            <span className="text-beacon opacity-0 group-hover:opacity-100 transition-opacity">
                                                &nearr;
                                            </span>
                                        )}
                                    </div>
                                </Component>
                            );
                        })}
                    </div>

                    {/* Technical Standards Card */}
                    <div className="mt-20 grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-paper-light border border-steel/20 rounded-xl">
                            <div className="w-10 h-10 rounded-lg bg-navy text-beacon font-mono font-bold flex items-center justify-center mb-5 text-sm">
                                01
                            </div>
                            <h3 className="font-display font-bold text-ink text-lg mb-2">
                                WPC Spectrum Compliance
                            </h3>
                            <p className="text-sm text-steel leading-relaxed">
                                Every imported terminal and RF repeater undergoes stringent RF harmonic testing, frequency calibration, and Wireless Planning & Coordination (WPC) ETA licensing.
                            </p>
                        </div>

                        <div className="p-8 bg-paper-light border border-steel/20 rounded-xl">
                            <div className="w-10 h-10 rounded-lg bg-navy text-beacon font-mono font-bold flex items-center justify-center mb-5 text-sm">
                                02
                            </div>
                            <h3 className="font-display font-bold text-ink text-lg mb-2">
                                Tactical Ruggedization
                            </h3>
                            <p className="text-sm text-steel leading-relaxed">
                                Partner hardware is tested against MIL-STD-810G and IP67/IP68 ingress standards to withstand extreme Indian operating conditions—from Siachen sub-zero to Thar Desert heat.
                            </p>
                        </div>

                        <div className="p-8 bg-paper-light border border-steel/20 rounded-xl">
                            <div className="w-10 h-10 rounded-lg bg-navy text-beacon font-mono font-bold flex items-center justify-center mb-5 text-sm">
                                03
                            </div>
                            <h3 className="font-display font-bold text-ink text-lg mb-2">
                                Tier-1 RMA & Spares Depot
                            </h3>
                            <p className="text-sm text-steel leading-relaxed">
                                Direct OEM parts inventory in New Delhi guarantees sub-48-hour turnarounds on mission-critical board replacements, battery cells, and RF antenna modules.
                            </p>
                        </div>
                    </div>

                    {/* Partnership Inquiry Banner */}
                    <div className="mt-16 bg-navy text-paper rounded-2xl p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-paper/10">
                        <div className="max-w-xl">
                            <span className="text-xs font-mono text-beacon uppercase tracking-wider block mb-2">
                                Global Technology Providers
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-display font-bold text-paper">
                                Interested in expanding into the Indian defense and industrial market?
                            </h3>
                            <p className="mt-3 text-sm text-paper/70 leading-relaxed">
                                Sanchar Telesystems offers end-to-end WPC/TEC licensing, government GeM channel distribution, and an active network of over 500+ defense and enterprise dealers across India.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link href="/contact-us" className="btn-beacon !py-3.5 !px-7 font-semibold">
                                Initiate OEM Partnership &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

