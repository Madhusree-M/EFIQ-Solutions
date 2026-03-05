"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
    {
        name: "IRIS Radar",
        category: "Surveillance",
        desc: "Long-range 3D radar system for wide-area surveillance and persistent threat detection in complex environments.",
        color: "#0A84FF",
    },
    {
        name: "MAX Tracking System",
        category: "Tracking",
        desc: "Multi-target acquisition and tracking system with AI-assisted classification for defense and border operations.",
        color: "#22C55E",
    },
    {
        name: "Mobility Technology",
        category: "Mobile Systems",
        desc: "Vehicle-mounted mobile radar suite providing rapid deployment capability for field operations.",
        color: "#0A84FF",
    },
    {
        name: "Flight Safety Platform",
        category: "Aviation",
        desc: "Integrated aviation radar platform ensuring runway safety, bird strike prevention, and airspace monitoring.",
        color: "#22C55E",
    },
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/5 text-[#0A84FF] text-xs tracking-widest uppercase mb-5"
                        >
                            Our Solutions
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-black text-white"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                            Products
                        </motion.h2>
                    </div>
                    <motion.a
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        href="#contact"
                        className="text-[#0A84FF] text-sm hover:underline flex items-center gap-1 shrink-0"
                    >
                        View all products →
                    </motion.a>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.6)" }}
                            className="group rounded-2xl border border-white/5 bg-[#0d0d0d] overflow-hidden transition-all duration-300 hover:border-white/10 cursor-pointer"
                        >
                            {/* Image placeholder */}
                            <div
                                className="w-full h-48 flex items-center justify-center relative overflow-hidden"
                                style={{
                                    background: `linear-gradient(135deg, #0a0a0a, #111)`,
                                }}
                            >
                                <div
                                    className="absolute inset-0 opacity-5"
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(rgba(10,132,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(10,132,255,0.5) 1px, transparent 1px)",
                                        backgroundSize: "30px 30px",
                                    }}
                                />
                                <div className="text-center z-10">
                                    <div
                                        className="w-16 h-16 rounded-full border-2 mx-auto mb-3 flex items-center justify-center"
                                        style={{
                                            borderColor: product.color,
                                            background: `${product.color}15`,
                                        }}
                                    >
                                        <div
                                            className="w-6 h-6 rounded-full"
                                            style={{ background: product.color }}
                                        />
                                    </div>
                                    <span
                                        className="text-xs uppercase tracking-widest"
                                        style={{ color: product.color }}
                                    >
                                        {product.category}
                                    </span>
                                </div>
                                {/* Hover gradient overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: `linear-gradient(to bottom, ${product.color}08, transparent)`,
                                    }}
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-3">
                                    <h3
                                        className="text-white font-bold text-base tracking-wide"
                                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                                    >
                                        {product.name}
                                    </h3>
                                    <span
                                        className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                                        style={{ background: product.color }}
                                    />
                                </div>
                                <p className="text-white/50 text-sm leading-relaxed">
                                    {product.desc}
                                </p>
                                <div className="mt-5 flex items-center gap-2 text-xs font-medium group-hover:text-[#0A84FF] text-white/30 transition-colors duration-300">
                                    <span>Learn more</span>
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
