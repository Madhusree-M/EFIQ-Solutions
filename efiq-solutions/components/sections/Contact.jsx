"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_0%_50%,_rgba(10,132,255,0.04),_transparent)]" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0A84FF]/20 bg-[#0A84FF]/5 text-[#0A84FF] text-xs tracking-widest uppercase mb-5"
                    >
                        Contact Us
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-black text-white"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        GET IN TOUCH WITH<br />
                        <span className="text-[#0A84FF]">OUR EXPERTISE</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Left info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <p className="text-white/50 text-sm leading-relaxed">
                            Whether you have questions about our radar and sensing solutions, need
                            a custom deployment, or want to explore partnership opportunities —
                            our team of experts is ready to help.
                        </p>

                        <div className="space-y-5">
                            {[
                                { icon: FiMail, label: "Email", value: "info@efiqsolutions.com" },
                                { icon: FiPhone, label: "Phone", value: "+1 (555) 000-0000" },
                                { icon: FiMapPin, label: "Office", value: "123 Tech Boulevard, Innovation District, CA 90210" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/10 border border-[#0A84FF]/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <item.icon size={16} className="text-[#0A84FF]" />
                                    </div>
                                    <div>
                                        <div className="text-white/40 text-xs mb-0.5">{item.label}</div>
                                        <div className="text-white text-sm">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-[#0d0d0d] rounded-2xl border border-white/5 p-8">
                            <h3
                                className="text-white font-bold text-base mb-6 tracking-wide"
                                style={{ fontFamily: "'Orbitron', sans-serif" }}
                            >
                                Get in Touch
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-white/40 text-xs mb-1.5 block">Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="w-full bg-white/5 border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#0A84FF] transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-white/40 text-xs mb-1.5 block">Email</label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            required
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="w-full bg-white/5 border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#0A84FF] transition-colors duration-200"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-white/40 text-xs mb-1.5 block">Company</label>
                                    <input
                                        type="text"
                                        placeholder="Your Company"
                                        value={form.company}
                                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                                        className="w-full bg-white/5 border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#0A84FF] transition-colors duration-200"
                                    />
                                </div>
                                <div>
                                    <label className="text-white/40 text-xs mb-1.5 block">Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us about your project..."
                                        required
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        className="w-full bg-white/5 border border-white/8 rounded-lg px-4 py-3 text-sm text-white placeholder-white/25 focus:outline-none focus:border-[#0A84FF] transition-colors duration-200 resize-none"
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-3.5 bg-[#22C55E] hover:bg-[#16a34a] text-black font-bold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
                                >
                                    {submitted ? (
                                        "Message Sent! ✓"
                                    ) : (
                                        <>
                                            <FiSend size={15} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
