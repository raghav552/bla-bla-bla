"use client";

import { useEffect, useRef } from "react";
import styles from "./Results.module.css";

type CaseStudy = {
  category: string;
  title: string;
  result: string;
  services: string[];
  accent: string;
};

const CASES: CaseStudy[] = [
  {
    category: "E-Commerce / Retail",
    title: "Rebuilding the entire path from discovery to checkout.",
    result: "Conversion rate increased 142% within the first two quarters.",
    services: ["Brand Strategy", "Web Design", "Performance Engineering"],
    accent: "#2563EB",
  },
  {
    category: "B2B / SaaS",
    title: "A platform rebuilt to sell itself before sales ever joins.",
    result: "Qualified pipeline grew 3.4x in six months.",
    services: ["Positioning", "Web Design", "Growth Systems"],
    accent: "#2563EB",
  },
  {
    category: "Healthcare / Services",
    title: "Turning a local practice into a category authority.",
    result: "Organic bookings increased 211% year over year.",
    services: ["SEO", "Content Systems", "Web Design"],
    accent: "#2563EB",
  },
];

export default function Results() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const items = root.querySelectorAll(`.${styles.row}`);

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
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.results} id="results" ref={sectionRef}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Proof of Impact</p>
          <h2 className={styles.title}>Work that changed the trajectory.</h2>
        </div>

        <div className={styles.list}>
          {CASES.map((item, i) => (
            <div
              key={item.title}
              className={`${styles.row} ${i % 2 === 1 ? styles.reversed : ""}`}
            >
              <div className={styles.visualCol}>
                <div className={styles.browserShell}>
                  <div className={styles.browserBar}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.browserBody}>
                    {i === 0 && (
                      <div className={styles.sceneLuxury}>
                        <div className={styles.luxHero}>
                          <span className={styles.luxKicker} />
                          <span className={styles.luxHeadline} />
                          <span className={styles.luxHeadlineShort} />
                          <span className={styles.luxCta} />
                        </div>
                        <div className={styles.luxRow}>
                          <div className={styles.luxCard} />
                          <div className={styles.luxCard} />
                          <div className={styles.luxCard} />
                        </div>
                      </div>
                    )}
                    {i === 1 && (
                      <div className={styles.sceneSearch}>
                        <div className={styles.searchBar}>
                          <span className={styles.searchDot} />
                          <span className={styles.searchLine} />
                        </div>
                        <div className={styles.searchSplit}>
                          <div className={styles.searchResults}>
                            <span className={styles.resultRank} />
                            <span className={styles.resultLine} />
                            <span className={styles.resultLineShort} />
                            <span className={styles.resultLine} />
                            <span className={styles.resultLineShort} />
                          </div>
                          <div className={styles.mapPane}>
                            <span className={styles.mapPin} />
                            <span className={styles.mapPinGhost} />
                            <span className={styles.mapPinGhost2} />
                          </div>
                        </div>
                      </div>
                    )}
                    {i === 2 && (
                      <div className={styles.sceneCampaign}>
                        <div className={styles.campaignFeed}>
                          <div className={styles.campaignCard} />
                          <div className={styles.campaignCardTall} />
                          <div className={styles.campaignCard} />
                        </div>
                        <div className={styles.campaignStat}>
                          <span className={styles.statBar1} />
                          <span className={styles.statBar2} />
                          <span className={styles.statBar3} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.textCol}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.projectTitle}>{item.title}</h3>
                <p className={styles.result}>{item.result}</p>
                <ul className={styles.services}>
                  {item.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
