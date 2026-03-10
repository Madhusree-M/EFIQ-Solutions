"use client";
import { motion } from "framer-motion";

const products = [
    {
        name: "SAAS Product",
        desc: "Cloud-based business and automation software.",
        imgSrc: "/assets/Products%20image/EFIQ%20One%20Logo%20White.png",
    },
    {
        name: "Robotics Systems",
        desc: "Advanced robotics and drone technology solutions.",
        imgSrc: "/assets/Products%20image/Drone.png",
    },
    {
        name: "Security Technology",
        desc: "Monitoring and surveillance technology systems.",
        imgSrc: "/assets/Products%20image/Command%20centre.png",
    },
    {
        name: "Engineering Prototypes",
        desc: "Custom-built experimental systems for innovation.",
        imgSrc: "/assets/Products%20image/submarine%20image%20Generated.png",
    },
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white tracking-widest uppercase"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        Products
                    </motion.h2>
                </div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group flex flex-col rounded-2xl overflow-hidden bg-[#1a1a1a]"
                        >
                            {/* Image Area */}
                            <div className="w-full aspect-square bg-[#111111] flex items-center justify-center p-2 overflow-hidden border-b border-white/5">
                                <img
                                    src={product.imgSrc}
                                    alt={product.name}
                                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                                />
                            </div>

                            {/* Content Area */}
                            <div className="p-6 flex-grow flex flex-col">
                                <h3
                                    className="text-white font-bold text-xl mb-3 tracking-wide"
                                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                                >
                                    {product.name}
                                </h3>
                                <p className="text-white/80 text-sm leading-relaxed font-light">
                                    {product.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
