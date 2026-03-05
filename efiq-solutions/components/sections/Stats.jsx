"use client";
import { motion } from "framer-motion";

const stats = [
    { number: "40+", label: "Countries Supported", desc: "Global deployments across 6 continents" },
    { number: "360°", label: "Situational Awareness", desc: "Full-spectrum monitoring coverage" },
    { number: "25+", label: "Years Experience", desc: "Decades of engineering excellence" },
    { number: "35+", label: "System Deployments", desc: "Mission-critical installations worldwide" },
];

export default function Stats() {
    return (
        <section id="technology" className="py-24 bg-black relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_50%,_rgba(10,132,255,0.04),_transparent)]" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/5 text-[#0A84FF] text-xs tracking-widest uppercase mb-5"
                    >
                        By The Numbers
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-black text-white"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        WHY CHOOSE EFIQ?
                    </motion.h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            whileHover={{ y: -4 }}
                            className="p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/3 to-transparent text-center group hover:border-[#0A84FF]/30 transition-all duration-300"
                        >
                            <div
                                className="text-4xl md:text-5xl font-black text-[#0A84FF] mb-3"
                                style={{ fontFamily: "'Orbitron', sans-serif" }}
                            >
                                {stat.number}
                            </div>
                            <div className="text-white text-sm font-semibold mb-2 tracking-wide">
                                {stat.label}
                            </div>
                            <div className="text-white/40 text-xs leading-relaxed">
                                {stat.desc}
                            </div>
                            <div className="w-8 h-0.5 bg-gradient-to-r from-[#0A84FF] to-[#22C55E] mx-auto mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
