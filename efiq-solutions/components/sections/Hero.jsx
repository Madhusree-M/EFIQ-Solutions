"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Animated radar pulse dot component
function RadarDot({ x, y, delay = 0 }) {
    return (
        <motion.div
            className="absolute"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay, ease: "easeOut" }}
        >
            <div className="relative">
                <div className="w-2 h-2 bg-[#0A84FF] rounded-full" />
                <motion.div
                    className="absolute inset-0 rounded-full border border-[#0A84FF]"
                    animate={{ scale: [1, 3], opacity: [0.8, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
}

// Radar sweep animation
function RadarSweep() {
    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-[500px] h-[500px] opacity-10">
                <div className="absolute inset-0 rounded-full border border-[#0A84FF]/40" />
                <div className="absolute inset-[20%] rounded-full border border-[#0A84FF]/30" />
                <div className="absolute inset-[40%] rounded-full border border-[#0A84FF]/20" />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-1/2 h-[1px]"
                    style={{
                        background: "linear-gradient(90deg, transparent, #0A84FF)",
                        transformOrigin: "0 50%",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </div>
    );
}

const radarDots = [
    { x: 20, y: 30, delay: 0 },
    { x: 65, y: 25, delay: 0.8 },
    { x: 45, y: 55, delay: 1.5 },
    { x: 78, y: 60, delay: 0.3 },
    { x: 30, y: 70, delay: 1.1 },
    { x: 55, y: 40, delay: 0.6 },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        "linear-gradient(#0A84FF 1px, transparent 1px), linear-gradient(90deg, #0A84FF 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Radial dark gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_black_80%)]" />

            {/* Radar sweep */}
            <RadarSweep />

            {/* Radar dots */}
            {radarDots.map((dot, i) => (
                <RadarDot key={i} {...dot} />
            ))}

            {/* Blue glow top-left accent */}
            <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-[#0A84FF]/5 rounded-full blur-[120px]" />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0A84FF]/30 bg-[#0A84FF]/10 text-[#0A84FF] text-xs tracking-widest uppercase mb-8"
                >
                    <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse" />
                    Advanced Engineering Solutions
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-6"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                    ENGINEERING SYSTEMS
                    <br />
                    <span className="text-[#0A84FF]">THAT HAVE YOU</span>
                    <br />
                    COVERED
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
                >
                    EFIQ Solutions delivers advanced radar, sensing, and AI-enabled
                    platforms engineered for defense, aviation, maritime, and industrial
                    applications worldwide.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#markets"
                        className="px-8 py-3.5 bg-[#22C55E] hover:bg-[#16a34a] text-black font-bold rounded-md transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] text-sm tracking-wide"
                    >
                        Learn More
                    </a>
                    <a
                        href="#products"
                        className="px-8 py-3.5 border border-white/20 text-white hover:border-[#0A84FF] hover:text-[#0A84FF] font-semibold rounded-md transition-all duration-200 text-sm tracking-wide"
                    >
                        View Products
                    </a>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}
