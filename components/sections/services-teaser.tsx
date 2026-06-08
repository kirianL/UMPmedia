"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    image: "/assets/images/UMP-miniatura.png",
    tags: ["Plan mensual", "Guiones", "Identidad visual", "Analytics"],
  },
];


export function ServicesTeaser() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] border-t border-white/5 relative z-30 rounded-t-[2.5rem] md:rounded-t-[4rem] -mt-8 md:-mt-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-ump-accent text-xs font-bold uppercase tracking-widest mb-3 block">
              / servicios /
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Cómo te <span className="text-ump-accent">podemos ayudar</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="flex items-center gap-2 text-ump-secondary hover:text-white transition-colors group text-sm font-bold uppercase tracking-wider md:mb-2"
          >
            Ver todos los servicios{" "}
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Interactive Accordion Stack */}
        <div className="border-t border-white/5">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={service.id}
                onClick={() => setActiveIndex(index)}
                className="border-b border-white/5 py-5 md:py-6 cursor-pointer transition-colors"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start">
                  
                  {/* Number - Left Col */}
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

                  {/* Expanded Content Area: Image (Middle) & Info (Right) */}
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
                            
                            {/* Image Container - Center */}
                            <div className="sm:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border border-white/5 bg-neutral-900 shadow-md">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 250px"
                              />
                            </div>

                            {/* Info Details - Right */}
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
