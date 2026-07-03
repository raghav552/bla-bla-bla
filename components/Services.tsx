"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Service = {
  number: string;
  name: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    number: "01",
    name: "Web Design",
    description: "Conversion-engineered sites built to be the foundation every other system runs on.",
  },
  {
    number: "02",
    name: "SEO",
    description: "Local and organic visibility that compounds — built to be found, not just to exist.",
  },
  {
    number: "03",
    name: "Content Systems",
    description: "One source, distributed everywhere — a consistent publishing engine, not a content treadmill.",
  },
  {
    number: "04",
    name: "Paid Advertising",
    description: "Performance campaigns tied to real pipeline, optimized against outcomes, not impressions.",
  },
  {
    number: "05",
    name: "Brand Identity",
    description: "A consistent identity across every touchpoint, built for recognition that outlasts a single campaign.",
  },
  {
    number: "06",
    name: "Growth Strategy",
    description: "The system that connects every other system — strategy first, execution second.",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="services" id="services">
      <motion.div
        className="sv-intro"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="sv-eyebrow">Services</p>
        <h2 className="sv-title">Six systems. One growth engine.</h2>
      </motion.div>

      <div className="sv-list">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.name}
            className="sv-row"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setHovered(service.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="sv-number">{service.number}</span>

            <h3 className="sv-name">{service.name}</h3>

            <motion.p
              className="sv-desc"
              initial={false}
              animate={{
                opacity: hovered === service.name ? 1 : 0,
                x: hovered === service.name ? 0 : -12,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {service.description}
            </motion.p>

            <motion.div
              className="sv-underline"
              initial={false}
              animate={{ scaleX: hovered === service.name ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.span
              className="sv-arrow"
              initial={false}
              animate={{
                opacity: hovered === service.name ? 1 : 0,
                x: hovered === service.name ? 0 : -8,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              →
            </motion.span>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .services {
          position: relative;
          background: #f5f5f7;
          padding: 140px 40px;
        }

        .sv-intro {
          max-width: 720px;
          margin: 0 auto 80px;
          text-align: center;
        }
        .sv-eyebrow {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #2563eb;
          margin: 0 0 18px 0;
        }
        .sv-title {
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #1a1a2e;
          line-height: 1.1;
          margin: 0;
        }

        .sv-list {
          max-width: 980px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
        }

        .sv-row {
          position: relative;
          display: grid;
          grid-template-columns: 60px 280px 1fr 40px;
          align-items: center;
          gap: 24px;
          padding: 34px 8px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          cursor: pointer;
        }
        .sv-row:first-child {
          border-top: 1px solid rgba(0, 0, 0, 0.08);
        }

        .sv-number {
          font-size: 14px;
          font-weight: 700;
          color: #b7bac2;
          letter-spacing: 0.04em;
        }

        .sv-name {
          font-size: clamp(1.5rem, 2.4vw, 2rem);
          font-weight: 800;
          color: #1a1a2e;
          letter-spacing: -0.02em;
          margin: 0;
          white-space: nowrap;
        }

        .sv-desc {
          font-size: 15px;
          color: #666;
          line-height: 1.6;
          margin: 0;
          max-width: 460px;
        }

        .sv-arrow {
          font-size: 22px;
          color: #2563eb;
          justify-self: end;
        }

        .sv-underline {
          position: absolute;
          left: 8px;
          right: 8px;
          bottom: -1px;
          height: 2px;
          background: linear-gradient(90deg, #2563eb, #4f46e5);
          transform-origin: left center;
        }

        @media (max-width: 860px) {
          .services {
            padding: 90px 24px;
          }
          .sv-intro {
            margin-bottom: 56px;
          }
          .sv-row {
            grid-template-columns: 36px 1fr 28px;
            grid-template-areas:
              "num name arrow"
              "desc desc desc";
            row-gap: 10px;
            padding: 26px 4px;
          }
          .sv-number {
            grid-area: num;
          }
          .sv-name {
            grid-area: name;
            white-space: normal;
            font-size: 1.4rem;
          }
          .sv-arrow {
            grid-area: arrow;
          }
          .sv-desc {
            grid-area: desc;
            opacity: 1 !important;
            transform: none !important;
            max-width: none;
          }
        }
      `}</style>
    </section>
  );
}
