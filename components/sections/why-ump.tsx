"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";

interface CapabilityCardProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkText: string;
  linkHref: string;
  index: number;
}

const CAPABILITIES: CapabilityCardProps[] = [
  {
    category: "Producción Audiovisual",
    title: "Historias que capturan la atención",
    description:
      "Desarrollamos comerciales, formatos narrativos y coberturas de alto impacto. Cuidamos cada fotograma, ritmo y sonido para que tu marca se perciba con autenticidad y autoridad.",
    imageSrc: "/assets/illustrations/audiovisual-clean.png",
    imageAlt: "Ilustración de claqueta de producción audiovisual",
    linkText: "Ver producciones",
    linkHref: "/portfolio",
    index: 0,
  },
  {
    category: "Social Media & Contenido",
    title: "Estrategia para conectar y crecer",
    description:
      "Diseñamos contenido ágil pensado para las plataformas que importan hoy. Storytelling, formatos verticales y campañas que despiertan conversación y fidelizan comunidad.",
    imageSrc: "/assets/illustrations/social-clean.png",
    imageAlt: "Ilustración de interacción y alcance en redes sociales",
    linkText: "Explorar alcance",
    linkHref: "/portfolio",
    index: 1,
  },
  {
    category: "Soluciones Digitales",
    title: "Plataformas web y tecnología moderna",
    description:
      "Construimos experiencias web interactivas, fluidas y de alto rendimiento. Arquitectura limpia, interfaces hechas a medida y tecnología que impulsa tu negocio.",
    imageSrc: "/assets/illustrations/digital-clean.png",
    imageAlt: "Ilustración de desarrollo web y soluciones digitales",
    linkText: "Conocer servicios",
    linkHref: "/services",
    index: 2,
  },
];

export function WhyUMP() {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#f6f6f3] text-neutral-900 relative z-20 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 leading-[1.1]">
            ¿Por qué <span className="text-emerald-600 font-normal italic">elegir UMP?</span>
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mt-3 font-normal">
            Combinamos producción audiovisual, contenido digital y tecnología bajo un mismo estándar de calidad y visión estratégica.
          </p>
        </div>

        {/* 3-Column Modern Architectural Illustration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15px" }}
              transition={{
                duration: 0.35,
                delay: cap.index * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all duration-300 select-none overflow-hidden"
            >
              {/* Corner Architectural SVG Accent */}
              <svg
                className="absolute top-3.5 right-3.5 w-4 h-4 text-neutral-300 group-hover:text-emerald-600 transition-colors duration-300 pointer-events-none"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 0H6V2H14V10H16V0Z" fill="currentColor" />
              </svg>

              <div>
                {/* Visual Illustration Area with clean transparent blend */}
                <div className="relative w-full aspect-square max-w-[240px] mx-auto mb-6 flex items-center justify-center">
                  <div className="relative w-full h-full p-2 transition-transform duration-500 ease-out group-hover:scale-105">
                    <Image
                      src={cap.imageSrc}
                      alt={cap.imageAlt}
                      fill
                      sizes="(max-width: 768px) 240px, 300px"
                      className="object-contain mix-blend-multiply drop-shadow-xs"
                    />
                  </div>
                </div>

                {/* Typography & Copy */}
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold block">
                    {cap.category}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight leading-snug group-hover:text-emerald-700 transition-colors duration-200">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed pt-1">
                    {cap.description}
                  </p>
                </div>
              </div>

              {/* Bottom Interactive Link */}
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <Link
                  href={cap.linkHref}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 group-hover:text-emerald-600 transition-colors"
                >
                  <span>{cap.linkText}</span>
                  <PiArrowUpRightBold
                    size={12}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                  />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
