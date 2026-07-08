import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactPage/ContactHero";
import ContactOptions from "@/components/ContactPage/ContactOptions";
import ContactForm from "@/components/ContactPage/ContactForm";
import ContactFAQ from "@/components/ContactPage/ContactFAQ";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Contact | WebGrowth",
  description: "Start a conversation with WebGrowth about your next website, app, or growth initiative.",
  openGraph: {
    title: "Contact | WebGrowth",
    description: "Start a conversation with WebGrowth about your next website, app, or growth initiative.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | WebGrowth",
    description: "Start a conversation with WebGrowth about your next website, app, or growth initiative.",
  },
};

export default function ContactPage() {
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

      <div style={{ position: "relative", zIndex: 1, paddingTop: "100px" }}>
        <ContactHero />
        <ContactOptions />
        <ContactForm />
        <ContactFAQ />
      </div>

      <FinalCTA />
      <Footer />
    </main>
  );
}
