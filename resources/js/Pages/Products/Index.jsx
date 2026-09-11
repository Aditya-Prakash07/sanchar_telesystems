import { Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

export default function ProductsIndex({ categories, seo }) {
    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} canonicalPath="/products" />

            <header className="bg-navy text-paper pt-32 pb-16">
                <div className="container-content">
                    <h1 className="text-4xl font-semibold">Products</h1>
                    <p className="mt-4 max-w-xl text-paper/75 leading-relaxed">
                        Professional and amateur radio, PTT over Cellular, LTE-R, Captive LTE and
                        accessories — organized by category below.
                    </p>
                </div>
            </header>

            <div className="container-content py-20 space-y-20">
                {categories.map((category) => (
                    <section key={category.id}>
                        <div className="flex items-baseline gap-4 mb-8 border-b border-steel/20 pb-4">
                            <h2 className="text-2xl font-display font-semibold text-ink">
                                {category.name}
                            </h2>
                            {category.description && (
                                <p className="text-sm text-steel hidden sm:block">{category.description}</p>
                            )}
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.subcategories.map((sub) => (
                                <Link
                                    key={sub.id}
                                    href={`/products/${category.slug}/${sub.slug}`}
                                    className="panel p-6 hover:border-beacon transition-colors"
                                >
                                    <h3 className="font-display font-semibold text-ink">{sub.name}</h3>
                                    {sub.description && (
                                        <p className="mt-2 text-sm text-steel line-clamp-2">
                                            {sub.description}
                                        </p>
                                    )}
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </MainLayout>
    );
}
