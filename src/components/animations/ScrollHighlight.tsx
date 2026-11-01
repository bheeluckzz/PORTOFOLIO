"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ScrollHighlightProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
}

export function ScrollHighlight({
  text,
  className = "",
  as: Component = "p",
}: ScrollHighlightProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  return (
    <Component
      ref={containerRef as any}
      className={`flex flex-wrap gap-x-[0.28em] gap-y-1 ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={`${word}-${i}`} word={word} range={[start, end]} progress={scrollYProgress} />
        );
      })}
    </Component>
  );
}

function Word({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: any;
}) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  const color = useTransform(progress, range, ["rgba(255,255,255,0.3)", "#FFFFFF"]);

  return (
    <motion.span style={{ opacity, color }} className="inline-block transition-colors duration-150 mr-[0.25em]">
      {word}
    </motion.span>
  );
}
