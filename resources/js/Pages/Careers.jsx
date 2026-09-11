import { Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

export default function Careers({ openings, seo }) {
    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} canonicalPath="/careers" />

            <header className="bg-navy text-paper pt-32 pb-16">
                <div className="container-content max-w-2xl">
                    <h1 className="text-4xl font-semibold">Careers</h1>
                    <p className="mt-4 text-paper/75 leading-relaxed">
                        Build the wireless communication networks that keep India's public
                        safety, railways and industry connected.
                    </p>
                </div>
            </header>

            <div className="container-content py-20">
                {openings.length === 0 ? (
                    <p className="text-steel max-w-lg">
                        We don't have any open roles listed right now. Send your resume to{' '}
                        <a href="mailto:info@sanchartelesystems.com" className="text-beacon font-medium">
                            info@sanchartelesystems.com
                        </a>{' '}
                        and we'll reach out when a fit comes up.
                    </p>
                ) : (
                    <div className="divide-y divide-steel/20 max-w-3xl">
                        {openings.map((job) => (
                            <div key={job.id} className="py-8 flex items-start justify-between gap-6">
                                <div>
                                    <h2 className="font-display font-semibold text-ink text-lg">
                                        {job.title}
                                    </h2>
                                    <p className="text-sm text-steel mt-1 flex flex-wrap gap-3">
                                        {job.location && <span>{job.location}</span>}
                                        {job.employment_type && <span>{job.employment_type}</span>}
                                    </p>
                                    <div
                                        className="mt-3 text-sm text-steel leading-relaxed prose prose-sm max-w-none"
                                        dangerouslySetInnerHTML={{ __html: job.description }}
                                    />
                                </div>
                                <Link href="/contact-us" className="shrink-0 btn-primary !py-2.5 !px-5 text-sm">
                                    Apply
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </MainLayout>
    );
}
