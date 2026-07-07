import styles from "./ServicesGrid.module.css";

type Service = {
  title: string;
  description: string;
};

type Category = {
  label: string;
  services: Service[];
};

const categories: Category[] = [
  {
    label: "Development",
    services: [
      {
        title: "Website Development",
        description:
          "Fast, accessible, and easy-to-manage websites built on modern frameworks.",
      },
      {
        title: "App Development",
        description:
          "Native and cross-platform apps designed for real daily use, not just demos.",
      },
    ],
  },
  {
    label: "Marketing",
    services: [
      {
        title: "SEO & Local SEO",
        description:
          "Technical, content, and local optimization that compounds over time.",
      },
      {
        title: "Social Media Marketing",
        description:
          "Consistent, on-brand content and community management across platforms.",
      },
      {
        title: "Performance Marketing",
        description:
          "Paid campaigns measured against pipeline and revenue, not just clicks.",
      },
    ],
  },
  {
    label: "Creative",
    services: [
      {
        title: "Brand Identity",
        description:
          "Naming, voice, and visual systems that hold up across every touchpoint.",
      },
      {
        title: "Graphic Design",
        description:
          "Print and digital assets that stay consistent with your brand system.",
      },
      {
        title: "Motion Graphics",
        description:
          "Short-form animation and video that make products easier to explain.",
      },
      {
        title: "Content Creation",
        description:
          "Photography, copy, and creative assets built for how people actually browse.",
      },
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section id="services-grid" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>Our Services</div>
        <h2 className={styles.heading}>Everything under one roof</h2>
        <p className={styles.subcopy}>
          Three disciplines, working from the same strategy — so your site,
          your marketing, and your brand never pull in different directions.
        </p>
      </div>

      {categories.map((category) => (
        <div key={category.label} className={styles.categoryBlock}>
          <h3 className={styles.categoryLabel}>{category.label}</h3>
          <div className={styles.grid}>
            {category.services.map((service) => {
              const slug = service.title
                .toLowerCase()
                .replace(/&/g, "")
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");

              const href =
                slug === "website-development"
                  ? "/services/web-development"
                  : slug === "app-development"
                    ? "/services/app-development"
                    : slug === "seo-local-seo"
                      ? "/services/seo"
                      : slug === "social-media-marketing"
                        ? "/services/social-media-marketing"
                        : slug === "performance-marketing"
                          ? "/services/performance-marketing"
                          : slug === "brand-identity"
                            ? "/services/brand-identity"
                            : slug === "graphic-design"
                              ? "/services/graphic-design"
                              : slug === "motion-graphics"
                                ? "/services/motion-graphics"
                                : "/services/content-creation";

              return (
                <a href={href} key={service.title} className={styles.card}>
                  <h4 className={styles.cardTitle}>{service.title}</h4>
                <p className={styles.cardCopy}>{service.description}</p>
                  <span className={styles.learnMore}>
                    Learn More
                    <svg
                      className={styles.arrow}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
