"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SERVICES = [
  { id: "website", label: "Website" },
  { id: "seo", label: "SEO" },
  { id: "ads", label: "Ads" },
  { id: "social", label: "Social Media" },
];

export default function ConversionPanel() {
  const [active, setActive] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setActive((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div
      style={{
        position: "relative",
        zIndex: 40,
        display: "flex",
        justifyContent: "center",
        marginTop: "-88px",
        padding: "0 24px",
        pointerEvents: "none",
      }}
      className="conversion-panel-wrap"
    >
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.96 }}
        animate={{
          opacity: 1,
          y: [0, -6, 0],
          scale: 1,
        }}
        transition={{
          opacity: { delay: 1.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          scale: { delay: 1.05, duration: 1.1, ease: [0.16, 1, 0.3, 1] },
          y: {
            delay: 2.2,
            duration: 6.4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{
          pointerEvents: "auto",
          width: "100%",
          maxWidth: "1000px",
          minHeight: "150px",
          background: "rgba(255,255,255,0.86)",
          border: "1px solid rgba(22,163,74,0.16)",
          borderRadius: "28px",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          boxShadow:
            "0 35px 90px rgba(15,23,42,0.08), 0 10px 30px rgba(22,163,74,0.08), inset 0 1px 0 rgba(255,255,255,0.85)",
          padding: "0 40px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "28px",
        }}
        className="conversion-panel"
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#0f172a",
            letterSpacing: "-0.02em",
            margin: 0,
            textAlign: "left",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
          className="panel-headline"
        >
          What do you want to grow?
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            flex: 1,
          }}
          className="panel-chips"
        >
          {SERVICES.map((service) => {
            const isActive = active.has(service.id);
            return (
              <motion.button
                key={service.id}
                type="button"
                onClick={() => toggle(service.id)}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
                className="panel-chip"
                aria-pressed={isActive}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: isActive
                    ? "linear-gradient(135deg, rgba(22,163,74,0.12), rgba(21,128,61,0.08))"
                    : "rgba(255,255,255,0.78)",
                  border: `1px solid ${isActive ? "rgba(22,163,74,0.3)" : "rgba(0,0,0,0.08)"}`,
                  borderRadius: "999px",
                  padding: "11px 22px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: isActive ? "#14532d" : "#334155",
                  cursor: "pointer",
                  boxShadow: isActive ? "0 10px 22px rgba(22,163,74,0.12)" : "none",
                  transition: "background 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    border: `1.5px solid ${isActive ? "#16a34a" : "#94a3b8"}`,
                    background: isActive ? "linear-gradient(135deg, #16a34a, #15803d)" : "transparent",
                    flexShrink: 0,
                    transform: isActive ? "scale(1.05)" : "scale(1)",
                    transition: "border-color 0.2s ease, background 0.2s ease, transform 0.2s ease",
                  }}
                />
                {service.label}
              </motion.button>
            );
          })}
        </div>

        <motion.button
          type="button"
          whileHover={{ y: -3, scale: 1.035 }}
          whileTap={{ y: -1, scale: 1.01 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="panel-cta"
          style={{
            background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)",
            border: "none",
            borderRadius: "999px",
            padding: "16px 38px",
            fontSize: "15.5px",
            fontWeight: 600,
            color: "white",
            cursor: "pointer",
            letterSpacing: "-0.01em",
            boxShadow: "0 12px 30px rgba(22,163,74,0.24)",
          }}
        >
          Get Free Strategy
        </motion.button>
      </motion.div>

      <style>{`
        @media (max-width: 1100px) {
          .conversion-panel-wrap { margin-top: -70px !important; }
        }
        @media (max-width: 900px) {
          .conversion-panel {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 26px 28px !important;
            min-height: auto !important;
            gap: 18px !important;
          }
          .panel-headline { text-align: center !important; white-space: normal !important; }
          .panel-chips { flex-wrap: wrap !important; }
        }
        @media (max-width: 768px) {
          .conversion-panel-wrap { margin-top: 28px !important; padding: 0 20px !important; }
          .conversion-panel { padding: 24px 22px !important; border-radius: 24px !important; }
          .panel-headline { font-size: 18px !important; }
          .panel-chips { gap: 9px !important; }
          .panel-chip { padding: 9px 15px !important; font-size: 13px !important; }
          .panel-cta { width: 100% !important; padding: 14px 0 !important; }
        }
      `}</style>
    </div>
  );
}
