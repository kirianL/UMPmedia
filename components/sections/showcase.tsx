"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectItem {
  title: string;
  category: string;
  video: string;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Buscando al dealer",
    category: "Producción Cinematográfica",
    video: "/assets/videos/Presentacion1.webm",
  },
  {
    title: "Estudio UMP",
    category: "Podcast & Entrevistas",
    video: "/assets/videos/Podcast .webm",
  },
  {
    title: "Campañas de Marca",
    category: "Publicidad & Comercial",
    video: "/assets/videos/publicidad1.webm",
  },
  {
    title: "Eventos y Bodas",
    category: "Cobertura Premium",
    video: "/assets/videos/Presentacion2.webm",
  },
];

export function Showcase() {
  return (
    <section className="py-24 md:py-36 bg-[#0a0a0a] text-white relative z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-8 md:-mt-12 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 mb-20 md:mb-28">
          <div className="max-w-2xl space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              Producciones que <br className="hidden sm:block" />
              <span className="text-ump-accent italic font-normal">dejan huella.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-ump-secondary text-sm md:text-base leading-relaxed max-w-lg font-light"
            >
              Cada proyecto es una oportunidad para contar una historia, conectar con una audiencia y generar resultados reales.
            </motion.p>
          </div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto md:self-end"
          >
            <Link
              href="/portfolio"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#0a0a0a",
                background: "#ffffff",
                borderRadius: "4px",
                padding: "13px 26px",
                textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 14px rgba(255,255,255,0.12)",
              }}
              className="w-full sm:w-auto text-center inline-block"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 8px 20px rgba(255,255,255,0.22)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 4px 14px rgba(255,255,255,0.12)";
              }}
            >
              Ver portafolio completo
            </Link>
            <Link
              href="/services"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#ffffff",
                background: "transparent",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "4px",
                padding: "11px 26px",
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s",
              }}
              className="w-full sm:w-auto text-center inline-block"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255, 255, 255, 0.2)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              Explorar servicios
            </Link>
          </motion.div>
        </div>

        {/* 16:9 Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ShowcaseVideoCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// SHOWCASE CARD COMPONENT
// ═════════════════════════════════════════════════════════════════════════════
function ShowcaseVideoCard({ project }: { project: ProjectItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Programmatically trigger play on layout entrance to bypass desktop browser autoplay restrictions
  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay block bypassed or ignored:", err);
      });
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="group relative w-full aspect-video overflow-hidden rounded-md bg-neutral-900 border border-white/[0.03] shadow-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.02] cursor-default"
    >
      {/* Autoplaying Loop Muted Widescreen Video */}
      {isInView ? (
        <video
          ref={videoRef}
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-95 transition-opacity duration-500"
        />
      ) : (
        <div className="absolute inset-0 bg-neutral-900" />
      )}

      {/* Clean Interactive Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 select-none pointer-events-none">
        <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <span className="text-ump-accent text-xs font-bold uppercase tracking-wider block mb-1">
            {project.category}
          </span>
          <h4 className="text-lg md:text-xl font-bold text-white tracking-wide uppercase">
            {project.title}
          </h4>
        </div>
      </div>
    </div>
  );
}
