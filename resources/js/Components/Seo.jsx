import { Head } from '@inertiajs/react';

/**
 * Central place for per-page SEO tags. Every Page component should render this
 * once, near the top, fed by the `seo` prop that controllers already pass down
 * (see HomeController, ProductController, etc.) — so editors changing content
 * in Filament automatically changes what search engines see, with no code edits.
 */
export default function Seo({ title, description, image, canonicalPath }) {
    const siteName = 'Sanchar Telesystems';
    const fullTitle = title?.includes(siteName) ? title : `${title} | ${siteName}`;
    const canonical = canonicalPath
        ? `${window.location.origin}${canonicalPath}`
        : typeof window !== 'undefined'
        ? window.location.href
        : undefined;

    return (
        <Head title={title}>
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            {canonical && <link rel="canonical" href={canonical} />}

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            {image && <meta property="og:image" content={image} />}
            {canonical && <meta property="og:url" content={canonical} />}

            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
}
