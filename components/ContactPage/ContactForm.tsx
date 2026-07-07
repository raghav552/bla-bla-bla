"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-form" className={styles.section} aria-labelledby="contact-form-heading">
      <div className={styles.header}>
        <div className={styles.eyebrow}>Start a Project</div>
        <h2 id="contact-form-heading" className={styles.heading}>
          Tell us about your business
        </h2>
        <p id="contact-form-copy" className={styles.subcopy}>
          Share a few details and we&apos;ll follow up with next steps within
          one business day.
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit} aria-describedby="contact-form-copy">
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className={styles.input}
              placeholder="Jane Doe"
              autoComplete="name"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className={styles.input}
              placeholder="jane@company.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="company" className={styles.label}>
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className={styles.input}
              placeholder="Company name"
              autoComplete="organization"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="service" className={styles.label}>
              Service
            </label>
            <select id="service" name="service" className={styles.select} defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option value="website-development">Website Development</option>
              <option value="app-development">App Development</option>
              <option value="seo">SEO &amp; Local SEO</option>
              <option value="social-media-marketing">Social Media Marketing</option>
              <option value="performance-marketing">Performance Marketing</option>
              <option value="brand-identity">Brand Identity</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="motion-graphics">Motion Graphics</option>
              <option value="content-creation">Content Creation</option>
              <option value="other">Something Else</option>
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="budget" className={styles.label}>
            Budget
          </label>
          <select id="budget" name="budget" className={styles.select} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option value="under-5k">Under $5,000</option>
            <option value="5k-15k">$5,000 – $15,000</option>
            <option value="15k-40k">$15,000 – $40,000</option>
            <option value="40k-plus">$40,000+</option>
            <option value="not-sure">Not Sure Yet</option>
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            placeholder="Tell us a bit about your project and goals..."
            rows={5}
          />
        </div>

        <button type="submit" className={styles.submit} aria-label="Submit your project inquiry">
          Start Your Project
        </button>

        {submitted && (
          <p className={styles.confirmation} role="status">
            Thanks — this is a design preview, so nothing was sent yet.
          </p>
        )}
      </form>
    </section>
  );
}
