"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FeaturedWork.module.css";
import type { Project as ProjectData } from "./data";

type ProjectProps = {
  project: ProjectData;
  index: number;
  total: number;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

export default function Project({ project, index, total }: ProjectProps) {
  const { ref: mediaRef, isVisible } = useReveal<HTMLAnchorElement>();
  const titleId = `project-title-${project.id}`;
  const loading = project.priority ? "eager" : "lazy";
  const fetchPriority = project.priority ? "high" : "auto";

  return (
    <article className={styles.project} aria-labelledby={titleId}>
      <header className={styles.projectHead}>
        <span className={styles.projectNumeral} aria-hidden="true">
          {pad(index + 1)}
          <span className={styles.projectNumeralTotal}>/{pad(total)}</span>
        </span>

        <div className={styles.projectHeadText}>
          <span className={styles.projectCategory}>
            {project.category}
            <span className={styles.projectYear}>{project.year}</span>
          </span>
          <h3 id={titleId} className={styles.projectTitle}>
            {project.title}
          </h3>
          <p className={styles.projectDek}>{project.dek}</p>
        </div>
      </header>

      <a
        ref={mediaRef}
        href={project.href}
        className={`${styles.projectMedia} ${
          isVisible ? styles.isVisible : ""
        }`}
        aria-label={`View case study: ${project.title}`}
      >
        <div className={styles.projectMediaInner}>
         <img
  src={`${project.image}.png`}
  alt={project.imageAlt}
  loading={loading}
  fetchPriority={fetchPriority}
  decoding="async"
  className={styles.projectImage}
/>
        </div>

        <span className={styles.projectMediaScrim} aria-hidden="true" />
        <span className={styles.projectMediaCaption} aria-hidden="true">
          <span>View case study</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={styles.projectMediaCaptionIcon}
          >
            <path
              d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>

      <div className={styles.projectMeta}>
        <div className={styles.metaItem}>
          <h4>Challenge</h4>
          <p>{project.challenge}</p>
        </div>

        <div className={styles.metaItem}>
          <h4>Solution</h4>
          <p>{project.solution}</p>
        </div>

        <div className={styles.metaStat}>
          <span className={styles.metaStatValue}>{project.metricValue}</span>
          <span className={styles.metaStatLabel}>{project.metricLabel}</span>
        </div>
      </div>
    </article>
  );
}
