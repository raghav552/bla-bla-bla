"use client";

import { useState } from "react";
import styles from "./ServicesFAQ.module.css";

const faqs = [
  {
    question: "How do you decide which services we actually need?",
    answer:
      "We start with a discovery call to understand your goals, current setup, and budget, then recommend only the services that will move the needle — never a bundled package for its own sake.",
  },
  {
    question: "Do you work with businesses outside a specific industry?",
    answer:
      "We work across industries. What matters more than your sector is having a clear goal we can build a strategy around, whether that's leads, sales, or brand awareness.",
  },
  {
    question: "Will I have a single point of contact?",
    answer:
      "Yes. You're assigned one dedicated lead who stays with your project from kickoff through launch and beyond, coordinating the specialists working behind the scenes.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on scope. A brand identity refresh might take a few weeks, while a full website and marketing rollout can take a couple of months. We'll give you a realistic timeline before we start.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Most clients move into an ongoing retainer for maintenance, marketing, or continued design work once the initial project ships.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>FAQ</div>
        <h2 className={styles.heading}>Questions, answered</h2>
      </div>

      <div className={styles.list}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}
            >
              <button
                type="button"
                className={styles.question}
                aria-expanded={isOpen}
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <span className={styles.iconWrap}>
                  <svg
                    className={styles.icon}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 6L8 10.5L12.5 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={styles.answerWrap}
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
              >
                <div className={styles.answerInner}>
                  <p className={styles.answer}>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
