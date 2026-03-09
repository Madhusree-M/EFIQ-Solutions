"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCoffee } from "react-icons/fi";

const testimonials = [
    {
        id: "puma",
        quote: "There are so many exciting combinations that PUMA can create with Sanity. Now that we have a structure, it's infinitely scalable.",
        author: "Bettina Donmez",
        role: "E-Commerce Platform Development @ PUMA",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",
        linkText: "Read the PUMA story",
        logo: () => (
            <div className="flex items-center gap-1.5">
                <span className="font-black italic text-lg lg:text-xl tracking-tighter">PUMA</span>
            </div>
        ),
        largeLogo: () => (
            <div className="text-white">
                <span className="font-black italic text-5xl tracking-tighter drop-shadow-lg">PUMA</span>
            </div>
        )
    },
    {
        id: "tecovas",
        quote: "Sanity has been a game-changer for our content velocity. We can deploy new campaigns in minutes rather than days.",
        author: "Jane Smith",
        role: "Marketing Director @ TECOVAS",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
        linkText: "Read the TECOVAS story",
        logo: () => <span className="font-bold tracking-[0.2em] text-xs lg:text-sm">TECOVAS</span>,
        largeLogo: () => <span className="font-bold tracking-[0.2em] text-3xl text-white drop-shadow-lg">TECOVAS</span>
    },
    {
        id: "morningbrew",
        quote: "Our editorial workflow is now lightning fast. The real-time collaboration features are essential for our daily newsletter operations.",
        author: "Alex Johnson",
        role: "Editorial Director @ Morning Brew",
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop",
        linkText: "Read the Morning Brew story",
        logo: () => (
            <div className="flex items-center gap-2">
                <FiCoffee className="w-4 h-4" />
                <span className="font-bold text-[10px] lg:text-xs tracking-tight uppercase">Morning Brew Inc.</span>
            </div>
        ),
        largeLogo: () => (
            <div className="flex items-center gap-3 text-white drop-shadow-lg">
                <FiCoffee className="w-10 h-10" />
                <span className="font-bold text-2xl tracking-tight uppercase">Morning Brew Inc.</span>
            </div>
        )
    },
    {
        id: "vercel",
        quote: "Integrating Sanity with Next.js provides the best developer experience and performance out of the box.",
        author: "Lee Robinson",
        role: "VP Developer Experience @ Vercel",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        linkText: "Read the Vercel story",
        logo: () => (
            <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2L24 22H0L12 2Z" /></svg>
                <span className="font-bold text-sm lg:text-base tracking-tight">Vercel</span>
            </div>
        ),
        largeLogo: () => (
            <div className="flex items-center gap-3 text-white drop-shadow-lg">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M12 2L24 22H0L12 2Z" /></svg>
                <span className="font-bold text-3xl tracking-tight">Vercel</span>
            </div>
        )
    }
];

export default function Testimonials() {
    const [activeId, setActiveId] = useState(testimonials[0].id);
    const activeTestimonial = testimonials.find(t => t.id === activeId);

    // Auto-slider functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveId(currentId => {
                const currentIndex = testimonials.findIndex(t => t.id === currentId);
                const nextIndex = (currentIndex + 1) % testimonials.length;
                return testimonials[nextIndex].id;
            });
        }, 3000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-black text-[#ececf1] py-16 px-4 md:px-8" style={{ fontFamily: "'Manrope', sans-serif" }}>
            <div className="max-w-[1040px] mx-auto">

                {/* Header */}
                <div className="flex flex-col gap-4 mb-10">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center text-[10px] sm:text-[11px] font-bold tracking-widest uppercase bg-[#1e1e24] rounded-full overflow-hidden border border-white/5 shadow-sm">
                            <span className="px-3 py-1.5 text-white/70" style={{ fontFamily: "'Orbitron', sans-serif" }}>Customers</span>
                            <span className="bg-[#00e5ff] text-black px-2.5 py-1.5 flex items-center justify-center">
                                <FiArrowRight size={14} strokeWidth={2.5} />
                            </span>
                        </div>
                        <a href="#" className="text-sm font-semibold hover:text-white transition-colors text-white/80">
                            Read more stories
                        </a>
                    </div>

                    <h2 className="text-4xl md:text-[2.75rem] leading-[1.1] font-medium tracking-tight text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        Trusted by the most innovative teams
                    </h2>

                    <p className="text-lg md:text-xl text-white/60">
                        Innovative brands build fast, scalable solutions with Sanity's Content Operating System
                    </p>
                </div>

                {/* Main Card */}
                <div className="rounded-2xl overflow-hidden bg-[#16181d] border border-white/5 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.5)]">

                    {/* Image and Quote Section */}
                    <div className="relative h-[200px] md:h-[240px] lg:h-[250px] bg-black overflow-hidden flex flex-col justify-end p-6 md:p-10">
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                key={activeTestimonial.id}
                                src={activeTestimonial.image}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 0.6, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
                            />
                        </AnimatePresence>

                        {/* Gradients */}
                        <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-[#16181d] via-[#16181d]/80 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>

                        {/* Large Logo Top Left */}
                        <div className="absolute top-8 left-8 z-20">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTestimonial.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <activeTestimonial.largeLogo />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Quote */}
                        <div className="relative z-20 w-full max-w-[90%] md:max-w-[85%]">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeTestimonial.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-lg md:text-2xl font-medium leading-[1.3] text-white italic"
                                >
                                    "{activeTestimonial.quote}"
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Author and Link Bar */}
                    <div className="relative z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 md:px-10 py-5 bg-[#1a1b20] border-b border-white/[0.03]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTestimonial.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col"
                            >
                                <span className="text-white/90 font-medium text-[13px] md:text-sm mb-0.5">{activeTestimonial.author}</span>
                                <span className="text-white/50 text-[12px] md:text-xs">{activeTestimonial.role}</span>
                            </motion.div>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.a
                                key={activeTestimonial.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                href="#"
                                className="flex items-center gap-2 text-white font-semibold text-xs md:text-sm hover:text-white/80 transition-colors group shrink-0"
                            >
                                {activeTestimonial.linkText}
                                <FiArrowRight strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        </AnimatePresence>
                    </div>

                    {/* Tabs / Logos Bar */}
                    <div className="flex flex-wrap items-center gap-2 px-6 md:px-10 py-5 bg-[#1f2128]">
                        {testimonials.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setActiveId(t.id)}
                                className={`
                                    flex items-center justify-center px-4 py-2.5 rounded-lg transition-all duration-300 min-w-[100px] lg:min-w-[120px]
                                    ${activeId === t.id
                                        ? 'bg-black text-white shadow-inner border border-white/10'
                                        : 'bg-transparent text-white/50 hover:text-white hover:bg-white/5'}
                                `}
                            >
                                <t.logo />
                            </button>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}