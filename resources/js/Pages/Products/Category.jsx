import { Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

export default function ProductsCategory({ category, subcategory, items, seo }) {
    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} />

            {/* Header */}
            <section className="bg-navy-dark text-paper pt-36 pb-20 border-b border-navy-border relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
                <div className="container-content relative z-10 max-w-3xl">
                    <nav className="text-xs font-mono text-paper/60 mb-4 flex items-center gap-2">
                        <Link href="/products" className="hover:text-beacon transition-colors">
                            Catalog
                        </Link>
                        <span>/</span>
                        <Link href={`/products#${category.slug}`} className="hover:text-beacon transition-colors">
                            {category.name}
                        </Link>
                        <span>/</span>
                        <span className="text-beacon">{subcategory.name}</span>
                    </nav>

                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-navy-surface text-beacon border border-navy-border text-xs font-mono mb-3">
                        {category.name.toUpperCase()} VERTICAL
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight">
                        {subcategory.name}
                    </h1>

                    {subcategory.description && (
                        <p className="mt-4 text-base text-paper/80 leading-relaxed font-sans">
                            {subcategory.description}
                        </p>
                    )}

                    <div className="mt-6 flex items-center gap-4 text-xs font-mono text-steel-light">
                        <span>{items.length} Model{items.length === 1 ? '' : 's'} Published</span>
                        <span>•</span>
                        <span>Govt. WPC / TEC Compliant</span>
                    </div>
                </div>
            </section>

            {/* Items Grid */}
            <div className="container-content py-20">
                {items.length === 0 ? (
                    <div className="panel p-12 text-center max-w-xl mx-auto space-y-4">
                        <div className="h-12 w-12 rounded-full bg-beacon/10 text-beacon mx-auto flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="font-display font-bold text-xl text-ink">Catalog Models in Update</h3>
                        <p className="text-steel text-sm leading-relaxed">
                            New equipment models in this line are currently undergoing compliance updates. Contact our engineering desk for immediate stock and data sheets.
                        </p>
                        <div>
                            <Link href="/contact-us" className="btn-primary text-sm">
                                Inquire About {subcategory.name}
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item) => (
                            <Link
                                key={item.id}
                                href={`/products/${category.slug}/${subcategory.slug}/${item.slug}`}
                                className="group panel-hover flex flex-col justify-between overflow-hidden bg-white"
                            >
                                <div>
                                    <div className="aspect-[4/3] bg-navy-surface overflow-hidden relative flex items-center justify-center p-6 border-b border-steel/10">
                                        {item.cover_image_path ? (
                                            <img
                                                src={`/storage/${item.cover_image_path}`}
                                                alt={item.name}
                                                className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = '/storage/media/p1.jpg';
                                                }}
                                            />
                                        ) : (
                                            <div className="text-steel font-mono text-xs">MODEL PREVIEW</div>
                                        )}

                                        {item.model_number && (
                                            <span className="absolute top-3 right-3 text-[11px] font-mono px-2 py-0.5 rounded bg-navy-dark/80 text-beacon border border-white/10">
                                                {item.model_number}
                                            </span>
                                        )}
                                    </div>

                                    <div className="p-6">
                                        {item.model_number && (
                                            <span className="text-xs font-mono text-steel block mb-1">MODEL: {item.model_number}</span>
                                        )}
                                        <h3 className="font-display font-semibold text-lg text-ink group-hover:text-beacon transition-colors mb-2 line-clamp-1">
                                            {item.name}
                                        </h3>
                                        {item.short_description && (
                                            <p className="text-sm text-steel line-clamp-2 leading-relaxed">
                                                {item.short_description}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="px-6 pb-6 pt-3 border-t border-steel/10 flex items-center justify-between text-xs">
                                    <span className="font-mono text-steel">Rugged Spec</span>
                                    <span className="font-semibold text-ink group-hover:text-beacon transition-colors flex items-center gap-1">
                                        Full Datasheet &rarr;
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            {/* Subcategory Technical Inquiry */}
            <section className="bg-navy-dark text-paper py-14 border-t border-navy-border">
                <div className="container-content flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-xl font-display font-bold">Need a Tender or Bulk Fleet Quote for {subcategory.name}?</h3>
                        <p className="text-steel-light text-sm mt-1">Our technical sales engineers provide formal tender documentation, WPC compliance letters, and volume pricing.</p>
                    </div>
                    <Link href="/contact-us" className="btn-primary shrink-0 text-sm">
                        Request Formal Proposal
                    </Link>
                </div>
            </section>
        </MainLayout>
    );
}

