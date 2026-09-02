"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { SiYoutube, SiTiktok, SiInstagram } from "react-icons/si";
import { SlotBadge } from "@/components/ui/slot-badge";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

function StatCounter({ value, suffix, label, icon, delay = 0 }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timeout);
  }, [inView, delay]);

  useEffect(() => {
    if (!visible) return;

    const end = value;
    const duration = 800;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Emil's strong ease-out: 1 - (1 - progress)^3.5
      const ease = 1 - Math.pow(1 - progress, 3.5);
      setCount(Math.floor(ease * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }, [visible, value]);

  return (
    <div
      ref={ref}
      className={`group relative flex items-center gap-5 p-5 md:p-7 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-ump-accent/30 transition-[transform,opacity,background-color,border-color] duration-250 ease-out select-none active:scale-[0.98] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      style={{
        transform: visible ? "translate3d(0, 0, 0)" : "translate3d(0, 12px, 0)",
        transition: "opacity 0.35s cubic-bezier(0.23, 1, 0.32, 1), transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.2s, border-color 0.2s",
      }}
    >
      {/* Icon */}
      <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl bg-ump-alt border border-white/10 flex items-center justify-center text-ump-accent group-hover:bg-ump-accent group-hover:text-black group-hover:border-ump-accent transition-[background-color,color,border-color,transform] duration-200 group-hover:scale-105">
        {icon}
      </div>

      {/* Number + Label */}
      <div className="flex flex-col min-w-0">
        <div className="flex items-baseline gap-0.5">
          <span className="text-3xl md:text-4xl font-black text-white tabular-nums tracking-tight leading-none">
            {count.toLocaleString()}
          </span>
          <span className="text-xl md:text-2xl font-black text-ump-accent leading-none">
            {suffix}
          </span>
        </div>
        <span className="text-sm md:text-base font-semibold text-white/60 mt-1 leading-tight group-hover:text-white/90 transition-colors duration-200">
          {label}
        </span>
      </div>
    </div>
  );
}

export function ClientsStats() {
  return (
    <section className="py-14 md:py-24 bg-ump-background relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 z-20 border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-8 md:mb-12 max-w-2xl">
          <div className="mb-3">
            <SlotBadge text="Comunidad & Alcance" variant="accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-none tracking-tighter uppercase mb-3 md:mb-4">
            Nuestro{" "}
            <span className="text-ump-accent italic">alcance.</span>
          </h2>
          <p className="text-sm md:text-base text-ump-secondary max-w-lg leading-relaxed">
            Impacto real en las plataformas que importan. Números que reflejan la conexión con nuestra audiencia.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          <StatCounter
            value={75}
            suffix="K+"
            label="YouTube"
            icon={<SiYoutube size={22} />}
            delay={0}
          />
          <StatCounter
            value={1}
            suffix="M+"
            label="TikTok"
            icon={<SiTiktok size={22} />}
            delay={80}
          />
          <StatCounter
            value={1}
            suffix="M+"
            label="Instagram"
            icon={<SiInstagram size={22} />}
            delay={160}
          />
        </div>
      </div>
    </section>
  );
}

