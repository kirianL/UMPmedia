"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PiArrowUpRightBold, PiArrowRightBold } from "react-icons/pi";
import { SlotButton } from "@/components/ui/slot-button";

interface ProjectItem {
  title: string;
  category: string;
  description: string;
  video: string;
}

const PROJECTS: ProjectItem[] = [
  {
    title: "Buscando al dealer",
    category: "Producción Audiovisual",
    description: "Narrativa visual, dirección de arte y montaje dinámico con estándar internacional.",
    video: "/assets/videos/Presentacion1.webm",
  },
  {
    title: "Estudio UMP",
    category: "Podcast & Contenido Digital",
    description: "Espacios de diálogo, entrevistas y piezas serializadas diseñadas para redes.",
    video: "/assets/videos/Podcast .webm",
  },
  {
    title: "Campañas de Marca",
    category: "Publicidad & Comercial",
    description: "Estrategia audiovisual orientada a posicionar marcas y acelerar conversión.",
    video: "/assets/videos/publicidad1.webm",
  },
  {
    title: "Eventos y Experiencias",
    category: "Cobertura & Documentación",
    description: "Captura en vivo con ritmo ágil, iluminación cuidada y máxima fidelidad de audio.",
    video: "/assets/videos/Presentacion2.webm",
  },
];

export function Showcase() {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#f6f6f3] text-neutral-900 relative z-20 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-14 sm:mb-20"
        >
          <div className="max-w-2xl space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 leading-[1.1]">
              Producciones que{" "}
              <span className="text-emerald-600 font-normal italic">dejan huella</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-lg font-normal pt-1">
              Cada proyecto combina visión creativa, técnica avanzada y narrativa auténtica para conectar marcas con sus audiencias.
            </p>
          </div>

          {/* Action Link Button */}
          <div className="pt-2 md:pt-0">
            <SlotButton
              href="/portfolio"
              variant="primary"
              className="rounded-full bg-neutral-950 text-white hover:bg-neutral-800 font-medium text-xs sm:text-sm px-6 py-3 normal-case tracking-tight shadow-xs"
              icon={<PiArrowRightBold size={13} />}
              iconPosition="right"
            >
              Ver portafolio completo
            </SlotButton>
          </div>
        </motion.div>

        {/* 2x2 Clean Video Grid without text plastered on top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12, margin: "0px 0px -20px 0px" }}
              transition={{ duration: 0.65, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
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
// SHOWCASE CARD COMPONENT (Clean Video + External Metadata in Light Mode)
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

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay bypassed:", err);
      });
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="group relative flex flex-col rounded-3xl bg-white border border-neutral-200/80 hover:border-neutral-300 shadow-xs hover:shadow-sm transition-all duration-300 overflow-hidden"
    >
      {/* Clean, Unobstructed Video Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-neutral-900">
        
        {/* Autoplaying Loop Muted Widescreen Video - 100% clean without words */}
        {isInView ? (
          <video
            ref={videoRef}
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
        ) : (
          <div className="w-full h-full bg-neutral-900" />
        )}

        {/* Top-Right Architectural Corner SVG Bracket */}
        <svg
          className="absolute top-3 right-3 w-4 h-4 text-white/40 group-hover:text-emerald-400 pointer-events-none transition-colors duration-300"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 0H6V2H14V10H16V0Z" fill="currentColor" />
        </svg>

        {/* Bottom-Left Architectural Corner SVG Bracket */}
        <svg
          className="absolute bottom-3 left-3 w-4 h-4 text-white/40 group-hover:text-emerald-400 pointer-events-none transition-colors duration-300"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 16H10V14H2V6H0V16Z" fill="currentColor" />
        </svg>
      </div>

      {/* Structured Editorial Metadata Bar OUTSIDE the Video */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 gap-4">
        <div className="space-y-1.5">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold block">
            {project.category}
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight group-hover:text-emerald-700 transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed pt-1">
            {project.description}
          </p>
        </div>

        {/* Bottom Link indicator */}
        <div className="pt-3 flex items-center justify-between border-t border-neutral-100">
          <span className="text-xs font-medium text-neutral-400">
            Producción UMP
          </span>
          <Link
            href="/portfolio"
            className="flex items-center gap-1.5 text-xs font-semibold text-neutral-900 group-hover:text-emerald-600 transition-colors"
          >
            <span>Ver detalles</span>
            <PiArrowUpRightBold
              size={13}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
