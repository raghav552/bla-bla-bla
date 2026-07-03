"use client";

import { motion } from "framer-motion";


export default function Hero() {
  return (
    <div
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
      }}
    >
      {/* Small label */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.55, ease: "easeOut" }}
        style={{
          fontSize: "18px",
          fontWeight: 500,
          color: "#333",
          marginBottom: "40px",
          letterSpacing: "-0.01em",
        }}
      >
        Digital Marketing Ecosystem For Growing Businesses
      </motion.p>

      {/* Main headline */}
      <motion.h1
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
        }}
      >
        WebGrowth
      </motion.h1>

      {/* CTA Button */}
      <motion.button
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
          fontFamily: "inherit",
          boxShadow: "0 8px 30px rgba(37,99,235,0.35)",
          letterSpacing: "-0.01em",
        }}
      >
        Grow Your Business
      </motion.button>
    </div>
  );
}
