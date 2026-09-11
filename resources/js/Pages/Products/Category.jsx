import { Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

export default function ProductsCategory({ category, subcategory, items, seo }) {
    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} />

            <header className="bg-navy text-paper pt-32 pb-16">
                <div className="container-content">
                    <nav className="text-sm text-paper/60 mb-4">
                        <Link href="/products" className="hover:text-beacon">
                            Products
                        </Link>
                        <span className="mx-2">/</span>
                        <span>{category.name}</span>
                    </nav>
                    <h1 className="text-4xl font-semibold">{subcategory.name}</h1>
                    {subcategory.description && (
                        <p className="mt-4 max-w-xl text-paper/75 leading-relaxed">
                            {subcategory.description}
                        </p>
                    )}
                </div>
            </header>

            <div className="container-content py-20">
                {items.length === 0 ? (
                    <p className="text-steel">
                        No products are published in this line yet — check back soon, or{' '}
                        <Link href="/contact-us" className="text-beacon font-medium">
                            contact our team
                        </Link>{' '}
                        for current availability.
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {items.map((item) => (
                            <Link
                                key={item.id}
                                href={`/products/${category.slug}/${subcategory.slug}/${item.slug}`}
                                className="group panel overflow-hidden"
                            >
                                <div className="aspect-square bg-navy-light overflow-hidden">
                                    {item.cover_image_path && (
                                        <img
                                            src={`/storage/${item.cover_image_path}`}
                                            alt={item.name}
                                            className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                                <div className="p-6">
                                    {item.model_number && (
                                        <p className="text-xs text-steel mb-1">{item.model_number}</p>
                                    )}
                                    <h3 className="font-display font-semibold text-ink">{item.name}</h3>
                                    {item.short_description && (
                                        <p className="mt-2 text-sm text-steel line-clamp-2">
                                            {item.short_description}
                                        </p>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </MainLayout>
    );
}
