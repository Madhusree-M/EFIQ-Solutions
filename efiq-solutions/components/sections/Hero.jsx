"use client";
import { motion } from "framer-motion";
import Starfield from "../Starfield";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Interstellar Animated Background */}
            <Starfield />

            {/* Radial dark gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_black_90%)] z-0" />

            {/* Subtle Blue glow top-left accent */}
            <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-[#0A84FF]/10 rounded-full blur-[150px] z-0 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 pt-20 lg:pt-0">

                {/* Left Side: Text Content */}
                <div className="w-full lg:w-5/12 text-left z-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wider text-white mb-6 drop-shadow-lg"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        <span className="whitespace-nowrap">Innovative Technology.</span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#0A84FF] whitespace-nowrap">
                            Tangible Results.
                        </span>
                        <br />
                        <span className="whitespace-nowrap">Real Impact.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-white/70 text-lg md:text-2xl leading-relaxed mb-10 font-light tracking-wide max-w-xl"
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

                {/* Right Side: Jet Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="w-full lg:w-7/12 mt-16 lg:mt-0 flex justify-center lg:justify-end lg:translate-x-10 z-10 relative"
                >
                    <motion.img
                        src="/assets/Jet-image.png"
                        alt="Advanced Technology Jet"
                        className="w-[90%] md:w-[80%] lg:w-[120%] lg:scale-125 max-w-3xl lg:-mr-10 object-contain drop-shadow-[0_0_30px_rgba(10,132,255,0.3)]"
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 6,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Optional glow behind the jet */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#0A84FF]/20 rounded-full blur-[100px] -z-10" />
                </motion.div>

            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
        </section>
    );
}
