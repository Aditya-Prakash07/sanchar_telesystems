import { Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

export default function ProductsCategory({ category, subcategory, items = [], seo = {} }) {
    return (
        <MainLayout>
            <Seo
                title={seo?.title || `${subcategory.name} — Sanchar Telesystems`}
                description={seo?.description || `Explore ${subcategory.name} wireless communication equipment from Sanchar Telesystems.`}
                canonicalPath={`/products/${category.slug}/${subcategory.slug}`}
                breadcrumbs={[
                    { name: 'Home', url: '/' },
                    { name: 'Products', url: '/products' },
                    { name: subcategory.name, url: `/products/${category.slug}/${subcategory.slug}` },
                ]}
            />

            {/* Header */}
            <header className="relative bg-slate-950 text-paper pt-36 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-25" />
                <div className="container-content relative z-10">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
                        <Link href="/" className="hover:text-white transition-colors">HOME</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-white transition-colors">PRODUCTS</Link>
                        <span>/</span>
                        <span className="text-amber-400 dark:text-beacon uppercase font-bold">{subcategory.name}</span>
                    </nav>

                    <div className="max-w-3xl">
                        <span className="badge-rf text-xs mb-3">
                            {category.name}
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight">
                            {subcategory.name}
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                            {subcategory.description || `Browse high-durability ${subcategory.name} equipment and systems engineered for mission-critical deployments across India.`}
                        </p>
                    </div>
                </div>
            </header>

            {/* Items Grid */}
            <div className="py-20 bg-slate-50 dark:bg-navy-dark transition-colors duration-300">
                <div className="container-content">
                    <div className="flex items-center justify-between border-b border-slate-200 dark:border-navy-border pb-4 mb-10">
                        <span className="text-xs font-mono uppercase text-slate-500 dark:text-steel font-bold">
                            HARDWARE CATALOG &bull; {items.length} {items.length === 1 ? 'TERMINAL' : 'TERMINALS / UNITS'}
                        </span>
                        <Link href="/products" className="text-xs font-mono text-amber-600 dark:text-beacon hover:underline">
                            &larr; Return to All Categories
                        </Link>
                    </div>

                    {items.length === 0 ? (
                        <div className="panel p-16 text-center space-y-4">
                            <p className="font-mono text-sm text-slate-600 dark:text-steel">
                                Direct supply models available via custom RFP quotation.
                            </p>
                            <Link href="/contact-us" className="btn-primary !py-2.5 !px-6 text-xs font-mono">
                                Request Custom Hardware Specs &rarr;
                            </Link>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {items.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/products/${category.slug}/${subcategory.slug}/${item.slug}`}
                                    className="panel-hover flex flex-col justify-between overflow-hidden group"
                                >
                                    <div>
                                        {/* Image Pedestal */}
                                        <div className="aspect-[4/3] bg-slate-100 dark:bg-navy-dark overflow-hidden relative flex items-center justify-center p-6 border-b border-slate-100 dark:border-navy-border/40">
                                            <img
                                                src={`/storage/${item.cover_image_path}`}
                                                alt={item.name}
                                                className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = '/storage/media/products/1559989450_nx3220_ht.jpg';
                                                }}
                                            />

                                            {item.model_number && (
                                                <span className="absolute top-3 right-3 text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 dark:bg-navy-dark/90 text-amber-400 dark:text-beacon border border-white/10">
                                                    {item.model_number}
                                                </span>
                                            )}
                                        </div>

                                        <div className="p-6 space-y-2">
                                            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-paper group-hover:text-amber-600 dark:group-hover:text-beacon transition-colors line-clamp-1">
                                                {item.name}
                                            </h3>

                                            {item.short_description && (
                                                <p className="text-xs sm:text-sm text-slate-600 dark:text-steel line-clamp-2 leading-relaxed">
                                                    {item.short_description}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-6 pt-0 border-t border-slate-100 dark:border-navy-border/40 mt-4 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-steel">
                                        <span className="group-hover:text-slate-900 dark:group-hover:text-paper font-medium">Technical Specifications</span>
                                        <span className="text-amber-500 dark:text-beacon font-bold">&rarr;</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
