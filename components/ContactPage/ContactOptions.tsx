"use client";

import { motion } from "framer-motion";
import styles from "./ContactOptions.module.css";

const options = [
  {
    label: "Call",
    primary: "+91 7999680245",
    secondary: "Mon–Fri, 9am–6pm EST",
  },
  {
    label: "Email",
    primary: "webgrowth235@gmail.com",
    secondary: "We reply within one business day",
  },
  {
    label: "Office",
    primary: "Saket Nagar, Bhopal",
  },
];

export default function ContactOptions() {
  return (
    <section className={styles.section} aria-label="Contact options">
      <div className={styles.grid}>
        {options.map((option, index) => (
          <motion.div
            key={option.label}
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
            <h3 className={styles.cardLabel}>{option.label}</h3>
            <p className={styles.cardPrimary}>{option.primary}</p>
            <p className={styles.cardSecondary}>{option.secondary}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
