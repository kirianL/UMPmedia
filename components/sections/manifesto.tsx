"use client";

import { motion, Variants } from "framer-motion";

export function Manifesto() {
  const sentence =
    "Creemos que el Caribe tiene una historia que el mundo aún no ha visto completa. Nuestra misión es contarla con la estética que merece.";

  const words = sentence.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <section
      id="manifesto-section"
      className="py-40 md:py-80 bg-ump-background flex items-center justify-center text-center px-6 relative z-80 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 overflow-hidden border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]"
    >
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <span className="text-[20rem] md:text-[40rem] font-black leading-none uppercase select-none">
          UMP
        </span>
      </div>

      <div className="max-w-5xl relative z-10">
        <motion.p
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] md:leading-[1] tracking-tighter uppercase flex flex-wrap justify-center gap-x-[0.25em] md:gap-x-[0.2em] gap-y-[0.1em]"
        >
          {words.map((word, index) => {
            const isCaribe = word.toLowerCase().includes("caribe");
            const isMision = word.toLowerCase().includes("misión");
            const isEstetica = word.toLowerCase().includes("estética");

            return (
              <motion.span
                variants={child}
                key={index}
                className={`inline-block ${
                  isCaribe
                    ? "text-[#059669] italic"
                    : isMision || isEstetica
                      ? "border-b-4 md:border-b-8 border-[#059669]"
                      : ""
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="h-1 w-24 md:w-48 bg-[#059669] mx-auto mt-16 md:mt-24 origin-center"
        />
      </div>

      {/* Decorative Symbols */}
      <div className="absolute top-20 left-20 text-[#059669]/20 text-9xl font-black select-none hidden lg:block">
        “
      </div>
      <div className="absolute bottom-20 right-20 text-[#059669]/20 text-9xl font-black select-none hidden lg:block">
        ”
      </div>
    </section>
  );
}
