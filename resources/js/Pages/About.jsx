import { Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';
import AnimatedNumber from '@/Components/AnimatedNumber';
import WhySancharDiagram from '@/Components/WhySancharDiagram';

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
                description={seo?.description || 'Learn about Sanchar Telesystems, executive leadership, engineering standards, and turnkey wireless network delivery across India.'}
                canonicalPath="/about-us"
            />

            {/* Header */}
            <header className="relative bg-white dark:bg-navy border-b border-slate-200/80 dark:border-navy-border pt-36 pb-20 overflow-hidden transition-colors duration-300">
                <div className="container-content relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-600 dark:text-beacon uppercase tracking-wider mb-4 font-semibold">
                            <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-beacon animate-pulse" />
                            <span>GOVT. OF INDIA WPC & TEC APPROVED SUPPLIER &bull; NEW DELHI HQ</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                            Mobility, Efficiency, and Reliability in Wireless Communications.
                        </h1>
                        <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                            Sanchar Telesystems is a market leader in mission-critical wireless communications in India. We pioneer in offering world-class wireless communication solutions to customers around the country.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 dark:border-navy-border/80 pt-8 max-w-4xl text-xs font-mono">
                        <div>
                            <span className="text-slate-500 dark:text-slate-400 block">UNITS DEPLOYED</span>
                            <span className="text-slate-900 dark:text-white font-bold mt-1 block">300,000+ UNITS SOLD</span>
                        </div>
                        <div>
                            <span className="text-slate-500 dark:text-slate-400 block">STANDARDS</span>
                            <span className="text-slate-900 dark:text-white font-bold mt-1 block">DMR &bull; TETRA &bull; PoC &bull; LTE-R</span>
                        </div>
                        <div>
                            <span className="text-slate-500 dark:text-slate-400 block">PROJECTS</span>
                            <span className="text-slate-900 dark:text-white font-bold mt-1 block">500+ DELIVERED</span>
                        </div>
                        <div>
                            <span className="text-slate-500 dark:text-slate-400 block">NETWORK</span>
                            <span className="text-slate-900 dark:text-white font-bold mt-1 block">50+ DISTRIBUTORS</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Corporate Narrative & Impact Metrics */}
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

                            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                                <span className="px-3 py-1.5 bg-white dark:bg-navy-surface border border-slate-200 dark:border-navy-border rounded-lg font-semibold text-slate-800 dark:text-paper">
                                    ✓ Make in India Partner
                                </span>
                                <span className="px-3 py-1.5 bg-white dark:bg-navy-surface border border-slate-200 dark:border-navy-border rounded-lg font-semibold text-slate-800 dark:text-paper">
                                    ✓ ISO 9001:2015 Quality Management
                                </span>
                                <span className="px-3 py-1.5 bg-white dark:bg-navy-surface border border-slate-200 dark:border-navy-border rounded-lg font-semibold text-slate-800 dark:text-paper">
                                    ✓ 100% WPC & TEC Approved
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="card-symmetric p-6 space-y-2 hover:border-amber-500/50 dark:hover:border-beacon/40 hover:shadow-xl transition-all duration-300">
                                    <div className="font-display text-3xl font-bold text-amber-500 dark:text-beacon">
                                        <AnimatedNumber value="300,000" suffix="+" duration={1800} />
                                    </div>
                                    <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-paper">Units Sold</h3>
                                    <p className="text-xs text-slate-500 dark:text-steel">Wireless communication units, terminals, and radio systems deployed nationwide.</p>
                                </div>
                                <div className="card-symmetric p-6 space-y-2 hover:border-amber-500/50 dark:hover:border-beacon/40 hover:shadow-xl transition-all duration-300">
                                    <div className="font-display text-3xl font-bold text-amber-500 dark:text-beacon">
                                        <AnimatedNumber value={500} suffix="+" duration={2000} />
                                    </div>
                                    <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-paper">Projects Delivered</h3>
                                    <p className="text-xs text-slate-500 dark:text-steel">Turnkey communication systems delivered for public safety, transit, and heavy industry.</p>
                                </div>
                                <div className="card-symmetric p-6 space-y-2 hover:border-amber-500/50 dark:hover:border-beacon/40 hover:shadow-xl transition-all duration-300">
                                    <div className="font-display text-3xl font-bold text-amber-500 dark:text-beacon">
                                        <AnimatedNumber value={50} suffix="+" duration={1600} />
                                    </div>
                                    <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-paper">Distributor Network</h3>
                                    <p className="text-xs text-slate-500 dark:text-steel">Nationwide network of authorized channel partners providing sales and engineering support.</p>
                                </div>
                                <div className="card-symmetric p-6 space-y-2 hover:border-amber-500/50 dark:hover:border-beacon/40 hover:shadow-xl transition-all duration-300">
                                    <div className="font-display text-3xl font-bold text-amber-500 dark:text-beacon">
                                        <span>100%</span>
                                    </div>
                                    <h3 className="font-display font-semibold text-sm text-slate-900 dark:text-paper">WPC & TEC Approved</h3>
                                    <p className="text-xs text-slate-500 dark:text-steel">All hardware systems fully certified under Government of India wireless regulatory standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Official OEM Collaboration & GeM Portal Showcase */}
            <section className="py-20 sm:py-24 bg-white dark:bg-navy border-t border-slate-200 dark:border-navy-border transition-colors duration-300 relative overflow-hidden">
                <div className="container-content relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 space-y-5 text-slate-700 dark:text-steel leading-relaxed text-sm sm:text-base">
                            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-beacon font-bold block">
                                OEM ALLIANCES & GeM PROCUREMENT
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-paper leading-snug">
                                World-Class Technology Alliances & Make In India Manufacturing
                            </h2>
                            <p>
                                We collaborate with world&rsquo;s leading Original Equipment Manufacturers (OEMs) and Technology providers to bring best-in-class communication solutions to India. We are a leading manufacturer of LTE MCX, LTE PoC, and DMR radios in India.
                            </p>
                            <p>
                                We specialize in offering best communication solutions which are right for your business — configured for zero downtime across government, enterprise, and industrial deployments.
                            </p>
                            <p className="p-4 rounded-xl bg-amber-500/10 dark:bg-beacon/10 border border-amber-500/20 dark:border-beacon/20 text-slate-800 dark:text-slate-200">
                                <strong>Government Procurement:</strong> Sanchar offers genuine Kenwood communication products on the <strong>GeM (Government e-Marketplace)</strong> portal for seamless public, defense, and paramilitary procurement.
                            </p>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 bg-slate-950 shadow-2xl group">
                                <img
                                    src="/storage/media/about/as03.png"
                                    alt="Sanchar OEM Manufacturing & GeM Delivery"
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-slate-900/80 backdrop-blur-md border border-white/10 text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    <span>OEM Manufacturing &bull; GeM Registered</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Official RF Testing Lab & Service Infrastructure ("Service is our Motto") */}
            <section className="py-20 sm:py-24 bg-slate-50 dark:bg-navy-dark border-t border-slate-200 dark:border-navy-border transition-colors duration-300 relative overflow-hidden">
                <div className="container-content relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        {/* Left: Sanchar Lab Photo (From Official Website) */}
                        <div className="lg:col-span-6 order-2 lg:order-1">
                            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 bg-slate-950 shadow-2xl group">
                                <img
                                    src="/storage/media/about/sancharlab.png"
                                    alt="Sanchar Telesystems RF Engineering & Testing Lab"
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-slate-900/80 backdrop-blur-md border border-white/10 text-[11px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                    <span>SANCHAR RF TESTING LAB &bull; NEW DELHI</span>
                                </div>
                                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                                    <p className="text-xs font-mono text-white/90">
                                        In-House Calibration, Component-Level Repair & Pre-Dispatch Testing Rig
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: "Service is our Motto" Narrative from Official Website */}
                        <div className="lg:col-span-6 order-1 lg:order-2 space-y-5 text-slate-700 dark:text-steel leading-relaxed text-sm sm:text-base">
                            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-beacon font-bold block">
                                IN-HOUSE TESTING & LEVEL-3 SERVICE DEPOT
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-paper leading-snug">
                                &ldquo;Service is our Motto&rdquo; &mdash; Telecom Experts & Advanced Lab Infrastructure
                            </h2>
                            <p>
                                Sanchar excels in offering mission-critical communication solutions to diverse sectors such as public safety, railways, utility companies, and industrial houses with DMR, TETRA, analog radio, and LTE technologies.
                            </p>
                            <p>
                                Sanchar is geographically spread across the country through our excellent and dedicated channel partners who excel in providing communication solutions right at your doorstep.
                            </p>
                            <p className="font-semibold text-slate-900 dark:text-paper border-l-4 border-amber-500 dark:border-beacon pl-4 italic">
                                &ldquo;Service is our Motto&rdquo; &mdash; Sanchar&rsquo;s team of highly skilled telecom experts and best-in-class infrastructure ensures the right solution for each customer.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                                <div className="flex items-center gap-2 text-slate-800 dark:text-paper">
                                    <span className="w-1.5 h-1.5 rounded-full bg-beacon" />
                                    <span>RF Spectrum Calibration</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-800 dark:text-paper">
                                    <span className="w-1.5 h-1.5 rounded-full bg-beacon" />
                                    <span>Level-3 Board Repair Depot</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-800 dark:text-paper">
                                    <span className="w-1.5 h-1.5 rounded-full bg-beacon" />
                                    <span>MIL-STD & IP68 Stress Testing</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-800 dark:text-paper">
                                    <span className="w-1.5 h-1.5 rounded-full bg-beacon" />
                                    <span>Rapid Nationwide Turnaround</span>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link 
                                    href="/contact-us" 
                                    className="btn-shimmer !py-3 !px-7 text-xs font-mono uppercase tracking-wider font-bold inline-flex items-center gap-2 group"
                                >
                                    <span>Consult Lab Technical Desk</span>
                                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Value Pillars Diagram (Why Choose Sanchar Telesystems) */}
            <WhySancharDiagram />

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
                            <div key={p.step} className="card-symmetric p-8 group">
                                <div>
                                    <span className="font-mono text-xs tracking-wider text-amber-500 dark:text-beacon font-bold block mb-2">
                                        PHASE {p.step}
                                    </span>
                                    <h3 className="font-display font-bold text-lg text-slate-900 dark:text-paper mb-2 group-hover:text-amber-600 dark:group-hover:text-beacon transition-colors min-h-[1.75rem]">
                                        {p.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-steel leading-relaxed">
                                        {p.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Executive Leadership Gallery */}
            <section className="py-20 bg-slate-50 dark:bg-navy-dark transition-colors duration-300">
                <div className="container-content">
                    <div className="max-w-2xl mb-14 text-center md:text-left">
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

                    {/* Symmetrically Centered Team Gallery (Row 1: 3 cards, Row 2: 2 cards centered) */}
                    <div className="flex flex-wrap justify-center gap-8">
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
                            <div 
                                key={member.name} 
                                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm card-symmetric p-6 group flex flex-col justify-between h-[520px] sm:h-[540px]"
                            >
                                <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-200 dark:bg-navy-dark rounded-xl mb-5 relative shrink-0">
                                    <img
                                        src={`/storage/${member.photo_path}`}
                                        alt={member.name}
                                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                                        <span className="text-xs font-mono text-amber-400 dark:text-beacon font-bold tracking-wide uppercase">
                                            {member.title}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-display font-bold text-xl text-slate-900 dark:text-paper mb-1 line-clamp-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-xs font-mono text-amber-600 dark:text-beacon/90 font-medium mb-3 line-clamp-1">
                                            {member.title}
                                        </p>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-steel leading-relaxed line-clamp-4 overflow-hidden">
                                        {member.bio}
                                    </p>
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
                            Connect with Our Technical Team
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
