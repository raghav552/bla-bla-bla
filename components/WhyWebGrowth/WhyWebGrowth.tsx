"use client";

import { useEffect, useRef } from "react";
import styles from "./WhyWebGrowth.module.css";

type Pillar = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Strategy First",
    description:
      "Every engagement starts with a real diagnosis of where the business actually loses growth — not a templated audit that ends in the same six deliverables regardless of the answer.",
    image: "/images/why/strategy-first.png",
    imageAlt: "Strategist reviewing a growth diagnosis laid out on a desk.",
  },
  {
    number: "02",
    title: "Beautiful Execution",
    description:
      "A beautiful site that doesn't book appointments isn't a win. Every design decision is made against a specific business outcome, not a trend or a personal preference.",
    image: "/images/why/beautiful-execution.png",
    imageAlt: "Close-up detail of a finished, polished interface design.",
  },
  {
    number: "03",
    title: "Growth Systems",
    description:
      "Most agencies hand off six vendors who don't talk to each other. Every system here is built to feed the next one, so growth compounds instead of resetting every quarter.",
    image: "/images/why/growth-systems.png",
    imageAlt: "Connected systems and workflow diagram displayed on a screen.",
  },
  {
    number: "04",
    title: "Transparent Partnership",
    description:
      "No black boxes, no jargon dressed up as strategy. You see exactly what's being built, why it's being built, and what it's expected to move.",
    image: "/images/why/transparent-partnership.png",
    imageAlt: "Two collaborators reviewing a shared project plan together.",
  },
  {
    number: "05",
    title: "Results That Compound",
    description:
      "Rankings, leads, cost per acquisition, pipeline value — the numbers that matter to the business, reported plainly, without vanity metrics standing in for results.",
    image: "/images/why/results-that-compound.png",
    imageAlt: "Reporting dashboard showing performance trending upward.",
  },
];

export default function WhyWebGrowth() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const items = root.querySelectorAll(`.${styles.pillar}`);

    if (prefersReducedMotion) {
      items.forEach((item) => item.classList.add(styles.visible));
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
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.why} id="why" ref={sectionRef}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Why WebGrowth</p>
          <h2 className={styles.title}>Built for outcomes, not deliverables.</h2>
        </div>

        <div className={styles.list}>
          {PILLARS.map((pillar, i) => {
            return (
              <div
                key={pillar.number}
                className={`${styles.pillar} ${
                  i % 2 === 1 ? styles.reversed : ""
                }`}
              >
                <div className={styles.numberCol}>
                  <span className={styles.number}>{pillar.number}</span>
                  <div className={styles.line} />
                </div>
                <div className={styles.textCol}>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarDesc}>{pillar.description}</p>
                </div>
                <div className={styles.visualCol}>
                  <div className={styles.visual}>
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className={styles.visualImage}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
