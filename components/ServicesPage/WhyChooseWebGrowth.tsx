import styles from "./WhyChooseWebGrowth.module.css";

const reasons = [
  {
    title: "Strategy-led, not template-led",
    copy: "Every recommendation is tied back to what you're actually trying to achieve, never a one-size-fits-all package.",
  },
  {
    title: "One point of contact",
    copy: "You work with a single accountable lead who knows your project end to end, not a rotating cast.",
  },
  {
    title: "Design and performance, together",
    copy: "Our designers and marketers plan side by side, so nothing beautiful gets built at the expense of results.",
  },
  {
    title: "Built for the long run",
    copy: "We hand off clean, documented, maintainable work — built to grow with you, not to lock you in.",
  },
];

export default function WhyChooseWebGrowth() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>Why WebGrowth</div>
        <h2 className={styles.heading}>A different kind of partner</h2>
      </div>

      <div className={styles.grid}>
        {reasons.map((reason) => (
          <div key={reason.title} className={styles.card}>
            <div className={styles.marker} />
            <h3 className={styles.cardTitle}>{reason.title}</h3>
            <p className={styles.cardCopy}>{reason.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
