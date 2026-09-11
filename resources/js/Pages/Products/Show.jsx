import { Link, Head } from '@inertiajs/react';
import { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

export default function ProductShow({ category, subcategory, item, seo }) {
    const images = [item.cover_image_path, ...(item.gallery || [])].filter(Boolean);
    const [active, setActive] = useState(0);

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: item.name,
        description: item.short_description,
        image: images.map((p) => `${window.location.origin}/storage/${p}`),
        brand: { '@type': 'Brand', name: 'Sanchar Telesystems' },
        ...(item.model_number ? { model: item.model_number } : {}),
    };

    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} image={`/storage/${item.cover_image_path}`} />
            <Head>
                <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            </Head>

            <div className="pt-32 container-content">
                <nav className="text-sm text-steel mb-8">
                    <Link href="/products" className="hover:text-beacon">
                        Products
                    </Link>
                    <span className="mx-2">/</span>
                    <Link href={`/products/${category.slug}/${subcategory.slug}`} className="hover:text-beacon">
                        {subcategory.name}
                    </Link>
                </nav>

                <div className="grid lg:grid-cols-2 gap-16 pb-20">
                    {/* Gallery */}
                    <div>
                        <div className="aspect-square bg-navy-light border border-steel/15 flex items-center justify-center">
                            {images[active] && (
                                <img
                                    src={`/storage/${images[active]}`}
                                    alt={item.name}
                                    className="max-h-full max-w-full object-contain p-10"
                                />
                            )}
                        </div>
                        {images.length > 1 && (
                            <div className="flex gap-3 mt-4">
                                {images.map((img, idx) => (
                                    <button
                                        key={img}
                                        onClick={() => setActive(idx)}
                                        className={`h-16 w-16 border ${
                                            active === idx ? 'border-beacon' : 'border-steel/20'
                                        } bg-navy-light`}
                                    >
                                        <img src={`/storage/${img}`} alt="" className="h-full w-full object-contain p-2" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Details */}
                    <div>
                        {item.model_number && (
                            <p className="text-sm text-steel mb-2">Model {item.model_number}</p>
                        )}
                        <h1 className="text-3xl font-display font-semibold text-ink">{item.name}</h1>
                        {item.short_description && (
                            <p className="mt-4 text-steel leading-relaxed">{item.short_description}</p>
                        )}

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="/contact-us" className="btn-primary">
                                Request a quote
                            </Link>
                            {item.datasheet_path && (
                                <a
                                    href={`/storage/${item.datasheet_path}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border border-steel/30 text-ink font-semibold px-6 py-3 rounded-sm hover:border-ink transition-colors"
                                >
                                    Download datasheet
                                </a>
                            )}
                        </div>

                        {item.description && (
                            <div
                                className="mt-10 prose prose-sm max-w-none text-ink"
                                dangerouslySetInnerHTML={{ __html: item.description }}
                            />
                        )}

                        {item.specifications?.length > 0 && (
                            <div className="mt-10">
                                <h2 className="font-display font-semibold text-ink mb-4">Specifications</h2>
                                <table className="w-full text-sm">
                                    <tbody>
                                        {item.specifications.map((row) => (
                                            <tr key={row.label} className="border-t border-steel/15">
                                                <td className="py-3 pr-4 text-steel w-1/3">{row.label}</td>
                                                <td className="py-3 text-ink font-medium">{row.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
