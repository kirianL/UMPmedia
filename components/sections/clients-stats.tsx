"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SiTiktok, SiInstagram } from "react-icons/si";
import { PiTrendUpBold } from "react-icons/pi";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  subtitle: string;
  highlight?: string;
  icon: React.ReactNode;
  delay?: number;
  decimals?: number;
}

function StatCounter({
  value,
  suffix,
  label,
  subtitle,
  highlight,
  icon,
  delay = 0,
  decimals = 0,
}: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -20px 0px", amount: 0.15 });
  const [displayValue, setDisplayValue] = useState<string>(decimals > 0 ? "0.0" : "0");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [inView, delay]);

  useEffect(() => {
    if (!visible) return;

    const end = value;
    const duration = 1000;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = ease * end;
      
      if (decimals > 0) {
        setDisplayValue(current.toFixed(decimals));
      } else {
        setDisplayValue(Math.floor(current).toLocaleString());
      }

      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, [visible, value, decimals]);

  return (
    <div
      ref={ref}
      className={`group relative p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 hover:border-emerald-500/50 shadow-xs hover:shadow-sm transition-all duration-500 select-none active:scale-[0.98] overflow-hidden will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transition:
          "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      {/* Modern SVG corner architectural notch accent */}
      <svg
        className="absolute top-3 right-3 w-3.5 h-3.5 text-neutral-300 group-hover:text-emerald-600 transition-colors duration-300"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 0H0V2H12V14H14V0Z" fill="currentColor" />
      </svg>

      <div className="flex items-center justify-between mb-6">
        <div className="w-11 h-11 rounded-2xl bg-neutral-100 border border-neutral-200/60 flex items-center justify-center text-neutral-700 group-hover:text-emerald-700 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all duration-300">
          {icon}
        </div>
        <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-500 group-hover:text-neutral-700 font-semibold">
          {label}
        </span>
      </div>

      <div className="space-y-1">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl sm:text-5xl font-black text-neutral-950 tabular-nums tracking-tight leading-none">
            {displayValue}
          </span>
          <span className="text-2xl sm:text-3xl font-bold text-emerald-600 leading-none">
            {suffix}
          </span>
        </div>

        {highlight && (
          <span className="inline-block text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md mt-1 mb-0.5">
            {highlight}
          </span>
        )}

        <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed pt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export function ClientsStats() {
  return (
    <section className="py-20 sm:py-28 bg-[#f6f6f3] text-neutral-900 relative z-20 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header with smooth scroll entrance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 leading-[1.1]">
              Nuestro <span className="text-emerald-600 font-normal italic">alcance</span>
            </h2>
          </div>

          <p className="text-neutral-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
            Impacto real en las plataformas que mueven la conversación digital. Métricas de visualización y crecimiento orgánico mensual.
          </p>
        </motion.div>

        {/* Stats Grid with Real Statistics from Instagram & TikTok */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <StatCounter
            value={585}
            suffix="K+"
            label="Instagram"
            highlight="↗ +3.0K nuevos seguidores"
            subtitle="585.4K visualizaciones en el último mes de actividad"
            icon={<SiInstagram size={20} />}
            delay={0}
          />
          <StatCounter
            value={633}
            suffix="K+"
            label="TikTok"
            highlight="↑ +274% de crecimiento"
            subtitle="633.8K reproducciones de video y 35.4K me gusta"
            icon={<SiTiktok size={19} />}
            delay={70}
          />
          <StatCounter
            value={1.2}
            decimals={1}
            suffix="M+"
            label="Impacto Total"
            highlight="En los últimos 28 días"
            subtitle="Más de 1.2 millones de reproducciones acumuladas"
            icon={<PiTrendUpBold size={20} />}
            delay={140}
          />
        </div>

      </div>
    </section>
  );
}
