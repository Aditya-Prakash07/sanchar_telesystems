import { Link } from '@inertiajs/react';
import { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

export default function ProductsIndex({ categories, seo }) {
    const [search, setSearch] = useState('');

    const filteredCategories = categories.filter((cat) => {
        if (!search) return true;
        const q = search.toLowerCase();
        const matchesCategory = cat.name.toLowerCase().includes(q) || (cat.description && cat.description.toLowerCase().includes(q));
        const matchesSub = cat.subcategories?.some((s) => s.name.toLowerCase().includes(q));
        return matchesCategory || matchesSub;
    });

    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} canonicalPath="/products" />

            {/* Header */}
            <section className="bg-navy-dark text-paper pt-36 pb-20 border-b border-navy-border relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
                <div className="container-content relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-beacon/30 bg-beacon/10 text-beacon text-xs font-mono uppercase tracking-wider mb-4">
                        TACTICAL HARDWARE & SYSTEMS CATALOG
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight">
                        Wireless Communications Equipment
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-paper/80 leading-relaxed font-sans">
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
                            className="input !bg-navy-surface/90 !border-navy-border !text-paper placeholder:text-steel focus:!border-beacon !pr-10"
                        />
                        {search && (
                            <button 
                                onClick={() => setSearch('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-steel hover:text-paper text-xs font-mono"
                            >
                                CLEAR
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Catalog Grid */}
            <div className="container-content py-20 space-y-20">
                {filteredCategories.length === 0 ? (
                    <div className="text-center py-16 text-steel">
                        <p className="text-lg">No equipment found matching "{search}".</p>
                        <button onClick={() => setSearch('')} className="mt-3 text-beacon font-semibold hover:underline">
                            Clear search filter
                        </button>
                    </div>
                ) : (
                    filteredCategories.map((category) => (
                        <section key={category.id} className="scroll-mt-28" id={category.slug}>
                            {/* Vertical Header */}
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 border-b border-steel/20 pb-4">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink flex items-center gap-3">
                                        <span>{category.name}</span>
                                        <span className="text-xs font-mono text-steel font-normal px-2.5 py-0.5 rounded-full bg-paper border border-steel/20">
                                            {category.subcategories?.length || 0} Product Lines
                                        </span>
                                    </h2>
                                    {category.description && (
                                        <p className="text-sm text-steel mt-1 max-w-2xl">{category.description}</p>
                                    )}
                                </div>
                            </div>

                            {/* Subcategory Cards Grid */}
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.subcategories.map((sub) => (
                                    <Link
                                        key={sub.id}
                                        href={`/products/${category.slug}/${sub.slug}`}
                                        className="panel-hover p-6 rounded-sm flex flex-col justify-between group bg-white"
                                    >
                                        <div>
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="badge-rf text-[10px]">VERIFIED LINE</span>
                                                <span className="text-xs font-mono text-steel group-hover:text-beacon transition-colors">
                                                    Explore &rarr;
                                                </span>
                                            </div>
                                            <h3 className="font-display font-semibold text-lg text-ink group-hover:text-beacon transition-colors mb-2">
                                                {sub.name}
                                            </h3>
                                            <p className="text-sm text-steel line-clamp-2 leading-relaxed">
                                                {sub.description || `Browse high-reliability ${sub.name} systems and accessories.`}
                                            </p>
                                        </div>

                                        <div className="mt-6 pt-3 border-t border-steel/10 flex items-center justify-between text-xs text-steel">
                                            <span>WPC Approved</span>
                                            <span className="font-semibold text-ink group-hover:text-beacon">
                                                View Models &rarr;
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))
                )}
            </div>

            {/* Custom Architecture Assistance Banner */}
            <section className="bg-navy-dark text-paper py-16 border-t border-navy-border">
                <div className="container-content flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-2xl font-display font-bold">Require a Custom Frequency or Tender Specification?</h2>
                        <p className="text-paper/75 text-sm mt-1">Our engineering team prepares frequency filings, link-budget calculations, and compliance matrices.</p>
                    </div>
                    <Link href="/contact-us" className="btn-primary shrink-0">
                        Consult with Engineering Desk
                    </Link>
                </div>
            </section>
        </MainLayout>
    );
}

