import { Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

const PROCESS = [
    { 
        step: '01', 
        title: 'Operational Needs & Spectrum Feasibility', 
        description: 'Analyzing terrain, fleet topology, channel congestion, and regulatory frequency availability (VHF, UHF, Band 8/28).' 
    },
    { 
        step: '02', 
        title: 'RF Propagation & Network Design', 
        description: 'Computer-aided radio frequency coverage simulation, tower site selection, repeater link budgets, and fail-safe redundancy planning.' 
    },
    { 
        step: '03', 
        title: 'Hardware Engineering & Encryption', 
        description: 'Provisioning mission terminals, base stations, and dispatch servers with AES-256 / ARC4 cryptographic keys and custom firmware.' 
    },
    { 
        step: '04', 
        title: 'Field Commissioning & Site Turn-up', 
        description: 'On-site mast erection, antenna azimuth alignment, VSWR calibration, base station integration, and coverage drive-testing.' 
    },
    { 
        step: '05', 
        title: 'Dispatch & CAD Interoperability', 
        description: 'Interfacing wireless talkgroups into existing emergency command centers, CAD platforms, and telephone interconnect systems.' 
    },
    { 
        step: '06', 
        title: '24/7 Operations & AMC Maintenance', 
        description: 'Dedicated national field engineering SLA, spare-parts depots, firmware upgrades, and periodic RF health audits.' 
    },
];

export default function About({ team, seo }) {
    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} canonicalPath="/about-us" />

            {/* ---------- Hero ---------- */}
            <section className="relative bg-navy-dark text-paper pt-36 pb-20 border-b border-navy-border overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
                <div className="container-content relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-beacon/30 bg-beacon/10 text-beacon text-xs font-mono uppercase tracking-wider mb-4">
                        PIONEERING CRITICAL WIRELESS SINCE 1990s
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight">
                        Engineering India’s Most Resilient Communication Networks
                    </h1>
                    <p className="mt-6 text-lg text-paper/80 leading-relaxed font-sans">
                        From securing the Parliament of India to enabling real-time tactical communications for Delhi Police and high-speed rail corridors, Sanchar Telesystems is dedicated to zero-fail wireless engineering.
                    </p>
                </div>
            </section>

            {/* ---------- Core Story & Capabilities ---------- */}
            <section className="py-20 bg-paper">
                <div className="container-content">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 space-y-6 text-steel leading-relaxed">
                            <span className="text-xs font-mono uppercase tracking-widest text-beacon font-semibold block">
                                OUR PURPOSE & HERITAGE
                            </span>
                            <h2 className="text-3xl font-display font-bold text-ink">
                                Three Decades of Relentless RF Innovation
                            </h2>
                            <p>
                                Sanchar has invested continuously in wireless product engineering and field deployment to provide customized communication solutions for organizations where downtime can mean catastrophic loss.
                            </p>
                            <p>
                                As an authorized technology partner to the world's leading OEMs — including <strong>JVC Kenwood</strong>, <strong>Nokia</strong>, and <strong>Diamond Antennas Japan</strong> — we unite global component standards with Indian field ruggedization.
                            </p>
                            <p>
                                Headquartered in New Delhi with a nationwide channel-partner network spanning 28 States and Union Territories, we deliver rapid doorstep technical assistance, proof-of-concept demonstrations, and factory-trained repairs.
                            </p>

                            <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono text-ink">
                                <span className="px-3 py-1.5 bg-white border border-steel/20 rounded font-semibold">
                                    ✓ Make in India / Atmanirbhar Bharat
                                </span>
                                <span className="px-3 py-1.5 bg-white border border-steel/20 rounded font-semibold">
                                    ✓ ISO 9001:2015 Certified
                                </span>
                                <span className="px-3 py-1.5 bg-white border border-steel/20 rounded font-semibold">
                                    ✓ WPC & TEC Approved
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="panel p-6 bg-white space-y-2">
                                    <div className="font-display text-3xl font-bold text-beacon">50K+</div>
                                    <h3 className="font-display font-semibold text-sm text-ink">Terminals Deployed</h3>
                                    <p className="text-xs text-steel">Active digital transceivers and PoC smart devices across defense and industry.</p>
                                </div>
                                <div className="panel p-6 bg-white space-y-2">
                                    <div className="font-display text-3xl font-bold text-beacon">150+</div>
                                    <h3 className="font-display font-semibold text-sm text-ink">Critical Projects</h3>
                                    <p className="text-xs text-steel">Completed infrastructure installations for government, rail, and energy sectors.</p>
                                </div>
                                <div className="panel p-6 bg-white space-y-2">
                                    <div className="font-display text-3xl font-bold text-beacon">500+</div>
                                    <h3 className="font-display font-semibold text-sm text-ink">Dealer Network</h3>
                                    <p className="text-xs text-steel">Authorized regional distributors ensuring nationwide sales and immediate field assistance.</p>
                                </div>
                                <div className="panel p-6 bg-white space-y-2">
                                    <div className="font-display text-3xl font-bold text-beacon">30+</div>
                                    <h3 className="font-display font-semibold text-sm text-ink">Years Experience</h3>
                                    <p className="text-xs text-steel">Unbroken track record in high-security two-way radio and cellular networks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Turnkey 6-Step Delivery Lifecycle ---------- */}
            <section className="py-24 bg-white border-y border-steel/15">
                <div className="container-content">
                    <div className="max-w-2xl mb-16">
                        <span className="text-xs font-mono uppercase tracking-widest text-beacon font-semibold block mb-2">
                            TURNKEY EXECUTION METHODOLOGY
                        </span>
                        <h2 className="text-3xl font-display font-bold text-ink">
                            How We Deliver Turnkey Wireless Projects
                        </h2>
                        <p className="mt-3 text-steel leading-relaxed">
                            From initial RF site surveys and government frequency clearances to ongoing 24/7 mission maintenance, our engineers handle the entire project lifecycle.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROCESS.map((p) => (
                            <div key={p.step} className="panel p-8 bg-paper/50 hover:bg-white hover:border-beacon/40 transition-all group">
                                <span className="font-mono text-sm text-beacon font-bold block mb-2">
                                    STAGE {p.step}
                                </span>
                                <h3 className="font-display font-semibold text-lg text-ink group-hover:text-beacon transition-colors mb-3">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-steel leading-relaxed">
                                    {p.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- Leadership Team ---------- */}
            {team?.length > 0 && (
                <section className="py-24 bg-paper">
                    <div className="container-content">
                        <div className="max-w-2xl mb-14">
                            <span className="text-xs font-mono uppercase tracking-widest text-beacon font-semibold block mb-2">
                                EXECUTIVE DIRECTORS & LEADERSHIP
                            </span>
                            <h2 className="text-3xl font-display font-bold text-ink">
                                Guided by Industry Veterans
                            </h2>
                            <p className="mt-3 text-steel">
                                Meet the leadership team driving corporate direction, technical compliance, and customer alliances.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {team.map((member) => (
                                <div key={member.name} className="panel p-6 bg-white flex flex-col justify-between group">
                                    <div>
                                        <div className="aspect-[4/5] w-full overflow-hidden bg-navy-surface rounded mb-5 relative">
                                            {member.photo_path ? (
                                                <img
                                                    src={`/storage/${member.photo_path}`}
                                                    alt={member.name}
                                                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="h-full w-full flex items-center justify-center text-steel font-mono text-xs">
                                                    EXECUTIVE PHOTO
                                                </div>
                                            )}
                                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/90 to-transparent p-4">
                                                <span className="text-xs font-mono text-beacon font-semibold tracking-wide uppercase">
                                                    {member.title}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="font-display font-bold text-xl text-ink mb-1">{member.name}</h3>
                                        <p className="text-xs font-mono text-steel mb-3">{member.title}</p>
                                        {member.bio && (
                                            <p className="text-sm text-steel leading-relaxed">{member.bio}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ---------- Consultation Banner ---------- */}
            <section className="py-20 bg-navy-dark text-paper border-t border-navy-border relative">
                <div className="container-content text-center max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl font-display font-bold">Partner with Sanchar Telesystems</h2>
                    <p className="text-paper/80 text-sm sm:text-base leading-relaxed">
                        Discover how our technical team can help design, upgrade, or maintain your mission-critical communications infrastructure.
                    </p>
                    <div>
                        <Link href="/contact-us" className="btn-primary">
                            Connect with Our Technical Operations Team
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}

