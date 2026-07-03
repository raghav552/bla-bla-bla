import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FanCards from "@/components/FanCards";
import ConversionPanel from "@/components/ConversionPanel";
import GrowthSystems from "@/components/GrowthSystems";
import ServicesSection from "@/components/Services/ServicesSection";
import WhyWebGrowth from "@/components/WhyWebGrowth/WhyWebGrowth";
import Results from "@/components/Results/Results";
import Footer from "@/components/Footer/Footer";
import FeaturedWork from "../components/FeaturedWork/FeaturedWork";
import FinalCTA from "@/components/FinalCTA/FinalCTA";


export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F5F5F7",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Warm radial glow behind hero — matches screenshot */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse at 30% 40%, rgba(245,197,80,0.18) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(200,210,255,0.16) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Navbar />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
       
        <FanCards />
        <ConversionPanel />
      </div>

      <GrowthSystems />
      <FeaturedWork />
      <ServicesSection />
      <WhyWebGrowth />     
      <Results /> 

      
  
      <FinalCTA />
      <Footer />
    </main>
  );
}
  