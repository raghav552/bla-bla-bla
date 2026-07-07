import styles from "./ProcessSection.module.css";

const steps = [
  {
    title: "Discover",
    copy: "We learn your business, your customers, and what's worked (or hasn't) so far.",
  },
  {
    title: "Strategy",
    copy: "We turn that discovery into a clear plan with priorities, timelines, and success measures.",
  },
  {
    title: "Design",
    copy: "We shape the look, feel, and structure of the experience before a line of code is written.",
  },
  {
    title: "Development",
    copy: "We build on modern, maintainable foundations — tested, documented, and production-ready.",
  },
  {
    title: "Launch",
    copy: "We ship carefully, with monitoring in place so launch day is uneventful in the best way.",
  },
  {
    title: "Scale",
    copy: "We keep optimizing what's live, using real performance data to guide the next step.",
  },
];

export default function ProcessSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.eyebrow}>How We Work</div>
        <h2 className={styles.heading}>A process built for clarity</h2>
      </div>

      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <div key={step.title} className={styles.step}>
            <div className={styles.stepMarkerColumn}>
              <div className={styles.stepDot} />
              {index !== steps.length - 1 && (
                <div className={styles.stepLine} />
              )}
            </div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepCopy}>{step.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
