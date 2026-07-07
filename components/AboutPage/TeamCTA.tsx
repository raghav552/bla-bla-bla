"use client";

import { motion } from "framer-motion";
import styles from "./TeamCTA.module.css";

export default function TeamCTA() {
  return (
    <section className={styles.section} aria-labelledby="team-cta-heading">
      <motion.h2
        id="team-cta-heading"
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Ready to build something meaningful?
      </motion.h2>

      <motion.a
        href="#contact"
        className={styles.cta}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.5, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        Book a Strategy Call
      </motion.a>
    </section>
  );
}
