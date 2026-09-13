import { Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

const PROCESS = [
    {
        step: '01',
        title: 'RF Propagation Survey & Spectrum Modeling',
        description: 'Comprehensive topographic and RF propagation analysis using calibrated spectrum analyzers to map terrain obstacles, Fresnel zone clearance, and signal attenuation.',
    },
    {
        step: '02',
        title: 'WPC & Government Frequency Clearances',
        description: 'End-to-end statutory assistance with the Wireless Planning & Coordination (WPC) Wing of the Ministry of Communications for frequency allocation and ETA approvals.',
    },
    {
        step: '03',
        title: 'Custom Hardware Calibration & R&D',
        description: 'Frequency retuning, duplexer cavity filter alignment, and MIL-STD compliance validation performed at our New Delhi laboratory before equipment deployment.',
    },
    {
        step: '04',
        title: 'Tower, Mast & Repeater Infrastructure',
        description: 'Civil and structural engineering for repeater base masts, high-gain Diamond antenna arrays, lightning arrestors, and uninterrupted solar/battery power backups.',
    },
    {
        step: '05',
        title: 'Factory Acceptance & Commissioning (FAT/SAT)',
        description: 'Full-duplex stress testing, voice logging verification, and formal handover to client technical commanders with operational field training.',
    },
    {
        step: '06',
        title: '24/7 Level-3 AMC & Spares Inventory',
        description: 'Dedicated nationwide annual maintenance contracts with a New Delhi spares depot guaranteeing rapid board-level turnaround and firmware lifecycle support.',
    },
];

export default function About({ team = [], seo = {} }) {
    return (
        <MainLayout>
            <Seo
                title={seo?.title || 'About Sanchar Telesystems — Mission-Critical Telecommunications Leader'}
                description={seo?.description || 'Learn about Sanchar Telesystems, our 30+ year history, executive leadership, engineering standards, and turnkey wireless network delivery.'}
                canonicalPath="/about-us"
            />

            {/* Header with Original Inner Banner */}
            <header className="relative bg-slate-950 text-paper pt-36 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-30">
                    <img 
                        src="/storage/media/banners/inner_about.jpg" 
                        alt="About Sanchar Telesystems" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/storage/media/banners/banner1.png';
                        }}
                    />
                    <div className="absolute inset-0 bg-slate-950/80" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                </div>

                <div className="container-content relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 dark:text-beacon uppercase tracking-wider mb-4 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-beacon animate-pulse" />
                            <span>ESTABLISHED IN THE 1990s &bull; NEW DELHI HQ</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight">
                            Mobility, Efficiency, and Reliability in Wireless Communications.
                        </h1>
                        <p className="mt-5 text-lg text-slate-300 leading-relaxed font-sans">
                            Sanchar Telesystems is a market leader in mission-critical wireless communications in India. We pioneer in offering world-class wireless communication solutions to customers around the country.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-8 max-w-4xl text-xs font-mono">
                        <div>
                            <span className="text-slate-400 block">ESTABLISHED</span>
                            <span className="text-white font-bold mt-1 block">30+ YEARS OF EXCELLENCE</span>
                        </div>
                        <div>
                            <span className="text-slate-400 block">STANDARDS</span>
                            <span className="text-white font-bold mt-1 block">DMR &bull; TETRA &bull; PoC &bull; LTE-R</span>
                        </div>
                        <div>
                            <span className="text-slate-400 block">PROCUREMENT</span>
                            <span className="text-white font-bold mt-1 block">GeM PORTAL VENDOR</span>
                        </div>
                        <div>
                            <span className="text-slate-400 block">COVERAGE</span>
                            <span className="text-white font-bold mt-1 block">PAN-INDIA 500+ DEALERS</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Corporate Narrative */}
            <section className="py-20 bg-slate-50 dark:bg-navy-dark transition-colors duration-300">
                <div className="container-content">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 space-y-5 text-slate-700 dark:text-steel leading-relaxed text-sm sm:text-base">
                            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-beacon font-bold block">
                                OUR PURPOSE & HERITAGE
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-paper">
                                Engineering Turnkey Networks Where Failure is Not an Option
                            </h2>
                            <p>
                                Mobility, Efficiency, and Reliability are the three core principles that Sanchar Telesystems products and solutions are designed to meet. Cutting-edge technologies and OPEN standards are supported across all of our systems.
                            </p>
                            <p>
                                Sanchar has been investing continuously in product and solution research and development because it understands the need to provide customized solutions for users in critical industries. Additionally, devices are an essential component of any solution, and Sanchar collaborates with reputable global OEMs to supply equipment optimized for Indian spectrum conditions.
                            </p>
                            <p>
                                Sanchar offers Kenwood products on the <strong>GeM (Government e-Marketplace)</strong> portal for ease of public and defense procurement.
                            </p>

                            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                                <span className="px-3 py-1.5 bg-white dark:bg-navy-surface border border-slate-200 dark:border-navy-border rounded-lg font-semibold text-slate-800 dark:text-paper">
                                    ✓ Make in India Partner
                                </span>
                                <span className="px-3 py-1.5 bg-white dark:bg-navy-surface border border-slate-200 dark:border-navy-border rounded-lg font-semibold text-slate-800 dark:text-paper">
                                    ✓ ISO 9001:2015 Quality Management
                                </span>
                                <span className="px-3 py-1.5 bg-white dark:bg-navy-surface border border-slate-200 dark:border-navy-border rounded-lg font-semibold text-slate-800 dark:text-paper">
                                    ✓ WPC & TEC Approved
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="panel p-6 space-y-2">
                                    <div className="font-display text-3xl font-bold text-amber-500 dark:text-beacon">80K+</div>
                                    <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-paper">Units Sold</h3>
                                    <p className="text-xs text-slate-500 dark:text-steel">Digital transceivers and PoC smart devices deployed nationwide.</p>
                                </div>
                                <div className="panel p-6 space-y-2">
                                    <div className="font-display text-3xl font-bold text-amber-500 dark:text-beacon">150+</div>
                                    <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-paper">Critical Projects</h3>
                                    <p className="text-xs text-slate-500 dark:text-steel">Completed infrastructure installations for government, rail, and industry.</p>
                                </div>
                                <div className="panel p-6 space-y-2">
                                    <div className="font-display text-3xl font-bold text-amber-500 dark:text-beacon">500+</div>
                                    <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-paper">Dealer Network</h3>
                                    <p className="text-xs text-slate-500 dark:text-steel">Authorized regional distributors ensuring nationwide sales and field support.</p>
                                </div>
                                <div className="panel p-6 space-y-2">
                                    <div className="font-display text-3xl font-bold text-amber-500 dark:text-beacon">30+</div>
                                    <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-paper">Years Experience</h3>
                                    <p className="text-xs text-slate-500 dark:text-steel">Pioneering two-way radio and cellular telecom technologies since the 1990s.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Turnkey 6-Step Execution Methodology */}
            <section className="py-20 bg-white dark:bg-navy border-y border-slate-200 dark:border-navy-border transition-colors duration-300">
                <div className="container-content">
                    <div className="max-w-2xl mb-14">
                        <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-beacon font-bold block mb-2">
                            TURNKEY PROJECT PIPELINE
                        </span>
                        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-paper">
                            How We Deliver Turnkey Wireless Projects
                        </h2>
                        <p className="mt-3 text-slate-600 dark:text-steel leading-relaxed text-sm">
                            From initial RF site propagation surveys and government frequency clearances to final commissioning and 24/7 maintenance, our engineers manage the complete lifecycle.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PROCESS.map((p) => (
                            <div key={p.step} className="panel-hover p-8 group">
                                <span className="font-mono text-sm text-amber-500 dark:text-beacon font-bold block mb-2">
                                    PHASE {p.step}
                                </span>
                                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-paper mb-2 group-hover:text-amber-600 dark:group-hover:text-beacon transition-colors">
                                    {p.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 dark:text-steel leading-relaxed">
                                    {p.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Executive Leadership Gallery */}
            <section className="py-20 bg-slate-50 dark:bg-navy-dark transition-colors duration-300">
                <div className="container-content">
                    <div className="max-w-2xl mb-14">
                        <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-beacon font-bold block mb-2">
                            LEADERSHIP TEAM
                        </span>
                        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-paper">
                            Guided by Telecom Industry Veterans
                        </h2>
                        <p className="mt-2 text-slate-600 dark:text-steel text-sm">
                            Meet the executive directors and technical leadership steering corporate strategy and customer success.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {(team.length > 0 ? team : [
                            {
                                name: 'Mr. Suresh Gupta',
                                title: 'Founder & Director',
                                bio: 'Founder director bringing in more than 30 years of technology industry leadership. Pivotal in managing corporate direction and strategy with deep technical knowledge.',
                                photo_path: 'media/team/MrSureshGupta_1.jpg'
                            },
                            {
                                name: 'Ms. Priyanka Gupta',
                                title: 'Director',
                                bio: 'Holds a bachelor degree in engineering and MBA with over a decade of experience spearheading marketing, OEM alliances, and channel distribution.',
                                photo_path: 'media/team/PriyankaGupta.jpg'
                            },
                            {
                                name: 'Mr. Amit Goyal',
                                title: 'Vice President',
                                bio: 'Holds a bachelor degree in engineering and MBA with over two decades of experience in software development, partnership development, and project management.',
                                photo_path: 'media/team/Amit_goyal.jpeg'
                            },
                            {
                                name: 'Ms. Ritu Goel',
                                title: 'General Manager – Technical',
                                bio: 'Core technical expertise providing technical direction to the company with over two decades of RF experience.',
                                photo_path: 'media/team/ritugoel.jpg'
                            },
                            {
                                name: 'Mr. Amit Bhardwaj',
                                title: 'General Manager – Finance & Imports',
                                bio: 'Veteran in finance & EXIM heading corporate finance and strategic fiscal planning with over 17 years of hands-on experience.',
                                photo_path: 'media/team/AmitBhardwaj.jpg'
                            }
                        ]).map((member) => (
                            <div key={member.name} className="panel p-6 flex flex-col justify-between group">
                                <div>
                                    <div className="aspect-[4/5] w-full overflow-hidden bg-slate-200 dark:bg-navy-dark rounded-lg mb-5 relative">
                                        <img
                                            src={`/storage/${member.photo_path}`}
                                            alt={member.name}
                                            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                            <span className="text-xs font-mono text-beacon font-bold tracking-wide uppercase">
                                                {member.title}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-paper mb-1">{member.name}</h3>
                                    <p className="text-xs font-mono text-slate-500 dark:text-steel mb-3">{member.title}</p>
                                    <p className="text-sm text-slate-600 dark:text-steel leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom Contact CTA */}
            <section className="py-20 bg-white dark:bg-navy border-t border-slate-200 dark:border-navy-border transition-colors duration-300">
                <div className="container-content text-center max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-paper">Partner with Sanchar Telesystems</h2>
                    <p className="text-slate-600 dark:text-steel text-sm sm:text-base leading-relaxed">
                        Discover how our technical team can help design, upgrade, or maintain your mission-critical communications infrastructure.
                    </p>
                    <div>
                        <Link href="/contact-us" className="btn-beacon !py-3.5 !px-8 text-sm font-mono uppercase tracking-wider">
                            Connect with Our Technical Team &rarr;
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
