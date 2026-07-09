"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div
      className="hero-shell"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "160px",
        paddingBottom: "0px",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        className="hero-bg-graphic"
        style={{
          position: "absolute",
          inset: "-10% 8% 8% 8%",
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "6%",
            left: "50%",
            width: "74%",
            height: "78%",
            transform: "translateX(-50%)",
            borderRadius: "44% 56% 50% 50% / 44% 38% 62% 56%",
            background:
              "radial-gradient(circle at 22% 24%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 32%), radial-gradient(circle at 78% 26%, rgba(16,185,129,0.16) 0%, rgba(16,185,129,0) 30%), radial-gradient(circle at 58% 72%, rgba(37,99,235,0.14) 0%, rgba(37,99,235,0) 34%), linear-gradient(120deg, rgba(16,185,129,0.10) 0%, rgba(125,211,252,0.06) 45%, rgba(37,99,235,0.08) 100%)",
            filter: "blur(24px)",
            opacity: 0.18,
            mixBlendMode: "screen",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "16%",
            right: "8%",
            width: "30%",
            height: "44%",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(255,255,255,0))",
            filter: "blur(28px)",
            transform: "rotate(-16deg)",
            opacity: 0.6,
          }}
        />
      </div>

      <motion.p
        className="hero-eyebrow"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
        style={{
          fontSize: "18px",
          fontWeight: 500,
          color: "#333",
          marginBottom: "40px",
          letterSpacing: "-0.01em",
          position: "relative",
          zIndex: 1,
        }}
      >
        Digital Marketing Ecosystem For Growing Businesses
      </motion.p>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.28, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontSize: "clamp(6rem, 10vw, 9rem)",
          fontWeight: 800,
          letterSpacing: "-0.05em",
          lineHeight: 0.95,
          background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          margin: 0,
          padding: "0 20px",
          userSelect: "none",
          position: "relative",
          zIndex: 1,
        }}
      >
        WebGrowth
      </motion.h1>

      <motion.button
        className="hero-cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        style={{
          marginTop: "40px",
          background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
          border: "none",
          borderRadius: "999px",
          padding: "18px 40px",
          fontSize: "16px",
          fontWeight: 600,
          color: "white",
          cursor: "pointer",
          boxShadow: "0 8px 30px rgba(37,99,235,0.35)",
          letterSpacing: "-0.01em",
          position: "relative",
          zIndex: 1,
        }}
      >
        Grow Your Business
      </motion.button>

      <style jsx global>{`
        @media (max-width: 640px) {
          .hero-shell {
            padding-top: 132px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          .hero-bg-graphic {
            inset: -8% 0 10% 0 !important;
            opacity: 0.8;
          }
          .hero-bg-graphic > div:first-child {
            width: 92% !important;
            height: 74% !important;
            opacity: 0.12 !important;
          }
          .hero-bg-graphic > div:last-child {
            width: 34% !important;
            height: 28% !important;
            opacity: 0.4 !important;
          }
          .hero-eyebrow {
            font-size: 15px !important;
            margin-bottom: 24px !important;
          }
          .hero-title {
            font-size: clamp(3.2rem, 15vw, 4.8rem) !important;
            padding: 0 !important;
          }
          .hero-cta {
            width: 100% !important;
            max-width: 320px !important;
            padding: 16px 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
