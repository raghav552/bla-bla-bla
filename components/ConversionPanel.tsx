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
        zIndex: 40, // above the fan's resting cards (1–6), below a hovered card (60)
        display: "flex",
        justifyContent: "center",
        marginTop: "-88px", // pulls panel down to the bottom edge of the fan only — ~75% of center cards stay visible
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
          background: "rgba(240,253,244,0.82)",
          border: "1px solid rgba(34,197,94,0.18)",
          borderRadius: "28px",
          backdropFilter: "blur(24px) saturate(160%)",
          WebkitBackdropFilter: "blur(24px) saturate(160%)",
          boxShadow:
            "0 35px 90px rgba(34,197,94,.15), 0 10px 30px rgba(34,197,94,.08), inset 0 1px 0 rgba(255,255,255,.85)",
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
            color: "#1a1a2e",
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
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="panel-chip"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: isActive
                    ? "linear-gradient(135deg, rgba(37,99,235,0.10), rgba(79,70,229,0.10))"
                    : "rgba(255,255,255,0.7)",
                  border: `1px solid ${isActive ? "rgba(37,99,235,0.45)" : "rgba(0,0,0,0.08)"}`,
                  borderRadius: "999px",
                  padding: "11px 22px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: isActive ? "#1d3fae" : "#333",
                  cursor: "pointer",
                  boxShadow: isActive ? "0 8px 20px rgba(37,99,235,0.10)" : "none",
                  transition: "background 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    border: `1.5px solid ${isActive ? "#2563EB" : "#999"}`,
                    background: isActive
                      ? "linear-gradient(135deg, #2563EB, #4F46E5)"
                      : "transparent",
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
            background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
            border: "none",
            borderRadius: "999px",
            padding: "16px 38px",
            fontSize: "15.5px",
            fontWeight: 600,
            color: "white",
            cursor: "pointer",
            letterSpacing: "-0.01em",
            boxShadow: "0 10px 30px rgba(37,99,235,0.32)",
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
