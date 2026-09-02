"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";

interface RevealTextProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  mode?: "mask" | "slide" | string;
}

export function RevealText({
  text,
  tag = "h2",
  className = "",
  delay = 0,
  stagger = 0.04,
}: RevealTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");
  const Tag = tag as any;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      transform: shouldReduceMotion ? "none" : "translate3d(0, 115%, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.55,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <Tag className={`relative ${className}`} aria-label={text}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="inline-flex flex-wrap justify-center"
      >
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block overflow-hidden mr-[0.24em] last:mr-0 py-[0.08em] -my-[0.08em] whitespace-nowrap"
          >
            <motion.span
              variants={wordVariants}
              className="inline-block will-change-transform"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

