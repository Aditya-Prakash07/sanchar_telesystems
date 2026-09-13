import { useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import Seo from '@/Components/Seo';

const INQUIRY_TYPES = [
    'System Architecture / RFQ',
    'Hardware Procurement',
    'AMC & Technical Support',
    'Channel / OEM Partnership',
];

export default function Contact({ seo }) {
    const { flash } = usePage().props;
    const [selectedType, setSelectedType] = useState(INQUIRY_TYPES[0]);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: `[${INQUIRY_TYPES[0]}] Inquiry`,
        message: '',
        website: '', // honeypot — real users never see or fill this field
    });

    const handleTypeSelect = (type) => {
        setSelectedType(type);
        setData('subject', `[${type}] Inquiry`);
    };

    function submit(e) {
        e.preventDefault();
        post('/contact-us', { 
            onSuccess: () => {
                reset();
                setData('subject', `[${selectedType}] Inquiry`);
            } 
        });
    }

    return (
        <MainLayout>
            <Seo title={seo.title} description={seo.description} canonicalPath="/contact-us" />

            {/* Header */}
            <section className="bg-navy-dark text-paper pt-36 pb-20 border-b border-navy-border relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
                <div className="container-content relative z-10 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-beacon/30 bg-beacon/10 text-beacon text-xs font-mono uppercase tracking-wider mb-4">
                        TECHNICAL CONSULTATION & DEFENSE PROCUREMENT
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight">
                        Contact Our Engineering Desk
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-paper/80 leading-relaxed font-sans">
                        Discuss your site topology, emergency communications fleet, or tender requirements. 
                        Our RF engineers respond within one business day with formal documentation.
                    </p>
                </div>
            </section>

            {/* Main Content Grid */}
            <div className="container-content py-20">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Contact & RFQ Form */}
                    <div className="lg:col-span-7 bg-white panel p-8 sm:p-10 rounded-sm shadow-sm">
                        <div className="mb-8">
                            <span className="text-xs font-mono uppercase tracking-widest text-beacon font-semibold block mb-1">
                                DIRECT INQUIRY
                            </span>
                            <h2 className="text-2xl font-display font-bold text-ink">
                                Send a Message or Tender Request
                            </h2>
                            <p className="text-sm text-steel mt-1">
                                Select your requirement category to route directly to the designated department.
                            </p>
                        </div>

                        {/* Flash Success Banner */}
                        {flash?.success && (
                            <div className="mb-6 border border-emerald-500/40 bg-emerald-50 text-emerald-950 p-4 rounded text-sm flex items-start gap-3">
                                <svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <strong className="font-semibold block font-display">Inquiry Dispatched Successfully</strong>
                                    <p className="text-xs mt-0.5 text-emerald-800">{flash.success}</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-6" noValidate>
                            {/* Requirement Type Selector */}
                            <div>
                                <label className="block text-xs font-mono text-steel uppercase tracking-wider mb-2 font-semibold">
                                    Requirement Nature
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {INQUIRY_TYPES.map((t) => (
                                        <button
                                            type="button"
                                            key={t}
                                            onClick={() => handleTypeSelect(t)}
                                            className={`p-2.5 text-xs font-medium rounded border text-left transition-all ${
                                                selectedType === t
                                                    ? 'border-beacon bg-beacon/10 text-navy font-semibold ring-1 ring-beacon'
                                                    : 'border-steel/20 bg-paper/50 text-steel hover:border-steel/40'
                                            }`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <Field label="Full Name *" error={errors.name}>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="input"
                                        placeholder="e.g. Rajesh Sharma"
                                        required
                                    />
                                </Field>

                                <Field label="Official / Business Email *" error={errors.email}>
                                    <input
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="input"
                                        placeholder="name@organization.gov.in"
                                        required
                                    />
                                </Field>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <Field label="Contact Phone Number" error={errors.phone}>
                                    <input
                                        type="tel"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        className="input"
                                        placeholder="+91 98765 43210"
                                    />
                                </Field>

                                <Field label="Subject Line" error={errors.subject}>
                                    <input
                                        type="text"
                                        value={data.subject}
                                        onChange={(e) => setData('subject', e.target.value)}
                                        className="input"
                                    />
                                </Field>
                            </div>

                            <Field label="Technical Scope / Project Requirements *" error={errors.message}>
                                <textarea
                                    rows={5}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    className="input resize-none"
                                    placeholder="Please describe your facility, required frequency bands, terminal quantities, or tender reference..."
                                    required
                                />
                            </Field>

                            {/* Anti-spam honeypot */}
                            <div className="absolute -left-[9999px]" aria-hidden="true">
                                <label htmlFor="website">Leave empty</label>
                                <input
                                    id="website"
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={data.website}
                                    onChange={(e) => setData('website', e.target.value)}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="btn-primary w-full sm:w-auto text-sm !py-3.5 !px-8 disabled:opacity-60"
                            >
                                {processing ? 'Submitting to Engineering...' : 'Dispatch Request to Engineering Desk'}
                            </button>
                        </form>
                    </div>

                    {/* Right: Office Telemetry & Emergency Desk */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Registered Office Card */}
                        <div className="bg-navy-dark text-paper p-8 rounded border border-navy-border space-y-5">
                            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                <span className="text-xs font-mono uppercase tracking-wider text-beacon font-semibold">
                                    NATIONAL HEADQUARTERS
                                </span>
                                <span className="text-[11px] font-mono text-emerald-400">OPEN 09:30 - 18:00 IST</span>
                            </div>

                            <div className="space-y-3 text-sm font-sans text-paper/85">
                                <h3 className="font-display font-bold text-lg text-paper">
                                    Sanchar Telesystems Limited
                                </h3>
                                <p className="text-steel leading-relaxed">
                                    A-78, Ground Floor, Okhla Industrial Area, Phase-II<br />
                                    New Delhi – 110020, India
                                </p>
                            </div>

                            <div className="space-y-3 pt-2 border-t border-white/10 text-xs font-mono">
                                <div>
                                    <span className="text-steel-light block">DIRECT TELEPHONE:</span>
                                    <a href="tel:+911146528894" className="text-beacon hover:underline text-sm font-bold">
                                        +91 (11) 4652 8894–97
                                    </a>
                                </div>
                                <div>
                                    <span className="text-steel-light block">PRIMARY EMAIL:</span>
                                    <a href="mailto:info@sanchartelesystems.com" className="text-paper hover:text-beacon transition-colors text-sm">
                                        info@sanchartelesystems.com
                                    </a>
                                </div>
                            </div>

                            <div className="pt-2">
                                <a 
                                    href="https://maps.google.com/?q=Sanchar+Telesystems+Limited+Okhla+Industrial+Area+Phase+II+New+Delhi" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn-outline-dark w-full justify-center text-xs !py-2.5"
                                >
                                    Open in Google Maps &rarr;
                                </a>
                            </div>
                        </div>

                        {/* Government & Defense Assurance */}
                        <div className="panel p-6 bg-white space-y-3">
                            <span className="badge-rf text-[10px]">PROCUREMENT ASSURANCE</span>
                            <h4 className="font-display font-bold text-base text-ink">
                                Government Tenders & GeM Portal
                            </h4>
                            <p className="text-xs text-steel leading-relaxed">
                                Sanchar Telesystems is registered and actively delivers through the Government e-Marketplace (GeM) and defense procurement portals. For direct tender compliance letters or OEM authorization certificates, please mention your RFP tender ID.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

function Field({ label, error, children }) {
    return (
        <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-ink font-semibold mb-2">
                {label}
            </label>
            {children}
            {error && <p className="mt-1.5 text-xs text-red-600 font-mono">{error}</p>}
        </div>
    );
}

