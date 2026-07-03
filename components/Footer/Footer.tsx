import styles from "./Footer.module.css";

const NAV_LINKS = ["Home", "Services", "Work", "Insights", "Contact"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <span className={styles.logo}>WEBGROWTH</span>
          <p className={styles.tagline}>
            Engineering brands that people remember.
          </p>
        </div>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => (
            <a key={link} href="#" className={styles.navLink}>
              {link}
            </a>
          ))}
        </nav>

        <div className={styles.contact}>
          <a href="mailto:webgrowth235@gmail.com" className={styles.contactLink}>
            webgrowth235@gmail.com
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            LinkedIn
          </a>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <span>© 2026 WebGrowth.</span>
          <span>Designed &amp; Developed by WebGrowth.</span>
        </div>
      </div>
    </footer>
  );
}
