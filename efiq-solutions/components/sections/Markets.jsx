"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const markets = [
    {
        title: "Technology Startups",
        desc: "We help startups accelerate innovation through prototype development, engineering systems, and scalable software platforms.",
    },
    {
        title: "Engineering & Industrial Companies",
        desc: "We design automation systems, custom electronics, and specialized engineering solutions for industrial and technical applications.",
    },
    {
        title: "Security & Surveillance",
        desc: "We develop technology solutions for security systems, monitoring infrastructure, and intelligent surveillance applications to enhance safety and operational awareness.",
    },
    {
        title: "Research & Innovation Labs",
        desc: "With a dedicated research team, EFIQ collaborates on experimental technologies, advanced prototypes, and next-generation engineering solutions.",
    },
    {
        title: "Creative & Media Industry",
        desc: "We build AI-powered visual content, digital storytelling tools, and technology-driven creative solutions.",
    },
];

const InteractiveText = ({ text }) => {
    // Variants for the staggered rolling animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.015, // Delay between each letter
                delayChildren: 0.2, // Small delay before starting
            },
        },
    };

    const childVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 200, damping: 20 },
        },
    };

    return (
        <motion.span
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="inline-block"
        >
            {text.split(/(\s+)/).map((segment, segmentIdx) => {
                const isSpace = /\s+/.test(segment);

                return (
                    <span
                        key={segmentIdx}
                        className={isSpace ? "inline" : "inline-block whitespace-nowrap"}
                    >
                        {segment.split("").map((char, charIdx) => (
                            <motion.span
                                key={charIdx}
                                variants={childVariants}
                                className={`font-light text-white/90 ${isSpace ? 'inline' : 'inline-block'}`}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </span>
                );
            })}
        </motion.span>
    );
};

export default function Markets() {
    const [activeIdx, setActiveIdx] = useState(0);

    return (
        <section id="markets" className="py-24 bg-[#050505] min-h-screen flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full">
                {/* Header */}
                <div className="mb-24 relative z-10">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-wider mb-6"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        Market We Serve
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/60 max-w-2xl text-base md:text-lg leading-relaxed"
                    >
                        Our solutions are purpose-built for the most demanding environments
                        where precision, reliability, and intelligence matter most.
                    </motion.p>
                </div>

                {/* Timeline UI - Desktop */}
                <div className="relative hidden md:block">
                    <div className="flex justify-between relative z-10 w-full mb-12">
                        {markets.map((market, i) => {
                            const isActive = i === activeIdx;
                            return (
                                <div
                                    key={i}
                                    onClick={() => setActiveIdx(i)}
                                    className="flex-1 cursor-pointer group relative min-h-[100px]"
                                >
                                    {/* Vertical Line */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-[1px] transition-colors duration-300 ${isActive ? 'bg-[#0A84FF]/60' : 'bg-white/20 group-hover:bg-white/40'}`} />

                                    {/* Title Wrapper */}
                                    <div className="pt-8 pl-8 pr-4 h-full">
                                        <h3 className={`text-sm lg:text-base font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? "text-white" : "text-white/60 group-hover:text-white/80"}`}
                                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                                        >
                                            {market.title}
                                        </h3>
                                    </div>

                                    {/* Dot on the vertical line */}
                                    <div className="absolute left-[-5.5px] top-[34px] flex items-center justify-center w-[12px] h-[12px] bg-[#050505]">
                                        {isActive ? (
                                            <>
                                                <motion.div
                                                    layoutId="activeCircle"
                                                    className="absolute inset-0 rounded-full border-[1.5px] border-[#0A84FF]"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                                <div className="w-[5px] h-[5px] rounded-full bg-[#0A84FF]" />
                                            </>
                                        ) : (
                                            <div className="absolute inset-0 rounded-full border-[1.5px] border-white/30 group-hover:border-white/60 transition-colors duration-300" />
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Content Area - Aligned to left, static width */}
                    <div className="relative w-full">
                        {/* Continuous line connecting from the first column */}
                        <div className="absolute left-0 top-[-3rem] bottom-0 w-[1px] bg-white/20 transition-all duration-300" />

                        <div className="relative pl-8 py-2 min-h-[160px] max-w-4xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIdx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="text-xl lg:text-3xl text-white/90 leading-relaxed font-light">
                                        <InteractiveText text={markets[activeIdx].desc} />
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Timeline UI - Mobile */}
                <div className="md:hidden flex flex-col relative z-10">
                    <div className="flex flex-col gap-0 relative">
                        {/* Continuous line for mobile */}
                        <div className="absolute left-[5.5px] top-0 bottom-0 w-[1px] bg-white/20" />

                        {markets.map((market, i) => {
                            const isActive = i === activeIdx;
                            return (
                                <div key={i} className="flex flex-col relative" onClick={() => setActiveIdx(i)}>
                                    <div className="flex items-center gap-6 cursor-pointer py-6 bg-[#050505] z-10 pl-0 relative group">
                                        {/* Dot */}
                                        <div className="absolute left-[0px] flex items-center justify-center w-[12px] h-[12px] bg-[#050505] z-20">
                                            {isActive ? (
                                                <>
                                                    <motion.div
                                                        layoutId="activeCircleMobile"
                                                        className="absolute inset-0 rounded-full border-[1.5px] border-[#0A84FF]"
                                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                    />
                                                    <div className="w-[5px] h-[5px] rounded-full bg-[#0A84FF]" />
                                                </>
                                            ) : (
                                                <div className="absolute inset-0 rounded-full border-[1.5px] border-white/30 group-hover:border-white/60 transition-colors duration-300" />
                                            )}
                                        </div>
                                        <h3 className={`text-sm font-bold uppercase tracking-widest pl-8 transition-colors duration-300 ${isActive ? "text-white" : "text-white/60 group-hover:text-white/80"}`}
                                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                                        >
                                            {market.title}
                                        </h3>
                                    </div>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden relative z-10"
                                            >
                                                <div className="ml-[5.5px] pl-8 pb-6 pt-2 h-full border-l border-[#0A84FF]/60 bg-[#050505]">
                                                    <p className="text-white/80 text-base leading-relaxed text-justify">
                                                        <InteractiveText text={market.desc} />
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section >
    );
}
