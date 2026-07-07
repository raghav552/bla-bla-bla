"use client";

import { motion } from "framer-motion";
import styles from "./WhyChooseWebGrowth.module.css";

const blocks = [
  {
    label: "Communication",
    copy: "You always know what's happening and why. Updates are proactive, not something you have to chase.",
  },
  {
    label: "Transparency",
    copy: "Clear scopes, clear timelines, clear reasoning behind every recommendation we make.",
  },
  {
    label: "Execution",
    copy: "Plans are only worth as much as the work that follows them. We're built to ship, not just present decks.",
  },
  {
    label: "Growth Mindset",
    copy: "We treat every launch as a starting point, watching what happens next and adjusting accordingly.",
  },
];

export default function WhyChooseWebGrowth() {
  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.eyebrow}>Why Choose WebGrowth</div>
        <h2 id="why-heading" className={styles.heading}>
          How we operate, in practice
        </h2>
      </motion.div>

      <div className={styles.list}>
        {blocks.map((block, index) => (
          <motion.div
            key={block.label}
            className={styles.row}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className={styles.rowLabel}>{block.label}</h3>
            <p className={styles.rowCopy}>{block.copy}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
