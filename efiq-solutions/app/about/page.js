"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EfiqLogo from "@/components/EfiqLogo";

export default function AboutPage() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-[#22C55E]/30" style={{ fontFamily: "'Manrope', sans-serif" }}>
            <Navbar />

            <div className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <Link
                            href="/"
                            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group text-sm font-medium"
                        >
                            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            Back
                        </Link>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-white mb-16 tracking-tight"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        ABOUT US
                    </motion.h1>

                    {/* Content Section with Border */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-[32px] border border-[#0A84FF]/30 bg-[#16181d]/50 backdrop-blur-xl p-8 md:p-16 overflow-hidden shadow-[0_0_50px_rgba(10,132,255,0.1)]"
                    >
                        {/* EFIQ Logo in Center */}
                        <div className="flex justify-center mb-16">
                            <div className="w-64 md:w-80 h-32 md:h-40 relative group">
                                <div className="absolute inset-0 bg-[#22C55E]/5 blur-3xl rounded-full group-hover:bg-[#22C55E]/10 transition-colors duration-500"></div>
                                <EfiqLogo phase="static" className="relative z-10" />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-8 text-white/80 leading-relaxed text-base md:text-lg font-medium">
                            <p>
                                EFIQ Solutions is a multidisciplinary company focused on developing advanced technology systems, delivering digital solutions, and supporting modern businesses with innovative services. Founded with the vision of turning ideas into practical solutions, EFIQ operates across engineering, software development, robotics, digital media, and international trade.
                            </p>

                            <p>
                                Our technology division focuses on engineering systems, robotics, drone technologies, and custom hardware development. We design and build intelligent systems, autonomous platforms, and specialized technology solutions that support research, product development, and real-world applications. Our work also includes developing software platforms and digital systems that enable organizations to build scalable and efficient solutions.
                            </p>

                            <p>
                                Alongside technology development, EFIQ Solutions provides digital services including social media management, creative content production, and video advertising solutions designed to help brands grow their online presence and communicate effectively with their audiences.
                            </p>

                            <p>
                                In addition, EFIQ Solutions also operates in import and export activities, enabling businesses to access international markets and specialized products through reliable trade support.
                            </p>

                            <p>
                                With a diverse team of engineers, developers, and creative professionals, EFIQ Solutions brings together technical expertise, innovation, and strategic thinking to support organizations across multiple industries.
                                Our mission is to deliver practical solutions, build meaningful technology, and support businesses through innovation, creativity, and global connectivity.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-16 flex justify-center">
                            <Link
                                href="/#contact"
                                className="px-10 py-4 bg-[#22C55E] hover:bg-[#16a34a] text-black font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] flex items-center gap-2 group"
                            >
                                CONTACT US
                                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Meta Info */}
                    <div className="mt-12 flex flex-col items-center gap-2 text-white/30 text-sm italic">
                        <span>About</span>
                        <span className="hover:text-white/50 transition-colors cursor-pointer">efiqsolutions.com/about_efiqsolutions</span>
                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
