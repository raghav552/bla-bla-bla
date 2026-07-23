"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [formValues, setFormValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (values: FormState) => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please share your name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please add an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please include a short project brief.";
    }

    if (!values.service) {
      nextErrors.service = "Please choose a service.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(formValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormValues(initialState);
      setErrors({});
    }, 650);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  return (
    <section id="contact-form" className={styles.section} aria-labelledby="contact-form-  npmading">
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
              required
              value={formValues.name}
              aria-invalid={Boolean(errors.name)}
              onChange={(event) => updateField("name", event.target.value)}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}
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
              required
              value={formValues.email}
              aria-invalid={Boolean(errors.email)}
              onChange={(event) => updateField("email", event.target.value)}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}
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
              value={formValues.company}
              onChange={(event) => updateField("company", event.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="service" className={styles.label}>
              Service
            </label>
            <select
              id="service"
              name="service"
              className={styles.select}
              required
              value={formValues.service}
              aria-invalid={Boolean(errors.service)}
              onChange={(event) => updateField("service", event.target.value)}
            >
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
            {errors.service && <p className={styles.error}>{errors.service}</p>}
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="budget" className={styles.label}>
            Budget
          </label>
          <select id="budget" name="budget" className={styles.select} value={formValues.budget} onChange={(event) => updateField("budget", event.target.value)}>
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
            required
            value={formValues.message}
            aria-invalid={Boolean(errors.message)}
            onChange={(event) => updateField("message", event.target.value)}
          />
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </div>

        <button type="submit" className={styles.submit} aria-label="Submit your project inquiry" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Start Your Project"}
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
