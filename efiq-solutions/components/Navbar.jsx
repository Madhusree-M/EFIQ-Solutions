"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown, FiMessageCircle } from "react-icons/fi";
import Image from "next/image";
import EfiqLogo from "./EfiqLogo";

const solutionItems = [
    { label: "Engineering Solutions", src: "/assets/Solutions image/Engineering solutions.jpg" },
    { label: "Robotics & Autonomous Systems", src: "/assets/Solutions image/robotics.jpg" },
    { label: "Research & Innovation", src: "/assets/Solutions image/Research and Analysis.jpg" },
    { label: "Custom Technology Development", src: "/assets/Solutions image/Custom engineering.jpg" },
    { label: "Others", src: "/assets/Solutions image/Others.jpg" },
];

const companyLinks = [
    { label: "About Us", href: "/about_efiqsolutions" },
    { label: "Careers", href: "/career_efiqsolutions" },
    { label: "Newsletter", href: "/newsletter_efiqsolutions" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);
    const [showCompanyMenu, setShowCompanyMenu] = useState(false);
    const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
    const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
        setMobileSolutionsOpen(false);
        setMobileCompanyOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`py-3 fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-black/80 backdrop-blur-md border-b border-white/5 shadow-2xl"
                : "bg-black"
                }`}
        >
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-6 py-2">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group z-50" onClick={closeMenu}>
                    <div className="w-24 md:w-32 h-10 md:h-12 flex items-center justify-center">
                        <EfiqLogo phase="navbar" />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center justify-end gap-8">
                    {/* Solutions Dropdown */}
                    <div
                        className="group"
                        onMouseEnter={() => setShowSolutionsMenu(true)}
                        onMouseLeave={() => setShowSolutionsMenu(false)}
                    >
                        <button className="text-white hover:text-secondary transition-colors duration-200 tracking-wide flex items-center gap-1 py-4">
                            Solutions
                            <svg className={`w-4 h-4 transition-transform duration-200 ${showSolutionsMenu ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
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
                                        {solutionItems.map((item) => (
                                            <div key={item.label} className="bg-white/5 rounded-xl p-2.5 flex flex-col items-center w-[160px] group/card hover:bg-white/10 transition-colors border border-white/5 hover:border-white/20">
                                                <div className="relative w-full h-[120px] rounded-lg overflow-hidden">
                                                    <Image
                                                        src={item.src}
                                                        alt={item.label}
                                                        fill
                                                        sizes="160px"
                                                        className="object-cover opacity-60 group-hover/card:opacity-100 transition-opacity duration-300"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-3 z-10">
                                                        <span className="text-white font-bold text-sm text-center leading-tight">{item.label}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/#products" className="text-white hover:text-secondary transition-colors duration-200 tracking-wide">
                        Products
                    </Link>

                    {/* Company Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setShowCompanyMenu(true)}
                        onMouseLeave={() => setShowCompanyMenu(false)}
                    >
                        <button className="text-white hover:text-secondary transition-colors duration-200 tracking-wide flex items-center gap-1 py-4">
                            Company
                            <svg className={`w-4 h-4 transition-transform duration-200 ${showCompanyMenu ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
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
                                        {companyLinks.map((item) => (
                                            <Link key={item.label} href={item.href} className="px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/#contact" className="text-white hover:text-secondary transition-colors duration-200 tracking-wide">
                        Contact
                    </Link>

                    {/* CTA Button */}
                    <a
                        href="https://wa.me/918300380216"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 bg-secondary hover:bg-[#16a34a] text-black text-md font-bold rounded-md transition-all duration-200 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] whitespace-nowrap"
                    >
                        Talk to Expert
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden text-white text-2xl z-50 p-1 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={menuOpen ? "close" : "open"}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="block"
                        >
                            {menuOpen ? <FiX /> : <FiMenu />}
                        </motion.span>
                    </AnimatePresence>
                </button>
            </div>

            {/* ── Mobile Menu ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="lg:hidden absolute top-full left-0 w-full shadow-2xl overflow-y-auto max-h-[85vh]"
                        style={{
                            background: "linear-gradient(180deg, #0a0a0a 0%, #111111 100%)",
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                        }}
                    >
                        <div className="px-5 py-6 flex flex-col gap-1">

                            {/* ── Solutions Accordion ── */}
                            <div className="rounded-xl overflow-hidden">
                                <button
                                    className="w-full flex items-center justify-between px-4 py-3.5 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-base font-medium tracking-wide"
                                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                                >
                                    <span>Solutions</span>
                                    <FiChevronDown
                                        className={`w-4 h-4 transition-transform duration-300 ${mobileSolutionsOpen ? "rotate-180 text-secondary" : "text-white/50"}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {mobileSolutionsOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-1 px-2 pb-3">
                                                {solutionItems.map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        href="/#solutions"
                                                        onClick={closeMenu}
                                                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors group"
                                                    >
                                                        <div className="relative w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                                                            <Image
                                                                src={item.src}
                                                                alt={item.label}
                                                                fill
                                                                sizes="36px"
                                                                className="object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                                                            />
                                                        </div>
                                                        <span className="text-white/70 group-hover:text-white text-sm transition-colors">{item.label}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="h-px bg-white/5 my-1 mx-4" />

                            {/* ── Products ── */}
                            <Link
                                href="/#products"
                                onClick={closeMenu}
                                className="flex items-center px-4 py-3.5 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-base font-medium tracking-wide"
                            >
                                Products
                            </Link>

                            <div className="h-px bg-white/5 my-1 mx-4" />

                            {/* ── Company Accordion ── */}
                            <div className="rounded-xl overflow-hidden">
                                <button
                                    className="w-full flex items-center justify-between px-4 py-3.5 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-base font-medium tracking-wide"
                                    onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                                >
                                    <span>Company</span>
                                    <FiChevronDown
                                        className={`w-4 h-4 transition-transform duration-300 ${mobileCompanyOpen ? "rotate-180 text-secondary" : "text-white/50"}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {mobileCompanyOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="flex flex-col gap-1 px-2 pb-3">
                                                {companyLinks.map((item) => (
                                                    <Link
                                                        key={item.label}
                                                        href={item.href}
                                                        onClick={closeMenu}
                                                        className="flex items-center px-4 py-2.5 rounded-lg hover:bg-white/5 text-white/70 hover:text-white text-sm transition-colors"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="h-px bg-white/5 my-1 mx-4" />

                            {/* ── Contact ── */}
                            <Link
                                href="/#contact"
                                onClick={closeMenu}
                                className="flex items-center px-4 py-3.5 text-white/90 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-base font-medium tracking-wide"
                            >
                                Contact
                            </Link>

                            {/* ── WhatsApp CTA ── */}
                            <div className="mt-4 px-1">
                                <a
                                    href="https://wa.me/918300380216"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeMenu}
                                    className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-secondary hover:bg-[#16a34a] text-black font-bold rounded-xl transition-all duration-200 active:scale-95 text-base shadow-[0_0_24px_rgba(34,197,94,0.25)]"
                                >
                                    <FiMessageCircle className="w-5 h-5" />
                                    Talk to an Expert
                                </a>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
