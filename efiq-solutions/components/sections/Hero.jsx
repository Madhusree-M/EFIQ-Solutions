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
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex justify-start">
                <div className="max-w-2xl text-left">


                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-5xl font-medium leading-tight tracking-wider text-white mb-6"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        Innovative Technology.
                        <br />
                        Tangible Results.
                        <br />
                        Real Impact.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-white/60 text-lg md:text-xl leading-relaxed mb-10"
                    >
                        Empowering the future through cutting-edge solutions and transparent innovation
                    </motion.p>


                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
}
