"use client";
import Link from "next/link";
import Image from "next/image";
import EfiqLogo from "./EfiqLogo";

const StarburstIcon = () => (
    <div className="relative w-7 h-7 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
        <div className="absolute w-[22px] h-[22px] bg-[#E87A00] rounded-[1px]" />
        <div className="absolute w-[22px] h-[22px] bg-[#E87A00] rotate-[30deg] rounded-[1px]" />
        <div className="absolute w-[22px] h-[22px] bg-[#E87A00] rotate-[60deg] rounded-[1px]" />
        <div className="absolute w-[15px] h-[15px] bg-white rounded-full z-10 flex items-center justify-center drop-shadow-sm">
            <div className="w-1.5 h-1.5 bg-[#22C55E] rounded-full" />
        </div>
    </div>
);

export default function Footer() {
    return (
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

                                <a href="https://efiqsolutions.com/" target="_blank" rel="noopener noreferrer">
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
                                            href={link === "About" ? "/about" : link === "Careers" ? "/career_efiqsolutions" : link === "Newsletter" ? "/newsletter_efiqsolutions" : "#"}
                                            className="text-white/90 text-sm hover:text-[#22C55E] transition-colors font-medium"
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
                        {["Privacy Policy", "Terms and Conditions"].map((item) => (
                            <Link
                                key={item}
                                href={
                                    item === "Privacy Policy" ? "/PrivacyPolicy" :
                                        item === "Terms and Conditions" ? "/TermsAndConditions" :
                                            "#"
                                }
                                className="text-white/90 text-xs md:text-sm hover:text-[#0A84FF] transition-colors font-medium underline underline-offset-4 decoration-white/40 hover:decoration-[#0A84FF]"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}
