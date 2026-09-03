"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface TextMotionProps {
  children?: ReactNode;
  text?: string;
  className?: string;
  delay?: number;
  stagger?: number;
  highlightWords?: string[];
  highlightClass?: string;
  normalClass?: string;
}

export function TextMotion({
  text,
  className = "",
  delay = 0,
  stagger = 0.025,
  highlightWords = [],
  highlightClass = "font-bold text-white",
  normalClass = "text-emerald-200/80",
}: TextMotionProps) {
  const shouldReduceMotion = useReducedMotion();

  if (!text) return null;

  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 4,
      filter: shouldReduceMotion ? "none" : "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.32,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
  };

  return (
    <motion.p
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15px" }}
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => {
        // Strip punctuation to check if word is highlighted
        const cleanWord = word.replace(/[.,:;]/g, "").toLowerCase();
        const isHighlighted = highlightWords.some(
          (hw) => hw.replace(/[.,:;]/g, "").toLowerCase() === cleanWord
        );

        return (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariants}
            className={`inline-block mr-[0.28em] last:mr-0 transition-colors ${
              isHighlighted ? highlightClass : normalClass
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.p>
  );
}
