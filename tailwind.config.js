import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
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
                    dark: '#070D18',
                    DEFAULT: '#0F1B2D', // control-room navy — dark section bg
                    surface: '#122035',
                    light: '#16273D',
                    border: '#26374C',
                },
                paper: '#F6F7F5',      // light section bg
                ink: '#10151C',        // primary text on paper
                steel: {
                    DEFAULT: '#5B6B7E', // secondary text / hairlines
                    light: '#94A3B8',
                    dark: '#334155',
                },
                beacon: {
                    light: '#FBBF24',
                    DEFAULT: '#E8A33D', // the one accent — CTAs + status indicators
                    dim: '#C98A2B',
                    glow: 'rgba(232, 163, 61, 0.2)',
                },
            },
            fontFamily: {
                display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
                sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
                mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
            },
            maxWidth: {
                content: '1240px',
            },
            animation: {
                'signal-sweep': 'signal-sweep 3.2s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'radar-spin': 'spin 8s linear infinite',
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
