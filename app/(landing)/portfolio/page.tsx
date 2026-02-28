"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { CTAFinal } from "@/components/sections/cta-final";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

const categories = [
  "Todo",
  "Producción",
  "Fotografía",
  "Branding",
  "Contenido",
];

const projects = [
  {
    title: "Caribe Roots",
    category: "Producción",
    year: "2024",
    image: "",
    slug: "caribe-roots",
  },
  {
    title: "Neon Nights",
    category: "Contenido",
    year: "2023",
    image: "",
    slug: "neon-nights",
    className: "md:row-span-2",
  },
  {
    title: "Urban Flow",
    category: "Branding",
    year: "2024",
    image: "",
    slug: "urban-flow",
  },
  {
    title: "Puerto Viejo",
    category: "Fotografía",
    year: "2023",
    image: "",
    slug: "puerto-viejo",
  },
  {
    title: "Cacao",
    category: "Producción",
    year: "2024",
    image: "",
    slug: "cacao",
    className: "md:row-span-2",
  },
  {
    title: "Limon Vibes",
    category: "Contenido",
    year: "2023",
    image: "",
    slug: "limon-vibes",
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("Todo");

  const filteredProjects = projects.filter(
    (p) => filter === "Todo" || p.category === filter,
  );

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Portafolio
        </h1>
        <p className="text-xl text-ump-secondary max-w-xl mb-12">
          Una selección curada de nuestros proyectos más recientes.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                filter === cat
                  ? "bg-ump-accent border-ump-accent text-white"
                  : "bg-transparent border-white/10 text-ump-secondary hover:border-white hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.slug}
                className={project.className || "md:col-span-1 md:row-span-1"}
              >
                <ProjectCard {...project} className="h-full w-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="mt-32">
        <CTAFinal />
      </div>
    </div>
  );
}
