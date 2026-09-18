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
    const gradId = `sancharLogoBlue_${rawId.replace(/:/g, '')}`;

    // Determine context for dark vs light color scheme
    const isDarkContext = 
        variant === 'white' || 
        variant === 'dark' || 
        (variant === 'auto' && theme === 'dark');

    return (
        <div className={`flex items-center gap-3 shrink-0 select-none ${className}`} {...props}>
            {/* Vector Sanchar Emblem with Blue Brand Theme (Zero Animation, Zero Glow) */}
            <div className="relative flex items-center justify-center shrink-0 h-8 w-8 sm:h-9 sm:w-9">
                <svg 
                    viewBox="0 0 252 271" 
                    className="w-full h-full object-contain shrink-0 relative z-10"
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Sanchar Emblem"
                >
                    <defs>
                        <linearGradient id={gradId} x1="0%" y1="100%" x2="100%" y2="0%">
                            {isDarkContext ? (
                                <>
                                    <stop offset="0%" stopColor="#1d4ed8" />
                                    <stop offset="35%" stopColor="#3b82f6" />
                                    <stop offset="70%" stopColor="#60a5fa" />
                                    <stop offset="100%" stopColor="#93c5fd" />
                                </>
                            ) : (
                                <>
                                    <stop offset="0%" stopColor="#1e3a8a" />
                                    <stop offset="40%" stopColor="#3a52a4" />
                                    <stop offset="75%" stopColor="#2563eb" />
                                    <stop offset="100%" stopColor="#60a5fa" />
                                </>
                            )}
                        </linearGradient>
                    </defs>
                    <g transform="translate(-38.2, 288.6) scale(0.1, -0.1)" fill={`url(#${gradId})`}>
                        <path d="M1445 2880 c-388 -70 -729 -326 -933 -700 -66 -120 -136 -355 -76 -253 10 18 35 61 54 94 97 171 303 326 532 403 170 56 174 56 873 56 355 0 645 3 645 8 0 24 -138 145 -240 210 -99 62 -233 122 -350 155 -94 26 -123 29 -280 32 -96 2 -197 0 -225 -5z"/>
                        <path d="M1440 2008 c-134 -8 -247 -35 -329 -78 -67 -36 -156 -122 -148 -142 4 -11 76 -16 372 -26 202 -6 369 -12 371 -14 3 -4 -139 -414 -146 -422 -3 -2 -265 -6 -583 -7 -318 -2 -583 -7 -589 -10 -13 -8 -5 -57 29 -163 l25 -79 509 6 c307 4 509 3 509 -2 0 -11 -70 -274 -104 -386 l-23 -80 -297 -3 c-246 -2 -296 -5 -296 -16 0 -38 226 -211 367 -280 203 -100 349 -131 583 -123 180 6 256 23 418 92 317 136 601 429 717 739 38 102 28 111 -33 29 -29 -39 -94 -111 -145 -160 -186 -176 -382 -255 -674 -269 -122 -7 -133 -6 -133 10 0 16 106 360 131 427 8 20 22 28 61 38 27 8 80 29 118 47 77 39 198 144 186 162 -5 8 -47 12 -138 12 -130 0 -130 0 -124 28 3 15 32 115 64 222 l57 195 350 5 c350 5 350 5 349 35 -2 34 -41 183 -54 204 -7 12 -108 15 -647 15 -351 1 -690 -2 -753 -6z"/>
                    </g>
                </svg>
            </div>

            {/* Complete Company Name Beside Emblem: Sanchar Telesystems Limited. (Zero Animation) */}
            {showText && (
                <div className="flex flex-col justify-center leading-none select-none">
                    {/* Top: SANCHAR with space between letters to span width of TELESYSTEMS LIMITED. */}
                    <div 
                        className={`w-full flex justify-between items-center text-[12px] sm:text-[13.5px] font-display font-extrabold uppercase leading-tight ${
                            isDarkContext 
                                ? 'text-white' 
                                : 'text-[#3a52a4]'
                        }`}
                    >
                        <span>S</span>
                        <span>A</span>
                        <span>N</span>
                        <span>C</span>
                        <span>H</span>
                        <span>A</span>
                        <span>R</span>
                    </div>

                    {/* Bottom: TELESYSTEMS LIMITED. */}
                    <div 
                        className={`text-[7.5px] sm:text-[8.5px] font-sans font-bold tracking-[0.08em] uppercase whitespace-nowrap leading-none mt-0.5 ${
                            isDarkContext 
                                ? 'text-blue-200' 
                                : 'text-[#3a52a4]'
                        }`}
                    >
                        TELESYSTEMS LIMITED.
                    </div>
                </div>
            )}
        </div>
    );
}
