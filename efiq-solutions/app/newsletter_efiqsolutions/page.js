"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft, FiSend } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewsletterPage() {
    return (
        <main className="bg-black min-h-screen text-white selection:bg-secondary/30" style={{ fontFamily: "'Manrope', sans-serif" }}>
            <Navbar />

            <div className="pt-24 pb-24 px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
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
                        className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight uppercase"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        NEWSLETTER
                    </motion.h1>

                    {/* Content Section with Border */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-[32px] border border-gray-700 bg-[#16181d]/50 backdrop-blur-xl p-8 md:p-12 overflow-hidden shadow-[0_0_50px_rgba(10,132,255,0.1)]"
                    >
                        {/* Newsletter Content */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                    Stay Updated with EFIQ
                                </h2>
                                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                                    Subscribe to receive occasional updates about our latest projects, technology developments, and innovations.
                                </p>
                            </div>

                            {/* Form Area */}
                            <form className="space-y-8 mt-12" onSubmit={(e) => e.preventDefault()}>
                                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                    <label htmlFor="email" className="text-xl font-bold text-white whitespace-nowrap">
                                        Email :
                                    </label>
                                    <div className="relative w-full max-w-lg group">
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Enter your email id"
                                            className="w-full bg-black/40  border border-gray-700 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/20 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-center md:justify-start pt-4">
                                    <button
                                        type="submit"
                                        className="px-12 py-4 bg-secondary hover:bg-[#16a34a] text-black font-black text-xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] flex items-center justify-center min-w-[200px]"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>

            <Footer />
        </main>
    );
}
