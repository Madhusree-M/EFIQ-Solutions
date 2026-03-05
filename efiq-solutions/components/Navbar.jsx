"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Products", href: "#products" },
    { label: "Success Stories", href: "#success-stories" },
    { label: "Insights", href: "#insights" },
    { label: "Company", href: "#company" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-black/80 backdrop-blur-md border-b border-white/5 shadow-2xl"
                : "bg-transparent"
                }`}
        >

            <div className="flex justify-between items-center gap-8 w-full">
                <div className="w-full px-20 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#home" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-full border-2 border-[#0A84FF] flex items-center justify-center">
                            <div className="w-3 h-3 bg-[#0A84FF] rounded-full" />
                        </div>
                        <span
                            className="text-xl font-bold tracking-widest text-white"
                            style={{ fontFamily: "'Orbitron', sans-serif" }}
                        >
                            EFIQ
                        </span>
                    </Link>

                    <div className="flex items-center gap-8">
                        <select className="bg-transparent border-none text-white">
                            <option value="">Solutions</option>
                            <option value="">Our Solutions</option>
                        </select>
                        <select className="bg-transparent border-none text-white">
                            <option value="">Products</option>
                            <option value="">Our Products</option>
                        </select>
                        <Link href="#insights" className="text-white hover:text-white transition-colors duration-200 tracking-wide">
                            Insights
                        </Link>
                        <select className="bg-transparent border-none text-white">
                            <option value="">Company</option>
                            <option value="">Our Company</option>
                        </select>
                    </div>
                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="px-5 py-2 bg-[#22C55E] hover:bg-[#16a34a] text-black text-md font-bold rounded-md transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                        >
                            TALK TO EXPERT
                        </Link>
                    </div>
                </div>


                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="text-white/80 hover:text-white text-sm tracking-wide block py-1"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="#contact"
                                    onClick={() => setMenuOpen(false)}
                                    className="inline-block px-5 py-2 bg-[#22C55E] text-black text-sm font-semibold rounded-md mt-2"
                                >
                                    Get in Touch
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
