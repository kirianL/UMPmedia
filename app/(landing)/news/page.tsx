"use client";

import { CTAFinal } from "@/components/sections/cta-final";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const news = [
  {
    title: "Nueva producción documental en Puerto Viejo",
    date: "Oct 12, 2024",
    excerpt:
      "Un vistazo exclusivo al detrás de cámaras de nuestro último rodaje en el Caribe Sur, explorando la cultura del cacao.",
    slug: "produccion-puerto-viejo",
    image: "",
  },
  {
    title: "Lanzamiento de videoclip 'Caribe'",
    date: "Sep 28, 2024",
    excerpt:
      "Colaboración con artistas locales para crear una pieza visual que redefine la estética urbana tropical.",
    slug: "lanzamiento-videoclip-caribe",
    image: "",
  },
  {
    title: "Workshop: Iluminación para Cine",
    date: "Ago 15, 2024",
    excerpt:
      "Compartiendo técnicas avanzadas de iluminación con la comunidad creativa de Limón.",
    slug: "workshop-iluminacion",
    image: "",
  },
  {
    title: "UMPmedia en el Festival de Cine",
    date: "Jul 02, 2024",
    excerpt:
      "Nuestra participación en el festival nacional con dos cortometrajes seleccionados.",
    slug: "festival-cine",
    image: "",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 mb-24">
        <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
          Actualidad
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Proyectos, Ideas y<br /> Procesos.
        </h1>
      </div>

      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 gap-12 max-w-4xl">
          {news.map((item, i) => (
            <article
              key={i}
              className="group border-b border-white/5 pb-12 last:border-0 md:flex md:gap-8 items-start"
            >
              <div className="aspect-video md:w-1/3 bg-neutral-800 rounded-lg overflow-hidden relative mb-6 md:mb-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                {/* Image Placeholder */}
              </div>
              <div className="md:w-2/3">
                <div className="flex items-center gap-2 text-ump-accent text-xs font-bold uppercase tracking-wider mb-3">
                  <Calendar size={14} /> {item.date}
                </div>
                <Link href={`/news/${item.slug}`}>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-ump-accent transition-colors">
                    {item.title}
                  </h2>
                </Link>
                <p className="text-ump-secondary text-lg mb-6 leading-relaxed">
                  {item.excerpt}
                </p>
                <Link
                  href={`/news/${item.slug}`}
                  className="inline-flex items-center gap-2 text-white font-bold text-sm border-b border-ump-accent pb-1 hover:text-ump-accent transition-colors"
                >
                  Leer Artículo <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-ump-secondary hover:text-white transition-colors border-b border-white/20 pb-1 text-sm font-bold uppercase tracking-wider">
            Cargar Más
          </button>
        </div>
      </section>

      <CTAFinal />
    </div>
  );
}
