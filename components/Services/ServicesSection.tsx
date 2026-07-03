"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./ServicesSection.module.css";

interface Product {
  id: string;
  title: string;
  image: string;
  alt: string;
}

const products: Product[] = [
  {
    id: "01",
    title: "Website Design & Development",
    image: "/images/services/website-mockup.png",
    alt: "Premium website design mockup inside a sleek minimalist browser",
  },
  {
    id: "02",
    title: "Brand Identity",
    image: "/images/services/brand-identity.png",
    alt: "Luxury brand identity presentation spread",
  },
  {
    id: "03",
    title: "Motion Graphics",
    image: "/images/services/motion-graphics.png",
    alt: "Cinematic motion graphics video frame with glass shapes",
  },
  {
    id: "04",
    title: "SEO & Local Visibility",
    image: "/images/services/seo-visibility.png",
    alt: "Beautiful minimalist Google search ecosystem abstraction",
  },
  {
    id: "05",
    title: "Social Media Marketing",
    image: "/images/services/social-media.png",
    alt: "Editorial social media marketing presentation",
  },
  {
    id: "06",
    title: "Performance Marketing",
    image: "/images/services/performance-marketing.png",
    alt: "Premium performance marketing campaign dashboard",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            // Optional: Unobserve after revealing to keep it visible
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        {/* Header Section */}
        <header className={`${styles.header} ${styles.reveal}`}>
          <div className={styles.headerLeft}>
            <span className={styles.label}>Our Digital Products</span>
            <h2 className={styles.title}>Premium Digital Solutions.</h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.description}>
              We don't build standard services. We engineer complete growth
              ecosystems designed to elevate your brand and dominate your market.
            </p>
          </div>
        </header>

        {/* Editorial Vertical Layout */}
        <div className={styles.productsList}>
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`${styles.productItem} ${styles.reveal}`}
            >
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  <div className={styles.imageOverlay} />
                  <img
  src={product.image}
  alt={product.alt}
  className={styles.image}
/>
                </div>
              </div>

              <div className={styles.textContainer}>
                <span className={styles.productNumber}>{product.id}</span>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <div className={styles.productLine} />
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaWrapper} ${styles.reveal}`}>
          <button className={styles.ctaButton}>
            <span className={styles.ctaBackground} />
            <span className={styles.ctaText}>Let's Build Your Growth Story</span>
          </button>
        </div>
      </div>
    </section>
  );
}