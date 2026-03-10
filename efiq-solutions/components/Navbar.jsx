"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import EfiqLogo from "./EfiqLogo";

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
    const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);
    const [showCompanyMenu, setShowCompanyMenu] = useState(false);

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
                    <div className="w-24 md:w-32 h-10 md:h-12 flex items-center justify-center">
                        <EfiqLogo phase="navbar" />
                    </div>
                </Link>

                <div className="hidden lg:flex items-center gap-8">
                    {/* Solutions Dropdown */}
                    <div
                        className="group"
                        onMouseEnter={() => setShowSolutionsMenu(true)}
                        onMouseLeave={() => setShowSolutionsMenu(false)}
                    >
                        <button className="text-white hover:text-[#22C55E] transition-colors duration-200 tracking-wide flex items-center gap-1 py-4">
                            Solutions
                            <svg className={`w-4 h-4 transition-transform duration-200 ${showSolutionsMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>

                        <AnimatePresence>
                            {showSolutionsMenu && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, x: "-50%" }}
                                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                                    exit={{ opacity: 0, y: 10, x: "-50%" }}
                                    transition={{ duration: 0.2 }}
                                    className="fixed top-[64px] left-1/2 pt-2 z-50 pointer-events-auto"
                                >
                                    <div className="bg-[#16181d] rounded-2xl p-4 shadow-2xl border border-white/10 flex gap-4 min-w-max">

                                        {/* Card 1 */}
                                        <div className="bg-white/5 rounded-xl p-2.5 flex flex-col items-center w-[160px] group/card hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20">
                                            <div className="relative w-full h-[120px] rounded-lg overflow-hidden">
                                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" alt="Engineering" className="object-cover w-full h-full opacity-60 group-hover/card:opacity-100 transition-opacity duration-300" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-3">
                                                    <span className="text-white font-bold text-sm text-center leading-tight">Engineering<br />Solutions</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card 2 */}
                                        <div className="bg-white/5 rounded-xl p-2.5 flex flex-col items-center w-[160px] group/card hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20">
                                            <div className="relative w-full h-[120px] rounded-lg overflow-hidden">
                                                <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" alt="Robotics" className="object-cover w-full h-full opacity-60 group-hover/card:opacity-100 transition-opacity duration-300" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-3">
                                                    <span className="text-white font-bold text-sm text-center leading-tight">Robotics &<br />Autonomous<br />Systems</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card 3 */}
                                        <div className="bg-white/5 rounded-xl p-2.5 flex flex-col items-center w-[160px] group/card hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20">
                                            <div className="relative w-full h-[120px] rounded-lg overflow-hidden">
                                                <div className="absolute inset-0 bg-purple-900/40 mix-blend-overlay z-10 hidden group-hover/card:block"></div>
                                                <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2036&auto=format&fit=crop" alt="Research" className="object-cover w-full h-full opacity-60 group-hover/card:opacity-100 transition-opacity duration-300" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-3 z-20">
                                                    <span className="text-white font-bold text-sm text-center leading-tight">Research &<br />Innovation</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card 4 */}
                                        <div className="bg-white/5 rounded-xl p-2.5 flex flex-col items-center w-[160px] group/card hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20">
                                            <div className="relative w-full h-[120px] rounded-lg overflow-hidden">
                                                <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" alt="Custom Dev" className="object-cover w-full h-full opacity-60 group-hover/card:opacity-100 transition-opacity duration-300" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-3">
                                                    <span className="text-white font-bold text-sm text-center leading-tight">Custom<br />Technology<br />Development</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card 5 - Others */}
                                        <div className="bg-white/5 rounded-xl p-2.5 flex flex-col items-center w-[160px] group/card hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20">
                                            <div className="relative w-full h-[120px] rounded-lg overflow-hidden bg-[#2a2a2e] flex items-center justify-center">
                                                <svg className="w-5 h-5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
                                                    <span className="text-white font-bold text-sm text-center">Others</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <Link href="#products" className="text-white hover:text-[#22C55E] transition-colors duration-200 tracking-wide">
                        Products
                    </Link>

                    {/* Company Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setShowCompanyMenu(true)}
                        onMouseLeave={() => setShowCompanyMenu(false)}
                    >
                        <button className="text-white hover:text-[#22C55E] transition-colors duration-200 tracking-wide flex items-center gap-1 py-4">
                            Company
                            <svg className={`w-4 h-4 transition-transform duration-200 ${showCompanyMenu ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>

                        <AnimatePresence>
                            {showCompanyMenu && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-[64px] left-0 pt-2 z-50 w-48"
                                >
                                    <div className="bg-[#16181d] rounded-xl p-2 shadow-2xl border border-white/10 flex flex-col overflow-hidden">
                                        <Link href="/about" className="px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all">About Us</Link>
                                        <Link href="#careers" className="px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all">Careers</Link>
                                        <Link href="#newsletter" className="px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all">Newsletter</Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="#contact" className="text-white hover:text-[#22C55E] transition-colors duration-200 tracking-wide">
                        Contact
                    </Link>
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
