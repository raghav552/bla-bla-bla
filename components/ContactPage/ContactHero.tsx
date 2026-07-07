"use client";

import { motion } from "framer-motion";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.hero} aria-labelledby="contact-hero-heading">
      <motion.p
        className={styles.eyebrow}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Contact
      </motion.p>

      <motion.h1
        id="contact-hero-heading"
        className={styles.heading}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        Let&apos;s build something
        <br />
        that actually grows.
      </motion.h1>

      <motion.p
        className={styles.subcopy}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        Tell us a little about your business and what you&apos;re trying to
        achieve. We&apos;ll get back to you with clear next steps, not a sales
        script.
      </motion.p>

      <motion.div
        className={styles.ctaRow}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <a href="#contact-form" className={styles.primaryCta}>
          Book Strategy Call
        </a>
        <a href="/work" className={styles.secondaryCta}>
          View Our Work
        </a>
      </motion.div>
    </section>
  );
}
