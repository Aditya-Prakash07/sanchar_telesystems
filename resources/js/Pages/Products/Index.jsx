import { Link } from '@inertiajs/react';
import { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';
import AnimatedHeading from '@/Components/AnimatedHeading';

export default function ProductsIndex({ categories = [], seo = {} }) {
    const [search, setSearch] = useState('');

    const filteredCategories = categories.filter((cat) => {
        if (!search) return true;
        const q = search.toLowerCase();
        const matchesCategory = cat.name?.toLowerCase().includes(q) || (cat.description && cat.description.toLowerCase().includes(q));
        const matchesSub = cat.subcategories?.some((s) => s.name?.toLowerCase().includes(q));
        return matchesCategory || matchesSub;
    });

    return (
        <MainLayout>
            <Seo
                title={seo?.title || 'Wireless Communications Equipment Catalog | Sanchar Telesystems'}
                description={seo?.description || 'Browse DMR, TETRA, P25, PoC over Cellular, LTE-R, and Diamond antenna equipment from Sanchar Telesystems.'}
                canonicalPath="/products"
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Products', url: '/products' },
                ]}
            />

            {/* Header */}
            <header className="relative bg-white dark:bg-navy pt-36 pb-16 overflow-hidden">
                <div className="container-content relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-beacon uppercase tracking-wider mb-4 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-beacon animate-pulse" />
                        <span>TACTICAL HARDWARE & SYSTEMS CATALOG</span>
                    </div>
                    <AnimatedHeading
                        as="h1"
                        immediate={true}
                        stagger={40}
                        highlightPhrase="Wireless Communications"
                        className="text-4xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-tight"
                    >
                        Wireless Communications Equipment
                    </AnimatedHeading>
                    <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-steel leading-relaxed font-sans">
                        Engineered for defense, public safety, high-speed rail, and hazardous environments.
                        Select a product vertical below to explore terminals, base stations, and accessories.
                    </p>

                    {/* Search filter input */}
                    <div className="mt-8 max-w-md relative">
                        <input 
                            type="text"
                            placeholder="Filter systems (e.g. DMR, TETRA, PoC, Antennas)..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="input !bg-slate-50 dark:!bg-navy-surface !border-slate-300 dark:!border-navy-border !text-slate-900 dark:!text-white placeholder:text-slate-400 focus:!border-blue-500 dark:focus:!border-beacon !pr-12"
                        />
                        {search && (
                            <button 
                                onClick={() => setSearch('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white text-xs font-mono"
                            >
                                CLEAR
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {/* Catalog Grid */}
            <div className="py-20 bg-slate-50 dark:bg-navy-dark transition-colors duration-300">
                <div className="container-content space-y-16">
                    {filteredCategories.length === 0 ? (
                        <div className="panel p-16 text-center text-slate-500 dark:text-steel">
                            <p className="font-mono text-sm">No communication categories matched "{search}".</p>
                            <button 
                                onClick={() => setSearch('')}
                                className="mt-3 text-xs font-mono text-blue-600 dark:text-beacon hover:underline"
                            >
                                Reset search filter
                            </button>
                        </div>
                    ) : (
                        filteredCategories.map((cat) => (
                            <div key={cat.id} className="space-y-6">
                                <div className="border-b border-slate-200 dark:border-navy-border pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                                    <div>
                                        <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-paper">
                                            {cat.name}
                                        </h2>
                                        {cat.description && (
                                            <p className="text-xs sm:text-sm text-slate-600 dark:text-steel mt-1 max-w-2xl">
                                                {cat.description}
                                            </p>
                                        )}
                                    </div>
                                    <span className="text-xs font-mono text-slate-500 dark:text-steel shrink-0">
                                        {cat.subcategories?.length || 0} Subcategories
                                    </span>
                                </div>

                                <div className={`grid gap-6 ${
                                    cat.subcategories?.length === 1 
                                        ? 'grid-cols-1 max-w-md' 
                                        : cat.subcategories?.length === 2 
                                        ? 'grid-cols-1 sm:grid-cols-2 max-w-3xl' 
                                        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                                }`}>
                                    {cat.subcategories?.map((sub) => (
                                        <Link
                                            key={sub.id}
                                            href={`/products/${cat.slug}/${sub.slug}`}
                                            className="card-symmetric p-6 group relative hover:border-blue-500/60 dark:hover:border-beacon/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out overflow-hidden"
                                        >
                                            {/* Top specular accent line on hover */}
                                            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/0 dark:via-beacon/0 to-transparent group-hover:via-blue-500 dark:group-hover:via-beacon transition-all duration-500 z-20" />

                                            <div className="flex-1 flex flex-col space-y-3">
                                                <div className="flex items-center justify-between">
                                                    <span className="badge-rf text-[10px]">
                                                        WPC CERTIFIED
                                                    </span>
                                                    <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-beacon transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>

                                                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-paper group-hover:text-blue-600 dark:group-hover:text-beacon transition-colors min-h-[1.75rem]">
                                                    {sub.name}
                                                </h3>

                                                <p className="text-xs sm:text-sm text-slate-600 dark:text-steel min-h-[2.5rem] line-clamp-2 leading-relaxed flex-1">
                                                    {sub.description || `High-reliability ${sub.name} equipment and turnkey accessories.`}
                                                </p>
                                            </div>

                                            <div className="pt-4 mt-auto border-t border-slate-100 dark:border-navy-border/40 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-steel">
                                                <span className="group-hover:text-slate-900 dark:group-hover:text-paper font-medium">Browse Products</span>
                                                <svg className="w-4 h-4 text-blue-600 dark:text-beacon transform group-hover:translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))
                    )}

                    {/* Bottom Custom RFQ Banner */}
                    <div className="card-dual !bg-white dark:!bg-navy-surface p-8 sm:p-12 border border-slate-200/80 dark:border-navy-border shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <span className="text-xs font-mono text-blue-600 dark:text-beacon uppercase tracking-wider font-bold block mb-2">
                                CUSTOM FREQUENCY TUNING & OEM SOURCING
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                                Require a Specialized Frequency Band or GeM Quotation?
                            </h3>
                            <p className="mt-3 text-sm text-slate-600 dark:text-steel leading-relaxed">
                                Our RF engineering facility in Okhla, New Delhi calibrates custom frequency duplexers, cavity filters, and multi-tier repeater networks to meet client RFP specifications.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <Link href="/contact-us" className="btn-beacon !py-3.5 !px-7 font-semibold font-mono text-sm uppercase tracking-wider">
                                Contact Engineering Team
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
