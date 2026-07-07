"use client";

import { motion } from "framer-motion";
import styles from "./ProjectGrid.module.css";

const projects = [
  {
    category: "Branding",
    title: "Smile & Shine Dental",
    description:
      "A warm, trust-first identity and website for a growing dental practice.",
  },
  {
    category: "Marketing",
    title: "Gold Investment Campaign",
    description:
      "A performance campaign built to attract serious investors, not just clicks.",
  },
  {
    category: "Web",
    title: "Real Estate Landing Page",
    description:
      "A fast, conversion-focused landing experience for a boutique realty brand.",
  },
  {
    category: "Branding",
    title: "Restaurant Branding",
    description:
      "A full visual identity for a neighborhood restaurant looking to stand out.",
  },
  {
    category: "Web",
    title: "Healthcare Website",
    description:
      "A calm, accessible redesign for a multi-location healthcare provider.",
  },
  {
    category: "Motion",
    title: "Finance Motion Graphics",
    description:
      "Explainer animation that turns a complex financial product into a simple story.",
  },
  {
    category: "Graphics",
    title: "Packaging Design",
    description:
      "Shelf-ready packaging design for a consumer goods product launch.",
  },
  {
    category: "Apps",
    title: "Fitness Mobile App",
    description:
      "A companion app built to keep members engaged between visits.",
  },
  {
    category: "Branding",
    title: "Corporate Identity",
    description:
      "A cohesive identity system for a professional services firm.",
  },
  {
    category: "Motion",
    title: "Product Launch Video",
    description:
      "A launch video built to carry a product story across every channel.",
  },
  {
    category: "Web",
    title: "Educational Website",
    description:
      "A content-rich website built for an online learning platform.",
  },
  {
    category: "Marketing",
    title: "Social Media Campaign",
    description:
      "A content system built to keep a brand consistently visible.",
  },
];

export default function ProjectGrid() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="project-grid-heading">
      <h2 id="project-grid-heading" className={styles.srHeading}>
        All Projects
      </h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href="/work"
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{
              duration: 0.45,
              delay: (index % 3) * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className={styles.thumb} aria-hidden>
              <span className={styles.thumbCategory}>{project.category}</span>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardCopy}>{project.description}</p>
              <span className={styles.viewLink}>
                View Project
                <svg
                  className={styles.arrow}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
