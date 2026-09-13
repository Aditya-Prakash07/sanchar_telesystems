import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState, useRef } from 'react';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Products', href: '/products', hasDropdown: true },
    { label: 'OEM Partners', href: '/oem-partners' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact Us', href: '/contact-us' },
];

export default function Navbar() {
    const { url, props } = usePage();
    const categoriesNav = props.categoriesNav || [];
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [productsDropdown, setProductsDropdown] = useState(false);
    const dropdownTimeoutRef = useRef(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 15);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleMouseEnter = () => {
        if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
        setProductsDropdown(true);
    };

    const handleMouseLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setProductsDropdown(false);
        }, 180);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 transition-all duration-200">
            {/* Top Utility Bar (hidden on mobile) */}
            <div className={`hidden md:block border-b border-white/[0.08] transition-colors duration-200 ${
                scrolled ? 'bg-navy-dark/95' : 'bg-navy-dark/80 backdrop-blur-sm'
            }`}>
                <div className="container-content py-1.5 flex items-center justify-between text-xs text-paper/70 font-mono">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-beacon/90">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-beacon animate-pulse" />
                            CRITICAL COMMUNICATIONS INFRASTRUCTURE
                        </span>
                        <span className="text-white/20">|</span>
                        <span>Govt. of India WPC & TEC Approved Supplier</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="tel:+911146528894" className="hover:text-beacon transition-colors flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-beacon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +91 (11) 4652 8894
                        </a>
                        <span className="text-white/20">|</span>
                        <a href="mailto:info@sanchartelesystems.com" className="hover:text-beacon transition-colors flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-beacon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            info@sanchartelesystems.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className={`transition-all duration-200 border-b ${
                scrolled
                    ? 'bg-navy/95 backdrop-blur-md border-navy-border shadow-xl shadow-navy-dark/30 py-3'
                    : 'bg-navy/85 backdrop-blur-sm border-white/10 py-4'
            }`}>
                <nav className="container-content flex items-center justify-between">
                    {/* Brand Logo & Tagline */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <img 
                            src="/storage/media/logo0.png" 
                            alt="Sanchar Telesystems" 
                            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/storage/media/logo1.jpeg';
                            }}
                        />
                        <div className="hidden xl:block border-l border-white/15 pl-3">
                            <span className="block text-[11px] font-mono tracking-widest text-paper/90 uppercase font-semibold">SANCHAR</span>
                            <span className="block text-[9px] font-mono text-steel tracking-wide">MISSION CRITICAL WIRELESS</span>
                        </div>
                    </Link>

                    {/* Desktop Menu Links */}
                    <ul className="hidden lg:flex items-center gap-7">
                        {NAV_LINKS.map((link) => {
                            const isProducts = link.hasDropdown;
                            const isActive = url === link.href || (isProducts && url.startsWith('/products'));

                            if (isProducts) {
                                return (
                                    <li 
                                        key={link.href}
                                        className="relative"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`text-sm font-medium py-2 flex items-center gap-1.5 transition-colors ${
                                                isActive ? 'text-beacon' : 'text-paper/85 hover:text-paper'
                                            }`}
                                        >
                                            {link.label}
                                            <svg 
                                                className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdown ? 'rotate-180 text-beacon' : 'opacity-60'}`}
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </Link>

                                        {/* Products Mega Dropdown */}
                                        {productsDropdown && (
                                            <div 
                                                className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[760px] animate-in fade-in slide-in-from-top-2 duration-150"
                                            >
                                                <div className="bg-navy-surface border border-navy-border shadow-2xl p-6 rounded-sm">
                                                    <div className="flex items-center justify-between border-b border-navy-border pb-3 mb-4">
                                                        <div className="flex items-center gap-2">
                                                            <span className="h-2 w-2 rounded-full bg-beacon animate-pulse" />
                                                            <span className="text-xs font-mono uppercase tracking-wider text-paper font-semibold">Product Catalog & Systems</span>
                                                        </div>
                                                        <Link 
                                                            href="/products" 
                                                            className="text-xs font-mono text-beacon hover:underline"
                                                            onClick={() => setProductsDropdown(false)}
                                                        >
                                                            View All Hardware &rarr;
                                                        </Link>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-6">
                                                        {categoriesNav.map((cat) => (
                                                            <div key={cat.id} className="space-y-2">
                                                                <Link
                                                                    href="/products"
                                                                    className="font-display text-sm font-semibold text-paper hover:text-beacon transition-colors block border-b border-white/5 pb-1"
                                                                    onClick={() => setProductsDropdown(false)}
                                                                >
                                                                    {cat.name}
                                                                </Link>
                                                                <ul className="space-y-1 text-xs text-steel">
                                                                    {cat.subcategories?.slice(0, 4).map((sub) => (
                                                                        <li key={sub.id}>
                                                                            <Link
                                                                                href={`/products/${cat.slug}/${sub.slug}`}
                                                                                className="hover:text-paper hover:translate-x-1 transition-all inline-block py-0.5"
                                                                                onClick={() => setProductsDropdown(false)}
                                                                            >
                                                                                {sub.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Bottom Featured Strip */}
                                                    <div className="mt-5 pt-3 border-t border-navy-border flex items-center justify-between text-xs text-steel">
                                                        <span>Need tailored frequency band or custom encryption?</span>
                                                        <Link 
                                                            href="/contact-us" 
                                                            className="text-beacon font-medium hover:underline flex items-center gap-1"
                                                            onClick={() => setProductsDropdown(false)}
                                                        >
                                                            Consult with our RF Engineering Team &rarr;
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                );
                            }

                            return (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm font-medium py-2 transition-colors ${
                                            isActive ? 'text-beacon font-semibold' : 'text-paper/85 hover:text-paper'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right Action CTA */}
                    <div className="flex items-center gap-4">
                        <Link 
                            href="/contact-us" 
                            className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-sm font-medium tracking-wide shadow-beacon/20"
                        >
                            <span>Request a Quote</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>

                        {/* Mobile Hamburger Toggle */}
                        <button
                            className="lg:hidden text-paper p-2 hover:bg-white/5 rounded transition-colors"
                            onClick={() => setMobileOpen((v) => !v)}
                            aria-label="Toggle navigation menu"
                            aria-expanded={mobileOpen}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                {mobileOpen ? (
                                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Drawer Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-navy-dark/98 border-b border-navy-border px-6 py-5 space-y-4 shadow-2xl backdrop-blur-xl animate-in fade-in duration-200">
                    <div className="text-[11px] font-mono text-beacon tracking-wider uppercase border-b border-white/10 pb-2">
                        NAVIGATION
                    </div>
                    <ul className="space-y-1">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`block py-2 text-base font-medium transition-colors ${
                                        url === link.href ? 'text-beacon font-semibold' : 'text-paper/90 hover:text-paper'
                                    }`}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="pt-4 border-t border-white/10 space-y-3">
                        <Link 
                            href="/contact-us" 
                            className="btn-primary w-full text-center text-sm py-3 justify-center"
                            onClick={() => setMobileOpen(false)}
                        >
                            Request a Quote / RFP
                        </Link>
                        <div className="text-xs text-steel font-mono text-center pt-1">
                            Emergency Defense Desk: +91 (11) 4652 8894
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}