import Navbar from "@/components/Navbar";

export default function PrivacyPolicy() {
    return (
        <div className="bg-[#222222] min-h-screen text-white font-sans selection:bg-[#0A84FF] selection:text-white flex flex-col">
            <Navbar />

            <main className="flex-1 pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">

                    {/* Header */}
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 tracking-widest text-[#F1F1F1]" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        Privacy Policy
                    </h1>

                    {/* Content Box */}
                    <div className="border border-[#22C55E]/60 rounded-[16px] p-8 md:p-10 lg:p-12 bg-[#2d2d2d] shadow-2xl">

                        <div className="space-y-8 text-[13px] md:text-[14px] leading-relaxed text-[#D1D1D1] pointer-events-none" style={{ fontFamily: "'Manrope', sans-serif" }}>

                            {/* Section 1 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>1. Overview:</h2>
                                <p>
                                    At EFIQ Solutions, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
                                </p>
                            </section>

                            {/* Section 2 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>2. Information We Collect:</h2>
                                <div className="space-y-2">
                                    <p>
                                        <span className="font-semibold text-white">Personal Info:</span> Name, email, phone number, company details, etc., voluntarily provided via forms or direct contact.
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Usage Data:</span> Pages visited, IP address, device info, time spent, etc.
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Uploaded Content:</span> Temporarily stored content used for preview or project purposes (e.g., videos, documents, or creative assets).
                                    </p>
                                </div>
                            </section>

                            {/* Section 3 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>3. How We Use Your Information:</h2>
                                <ul className="list-disc pl-5 space-y-2 marker:text-white">
                                    <li>To provide and improve our services</li>
                                    <li>To contact you regarding inquiries or projects</li>
                                    <li>For internal record keeping and analytics</li>
                                    <li>To comply with legal obligations</li>
                                </ul>
                            </section>

                            {/* Section 4 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>4. Data Retention:</h2>
                                <p>
                                    We retain user data only for as long as necessary to provide our services. For services like file uploads in contact page/Mocksify, uploaded files are stored temporarily unless explicitly saved.
                                </p>
                            </section>

                            {/* Section 5 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>5. Cookies:</h2>
                                <p>
                                    We may use cookies to enhance user experience and gather analytics. You can modify your browser settings to disable cookies if you prefer.
                                </p>
                            </section>

                            {/* Section 6 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>6. Sharing of Information:</h2>
                                <p>
                                    We do not sell or rent personal data to third parties. Data may be shared with trusted partners for service delivery, bound by confidentiality agreements.
                                </p>
                            </section>

                            {/* Section 7 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>7. Data Security:</h2>
                                <p>
                                    We implement reasonable physical, digital, and managerial procedures to safeguard your data.
                                </p>
                            </section>

                            {/* Section 8 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>8. Your Rights:</h2>
                                <p>
                                    You have the right to request access, correction, or deletion of your personal data by contacting us.
                                </p>
                            </section>

                            {/* Section 9 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>9. Updates to Policy:</h2>
                                <p>
                                    This Privacy Policy may be updated periodically. Continued use of the site constitutes acceptance of the changes.
                                </p>
                            </section>

                            {/* Section 10 */}
                            <section>
                                <h2 className="text-[16px] md:text-[18px] font-bold text-white mb-2 underline underline-offset-4 decoration-[1.5px] tracking-wide" style={{ fontFamily: "'Orbitron', sans-serif" }}>10. Contact:</h2>
                                <p>
                                    If you have questions about this policy, contact us at: <a href="mailto:support@efiqsolutions.com" className="text-[#0A84FF] hover:underline pointer-events-auto font-medium tracking-wide">support@efiqsolutions.com</a>
                                </p>
                            </section>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
