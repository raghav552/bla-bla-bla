"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

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
  image: string;
  isLarge?: boolean; // Growth only — the flagship card of the six
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
    image: "/images/fancards/website.png",
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
    image: "/images/fancards/seo.png",
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
    image: "/images/fancards/content.png",
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
    image: "/images/fancards/ads.png",
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
    image: "/images/fancards/branding.png",
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
    isLarge: true,
    image: "/images/fancards/growth.png",
  },
];

/**
 * The illustration block. Fills whatever space its parent gives it
 * (flex: 1 on desktop, a fixed height on mobile) so the image is always
 * the dominant visual, never a cropped or distorted corner icon.
 * Swapping the PNG files in /public/images/fancards is the only thing
 * ever required to change how a card looks.
 */
function CardIllustration({
  src,
  alt,
  height,
}: {
  src: string;
  alt: string;
  height?: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: 0,
        flex: height ? "0 0 auto" : "1 1 auto",
        height: height ?? "100%",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "contain", objectPosition: "center" }}
        sizes="(max-width: 768px) 60vw, 320px"
      />
    </div>
  );
}

/**
 * Shared Title / Description / Illustration / Label body, used by both the
 * desktop fan cards and the mobile slider so the two never drift apart.
 */
function CardBody({ card, compact }: { card: CardData; compact?: boolean }) {
  return (
    <>
      <div>
        <h3
          style={{
            fontSize: compact ? "22px" : "26px",
            fontWeight: 800,
            color: "#1a1a2e",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: "0 0 10px 0",
          }}
        >
          {card.title}
        </h3>
        <p
          style={{
            fontSize: compact ? "14px" : "15px",
            fontWeight: 400,
            color: "#555",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {card.description}
        </p>
      </div>

      <CardIllustration
        src={card.image}
        alt={card.title}
        height={compact ? "175px" : undefined}
      />

      <div
        style={{
          fontSize: compact ? "10px" : "10.5px",
          fontWeight: 600,
          letterSpacing: "0.12em",
          color: "#bbb",
          textTransform: "uppercase",
        }}
      >
        {card.label}
      </div>
    </>
  );
}

function SingleCard({
  card,
  index,
  mouseX,
  mouseY,
}: {
  card: CardData;
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
              gap: "14px",
              padding: card.isLarge ? "32px 24px 24px 24px" : "32px 26px 24px 26px",
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

            <CardBody card={card} />
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
              padding: "24px 20px 20px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              scrollSnapAlign: "start",
              flexShrink: 0,
            }}
          >
            <CardBody card={card} compact />
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
