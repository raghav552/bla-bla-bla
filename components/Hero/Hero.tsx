// Hero.tsx
"use client";

import styles from "./Hero.module.css";

const trafficPoints = "0,38 14,30 28,33 42,20 56,24 70,10 84,14 100,2";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="WebGrowth hero">
      <div className={styles.bgBlobA} aria-hidden="true" />
      <div className={styles.bgBlobB} aria-hidden="true" />

      <svg
        className={styles.growthLine}
        viewBox="0 0 1200 420"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className={styles.growthLinePath}
          d="M -20 360 C 220 360, 260 200, 480 190 C 680 182, 700 40, 980 40 C 1100 40, 1140 70, 1240 20"
          fill="none"
        />
        <circle className={styles.growthDot} cx="980" cy="40" r="6" />
      </svg>

      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.badgeStars} aria-hidden="true">
            ★★★★★
          </span>
          <span>Trusted by 120+ growth-stage brands</span>
        </div>

        <h1 className={styles.title}>
          Websites that turn
          <br />
          attention into <span className={styles.titleAccent}>revenue</span>.
        </h1>

        <p className={styles.subtitle}>
          WebGrowth designs, builds, and optimizes high-converting websites
          and growth systems for ambitious brands ready to scale.
        </p>

        <div className={styles.ctaRow}>
          <button type="button" className={styles.ctaPrimary}>
            Start Your Growth Plan
          </button>
          <button type="button" className={styles.ctaSecondary}>
            View Case Studies
          </button>
        </div>

        <dl className={styles.statsRow}>
          <div className={styles.statItem}>
            <dt className={styles.statValue}>3.4x</dt>
            <dd className={styles.statLabel}>Average traffic growth</dd>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.statItem}>
            <dt className={styles.statValue}>120+</dt>
            <dd className={styles.statLabel}>Brands scaled</dd>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.statItem}>
            <dt className={styles.statValue}>4.8/5</dt>
            <dd className={styles.statLabel}>Client rating</dd>
          </div>
        </dl>
      </div>

      <div className={styles.floatCards} aria-hidden="true">
        <div className={`${styles.card} ${styles.cardTraffic}`}>
          <div className={styles.cardHead}>
            <span className={styles.cardLabel}>Organic Traffic</span>
            <span className={styles.cardTrend}>+186%</span>
          </div>
          <svg
            className={styles.sparkline}
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
          >
            <polyline points={trafficPoints} fill="none" />
          </svg>
        </div>

        <div className={`${styles.card} ${styles.cardRankings}`}>
          <span className={styles.cardLabel}>Search Rankings</span>
          <div className={styles.rankRow}>
            <span className={styles.rankPos}>#1</span>
            <span className={styles.rankBarTrack}>
              <span className={styles.rankBar} style={{ width: "88%" }} />
            </span>
          </div>
          <div className={styles.rankRow}>
            <span className={styles.rankPos}>#3</span>
            <span className={styles.rankBarTrack}>
              <span className={styles.rankBar} style={{ width: "62%" }} />
            </span>
          </div>
          <div className={styles.rankRow}>
            <span className={styles.rankPos}>#5</span>
            <span className={styles.rankBarTrack}>
              <span className={styles.rankBar} style={{ width: "44%" }} />
            </span>
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardConversion}`}>
          <svg className={styles.ring} viewBox="0 0 60 60">
            <circle className={styles.ringTrack} cx="30" cy="30" r="24" />
            <circle className={styles.ringValue} cx="30" cy="30" r="24" />
          </svg>
          <div className={styles.ringText}>
            <span className={styles.ringNumber}>4.8%</span>
            <span className={styles.cardLabel}>Conversion Rate</span>
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardLeads}`}>
          <span className={styles.leadsDot} />
          <span className={styles.cardLabel}>+14 new leads today</span>
        </div>
      </div>
    </section>
  );
}