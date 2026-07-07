"use client";

import { useState } from "react";
import styles from "./ContactFAQ.module.css";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "It depends on scope. A brand identity refresh might take a few weeks, while a full website and marketing rollout can take a couple of months. We'll give you a realistic timeline before we start.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Every project is scoped individually based on complexity and goals. Once we understand what you need, we'll share a clear proposal with no hidden fees.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes. We work with clients across time zones and are set up for remote collaboration through calls, async updates, and shared project tools.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. Most clients move into an ongoing retainer for maintenance, marketing, or continued design work once the initial project ships.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className={styles.section} aria-labelledby="contact-faq-heading">
      <div className={styles.header}>
        <div className={styles.eyebrow}>FAQ</div>
        <h2 id="contact-faq-heading" className={styles.heading}>
          Questions, answered
        </h2>
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
