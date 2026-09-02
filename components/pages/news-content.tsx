"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PiCalendarBlankBold, 
  PiClockBold, 
  PiArrowRightBold, 
  PiSparkleBold,
  PiFilmSlateBold 
} from "react-icons/pi";
import { CTAFinal } from "@/components/sections/cta-final";
import { newsArticles, NewsItem } from "@/lib/news-data";

export function NewsContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(newsArticles.map((a) => a.category)));
    return ["Todas", ...cats];
  }, []);

  // Filtered articles
  const filteredArticles = useMemo(() => {
    if (selectedCategory === "Todas") return newsArticles;
    return newsArticles.filter((a) => a.category === selectedCategory);
  }, [selectedCategory]);

  // Featured article is the first one when "Todas" is selected
  const featuredArticle = selectedCategory === "Todas" ? filteredArticles[0] : null;
  const gridArticles = selectedCategory === "Todas" ? filteredArticles.slice(1) : filteredArticles;

  return (
    <div className="min-h-screen bg-[#f6f6f3] text-neutral-900 selection:bg-neutral-950 selection:text-white">
      
      {/* Editorial Header Section */}
      <section className="pt-32 sm:pt-40 md:pt-44 pb-12 sm:pb-16 border-b border-neutral-200/60">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
            
            {/* Title Lockup */}
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.88] text-neutral-950">
                Noticias <br />
                <span className="font-serif italic font-normal text-neutral-400 lowercase tracking-tight">
                  y novedades.
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="max-w-md md:pb-2">
              <p className="text-neutral-600 text-base sm:text-lg font-normal leading-relaxed">
                El pulso de nuestros rodajes, coberturas detrás de cámaras y proyectos cinematográficos desde el Caribe para el mundo.
              </p>
            </div>

          </div>

          {/* United Segmented Control with Motion Sliding Pill */}
          <div className="mt-10 sm:mt-14 max-w-full overflow-x-auto pb-2 scrollbar-none">
            <div 
              role="tablist"
              className="inline-flex items-center gap-1 p-1 rounded-full bg-neutral-200/70 border border-neutral-300/60 select-none"
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-colors duration-150 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 ${
                      isActive
                        ? "text-neutral-950 font-bold"
                        : "text-neutral-600 hover:text-neutral-950 font-medium"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNewsCategoryTab"
                        className="absolute inset-0 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-neutral-200/80"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                          mass: 0.8,
                        }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Main Articles Container */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured Article Hero (only when "Todas" is active) */}
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="mb-12 sm:mb-16"
            >
              <Link
                href={`/news/${featuredArticle.slug}`}
                className="group block rounded-3xl md:rounded-[2.5rem] bg-white border border-neutral-200/80 p-5 sm:p-7 md:p-9 shadow-xs transition-colors duration-150"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  
                  {/* Image (7 cols) - Pure Photographic Window */}
                  <div className="lg:col-span-7 aspect-16/10 sm:aspect-16/9 w-full rounded-2xl md:rounded-[1.8rem] overflow-hidden relative bg-neutral-100">
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Content (5 cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    
                    {/* Editorial Category & Metadata Line */}
                    <div className="flex items-center flex-wrap gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3 sm:mb-4">
                      <span className="text-neutral-950 font-bold tracking-widest">{featuredArticle.category}</span>
                      <span className="text-neutral-300 font-light">|</span>
                      <span>{featuredArticle.date}</span>
                      <span className="text-neutral-300 font-light">|</span>
                      <span>4 min lectura</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-neutral-950 mb-3 sm:mb-4 leading-snug group-hover:text-emerald-700 transition-colors duration-150">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-neutral-600 text-sm sm:text-base font-normal leading-relaxed mb-6 line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-950 group-hover:text-emerald-700 transition-colors duration-150">
                      <span>Leer artículo completo</span>
                      <PiArrowRightBold size={14} />
                    </div>

                  </div>

                </div>
              </Link>
            </motion.div>
          )}

          {/* Section Sub-heading for remaining articles */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              {selectedCategory === "Todas" ? "Más publicaciones recientes" : `Artículos en ${selectedCategory}`} ({gridArticles.length})
            </h3>
            <span className="h-px flex-1 bg-neutral-200/80 max-w-xs hidden sm:block" />
          </div>

          {/* Articles Grid - Clean, Rock-Solid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence mode="wait">
              {gridArticles.map((article) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="group flex flex-col h-full"
                >
                  <Link
                    href={`/news/${article.slug}`}
                    className="flex flex-col h-full rounded-2xl md:rounded-3xl bg-white border border-neutral-200/80 p-5 sm:p-6 shadow-xs transition-colors duration-150"
                  >
                    
                    {/* Thumbnail Image - Unobstructed Cinema Photography */}
                    <div className="aspect-16/10 w-full rounded-xl overflow-hidden relative mb-5 bg-neutral-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>

                    {/* Integrated Metadata Header */}
                    <div className="flex items-center flex-wrap gap-2 text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2.5">
                      <span className="text-neutral-950 font-bold tracking-widest">{article.category}</span>
                      <span className="text-neutral-300 font-light">|</span>
                      <span>{article.date}</span>
                      <span className="text-neutral-300 font-light">|</span>
                      <span>3 min</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-950 mb-2 leading-snug group-hover:text-emerald-700 transition-colors duration-150 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Footer link cue */}
                    <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-neutral-900 group-hover:text-emerald-700 transition-colors duration-150">
                      <span className="uppercase tracking-wider text-[11px]">Leer historia</span>
                      <PiArrowRightBold size={13} />
                    </div>

                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Global CTA Section */}
      <CTAFinal />
    </div>
  );
}

