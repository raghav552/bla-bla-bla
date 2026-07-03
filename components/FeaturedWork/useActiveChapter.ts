"use client";

import { useCallback, useRef, useState } from "react";

export function useActiveChapter(total: number) {
  const [activeIndex, setActiveIndex] = useState(0);
  const observers = useRef<(IntersectionObserver | null)[]>(
    Array(total).fill(null)
  );

  const registerRef = useCallback(
    (index: number) => (node: HTMLDivElement | null) => {
      if (!node) return;

      observers.current[index]?.disconnect();

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          threshold: 0.45,
          rootMargin: "-10% 0px -45% 0px",
        }
      );

      observer.observe(node);
      observers.current[index] = observer;
    },
    []
  );

  return {
    activeIndex,
    registerRef,
  };
}