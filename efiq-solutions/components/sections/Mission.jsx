"use client";
import { motion } from "framer-motion";

export default function Mission() {
    return (
        <section
            id="about"
            className="py-28 bg-black relative overflow-hidden"
        >
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,_rgba(10,132,255,0.05),_transparent)]" />

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/5 text-[#0A84FF] text-xs tracking-widest uppercase mb-8"
                >
                    Our Mission
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-black leading-tight text-white mb-8"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                    DRIVEN BY CURIOSITY.
                    <br />
                    <span className="text-[#0A84FF]">POWERED BY ENGINEERING.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-white/60 text-lg leading-relaxed"
                >
                    EFIQ Solutions develops advanced engineering systems, intelligent
                    software platforms, and innovative technology products designed to
                    solve complex real-world challenges. Our expertise spans radar systems,
                    sensing technologies, advanced software development, and AI-enabled
                    platforms — empowering organizations across defense, aviation,
                    maritime, and industrial sectors to operate with confidence and
                    precision.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="w-20 h-0.5 bg-gradient-to-r from-[#0A84FF] to-[#22C55E] mx-auto mt-10"
                />
            </div>
        </section>
    );
}
