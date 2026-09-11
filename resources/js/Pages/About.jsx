import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

const PROCESS = [
    { step: '01', title: 'Conceptualization', description: 'Understanding your operational requirements and constraints.' },
    { step: '02', title: 'System design', description: 'Engineering a network architecture matched to your site and fleet.' },
    { step: '03', title: 'Feasibility study', description: 'Validating coverage, capacity and regulatory requirements.' },
    { step: '04', title: 'Commissioning & installation', description: 'Deploying hardware and infrastructure on site.' },
    { step: '05', title: 'Integration', description: 'Connecting your new network into existing operations.' },
    { step: '06', title: 'Operation & maintenance', description: 'Ongoing support from our technical team.' },
];

export default function About({ team, seo }) {
    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} canonicalPath="/about-us" />

            <header className="bg-navy text-paper pt-32 pb-20">
                <div className="container-content max-w-2xl">
                    <h1 className="text-4xl font-semibold">About Sanchar Telesystems</h1>
                    <p className="mt-6 text-paper/75 leading-relaxed">
                        Mobility, efficiency and reliability are the needs our products and
                        solutions are designed to meet — built on open standards, and trusted by
                        governments, large enterprises and public safety agencies across India.
                    </p>
                </div>
            </header>

            <section className="py-20">
                <div className="container-content max-w-3xl space-y-6 text-steel leading-relaxed">
                    <p>
                        Sanchar has invested continuously in product and solution research and
                        development to provide customized solutions for users in critical
                        industries — public safety, railways, utility companies and industrial
                        houses, across DMR, TETRA, analog radio and LTE.
                    </p>
                    <p>
                        We collaborate with the world's leading original equipment manufacturers
                        and technology providers to bring best-in-class communication solutions to
                        India, and are a leading manufacturer of LTE MCX, LTE PoC and DMR radios
                        in the country. Our services span design, engineering, feasibility
                        studies, commissioning and installation, integration, and operation and
                        maintenance.
                    </p>
                    <p>
                        Sanchar is spread across the country through a dedicated channel-partner
                        network, ensuring the right communication solution reaches every customer,
                        right at their doorstep.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white border-y border-steel/15">
                <div className="container-content">
                    <h2 className="text-2xl font-display font-semibold text-ink mb-12">
                        How we deliver a project
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                        {PROCESS.map((p) => (
                            <div key={p.step}>
                                <span className="text-sm text-beacon font-semibold">{p.step}</span>
                                <h3 className="mt-2 font-display font-semibold text-ink">{p.title}</h3>
                                <p className="mt-1 text-sm text-steel leading-relaxed">{p.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {team?.length > 0 && (
                <section className="py-24">
                    <div className="container-content">
                        <h2 className="text-2xl font-display font-semibold text-ink mb-12">
                            Leadership team
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member) => (
                                <div key={member.name}>
                                    {member.photo_path && (
                                        <img
                                            src={`/storage/${member.photo_path}`}
                                            alt={member.name}
                                            className="aspect-[4/5] w-full object-cover mb-4"
                                            loading="lazy"
                                        />
                                    )}
                                    <h3 className="font-display font-semibold text-ink">{member.name}</h3>
                                    <p className="text-sm text-beacon mb-2">{member.title}</p>
                                    {member.bio && (
                                        <p className="text-sm text-steel leading-relaxed">{member.bio}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </MainLayout>
    );
}
