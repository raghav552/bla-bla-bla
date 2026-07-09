"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ProjectGrid.module.css";

const projects = [
  {
    category: "Branding",
    title: "Smile & Shine Dental",
    description:
      "A warm, trust-first identity and website for a growing dental practice.",
    image:
      "https://images.unsplash.com/photo-1636247498719-a8a04ed961a4?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Branding presentation with a set of printed business cards",
  },
  {
    category: "Marketing",
    title: "Gold Investment Campaign",
    description:
      "A performance campaign built to attract serious investors, not just clicks.",
    image:
      "https://images.unsplash.com/photo-1686061593213-98dad7c599b9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Marketing analytics dashboard displayed on a computer screen",
  },
  {
    category: "Web",
    title: "Real Estate Landing Page",
    description:
      "A fast, conversion-focused landing experience for a boutique realty brand.",
    image:
      "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?auto=format&fit=crop&w=900&q=80",
    imageAlt: "MacBook Pro displaying a modern website interface",
  },
  {
    category: "Branding",
    title: "Restaurant Branding",
    description:
      "A full visual identity for a neighborhood restaurant looking to stand out.",
    image:
      "https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Branded brochures and print collateral",
  },
  {
    category: "Web",
    title: "Healthcare Website",
    description:
      "A calm, accessible redesign for a multi-location healthcare provider.",
    image:
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Website design displayed on a silver iMac",
  },
  {
    category: "Motion",
    title: "Finance Motion Graphics",
    description:
      "Explainer animation that turns a complex financial product into a simple story.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Animation timeline on a video editing monitor",
  },
  {
    category: "Graphics",
    title: "Packaging Design",
    description:
      "Shelf-ready packaging design for a consumer goods product launch.",
    image:
      "https://images.unsplash.com/photo-1595246135406-803418233494?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Branded cardboard packaging box",
  },
  {
    category: "Apps",
    title: "Fitness Mobile App",
    description:
      "A companion app built to keep members engaged between visits.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Mobile app interface displayed on a smartphone",
  },
  {
    category: "Branding",
    title: "Corporate Identity",
    description:
      "A cohesive identity system for a professional services firm.",
    image:
      "https://images.unsplash.com/photo-1636247498840-693054bb4bcc?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Corporate branding collateral and print design",
  },
  {
    category: "Motion",
    title: "Product Launch Video",
    description:
      "A launch video built to carry a product story across every channel.",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Video production monitor used for a product launch edit",
  },
  {
    category: "Web",
    title: "Educational Website",
    description:
      "A content-rich website built for an online learning platform.",
    image:
      "https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Educational website design on a desktop monitor",
  },
  {
    category: "Marketing",
    title: "Social Media Campaign",
    description:
      "A content system built to keep a brand consistently visible.",
    image:
      "https://images.unsplash.com/photo-1561070791-36c11767b26a?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Tablet displaying a vibrant social campaign visual",
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
            <div className={styles.thumb}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 33vw"
                className={styles.thumbImage}
              />
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
