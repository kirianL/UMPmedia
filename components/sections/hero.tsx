"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: "100%" },
    show: {
      y: "0%",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ump-background text-white flex flex-col justify-center items-center pt-24 pb-32">
      {/* Background - Minimal & Clean */}
      <div className="absolute inset-0 z-0 bg-neutral-900 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 via-neutral-900 to-black opacity-90" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* NEW Location Design: Clean, Spaced, Mono */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 flex items-center gap-3 text-ump-secondary text-sm md:text-base font-medium tracking-[0.2em] uppercase"
        >
          <MapPin size={16} className="text-ump-accent" />
          <span>Desde Limón, Costa Rica</span>
        </motion.div>

        {/* Main Headline - Masked Slide Up Animation */}
        <motion.div
          className="mb-10 md:mb-16 font-black tracking-tighter leading-[0.85] text-white"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="overflow-hidden">
            <motion.h1
              variants={item}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] text-white block"
            >
              PRODUCTORA
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-2 md:mt-4">
            <motion.h1
              variants={item}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] text-ump-accent block"
            >
              AUDIOVISUAL
            </motion.h1>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/60 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mb-12"
        >
          Creamos narrativas visuales que conectan y perduran. <br />
          <span className="text-white font-medium">
            Desde el Caribe para el mundo.
          </span>
        </motion.p>

        {/* Buttons - High Contrast & Interaction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link href="/portfolio" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full bg-ump-accent text-white font-bold px-8 h-12 text-base hover:bg-white hover:text-black transition-all duration-300 shadow-lg cursor-pointer transform hover:translate-y-[-2px]"
            >
              Ver Portafolio
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full border-2 border-white/20 text-white bg-transparent hover:bg-white hover:text-black hover:border-white px-8 h-12 text-base font-bold transition-all duration-300 cursor-pointer transform hover:translate-y-[-2px]"
            >
              Cotizar Proyecto
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
