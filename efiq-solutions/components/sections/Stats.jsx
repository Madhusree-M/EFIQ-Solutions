"use client";
import { motion, animate, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
    { number: 40, suffix: "+", label: "Solutions Delivered", desc: "Across engineering and software solutions" },
    { number: 30, suffix: "+", label: "Clients Served", desc: "Trusted by organizations and teams" },
    { number: 18, suffix: "+", label: "Engineers & Innovators", desc: "Multidisciplinary technology experts" },
    { number: 7, suffix: "+", label: "Own Products", desc: "Innovations built and developed in-house" },
];

function AnimatedNumber({ value, suffix }) {
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (inView) {
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => {
                    if (nodeRef.current) {
                        nodeRef.current.textContent = Math.round(latest) + suffix;
                    }
                },
            });
            return () => controls.stop();
        }
    }, [inView, value, suffix]);

    return <span ref={nodeRef}>0{suffix}</span>;
}

export default function Stats() {
    return (
        <section id="technology" className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        WHY CHOOSE US?
                    </motion.h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="relative pl-8"
                        >
                            {/* Vertical Line */}
                            <div className="absolute left-[3.5px] top-0 bottom-0 w-[1px] bg-white/20 transition-colors duration-300 hover:bg-[#0A84FF]/60" />

                            {/* Dot */}
                            <div className="absolute left-[-2.5px] top-[24px] flex items-center justify-center w-[13px] h-[13px] bg-[#050505]">
                                <div className="absolute inset-0 rounded-full border-[2px] border-[#0A84FF] shadow-[0_0_8px_rgba(10,132,255,0.6)]" />
                            </div>

                            <div
                                className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter hover:text-[#0A84FF] scale-105 transition-all duration-300 cursor-default"
                            >
                                <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                            </div>
                            <h3
                                className="text-white text-xl font-bold uppercase tracking-widest mb-4 min-h-[3rem] lg:min-h-[3.5rem]"
                                style={{ fontFamily: "'Orbitron', sans-serif" }}
                            >
                                {stat.label}
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed pr-4 font-normal font-manrope">
                                {stat.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
