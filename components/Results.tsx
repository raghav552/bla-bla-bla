"use client";

import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  metric: { value: string; label: string };
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We went from being invisible on Google to booking out two weeks in advance. The system just keeps compounding — we stopped thinking about marketing as a monthly scramble.",
    name: "Dr. Amir Hassan",
    role: "Owner, Smile & Shine Dental Clinic",
    metric: { value: "+218%", label: "organic bookings" },
  },
  {
    quote:
      "Every other agency gave us a deliverable. WebGrowth gave us a system — content, ads, and brand all pulling in the same direction for the first time.",
    name: "Erica Tan",
    role: "Founder, Erica Clinic",
    metric: { value: "−42%", label: "cost per lead" },
  },
  {
    quote:
      "The reporting alone changed how we make decisions. We finally know which campaigns are actually building pipeline, not just generating clicks.",
    name: "Marcus Webb",
    role: "Principal, Webb Realty Group",
    metric: { value: "$1.2M", label: "added pipeline" },
  },
];

const SUMMARY_METRICS = [
  { value: "40+", label: "Growth systems deployed" },
  { value: "4.6x", label: "Average client ROAS" },
  { value: "92%", label: "Client retention rate" },
];

export default function Results() {
  return (
    <section className="results" id="results">
      <div className="results-inner">
        <motion.div
          className="res-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="res-eyebrow">Results</p>
          <h2 className="res-title">The numbers behind the systems.</h2>
        </motion.div>

        <motion.div
          className="res-summary"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {SUMMARY_METRICS.map((metric) => (
            <div key={metric.label} className="res-summary-item">
              <div className="res-summary-value">{metric.value}</div>
              <div className="res-summary-label">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="res-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="res-card"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <div className="res-quote-mark">&ldquo;</div>
              <p className="res-quote">{t.quote}</p>
              <div className="res-card-footer">
                <div>
                  <div className="res-name">{t.name}</div>
                  <div className="res-role">{t.role}</div>
                </div>
                <div className="res-metric">
                  <div className="res-metric-value">{t.metric.value}</div>
                  <div className="res-metric-label">{t.metric.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .results {
          position: relative;
          background: #f5f5f7;
          padding: 140px 40px;
        }

        .results-inner {
          max-width: 1180px;
          margin: 0 auto;
        }

        .res-intro {
          max-width: 640px;
          margin-bottom: 56px;
        }
        .res-eyebrow {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #2563eb;
          margin: 0 0 18px 0;
        }
        .res-title {
          font-size: clamp(2.2rem, 4vw, 3rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #1a1a2e;
          line-height: 1.1;
          margin: 0;
        }

        .res-summary {
          display: flex;
          gap: 56px;
          padding: 36px 0 64px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          margin-bottom: 56px;
          flex-wrap: wrap;
        }
        .res-summary-value {
          font-size: 38px;
          font-weight: 800;
          color: #1a1a2e;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .res-summary-label {
          font-size: 13.5px;
          color: #888;
          margin-top: 6px;
        }

        .res-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .res-card {
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 28px;
          padding: 36px 32px;
          box-shadow: 0 20px 50px rgba(20, 20, 40, 0.06);
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.3s ease;
        }
        .res-card:hover {
          box-shadow: 0 30px 70px rgba(20, 20, 40, 0.1);
        }

        .res-quote-mark {
          font-size: 42px;
          font-weight: 800;
          color: #dbe4ff;
          line-height: 1;
          margin-bottom: 4px;
        }

        .res-quote {
          font-size: 15.5px;
          color: #333;
          line-height: 1.7;
          margin: 0 0 28px 0;
          flex: 1;
        }

        .res-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-top: 20px;
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        .res-name {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a2e;
        }
        .res-role {
          font-size: 12.5px;
          color: #888;
          margin-top: 2px;
        }

        .res-metric-value {
          font-size: 20px;
          font-weight: 800;
          color: #2563eb;
          letter-spacing: -0.01em;
          text-align: right;
        }
        .res-metric-label {
          font-size: 10.5px;
          color: #999;
          text-align: right;
          margin-top: 2px;
        }

        @media (max-width: 900px) {
          .results {
            padding: 90px 24px;
          }
          .res-summary {
            gap: 36px;
            padding: 28px 0 40px;
            margin-bottom: 40px;
          }
          .res-summary-value {
            font-size: 30px;
          }
          .res-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .res-card {
            padding: 30px 26px;
          }
        }
      `}</style>
    </section>
  );
}
