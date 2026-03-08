"use client";
import React from 'react';

const Loader = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    const dots = Array.from({ length: 12 });

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black z-[10000] transition-all duration-500 ${!loading ? "opacity-0 invisible" : "opacity-100 visible"
                }`}
        >
            <div
                className="relative w-[14em] h-[14em] flex items-center justify-center rounded-full shadow-[inset_2em_0_2em_rgba(0,0,0,0.2),inset_-2em_0_2em_rgba(255,255,255,0.1)] uppercase tracking-[0.1em] text-white"
                style={{ transform: "rotateX(30deg) rotateZ(45deg)" }}
            >
                {dots.map((_, i) => {
                    const rotation = -30 * i;
                    const delay = (i * -2) / 12;
                    return (
                        <div
                            key={i}
                            className="absolute top-[calc(50%-0.75em)] left-[calc(50%-0.75em)] w-[1.5em] h-[1.5em] rounded-full animate-[shadow724_2s_infinite]"
                            style={{
                                transform: `rotate(${rotation}deg) translateX(5em) rotate(${-rotation}deg)`,
                                animationDelay: `${delay}s`,
                                zIndex: i < 6 ? 6 - i : i - 5,
                            }}
                        >
                            {/* Dot Before (Inner) */}
                            <div
                                className="absolute inset-0 rounded-full animate-[pushInOut1724_2s_infinite] shadow-[inset_0.05em_0_0.1em_rgba(255,255,255,0.2)]"
                                style={{ animationDelay: `${delay}s` }}
                            />
                            {/* Dot After (Outer/Tail) */}
                            <div
                                className="absolute bottom-0 left-0 w-full h-[3em] rounded-[0.75em] animate-[pushInOut2724_2s_infinite] shadow-[inset_0.1em_0.3em_0.2em_rgba(255,255,255,0.4),inset_0_-0.4em_0.2em_#2e3138,inset_0_-1em_0.25em_rgba(0,0,0,0.3)] origin-[50%_2.25em]"
                                style={{
                                    animationDelay: `${delay}s`,
                                    transform: "rotate(-45deg)",
                                    clipPath: "polygon(0 75%, 100% 75%, 100% 100%, 0 100%)",
                                }}
                            />
                        </div>
                    );
                })}
                <div className="relative text-[0.75em] max-w-[5rem] rotate-[-45deg] text-white/50">
                    Loading…
                </div>
            </div>
        </div>
    );
};

export default Loader;
