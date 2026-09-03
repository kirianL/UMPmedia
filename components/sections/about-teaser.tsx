"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PiArrowRightBold } from "react-icons/pi";
import { SlotButton } from "@/components/ui/slot-button";

export function AboutTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoInView, setVideoInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoInView && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay bypassed:", err);
      });
    }
  }, [videoInView]);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 md:py-36 bg-[#f6f6f3] text-neutral-900 relative overflow-hidden z-20"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15px" }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="space-y-3"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-semibold block">
                Identidad y Visión
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 leading-[1.08]">
                Cultura caribeña,{" "}
                <span className="text-emerald-600 font-normal italic block sm:inline">
                  estándar global
                </span>
              </h2>
            </motion.div>

            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15px" }}
              transition={{ duration: 0.35, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-neutral-950 font-medium leading-snug">
                Ultimate Media Productions es un estudio creativo independiente nacido en Limón para transformar la forma en que se cuenta el Caribe.
              </p>
              
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal max-w-xl">
                Combinamos producción audiovisual, contenido digital y tecnología para construir proyectos que conectan con las personas, transmiten identidad y dejan una huella auténtica.
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
            </motion.div>
          </div>

          {/* Clean Architectural Video Showcase Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15px" }}
            transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl bg-neutral-950 border border-neutral-200/80 shadow-xs overflow-hidden group">
              
              {/* Autoplaying Loop Video 100% clean without words */}
              {videoInView ? (
                <video
                  ref={videoRef}
                  src="/assets/videos/Home-detrasdecamaras.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              ) : (
                <div className="w-full h-full bg-neutral-950" />
              )}

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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
