"use client";

import Image from "next/image";
import styles from "./GrowthSystems.module.css";
import { useSoftParallax } from "./useReveal";

/* -------------------------------------------------------------------- */
/* Small inline icons — kept here so no icon library is needed           */
/* -------------------------------------------------------------------- */

function CheckIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2.5 6.2L4.8 8.5L9.5 3.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 22s7-7.05 7-12a7 7 0 1 0-14 0c0 4.95 7 12 7 12Z" fill="#2563eb" />
      <circle cx="12" cy="10" r="2.6" fill="white" />
    </svg>
  );
}

/* -------------------------------------------------------------------- */
/* Foundation — desktop + mobile presentation, no dashboard              */
/* -------------------------------------------------------------------- */

export function FoundationVisual() {
  const { ref, offset } = useSoftParallax<HTMLDivElement>(0.04);

  return (
    <div className={styles.foundationStage} ref={ref} style={{ transform: `translateY(${offset}px)` }}>
      <div className={styles.browserMock}>
        <div className={styles.browserBar}>
          <span className={styles.browserDot} />
          <span className={styles.browserDot} />
          <span className={styles.browserDot} />
        </div>
        <Image
  src="/images/growth/Capture.jpeg"
  alt="WebGrowth Website"
  fill
  priority
  className={styles.foundationImage}
/>

      </div>

      <div className={styles.phoneMock} aria-hidden="true">
        <span className={`${styles.phoneBar} ${styles.short}`} />
        <span className={styles.phoneBar} />
        <span className={styles.phoneAccent} />
        <span className={styles.phoneRow} />
        <span className={styles.phoneRow} />
      </div>

      <div className={`${styles.floatChip} ${styles.chipTestimonial}`}>
        <div className={styles.starRow} aria-hidden="true">★★★★★</div>
        <p className={styles.chipQuote}>&ldquo;Site paid for itself in three weeks.&rdquo;</p>
        <div className={styles.chipName}>Local service client</div>
      </div>

      <div className={`${styles.floatChip} ${styles.chipMetric}`}>
        <div className={styles.metricValue}>+186%</div>
        <div className={styles.metricLabel}>conversion rate</div>
      </div>

      <div className={`${styles.floatChip} ${styles.chipBrand}`}>
        <span className={styles.brandMark} aria-hidden="true" />
        <div className={styles.brandSwatches} aria-hidden="true">
          <span className={`${styles.swatchDot} ${styles.swatchBlue}`} />
          <span className={`${styles.swatchDot} ${styles.swatchInk}`} />
          <span className={`${styles.swatchDot} ${styles.swatchFaint}`} />
        </div>
        <div className={styles.brandWordmark} aria-hidden="true">
          <span className={`${styles.wordmarkBar} ${styles.wide}`} />
          <span className={`${styles.wordmarkBar} ${styles.narrow}`} />
        </div>
        <div className={styles.chipName}>Brand system</div>
      </div>

      <div className={styles.tagRow}>
        <span className={styles.tag}>Responsive</span>
        <span className={styles.tag}>Secure</span>
        <span className={styles.tag}>Fast Load</span>
        <span className={styles.tag}>SEO Ready</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------- */
/* Visibility — editorial collage of generic search / map / review /     */
/* knowledge-panel cards, arranged like a moodboard, not a dashboard     */
/* -------------------------------------------------------------------- */

export function VisibilityVisual() {
  const { ref, offset } = useSoftParallax<HTMLDivElement>(0.04);

  return (
    <div
      className={styles.collage}
      ref={ref}
      style={{ transform: `translateY(${offset}px)` }}
    >
      <Image
        src="/images/growth/visibility.png"
        alt="SEO & Local Visibility"
        fill
        priority
        className={styles.visibilityImage}
      />
    </div>
  );
}
/* -------------------------------------------------------------------- */
/* Growth — single ecosystem diagram, flowing connectors, no charts      */
/* -------------------------------------------------------------------- */

const ECOSYSTEM_NODES = [
  "Website",
  "SEO",
  "Content",
  "Ads",
  "CRM",
  "Automation",
  "Leads",
  "Email",
  "Analytics",
];

const CENTER = 340;
const RADIUS = 256;
const CHIP_W = 130;
const CHIP_H = 46;

function nodePosition(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  };
}

export function GrowthVisual() {
  const { ref, offset } = useSoftParallax<HTMLDivElement>(0.03);

  return (
    <div className={styles.ecosystem} ref={ref} style={{ transform: `translateY(${offset}px)` }}>
      <svg
        className={styles.ecosystemSvg}
        viewBox="0 0 680 680"
        role="img"
        aria-label="Diagram showing Your Business at the center, connected to Website, SEO, Content, Ads, CRM, Automation, Leads, Email, and Analytics"
      >
        {ECOSYSTEM_NODES.map((label, i) => {
          const { x, y } = nodePosition(i, ECOSYSTEM_NODES.length);
          const midX = CENTER + (x - CENTER) * 0.52;
          const midY = CENTER + (y - CENTER) * 0.52;
          return (
            <path
              key={`line-${label}`}
              className={styles.connector}
              d={`M ${CENTER} ${CENTER} Q ${midX} ${midY} ${x} ${y}`}
            />
          );
        })}

        {ECOSYSTEM_NODES.map((label, i) => {
          const { x, y } = nodePosition(i, ECOSYSTEM_NODES.length);
          return (
            <g key={label}>
              <rect
                className={styles.nodeChip}
                x={x - CHIP_W / 2}
                y={y - CHIP_H / 2}
                width={CHIP_W}
                height={CHIP_H}
                rx={CHIP_H / 2}
              />
              <text className={styles.nodeLabel} x={x} y={y + 1}>
                {label}
              </text>
            </g>
          );
        })}

        <circle className={styles.centerNode} cx={CENTER} cy={CENTER} r={84} />
        <text className={styles.centerLabel} x={CENTER} y={CENTER - 8} fontSize="16">
          Your
        </text>
        <text className={styles.centerLabel} x={CENTER} y={CENTER + 15} fontSize="16">
          Business
        </text>
      </svg>

      <div className={styles.tagRow}>
        <span className={styles.tag}>9 Channels</span>
        <span className={styles.tag}>1 System</span>
        <span className={styles.tag}>Always Compounding</span>
      </div>
    </div>
  );
}

export { CheckIcon };
