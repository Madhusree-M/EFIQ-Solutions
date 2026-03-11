"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EfiqLogo from "@/components/EfiqLogo";

export default function CareerPage() {
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
                        className="text-5xl md:text-7xl font-black text-white mb-16 tracking-tight uppercase"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        CAREERS
                    </motion.h1>

                    {/* Content Section with Border */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-[32px] border border-[#0A84FF]/30 bg-[#16181d]/50 backdrop-blur-xl p-8 md:p-16 overflow-hidden shadow-[0_0_50px_rgba(10,132,255,0.1)]"
                    >
                        {/* EFIQ Logo in Center (Maybe not needed for careers if mirroring exactly, but screenshot shows a clean layout) */}
                        {/* Screenshot shows "CAREERS" then a box with text */}

                        {/* Text Content */}
                        <div className="space-y-12 text-white/80 leading-relaxed text-base md:text-xl font-medium">
                            <p>
                                We are always interested in connecting with passionate engineers, developers, and creative professionals who want to build meaningful technology and innovative solutions.
                            </p>

                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                                    OUR CULTURE
                                </h2>
                                <p>
                                    At EFIQ Solutions, we value curiosity, creativity, and strong technical thinking. Our work spans engineering systems, software development, robotics, digital media, and innovative product development.
                                </p>
                                <p>
                                    We believe great ideas come from people who enjoy solving complex problems and exploring new technologies.
                                </p>
                            </div>

                            <div className="pt-8">
                                <p className="text-xl md:text-2xl font-bold text-white">
                                    Send Your Resume at : <span className="text-[#22C55E]">admin@efiqsolutions.com</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
