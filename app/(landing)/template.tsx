"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: shouldReduceMotion ? 1 : 0.85 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.18,
        ease: [0.23, 1, 0.32, 1],
      }}
      className="w-full flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
}



