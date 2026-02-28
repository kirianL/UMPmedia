"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "publicidad",
    title: "Publicidad & Marcas",
    client: "Cinematic Ads",
    format: "Comercial TV / Digital",
    video: "/assets/videos/Presentacion1.mp4", // Using existing videos as placeholders
    colSpan: "md:col-span-2",
  },
  {
    id: "eventos",
    title: "Eventos & Bodas",
    client: "Cobertura Exclusiva",
    format: "Highlight Reel",
    video: "/assets/videos/Presentacion2.mp4",
    colSpan: "md:col-span-1",
  },
  {
    id: "podcast",
    title: "Podcast & Entrevistas",
    client: "Studio Sessions",
    format: "Multicam 4K",
    video: "/assets/placeholder-video-1.mp4", // Fallback to placeholder if needed, or re-use
    colSpan: "md:col-span-1",
  },
  {
    id: "social",
    title: "Contenido para Redes",
    client: "Viral Content",
    format: "Vertical / Reels",
    video: "/assets/videos/Presentacion1.mp4",
    colSpan: "md:col-span-1",
  },
  {
    id: "corporativo",
    title: "Video Corporativo",
    client: "Business Identity",
    format: "Brand Story",
    video: "/assets/videos/Presentacion2.mp4",
    colSpan: "md:col-span-1",
  },
];

export function PortfolioPreview() {
  return (
    <section className="py-40 md:py-64 bg-ump-background relative overflow-hidden z-40 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Historias reales. <br />
              <span className="text-ump-accent">Producción profesional.</span>
            </h2>
            <p className="text-xl text-ump-secondary/80 font-light">
              Proyectos que conectan marcas con personas a través de una
              narrativa visual única.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="hidden md:flex items-center gap-2 text-ump-secondary hover:text-white transition-colors mt-6 md:mt-0"
          >
            Ver todo el portafolio <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-12 text-center md:hidden">
          <Link href="/portfolio">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white hover:text-black w-full rounded-full py-6 text-lg"
            >
              Explorar Portafolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  title,
  client,
  format,
  colSpan,
}: {
  title: string;
  client: string;
  format: string;
  video: string;
  colSpan: string;
}) {
  return (
    <Link
      href={`/portfolio`}
      className={`group relative overflow-hidden rounded-2xl bg-ump-card/20 border border-white/5 hover:border-ump-accent transition-all duration-500 ${colSpan}`}
    >
      {/* Video Placeholder Background */}
      <div className="absolute inset-0 z-0 bg-ump-card/40 flex items-center justify-center group-hover:bg-ump-card/60 transition-colors">
        <span className="text-white/20 font-mono text-sm uppercase tracking-widest border border-white/10 px-4 py-2 rounded">
          [ Video: {title} ]
        </span>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 p-8 flex flex-col justify-between">
        {/* Play Icon - Top Right */}
        <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <Play size={20} fill="currentColor" className="text-white ml-1" />
          </div>
        </div>

        {/* Text Details - Bottom */}
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-3 text-xs font-medium text-ump-accent uppercase tracking-widest mb-2 opacity-80">
            <span>{client}</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span>{format}</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-ump-primary transition-colors">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
