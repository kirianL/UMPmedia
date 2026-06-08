"use client";

import { motion, Variants } from "framer-motion";

interface RevealTextProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  mode?: "slide" | "mask";
}

export function RevealText({
  text,
  tag = "h2",
  className = "",
  delay = 0,
  mode = "slide",
}: RevealTextProps) {
  const words = text.split(" ");
  const Tag = tag as any;

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: mode === "mask" ? 0.04 : 0.05, delayChildren: delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: mode === "mask" ? [0.16, 1, 0.3, 1] : "easeOut",
        duration: mode === "mask" ? 0.85 : 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: mode === "mask" ? "110%" : -15,
      transition: {
        ease: mode === "mask" ? [0.16, 1, 0.3, 1] : "easeOut",
        duration: mode === "mask" ? 0.85 : 0.5,
      },
    },
  };

  return (
    <Tag className={`relative ${className}`} aria-label={text}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={mode === "mask" ? "inline-flex flex-wrap overflow-hidden py-1 -my-1" : "relative inline-block"}
      >
        {words.map((word, index) => {
          if (mode === "mask") {
            return (
              <span
                key={index}
                className="inline-block overflow-hidden mr-[0.25em] py-[0.1em] -my-[0.1em]"
              >
                <motion.span
                  variants={child}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              </span>
            );
          }
          return (
            <motion.span
              variants={child}
              style={{ marginRight: "0.25em" }}
              key={index}
              className="inline-block"
            >
              {word}
            </motion.span>
          );
        })}
      </motion.span>
    </Tag>
  );
}
