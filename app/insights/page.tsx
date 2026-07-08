import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Insights | WebGrowth",
  description: "Insights and ideas from WebGrowth are on the way. Stay tuned for practical strategy and growth content.",
  openGraph: {
    title: "Insights | WebGrowth",
    description: "Insights and ideas from WebGrowth are on the way. Stay tuned for practical strategy and growth content.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights | WebGrowth",
    description: "Insights and ideas from WebGrowth are on the way. Stay tuned for practical strategy and growth content.",
  },
};

export default function InsightsPage() {
  return (
    <main
      className="page-shell"
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

      <div style={{ position: "relative", zIndex: 1, paddingTop: "140px", paddingBottom: "100px" }}>
        <section style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderRadius: "999px", background: "rgba(37,99,235,0.08)", color: "#2563eb", fontSize: "12px", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Insights
          </div>
          <h1 style={{ margin: "20px 0 16px", fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: 1.08, letterSpacing: "-0.03em", color: "#111827", fontWeight: 800 }}>
            Insights Coming Soon
          </h1>
          <p style={{ margin: "0 auto 28px", maxWidth: "640px", fontSize: "18px", lineHeight: 1.7, color: "#4b5563" }}>
            We&apos;re preparing thoughtful strategy, design, and growth content for the next chapter of our work.
          </p>
          <a href="/contact" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", padding: "14px 24px", background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)", color: "#fff", textDecoration: "none", fontWeight: 600 }}>
            Join the Newsletter
          </a>
        </section>
      </div>

      <FinalCTA />
      <Footer />
    </main>
  );
}
