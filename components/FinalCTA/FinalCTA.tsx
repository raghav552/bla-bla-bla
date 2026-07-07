"use client";

import { useEffect, useRef } from "react";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const el = root.querySelector(`.${styles.content}`);
    if (!el) return;

    if (prefersReducedMotion) {
      el.classList.add(styles.visible);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.cta} id="contact" ref={sectionRef}>
      <div className={styles.content}>
        <h2 className={styles.headline}>
          Ready to build something exceptional?
        </h2>
        <p className={styles.subtext}>
          Let&rsquo;s turn your next website into your strongest growth
          system.
        </p>
        <a href="/contact" className={styles.button}>
          Book a Strategy Call
        </a>
        <div className={styles.divider} />
      </div>
    </section>
  );
}
