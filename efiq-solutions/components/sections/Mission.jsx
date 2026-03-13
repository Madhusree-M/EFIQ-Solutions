"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import EfiqLogo from "../EfiqLogo";

const InteractiveText = ({ text }) => {
    const [hoveredIdx, setHoveredIdx] = useState(null);

    let absoluteIdx = 0;

    return (
        <span onMouseLeave={() => setHoveredIdx(null)}>
            {text.split(/(\s+)/).map((segment, segmentIdx) => {
                const isSpace = /\s+/.test(segment);

                return (
                    <span
                        key={segmentIdx}
                        className={isSpace ? "inline" : "inline-block whitespace-nowrap"}
                    >
                        {segment.split("").map((char) => {
                            const i = absoluteIdx++;
                            const distance = hoveredIdx !== null ? Math.abs(hoveredIdx - i) : Infinity;
                            const isHovered = distance <= 2; // Covers 5 letters

                            let textColor = "text-inherit";
                            let dropShadow = "";
                            let fontWeight = "font-light";

                            if (isHovered && !isSpace) {
                                textColor = "text-[var(--brand-blue)]";
                                if (distance === 0) {
                                    dropShadow = "drop-shadow-[0_0_12px_var(--brand-blue)]";
                                    fontWeight = "font-medium";
                                }
                                else if (distance === 1) {
                                    dropShadow = "drop-shadow-[0_0_8px_var(--brand-blue)]";
                                    fontWeight = "font-normal";
                                }
                                else if (distance === 2) {
                                    dropShadow = "drop-shadow-[0_0_4px_var(--brand-blue)]";
                                }
                            }

                            return (
                                <span
                                    key={i}
                                    onMouseEnter={() => setHoveredIdx(i)}
                                    className={`transition-colors duration-150 ease-out ${textColor} ${fontWeight} ${dropShadow} ${isSpace ? 'inline' : 'inline-block'}`}
                                >
                                    {char}
                                </span>
                            );
                        })}
                    </span>
                );
            })}
        </span>
    );
};
// make the font to orbitron for the title
export default function Mission() {
    return (
        <section
            id="about"
            className="py-24 bg-[#050505] relative overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto px-6">

                {/* Top Section */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-3xl md:text-5xl font-bold leading-tight text-white uppercase tracking-wide"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        DRIVEN BY CURIOSITY.<br />
                        POWERED BY ENGINEERING.
                    </motion.h2>
                </div>

                {/* Bottom Section: Two Columns */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 max-w-7xl mx-auto">
                    {/* Left side: Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="w-full md:w-5/12 flex justify-center md:justify-end"
                    >
                        <div className="w-64 md:w-full h-32 md:h-40 flex items-center justify-center max-w-[320px]">
                            <EfiqLogo phase="static" />
                        </div>
                    </motion.div>

                    {/* Right side: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="w-full md:w-7/12"
                    >
                        <p className="text-white text-base md:text-xl leading-relaxed text-justify font-light">
                            <InteractiveText text="EFIQ Solutions develops advanced engineering systems, intelligent software platforms, and innovative technology products designed to solve complex real-world challenges. From concept and prototyping to development and deployment, we focus on creating technology that delivers practical impact, drives innovation, and improves operational efficiency for organizations across multiple industries." />
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
