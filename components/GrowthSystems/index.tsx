"use client";

import { ReactNode } from "react";
import styles from "./GrowthSystems.module.css";
import { useReveal } from "./useReveal";
import { FoundationVisual, VisibilityVisual, GrowthVisual, CheckIcon } from "./Visuals";

type ChapterData = {
  index: string;
  eyebrow: string;
  title: string;
  copy: string;
  features: string[];
  visual: ReactNode;
};

/**
 * Content is unchanged from the previous build — only the composition
 * around it changes. Every chapter now follows the same editorial
 * rhythm: heading → copy → large visual → supporting elements. No
 * left/right alternation, so the section reads calmer and more
 * consistent while scrolling.
 */
const CHAPTERS: ChapterData[] = [
  {
    index: "01",
    eyebrow: "Foundation",
    title: "Your Digital Foundation",
    copy:
      "Every system we build starts with a website engineered to convert — fast, credible, and structured to support everything that comes after it.",
    features: [
      "Conversion-focused design, not decoration",
      "Built on a scalable, maintainable system",
      "Optimized for speed and Core Web Vitals",
      "Fully responsive, desktop to mobile",
    ],
    visual: <FoundationVisual />,
  },
  {
    index: "02",
    eyebrow: "Visibility",
    title: "Become Impossible to Ignore",
    copy:
      "Once the foundation is in place, we make sure it gets found — across search, maps, and every place your customers are already looking.",
    features: [
      "Local pack and map visibility",
      "Organic rankings that compound",
      "Review generation built into the system",
      "Content structured to earn placement",
    ],
    visual: <VisibilityVisual />,
  },
  {
    index: "03",
    eyebrow: "Growth",
    title: "A System That Compounds Growth",
    copy:
      "Every channel feeds the next. Website, SEO, content, ads, and CRM all connect into one system — so growth builds on itself instead of resetting every month.",
    features: [
      "One connected ecosystem, not six vendors",
      "Every channel feeds real pipeline",
      "Clear reporting across the system",
      "Growth that compounds, not resets",
    ],
    visual: <GrowthVisual />,
  },
];

function Chapter({ data }: { data: ChapterData }) {
  const text = useReveal<HTMLDivElement>();
  const visual = useReveal<HTMLDivElement>({ rootMargin: "0px 0px -8% 0px" });

  return (
    <article className={styles.chapter}>
      <div
        ref={text.ref}
        className={`${styles.chapterText} ${text.visible ? styles.visible : ""}`}
      >
        <span className={styles.numberBadge}>{data.index}</span>
        <p className={styles.eyebrow}>{data.eyebrow}</p>
        <h3 className={styles.chapterTitle}>{data.title}</h3>
        <p className={styles.chapterCopy}>{data.copy}</p>

        <ul className={styles.featureList}>
          {data.features.map((feature) => (
            <li key={feature} className={styles.featureItem}>
              <span className={styles.featureIcon}>
                <CheckIcon />
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={visual.ref}
        className={`${styles.chapterVisual} ${visual.visible ? styles.visible : ""}`}
      >
        <div className={styles.visualGlow} aria-hidden="true" />
        {data.visual}
      </div>
    </article>
  );
}

export default function GrowthSystems() {
  const intro = useReveal<HTMLDivElement>();

  return (
    <section className={styles.section} id="how-we-build-growth" aria-label="How We Build Growth">
      <div
        ref={intro.ref}
        className={`${styles.intro} ${intro.visible ? styles.visible : ""}`}
      >
        <p className={styles.eyebrow}>How We Build Growth</p>
        <h2 className={styles.introTitle}>Three chapters. One connected system.</h2>
        <p className={styles.introCopy}>
          Every engagement follows the same sequence — build the foundation, earn visibility,
          then compound growth.
        </p>
      </div>

      {CHAPTERS.map((chapter) => (
        <Chapter key={chapter.index} data={chapter} />
      ))}
    </section>
  );
}
