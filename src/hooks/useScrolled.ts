"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";

export function useScrolled(threshold = 24): boolean {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled((current) => {
      const next = value > threshold;
      return current === next ? current : next;
    });
  });

  useEffect(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  return scrolled;
}
