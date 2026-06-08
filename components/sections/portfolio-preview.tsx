"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "publicidad",
    title: "Publicidad & Marcas",
    client: "Anuncios Publicitarios",
    format: "Comercial TV / Digital",
    video: "/assets/videos/publicidad1.mp4",
    colSpan: "md:col-span-2",
  },
  {
    id: "eventos",
    title: "Eventos & Bodas",
    client: "Cobertura Exclusiva",
    format: "Resumen de Evento",
    video: "/assets/videos/Presentacion2.mp4",
    colSpan: "md:col-span-1",
  },
  {
    id: "podcast",
    title: "Podcast & Entrevistas",
    client: "Sesiones de Estudio",
    format: "Multicámara 4K",
    video: "/assets/placeholder-video-1.mp4",
    colSpan: "md:col-span-1",
  },
  {
    id: "social",
    title: "Contenido para Redes",
    client: "Contenido Viral",
    format: "Formato Vertical / Reels",
    video: "/assets/videos/Presentacion1.mp4",
    colSpan: "md:col-span-1",
  },
  {
    id: "corporativo",
    title: "Video Corporativo",
    client: "Identidad de Negocios",
    format: "Historia de Marca",
    video: "/assets/videos/Presentacion2.mp4",
    colSpan: "md:col-span-1",
  },
];

const services = [
  {
    id: "01",
    title: "Videos Publicitarios",
    description: "Reels, comerciales y contenido estratégico para potenciar tu marca con el mayor estándar.",
    image: "/portfolio/productions/BuscandoAlDealer/BusquedaDealer_TL.jpg",
    tags: ["Comerciales", "Reels/TikToks", "Corporativos", "Dron"],
  },
  {
    id: "02",
    title: "Servicio de Podcast",
    description: "Grabación profesional en estudio o a domicilio con audio y video multicámara de gama alta.",
    image: "/assets/images/Panasonic HC-X1000/Panasonic HC-X1000-detalles.jpeg",
    tags: ["Estudio", "A domicilio", "Edición completa", "Multicámara"],
  },
  {
    id: "03",
    title: "Cobertura de Eventos",
    description: "Fotografía y video premium para eventos corporativos, conciertos y lanzamientos de marca.",
    image: "/portfolio/productions/LosChances/LosChances.jpg",
    tags: ["Fotografía", "Video resumen", "Aftermovie", "Entrega rápida"],
  },
  {
    id: "04",
    title: "Cobertura de Bodas",
    description: "Inmortalizamos tu gran día con un estilo narrativo y cinematográfico que recordarás por siempre.",
    image: "/portfolio/Branding/SazonColombiano/SazonColombiano.jpeg",
    tags: ["Ceremonia", "Recepción", "Álbum digital", "Highlight Film"],
  },
  {
    id: "05",
    title: "Social Media & Branding",
    description: "Estrategias de marca, diseño de identidad y contenido continuo para dominar los algoritmos.",
    image: "/portfolio/Branding/SazonColombiano/SazonColombiano.jpeg",
    tags: ["Plan mensual", "Guiones", "Identidad visual", "Analytics"],
  },
];

export function PortfolioPreview() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-20 md:py-32 bg-[#0c0c0c] relative overflow-hidden z-20 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-8 md:-mt-12 border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-ump-accent text-xs font-bold uppercase tracking-widest mb-3 block">
              portafolio y servicios
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Historias reales. <br />
              <span className="text-ump-accent">Producción profesional.</span>
            </h2>
            <p className="text-sm md:text-base text-ump-secondary max-w-lg font-light leading-relaxed">
              Proyectos que conectan marcas con personas a través de una narrativa visual única y soluciones audiovisuales a tu medida.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:mb-2">
            <Link
              href="/portfolio"
              className="flex items-center gap-2 text-ump-secondary hover:text-white transition-colors group text-sm font-bold uppercase tracking-wider"
            >
              Ver portafolio{" "}
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[340px] mb-24">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>

        {/* Unified Divider & Services Section Header */}
        <div className="border-t border-white/5 pt-16 mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-2">
            Nuestros <span className="text-ump-accent italic font-normal">Servicios Especializados</span>
          </h3>
          <p className="text-xs md:text-sm text-ump-secondary max-w-md font-light">
            Selecciona una categoría para explorar detalles, cobertura y cotizar directamente.
          </p>
        </div>

        {/* Services Accordion */}
        <div className="border-t border-white/5 mb-8">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className="border-b border-white/5 py-5 md:py-6 cursor-pointer transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start">
                  
                  {/* Number */}
                  <div className="col-span-1 md:col-span-2 flex items-center pt-1">
                    <span className={`text-xs md:text-sm font-bold font-mono transition-all duration-300 ${
                      isActive ? "text-ump-accent" : "text-white/30"
                    }`}>
                      {service.id}.
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-1 md:col-span-4 pt-1">
                    <h3 className={`text-base md:text-lg font-bold uppercase tracking-wide transition-all duration-300 ${
                      isActive ? "text-white" : "text-white/50 hover:text-white"
                    }`}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Expanded Content Area */}
                  <div className="col-span-1 md:col-span-6 overflow-hidden">
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 120, 
                            damping: 22,
                            opacity: { duration: 0.25 }
                          }}
                          className="pt-3 md:pt-0"
                        >
                          <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                            className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center"
                          >
                            
                            {/* Image Container */}
                            <div className="sm:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border border-white/5 bg-neutral-900 shadow-md">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 250px"
                              />
                            </div>

                            {/* Info Details */}
                            <div className="sm:col-span-6 flex flex-col justify-between space-y-3">
                              <p className="text-ump-secondary text-xs md:text-sm leading-relaxed font-light">
                                {service.description}
                              </p>
                              
                              {/* Subtags */}
                              <div className="flex flex-wrap gap-1.5">
                                {service.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider bg-white/[0.03] border border-white/5 rounded text-white/60"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              <Link href="/contact" className="inline-flex self-start pt-1 group/btn">
                                <span className="text-ump-accent group-hover/btn:text-white transition-colors font-bold text-xs uppercase tracking-wider flex items-center gap-1">
                                  Cotizar servicio
                                  <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </span>
                              </Link>
                            </div>

                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  title,
  client,
  format,
  video,
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
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-ump-card/45 flex items-center justify-center">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full opacity-45 group-hover:opacity-65 transition-opacity duration-700"
          />
        ) : (
          <span className="text-white/20 font-mono text-xs uppercase tracking-widest border border-white/10 px-3 py-1.5 rounded">
            [ Video: {title} ]
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-1 pointer-events-none" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
        {/* Play Icon - Top Right */}
        <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <Play size={16} fill="currentColor" className="text-white ml-0.5" />
          </div>
        </div>

        {/* Text Details - Bottom */}
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center gap-2 text-[10px] font-medium text-ump-accent uppercase tracking-widest mb-1 opacity-80">
            <span>{client}</span>
            <span className="w-1 h-1 rounded-full bg-white/50" />
            <span>{format}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-ump-accent transition-colors">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
