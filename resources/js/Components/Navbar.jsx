import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/Context/ThemeContext';

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
    const { theme, toggleTheme } = useTheme();
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
            {/* Top Utility Bar */}
            <div className={`hidden md:block border-b transition-colors duration-200 ${
                scrolled 
                    ? 'bg-slate-100/95 dark:bg-navy-dark/95 border-slate-200/80 dark:border-white/[0.08]' 
                    : 'bg-slate-100/80 dark:bg-navy-dark/80 backdrop-blur-sm border-slate-200/60 dark:border-white/[0.08]'
            }`}>
                <div className="container-content py-1.5 flex items-center justify-between text-xs font-mono text-slate-600 dark:text-paper/70">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2 text-amber-600 dark:text-beacon/90 font-semibold">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-beacon animate-pulse" />
                            CRITICAL COMMUNICATIONS INFRASTRUCTURE
                        </span>
                        <span className="text-slate-300 dark:text-white/20">|</span>
                        <span>Govt. of India WPC & TEC Approved Supplier</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="tel:+911146528894" className="hover:text-amber-600 dark:hover:text-beacon transition-colors flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-amber-500 dark:text-beacon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +91 (11) 4652 8894
                        </a>
                        <span className="text-slate-300 dark:text-white/20">|</span>
                        <a href="mailto:info@sanchartelesystems.com" className="hover:text-amber-600 dark:hover:text-beacon transition-colors flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-amber-500 dark:text-beacon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    ? 'bg-white/95 dark:bg-navy/95 backdrop-blur-md border-slate-200 dark:border-navy-border shadow-md py-3'
                    : 'bg-white/85 dark:bg-navy/85 backdrop-blur-sm border-slate-200/80 dark:border-white/10 py-4'
            }`}>
                <nav className="container-content flex items-center justify-between">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <img 
                            src="/storage/media/branding/logo0.png" 
                            alt="Sanchar Telesystems" 
                            className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/storage/media/branding/logo1.jpeg';
                            }}
                        />
                        <div className="hidden xl:block border-l border-slate-300 dark:border-white/15 pl-3">
                            <span className="block text-[11px] font-mono tracking-widest text-slate-900 dark:text-paper/90 uppercase font-semibold">SANCHAR</span>
                            <span className="block text-[9px] font-mono text-slate-500 dark:text-steel tracking-wide">MISSION CRITICAL WIRELESS</span>
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
                                        key={link.label}
                                        className="relative"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`text-sm font-medium transition-colors flex items-center gap-1.5 py-2 ${
                                                isActive 
                                                    ? 'text-amber-600 dark:text-beacon font-semibold' 
                                                    : 'text-slate-700 dark:text-paper/85 hover:text-amber-600 dark:hover:text-beacon'
                                            }`}
                                        >
                                            <span>{link.label}</span>
                                            <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdown ? 'rotate-180 text-amber-500 dark:text-beacon' : 'opacity-60'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </Link>

                                        {/* Products Mega Dropdown */}
                                        {productsDropdown && (
                                            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[820px] max-w-[90vw]">
                                                <div className="bg-white dark:bg-navy-surface border border-slate-200 dark:border-navy-border shadow-2xl rounded-xl p-6 overflow-hidden">
                                                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-navy-border/60 pb-3 mb-5">
                                                        <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-beacon font-semibold flex items-center gap-2">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 dark:bg-beacon" />
                                                            HARDWARE ECOSYSTEM &bull; MISSION-CRITICAL SYSTEMS
                                                        </span>
                                                        <Link 
                                                            href="/products" 
                                                            className="text-xs text-slate-500 dark:text-steel hover:text-amber-600 dark:hover:text-beacon transition-colors flex items-center gap-1 font-mono"
                                                        >
                                                            <span>Full Catalog</span>
                                                            <span>&rarr;</span>
                                                        </Link>
                                                    </div>

                                                    <div className="grid grid-cols-3 gap-6">
                                                        {(categoriesNav.length > 0 ? categoriesNav : [
                                                            { name: 'Professional / Amateur Radio', slug: 'professional-amateur-radio', description: 'DMR Tier II/III, TETRA, P25, and Marine Radios.' },
                                                            { name: 'PTT over Cellular (PoC)', slug: 'ptt-over-cellular-poc', description: 'Nationwide broadband dispatch terminals and consoles.' },
                                                            { name: 'Accessories & Antennas', slug: 'accessories', description: 'Diamond Japan antennas, power supplies, batteries.' },
                                                        ]).map((cat) => (
                                                            <div key={cat.slug} className="group/item">
                                                                <Link 
                                                                    href="/products"
                                                                    className="block text-sm font-semibold text-slate-900 dark:text-paper group-hover/item:text-amber-600 dark:group-hover/item:text-beacon transition-colors"
                                                                >
                                                                    {cat.name}
                                                                </Link>
                                                                <p className="text-xs text-slate-500 dark:text-steel mt-1 line-clamp-2 leading-relaxed">
                                                                    {cat.description || 'Mission-ready communication terminals and components.'}
                                                                </p>
                                                                {cat.subcategories && cat.subcategories.length > 0 && (
                                                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                                                        {cat.subcategories.slice(0, 3).map((sub) => (
                                                                            <Link
                                                                                key={sub.slug}
                                                                                href={`/products/${cat.slug}/${sub.slug}`}
                                                                                className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-light text-slate-600 dark:text-paper/70 hover:bg-amber-50 dark:hover:bg-beacon/20 hover:text-amber-600 dark:hover:text-beacon transition-colors"
                                                                            >
                                                                                {sub.name}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <div className="mt-6 pt-4 border-t border-slate-100 dark:border-navy-border/60 bg-slate-50/80 dark:bg-navy-dark/40 -mx-6 -mb-6 p-4 px-6 flex items-center justify-between text-xs">
                                                        <span className="text-slate-600 dark:text-steel">
                                                            Need custom frequency calibration or bulk tender RFQ?
                                                        </span>
                                                        <Link href="/contact-us" className="text-amber-600 dark:text-beacon font-semibold hover:underline">
                                                            Connect with Technical Desk &rarr;
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                );
                            }

                            return (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm font-medium transition-colors py-2 ${
                                            isActive 
                                                ? 'text-amber-600 dark:text-beacon font-semibold' 
                                                : 'text-slate-700 dark:text-paper/85 hover:text-amber-600 dark:hover:text-beacon'
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right Controls: Theme Toggle & Quick Action */}
                    <div className="flex items-center gap-3">
                        {/* Dual-Tone Theme Toggle Switch */}
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="p-2 rounded-lg border border-slate-200 dark:border-navy-border text-slate-600 dark:text-paper/80 hover:text-amber-600 dark:hover:text-beacon hover:border-amber-500/40 dark:hover:border-beacon/40 transition-all duration-200 active:scale-95"
                            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                        >
                            {theme === 'dark' ? (
                                /* Sun Icon (to switch to light) */
                                <svg className="w-5 h-5 text-beacon animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                /* Moon Icon (to switch to dark) */
                                <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>

                        <Link
                            href="/contact-us"
                            className="hidden sm:inline-flex btn-primary !py-2 !px-4 text-xs font-mono uppercase tracking-wider"
                        >
                            Request Architecture
                        </Link>

                        {/* Mobile Hamburger Button */}
                        <button
                            type="button"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="lg:hidden p-2 rounded-lg text-slate-700 dark:text-paper hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                            aria-label="Toggle Navigation"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Drawer */}
            {mobileOpen && (
                <div className="lg:hidden bg-white/98 dark:bg-navy/98 backdrop-blur-xl border-b border-slate-200 dark:border-navy-border shadow-2xl px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-3">
                        <span className="text-xs font-mono text-amber-600 dark:text-beacon uppercase tracking-wider font-semibold">
                            NAVIGATION MENU
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-500 dark:text-steel font-mono">Theme:</span>
                            <button
                                type="button"
                                onClick={toggleTheme}
                                className="px-2.5 py-1 text-xs rounded border border-slate-200 dark:border-navy-border font-mono text-slate-700 dark:text-paper"
                            >
                                {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
                            </button>
                        </div>
                    </div>

                    <div className="space-y-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className={`block py-2.5 text-base font-medium rounded-lg px-3 transition-colors ${
                                    url === link.href
                                        ? 'bg-amber-50 dark:bg-beacon/10 text-amber-600 dark:text-beacon font-semibold'
                                        : 'text-slate-800 dark:text-paper hover:bg-slate-100 dark:hover:bg-white/5'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-3">
                        <div className="text-xs font-mono text-slate-500 dark:text-steel space-y-1">
                            <div>Direct Tel: +91 (11) 4652 8894</div>
                            <div>Email: info@sanchartelesystems.com</div>
                        </div>
                        <Link
                            href="/contact-us"
                            onClick={() => setMobileOpen(false)}
                            className="btn-primary w-full text-center text-xs font-mono uppercase tracking-wider !py-3"
                        >
                            Request Architecture &rarr;
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
