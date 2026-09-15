import { useId } from 'react';

export default function ApplicationLogo({
    className = 'h-10',
    isOverBanner = false,
    theme = 'light',
    showText = true,
    variant = 'auto',
    ...props
}) {
    const rawId = useId();
    const gradId = `sancharLogoGold_${rawId.replace(/:/g, '')}`;

    // Determine context for dark vs light color scheme
    const isDarkContext = 
        variant === 'white' || 
        variant === 'dark' || 
        (variant === 'auto' && (theme === 'dark' || isOverBanner));

    return (
        <div className={`flex items-center gap-3 shrink-0 select-none group/logo ${className}`} {...props}>
            {/* Vector Sanchar Emblem with Golden Yellow Theme & Ambient Aura */}
            <div className="relative flex items-center justify-center shrink-0 h-8 w-8 sm:h-9 sm:w-9">
                {/* Subtle ambient golden backglow */}
                <div 
                    className="absolute -inset-1 rounded-full bg-amber-400/30 blur-md pointer-events-none opacity-70 group-hover/logo:opacity-100 group-hover/logo:scale-125 transition-all duration-500"
                    aria-hidden="true"
                />

                <svg 
                    viewBox="0 0 252 271" 
                    className="w-full h-full object-contain shrink-0 relative z-10 animate-logo-pulse transition-all duration-300 group-hover/logo:scale-105 group-hover/logo:-rotate-2 group-hover/logo:drop-shadow-[0_0_14px_rgba(245,158,11,0.9)]"
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Sanchar Emblem"
                >
                    <defs>
                        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#d97706" />
                            <stop offset="35%" stopColor="#f59e0b" />
                            <stop offset="70%" stopColor="#fbbf24" />
                            <stop offset="100%" stopColor="#fef08a" />
                        </linearGradient>
                    </defs>
                    <g transform="translate(-38.2, 288.6) scale(0.1, -0.1)" fill={`url(#${gradId})`}>
                        <path d="M1445 2880 c-388 -70 -729 -326 -933 -700 -66 -120 -136 -355 -76 -253 10 18 35 61 54 94 97 171 303 326 532 403 170 56 174 56 873 56 355 0 645 3 645 8 0 24 -138 145 -240 210 -99 62 -233 122 -350 155 -94 26 -123 29 -280 32 -96 2 -197 0 -225 -5z"/>
                        <path d="M1440 2008 c-134 -8 -247 -35 -329 -78 -67 -36 -156 -122 -148 -142 4 -11 76 -16 372 -26 202 -6 369 -12 371 -14 3 -4 -139 -414 -146 -422 -3 -2 -265 -6 -583 -7 -318 -2 -583 -7 -589 -10 -13 -8 -5 -57 29 -163 l25 -79 509 6 c307 4 509 3 509 -2 0 -11 -70 -274 -104 -386 l-23 -80 -297 -3 c-246 -2 -296 -5 -296 -16 0 -38 226 -211 367 -280 203 -100 349 -131 583 -123 180 6 256 23 418 92 317 136 601 429 717 739 38 102 28 111 -33 29 -29 -39 -94 -111 -145 -160 -186 -176 -382 -255 -674 -269 -122 -7 -133 -6 -133 10 0 16 106 360 131 427 8 20 22 28 61 38 27 8 80 29 118 47 77 39 198 144 186 162 -5 8 -47 12 -138 12 -130 0 -130 0 -124 28 3 15 32 115 64 222 l57 195 350 5 c350 5 350 5 349 35 -2 34 -41 183 -54 204 -7 12 -108 15 -647 15 -351 1 -690 -2 -753 -6z"/>
                    </g>
                </svg>
            </div>

            {/* Typography */}
            {showText && (
                <div className="flex flex-col justify-center leading-none">
                    <span className={`font-mono text-base sm:text-lg font-bold tracking-wider uppercase transition-all duration-300 ${
                        isDarkContext 
                            ? 'bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-sm group-hover/logo:from-yellow-200 group-hover/logo:to-amber-300' 
                            : 'bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent group-hover/logo:from-amber-500 group-hover/logo:to-yellow-500'
                    }`}>
                        SANCHAR
                    </span>
                    <span className={`text-[8.5px] sm:text-[9.5px] font-sans font-semibold tracking-widest uppercase transition-colors duration-200 mt-0.5 ${
                        isDarkContext ? 'text-amber-400/80 group-hover/logo:text-amber-300' : 'text-amber-700/80 dark:text-amber-400/80 group-hover/logo:text-amber-600'
                    }`}>
                        TELESYSTEMS
                    </span>
                </div>
            )}
        </div>
    );
}
