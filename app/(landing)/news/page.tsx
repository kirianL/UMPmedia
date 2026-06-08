"use client";

import { CTAFinal } from "@/components/sections/cta-final";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { RevealText } from "@/components/ui/reveal-text";

interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image: string;
  category: string;
}

const news: NewsItem[] = [
  {
    title: "Nueva producción documental en Puerto Viejo",
    date: "Oct 12, 2024",
    excerpt:
      "Un vistazo exclusivo al detrás de cámaras de nuestro último rodaje en el Caribe Sur, explorando la cultura del cacao.",
    slug: "produccion-puerto-viejo",
    image: "https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=800&auto=format&fit=crop",
    category: "Documental",
  },
  {
    title: "Lanzamiento de videoclip 'Caribe'",
    date: "Sep 28, 2024",
    excerpt:
      "Colaboración con artistas locales para crear una pieza visual que redefine la estética urbana tropical.",
    slug: "lanzamiento-videoclip-caribe",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
    category: "Producción",
  },
  {
    title: "Workshop: Iluminación para Cine",
    date: "Ago 15, 2024",
    excerpt:
      "Compartiendo técnicas avanzadas de iluminación con la comunidad creativa de Limón.",
    slug: "workshop-iluminacion",
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=800&auto=format&fit=crop",
    category: "Educación",
  },
  {
    title: "Ultimate Media Productions en el Festival de Cine",
    date: "Jul 02, 2024",
    excerpt:
      "Nuestra participación en el festival nacional con dos cortometrajes seleccionados.",
    slug: "festival-cine",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop",
    category: "Noticias",
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-ump-background">
      {/* Jeton-Style Header Banner with UMP Neon Green Background */}
      <div className="bg-[#32fb00] text-black pt-40 pb-24 md:pb-32 px-6 relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-12 text-black">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <RevealText
              text="Noticias"
              tag="h1"
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none select-none text-black"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="max-w-md md:text-right md:self-end text-black"
          >
            <p className="text-base md:text-lg font-bold leading-snug text-black/80">
              ¡Mantente al día con las novedades de Ultimate Media Productions! El pulso de nuestros rodajes, producciones y proyectos del Caribe para el mundo.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area Overlapping the Banner with Smooth Rounded Top */}
      <div className="bg-ump-background rounded-t-[2.5rem] md:rounded-t-[4.5rem] -mt-10 md:-mt-16 relative z-20 pt-16 md:pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Latest Articles Title */}
          <div className="mb-12">
            <RevealText
              text="Últimos Artículos"
              tag="h2"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            />
          </div>

          {/* Grid Layout matching Jeton's responsive cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {news.map((item, i) => (
              <motion.article
                key={item.slug}
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="group flex flex-col h-full cursor-pointer"
              >
                <Link href={`/news/${item.slug}`} className="flex flex-col h-full">
                  {/* Card Image Wrapper: aspect-video makes it smaller vertically, hover:scale removed */}
                  <div className="aspect-video w-full bg-neutral-900 rounded-2xl overflow-hidden relative mb-5 transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover"
                    />
                    
                    {/* Minimal Category Pill Tag */}
                    <div className="absolute top-4 right-4 bg-white text-black font-semibold text-xs py-1 px-3 rounded-full shadow-md select-none pointer-events-none">
                      {item.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 leading-snug group-hover:text-[#32fb00] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-ump-secondary mb-4 line-clamp-2 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-white/50 text-xs font-medium">
                      <Calendar size={12} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-20 text-center">
            <button className="text-ump-secondary hover:text-white transition-colors border-b border-white/20 pb-1 text-sm font-bold uppercase tracking-wider">
              Cargar Más
            </button>
          </div>
        </div>
      </div>

      <CTAFinal />
    </div>
  );
}
