"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { PiArrowUpRightBold } from "react-icons/pi";
import { CTAFinal } from "@/components/sections/cta-final";
import type { PortfolioProject } from "@/lib/portfolio-data";

const BASE_FILTERS = ["Todo", "Producción", "Fotografía", "Branding", "Contenido"];

/* ─── Motion ─── */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export function PortfolioContent({
  projects,
}: {
  projects: PortfolioProject[];
}) {
  const [filter, setFilter] = useState("Todo");

  const filters = useMemo(() => {
    const present = new Set(projects.map((p) => p.category));
    return BASE_FILTERS.filter((f) => f === "Todo" || present.has(f));
  }, [projects]);

  const visible = projects.filter(
    (p) => filter === "Todo" || p.category === filter,
  );

  return (
    <div className="min-h-screen bg-[#f6f6f3] text-neutral-900 selection:bg-neutral-950 selection:text-white">

      {/* ═══ HEADER ═══ */}
      <section className="pt-32 pb-8 sm:pt-40 sm:pb-10">
        <div className="mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12">

          {/* Label row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] as const }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
              Portafolio
            </span>
            <span className="h-px flex-1 bg-neutral-300/60" />
            <span className="text-xs font-mono tabular-nums text-neutral-400">
              {projects.length} proyecto{projects.length !== 1 ? "s" : ""}
            </span>
          </motion.div>

          {/* Headline — editorial, compact */}
          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] as const }}
              className="text-[2.6rem] sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.05]"
            >
              Proyectos que{" "}
              <span className="text-emerald-600 font-normal italic">
                conectan
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.06, ease: [0.23, 1, 0.32, 1] as const }}
            className="max-w-lg text-sm sm:text-base leading-relaxed text-neutral-500"
          >
            <span className="font-semibold text-neutral-950">Lo que está hecho</span>
            {" — "}producción audiovisual, marca, fotografía y contenido
          </motion.p>
        </div>
      </section>

      {/* ═══ FILTERS ═══ */}
      <section className="mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12 pb-8 sm:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: [0.23, 1, 0.32, 1] as const }}
          role="tablist"
          aria-label="Filtrar por categoría"
          className="flex flex-wrap gap-2"
        >
          {filters.map((item) => {
            const selected = filter === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setFilter(item)}
                className={`cursor-pointer rounded-full px-4 py-2 text-[11px] font-semibold tracking-[0.04em] uppercase transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  selected
                    ? "bg-neutral-950 text-white shadow-sm"
                    : "bg-neutral-200/60 text-neutral-500 hover:bg-neutral-300/60 hover:text-neutral-800"
                }`}
              >
                {item}
              </button>
            );
          })}
        </motion.div>
      </section>

      {/* ═══ PROJECT GRID ═══ */}
      <section className="mx-auto w-full max-w-[1360px] px-6 sm:px-8 lg:px-12 pb-20 sm:pb-28">
        <AnimatePresence mode="wait">
          {visible.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center text-sm text-neutral-500"
            >
              No hay piezas en esta categoría
            </motion.p>
          ) : (
            <motion.div
              key={filter}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
            >
              {visible.map((project, i) => (
                <motion.div
                  key={project.slug}
                  variants={cardReveal}
                  className={
                    /* First card and every 5th after that spans 2 cols for visual rhythm */
                    (i === 0 || (i > 0 && (i - 0) % 5 === 0)) && visible.length > 2
                      ? "sm:col-span-2"
                      : ""
                  }
                >
                  <ProjectCard
                    project={project}
                    index={i}
                    isWide={(i === 0 || (i > 0 && (i - 0) % 5 === 0)) && visible.length > 2}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <CTAFinal />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PROJECT CARD
   ═══════════════════════════════════════════════════════════════════ */
function ProjectCard({
  project,
  index,
  isWide,
}: {
  project: PortfolioProject;
  index: number;
  isWide: boolean;
}) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group relative flex flex-col rounded-2xl sm:rounded-3xl bg-white border border-neutral-200/80 hover:border-neutral-300 shadow-xs hover:shadow-md transition-[border-color,box-shadow] duration-300 overflow-hidden cursor-pointer"
    >
      {/* Image — NO scale/zoom */}
      <div className={`relative w-full overflow-hidden bg-neutral-100 ${isWide ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes={isWide ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
          className="object-cover transition-[filter] duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:brightness-[0.75]"
        />

        {/* Hover overlay with arrow */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg translate-y-3 group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <PiArrowUpRightBold className="text-neutral-950" size={18} />
          </span>
        </div>

        {/* Corner brackets */}
        <svg
          className="absolute top-3 right-3 w-3.5 h-3.5 text-white/0 group-hover:text-emerald-400 pointer-events-none transition-colors duration-300"
          viewBox="0 0 16 16" fill="none"
        >
          <path d="M16 0H6V2H14V10H16V0Z" fill="currentColor" />
        </svg>
        <svg
          className="absolute bottom-3 left-3 w-3.5 h-3.5 text-white/0 group-hover:text-emerald-400 pointer-events-none transition-colors duration-300"
          viewBox="0 0 16 16" fill="none"
        >
          <path d="M0 16H10V14H2V6H0V16Z" fill="currentColor" />
        </svg>
      </div>

      {/* Metadata */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-3">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold">
              {project.category}
            </span>
            <span className="text-neutral-300">·</span>
            <span className="text-[10px] sm:text-xs font-mono text-neutral-400 tabular-nums">
              {project.year}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight group-hover:text-emerald-700 transition-colors duration-200 leading-snug">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed line-clamp-2">
              {project.subtitle}
            </p>
          )}
        </div>

        <div className="pt-2 flex items-center justify-between border-t border-neutral-100">
          <span className="font-mono text-[10px] text-neutral-400 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-neutral-400 group-hover:text-emerald-600 transition-colors duration-200">
            Ver proyecto
            <PiArrowUpRightBold
              size={11}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
