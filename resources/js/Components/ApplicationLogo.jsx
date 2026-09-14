export default function ApplicationLogo({
    className = 'h-10',
    isOverBanner = false,
    theme = 'light',
    showText = true,
    variant = 'auto',
    ...props
}) {
    // Determine context for dark vs light color scheme
    const isDarkContext = 
        variant === 'white' || 
        variant === 'dark' || 
        (variant === 'auto' && (theme === 'dark' || isOverBanner));

    // Dynamic brand colors for highest contrast and crispness
    const emblemColor = isDarkContext ? '#5172dc' : '#3a52a4';
    const primaryTextColor = isDarkContext ? 'text-white drop-shadow-sm' : 'text-slate-900';
    const secondaryTextColor = isDarkContext ? 'text-white/75' : 'text-slate-500';

    return (
        <div className={`flex items-center gap-3 shrink-0 select-none ${className}`} {...props}>
            {/* Vector Sanchar Emblem (100% Transparent, Scalable Bezier Curves) */}
            <svg 
                viewBox="0 0 252 271" 
                className="h-full w-auto aspect-[252/271] shrink-0 transition-transform duration-200 group-hover:scale-[1.03]"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Sanchar Emblem"
            >
                <g transform="translate(-38.2, 288.6) scale(0.1, -0.1)" fill={emblemColor}>
                    <path d="M1445 2880 c-388 -70 -729 -326 -933 -700 -66 -120 -136 -355 -76 -253 10 18 35 61 54 94 97 171 303 326 532 403 170 56 174 56 873 56 355 0 645 3 645 8 0 24 -138 145 -240 210 -99 62 -233 122 -350 155 -94 26 -123 29 -280 32 -96 2 -197 0 -225 -5z"/>
                    <path d="M1440 2008 c-134 -8 -247 -35 -329 -78 -67 -36 -156 -122 -148 -142 4 -11 76 -16 372 -26 202 -6 369 -12 371 -14 3 -4 -139 -414 -146 -422 -3 -2 -265 -6 -583 -7 -318 -2 -583 -7 -589 -10 -13 -8 -5 -57 29 -163 l25 -79 509 6 c307 4 509 3 509 -2 0 -11 -70 -274 -104 -386 l-23 -80 -297 -3 c-246 -2 -296 -5 -296 -16 0 -38 226 -211 367 -280 203 -100 349 -131 583 -123 180 6 256 23 418 92 317 136 601 429 717 739 38 102 28 111 -33 29 -29 -39 -94 -111 -145 -160 -186 -176 -382 -255 -674 -269 -122 -7 -133 -6 -133 10 0 16 106 360 131 427 8 20 22 28 61 38 27 8 80 29 118 47 77 39 198 144 186 162 -5 8 -47 12 -138 12 -130 0 -130 0 -124 28 3 15 32 115 64 222 l57 195 350 5 c350 5 350 5 349 35 -2 34 -41 183 -54 204 -7 12 -108 15 -647 15 -351 1 -690 -2 -753 -6z"/>
                </g>
            </svg>

            {/* Typography */}
            {showText && (
                <div className="flex flex-col justify-center leading-none">
                    <span className={`font-mono text-base sm:text-lg font-bold tracking-wider uppercase transition-colors duration-200 ${primaryTextColor}`}>
                        SANCHAR
                    </span>
                    <span className={`text-[8.5px] sm:text-[9.5px] font-sans font-semibold tracking-widest uppercase transition-colors duration-200 mt-0.5 ${secondaryTextColor}`}>
                        TELESYSTEMS
                    </span>
                </div>
            )}
        </div>
    );
}
