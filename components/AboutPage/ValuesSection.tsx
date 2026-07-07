"use client";

import { motion } from "framer-motion";
import styles from "./ValuesSection.module.css";

const values = [
  {
    title: "Strategy First",
    copy: "Nothing gets designed or built until we know what it's meant to achieve.",
  },
  {
    title: "Quality Over Quantity",
    copy: "We'd rather do fewer things properly than spread thin across everything.",
  },
  {
    title: "Long-Term Partnership",
    copy: "We plan for the next few years with a client, not just the next project.",
  },
  {
    title: "Business-Focused Execution",
    copy: "Every deliverable is judged by the outcome it creates, not how it looks in isolation.",
  },
];

export default function ValuesSection() {
  return (
    <section className={styles.section} aria-labelledby="values-heading">
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.eyebrow}>Our Values</div>
        <h2 id="values-heading" className={styles.heading}>
          What we won&apos;t compromise on
        </h2>
      </motion.div>

      <div className={styles.grid}>
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -6 }}
          >
            <div className={styles.marker} />
            <h3 className={styles.cardTitle}>{value.title}</h3>
            <p className={styles.cardCopy}>{value.copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
