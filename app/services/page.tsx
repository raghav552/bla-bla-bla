import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesPageHero from "@/components/ServicesPage/ServicesPageHero";
import ServicesGrid from "@/components/ServicesPage/ServicesGrid";
import ProcessSection from "@/components/ServicesPage/ProcessSection";
import ServicesFAQ from "@/components/ServicesPage/ServicesFAQ";
import WhyChooseWebGrowth from "@/components/ServicesPage/WhyChooseWebGrowth";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Services | WebGrowth",
  description: "Strategy-led web, app, SEO, and growth services designed to move your business forward.",
  openGraph: {
    title: "Services | WebGrowth",
    description: "Strategy-led web, app, SEO, and growth services designed to move your business forward.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | WebGrowth",
    description: "Strategy-led web, app, SEO, and growth services designed to move your business forward.",
  },
};

export default function ServicesPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F5F5F7",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 10%, rgba(245,197,80,0.16) 0%, transparent 35%), radial-gradient(ellipse at 80% 20%, rgba(200,210,255,0.14) 0%, transparent 40%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Navbar />

      <div style={{ position: "relative", zIndex: 1, paddingTop: "100px" }}>
        <ServicesPageHero />
        <ServicesGrid />
        <ProcessSection />
        <ServicesFAQ />
        <WhyChooseWebGrowth />
        <FinalCTA />
      </div>

      <Footer />
    </main>
  );
}