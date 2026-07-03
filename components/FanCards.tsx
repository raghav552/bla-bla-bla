"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

type CardData = {
  title: string;
  description: string;
  label: string;
  left: string;
  bottom: string;
  rotate: number;
  floatDuration: number;
  floatAmplitude: number;
  floatDelay: number;
  composition: ReactNode;
  viewBox: string;
  isLarge?: boolean; // Growth only — largest, most complete composition of the six
};

const CARDS: CardData[] = [
  {
    title: "Websites",
    description: "Websites engineered to convert visitors into customers.",
    label: "WEBSITES",
    left: "12%",
    bottom: "-140px",
    rotate: -38,
    floatDuration: 5.2,
    floatAmplitude: 10,
    floatDelay: 0,
    viewBox: "0 0 220 220",
    composition: (
      <>
        <rect x="20" y="30" width="150" height="110" rx="10" fill="none" stroke="#1a1a2e" strokeWidth="2.5" opacity="0.22" />
        <line x1="20" y1="52" x2="170" y2="52" stroke="#1a1a2e" strokeWidth="2.5" opacity="0.22" />
        <rect x="40" y="64" width="80" height="8" rx="3" fill="#1a1a2e" opacity="0.16" />
        <rect x="40" y="80" width="110" height="8" rx="3" fill="#1a1a2e" opacity="0.16" />
        <rect x="40" y="96" width="60" height="8" rx="3" fill="#1a1a2e" opacity="0.16" />
        <line x1="170" y1="95" x2="225" y2="160" stroke="#1a1a2e" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.16" />
        <rect x="170" y="150" width="70" height="90" rx="10" fill="none" stroke="#1a1a2e" strokeWidth="2.5" opacity="0.16" />
        <line x1="170" y1="168" x2="240" y2="168" stroke="#1a1a2e" strokeWidth="2" opacity="0.16" />
        <circle cx="170" cy="95" r="4" fill="#1a1a2e" opacity="0.28" />
        <circle cx="20" cy="30" r="4" fill="#1a1a2e" opacity="0.28" />
      </>
    ),
  },
  {
    title: "SEO",
    description: "Increase visibility and dominate local search results.",
    label: "SEO",
    left: "24%",
    bottom: "-80px",
    rotate: -22,
    floatDuration: 6.8,
    floatAmplitude: 14,
    floatDelay: 0.6,
    viewBox: "0 0 220 220",
    composition: (
      <>
        <rect x="40" y="170" width="50" height="10" rx="4" fill="#1a1a2e" opacity="0.16" />
        <rect x="40" y="148" width="80" height="10" rx="4" fill="#1a1a2e" opacity="0.16" />
        <rect x="40" y="126" width="115" height="10" rx="4" fill="#1a1a2e" opacity="0.16" />
        <rect x="40" y="104" width="150" height="10" rx="4" fill="#1a1a2e" opacity="0.22" />
        <path d="M 65 175 L 95 153 L 135 131 L 195 109" fill="none" stroke="#1a1a2e" strokeWidth="2" strokeDasharray="2 5" opacity="0.20" />
        <circle cx="65" cy="175" r="3.5" fill="#1a1a2e" opacity="0.22" />
        <circle cx="95" cy="153" r="3.5" fill="#1a1a2e" opacity="0.22" />
        <circle cx="135" cy="131" r="3.5" fill="#1a1a2e" opacity="0.22" />
        <circle cx="195" cy="109" r="5" fill="#1a1a2e" opacity="0.30" />
        <circle cx="205" cy="55" r="26" fill="none" stroke="#1a1a2e" strokeWidth="2.5" opacity="0.22" />
        <line x1="186" y1="74" x2="165" y2="95" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" opacity="0.22" />
      </>
    ),
  },
  {
    title: "Content",
    description: "Reels and content systems that attract attention.",
    label: "CONTENT",
    left: "38%",
    bottom: "-20px",
    rotate: -8,
    floatDuration: 4.4,
    floatAmplitude: 8,
    floatDelay: 1.1,
    viewBox: "0 0 220 220",
    composition: (
      <>
        <rect x="20" y="60" width="70" height="90" rx="10" fill="none" stroke="#1a1a2e" strokeWidth="2.5" opacity="0.22" />
        <line x1="34" y1="85" x2="76" y2="85" stroke="#1a1a2e" strokeWidth="2" opacity="0.16" />
        <line x1="34" y1="100" x2="76" y2="100" stroke="#1a1a2e" strokeWidth="2" opacity="0.16" />
        <line x1="34" y1="115" x2="62" y2="115" stroke="#1a1a2e" strokeWidth="2" opacity="0.16" />
        <line x1="90" y1="75" x2="190" y2="40" stroke="#1a1a2e" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.16" />
        <line x1="90" y1="105" x2="200" y2="105" stroke="#1a1a2e" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.16" />
        <line x1="90" y1="135" x2="185" y2="175" stroke="#1a1a2e" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.16" />
        <rect x="188" y="25" width="36" height="36" rx="9" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.20" />
        <circle cx="210" cy="105" r="18" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.20" />
        <rect x="172" y="160" width="32" height="32" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.20" />
        <circle cx="90" cy="75" r="3.5" fill="#1a1a2e" opacity="0.26" />
        <circle cx="90" cy="105" r="3.5" fill="#1a1a2e" opacity="0.26" />
        <circle cx="90" cy="135" r="3.5" fill="#1a1a2e" opacity="0.26" />
      </>
    ),
  },
  {
    title: "Ads",
    description: "Performance campaigns focused on generating leads.",
    label: "ADS",
    left: "52%",
    bottom: "-20px",
    rotate: 8,
    floatDuration: 7.6,
    floatAmplitude: 16,
    floatDelay: 0.3,
    viewBox: "0 0 220 220",
    composition: (
      <>
        <rect x="30" y="150" width="30" height="60" rx="4" fill="none" stroke="#1a1a2e" strokeWidth="2.5" opacity="0.18" />
        <rect x="72" y="120" width="30" height="90" rx="4" fill="none" stroke="#1a1a2e" strokeWidth="2.5" opacity="0.20" />
        <rect x="114" y="85" width="30" height="125" rx="4" fill="none" stroke="#1a1a2e" strokeWidth="2.5" opacity="0.22" />
        <rect x="156" y="50" width="30" height="160" rx="4" fill="none" stroke="#1a1a2e" strokeWidth="2.5" opacity="0.24" />
        <line x1="-10" y1="-10" x2="171" y2="50" stroke="#1a1a2e" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.16" />
        <line x1="60" y1="-10" x2="171" y2="50" stroke="#1a1a2e" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.16" />
        <circle cx="171" cy="50" r="5" fill="#1a1a2e" opacity="0.30" />
        <circle cx="45" cy="150" r="3" fill="#1a1a2e" opacity="0.20" />
        <circle cx="87" cy="120" r="3" fill="#1a1a2e" opacity="0.20" />
        <circle cx="129" cy="85" r="3" fill="#1a1a2e" opacity="0.20" />
      </>
    ),
  },
  {
    title: "Branding",
    description: "Memorable brand systems that build trust.",
    label: "BRANDING",
    left: "66%",
    bottom: "-80px",
    rotate: 22,
    floatDuration: 5.8,
    floatAmplitude: 12,
    floatDelay: 0.9,
    viewBox: "0 0 220 220",
    composition: (
      <>
        <circle cx="110" cy="110" r="34" fill="none" stroke="#1a1a2e" strokeWidth="2.5" opacity="0.24" />
        <circle cx="110" cy="110" r="3.5" fill="#1a1a2e" opacity="0.30" />
        <line x1="138" y1="88" x2="200" y2="40" stroke="#1a1a2e" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.16" />
        <line x1="142" y1="120" x2="210" y2="135" stroke="#1a1a2e" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.16" />
        <line x1="118" y1="142" x2="155" y2="200" stroke="#1a1a2e" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.16" />
        <rect x="190" y="20" width="40" height="28" rx="6" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.20" />
        <line x1="200" y1="128" x2="226" y2="128" stroke="#1a1a2e" strokeWidth="2.5" opacity="0.20" />
        <line x1="200" y1="140" x2="218" y2="140" stroke="#1a1a2e" strokeWidth="2.5" opacity="0.20" />
        <circle cx="160" cy="208" r="9" fill="#1a1a2e" opacity="0.20" />
        <circle cx="138" cy="88" r="3" fill="#1a1a2e" opacity="0.24" />
        <circle cx="142" cy="120" r="3" fill="#1a1a2e" opacity="0.24" />
        <circle cx="118" cy="142" r="3" fill="#1a1a2e" opacity="0.24" />
      </>
    ),
  },
  {
    title: "Growth",
    description: "Complete digital growth strategies for local businesses.",
    label: "GROWTH",
    left: "80%",
    bottom: "-140px",
    rotate: 38,
    floatDuration: 6.3,
    floatAmplitude: 18,
    floatDelay: 1.4,
    viewBox: "0 0 260 260",
    isLarge: true,
    composition: (
      <>
        <rect x="10" y="170" width="36" height="26" rx="5" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.18" />
        <line x1="10" y1="180" x2="46" y2="180" stroke="#1a1a2e" strokeWidth="1.5" opacity="0.18" />
        <rect x="55" y="186" width="14" height="6" rx="2" fill="#1a1a2e" opacity="0.16" />
        <rect x="55" y="174" width="24" height="6" rx="2" fill="#1a1a2e" opacity="0.18" />
        <circle cx="100" cy="160" r="9" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.18" />
        <rect x="125" y="140" width="13" height="40" rx="3" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.18" />
        <rect x="143" y="120" width="13" height="60" rx="3" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.20" />
        <circle cx="185" cy="95" r="16" fill="none" stroke="#1a1a2e" strokeWidth="2.2" opacity="0.20" />
        <circle cx="185" cy="95" r="2.5" fill="#1a1a2e" opacity="0.26" />
        <path
          d="M 28 170 L 62 174 L 100 151 L 131 140 L 149 120 L 185 79 L 225 45"
          fill="none"
          stroke="#1a1a2e"
          strokeWidth="2.5"
          strokeDasharray="2 5"
          opacity="0.22"
        />
        <circle cx="28" cy="170" r="3" fill="#1a1a2e" opacity="0.22" />
        <circle cx="100" cy="151" r="3" fill="#1a1a2e" opacity="0.22" />
        <circle cx="149" cy="120" r="3" fill="#1a1a2e" opacity="0.22" />
        <circle cx="225" cy="45" r="7" fill="#1a1a2e" opacity="0.32" />
        <rect x="0" y="20" width="260" height="190" rx="20" fill="none" stroke="#1a1a2e" strokeWidth="2" opacity="0.10" />
      </>
    ),
  },
];

function SingleCard({
  card,
  index,
  mouseX,
  mouseY,
}: {
  card: (typeof CARDS)[0];
  index: number;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}) {
  // Cards nearer the center of the fan (index 2,3) sit closer to the cursor's
  // resting position, so they get a slightly stronger response — proximity-based parallax.
  const proximityWeight = [0.7, 0.85, 1, 1, 0.85, 0.7][index];

  const px = useTransform(mouseX, [-0.5, 0.5], [-15 * proximityWeight, 15 * proximityWeight]);
  const py = useTransform(mouseY, [-0.5, 0.5], [-9 * proximityWeight, 9 * proximityWeight]);

  const springX = useSpring(px, { stiffness: 120, damping: 18, mass: 0.6 });
  const springY = useSpring(py, { stiffness: 120, damping: 18, mass: 0.6 });

  // 3D tilt — subtle, opposing per side of the fan so the whole arc feels like
  // one curved physical surface reacting to a single light/cursor source.
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6 * proximityWeight, 6 * proximityWeight]);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [4 * proximityWeight, -4 * proximityWeight]);

  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 16, mass: 0.6 });
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 16, mass: 0.6 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 140, scale: 0.82 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        // Stage 1+2 (fan rise + scale) happen together as a shared spring;
        // stage 3 (individual settle) comes from the per-card stagger delay.
        delay: 0.5 + index * 0.12,
        duration: 1.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover="hover"
      style={{
        position: "absolute",
        left: card.left,
        bottom: card.bottom,
        width: "320px",
        height: "430px",
        transformOrigin: "bottom center",
        cursor: "pointer",
        zIndex: index + 1,
        perspective: "1600px",
      }}
    >
      {/* Rotation + floating layer */}
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          rotate: card.rotate,
          x: springX,
          y: springY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -card.floatAmplitude, 0],
        }}
        transition={{
          y: {
            duration: card.floatDuration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: card.floatDelay,
          },
        }}
      >
        {/* 3D tilt + hover lift layer */}
        <motion.div
          variants={{
            rest: { y: 0, scale: 1, z: 0 },
            hover: { y: -28, scale: 1.06, z: 40 },
          }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "100%",
            height: "100%",
            rotateY: springRotateY,
            rotateX: springRotateX,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Card surface */}
          <motion.div
            variants={{
              rest: {
                boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
              },
              hover: {
                boxShadow: "0 40px 80px rgba(0,0,0,0.16), 0 12px 28px rgba(0,0,0,0.10)",
              },
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              width: "100%",
              height: "100%",
              background: "rgba(255,255,255,0.93)",
              borderRadius: "28px",
              border: "1px solid rgba(0,0,0,0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "36px 28px 28px 28px",
              backdropFilter: "blur(8px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Lighting illusion — soft sheen that drifts opposite the tilt,
                like light catching a glossy surface as it turns */}
            <motion.div
              variants={{
                rest: { opacity: 0.4 },
                hover: { opacity: 0.7 },
              }}
              transition={{ duration: 0.35 }}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.25) 100%)",
                pointerEvents: "none",
              }}
            />

            {/* System composition — background diagram, not an icon. Anchored
                to the lower-right quadrant, allowed to bleed past the card's
                own edges (clipped by the card surface's overflow:hidden).
                Occupies the bottom ~60-65% of the card visually. Rendered
                before the text block so it sits fully behind it in stacking
                order. Growth uses a larger canvas (isLarge) — the most
                complete composition of the six. */}
            <div
              style={{
                position: "absolute",
                right: card.isLarge ? "-50px" : "-30px",
                bottom: card.isLarge ? "-30px" : "-20px",
                width: card.isLarge ? "300px" : "260px",
                height: card.isLarge ? "300px" : "260px",
                pointerEvents: "none",
              }}
              aria-hidden="true"
            >
              <svg viewBox={card.viewBox} width="100%" height="100%">
                {card.composition}
              </svg>
            </div>

            <div style={{ position: "relative" }}>
              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "#1a1a2e",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  margin: "0 0 14px 0",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#555",
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: "195px",
                }}
              >
                {card.description}
              </p>
            </div>

            <div
              style={{
                fontSize: "10.5px",
                fontWeight: 600,
                letterSpacing: "0.13em",
                color: "#bbb",
                textTransform: "uppercase",
                position: "relative",
              }}
            >
              {card.label}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function FanCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mouseX.set((e.clientX - (r.left + r.width / 2)) / r.width);
      mouseY.set((e.clientY - (r.top + r.height / 2)) / r.height);
    };
    // Ease the fan back to rest when the cursor leaves the section entirely
    const onLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Desktop fan layout */}
      <motion.div
        className="fan-desktop"
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        style={{
          position: "relative",
          width: "100%",
          height: "540px",
          marginTop: "80px",
          overflow: "visible",
        }}
      >
        {CARDS.map((card, i) => (
          <SingleCard
            key={card.title}
            card={card}
            index={i}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </motion.div>

      {/* Mobile horizontal slider */}
      <div
        className="fan-mobile"
        style={{
          display: "none",
          overflowX: "auto",
          padding: "40px 24px",
          gap: "16px",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {CARDS.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            whileTap={{ scale: 0.97 }}
            style={{
              minWidth: "280px",
              height: "360px",
              background: "white",
              borderRadius: "24px",
              border: "1px solid rgba(0,0,0,0.05)",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              scrollSnapAlign: "start",
              flexShrink: 0,
            }}
          >
            <div>
              <h3 style={{ fontSize: "22px", fontWeight: 800, color: "#1a1a2e", marginBottom: "10px" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>
                {card.description}
              </p>
            </div>
            <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", color: "#bbb" }}>
              {card.label}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .fan-desktop { display: none !important; }
          .fan-mobile { display: flex !important; }
        }
        @media (min-width: 769px) and (max-width: 1100px) {
          .fan-desktop { transform: scale(0.78); transform-origin: top center; }
        }
      `}</style>
    </>
  );
}
