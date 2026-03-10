"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiInstagram, FiLinkedin, FiX, FiYoutube, FiTwitter } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-24 bg-black relative overflow-hidden" style={{ fontFamily: "'Manrope', sans-serif" }}>
            {/* Mesh Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#0A84FF]/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#22C55E]/5 blur-[120px] rounded-full animate-pulse delay-700" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-[#0A84FF]/5 blur-[100px] rounded-full" />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#0A84FF] text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-6 font-semibold"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF] animate-ping" />
                        Get in Touch
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        DESIGNING THE<br />
                        <span className="text-[#0A84FF]">FUTURE OF SENSING</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
                    {/* Left Info Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 space-y-12"
                    >
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>Connectivity</h3>
                            <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-md">
                                Our engineering team operates at the intersection of electromagnetic theory and modern AI. Reach out to discuss complex integrations or bespoke radar arrays.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                { icon: FiMail, label: "For General Inquiry", value: "hello@efiqsolutions.com", color: "#0A84FF" },
                                { icon: FiMail, label: "For Support", value: "support@efiqsolutions.com", color: "#0A84FF" },
                                { icon: FiPhone, label: "Call Us", value: "+91 83003 80216", color: "#22C55E" },
                                { icon: FiMapPin, label: "Hub Location", value: "Innovation District, Silicon Valley, CA", color: "#0A84FF" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-5 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#0A84FF]/40 transition-all duration-300">
                                        <item.icon size={20} className="text-white group-hover:text-[#0A84FF] transition-colors" />
                                    </div>
                                    <div className="pt-1">
                                        <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">{item.label}</div>
                                        <div className="text-white font-medium group-hover:text-[#0A84FF] transition-colors">{item.value}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        {/* Social media links with icons 
                        Instagram , Linked in , X , Youtube
                        */}
                        <div className="flex gap-4">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="#"
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#0A84FF]/40 transition-all duration-300"
                            >
                                <FiInstagram size={20} className="text-white group-hover:text-[#0A84FF] transition-colors" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="#"
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#0A84FF]/40 transition-all duration-300"
                            >
                                <FiLinkedin size={20} className="text-white group-hover:text-[#0A84FF] transition-colors" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="#"
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#0A84FF]/40 transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                </svg>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                href="#"
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#0A84FF]/40 transition-all duration-300"
                            >
                                <FiYoutube size={20} className="text-white group-hover:text-[#0A84FF] transition-colors" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Form Column (Glassmorphism) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3"
                    >
                        <div className="relative group">
                            {/* Decorative Glow behind the form */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#0A84FF]/20 to-[#22C55E]/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

                            <div className="relative bg-[#0d0d0d]/80 backdrop-blur-2xl rounded-[2rem] border border-white/10 p-8 md:p-12 shadow-2xl">
                                <form onSubmit={handleSubmit} className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                className="peer w-full bg-transparent border-b-2 border-white/10 py-2 text-white outline-none focus:border-[#0A84FF] transition-colors placeholder-transparent"
                                                placeholder="Name"
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            />
                                            <label htmlFor="name" className="absolute left-0 -top-3.5 text-white/30 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#0A84FF] peer-focus:text-xs">
                                                Full Name
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                className="peer w-full bg-transparent border-b-2 border-white/10 py-2 text-white outline-none focus:border-[#0A84FF] transition-colors placeholder-transparent"
                                                placeholder="Email"
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />
                                            <label htmlFor="email" className="absolute left-0 -top-3.5 text-white/30 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#0A84FF] peer-focus:text-xs">
                                                Business Email
                                            </label>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="company"
                                            className="peer w-full bg-transparent border-b-2 border-white/10 py-2 text-white outline-none focus:border-[#0A84FF] transition-colors placeholder-transparent"
                                            placeholder="Company"
                                            value={form.company}
                                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                                        />
                                        <label htmlFor="company" className="absolute left-0 -top-3.5 text-white/30 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#0A84FF] peer-focus:text-xs">
                                            Company / Organization
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="peer w-full bg-transparent border-b-2 border-white/10 py-2 text-white outline-none focus:border-[#0A84FF] transition-colors placeholder-transparent"
                                            placeholder="Phone Number"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                        />
                                        <label htmlFor="phone" className="absolute left-0 -top-3.5 text-white/30 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#0A84FF] peer-focus:text-xs">
                                            Phone Number
                                        </label>
                                    </div>

                                    <div className="relative">
                                        <textarea
                                            id="message"
                                            rows={4}
                                            required
                                            className="peer w-full bg-transparent border-b-2 border-white/10 py-2 text-white outline-none focus:border-[#0A84FF] transition-colors placeholder-transparent resize-none"
                                            placeholder="Message"
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        />
                                        <label htmlFor="message" className="absolute left-0 -top-3.5 text-white/30 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#0A84FF] peer-focus:text-xs">
                                            Message
                                        </label>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="relative flex items-center pt-1 mt-0.5 cursor-pointer shrink-0">
                                            <input
                                                type="checkbox"
                                                id="privacy"
                                                required
                                                className="peer appearance-none w-4 h-4 rounded border border-white/20 bg-transparent checked:bg-[#0A84FF] checked:border-[#0A84FF] transition-colors cursor-pointer"
                                            />
                                            <FiCheck size={12} className="absolute inset-0 m-auto text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                                        </div>
                                        <label htmlFor="privacy" className="text-white/60 text-[13px] md:text-sm cursor-pointer select-none leading-relaxed">
                                            I'd like to receive more information about company. I understand and agree to the <a href="/PrivacyPolicy" className="text-[#0A84FF] hover:underline transition-all" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                                        </label>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        className="relative w-full overflow-hidden group/btn bg-white text-black font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300"
                                    >
                                        <div className="absolute inset-0 bg-[#0A84FF] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                        <span className="relative z-10 group-hover/btn:text-white transition-colors flex items-center gap-2">
                                            {submitted ? (
                                                <>Mission Received ✓</>
                                            ) : (
                                                <>
                                                    <FiSend size={18} />
                                                    INITIATE CONTACT
                                                </>
                                            )}
                                        </span>
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
