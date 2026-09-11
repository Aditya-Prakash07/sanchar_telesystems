import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';
import SignalWave from '@/Components/SignalWave';

export default function Home({ banners, categories, stats, testimonials, oemPartners, latestNews, seo }) {
    const hero = banners?.[0];

    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} canonicalPath="/" />

            {/* ---------- Hero ---------- */}
            <section className="relative bg-navy text-paper overflow-hidden pt-32 pb-28">
                <SignalWave className="absolute inset-x-0 bottom-0 h-40 w-full opacity-70" />

                <div className="container-content relative">
                    <p className="text-beacon text-sm font-medium mb-4">
                        Wireless communication systems, since 1990s
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] max-w-3xl">
                        {hero?.heading || 'Connection everywhere, when it matters most.'}
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-paper/75 leading-relaxed">
                        {hero?.subheading ||
                            'Sanchar Telesystems designs, deploys and supports DMR, TETRA, PoC/MCX and LTE-R networks for public safety, railways, utilities and industry across India.'}
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link href="/products" className="btn-primary">
                            Explore products
                        </Link>
                        <Link href="/contact-us" className="btn-outline-dark">
                            Talk to an engineer
                        </Link>
                    </div>
                </div>
            </section>

            {/* ---------- What we offer ---------- */}
            <section className="py-24">
                <div className="container-content">
                    <div className="max-w-2xl mb-14">
                        <h2 className="text-3xl font-semibold text-ink">What we offer</h2>
                        <p className="mt-4 text-steel leading-relaxed">
                            End-to-end wireless communication — from conceptualization and system
                            design through project execution, training and after-sales support.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-steel/15">
                        {OFFERINGS.map((offer) => (
                            <div key={offer.title} className="bg-paper p-8">
                                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                                    {offer.title}
                                </h3>
                                <p className="text-sm text-steel leading-relaxed">{offer.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- Product categories ---------- */}
            <section className="py-24 bg-white border-y border-steel/15">
                <div className="container-content">
                    <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-semibold text-ink">Our products</h2>
                            <p className="mt-4 text-steel leading-relaxed">
                                A full lineup of professional radios, cellular PTT platforms and
                                network infrastructure — matched to your mission.
                            </p>
                        </div>
                        <Link href="/products" className="text-sm font-semibold text-ink border-b-2 border-beacon pb-0.5">
                            View full catalog
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {(categories || []).map((cat) => (
                            <Link
                                key={cat.id}
                                href={`/products`}
                                className="group block panel overflow-hidden"
                            >
                                <div className="aspect-[4/3] overflow-hidden bg-navy-light">
                                    {cat.thumbnail_path && (
                                        <img
                                            src={`/storage/${cat.thumbnail_path}`}
                                            alt={cat.name}
                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    )}
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display font-semibold text-ink">{cat.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- Stats ---------- */}
            <section className="py-24 bg-navy text-paper">
                <div className="container-content grid sm:grid-cols-3 gap-12 text-center">
                    {(stats || []).map((stat) => (
                        <StatCounter key={stat.label} {...stat} />
                    ))}
                </div>
            </section>

            {/* ---------- Case studies ---------- */}
            {testimonials?.length > 0 && (
                <section className="py-24">
                    <div className="container-content">
                        <h2 className="text-3xl font-semibold text-ink mb-14 max-w-xl">
                            Prestigious deployments
                        </h2>
                        <div className="grid lg:grid-cols-3 gap-8">
                            {testimonials.map((t) => (
                                <article key={t.id} className="panel p-8 flex flex-col">
                                    {t.logo_path && (
                                        <img
                                            src={`/storage/${t.logo_path}`}
                                            alt=""
                                            className="h-10 w-auto object-contain mb-6"
                                            loading="lazy"
                                        />
                                    )}
                                    <p className="text-sm text-steel leading-relaxed flex-1">{t.story}</p>
                                    <p className="mt-6 font-display font-semibold text-ink">{t.client_name}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ---------- OEM Partners ---------- */}
            {oemPartners?.length > 0 && (
                <section className="py-20 bg-white border-t border-steel/15">
                    <div className="container-content">
                        <h2 className="text-sm font-semibold text-steel mb-8">
                            Trusted by leading global OEMs
                        </h2>
                        <div className="flex flex-wrap items-center gap-x-12 gap-y-8">
                            {oemPartners.map((p) => (
                                <a
                                    key={p.name}
                                    href={p.website_url || '#'}
                                    className="opacity-70 hover:opacity-100 transition-opacity"
                                >
                                    <img
                                        src={`/storage/${p.logo_path}`}
                                        alt={p.name}
                                        className="h-8 w-auto object-contain grayscale"
                                        loading="lazy"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ---------- CTA ---------- */}
            <section className="py-24 bg-navy text-paper">
                <div className="container-content text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-semibold">Need a communication network you can trust?</h2>
                    <p className="mt-4 text-paper/75">
                        Our engineers will help you design the right solution for your site,
                        fleet or facility.
                    </p>
                    <Link href="/contact-us" className="btn-primary mt-8">
                        Get in touch
                    </Link>
                </div>
            </section>
        </MainLayout>
    );
}

const OFFERINGS = [
    { title: 'Products', description: 'An extensive lineup of radios and network hardware suited to your needs.' },
    { title: 'Services', description: 'Repair and after-sales support delivered by highly trained engineers.' },
    { title: 'Training', description: 'On-the-job training for customers and partners from our technical team.' },
    { title: 'Consulting', description: 'Solution design for your specific communication requirements.' },
];

function StatCounter({ label, value, suffix }) {
    const [display, setDisplay] = useState(0);
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const duration = 1200;
                    const start = performance.now();

                    const tick = (now) => {
                        const progress = Math.min((now - start) / duration, 1);
                        setDisplay(Math.floor(progress * value));
                        if (progress < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [value, hasAnimated]);

    return (
        <div ref={ref}>
            <div className="font-display text-5xl font-semibold text-beacon">
                {display}
                {suffix}
            </div>
            <p className="mt-2 text-sm text-steel">{label}</p>
        </div>
    );
}
