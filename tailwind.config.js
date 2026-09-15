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
                    dark: '#0a0d14',
                    DEFAULT: '#12151b', // matching key stats section background
                    surface: '#161a23',
                    light: '#1f2430',
                    border: '#282f3e',
                },
                paper: '#F6F7F5',      // light section bg
                ink: '#10151C',        // primary text on paper
                steel: {
                    DEFAULT: '#5B6B7E', // secondary text / hairlines
                    light: '#94A3B8',
                    dark: '#334155',
                },
                beacon: {
                    light: '#93c5fd',
                    DEFAULT: '#3b82f6', // electric blue accent
                    royal: '#3a52a4',   // brand royal blue
                    electric: '#5172dc',
                    dim: '#1d4ed8',
                    glow: 'rgba(59, 130, 246, 0.25)',
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
