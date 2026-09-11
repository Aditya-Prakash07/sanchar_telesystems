import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

export default function OemPartners({ partners, seo }) {
    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} canonicalPath="/oem-partners" />

            <header className="bg-navy text-paper pt-32 pb-16">
                <div className="container-content max-w-2xl">
                    <h1 className="text-4xl font-semibold">OEM partners</h1>
                    <p className="mt-4 text-paper/75 leading-relaxed">
                        We collaborate with the world's leading original equipment manufacturers
                        and technology providers to bring best-in-class communication solutions to
                        India.
                    </p>
                </div>
            </header>

            <div className="container-content py-20">
                <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {partners.map((p) => (
                        <a
                            key={p.name}
                            href={p.website_url || '#'}
                            className="panel flex items-center justify-center p-8 h-32 hover:border-beacon transition-colors"
                        >
                            <img
                                src={`/storage/${p.logo_path}`}
                                alt={p.name}
                                className="max-h-12 w-auto object-contain"
                                loading="lazy"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}
