"use client";
import { motion } from "framer-motion";

const logos = [
    { name: "Lockheed Martin", abbr: "LM" },
    { name: "Raytheon", abbr: "RTX" },
    { name: "Thales Group", abbr: "THALES" },
    { name: "Boeing Defense", abbr: "BOEING" },
    { name: "Equator", abbr: "EQUATOR" },
    { name: "Diehl Defence", abbr: "DIEHL" },
    { name: "Northrop Grumman", abbr: "NGC" },
    { name: "FLIR Systems", abbr: "FLIR" },
];

export default function ClientLogos() {
    return (
        <section className="py-12 bg-[#080808] border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-8">
                    Trusted By Industry Leaders
                </p>
                <div className="relative mt-4">
                    {/* Linear Gradient Masks for smooth fading edges */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-6 md:gap-10 pr-6 md:pr-10"
                            animate={{
                                x: ["0%", "-50%"],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: logos.length * 2, // 2s per logo for a smooth but rhythmic feel
                                    ease: "linear",
                                },
                            }}
                        >
                            {/* Double the logos for seamless loop */}
                            {[...logos, ...logos].map((logo, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="group flex items-center justify-center px-6 py-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#0A84FF]/30 hover:bg-[#0A84FF]/5 transition-all duration-300 cursor-pointer min-w-[140px] md:min-w-[180px]"
                                >
                                    <span
                                        className="text-white/20 group-hover:text-[#0A84FF] font-black text-[10px] md:text-xs tracking-[0.2em] transition-all duration-300 uppercase"
                                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                                    >
                                        {logo.abbr}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
