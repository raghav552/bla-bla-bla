"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./FeaturedCaseStudy.module.css";

const details = [
  {
    label: "Industry",
    copy: "Healthcare · Dental Practice",
  },
  {
    label: "Problem",
    copy: "An outdated website and inconsistent branding were making a well-established practice look smaller than it was, losing new patients to newer competitors.",
  },
  {
    label: "Approach",
    copy: "We rebuilt the brand identity from the ground up, then designed and developed a new website around patient trust and ease of booking.",
  },
  {
    label: "Deliverables",
    copy: "Brand identity, website design and development, on-page SEO, and a short launch motion piece for social.",
  },
];

const outcomeCards = [
  { label: "Website", copy: "Full redesign and rebuild on a modern stack" },
  { label: "Branding", copy: "New identity, palette, and visual system" },
  { label: "Motion", copy: "Launch animation for social and site" },
  { label: "SEO", copy: "On-page structure built for local search" },
];

export default function FeaturedCaseStudy() {
  return (
    <section className={styles.section} aria-labelledby="featured-heading">
      <motion.div
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Featured Case Study
      </motion.div>

      <div className={styles.grid}>
        <motion.div
          className={styles.copyColumn}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 id="featured-heading" className={styles.title}>
            Smile &amp; Shine Dental
          </h2>
          <p className={styles.subtitle}>
            A full digital rebrand for a growing dental practice.
          </p>

          <div className={styles.detailList}>
            {details.map((detail) => (
              <div key={detail.label} className={styles.detailRow}>
                <span className={styles.detailLabel}>{detail.label}</span>
                <p className={styles.detailCopy}>{detail.copy}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.visualColumn}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.mockup}>
            <div className={styles.mockupBar}>
              <span className={styles.mockupDot} />
              <span className={styles.mockupDot} />
              <span className={styles.mockupDot} />
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.mockupScreenshot}>
                <Image
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
                  alt="Smile & Shine Dental website shown on a silver iMac"
                  fill
                  sizes="(max-width: 980px) 100vw, 50vw"
                  className={styles.mockupImage}
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className={styles.outcomeGrid}>
        {outcomeCards.map((card, index) => (
          <motion.div
            key={card.label}
            className={styles.outcomeCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.45,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className={styles.outcomeLabel}>{card.label}</span>
            <p className={styles.outcomeCopy}>{card.copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
