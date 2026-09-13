import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-navy-dark text-paper/80 border-t border-navy-border relative overflow-hidden">
            {/* Subtle background grid pattern */}
            <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

            {/* Certifications & Compliance Strip */}
            <div className="border-b border-navy-border/60 bg-navy-surface/50 relative z-10">
                <div className="container-content py-5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-paper/70">
                    <div className="flex flex-wrap items-center gap-6">
                        <span className="flex items-center gap-2 text-beacon">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            GOVERNMENT OF INDIA WPC & TEC APPROVED
                        </span>
                        <span className="hidden sm:inline text-white/20">•</span>
                        <span>ISO 9001:2015 Quality Management</span>
                        <span className="hidden sm:inline text-white/20">•</span>
                        <span>Atmanirbhar Bharat / Make In India Partner</span>
                    </div>

                    <div className="flex items-center gap-2 text-steel-light">
                        <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>24/7 Mission-Critical Support Active</span>
                    </div>
                </div>
            </div>

            <div className="container-content py-16 grid gap-12 md:grid-cols-4 relative z-10">
                <div className="md:col-span-1 space-y-4">
                    <Link href="/" className="flex items-center gap-3">
                        <img 
                            src="/storage/media/logo0.png" 
                            alt="Sanchar Telesystems" 
                            className="h-11 w-auto object-contain"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/storage/media/logo1.jpeg';
                            }}
                        />
                    </Link>
                    <p className="text-sm leading-relaxed text-steel">
                        India’s premier wireless communication systems provider since the 1990s.
                        Delivering turnkey DMR, TETRA, PoC over Cellular, and Railway LTE-R networks.
                    </p>
                    <div className="pt-2 flex items-center gap-3 text-steel">
                        <a 
                            href="https://www.linkedin.com/company/sanchar-telesystems-limited" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="h-9 w-9 rounded border border-navy-border flex items-center justify-center hover:border-beacon hover:text-beacon transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <FooterColumn
                    title="Hardware & Systems"
                    links={[
                        { label: 'Digital Mobile Radio (DMR)', href: '/products' },
                        { label: 'Push-to-Talk Over Cellular (PoC)', href: '/products' },
                        { label: 'Railway LTE-R Cab Radios', href: '/products' },
                        { label: 'Mission-Critical TETRA & P25', href: '/products' },
                        { label: 'Diamond Antennas & Accessories', href: '/products' },
                    ]}
                />

                <FooterColumn
                    title="Organization"
                    links={[
                        { label: 'About Sanchar', href: '/about-us' },
                        { label: 'Project Delivery Lifecycle', href: '/about-us' },
                        { label: 'Global OEM Partners', href: '/oem-partners' },
                        { label: 'Careers in Telecommunications', href: '/careers' },
                        { label: 'Contact & Procurement Desk', href: '/contact-us' },
                    ]}
                />

                <div>
                    <h3 className="text-sm font-semibold text-paper mb-4 font-mono uppercase tracking-wider">
                        Headquarters
                    </h3>
                    <address className="not-italic text-sm text-steel leading-relaxed space-y-3">
                        <p>
                            <strong className="text-paper font-medium">Sanchar Telesystems Limited</strong>
                            <br />
                            A-78, Ground Floor, Okhla Industrial Area, Phase-II
                            <br />
                            New Delhi-110020, India
                        </p>
                        <p className="space-y-1">
                            <span className="block text-xs font-mono text-paper/60 uppercase">Direct Tel:</span>
                            <a href="tel:+911146528894" className="hover:text-beacon text-paper/90 transition-colors font-mono">
                                +91 (11) 4652 8894–97
                            </a>
                        </p>
                        <p className="space-y-1">
                            <span className="block text-xs font-mono text-paper/60 uppercase">Defense & Enterprise Inquiries:</span>
                            <a href="mailto:info@sanchartelesystems.com" className="hover:text-beacon text-paper/90 transition-colors font-mono">
                                info@sanchartelesystems.com
                            </a>
                        </p>
                    </address>
                </div>
            </div>

            <div className="border-t border-navy-border relative z-10 bg-navy-dark">
                <div className="container-content py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-steel font-mono">
                    <p>© {new Date().getFullYear()} Sanchar Telesystems Limited. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/contact-us" className="hover:text-beacon transition-colors">
                            Technical Support
                        </Link>
                        <span>•</span>
                        <Link href="/products" className="hover:text-beacon transition-colors">
                            Product Index
                        </Link>
                        <span>•</span>
                        <a href="/admin" className="hover:text-beacon transition-colors">
                            Admin Portal
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, links }) {
    return (
        <div>
            <h3 className="text-sm font-semibold text-paper mb-4 font-mono uppercase tracking-wider">
                {title}
            </h3>
            <ul className="space-y-2.5 text-sm text-steel">
                {links.map((l) => (
                    <li key={l.label}>
                        <Link href={l.href} className="hover:text-beacon hover:translate-x-1 transition-all inline-block">
                            {l.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

