"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const STAGGER_STEP = 40;

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const lag = Math.min(delay * STAGGER_STEP, 20);

  const { scrollYProgress: entering } = useScroll({
    target: ref,
    offset: ["start 98%", `start ${72 - lag}%` as const],
  });
  const { scrollYProgress: leaving } = useScroll({
    target: ref,
    offset: ["end 20%", "end 4%"],
  });

  const opacity = useTransform([entering, leaving], ([inValue, outValue]: number[]) =>
    Math.min(inValue ?? 0, 1 - (outValue ?? 0)),
  );
  const y = useTransform(entering, [0, 1], [28, 0]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ opacity, y, willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
