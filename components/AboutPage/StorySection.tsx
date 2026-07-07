"use client";

import { motion } from "framer-motion";
import styles from "./StorySection.module.css";

const principles = [
  "One accountable team instead of five disconnected vendors",
  "Strategy set before a single screen is designed",
  "Systems built to compound, not campaigns that reset each month",
];

export default function StorySection() {
  return (
    <section className={styles.section} aria-labelledby="story-heading">
      <div className={styles.grid}>
        <motion.div
          className={styles.copyColumn}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.eyebrow}>Our Story</div>
          <h2 id="story-heading" className={styles.heading}>
            Built because growth kept getting stuck between vendors
          </h2>
          <p className={styles.paragraph}>
            WebGrowth started with a simple observation: most businesses
            weren&apos;t failing because of bad ideas. They were failing
            because their website, their marketing, and their brand were
            being handled by different people with different priorities and
            no shared plan.
          </p>
          <p className={styles.paragraph}>
            We built WebGrowth to close that gap — a single team that designs,
            builds, and markets as one connected system, so every decision
            serves the same goal: sustainable growth for the business behind
            it.
          </p>
        </motion.div>

        <motion.div
          className={styles.visualColumn}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.panel}>
            <div className={styles.panelLogo}>
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="3.5" fill="white" />
                <circle cx="9" cy="2.5" r="1.8" fill="white" opacity="0.55" />
                <circle cx="15.5" cy="9" r="1.8" fill="white" opacity="0.55" />
                <circle cx="9" cy="15.5" r="1.8" fill="white" opacity="0.55" />
                <circle cx="2.5" cy="9" r="1.8" fill="white" opacity="0.55" />
              </svg>
            </div>
            <p className={styles.panelLabel}>What guides the work</p>
            <ul className={styles.panelList}>
              {principles.map((item) => (
                <li key={item} className={styles.panelItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
