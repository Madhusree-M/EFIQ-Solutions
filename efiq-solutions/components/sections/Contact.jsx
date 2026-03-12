"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiInstagram, FiLinkedin, FiX, FiYoutube, FiTwitter } from "react-icons/fi";
import { useState } from "react";

/* ─── Privacy Policy Modal ──────────────────────────────────── */
function PrivacyPolicyModal({ onClose }) {
    return (
        <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/75 backdrop-blur-sm px-4"
            onClick={onClose}
        >
            <div
                className="relative bg-[#1a1a1a] rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl border border-[#0A84FF]/50"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-8 pt-7 pb-4 border-b border-white/10 shrink-0">
                    <h2 className="text-xl font-bold text-white" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        Privacy Policy
                    </h2>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors text-sm font-medium"
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Body */}
                <div className="overflow-y-auto px-8 py-6 space-y-6 text-[15px] leading-relaxed text-[#c8c8c8] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-track]:bg-transparent" style={{ fontFamily: "'Manrope', sans-serif" }}>
                    <p>At EFIQ Solutions, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.</p>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">1. Overview:</h3>
                        <p>At EFIQ Solutions, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">2. Information We Collect:</h3>
                        <p><span className="text-white font-semibold">Personal Info:</span> Name, email, phone number, company details, etc., voluntarily provided via forms or direct contact.</p>
                        <p className="mt-2"><span className="text-white font-semibold">Usage Data:</span> Pages visited, IP address, device info, time spent, etc.</p>
                        <p className="mt-2"><span className="text-white font-semibold">Uploaded Content:</span> Temporarily stored content used for preview or project purposes (e.g., videos, documents, or creative assets).</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">3. How We Use Your Information:</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>To provide and improve our services</li>
                            <li>To contact you regarding inquiries or projects</li>
                            <li>For internal record keeping and analytics</li>
                            <li>To comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">4. Data Retention:</h3>
                        <p>We retain user data only for as long as necessary to provide our services. For services like file uploads in contact page/Mocksify, uploaded files are stored temporarily unless explicitly saved.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">5. Cookies:</h3>
                        <p>We may use cookies to enhance user experience and gather analytics. You can modify your browser settings to disable cookies if you prefer.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">6. Sharing of Information:</h3>
                        <p>We do not sell or rent personal data to third parties. Data may be shared with trusted partners for service delivery, bound by confidentiality agreements.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">7. Data Security:</h3>
                        <p>We implement reasonable physical, digital, and managerial procedures to safeguard your data.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">8. Your Rights:</h3>
                        <p>You have the right to request access, correction, or deletion of your personal data by contacting us.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">9. Updates to Policy:</h3>
                        <p>This Privacy Policy may be updated periodically. Continued use of the site constitutes acceptance of the changes.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">10. Contact:</h3>
                        <p>If you have questions about this policy, contact us at: <a href="mailto:support@efiqsolutions.com" className="text-primary hover:underline font-medium">support@efiqsolutions.com</a></p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        try {
            const res = await fetch("https://formsubmit.co/ajax/hello@efiqsolutions.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    company: form.company,
                    phone: form.phone,
                    message: form.message,
                    _subject: `Contact Inquiry from ${form.name}`,
                    _captcha: "false",
                }),
            });

            if (res.ok) {
                setSubmitted(true);
                setForm({ name: "", email: "", company: "", phone: "", message: "" });
                setTimeout(() => setSubmitted(false), 4000);
            } else {
                setError(true);
                setTimeout(() => setError(false), 4000);
            }
        } catch {
            setError(true);
            setTimeout(() => setError(false), 4000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        {showPrivacy && <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />}
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
                                { icon: FiMail, label: "For General Inquiry", value: "hello@efiqsolutions.com", color: "#0A84FF", href: "https://mail.google.com/mail/?view=cm&fs=1&to=hello@efiqsolutions.com" },
                                { icon: FiMail, label: "For Support", value: "support@efiqsolutions.com", color: "#0A84FF", href: "https://mail.google.com/mail/?view=cm&fs=1&to=support@efiqsolutions.com" },
                                { icon: FiPhone, label: "Call Us", value: "+91 83003 80216", color: "#22C55E", href: "tel:+918300380216" },
                                { icon: FiMapPin, label: "Hub Location", value: "7/210 - 1, Yellow City, Paramakudi. Tamil Nadu, 623701.", color: "#0A84FF", href: "https://www.google.com/maps/search/?api=1&query=7/210-1,+Yellow+City,+Paramakudi,+Tamil+Nadu+623701" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    className="flex items-start gap-5 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#0A84FF]/40 transition-all duration-300">
                                        <item.icon size={20} className="text-white group-hover:text-[#0A84FF] transition-colors" />
                                    </div>
                                    <a 
                                        href={item.href}
                                        target={item.href.startsWith('http') ? "_blank" : undefined}
                                        rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                                        className="pt-1 block focus:outline-none"
                                    >
                                        <div className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-1">{item.label}</div>
                                        <div className="text-white font-medium group-hover:text-[#0A84FF] transition-colors">{item.value}</div>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                        {/* Social media links with icons 
                        Instagram , Linked in , X , Youtube
                        */}
                        <div className="flex gap-4">
                            {[
                                { icon: FiLinkedin, name: "LinkedIn", href: "https://www.linkedin.com/company/efiqsolutions/" },
                                { icon: FiInstagram, name: "Instagram", href: "https://www.instagram.com/efiq_solutions/" },
                                { icon: FiYoutube, name: "YouTube", href: "https://www.youtube.com/@EFIQ_Solutions" },
                                {
                                    icon: () => (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                        </svg>
                                    ),
                                    name: "X",
                                    href: "https://x.com/EFIQ_Solutions/"
                                }
                            ].map((social, idx) => (
                                <div key={idx} className="relative group/social">
                                    <motion.a
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover/social:border-[#0A84FF]/40 group-hover/social:shadow-[0_0_15px_rgba(10,132,255,0.2)]"
                                    >
                                        {typeof social.icon === 'function' ? <social.icon /> : <social.icon size={20} className="text-white group-hover/social:text-[#0A84FF] transition-colors" />}
                                    </motion.a>

                                    {/* Tooltip */}
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-[11px] font-bold rounded shadow-lg opacity-0 group-hover/social:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                                        {social.name}
                                        {/* Tooltip arrow */}
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-l-4 border-l-transparent border-r-4 border-r-transparent border-bottom-4 border-bottom-white"></div>
                                    </div>
                                </div>
                            ))}
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
                                            I&apos;d like to receive more information about company. I understand and agree to the <br></br> <button type="button" onClick={() => setShowPrivacy(true)} className="text-[#0A84FF] hover:underline transition-all font-medium">Privacy Policy</button>
                                        </label>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={loading}
                                        whileHover={{ scale: loading ? 1 : 1.01 }}
                                        whileTap={{ scale: loading ? 1 : 0.99 }}
                                        className="relative w-full overflow-hidden group/btn bg-white text-black font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <div className="absolute inset-0 bg-[#0A84FF] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                        <span className="relative z-10 group-hover/btn:text-white transition-colors flex items-center gap-2">
                                            {submitted ? (
                                                <>Sent successfully</>
                                            ) : error ? (
                                                <>Failed – Try Again</>
                                            ) : loading ? (
                                                <>Sending…</>
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
        </>
    );
}