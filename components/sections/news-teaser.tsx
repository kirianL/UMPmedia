"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const news = [
  {
    title: "UMP firma al limonense Kenyari",
    date: "Oct 12, 2024",
    excerpt:
      "El talento local se une a la empresa de producción de contenidos audiovisuales.",
    slug: "produccion-puerto-viejo",
  },
  {
    title: "UMP se une a la empresa de producción de contenidos audiovisuales",
    date: "Sep 28, 2024",
    excerpt:
      "El talento local se une a la empresa de producción de contenidos audiovisuales.",
    slug: "lanzamiento-videoclip-caribe",
  },
  {
    title: "UMP se une a la empresa de producción de contenidos audiovisuales",
    date: "Ago 15, 2024",
    excerpt:
      "El talento local se une a la empresa de producción de contenidos audiovisuales.",
    slug: "workshop-fotografia",
  },
];

export function NewsTeaser() {
  return (
    <section className="py-32 md:py-56 bg-ump-background relative z-60 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 overflow-hidden border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
            Actualidad
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Noticias
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {news.map((item, index) => (
            <div key={index} className="group">
              <div className="aspect-video bg-ump-card mb-6 overflow-hidden rounded-sm relative">
                <div className="absolute inset-0 bg-neutral-700 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex items-center gap-2 text-ump-accent text-xs font-bold uppercase tracking-wider mb-3">
                <Calendar size={12} />
                {item.date}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ump-accent transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-ump-secondary text-sm leading-relaxed mb-4">
                {item.excerpt}
              </p>
              <Link
                href={`/news/${item.slug}`}
                className="inline-flex items-center gap-2 text-white text-sm font-bold hover:text-ump-accent transition-colors"
              >
                Leer más <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
