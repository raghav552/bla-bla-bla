"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./FeaturedWork.module.css";
import { projects } from "./data";
import Project from "./Project";
import ChapterRail from "./ChapterRail";

function useActiveChapter(length: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const updateActiveIndex = () => {
      const index = refs.current.findIndex((node) => {
        if (!node) return false;
        const rect = node.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
      });

      setActiveIndex(index === -1 ? 0 : index);
    };

    updateActiveIndex();

    window.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      window.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [length]);

  const registerRef = (index: number) => (node: HTMLElement | null) => {
    refs.current[index] = node;
  };

  return { activeIndex, registerRef };
}

export default function FeaturedWork() {
  const { activeIndex, registerRef } = useActiveChapter(projects.length);

  const handleSelect = (index: number) => {
    const node = document.getElementById(`project-${projects[index].id}`);
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    node.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section className={styles.section} aria-labelledby="featured-work-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerLead}>
            <span className={styles.eyebrow}>Selected work</span>
            <h2 id="featured-work-heading" className={styles.heading}>
              Proof that strategy
              <br />
              becomes growth.
            </h2>
          </div>

          <div className={styles.headerSupport}>
            <p className={styles.description}>
              Every project is built to solve a business problem, strengthen
              a brand, and generate measurable growth.
            </p>
            <span className={styles.headerMeta}>
              {String(projects.length).padStart(2, "0")} case studies
            </span>
          </div>
        </div>

        <div className={styles.layout}>
          <ChapterRail
            projects={projects}
            activeIndex={activeIndex}
            onSelect={handleSelect}
          />

          <div className={styles.projects}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                id={`project-${project.id}`}
                ref={registerRef(index)}
                className={styles.projectAnchor}
              >
                <Project
                  project={project}
                  index={index}
                  total={projects.length}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
