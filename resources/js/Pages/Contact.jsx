import { useForm, usePage } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

export default function Contact({ seo }) {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        website: '', // honeypot — real users never see or fill this field
    });

    function submit(e) {
        e.preventDefault();
        post('/contact-us', { onSuccess: () => reset() });
    }

    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} canonicalPath="/contact-us" />

            <header className="bg-navy text-paper pt-32 pb-16">
                <div className="container-content">
                    <h1 className="text-4xl font-semibold">Contact us</h1>
                    <p className="mt-4 max-w-xl text-paper/75 leading-relaxed">
                        Tell us about your site, fleet or facility and our engineers will get back
                        to you within one business day.
                    </p>
                </div>
            </header>

            <div className="container-content py-20 grid lg:grid-cols-2 gap-16">
                <form onSubmit={submit} className="space-y-6" noValidate>
                    {flash?.success && (
                        <div className="border border-beacon/40 bg-beacon/10 text-ink text-sm p-4">
                            {flash.success}
                        </div>
                    )}

                    <Field label="Full name" error={errors.name}>
                        <input
                            type="text"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className="input"
                            required
                        />
                    </Field>

                    <Field label="Email" error={errors.email}>
                        <input
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="input"
                            required
                        />
                    </Field>

                    <Field label="Phone (optional)" error={errors.phone}>
                        <input
                            type="tel"
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            className="input"
                        />
                    </Field>

                    <Field label="Subject" error={errors.subject}>
                        <input
                            type="text"
                            value={data.subject}
                            onChange={(e) => setData('subject', e.target.value)}
                            className="input"
                        />
                    </Field>

                    <Field label="Message" error={errors.message}>
                        <textarea
                            rows={5}
                            value={data.message}
                            onChange={(e) => setData('message', e.target.value)}
                            className="input resize-none"
                            required
                        />
                    </Field>

                    {/* Honeypot — hidden from real users via CSS, not display:none, so basic bots that
                        skip hidden fields still fill it in and get silently rejected server-side. */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                        <label htmlFor="website">Leave this field empty</label>
                        <input
                            id="website"
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            value={data.website}
                            onChange={(e) => setData('website', e.target.value)}
                        />
                    </div>

                    <button type="submit" disabled={processing} className="btn-primary disabled:opacity-60">
                        {processing ? 'Sending…' : 'Send message'}
                    </button>
                </form>

                <div className="panel p-8 h-fit">
                    <h2 className="font-display font-semibold text-ink mb-4">Registered office</h2>
                    <address className="not-italic text-sm text-steel leading-relaxed space-y-3">
                        <p>
                            Sanchar Telesystems Limited
                            <br />
                            A-78, Ground Floor, Okhla Industrial Area, Phase-II
                            <br />
                            New Delhi-110020, India
                        </p>
                        <p>Phone: +91 (11) 4652 8894–97</p>
                        <p>Email: info@sanchartelesystems.com</p>
                    </address>
                </div>
            </div>
        </MainLayout>
    );
}

function Field({ label, error, children }) {
    return (
        <div>
            <label className="block text-sm font-medium text-ink mb-2">{label}</label>
            {children}
            {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
        </div>
    );
}
