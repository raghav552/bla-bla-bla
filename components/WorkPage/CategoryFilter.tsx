"use client";

import { useState } from "react";
import styles from "./CategoryFilter.module.css";

const categories = ["All", "Web", "Apps", "Branding", "Graphics", "Motion", "Marketing"];

export default function CategoryFilter() {
  const [active, setActive] = useState("All");

  return (
    <nav className={styles.filter} aria-label="Filter projects by category">
      <div className={styles.tabRow}>
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
              aria-pressed={isActive}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
