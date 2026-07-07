import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/AboutPage/AboutHero";
import StorySection from "@/components/AboutPage/StorySection";
import WhyChooseWebGrowth from "@/components/AboutPage/WhyChooseWebGrowth";
import ValuesSection from "@/components/AboutPage/ValuesSection";
import TeamCTA from "@/components/AboutPage/TeamCTA";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "About | WebGrowth",
  description: "Learn how WebGrowth partners with ambitious brands to build thoughtful digital experiences and growth systems.",
  openGraph: {
    title: "About | WebGrowth",
    description: "Learn how WebGrowth partners with ambitious brands to build thoughtful digital experiences and growth systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | WebGrowth",
    description: "Learn how WebGrowth partners with ambitious brands to build thoughtful digital experiences and growth systems.",
  },
};

export default function AboutPage() {
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
        <AboutHero />
        <StorySection />
        <WhyChooseWebGrowth />
        <ValuesSection />
        <TeamCTA />
        <FinalCTA />
      </div>

      <Footer />
    </main>
  );
}
