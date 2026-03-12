import Navbar from "@/components/Navbar";

export default function TermsAndConditions() {
    return (
        <div className="bg-[#2a2a2c] min-h-screen text-white font-sans selection:bg-primary selection:text-white flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-widest text-[#F1F1F1] uppercase" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        Terms and Conditions
                    </h1>

                    {/* Content Box */}
                    <div className="border border-secondary/80 rounded-[16px] p-8 md:p-10 lg:p-12 bg-[#333333] shadow-2xl">

                        <div className="space-y-8 text-sm md:text-base leading-relaxed text-[#D1D1D1]" style={{ fontFamily: "'Manrope', sans-serif" }}>

                            {/* Section 1 */}
                            <section>
                                <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-2 underline underline-offset-4 decoration-[1.5px]" style={{ fontFamily: "'Orbitron', sans-serif" }}>1. Introduction:</h2>
                                <p>
                                    Welcome to EFIQ Solutions. By accessing or using our website and services, you agree to be bound by these Terms & Conditions. Please read them carefully before using our platform.
                                </p>
                            </section>

                            {/* Section 2 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>2. Use of Website:</h2>
                                <p>
                                    You agree to use the website only for lawful purposes. You must not use the site in any way that causes, or may cause, damage or restrict availability or accessibility of the site.
                                </p>
                            </section>

                            {/* Section 3 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>3. Services:</h2>
                                <p>
                                    EFIQ Solutions provides technology services including but not limited to drone development, RC products, digital marketing, software development, and content creation. We reserve the right to modify or discontinue any service at any time without notice.
                                </p>
                            </section>

                            {/* Section 4 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>4. Intellectual Property:</h2>
                                <p>
                                    All content on this site, including logos, text, graphics, and software, is the property of EFIQ Solutions and protected by applicable copyright and trademark laws. Unauthorized use is prohibited.
                                </p>
                            </section>

                            {/* Section 5 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>5. User Conduct:</h2>
                                <p>
                                    You agree not to upload or share any content that is harmful, offensive, or violates any laws. EFIQ Solutions reserves the right to remove any content that breaches these terms.
                                </p>
                            </section>

                            {/* Section 6 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>6. Third-Party Links:</h2>
                                <p>
                                    Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of such sites.
                                </p>
                            </section>

                            {/* Section 7 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>7. Limitation of Liability:</h2>
                                <p>
                                    We are not liable for any damages arising from the use or inability to use this site or our services. All services are provided &quot;as is&quot; without any warranties.
                                </p>
                            </section>

                            {/* Section 8 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>8. Changes to Terms:</h2>
                                <p>
                                    EFIQ Solutions may update these Terms at any time. Continued use of the website means you accept the revised terms.
                                </p>
                            </section>

                            {/* Section 9 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>9. Governing Law:</h2>
                                <p>
                                    These Terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Paramakudi, Tamil Nadu.
                                </p>
                            </section>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
