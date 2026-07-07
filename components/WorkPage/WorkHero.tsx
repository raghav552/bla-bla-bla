"use client";

import { motion } from "framer-motion";
import styles from "./WorkHero.module.css";

export default function WorkHero() {
  return (
    <section className={styles.hero} aria-labelledby="work-hero-heading">
      <motion.p
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Selected Work
      </motion.p>

      <motion.h1
        id="work-hero-heading"
        className={styles.heading}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        Real projects.
        <br />
        Real businesses.
        <br />
        Real outcomes.
      </motion.h1>

      <motion.p
        className={styles.subcopy}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        Every project below represents a real client engagement — spanning
        branding, websites, apps, marketing, and motion — built by one team
        working from a single shared strategy.
      </motion.p>

      <motion.div
        className={styles.ctaRow}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#projects" className={styles.primaryCta}>
          View Projects
        </a>
        <a href="/contact" className={styles.secondaryCta}>
          Book Strategy Call
        </a>
      </motion.div>
    </section>
  );
}
