"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  PiArrowLeftBold,
  PiPlayFill,
  PiArrowUpRightBold,
  PiFilmSlateBold,
  PiCameraBold,
  PiPaintBrushBold,
  PiMegaphoneBold,
  PiCalendarBold,
  PiUserBold,
  PiBriefcaseBold,
  PiListBold,
} from "react-icons/pi";
import { CTAFinal } from "@/components/sections/cta-final";
import type { PortfolioProject } from "@/lib/portfolio-data";

/* Category → icon mapping */
function getCategoryIcon(category: string) {
  switch (category.toLowerCase()) {
    case "producción":
      return <PiFilmSlateBold size={14} />;
    case "fotografía":
      return <PiCameraBold size={14} />;
    case "branding":
      return <PiPaintBrushBold size={14} />;
    case "contenido":
      return <PiMegaphoneBold size={14} />;
    default:
      return <PiFilmSlateBold size={14} />;
  }
}

export function PortfolioDetailContent({
  project,
  nextProject,
}: {
  project: PortfolioProject;
  nextProject: PortfolioProject | null;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const facts = [
    project.client && { label: "Cliente", value: project.client, icon: <PiUserBold size={13} /> },
    project.year && { label: "Año", value: project.year, icon: <PiCalendarBold size={13} /> },
    project.category && { label: "Categoría", value: project.category, icon: getCategoryIcon(project.category) },
    project.deliverables && { label: "Servicios", value: project.deliverables, icon: <PiBriefcaseBold size={13} /> },
  ].filter(Boolean) as { label: string; value: string; icon: React.ReactNode }[];

  return (
    <div className="relative min-h-screen bg-[#f6f6f3] text-neutral-900 selection:bg-emerald-600 selection:text-white overflow-x-clip">

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              src={lightboxImg}
              alt="Ampliación"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] as const }}
        className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20"
      >

        {/* Mobile nav */}
        <div className="lg:hidden mb-6">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors py-1"
          >
            <PiArrowLeftBold size={13} className="group-hover:-translate-x-1 transition-transform duration-300 ease-out" />
            Portafolio
          </Link>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* ═══ LEFT SIDEBAR ═══ */}
          <motion.aside
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block lg:col-span-3"
          >
            <div className="sticky top-28 space-y-6">

              {/* Project Facts Card */}
              {facts.length > 0 && (
                <div className="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-xs space-y-4">
                  <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-neutral-400 font-bold select-none flex items-center gap-2">
                    <PiListBold size={13} />
                    Ficha técnica
                  </p>
                  <dl className="space-y-3">
                    {facts.map((fact) => (
                      <div key={fact.label} className="flex items-start gap-2.5">
                        <span className="text-neutral-400 mt-0.5 shrink-0">{fact.icon}</span>
                        <div>
                          <dt className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                            {fact.label}
                          </dt>
                          <dd className="text-sm font-medium text-neutral-950 leading-snug mt-0.5">
                            {fact.value}
                          </dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              )}

              {/* Credits Card */}
              {project.credits.length > 0 && (
                <div className="bg-white border border-neutral-200/80 rounded-xl p-5 shadow-xs">
                  <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-neutral-400 font-bold select-none mb-4">
                    Equipo
                  </p>
                  <ul className="space-y-2.5">
                    {project.credits.map((credit) => (
                      <li
                        key={`${credit.role}-${credit.name}`}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <span className="text-[11px] text-neutral-400 shrink-0">{credit.role}</span>
                        <span className="text-right text-xs font-semibold text-neutral-950">{credit.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.aside>

          {/* ═══ MAIN CONTENT ═══ */}
          <main className="lg:col-span-6">
            <motion.article
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-neutral-200/80 rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            >

              {/* Desktop breadcrumb */}
              <div className="hidden lg:flex items-center mb-6 pb-2 border-b border-neutral-100">
                <Link
                  href="/portfolio"
                  className="group inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-950 transition-colors"
                >
                  <PiArrowLeftBold size={13} className="group-hover:-translate-x-1 transition-transform duration-300 ease-out" />
                  Portafolio
                </Link>
              </div>

              {/* Category + Year */}
              <div className="flex items-center flex-wrap gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 select-none">
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold tracking-widest">
                  {getCategoryIcon(project.category)}
                  {project.category}
                </span>
                <span className="text-neutral-300">|</span>
                <span className="flex items-center gap-1.5 text-neutral-600 font-semibold">
                  <PiCalendarBold size={13} className="text-neutral-400" />
                  {project.year}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[-0.035em] leading-[1.04] text-neutral-950 mb-3">
                {project.title}
              </h1>

              {/* Subtitle */}
              {project.subtitle && (
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-medium mb-8">
                  {project.subtitle}
                </p>
              )}

              {/* Featured Image / Video */}
              <div className="relative mb-8 sm:mb-10 overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-950 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                {project.videoYoutubeId && playing ? (
                  <div className="relative w-full aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.videoYoutubeId}?autoplay=1&rel=0`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                ) : (
                  <motion.div
                    initial={shouldReduceMotion ? false : { scale: 1.02, filter: "blur(2px)", opacity: 0.95 }}
                    animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full aspect-video"
                  >
                    <Image
                      src={
                        project.videoYoutubeId
                          ? `https://img.youtube.com/vi/${project.videoYoutubeId}/maxresdefault.jpg`
                          : project.coverImage
                      }
                      alt={project.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                      className="object-cover"
                    />
                    {project.videoYoutubeId && (
                      <button
                        type="button"
                        onClick={() => setPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/35 transition-colors duration-200 cursor-pointer group"
                        aria-label="Reproducir video"
                      >
                        <span className="flex size-16 sm:size-20 items-center justify-center rounded-full bg-white/95 text-neutral-950 shadow-lg group-hover:shadow-xl transition-[transform,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105 group-active:scale-95">
                          <PiPlayFill size={26} className="ml-1" />
                        </span>
                      </button>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Mobile facts */}
              {facts.length > 0 && (
                <div className="lg:hidden mb-8 grid grid-cols-2 gap-3 p-4 bg-neutral-50 rounded-xl border border-neutral-200/60">
                  {facts.map((fact) => (
                    <div key={fact.label} className="flex items-start gap-2">
                      <span className="text-neutral-400 mt-0.5 shrink-0">{fact.icon}</span>
                      <div>
                        <dt className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">{fact.label}</dt>
                        <dd className="text-xs font-semibold text-neutral-950 mt-0.5">{fact.value}</dd>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Story content */}
              {(project.lead || project.story.length > 0) && (
                <div className="mb-8">
                  {project.lead && (
                    <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-medium mb-6 pb-6 border-b border-neutral-100">
                      {project.lead}
                    </p>
                  )}
                  {project.story.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[15px] sm:text-base text-neutral-600 leading-relaxed mb-4 last:mb-0"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Mobile credits */}
              {project.credits.length > 0 && (
                <div className="lg:hidden mb-8 border-t border-neutral-100 pt-6">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold mb-4">
                    Equipo
                  </p>
                  <ul className="space-y-2">
                    {project.credits.map((credit) => (
                      <li
                        key={`${credit.role}-${credit.name}`}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <span className="text-[11px] text-neutral-400">{credit.role}</span>
                        <span className="text-right text-xs font-semibold text-neutral-950">{credit.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery — masonry style with lightbox */}
              {project.gallery.length > 0 && (
                <section className="border-t border-neutral-100 pt-8">
                  <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-neutral-400 font-bold mb-5 select-none">
                    Galería
                  </p>
                  <div className="columns-1 sm:columns-2 gap-3">
                    {project.gallery.map((image, i) => (
                      <motion.figure
                        key={image.src}
                        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{ duration: 0.45, delay: Math.min(i, 4) * 0.06, ease: [0.23, 1, 0.32, 1] as const }}
                        className="mb-3 break-inside-avoid overflow-hidden rounded-xl border border-neutral-200/60 bg-neutral-100 cursor-pointer group"
                        onClick={() => setLightboxImg(image.src)}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="block h-auto w-full transition-[filter] duration-300 group-hover:brightness-[0.85]"
                        />
                        {/* Hover hint */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none">
                          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md">
                            <PiArrowUpRightBold className="text-neutral-950" size={16} />
                          </span>
                        </div>
                      </motion.figure>
                    ))}
                  </div>
                </section>
              )}
            </motion.article>
          </main>

          {/* ═══ RIGHT SIDEBAR ═══ */}
          <motion.aside
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block lg:col-span-3"
          >
            <div className="sticky top-28 space-y-8">

              {/* Next project card */}
              {nextProject && (
                <div className="space-y-3">
                  <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-neutral-400 font-bold select-none">
                    Siguiente proyecto
                  </p>
                  <Link
                    href={`/portfolio/${nextProject.slug}`}
                    className="group block bg-white border border-neutral-200/80 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:border-neutral-300 transition-[border-color,box-shadow] duration-300 cursor-pointer"
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
                      <Image
                        src={nextProject.coverImage}
                        alt={nextProject.title}
                        fill
                        sizes="300px"
                        className="object-cover transition-[filter] duration-300 group-hover:brightness-[0.8]"
                      />
                      {/* Hover arrow */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]">
                          <PiArrowUpRightBold className="text-neutral-950" size={15} />
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 font-semibold">
                        {nextProject.category}
                      </span>
                      <h3 className="text-sm font-bold text-neutral-950 tracking-tight group-hover:text-emerald-700 transition-colors duration-200 leading-snug">
                        {nextProject.title}
                      </h3>
                      <span className="text-[10px] font-mono text-neutral-400">{nextProject.year}</span>
                    </div>
                  </Link>
                </div>
              )}

              {/* CTA to portfolio */}
              <Link
                href="/portfolio"
                className="group flex items-center justify-between gap-3 bg-white border border-neutral-200/80 rounded-xl p-4 shadow-xs hover:shadow-md hover:border-neutral-300 transition-[border-color,box-shadow] duration-300 cursor-pointer"
              >
                <div>
                  <p className="text-xs font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors duration-200">
                    Ver todos los proyectos
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Volver al portafolio
                  </p>
                </div>
                <PiArrowUpRightBold
                  size={14}
                  className="text-neutral-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                />
              </Link>
            </div>
          </motion.aside>

        </div>
      </motion.div>

      <CTAFinal />
    </div>
  );
}
