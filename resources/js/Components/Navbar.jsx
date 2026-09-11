import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Products', href: '/products' },
    { label: 'OEM Partners', href: '/oem-partners' },
    { label: 'Careers', href: '/careers' },
];

export default function Navbar() {
    const { url } = usePage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
                scrolled ? 'bg-navy/95 backdrop-blur border-b border-navy-border' : 'bg-transparent'
            }`}
        >
            <nav className="container-content flex items-center justify-between py-4">
                <Link href="/" className="flex items-center gap-2">
                    <span className="font-display text-lg font-semibold text-paper tracking-tight">
                        SANCHAR
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-beacon" aria-hidden="true" />
                    <span className="font-display text-lg font-medium text-steel">TELESYSTEMS</span>
                </Link>

                <ul className="hidden lg:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-sm font-medium transition-colors ${
                                    url === link.href
                                        ? 'text-beacon'
                                        : 'text-paper/80 hover:text-paper'
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link href="/contact-us" className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 text-sm">
                    Talk to us
                </Link>

                <button
                    className="lg:hidden text-paper"
                    onClick={() => setMobileOpen((v) => !v)}
                    aria-label="Toggle menu"
                    aria-expanded={mobileOpen}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                        {mobileOpen ? (
                            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                        ) : (
                            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
                        )}
                    </svg>
                </button>
            </nav>

            {mobileOpen && (
                <ul className="lg:hidden bg-navy border-t border-navy-border px-6 py-4 space-y-1">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="block py-2.5 text-paper/90 font-medium"
                                onClick={() => setMobileOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link href="/contact-us" className="block py-2.5 text-beacon font-semibold">
                            Talk to us
                        </Link>
                    </li>
                </ul>
            )}
        </header>
    );
}
