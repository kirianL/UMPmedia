"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { CTAFinal } from "@/components/sections/cta-final";
import { AnimatePresence, motion } from "framer-motion";
import { RevealText } from "@/components/ui/reveal-text";
import { SlotBadge } from "@/components/ui/slot-badge";

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
  className?: string;
}

const projects: ProjectItem[] = [
  {
    title: "Buscando al dealer",
    category: "Producción",
    year: "2026",
    image: "/portfolio/productions/BuscandoAlDealer/BusquedaDealer_TL.jpg",
    slug: "buscando-al-dealer",
  },
  {
    title: "La Family",
    category: "Producción",
    year: "2026",
    image: "/portfolio/productions/LaFamily/LaFamily.jpg",
    slug: "la-family",
  },
  {
    title: "Sazón Colombiano",
    category: "Branding",
    year: "2026",
    image: "/portfolio/Branding/SazonColombiano/SazonColombiano.jpeg",
    slug: "sazon-colombiano",
  },
];

export function PortfolioContent() {
  const [filter, setFilter] = useState("Todo");

  const filteredProjects = projects.filter(
    (p) => filter === "Todo" || p.category === filter,
  );

  return (
    <div className="min-h-screen bg-ump-background">
      {/* Jeton-Style Header Banner with UMP Neon Green Background */}
      <div className="bg-[#059669] text-white pt-40 pb-24 md:pb-32 px-6 relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-12 text-white">
          <div>
            <div className="mb-3">
              <SlotBadge
                text="Proyectos Destacados"
                variant="dark"
                className="bg-black/90 text-white border-black"
              />
            </div>
            <RevealText
              text="Portafolio"
              tag="h1"
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none select-none text-white"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.35, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-md md:text-right md:self-end text-white"
          >
            <p className="text-base md:text-lg font-bold leading-snug text-white/90">
              Una selección curada de nuestros proyectos más recientes. Narrativas visuales con identidad caribeña y alcance global.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area Overlapping the Banner with Smooth Rounded Top */}
      <div className="bg-ump-background rounded-t-[2.5rem] md:rounded-t-[4.5rem] -mt-10 md:-mt-16 relative z-20 pt-16 md:pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Fluid Sliding Pill Filters */}
          <motion.div
            initial={{ opacity: 0, transform: "translateY(10px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.35, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-wrap gap-2.5 mb-14 p-1.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] w-fit"
          >
            {categories.map((cat) => {
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`relative px-5 py-2 rounded-xl text-xs md:text-sm font-bold uppercase tracking-wider transition-colors duration-200 select-none cursor-pointer active:scale-[0.97] ${
                    isSelected
                      ? "text-white"
                      : "text-ump-secondary hover:text-white"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="portfolio-active-filter-pill"
                      layout="position"
                      className="absolute inset-0 bg-[#059669] rounded-xl shadow-[0_2px_12px_rgba(5,150,105,0.4)]"
                      transition={{
                        type: "spring",
                        stiffness: 450,
                        damping: 35,
                        mass: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px] md:auto-rows-[280px]">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    layout: { type: "spring", stiffness: 340, damping: 32 },
                    opacity: { duration: 0.2, ease: [0.23, 1, 0.32, 1] },
                    scale: { duration: 0.2, ease: [0.23, 1, 0.32, 1] },
                  }}
                  key={project.slug}
                  className={project.className || "md:col-span-1 md:row-span-1"}
                >
                  <ProjectCard {...project} className="h-full w-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <CTAFinal />
    </div>
  );
}

