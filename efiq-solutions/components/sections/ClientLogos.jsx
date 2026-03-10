"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const logos = [
    { name: "Hifi Hydrodip", src: "/assets/Company-Logos/Hifi%20Hydrodip.png" },
    { name: "Airavat", src: "/assets/Company-Logos/Airavat.png" },
    { name: "Milar", src: "/assets/Company-Logos/Milar.png" },
    { name: "Trinitas", src: "/assets/Company-Logos/Trinitas.png" },
    { name: "Astredge", src: "/assets/Company-Logos/Astredge.png" },
    { name: "Buzzkins", src: "/assets/Company-Logos/Buzzkins.png" },
    { name: "7 Hills", src: "/assets/Company-Logos/7%20hills.png" },
];

export default function ClientLogos() {
    const containerRef = useRef(null);
    const itemRefs = useRef([]);
    const [centerIndex, setCenterIndex] = useState(-1);

    // Track which logo is in the center of the screen
    useEffect(() => {
        let animationFrameId;
        const checkCenter = () => {
            if (!containerRef.current) return;

            // Get the horizontal center of the viewport
            const viewportCenter = window.innerWidth / 2;

            let closestIndex = -1;
            let minDistance = Infinity;

            itemRefs.current.forEach((el, index) => {
                if (!el) return;
                const rect = el.getBoundingClientRect();
                const elCenter = rect.left + rect.width / 2;
                const distance = Math.abs(viewportCenter - elCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            if (closestIndex !== centerIndex) {
                setCenterIndex(closestIndex);
            }

            animationFrameId = requestAnimationFrame(checkCenter);
        };

        checkCenter();
        return () => cancelAnimationFrame(animationFrameId);
    }, [centerIndex]);

    return (
        <section className="bg-[#080808] border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-2">
                <p className="text-center text-white/30 text-xs uppercase tracking-widest pt-4">
                    We are proud to work with
                </p>
                <div className="relative">
                    {/* Linear Gradient Masks for smooth fading edges */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden" ref={containerRef}>
                        <motion.div
                            className="flex gap-3 md:gap-10 pr-6 md:pr-10"
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
                                    ref={el => itemRefs.current[i] = el}
                                    whileHover={{ scale: 1.05 }}
                                    className="group flex items-center justify-center px-4 md:px-6 transition-all duration-300 cursor-pointer min-w-[180px] md:min-w-[240px]"
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className={`h-26 md:h-50 w-auto object-contain transition-all duration-300 ${centerIndex === i
                                            ? "opacity-100 filter-none scale-150 duration-300"
                                            : "opacity-40 filter grayscale scale-100 hover:opacity-100 hover:filter-none hover:scale-110"
                                            }`}
                                    />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
