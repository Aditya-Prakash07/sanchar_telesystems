import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-navy text-paper/80 border-t border-navy-border">
            <div className="container-content py-16 grid gap-12 md:grid-cols-4">
                <div className="md:col-span-1">
                    <div className="font-display text-lg font-semibold text-paper mb-3">
                        SANCHAR TELESYSTEMS
                    </div>
                    <p className="text-sm leading-relaxed text-steel">
                        Mission-critical wireless communication solutions for public safety,
                        railways, utilities and industry across India.
                    </p>
                </div>

                <FooterColumn
                    title="Products"
                    links={[
                        { label: 'Digital Mobile Radio (DMR)', href: '/products' },
                        { label: 'License Free', href: '/products' },
                        { label: 'PoC Platform', href: '/products' },
                        { label: 'Kenwood Accessories', href: '/products' },
                    ]}
                />

                <FooterColumn
                    title="Company"
                    links={[
                        { label: 'About Us', href: '/about-us' },
                        { label: 'Careers', href: '/careers' },
                        { label: 'OEM Partners', href: '/oem-partners' },
                        { label: 'Contact Us', href: '/contact-us' },
                    ]}
                />

                <div>
                    <h3 className="text-sm font-semibold text-paper mb-4">Contact</h3>
                    <address className="not-italic text-sm text-steel leading-relaxed space-y-2">
                        <p>
                            Sanchar Telesystems Limited
                            <br />
                            A-78, Ground Floor, Okhla Industrial Area, Phase-II
                            <br />
                            New Delhi-110020, India
                        </p>
                        <p>
                            <a href="tel:+911146528894" className="hover:text-beacon">
                                +91 (11) 4652 8894–97
                            </a>
                        </p>
                        <p>
                            <a href="mailto:info@sanchartelesystems.com" className="hover:text-beacon">
                                info@sanchartelesystems.com
                            </a>
                        </p>
                    </address>
                </div>
            </div>

            <div className="border-t border-navy-border">
                <div className="container-content py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-steel">
                    <p>© {new Date().getFullYear()} Sanchar Telesystems Limited. All rights reserved.</p>
                    <Link href="/privacy-policy" className="hover:text-beacon">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, links }) {
    return (
        <div>
            <h3 className="text-sm font-semibold text-paper mb-4">{title}</h3>
            <ul className="space-y-2.5 text-sm text-steel">
                {links.map((l) => (
                    <li key={l.label}>
                        <Link href={l.href} className="hover:text-beacon transition-colors">
                            {l.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
