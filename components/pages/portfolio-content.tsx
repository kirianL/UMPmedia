"use client";

import { useState, useEffect, useRef } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { CTAFinal } from "@/components/sections/cta-final";
import { AnimatePresence, motion } from "framer-motion";
import { RevealText } from "@/components/ui/reveal-text";
import dynamic from "next/dynamic";

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
    title: "Los Chances",
    category: "Producción",
    year: "2026",
    image: "/portfolio/productions/LosChances/LosChances.jpg",
    slug: "los-chances",
  },
  {
    title: "Sazón Colombiano",
    category: "Branding",
    year: "2026",
    image: "/portfolio/Branding/SazonColombiano/SazonColombiano.jpeg",
    slug: "sazon-colombiano",
  },
];

const HeroGradient = dynamic(
  () => import("@/components/ui/hero-gradient").then((mod) => mod.HeroGradient),
  { ssr: false }
);

export function PortfolioContent() {
  const [filter, setFilter] = useState("Todo");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      setIsMenuOpen(document.body.style.overflow === "hidden");
    };

    const observer = new MutationObserver(checkOverflow);
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    checkOverflow();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!bannerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "100px 0px 100px 0px",
        threshold: 0,
      }
    );

    observer.observe(bannerRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = projects.filter(
    (p) => filter === "Todo" || p.category === filter,
  );

  return (
    <div className="min-h-screen bg-ump-background">
      {/* Jeton-Style Header Banner with UMP Neon Green Background */}
      <div
        ref={bannerRef}
        className="bg-[#32fb00] text-black pt-40 pb-24 md:pb-32 px-6 relative z-10 overflow-hidden"
      >
        {/* Dynamic 3D Shader Gradient Background */}
        {!isMenuOpen && isInView && (
          <div className="absolute inset-0 z-0">
            <HeroGradient active={true} />
          </div>
        )}

        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-12 text-black relative z-10">
          <RevealText
            text="Portafolio"
            tag="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none select-none text-black"
          />
          
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="max-w-md md:text-right md:self-end text-black"
          >
            <p className="text-base md:text-lg font-bold leading-snug text-black/80">
              Una selección curada de nuestros proyectos más recientes. Narrativas visuales con identidad caribeña y alcance global.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area Overlapping the Banner with Smooth Rounded Top */}
      <div className="bg-ump-background rounded-t-[2.5rem] md:rounded-t-[4.5rem] -mt-10 md:-mt-16 relative z-20 pt-16 md:pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap gap-3 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                  filter === cat
                    ? "bg-[#32fb00] border-[#32fb00] text-black"
                    : "bg-transparent border-white/10 text-ump-secondary hover:border-white hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[260px]">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    layout: { type: "spring", stiffness: 320, damping: 35 },
                    opacity: { duration: 0.25, ease: "easeOut" },
                    scale: { duration: 0.25, ease: "easeOut" }
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

      <div className="mt-12">
        <CTAFinal />
      </div>
    </div>
  );
}
