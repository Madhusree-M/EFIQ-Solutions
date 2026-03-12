import "./globals.css";
import AnimatedCursor from "@/components/AnimatedCursor";


export const metadata = {
    title: "EFIQ Solutions | Advanced Engineering & Technology",
    description:
        "EFIQ Solutions develops advanced engineering systems, intelligent software platforms, and innovative technology products designed to solve complex real-world challenges.",
    keywords:
        "EFIQ Solutions, advanced engineering, radar, sensing, AI, technology, defense, aviation",
    openGraph: {
        title: "EFIQ Solutions | Advanced Engineering & Technology",
        description:
            "Advanced engineering systems and intelligent software platforms for defense, aviation, maritime, and more.",
        url: "https://efiqsolutions.com",
        siteName: "EFIQ Solutions",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "EFIQ Solutions | Advanced Engineering & Technology",
        description:
            "Advanced engineering systems and intelligent software platforms.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

import Loader from "@/components/Loader";
import JellyfishCursor from "@/components/JellyfishCursor";

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Manrope:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-black text-white antialiased" style={{ fontFamily: "'Manrope', sans-serif", letterSpacing: '0.08em' }}>
                <Loader />
                <JellyfishCursor />
                {children}
            </body>
        </html>
    );
}
