import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

export default function ProductShow({ category, subcategory, item, seo }) {
    const images = [item.cover_image_path, ...(item.gallery || [])].filter(Boolean);
    const [active, setActive] = useState(0);
    const [activeTab, setActiveTab] = useState('specs');
    const [quoteModalOpen, setQuoteModalOpen] = useState(false);

    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: item.name,
        description: item.short_description,
        image: images.map((p) => `${origin}/storage/${p}`),
        brand: { '@type': 'Brand', name: 'Sanchar Telesystems' },
        ...(item.model_number ? { model: item.model_number } : {}),
    };

    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} image={item.cover_image_path ? `/storage/${item.cover_image_path}` : undefined} />
            <Head>
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Head>

            {/* Breadcrumb & Hardware Header */}
            <div className="bg-navy-dark text-paper pt-36 pb-8 border-b border-navy-border">
                <div className="container-content">
                    <nav className="text-xs font-mono text-paper/60 mb-3 flex items-center gap-2">
                        <Link href="/products" className="hover:text-beacon transition-colors">Catalog</Link>
                        <span>/</span>
                        <Link href={`/products#${category.slug}`} className="hover:text-beacon transition-colors">{category.name}</Link>
                        <span>/</span>
                        <Link href={`/products/${category.slug}/${subcategory.slug}`} className="hover:text-beacon transition-colors">{subcategory.name}</Link>
                        <span>/</span>
                        <span className="text-beacon truncate max-w-xs">{item.model_number || item.name}</span>
                    </nav>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            {item.model_number && (
                                <span className="inline-block px-2.5 py-0.5 rounded bg-beacon/10 text-beacon border border-beacon/30 font-mono text-xs font-semibold mb-2">
                                    MODEL {item.model_number}
                                </span>
                            )}
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-paper">
                                {item.name}
                            </h1>
                        </div>
                        <div className="flex items-center gap-3">
                            <button 
                                onClick={() => setQuoteModalOpen(true)}
                                className="btn-primary text-sm !py-2.5"
                            >
                                Request Fleet / Tender Quote
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Product Showcase */}
            <div className="container-content py-16">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left: Gallery & Visuals */}
                    <div className="lg:col-span-6 space-y-4">
                        <div className="aspect-square bg-navy-surface rounded border border-steel/15 flex items-center justify-center p-8 relative group overflow-hidden shadow-sm">
                            {images[active] ? (
                                <img
                                    src={`/storage/${images[active]}`}
                                    alt={item.name}
                                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/storage/media/p1.jpg';
                                    }}
                                />
                            ) : (
                                <div className="text-steel font-mono text-sm">IMAGE NOT AVAILABLE</div>
                            )}

                            {/* Verified Tag */}
                            <span className="absolute top-4 left-4 badge-navy text-[11px]">
                                WPC / TEC APPROVED
                            </span>
                        </div>

                        {/* Thumbnails row */}
                        {images.length > 1 && (
                            <div className="flex gap-3 overflow-x-auto pb-2">
                                {images.map((img, idx) => (
                                    <button
                                        key={img}
                                        onClick={() => setActive(idx)}
                                        className={`h-20 w-20 shrink-0 rounded border p-2 bg-navy-surface transition-all ${
                                            active === idx ? 'border-beacon ring-2 ring-beacon/30' : 'border-steel/20 opacity-70 hover:opacity-100'
                                        }`}
                                    >
                                        <img src={`/storage/${img}`} alt="" className="h-full w-full object-contain" />
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Quick Spec Highlights Callout */}
                        <div className="bg-paper border border-steel/20 p-5 rounded space-y-3 font-mono text-xs">
                            <div className="text-ink font-semibold uppercase tracking-wider">HARDWARE ATTRIBUTES</div>
                            <div className="grid grid-cols-2 gap-2 text-steel">
                                <div>• Ingress: IP68 Waterproof</div>
                                <div>• Drop: MIL-STD-810G</div>
                                <div>• Encryption: AES-256</div>
                                <div>• Audio: 2.5W High-Loudness</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Product Details, Specs & Procurement */}
                    <div className="lg:col-span-6 space-y-8">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-steel block mb-1">
                                {subcategory.name}
                            </span>
                            <h2 className="text-2xl font-display font-bold text-ink mb-3">{item.name}</h2>
                            {item.short_description && (
                                <p className="text-steel leading-relaxed text-base">
                                    {item.short_description}
                                </p>
                            )}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <button 
                                onClick={() => setQuoteModalOpen(true)}
                                className="btn-primary"
                            >
                                Request Official Quote
                            </button>
                            {item.datasheet_path ? (
                                <a
                                    href={`/storage/${item.datasheet_path}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border border-steel/30 text-ink font-semibold px-6 py-3 rounded-sm hover:border-beacon hover:text-beacon transition-colors"
                                >
                                    <svg className="w-4 h-4 text-beacon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    <span>Download Technical PDF</span>
                                </a>
                            ) : (
                                <button
                                    onClick={() => setQuoteModalOpen(true)}
                                    className="inline-flex items-center gap-2 border border-steel/30 text-steel font-semibold px-6 py-3 rounded-sm hover:border-ink hover:text-ink transition-colors text-sm"
                                >
                                    <span>Request Spec Sheet PDF</span>
                                </button>
                            )}
                        </div>

                        {/* Tabs Interface */}
                        <div className="pt-6 border-t border-steel/20">
                            <div className="flex border-b border-steel/20 gap-6 text-sm font-medium">
                                <button
                                    onClick={() => setActiveTab('specs')}
                                    className={`pb-3 font-mono tracking-wide uppercase transition-colors relative ${
                                        activeTab === 'specs'
                                            ? 'text-beacon font-bold border-b-2 border-beacon'
                                            : 'text-steel hover:text-ink'
                                    }`}
                                >
                                    Technical Specifications
                                </button>
                                <button
                                    onClick={() => setActiveTab('desc')}
                                    className={`pb-3 font-mono tracking-wide uppercase transition-colors relative ${
                                        activeTab === 'desc'
                                            ? 'text-beacon font-bold border-b-2 border-beacon'
                                            : 'text-steel hover:text-ink'
                                    }`}
                                >
                                    Overview & Features
                                </button>
                            </div>

                            {/* Tab Content: Specs */}
                            {activeTab === 'specs' && (
                                <div className="mt-6">
                                    {item.specifications && item.specifications.length > 0 ? (
                                        <div className="border border-steel/20 rounded overflow-hidden">
                                            <table className="w-full text-sm">
                                                <tbody>
                                                    {item.specifications.map((row, idx) => (
                                                        <tr 
                                                            key={row.label} 
                                                            className={idx % 2 === 0 ? 'bg-white' : 'bg-paper/60'}
                                                        >
                                                            <td className="py-3 px-4 text-steel font-mono text-xs w-2/5 border-b border-steel/10 font-medium">
                                                                {row.label}
                                                            </td>
                                                            <td className="py-3 px-4 text-ink font-semibold border-b border-steel/10">
                                                                {row.value}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <div className="text-steel text-sm py-4">
                                            Standard technical documentation available upon request. Contact our engineering desk for frequency channel plans.
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Tab Content: Description */}
                            {activeTab === 'desc' && (
                                <div className="mt-6 prose prose-sm max-w-none text-ink leading-relaxed">
                                    {item.description ? (
                                        <div dangerouslySetInnerHTML={{ __html: item.description }} />
                                    ) : (
                                        <p className="text-steel">
                                            The {item.name} is engineered for high-durability operational deployment across Indian terrain, providing fail-safe voice and telemetry support.
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Government Procurement Assurance Box */}
                        <div className="p-4 rounded bg-navy-dark text-paper border border-navy-border text-xs font-mono flex items-center justify-between">
                            <div>
                                <span className="text-beacon font-semibold block">TENDER & GEM PORTAL COMPLIANT</span>
                                <span className="text-steel">Original Manufacturer Authorization & Warranty Provided</span>
                            </div>
                            <Link href="/contact-us" className="text-beacon hover:underline font-semibold shrink-0">
                                Contact Officer &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Quote Modal */}
            {quoteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded border border-steel/20 shadow-2xl max-w-lg w-full p-8 relative">
                        <button
                            onClick={() => setQuoteModalOpen(false)}
                            className="absolute top-4 right-4 text-steel hover:text-ink text-xl font-bold"
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <span className="badge-rf text-[10px] mb-2 font-mono">OFFICIAL RFQ INQUIRY</span>
                        <h3 className="font-display font-bold text-2xl text-ink">
                            Request Quote for {item.model_number || item.name}
                        </h3>
                        <p className="text-steel text-sm mt-1 mb-6">
                            Our technical sales engineers will send formal pricing, data sheets, and delivery timelines.
                        </p>

                        <div className="space-y-4">
                            <p className="text-xs text-steel font-mono bg-paper p-3 rounded border border-steel/10">
                                Product: <strong className="text-ink">{item.name}</strong>
                                {item.model_number && <span> | Model: <strong className="text-ink">{item.model_number}</strong></span>}
                            </p>

                            <Link 
                                href="/contact-us" 
                                className="btn-primary w-full text-center justify-center text-sm py-3 block"
                            >
                                Proceed to Procurement Form &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </MainLayout>
    );
}

