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

            <div className="flex justify-between items-center w-full px-6 md:px-12 lg:px-20 py-2">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group z-50">
                    <img src="/assets/logo.png" alt="Logo" className="w-16 md:w-20 h-16 md:h-20 object-contain" />
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    <select className="bg-transparent border-none text-white outline-none cursor-pointer">
                        <option value="" className="bg-black">Solutions</option>
                        <option value="" className="bg-black">Our Solutions</option>
                    </select>
                    <select className="bg-transparent border-none text-white outline-none cursor-pointer">
                        <option value="" className="bg-black">Products</option>
                        <option value="" className="bg-black">Our Products</option>
                    </select>
                    <Link href="#insights" className="text-white hover:text-white transition-colors duration-200 tracking-wide">
                        Insights
                    </Link>
                    <select className="bg-transparent border-none text-white outline-none cursor-pointer">
                        <option value="" className="bg-black">Company</option>
                        <option value="" className="bg-black">Our Company</option>
                    </select>
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <Link
                        href="#contact"
                        className="px-5 py-2 bg-[#22C55E] hover:bg-[#16a34a] text-black text-md font-bold rounded-md transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] whitespace-nowrap"
                    >
                        TALK TO EXPERT
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden text-white text-2xl z-50 pr-2"
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
                        className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10 absolute top-full left-0 w-full shadow-2xl overflow-hidden"
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
