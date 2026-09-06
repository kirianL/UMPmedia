"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PiArrowUpRightBold } from "react-icons/pi";
import { CTAFinal } from "@/components/sections/cta-final";
import { RevealText } from "@/components/ui/reveal-text";

const categories = [
  "Todo",
  "Producción",
  "Fotografía",
  "Branding",
  "Contenido",
];

interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  slug: string;
  description?: string;
}

const projects: ProjectItem[] = [
  {
    title: "Buscando al dealer",
    category: "Producción",
    year: "2026",
    image: "/portfolio/productions/BuscandoAlDealer/BusquedaDealer_TL.jpg",
    slug: "buscando-al-dealer",
    description: "Narrativa visual y dirección de arte inmersiva.",
  },
  {
    title: "La Family",
    category: "Producción",
    year: "2026",
    image: "/portfolio/productions/LaFamily/LaFamily.jpg",
    slug: "la-family",
    description: "Montaje dinámico enfocado en el estilo de vida.",
  },
  {
    title: "Sazón Colombiano",
    category: "Branding",
    year: "2026",
    image: "/portfolio/Branding/SazonColombiano/SazonColombiano.jpeg",
    slug: "sazon-colombiano",
    description: "Identidad visual y diseño de marca para restaurante.",
  },
];

export function PortfolioContent() {
  const [filter, setFilter] = useState("Todo");

  const filteredProjects = projects.filter(
    (p) => filter === "Todo" || p.category === filter,
  );

  return (
    <div className="min-h-screen bg-[#f6f6f3] flex flex-col">
      
      {/* Editorial Header Section */}
      <section className="pt-40 md:pt-48 pb-12 px-6 sm:px-8 lg:px-12 max-w-[1360px] mx-auto w-full relative z-10">
        <div className="max-w-4xl space-y-4">
          <RevealText
            text="Nuestro Portafolio"
            tag="h1"
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-neutral-950 leading-[1.05] text-left block justify-start"
            stagger={0.04}
          />
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-neutral-600 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal pt-2"
          >
            Una selección curada de nuestros proyectos más recientes. Narrativas visuales con identidad caribeña y alcance global.
          </motion.p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-24 px-6 sm:px-8 lg:px-12 max-w-[1360px] mx-auto w-full relative z-20 flex-1">
        
        {/* Static Clean Filters */}
        <div className="flex flex-wrap gap-2 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isSelected
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "bg-white text-neutral-600 border border-neutral-200/80 hover:border-neutral-300 hover:text-neutral-900"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <PortfolioProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-neutral-500">
            No hay proyectos en esta categoría por ahora.
          </div>
        )}

      </section>

      <CTAFinal />
    </div>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// PORTFOLIO CARD COMPONENT (Clean Image + External Metadata)
// ═════════════════════════════════════════════════════════════════════════════
function PortfolioProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group flex flex-col rounded-3xl bg-white border border-neutral-200/80 hover:border-neutral-300 shadow-xs hover:shadow-sm transition-[border-color,box-shadow,transform] duration-300 overflow-hidden active:scale-[0.98]"
    >
      {/* Image Container with Architectural Corners */}
      <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-[4/3] overflow-hidden bg-neutral-100">
        
        {/* Static Image with Hover Scale */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />

        {/* Top-Right Architectural Corner SVG Bracket */}
        <svg
          className="absolute top-3 right-3 w-4 h-4 text-white/40 group-hover:text-white/80 pointer-events-none transition-colors duration-300 drop-shadow-sm"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 0H6V2H14V10H16V0Z" fill="currentColor" />
        </svg>

        {/* Bottom-Left Architectural Corner SVG Bracket */}
        <svg
          className="absolute bottom-3 left-3 w-4 h-4 text-white/40 group-hover:text-white/80 pointer-events-none transition-colors duration-300 drop-shadow-sm"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 16H10V14H2V6H0V16Z" fill="currentColor" />
        </svg>
      </div>

      {/* External Metadata Block */}
      <div className="p-6 flex flex-col justify-between flex-1 gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-600 font-semibold block">
              {project.category}
            </span>
            <span className="text-[11px] font-mono text-neutral-400">
              {project.year}
            </span>
          </div>
          <h3 className="text-xl font-bold text-neutral-950 tracking-tight group-hover:text-emerald-700 transition-colors duration-200">
            {project.title}
          </h3>
          {project.description && (
            <p className="text-sm text-neutral-600 font-normal leading-relaxed pt-1 line-clamp-2">
              {project.description}
            </p>
          )}
        </div>

        {/* Action Link Indicator */}
        <div className="pt-4 mt-auto flex items-center justify-between border-t border-neutral-100">
          <span className="text-xs font-medium text-neutral-400">
            Ver caso de estudio
          </span>
          <span className="flex items-center text-neutral-900 group-hover:text-emerald-600 transition-colors">
            <PiArrowUpRightBold
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
