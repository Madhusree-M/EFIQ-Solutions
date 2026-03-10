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
        logo: ({ active }) => <img src="/assets/Company-Logos/Hifi%20Hydrodip.png" alt="Hifi Hydrodip" className={`h-14 md:h-20 w-auto object-contain brightness-0 invert transition-all duration-300 ${active ? 'opacity-100 scale-110' : 'opacity-60 hover:opacity-100 hover:scale-105'}`} />,
        largeLogo: () => <img src="/assets/Company-Logos/Hifi%20Hydrodip.png" alt="Hifi Hydrodip" className="h-28 md:h-40 w-auto object-contain brightness-0 invert drop-shadow-2xl" />
    },
    {
        id: "milar",
        quote: "EFIQ worked with us as a technology partner, mainly supporting the hardware side of the project. Their technical knowledge and support played an important role in getting the system working",
        company: "Milar",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
        logo: ({ active }) => <img src="/assets/Company-Logos/Milar.png" alt="Milar" className={`h-14 md:h-20 w-auto object-contain brightness-0 invert transition-all duration-300 ${active ? 'opacity-100 scale-110' : 'opacity-60 hover:opacity-100 hover:scale-105'}`} />,
        largeLogo: () => <img src="/assets/Company-Logos/Milar.png" alt="Milar" className="h-28 md:h-40 w-auto object-contain brightness-0 invert drop-shadow-2xl" />
    },
    {
        id: "trinitas",
        quote: "Our product development involves several technical components, and the development work was managed effectively throughout the project. The system was built according to the required specifications, and the overall progress of the development remained consistent and well structured",
        company: "Trinitas",
        image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop",
        logo: ({ active }) => <img src="/assets/Company-Logos/Trinitas.png" alt="Trinitas" className={`h-14 md:h-20 w-auto object-contain brightness-0 invert transition-all duration-300 ${active ? 'opacity-100 scale-110' : 'opacity-60 hover:opacity-100 hover:scale-105'}`} />,
        largeLogo: () => <img src="/assets/Company-Logos/Trinitas.png" alt="Trinitas" className="h-28 md:h-40 w-auto object-contain brightness-0 invert drop-shadow-2xl" />
    },
    {
        id: "buzzkins",
        quote: "The software solution developed based on our idea works well for our users. The system was built according to our requirements and performs exactly the way we expected.",
        company: "Buzzkins",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        logo: ({ active }) => <img src="/assets/Company-Logos/Buzzkins.png" alt="Buzzkins" className={`h-14 md:h-30 w-auto object-contain brightness-0 invert transition-all duration-300 ${active ? 'opacity-100 scale-110' : 'opacity-60 hover:opacity-100 hover:scale-105'}`} />,
        largeLogo: () => <img src="/assets/Company-Logos/Buzzkins.png" alt="Buzzkins" className="h-28 md:h-40 w-auto object-contain brightness-0 invert drop-shadow-2xl" />
    },
    {
        id: "ias",
        quote: "We have worked together on multiple projects, and the technical execution has always been handled with professionalism and clarity. The team ensured that all deliverables were completed according to the project requirements and timelines, showing strong commitment and technical expertise.",
        company: "IAS Maritime models",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
        logo: ({ active }) => <img src="/assets/Company-Logos/Astredge.png" alt="Astredge" className={`h-14 md:h-20 w-auto object-contain brightness-0 invert transition-all duration-300 ${active ? 'opacity-100 scale-110' : 'opacity-60 hover:opacity-100 hover:scale-105'}`} />,
        largeLogo: () => <img src="/assets/Company-Logos/Astredge.png" alt="Astredge" className="h-28 md:h-40 w-auto object-contain brightness-0 invert drop-shadow-2xl" />
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
        <section id="testimonials" className="py-24 bg-black text-[#ececf1]" style={{ fontFamily: "'Manrope', sans-serif" }}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-14 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-4xl font-bold text-white tracking-widest uppercase"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        <span className="text-white/50 tracking-normal text-2xl md:text-3xl">TRUSTED BY </span>
                        <br />THE MOST INNOVATIVE TEAMS
                    </motion.h2>
                </div>

                <div className="max-w-[1040px] mx-auto">

                    {/* Main Card */}
                    <div className="rounded-2xl overflow-hidden bg-[#16181d] border border-white/5 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.5)]">

                        {/* Image and Quote Section */}
                        <div className="relative h-[300px] md:h-[340px] lg:h-[380px] bg-black overflow-hidden flex flex-col justify-end p-6 md:p-10">
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
                            <div className="absolute top-4 left-4 z-20">
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

                            {/* Quote container */}
                            <div className="relative z-20 w-full mt-20 md:mt-24">
                                <div className="w-full max-w-[90%] md:max-w-[85%] pr-10 pb-2">
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
                            </div>
                        </div>

                        {/* Tabs / Text Navigation Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-1 px-4 md:px-8 py-4 bg-[#1f2128]">
                            {testimonials.map((t) => (
                                <button
                                    key={t.id}
                                    onClick={() => setActiveId(t.id)}
                                    className={`
                                    flex items-center justify-center px-4 py-2 rounded-lg transition-all duration-300 flex-1 min-w-[120px]
                                    ${activeId === t.id
                                            ? 'bg-black text-white shadow-inner border border-white/10'
                                            : 'bg-transparent text-white/40 hover:text-white hover:bg-white/5'}
                                `}
                                >
                                    <span className={`text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors ${activeId === t.id ? 'text-white' : ''}`}>
                                        {t.company}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}