"use client";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex-1 flex flex-col bg-[#161616] w-full overflow-hidden"
        >
            {/* Radial dark gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_10%,_black_90%)] z-0" />

            {/* Content wrapper */}
            <div className="relative z-10 flex flex-col w-full h-full max-w-7xl mx-auto px-6">

                {/* ─── Text Content ─── */}
                {/* Full width, left-aligned. Text naturally sits on the left. */}
                <div className="w-full z-20 flex flex-col justify-center pt-24 sm:pt-28 md:pt-32 lg:pt-32 xl:pt-40">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-col gap-2 md:gap-0 font-bold leading-[1.12] text-white mb-5 sm:mb-4 lg:mb-6 drop-shadow-lg"
                        style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: "clamp(1.25rem, 5vw, 4.5rem)",
                        }}
                    >
                        <span className="block whitespace-nowrap">Innovative Technology.</span>
                        <span className="block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#0A84FF]">
                            Tangible Results.
                        </span>
                        <span className="block whitespace-nowrap">Real Impact.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="font-manrope text-white/70 text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed mb-6 sm:mb-6 lg:mb-10 font-light max-w-xl"
                    >
                        Empowering the future through cutting-edge solutions and transparent innovation
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        <a href="#contact" className="inline-block px-5 sm:px-8 py-2.5 sm:py-4 text-xs sm:text-sm md:text-base bg-primary text-white font-bold rounded-full hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(10,132,255,0.4)] hover:shadow-[0_0_30px_rgba(10,132,255,0.6)] transform hover:-translate-y-1">
                            CONTACT NOW
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* ─── Jet Image ─── */}
            {/* Absolutely positioned bottom-right on ALL screens. */}
            {/* z-10 keeps it behind the text (z-20). Overflow hidden clips it on mobile. */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="absolute bottom-0 inset-x-0 lg:inset-x-auto lg:right-[6%] w-full sm:w-[80%] md:w-[65%] lg:w-[60%] h-[60%] sm:h-[55%] lg:h-[85%] mx-auto lg:mx-0 flex items-end justify-center lg:justify-end z-10 pointer-events-none"
            >
                <div className="relative w-full h-full flex justify-center lg:justify-end items-end">
                    <img
                        src="/assets/Jet-image.png"
                        alt="Advanced Technology Jet"
                        className="w-full h-full object-contain object-bottom lg:object-right-bottom drop-shadow-[0_0_30px_rgba(10,132,255,0.3)] lg:scale-[1.4]"
                    />
                    {/* Subtle glow */}
                    <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#0A84FF]/15 rounded-full blur-[100px] -z-10" />
                </div>
            </motion.div>
        </section>
    );
}
