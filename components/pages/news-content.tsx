"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PiPlusBold } from "react-icons/pi";
import { CTAFinal } from "@/components/sections/cta-final";
import { newsArticles } from "@/lib/news-data";

export function NewsContent() {
  const featuredArticle = newsArticles[0];
  const standardArticles = newsArticles.slice(1);

  return (
    <div className="min-h-screen bg-[#f6f6f3] text-neutral-900 selection:bg-neutral-950 selection:text-white">
      
      {/* Editorial Header Section matching Fabrica reference */}
      <section className="pt-36 sm:pt-44 md:pt-48 pb-14 sm:pb-20 border-b border-neutral-200/60">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Main Giant Display Headline - Title Case with period */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-bold tracking-tight text-neutral-950 mb-12 sm:mb-16">
            Noticias.
          </h1>

          {/* Subtitle Row with exact two-tone typography from Fabrica */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-start">
            
            {/* Left Col: Two-tone bold statement */}
            <div className="md:col-span-8 lg:col-span-8">
              <p className="text-xl sm:text-2xl md:text-[1.65rem] font-normal leading-snug tracking-tight text-neutral-500">
                <span className="font-bold text-neutral-950">Perspectivas y coberturas exclusivas</span> en producción audiovisual, cine y estrategia digital para hacer destacar tu marca.
              </p>
            </div>

            {/* Right Col: Light context description */}
            <div className="md:col-span-4 lg:col-span-4 md:pt-1">
              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                Desde rodajes en el Caribe hasta estándares de postproducción cinematográfica—todo lo que necesitas para tu visión.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Main Articles Grid matching Fabrica layout */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            
            {/* 1. Large Hero Card (Spans 2 cols on Desktop, Synchronized Motion Zoom + Blur) */}
            {featuredArticle && (
              <motion.div 
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="lg:col-span-2 md:col-span-2"
              >
                <Link
                  href={`/news/${featuredArticle.slug}`}
                  className="relative flex flex-col justify-between h-full min-h-[460px] sm:min-h-[500px] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200/60 p-7 sm:p-9 shadow-xs"
                >
                  {/* Full-bleed Photo with Synchronized Parallax Zoom + Blur */}
                  <motion.div
                    variants={{
                      rest: {
                        scale: 1,
                        filter: "blur(0px)",
                      },
                      hover: {
                        scale: 1.06,
                        filter: "blur(5px)",
                      },
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute inset-0 w-full h-full will-change-[transform,filter]"
                  >
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* High-End Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 z-10 pointer-events-none" />

                  {/* Top Date */}
                  <div className="relative z-20 text-xs sm:text-sm text-white/70 font-normal">
                    {featuredArticle.date}
                  </div>

                  {/* Bottom Content Row */}
                  <div className="relative z-20 space-y-2.5 pt-32">
                    <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-bold text-white leading-tight tracking-tight">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed line-clamp-2">
                      {featuredArticle.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* 2. Standard Cards (Expanding Image Banner on Hover + Top-Right Plus Icon) */}
            {standardArticles.map((article) => (
              <motion.div
                key={article.slug}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="lg:col-span-1 md:col-span-1 flex flex-col"
              >
                <Link
                  href={`/news/${article.slug}`}
                  className="group relative flex flex-col justify-between h-full min-h-[440px] sm:min-h-[480px] rounded-3xl bg-white border border-neutral-200/80 p-6 sm:p-7 shadow-xs hover:border-neutral-300 transition-colors duration-200 overflow-hidden"
                >
                  {/* Top-Right Plus Icon (stays fixed in the corner) */}
                  <div className="absolute top-6 sm:top-7 right-6 sm:right-7 z-10">
                    <div className="w-6 h-6 rounded-full bg-neutral-950 text-white flex items-center justify-center shadow-xs group-hover:bg-neutral-800 group-hover:scale-105 transition-all duration-300">
                      <PiPlusBold size={11} />
                    </div>
                  </div>

                  {/* Expanding Thumbnail Container - Soft, calm and slower entrance/exit */}
                  <div className="relative w-16 h-16 group-hover:w-[calc(100%-2.25rem)] group-hover:h-40 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/60 shrink-0 mb-6 transition-[width,height] duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[width,height]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      className="object-cover"
                    />
                  </div>

                  {/* Bottom Content Area */}
                  <div className="space-y-2 mt-auto">
                    <div className="text-xs text-neutral-400 font-normal">
                      {article.date}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-neutral-950 leading-snug tracking-tight group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* Global CTA Section */}
      <CTAFinal />
    </div>
  );
}

