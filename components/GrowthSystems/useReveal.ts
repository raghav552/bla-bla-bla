"use client";

import { useEffect, useRef, useState } from "react";

/**
 * useReveal — fires once when the element enters the viewport, then
 * disconnects. The returned `visible` flag is meant to toggle a single
 * CSS class; all motion (fade / slide / scale) lives in CSS transitions,
 * not in JS. This is the only "stage" the section has — no multi-step
 * sequencing, no scroll position math.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  const threshold = options?.threshold ?? 0.18;
  const rootMargin = options?.rootMargin ?? "0px 0px -12% 0px";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}

/**
 * useSoftParallax — a single passive-scroll transform, only active while
 * the element is on screen (gated by IntersectionObserver so nothing runs
 * off-viewport). No pinning, no scroll hijacking — just a few pixels of
 * drift to give the hero visual a sense of depth as the page scrolls past.
 */
export function useSoftParallax<T extends HTMLElement = HTMLDivElement>(strength = 0.05) {
  const ref = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    let ticking = false;
    let active = false;

    const measure = () => {
      ticking = false;
      if (!active || !el) return;
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      setOffset((elementCenter - viewportCenter) * -strength);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    if (typeof IntersectionObserver === "undefined") {
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    const io = new IntersectionObserver(
      (entries) => {
        active = entries[0].isIntersecting;
        if (active) onScroll();
      },
      { threshold: 0 }
    );

    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [strength]);

  return { ref, offset };
}
