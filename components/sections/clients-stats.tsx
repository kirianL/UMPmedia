"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

function StatCounter({ value, suffix = "", label, description }: StatItemProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
  }, [springValue]);

  return (
    <div className="flex flex-col p-6 md:p-8 bg-ump-alt/60 rounded-2xl md:rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-ump-accent/30 transition-colors duration-500">
      <div className="text-4xl md:text-6xl font-black text-white mb-2 flex items-baseline tracking-tight">
        <span ref={ref}>0</span>
        <span className="text-ump-accent ml-0.5">{suffix}</span>
      </div>
      <div className="text-lg font-bold text-white mb-1 group-hover:text-ump-accent transition-colors duration-300">
        {label}
      </div>
      <div className="text-sm text-ump-secondary leading-relaxed">
        {description}
      </div>
    </div>
  );
}

const CLIENTS = [
  "PORT OF LIMÓN",
  "CARIBE S.A.",
  "ECO-TOURISM CR",
  "SURF SOCIETY",
  "COSTA RICA MUSIC FEST",
  "COCO BRANDS",
  "ATLANTIC LOGISTICS",
  "LIMÓN ATHLETICS",
  "CARIBBEAN ROOTS",
  "ZEAL APPAREL",
];

export function ClientsStats() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-32 bg-ump-background relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 z-20 border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-10 md:mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-6xl font-black text-white leading-none tracking-tighter uppercase mb-4 md:mb-6">
            Resultados que <br />
            <span className="text-ump-accent italic">Hablan por sí solos</span>
          </h2>
          <p className="text-lg text-ump-secondary max-w-lg">
            No solo hacemos videos; construimos impacto medible y recordación de marca para empresas que buscan destacar globalmente.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
          <StatCounter
            value={150}
            suffix="+"
            label="Proyectos Entregados"
            description="De formato comercial, documental, videoclips y eventos masivos."
          />
          <StatCounter
            value={60}
            suffix="+"
            label="Clientes Felices"
            description="Marcas locales y globales que confían en nuestra visión creativa."
          />
          <StatCounter
            value={10}
            suffix="M+"
            label="Reproducciones"
            description="Impacto masivo en plataformas digitales y redes sociales."
          />
          <StatCounter
            value={8}
            suffix="+"
            label="Años de Historia"
            description="Liderando la innovación y calidad audiovisual desde Limón."
          />
        </div>

        {/* Clients Marquee */}
        <div className="relative w-full overflow-hidden py-6 md:py-10 border-y border-white/5 bg-ump-alt/20">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ump-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ump-background to-transparent z-10 pointer-events-none" />
          
          <div className="flex select-none overflow-hidden gap-12 whitespace-nowrap">
            {/* Direct Marquee loop */}
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
              className="flex gap-12 items-center flex-shrink-0 min-w-full"
            >
              {[...CLIENTS, ...CLIENTS].map((client, idx) => (
                <span
                  key={idx}
                  className="text-lg md:text-3xl font-black text-white/30 tracking-tight uppercase hover:text-ump-accent transition-colors duration-300 pointer-events-auto cursor-default font-mono"
                >
                  // {client}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
