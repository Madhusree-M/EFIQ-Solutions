"use client";

export default function FinalCTA() {
    return (
        <section className="py-24 bg-black flex justify-center items-center">
            {/* The main card container */}
            <div className="w-full max-w-7xl mx-auto px-6">
                <div className="bg-[#121212] rounded-2xl py-16 px-8 md:px-16 flex flex-col items-center text-center">

                    {/* Header */}
                    <h2
                        className="text-2xl md:text-5xl font-bold text-white mb-6 tracking-wide"
                        style={{ fontFamily: "'Orbitron', sans-serif" }}
                    >
                        Ready to Transform your Business?
                    </h2>

                    {/* Subtitle */}
                    <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-3xl mb-12">
                        Partner with EFIQ Solutions and be part of a network driving innovation across engineering, software, and emerging technologies.
                    </p>

                    {/* CTA Button */}
                    <a
                        href="https://wa.me/918300380216"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-[#1f1f1f] text-white text-sm font-semibold rounded-lg border-2 border-[#16a34a] hover:bg-[#16a34a] transition-colors duration-300"
                    >
                        Start now
                    </a>

                </div>
            </div>
        </section>
    );
}
