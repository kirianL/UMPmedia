"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

function StatCounter({ value, suffix = "", label, description }: StatItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const duration = 1600; // 1.6s duration
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing out quad for smooth deceleration
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * (end - start) + start);
      
      setCount(currentValue);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [inView, value]);

  return (
    <div 
      ref={containerRef}
      className="flex flex-col p-6 md:p-8 bg-ump-alt/60 rounded-2xl md:rounded-3xl border border-white/5 backdrop-blur-sm group hover:border-ump-accent/30 transition-colors duration-500"
    >
      <div className="text-4xl md:text-6xl font-black text-white mb-2 flex items-baseline tracking-tight">
        <span>{count.toLocaleString()}</span>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <StatCounter
            value={75}
            suffix="K+"
            label="YouTube"
            description="Suscriptores y reproducciones en nuestro canal de contenidos."
          />
          <StatCounter
            value={1}
            suffix="M+"
            label="TikTok"
            description="Visualizaciones y comunidad en constante crecimiento masivo."
          />
          <StatCounter
            value={1}
            suffix="M+"
            label="Instagram"
            description="Alcance mensual e interacciones con nuestra audiencia activa."
          />
        </div>
      </div>
    </section>
  );
}
