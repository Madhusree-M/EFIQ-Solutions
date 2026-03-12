"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EfiqLogo from "./EfiqLogo";

const StarburstIcon = () => (
    <div className="relative w-7 h-7 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
        <div className="absolute w-[22px] h-[22px] bg-tertiary rounded-[1px]" />
        <div className="absolute w-[22px] h-[22px] bg-tertiary rotate-[30deg] rounded-[1px]" />
        <div className="absolute w-[22px] h-[22px] bg-tertiary rotate-[60deg] rounded-[1px]" />
        <div className="absolute w-[15px] h-[15px] bg-white rounded-full z-10 flex items-center justify-center drop-shadow-sm">
            <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
        </div>
    </div>
);

/* ─── Privacy Policy Modal Content ─────────────────────────── */
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
                        <p>If you have questions about this policy, contact us at: <a href="mailto:hello@efiqsolutions.com" className="text-primary hover:underline font-medium">support@efiqsolutions.com</a></p>
                    </section>
                </div>
            </div>
        </div>
    );
}

/* ─── Terms & Conditions Modal Content ─────────────────────── */
function TermsModal({ onClose }) {
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
                        Terms and Conditions
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
                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">1. Introduction:</h3>
                        <p>Welcome to EFIQ Solutions. By accessing or using our website and services, you agree to be bound by these Terms &amp; Conditions. Please read them carefully before using our platform.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">2. Use of Website:</h3>
                        <p>You agree to use the website only for lawful purposes. You must not use the site in any way that causes, or may cause, damage or restrict availability or accessibility of the site.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">3. Services:</h3>
                        <p>EFIQ Solutions provides technology services including but not limited to drone development, RC products, digital marketing, software development, and content creation. We reserve the right to modify or discontinue any service at any time without notice.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">4. Intellectual Property:</h3>
                        <p>All content on this site, including logos, text, graphics, and software, is the property of EFIQ Solutions and protected by applicable copyright and trademark laws. Unauthorized use is prohibited.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">5. User Conduct:</h3>
                        <p>You agree not to upload or share any content that is harmful, offensive, or violates any laws. EFIQ Solutions reserves the right to remove any content that breaches these terms.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">6. Third-Party Links:</h3>
                        <p>Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of such sites.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">7. Limitation of Liability:</h3>
                        <p>We are not liable for any damages arising from the use or inability to use this site or our services. All services are provided &quot;as is&quot; without any warranties.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">8. Changes to Terms:</h3>
                        <p>EFIQ Solutions may update these Terms at any time. Continued use of the website means you accept the revised terms.</p>
                    </section>

                    <section>
                        <h3 className="text-white font-bold text-sm mb-2 pl-3 border-l-2 border-[#0A84FF]">9. Governing Law:</h3>
                        <p>These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Paramakudi, Tamil Nadu.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

/* ─── Footer ────────────────────────────────────────────────── */
export default function Footer() {
    const [openModal, setOpenModal] = useState(null); // null | "privacy" | "terms"

    return (
        <>
            {openModal === "privacy" && <PrivacyPolicyModal onClose={() => setOpenModal(null)} />}
            {openModal === "terms" && <TermsModal onClose={() => setOpenModal(null)} />}

            <footer className="bg-black pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

                        {/* Left: Logo and Tagline */}
                        <div className="md:col-span-5 lg:col-span-6 flex flex-col items-start justify-center">
                            <div className="w-56 md:w-64 h-20 md:h-24 mb-6">
                                <EfiqLogo phase="static" />
                            </div>
                            <p className="text-white text-md font-medium tracking-wide">
                                Your Tech and Digital Partner
                            </p>
                        </div>

                        {/* Middle: Other Links */}
                        <div className="md:col-span-4 lg:col-span-3 flex flex-col items-start md:items-center justify-center">
                            <div className="flex flex-col items-center">
                                <h3 className="text-white text-base font-bold mb-6">Other Links</h3>
                                <div className="flex items-center gap-6">
                                    <a href="https://web.efiqsolutions.com/" target="_blank" rel="noopener noreferrer">
                                        <Image
                                            src="/assets/EFIQ-SVG/EFIQ Logo SVG White.svg"
                                            alt="EFIQ Logo"
                                            width={180}
                                            height={60}
                                            className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                                        />
                                    </a>
                                    <a href="https://efiqone.com/" target="_blank" rel="noopener noreferrer">
                                        <Image
                                            src="/assets/EFIQONE-SVG/EFIQ one logo white.svg"
                                            alt="EFIQ One Logo"
                                            width={180}
                                            height={60}
                                            className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right: Company */}
                        <div className="md:col-span-3 lg:col-span-3 flex flex-col items-start md:items-end justify-center">
                            <div className="w-full flex flex-col items-start md:pl-8 lg:pl-16">
                                <h3 className="text-white text-base font-bold mb-4">Company</h3>
                                <ul className="space-y-2.5">
                                    {["About", "Contact", "Careers", "Newsletter"].map((link) => (
                                        <li key={link}>
                                            <Link
                                                href={link === "About" ? "/about_efiqsolutions" : link === "Contact" ? "/#contact" : link === "Careers" ? "/career_efiqsolutions" : link === "Newsletter" ? "/newsletter_efiqsolutions" : "#"}
                                                className="text-white/90 text-sm hover:text-secondary transition-colors font-medium"
                                            >
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="w-full h-[1.5px] bg-white/70 mb-8" />

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-white/80 text-xs md:text-sm font-medium tracking-wide">
                            © 2026 EFIQ Solutions. All Rights Reserved
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                            <button
                                onClick={() => setOpenModal("privacy")}
                                className="text-white/90 text-xs md:text-sm hover:text-primary transition-colors font-medium underline underline-offset-4 decoration-white/40 hover:decoration-primary"
                            >
                                Privacy Policy
                            </button>
                            <button
                                onClick={() => setOpenModal("terms")}
                                className="text-white/90 text-xs md:text-sm hover:text-primary transition-colors font-medium underline underline-offset-4 decoration-white/40 hover:decoration-primary"
                            >
                                Terms and Conditions
                            </button>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}
