"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="contact">
      <div className="cta-glow" aria-hidden />

      <motion.p
        className="cta-eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Start Your Growth System
      </motion.p>

      <motion.h2
        className="cta-headline"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Ready To Build Your<br />Growth System?
      </motion.h2>

      <motion.p
        className="cta-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        One conversation. One connected system. A clear path from attention to growth.
      </motion.p>

      <motion.button
        className="cta-button"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Get Your Free Strategy
      </motion.button>

      <style jsx>{`
        .final-cta {
          position: relative;
          background: #f5f5f7;
          padding: 180px 40px 200px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          overflow: hidden;
        }

        .cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 900px;
          height: 600px;
          pointer-events: none;
          background: radial-gradient(ellipse at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 65%);
          z-index: 0;
        }

        .cta-eyebrow {
          position: relative;
          z-index: 1;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #2563eb;
          margin: 0 0 28px 0;
        }

        .cta-headline {
          position: relative;
          z-index: 1;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.05;
          margin: 0 0 28px 0;
          background: linear-gradient(135deg, #1a1a2e 0%, #2563eb 60%, #4f46e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-subtitle {
          position: relative;
          z-index: 1;
          font-size: 18px;
          color: #555;
          line-height: 1.6;
          max-width: 520px;
          margin: 0 0 48px 0;
        }

        .cta-button {
          position: relative;
          z-index: 1;
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
          border: none;
          border-radius: 999px;
          padding: 20px 48px;
          font-size: 17px;
          font-weight: 600;
          color: white;
          cursor: pointer;
          letter-spacing: -0.01em;
          box-shadow: 0 14px 40px rgba(37, 99, 235, 0.35);
        }

        @media (max-width: 700px) {
          .final-cta {
            padding: 120px 24px 130px;
          }
          .cta-subtitle {
            font-size: 16px;
          }
          .cta-button {
            width: 100%;
            padding: 18px 0;
          }
        }
      `}</style>
    </section>
  );
}
