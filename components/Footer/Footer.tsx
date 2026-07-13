import Link from "next/link";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Website Development", href: "/services#website-development" },
  { label: "App Development", href: "/services#app-development" },
  { label: "SEO", href: "/services#seo" },
  { label: "Performance Marketing", href: "/services#performance-marketing" },
  { label: "Content Marketing", href: "/services#content-marketing" },
  { label: "Motion Graphics", href: "/services#motion-graphics" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>WEBGROWTH</span>
          <p className={styles.tagline}>
            Engineering brands that people remember.
          </p>
        </div>

        <div className={styles.divider} />

        <div className={styles.columns}>
          <div className={styles.column}>
            <span className={styles.eyebrow}>Navigation</span>
            <span className={styles.eyebrowRule} aria-hidden="true" />
            <nav className={styles.columnLinks} aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.column}>
            <span className={styles.eyebrow}>Services</span>
            <span className={styles.eyebrowRule} aria-hidden="true" />
            <nav className={styles.columnLinks} aria-label="Services">
              {SERVICE_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.column}>
            <span className={styles.eyebrow}>Connect</span>
            <span className={styles.eyebrowRule} aria-hidden="true" />
            <div className={styles.columnLinks}>
              <a href="mailto:webgrowth235@gmail.com" className={styles.link}>
                webgrowth235@gmail.com
              </a>
              <a
                href="https://www.instagram.com/webgrowth235/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.cta}>
          <h2 className={styles.ctaHeading}>
            Let&rsquo;s build something exceptional.
          </h2>
          <Link href="/contact" className={styles.ctaButton}>
            Start a project
          </Link>
        </div>

        <div className={styles.hairline} />

        <div className={styles.bottom}>
          <span>© 2026 WebGrowth. All rights reserved.</span>
          <span>Designed &amp; developed by WebGrowth.</span>
        </div>
      </div>
    </footer>
  );
}
