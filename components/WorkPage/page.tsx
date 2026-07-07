import Navbar from "@/components/Navbar";
import WorkHero from "@/components/WorkPage/WorkHero";
import FeaturedCaseStudy from "@/components/WorkPage/FeaturedCaseStudy";
import CategoryFilter from "@/components/WorkPage/CategoryFilter";
import ProjectGrid from "@/components/WorkPage/ProjectGrid";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Footer from "@/components/Footer/Footer";

export default function WorkPage() {
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
        <WorkHero />
        <FeaturedCaseStudy />
        <CategoryFilter />
        <ProjectGrid />
      </div>

      <FinalCTA />
      <Footer />
    </main>
  );
}
