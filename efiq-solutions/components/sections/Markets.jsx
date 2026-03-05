"use client";
import { motion } from "framer-motion";
import {
    FiRadio,
    FiShield,
    FiAirplay,
    FiAnchor,
    FiEye,
    FiActivity,
} from "react-icons/fi";

const markets = [
    {
        icon: FiAirplay,
        title: "UAS Systems",
        desc: "Drone tracking and counter-UAS radar integration",
    },
    {
        icon: FiShield,
        title: "Defense",
        desc: "Border surveillance and force protection systems",
    },
    {
        icon: FiRadio,
        title: "Aviation",
        desc: "Airport surface and approach radar solutions",
    },
    {
        icon: FiAnchor,
        title: "Maritime",
        desc: "Coastal monitoring and port security platforms",
    },
    {
        icon: FiEye,
        title: "Security",
        desc: "Perimeter intrusion detection and area protection",
    },
    {
        icon: FiActivity,
        title: "Industrial",
        desc: "Process automation and site monitoring systems",
    },
];

export default function Markets() {
    return (
        <section id="markets" className="py-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/5 text-[#0A84FF] text-xs tracking-widest uppercase mb-5"
                    >
                        Industries
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-black text-white"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        MARKETS WE SERVE
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/50 mt-4 max-w-xl mx-auto text-sm leading-relaxed"
                    >
                        Our solutions are purpose-built for the most demanding environments
                        where precision, reliability, and intelligence matter most.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
                    {markets.map((market, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ y: -4, borderColor: "rgba(10,132,255,0.4)" }}
                            className="group flex items-start gap-4 p-6 rounded-xl border border-white/5 bg-white/2 hover:bg-[#0A84FF]/5 transition-all duration-300 cursor-pointer"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#0A84FF]/10 border border-[#0A84FF]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0A84FF]/20 transition-all duration-300">
                                <market.icon size={22} className="text-[#0A84FF]" />
                            </div>
                            <div>
                                <h3
                                    className="text-white font-semibold text-sm mb-1.5 tracking-wide"
                                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                                >
                                    {market.title}
                                </h3>
                                <p className="text-white/40 text-xs leading-relaxed">
                                    {market.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#22C55E] hover:bg-[#16a34a] text-black font-bold rounded-md transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] text-sm tracking-wide"
                    >
                        Start Your Mission
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
