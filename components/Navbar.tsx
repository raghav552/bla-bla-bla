"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "Services", dropdown: true },
  { label: "Work", dropdown: true },
  { label: "About", dropdown: true },
  { label: "Insights", dropdown: false },
  { label: "Contact", dropdown: false },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: "40px",
        paddingRight: "40px",
        background: "rgba(245,245,247,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      {/* LEFT: Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", minWidth: "200px" }}>
        <div
          style={{
            width: "34px",
            height: "34px",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #f5c518 0%, #e6a800 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="3.5" fill="white" />
            <circle cx="9" cy="2.5" r="1.8" fill="white" opacity="0.55" />
            <circle cx="15.5" cy="9" r="1.8" fill="white" opacity="0.55" />
            <circle cx="9" cy="15.5" r="1.8" fill="white" opacity="0.55" />
            <circle cx="2.5" cy="9" r="1.8" fill="white" opacity="0.55" />
          </svg>
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: "16px", color: "#1a1a2e", lineHeight: 1.15, letterSpacing: "-0.01em" }}>
            WebGrowth
          </div>
          <div style={{ fontSize: "9.5px", color: "#999", letterSpacing: "0.06em", lineHeight: 1 }}>
            AI Ecosystem for Business
          </div>
        </div>
      </div>

      {/* CENTER: Nav links */}
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        {navLinks.map((link) => (
          <button
            key={link.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "14.5px",
              fontWeight: 500,
              color: "#333",
              padding: 0,
              fontFamily: "inherit",
            }}
          >
            {link.label}
            {link.dropdown && (
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ marginTop: "1px" }}>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="#555" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* RIGHT: Book Call pill */}
      <div style={{ minWidth: "200px", display: "flex", justifyContent: "flex-end" }}>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: "linear-gradient(135deg, #f5c518 0%, #e6a800 100%)",
            border: "none",
            borderRadius: "999px",
            padding: "11px 30px",
            fontSize: "14px",
            fontWeight: 700,
            color: "#1a1100",
            cursor: "pointer",
            fontFamily: "inherit",
            boxShadow: "0 2px 14px rgba(230,168,0,0.28)",
            letterSpacing: "-0.01em",
          }}
        >
          Book Call
        </motion.button>
      </div>
    </motion.nav>
  );
}
