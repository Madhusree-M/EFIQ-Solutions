"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCoffee } from "react-icons/fi";

const testimonials = [
    {
        id: "hifi",
        quote: "They built our developed custom software for our operations. The solution worked exactly as we expected and made a big difference in our day-to-day work.",
        company: "Hifi Hydrodip and chrome",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",
        linkText: "Read the story",
        logo: () => <span className="font-bold tracking-wider text-xs lg:text-sm text-center">HIFI HYDRODIP</span>,
        largeLogo: () => <span className="font-bold tracking-wider text-3xl text-white drop-shadow-lg">Hifi Hydrodip and chrome</span>
    },
    {
        id: "milar",
        quote: "EFIQ worked with us as a technology partner, mainly supporting the hardware side of the project. Their technical knowledge and support played an important role in getting the system working",
        company: "Milar",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
        linkText: "Read the story",
        logo: () => <span className="font-bold tracking-[0.2em] text-xs lg:text-sm">MILAR</span>,
        largeLogo: () => <span className="font-bold tracking-[0.2em] text-3xl text-white drop-shadow-lg">Milar</span>
    },
    {
        id: "trinitas",
        quote: "Our product development involves several technical components, and the technology partnership has been valuable in handling the technical side of the system.",
        company: "Trinitas",
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop",
        linkText: "Read the story",
        logo: () => <span className="font-bold tracking-[0.2em] text-xs lg:text-sm">TRINITAS</span>,
        largeLogo: () => <span className="font-bold tracking-tight text-3xl text-white drop-shadow-lg">Trinitas</span>
    },
    {
        id: "buzzkins",
        quote: "The software solution developed based on our idea works well for our users. The system was built according to our requirements and performs exactly the way we expected.",
        company: "Buzzkins",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        linkText: "Read the story",
        logo: () => <span className="font-bold tracking-[0.2em] text-xs lg:text-sm">BUZZKINS</span>,
        largeLogo: () => <span className="font-bold tracking-tight text-3xl text-white drop-shadow-lg">Buzzkins</span>
    },
    {
        id: "ias",
        quote: "They led the hardware R&D for our RC-based products, taking the development from initial concept to a functional system.",
        company: "IAS Maritime models",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        linkText: "Read the story",
        logo: () => <span className="font-bold tracking-wider text-[10px] lg:text-xs text-center leading-tight">IAS MARITIME<br />MODELS</span>,
        largeLogo: () => <span className="font-bold tracking-tight text-2xl lg:text-3xl text-white drop-shadow-lg">IAS Maritime models</span>
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
                    <div className="relative h-[180px] md:h-[220px] lg:h-[240px] bg-black overflow-hidden flex flex-col justify-end p-6 md:p-10">
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

                        {/* Quote and Link container */}
                        <div className="relative z-20 w-full mt-28 md:mt-36">
                            <div className="w-full max-w-[90%] md:max-w-[85%] pr-20 md:pr-32 pb-2">
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={activeTestimonial.id}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-base md:text-xl font-medium leading-[1.4] text-white italic"
                                    >
                                        "{activeTestimonial.quote}"
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            <div className="absolute bottom-0 right-0">
                                <AnimatePresence mode="wait">
                                    <motion.a
                                        key={activeTestimonial.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        href="#"
                                        className="flex items-center gap-1.5 text-white/90 font-medium text-[11px] md:text-sm hover:text-white transition-colors group shrink-0"
                                    >
                                        {activeTestimonial.linkText}
                                        <FiArrowRight strokeWidth={2.5} size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </motion.a>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Tabs / Logos Bar */}
                    <div className="flex flex-wrap items-center gap-2 px-6 md:px-10 py-3 bg-[#1f2128]">
                        {testimonials.map((t) => (
                            <button
                                key={t.id}
                                onClick={() => setActiveId(t.id)}
                                className={`
                                    flex items-center justify-center px-4 py-1.5 rounded-lg transition-all duration-300 min-w-[100px] lg:min-w-[120px]
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