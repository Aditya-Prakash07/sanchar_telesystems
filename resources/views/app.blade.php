<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#0a0d14">

        <!-- Localized Search Engine Geo Metadata -->
        <meta name="geo.region" content="IN-DL">
        <meta name="geo.placename" content="New Delhi">
        <meta name="geo.position" content="28.5355;77.2711">
        <meta name="ICBM" content="28.5355, 77.2711">
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

        <title inertia>{{ config('app.name', 'Sanchar Telesystems') }}</title>

        <!-- Pre-rendered JSON-LD Organization Schema for Google Search -->
        @verbatim
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sanchar Telesystems Limited",
            "alternateName": "Sanchar Telesystems",
            "url": "https://www.sanchartelesystems.com",
            "logo": "https://www.sanchartelesystems.com/storage/media/branding/logo.svg",
            "description": "Leading manufacturer and turnkey supplier of DMR, TETRA, PoC over Cellular, and Railway LTE-R communication systems in India.",
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+91-11-46528894",
                    "contactType": "sales",
                    "areaServed": "IN",
                    "availableLanguage": ["English", "Hindi"]
                },
                {
                    "@type": "ContactPoint",
                    "telephone": "+91-11-46528892",
                    "contactType": "technical support",
                    "areaServed": "IN",
                    "availableLanguage": ["English", "Hindi"]
                }
            ],
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "A-78, Ground Floor, Okhla Industrial Area, Phase-II",
                "addressLocality": "New Delhi",
                "postalCode": "110020",
                "addressCountry": "IN"
            },
            "sameAs": [
                "https://www.linkedin.com/company/sanchar-telesystems-limited"
            ]
        }
        </script>
        @endverbatim

        <!-- Theme Flash Prevention -->
        <script>
            try {
                var saved = localStorage.getItem('theme');
                if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                } else if (saved === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                }
            } catch (e) {}
        </script>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-slate-50 dark:bg-navy-dark text-slate-900 dark:text-paper">
        @inertia
    </body>
</html>
