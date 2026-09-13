import React, { useState, useRef } from 'react';
import { Link } from '@inertiajs/react';

export default function WelcomeVideoSection() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        if (!videoRef.current) return;
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    return (
        <section className="py-20 sm:py-24 bg-white dark:bg-navy border-b border-slate-200 dark:border-navy-border transition-colors duration-300 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-amber-500/5 dark:bg-beacon/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-content relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Welcome Narrative & Vision / Mission */}
                    <div className="lg:col-span-6 space-y-6">
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-beacon font-bold block mb-2">
                                CORPORATE OVERVIEW
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-paper tracking-tight">
                                Welcome To <span className="text-amber-600 dark:text-beacon">Sanchar Telesystems !</span>
                            </h2>
                            <h3 className="mt-3 text-lg font-semibold text-slate-800 dark:text-slate-200">
                                We provide wireless communication equipments and services.
                            </h3>
                        </div>

                        <div className="space-y-4 text-sm text-slate-600 dark:text-steel leading-relaxed">
                            <p>
                                Sanchar Telesystems is a market leader in wireless communications in India. Sanchar pioneers in offering world-class wireless communication solutions to customers around the country.
                            </p>
                            <p>
                                We provide end-to-end wireless solutions right from conceptualization to system design to project execution with innovation, reliability and absolute trust.
                            </p>
                        </div>

                        {/* Vision & Mission Symmetrical Cards */}
                        <div className="grid sm:grid-cols-2 gap-4 pt-2">
                            {/* Vision Card */}
                            <div className="card-symmetric p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-navy-surface/60 space-y-2 group hover:border-amber-500/40 dark:hover:border-beacon/40 transition-all">
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-lg bg-amber-500/10 dark:bg-beacon/10 text-amber-600 dark:text-beacon flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-display font-bold text-slate-900 dark:text-paper text-sm uppercase tracking-wider">
                                        Vision
                                    </h4>
                                </div>
                                <p className="text-xs text-slate-600 dark:text-steel leading-relaxed">
                                    To be the leading communication solution provider offering quality, reliable, secure, and affordable mission/business critical communication solutions.
                                </p>
                            </div>

                            {/* Mission Card */}
                            <div className="card-symmetric p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-navy-surface/60 space-y-2 group hover:border-amber-500/40 dark:hover:border-beacon/40 transition-all">
                                <div className="flex items-center gap-2">
                                    <div className="w-7 h-7 rounded-lg bg-amber-500/10 dark:bg-beacon/10 text-amber-600 dark:text-beacon flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <circle cx="12" cy="12" r="9" />
                                            <circle cx="12" cy="12" r="5" />
                                            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <h4 className="font-display font-bold text-slate-900 dark:text-paper text-sm uppercase tracking-wider">
                                        Mission
                                    </h4>
                                </div>
                                <p className="text-xs text-slate-600 dark:text-steel leading-relaxed">
                                    Our mission is to provide robust and secure communication solutions to the businesses we serve, focusing on innovation and customer centricity to generate enduring value.
                                </p>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <Link 
                                href="/about-us" 
                                className="btn-primary !py-3.5 !px-8 text-sm uppercase tracking-wider font-mono font-bold inline-flex items-center gap-2"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: High-Definition Corporate Video Showcase */}
                    <div className="lg:col-span-6">
                        <div className="relative rounded-2xl overflow-hidden border border-slate-300 dark:border-white/15 bg-slate-950 shadow-2xl group">
                            
                            {/* Video Element */}
                            <video
                                ref={videoRef}
                                className="w-full aspect-video object-cover"
                                autoPlay
                                loop
                                muted={isMuted}
                                playsInline
                                poster="/storage/media/banners/banner1.png"
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            >
                                <source src="/storage/media/video/STL_Intro_2_720p.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Top Video Header Bar */}
                            <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between pointer-events-none">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                    <span className="text-[11px] font-mono font-semibold tracking-wider text-white uppercase">
                                        Corporate Overview • 720p HD
                                    </span>
                                </div>
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/20 text-white backdrop-blur-md">
                                    SANCHAR TV
                                </span>
                            </div>

                            {/* Bottom Video Controls Overlay */}
                            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={togglePlay}
                                        className="w-9 h-9 rounded-full bg-white/90 dark:bg-beacon hover:scale-110 text-slate-950 font-bold flex items-center justify-center shadow-lg transition-transform"
                                        aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                                    >
                                        {isPlaying ? (
                                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        )}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={toggleMute}
                                        className="group/mute px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/20 hover:border-amber-500/60 dark:hover:border-beacon/60 text-white transition-all duration-200 flex items-center gap-2 shadow-lg active:scale-95 cursor-pointer select-none"
                                        aria-label={isMuted ? 'Unmute Video Audio' : 'Mute Video Audio'}
                                        title={isMuted ? 'Click to enable audio' : 'Click to mute audio'}
                                    >
                                        {isMuted ? (
                                            <>
                                                <svg className="w-4 h-4 text-slate-300 group-hover/mute:text-amber-400 dark:group-hover/mute:text-beacon transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l4-4m0 4l-4-4" />
                                                </svg>
                                                <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-slate-200 group-hover/mute:text-white">
                                                    Muted
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <div className="relative flex items-center">
                                                    <svg className="w-4 h-4 text-amber-400 dark:text-beacon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                                    </svg>
                                                    <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                                </div>
                                                <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-amber-400 dark:text-beacon">
                                                    Sound On
                                                </span>
                                            </>
                                        )}
                                    </button>
                                </div>

                                <span className="text-[11px] font-mono text-white/80 hidden sm:inline">
                                    Sanchar Telesystems Ltd
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
