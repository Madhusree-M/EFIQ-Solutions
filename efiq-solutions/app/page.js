import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import Mission from "@/components/sections/Mission";
import Markets from "@/components/sections/Markets";
import Stats from "@/components/sections/Stats";
import Products from "@/components/sections/Products";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <div className="h-[100dvh] min-h-[600px] flex flex-col overflow-hidden relative">
                    <Hero />
                    <ClientLogos />
                </div>
                <Mission />
                <Markets />
                <Stats />
                <Products />
                <Testimonials />
                <Contact />
                <FinalCTA />
            </main>
            <Footer />
        </>
    );
}
