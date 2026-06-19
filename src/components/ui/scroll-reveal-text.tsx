"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollRevealText({ text, className, style }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 60%"],
  });

  const words = text.split(" ");

  return (
    <span ref={containerRef} className={cn("inline-block", className)} style={style}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = (i + 1) / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.35, 1]);

        return (
          <motion.span
            key={i}
            style={{ opacity }}
            className="inline-block mr-[0.25em] last:mr-0"
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}
