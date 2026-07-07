"use client";

import { motion } from "framer-motion";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-hero-heading">
      <motion.p
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        About WebGrowth
      </motion.p>

      <motion.h1
        id="about-hero-heading"
        className={styles.heading}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        We don&apos;t build websites.
        <br />
        We build digital growth systems.
      </motion.h1>

      <motion.p
        className={styles.subcopy}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        WebGrowth exists for businesses who are tired of disconnected vendors —
        one agency for design, another for ads, another for content. We bring
        strategy, design, and execution together under one accountable team.
      </motion.p>

      <motion.a
        href="/contact"
        className={styles.cta}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        Book a Strategy Call
      </motion.a>
    </section>
  );
}
