"use client";

import styles from "./FeaturedWork.module.css";
import type { Project } from "./data";

type ChapterRailProps = {
  projects: Project[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function ChapterRail({
  projects,
  activeIndex,
  onSelect,
}: ChapterRailProps) {
  return (
    <nav className={styles.rail} aria-label="Selected work chapters">
      <ol className={styles.railList}>
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <li key={project.id}>
              <button
                type="button"
                className={styles.railItem}
                data-active={isActive || undefined}
                aria-current={isActive ? "true" : undefined}
                onClick={() => onSelect(index)}
              >
                <span className={styles.railIndex}>{pad(index + 1)}</span>
                <span className={styles.railTrack} aria-hidden="true">
                  <span className={styles.railFill} />
                </span>
                <span className={styles.railLabel}>{project.title}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
