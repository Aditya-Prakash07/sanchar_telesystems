import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimatedHeading — Industry-Standard Kinetic Typography Reveal
 * 
 * Features:
 * - Word-by-word staggered reveal sliding up smoothly through masked invisible baselines
 * - Apple / Linear grade cubic-bezier easing curve
 * - Viewport-aware IntersectionObserver (triggers automatically on scroll)
 * - Dynamic accent gradient with animated sheen sweep on key/highlighted words
 * - Semantic tag selection (h1, h2, h3, etc.) with preserved accessibility (aria-label)
 * - Zero layout shift & full responsive word wrapping
 * - Native prefers-reduced-motion compliance
 */
export default function AnimatedHeading({
    children,
    as: Tag = 'h2',
    className = '',
    highlight = 'last', // 'last' | 'none' | 'gradient' | string | array of strings
    highlightCount = 1, // how many words to highlight from the end when highlight='last'
    delay = 0, // initial delay in ms
    stagger = 38, // ms between consecutive words
    immediate = false, // if true, animate immediately without waiting for intersection
    threshold = 0.15,
    gradientClass = 'bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600 dark:from-beacon dark:via-amber-200 dark:to-beacon-dim bg-clip-text text-transparent animate-text-sheen',
    ...props
}) {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Viewport IntersectionObserver
    useEffect(() => {
        if (immediate) {
            setIsVisible(true);
            return;
        }

        if (typeof window === 'undefined') return;

        // Respect user accessibility preferences
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) {
            setIsVisible(true);
            return;
        }

        const el = containerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(el);
            }
        }, {
            threshold,
            rootMargin: '0px 0px -40px 0px'
        });

        observer.observe(el);
        return () => observer.disconnect();
    }, [immediate, threshold]);

    // If children is not a plain string (e.g. nested JSX elements)
    if (typeof children !== 'string') {
        return (
            <Tag 
                ref={containerRef} 
                className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                    isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-6 opacity-0 blur-[6px]'
                } ${className}`}
                {...props}
            >
                {children}
            </Tag>
        );
    }

    const plainText = children.trim();
    const words = plainText.split(/\s+/);
    const totalWords = words.length;

    return (
        <Tag 
            ref={containerRef} 
            className={`tracking-tight ${className}`}
            aria-label={plainText}
            {...props}
        >
            {words.map((word, idx) => {
                // Determine whether this word should receive the gradient highlight
                let isHighlighted = false;
                if (highlight === 'last') {
                    isHighlighted = idx >= totalWords - highlightCount;
                } else if (highlight === 'gradient' || highlight === 'all') {
                    isHighlighted = true;
                } else if (typeof highlight === 'string' && highlight !== 'none') {
                    isHighlighted = word.toLowerCase().includes(highlight.toLowerCase());
                } else if (Array.isArray(highlight)) {
                    isHighlighted = highlight.some(h => word.toLowerCase().includes(h.toLowerCase()));
                }

                return (
                    <span 
                        key={idx} 
                        className="inline-block overflow-hidden py-1 align-bottom mr-[0.28em] last:mr-0 leading-tight"
                        aria-hidden="true"
                    >
                        <span 
                            className={`inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                                isVisible 
                                    ? 'translate-y-0 opacity-100 blur-0' 
                                    : 'translate-y-[115%] opacity-0 blur-[6px]'
                            } ${isHighlighted ? gradientClass : ''}`}
                            style={{
                                transitionDelay: `${delay + idx * stagger}ms`,
                                transitionProperty: 'transform, opacity, filter'
                            }}
                        >
                            {word}
                        </span>
                    </span>
                );
            })}
        </Tag>
    );
}
