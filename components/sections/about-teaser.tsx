"use client";

import { useRef, useEffect } from "react";
import { PiArrowRightBold } from "react-icons/pi";
import { SlotButton } from "@/components/ui/slot-button";

export function AboutTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { rootMargin: "150px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 md:py-36 bg-[#f6f6f3] text-neutral-900 relative overflow-hidden z-20"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 leading-[1.08]">
                Cultura caribeña,{" "}
                <span className="text-emerald-600 font-normal italic block sm:inline">
                  estándar global
                </span>
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-950 font-medium leading-snug">
                Ultimate Media Productions es un estudio creativo nacido en Limón para transformar la forma en que las marcas conectan hoy.
              </p>
              
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal max-w-xl">
                Unificamos <span className="font-semibold text-neutral-950">producción audiovisual</span> de alto nivel, <span className="font-semibold text-neutral-950">estrategia y gestión de redes</span>, y <span className="font-semibold text-neutral-950">soluciones digitales</span> a medida para construir proyectos que conectan con la audiencia y generan un impacto real.
              </p>

              <div className="pt-3">
                <SlotButton
                  href="/about"
                  variant="primary"
                  className="rounded-full bg-neutral-950 text-white hover:bg-neutral-800 font-medium text-xs sm:text-sm px-6 py-3 normal-case tracking-tight shadow-xs"
                  icon={<PiArrowRightBold size={13} />}
                  iconPosition="right"
                >
                  Conoce nuestra historia
                </SlotButton>
              </div>
            </div>
          </div>

          {/* Clean Architectural Video Showcase Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl bg-neutral-950 border border-neutral-200/80 shadow-xs overflow-hidden group">
              
              {/* Autoplaying Loop Video */}
              <video
                ref={videoRef}
                src="/assets/videos/Home-detrasdecamaras.webm"
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Modern SVG corner architectural notch */}
              <svg
                className="absolute top-4 right-4 w-5 h-5 text-white/40 group-hover:text-emerald-400 pointer-events-none transition-colors duration-300"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 0H8V2H18V12H20V0Z" fill="currentColor" />
              </svg>

              <svg
                className="absolute bottom-4 left-4 w-5 h-5 text-white/40 group-hover:text-emerald-400 pointer-events-none transition-colors duration-300"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 20H12V18H2V8H0V20Z" fill="currentColor" />
              </svg>
            </div>

            {/* Subtle caption beneath video */}
            <div className="flex items-center justify-between pt-3 px-2 text-xs font-mono text-neutral-500">
              <span>Rodaje en locación</span>
              <span className="text-emerald-700 font-semibold">Limón, Costa Rica</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
