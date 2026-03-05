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
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                    {logos.map((logo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.07 }}
                            whileHover={{ scale: 1.05 }}
                            className="group flex items-center justify-center px-5 py-3 rounded-lg border border-white/5 bg-white/3 hover:border-[#0A84FF]/30 transition-all duration-300 cursor-pointer min-w-[100px]"
                        >
                            <span
                                className="text-white/25 group-hover:text-[#0A84FF] font-bold text-xs tracking-widest transition-all duration-300"
                                style={{ fontFamily: "'Orbitron', sans-serif" }}
                            >
                                {logo.abbr}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
