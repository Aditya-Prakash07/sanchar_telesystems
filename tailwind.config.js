import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                // "Signal" design system — see DESIGN-SYSTEM.md for rationale.
                navy: {
                    DEFAULT: '#0F1B2D', // control-room navy — dark section bg
                    light: '#16273D',
                    border: '#26374C',
                },
                paper: '#F6F7F5',      // light section bg
                ink: '#10151C',        // primary text on paper
                steel: '#5B6B7E',      // secondary text / hairlines
                beacon: {
                    DEFAULT: '#E8A33D', // the one accent — CTAs + status indicators
                    dim: '#C98A2B',
                },
            },
            fontFamily: {
                display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
                sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
            },
            maxWidth: {
                content: '1200px',
            },
            animation: {
                'signal-sweep': 'signal-sweep 3.2s ease-in-out infinite',
            },
            keyframes: {
                'signal-sweep': {
                    '0%, 100%': { strokeDashoffset: '0' },
                    '50%': { strokeDashoffset: '120' },
                },
            },
        },
    },

    plugins: [],
};
