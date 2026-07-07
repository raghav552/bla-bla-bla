import styles from "./ServicesPageHero.module.css";

const trustCards = [
  {
    title: "Strategy before pixels",
    copy: "Every engagement starts with your goals, not a template.",
  },
  {
    title: "One dedicated team",
    copy: "The people who scope your project are the ones who build it.",
  },
  {
    title: "Built to be maintained",
    copy: "Clean handoffs, clear documentation, no black boxes.",
  },
];

export default function ServicesPageHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.eyebrow}>What We Do</div>

      <h1 className={styles.heading}>
        Services built around
        <br />
        <span className={styles.headingAccent}>your growth</span>, not ours.
      </h1>

      <p className={styles.subcopy}>
        From first line of code to first page of Google — we design, build,
        and market digital products that are made to perform, not just look
        good in a portfolio.
      </p>

      <div className={styles.ctaRow}>
        <a href="/contact" className={styles.primaryCta}>
          Book a Strategy Call
        </a>
        <a href="#services-grid" className={styles.secondaryCta}>
          Explore Services
        </a>
      </div>

      <div className={styles.trustRow}>
        {trustCards.map((card) => (
          <div key={card.title} className={styles.trustCard}>
            <div className={styles.trustDot} />
            <h3 className={styles.trustTitle}>{card.title}</h3>
            <p className={styles.trustCopy}>{card.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
