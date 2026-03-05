"use client";
import { motion } from "framer-motion";
import { FiTwitter, FiLinkedin, FiFacebook, FiYoutube } from "react-icons/fi";
import Link from "next/link";

const companyLinks = ["About", "Careers", "Blog", "Press", "Partners"];
const productLinks = ["Radar Systems", "Platforms", "Technology", "Software"];

export default function Footer() {
    return (
        <footer className="bg-[#080808] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    {/* Logo + Description */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 rounded-full border-2 border-[#0A84FF] flex items-center justify-center">
                                <div className="w-2.5 h-2.5 bg-[#0A84FF] rounded-full" />
                            </div>
                            <span
                                className="text-lg font-bold tracking-widest text-white"
                                style={{ fontFamily: "'Orbitron', sans-serif" }}
                            >
                                EFIQ
                            </span>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed">
                            Advanced engineering systems and intelligent software platforms
                            designed to solve complex real-world challenges.
                        </p>
                        <div className="flex gap-4 mt-6">
                            {[FiTwitter, FiLinkedin, FiFacebook, FiYoutube].map((Icon, i) => (
                                <Link
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#0A84FF] hover:border-[#0A84FF] transition-all duration-200"
                                >
                                    <Icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3
                            className="text-sm font-semibold text-white uppercase tracking-widest mb-5"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {companyLinks.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3
                            className="text-sm font-semibold text-white uppercase tracking-widest mb-5"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                            Products
                        </h3>
                        <ul className="space-y-3">
                            {productLinks.map((item) => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-white/50 text-sm hover:text-white transition-colors duration-200"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3
                            className="text-sm font-semibold text-white uppercase tracking-widest mb-5"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                            Stay Updated
                        </h3>
                        <p className="text-white/50 text-sm mb-4">
                            Get the latest news and updates from EFIQ Solutions.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#0A84FF]"
                            />
                            <button className="px-4 py-2 bg-[#22C55E] text-black text-sm font-semibold rounded-md hover:bg-[#16a34a] transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs">
                        © 2025 EFIQ Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                            (item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="text-white/30 text-xs hover:text-white/60 transition-colors"
                                >
                                    {item}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}
