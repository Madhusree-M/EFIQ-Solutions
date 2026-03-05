"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const testimonials = [
    {
        company: "Demo Corp",
        abbr: "DC",
        quote:
            "Content energizes Infiniti shorter formats tailored to engage audiences, such as abandoned blog posts, promotion landing page copy, information newsletters, and social media posts, all designed to build brand authority and audience connections.",
        author: "John Smith",
        role: "CTO, Demo Corp",
        rating: 5,
    },
    {
        company: "Nexus Defense",
        abbr: "ND",
        quote:
            "EFIQ Solutions delivered a radar integration that exceeded our performance benchmarks by 40%. Their engineering team's depth of knowledge and responsiveness was exceptional throughout the project lifecycle.",
        author: "Sarah Johnson",
        role: "Director of Operations, Nexus Defense",
        rating: 5,
    },
    {
        company: "AeroVision",
        abbr: "AV",
        quote:
            "The flight safety platform they developed for us has been seamlessly integrated into our airport operations. The reduction in bird strikes alone justified the investment within six months.",
        author: "Michael Chen",
        role: "Head of Aviation Safety, AeroVision",
        rating: 5,
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const prev = () =>
        setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);

    const t = testimonials[current];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,_rgba(10,132,255,0.04),_transparent)]" />

            <div className="relative max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/5 text-[#0A84FF] text-xs tracking-widest uppercase mb-5"
                    >
                        Client Stories
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-black text-white"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        Trusted by Industry Leaders
                    </motion.h2>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.4 }}
                            className="rounded-2xl border border-white/8 bg-[#0d0d0d] p-8 md:p-10"
                        >
                            {/* Company logo */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-[#0A84FF]/10 border border-[#0A84FF]/20 flex items-center justify-center">
                                    <span
                                        className="text-[#0A84FF] font-bold text-xs"
                                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                                    >
                                        {t.abbr}
                                    </span>
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-sm">{t.company}</div>
                                    <div className="flex gap-0.5 mt-1">
                                        {Array.from({ length: t.rating }).map((_, i) => (
                                            <FiStar key={i} size={12} className="text-[#22C55E] fill-[#22C55E]" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Quote */}
                            <blockquote className="text-white/70 text-base md:text-lg leading-relaxed mb-8 relative">
                                <span className="text-[#0A84FF] text-5xl font-serif absolute -top-4 -left-2 opacity-30">
                                    "
                                </span>
                                {t.quote}
                            </blockquote>

                            {/* Author */}
                            <div className="pt-6 border-t border-white/5">
                                <div className="text-white text-sm font-semibold">{t.author}</div>
                                <div className="text-white/40 text-xs mt-0.5">{t.role}</div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex items-center justify-between mt-8">
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${i === current ? "bg-[#0A84FF] w-6" : "bg-white/20"
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={prev}
                                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#0A84FF] flex items-center justify-center text-white/50 hover:text-[#0A84FF] transition-all duration-200"
                            >
                                <FiChevronLeft size={18} />
                            </button>
                            <button
                                onClick={next}
                                className="w-10 h-10 rounded-full border border-white/10 hover:border-[#0A84FF] flex items-center justify-center text-white/50 hover:text-[#0A84FF] transition-all duration-200"
                            >
                                <FiChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Logo strip */}
                <div className="mt-12 flex flex-wrap justify-center gap-5">
                    {["Demo", "Demo", "Demo", "Demo", "Demo", "Demo"].map((d, i) => (
                        <div
                            key={i}
                            className="px-5 py-2.5 rounded-full border border-white/8 bg-white/3 text-white/25 text-xs font-medium tracking-wider hover:border-[#0A84FF]/30 hover:text-white/50 transition-all duration-200 cursor-pointer"
                        >
                            {d}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
