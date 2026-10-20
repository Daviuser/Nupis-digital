"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { easeOut } from "@/lib/motion";

interface WordFadeProps {
  text: string;
}

interface WordProps {
  word: string;
  index: number;
  playing: boolean;
}

const DIMMED_OPACITY = 0.1;
const CYCLE_SECONDS = 7;
const INTRO_SECONDS = 1.6;
const STAGGER_SECONDS = 0.12;

function Word({ word, index, playing }: WordProps) {
  return (
    <motion.span
      className="inline-block"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: easeOut, delay: 0.15 + index * 0.05 }}
    >
      <motion.span
        className="inline-block will-change-[opacity]"
        animate={{ opacity: playing ? [1, 1, DIMMED_OPACITY, DIMMED_OPACITY, 1] : 1 }}
        transition={{
          duration: CYCLE_SECONDS,
          times: [0, 0.3, 0.5, 0.75, 1],
          ease: "easeInOut",
          repeat: Infinity,
          delay: INTRO_SECONDS + index * STAGGER_SECONDS,
        }}
      >
        {word}
      </motion.span>
    </motion.span>
  );
}

export function WordFade({ text }: WordFadeProps) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);

  if (reduceMotion) return <>{text}</>;

  const words = text.split(" ");

  return (
    <span ref={ref} aria-label={text} className="block">
      {words.map((word, index) => (
        <span key={`${word}-${index}`} aria-hidden>
          <Word word={word} index={index} playing={inView} />
          {index < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}
