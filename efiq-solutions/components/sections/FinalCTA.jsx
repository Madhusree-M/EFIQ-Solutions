"use client";
import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A84FF]/8 via-black to-[#22C55E]/5" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,_rgba(10,132,255,0.06),_transparent)]" />

            {/* Animated border lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0A84FF]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent" />

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/10 text-[#22C55E] text-xs tracking-widest uppercase mb-8"
                >
                    <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full animate-pulse" />
                    Ready to Start?
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-black text-white leading-tight mb-6"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                    Ready to Transform
                    <br />
                    <span className="text-[#0A84FF]">Your Business?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-white/50 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
                >
                    Partner with EFIQ Solutions to deploy cutting-edge engineering systems
                    and AI-powered platforms purpose-built for your mission.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-4 bg-[#22C55E] hover:bg-[#16a34a] text-black font-bold rounded-lg transition-all duration-200 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] text-sm tracking-wide"
                    >
                        Get Started
                    </motion.a>
                    <a
                        href="#about"
                        className="px-10 py-4 border border-white/15 text-white hover:border-white/30 font-semibold rounded-lg transition-all duration-200 text-sm"
                    >
                        Learn About Us
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
