"use client";
import React, { useState, useEffect, useRef } from "react";
import EfiqLogo from "./EfiqLogo";

const Loader = () => {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState("loading"); // 'loading' -> 'ready' -> 'zooming' -> 'hidden'
    const loaderRef = useRef(null);

    useEffect(() => {
        let startTime = null;
        let animationFrameId;
        const duration = 2500; // 2.5 seconds to reach 100%

        const animateProgress = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            // Ease out quad for smooth deceleration near the end
            const easeOutQuad = (t) => t * (2 - t);
            const rawProgress = Math.min(elapsed / duration, 1);
            const easedProgress = Math.floor(easeOutQuad(rawProgress) * 100);

            setProgress(easedProgress);

            if (easedProgress < 100) {
                animationFrameId = requestAnimationFrame(animateProgress);
            } else {
                setPhase("ready");
                setTimeout(() => setPhase("zooming"), 200);
            }
        };

        if (document.readyState === "complete") {
            animationFrameId = requestAnimationFrame(animateProgress);
        } else {
            const startLoader = () => {
                animationFrameId = requestAnimationFrame(animateProgress);
                window.removeEventListener("load", startLoader);
            };
            window.addEventListener("load", startLoader);
        }

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    useEffect(() => {
        if (phase === "zooming") {
            // Once the zoom phase ends (1.4s transition), fully hide the loader
            // It needs slightly longer because it's covering a 60x scale
            const hideTimeout = setTimeout(() => {
                setPhase("hidden");
            }, 1450);
            return () => clearTimeout(hideTimeout);
        }
    }, [phase]);

    if (phase === "hidden") return null;

    return (
        <div
            ref={loaderRef}
            // NO background here. Wait for the zooming SVG mask to naturally reveal the website!
            className={`fixed inset-0 z-[10000] flex items-center justify-center pointer-events-none`}
        >
            <div className="relative w-64 md:w-[400px] flex items-center justify-center">
                <EfiqLogo phase={phase} />
            </div>

            {/* Bottom Right Loading Percentage */}
            <div
                className={`absolute bottom-8 right-8 text-white/90 text-2xl md:text-3xl font-light tracking-widest transition-opacity duration-300 ${phase === "zooming" ? "opacity-0" : "opacity-100"
                    }`}
                style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
                {progress}%
            </div>
        </div>
    );
};

export default Loader;
