"use client";
import { motion } from "framer-motion";
import Starfield from "../Starfield";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex-1 flex flex-col bg-gray-900 w-full"
        >
            {/* Interstellar Animated Background */}
            {/* <Starfield /> */}

            {/* Radial dark gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_black_90%)] z-0" />

            {/* Subtle Blue glow top-left accent */}
            {/* <div className="absolute top-0 left-0 w-[800px] h-[400px] bg-[#0A84FF]/10 rounded-full blur-[150px] z-0 pointer-events-none" /> */}

            {/* Content */}
            <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 flex items-center justify-start">

                {/* Left Side: Text Content */}
                <div className="leading-1 w-full lg:w-1/2 text-left z-20 flex flex-col justify-center pt-20 lg:pt-32 pb-10 lg:pb-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-5xl lg:text-6xl font-bold leading-relaxed text-white mb-6 drop-shadow-lg"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        <span className="block mb-3 whitespace-nowrap">Innovative Technology.</span>
                        <span className="block mb-3 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#0A84FF] whitespace-nowrap">
                            Tangible Results.
                        </span>
                        <span className="block whitespace-nowrap">Real Impact.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="font-manrope text-white/70 text-lg md:text-2xl leading-relaxed mb-10 font-light tracking-wide max-w-xl"
                    >
                        Empowering the future through cutting-edge solutions and transparent innovation
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <a href="#contact" className="inline-block px-8 py-4 bg-[#0A84FF] text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(10,132,255,0.4)] hover:shadow-[0_0_30px_rgba(10,132,255,0.6)] transform hover:-translate-y-1">
                            CONTACT NOW
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Jet Image - Positioned absolutely to the bottom right edge of the screen */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute right-0 bottom-0 w-full lg:w-[65%] h-[75%] flex items-end justify-end z-10 pointer-events-none"
            >
                <motion.div
                    className="relative w-full h-full flex justify-end items-end"
                    animate={{ y: [0, -15, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut"
                    }}
                >
                    <img
                        src="/assets/Jet-image.png"
                        alt="Advanced Technology Jet"
                        className="w-full h-full object-contain object-right-bottom drop-shadow-[0_0_30px_rgba(10,132,255,0.3)] origin-bottom-right scale-125 lg:scale-150 translate-x-10 lg:translate-x-16 translate-y-16"
                    />

                    {/* Optional glow behind the jet */}
                    <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#0A84FF]/20 rounded-full blur-[120px] -z-10" />
                </motion.div>
            </motion.div>

            {/* Bottom fade - Removed to eliminate gap */}
        </section>
    );
}
