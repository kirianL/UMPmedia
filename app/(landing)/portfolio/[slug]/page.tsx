"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PiArrowLeftBold, PiPlayFill, PiArrowRightBold } from "react-icons/pi";
import { CTAFinal } from "@/components/sections/cta-final";
import { RevealText } from "@/components/ui/reveal-text";

// ═════════════════════════════════════════════════════════════════════════════
// UNIFIED PROJECT DATA SCHEMA (General, sin desglose de capítulos)
// ═════════════════════════════════════════════════════════════════════════════
interface CreditItem {
  role: string;
  name: string;
}

interface GalleryImageItem {
  src: string;
  alt: string;
}

interface ProjectData {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  deliverables: string;
  heroImage: string;
  videoYoutubeId?: string;
  leadParagraph: string;
  fullStory: string[];
  credits: CreditItem[];
  gallery: GalleryImageItem[];
}

const PROJECTS_DATABASE: Record<string, ProjectData> = {
  "buscando-al-dealer": {
    slug: "buscando-al-dealer",
    title: "Buscando al dealer",
    subtitle: "Serie documental original sobre la escena urbana",
    category: "Producción Audiovisual",
    year: "2026",
    client: "Ultimate Media Productions",
    deliverables: "Serie Web / Dirección / Montaje / Color",
    heroImage: "/portfolio/productions/BuscandoAlDealer/BusquedaDealer_TL.jpg",
    videoYoutubeId: "XvPBfqjhKP0",
    leadParagraph:
      "Una inmersión cinematográfica en las calles, códigos y realidades del movimiento urbano en Costa Rica, fusionando estética documental con narrativa contemporánea.",
    fullStory: [
      "Buscando al Dealer nació como una propuesta para visibilizar y registrar historias genuinas que pocas veces encuentran espacio en los medios tradicionales. El proyecto combina un tratamiento visual crudo y cinematográfico con una narrativa ágil orientada al consumo digital.",
      "Cada escena fue rodada en locaciones reales del Caribe y áreas urbanas, utilizando ópticas cinematográficas, audio de alta fidelidad y un esquema de etalonaje de color con contrastes marcados y tonos cálidos que acentúan la atmósfera de cada relato.",
    ],
    credits: [
      { role: "Producción General", name: "Ultimate Media Productions" },
      { role: "Dirección Creativa", name: "Equipo UMP" },
      { role: "Dirección de Fotografía", name: "Cámara & Drones UMP" },
      { role: "Edición & Color", name: "Post-Producción UMP" },
      { role: "Diseño Sonoro", name: "UMP Audio Lab" },
      { role: "Formato", name: "4K DCI / 24fps" },
    ],
    gallery: [
      { src: "/portfolio/productions/BuscandoAlDealer/Galeria/BIGGI%20LOVE1.jpg.jpeg", alt: "Biggi Love 1" },
      { src: "/portfolio/productions/BuscandoAlDealer/Galeria/BIGGI%20LOVE2.jpg.jpeg", alt: "Biggi Love 2" },
      { src: "/portfolio/productions/BuscandoAlDealer/Galeria/DEALER%201.jpg.jpeg", alt: "Dealer 1" },
      { src: "/portfolio/productions/BuscandoAlDealer/Galeria/DEALER%202.jpg.jpeg", alt: "Dealer 2" },
      { src: "/portfolio/productions/BuscandoAlDealer/Galeria/GEMELO%201.jpg.jpeg", alt: "Gemelo 1" },
      { src: "/portfolio/productions/BuscandoAlDealer/Galeria/GEMELO%202.jpg.jpeg", alt: "Gemelo 2" },
      { src: "/portfolio/productions/BuscandoAlDealer/Galeria/KILYAM%202.jpg.jpeg", alt: "Kilyam 2" },
      { src: "/portfolio/productions/BuscandoAlDealer/Galeria/Kilyam.jpg.jpeg", alt: "Kilyam" },
      { src: "/portfolio/productions/BuscandoAlDealer/Galeria/OFICIAL%20ARR%201.jpg.jpeg", alt: "Oficial Arr 1" },
      { src: "/portfolio/productions/BuscandoAlDealer/Galeria/OFICIAL%20TUTS%201.jpg.jpeg", alt: "Oficial Tuts 1" },
      { src: "/portfolio/productions/BuscandoAlDealer/Galeria/SOLDADO.jpg.jpeg", alt: "Soldado" },
      { src: "/portfolio/productions/BuscandoAlDealer/Galeria/TILI.jpg.jpeg", alt: "Tili" },
    ],
  },
  "la-family": {
    slug: "la-family",
    title: "La Family",
    subtitle: "Producción audiovisual sobre identidad y lazos familiares",
    category: "Producción Audiovisual",
    year: "2026",
    client: "Ultimate Media Productions",
    deliverables: "Cortometraje / Dirección / Guión / Post-Producción",
    heroImage: "/portfolio/productions/LaFamily/LaFamily.jpg",
    videoYoutubeId: "ozg6sR1Qr9Y",
    leadParagraph:
      "Una emotiva e impactante producción que retrata la unión, los retos y la fuerza inquebrantable de los lazos en el Caribe costarricense, contada con visión cinematográfica.",
    fullStory: [
      "La Family explora la dinámica de hermandad y superación en comunidades costeras. La meta fue plasmar emociones directas y auténticas, alejadas de estereotipos y con una iluminación naturalista que resalta la belleza del entorno caribeño.",
      "El proyecto abarcó un trabajo exhaustivo de casting local, dirección de arte coherente con el estilo de vida de la zona y una banda sonora diseñada específicamente para complementar los puntos clave de inflexión emocional.",
    ],
    credits: [
      { role: "Producción", name: "Ultimate Media Productions" },
      { role: "Dirección", name: "Equipo Directivo UMP" },
      { role: "Dirección de Fotografía", name: "Cámara UMP" },
      { role: "Sonido Directo", name: "Audio UMP" },
      { role: "Montaje & Corrección", name: "Post UMP" },
      { role: "Locación", name: "Caribe Sur, Costa Rica" },
    ],
    gallery: [
      { src: "/portfolio/productions/LaFamily/Galeria/HERMANO%20MAYOR%202.jpg.jpeg", alt: "Hermano Mayor" },
      { src: "/portfolio/productions/LaFamily/Galeria/HERMANO%20MENOR%201.jpg.jpeg", alt: "Hermano Menor 1" },
      { src: "/portfolio/productions/LaFamily/Galeria/HERMANO%20MENOR%202.jpg.jpeg", alt: "Hermano Menor 2" },
      { src: "/portfolio/productions/LaFamily/LaFamily.jpg", alt: "Póster Oficial La Family" },
    ],
  },
  "sazon-colombiano": {
    slug: "sazon-colombiano",
    title: "Sazón Colombiano",
    subtitle: "Identidad visual de marca y narrativa gastronómica",
    category: "Branding & Identidad",
    year: "2026",
    client: "Sazón Colombiano Restaurante",
    deliverables: "Estrategia de Marca / Sistema Gráfico / Fotografía de Producto",
    heroImage: "/portfolio/Branding/SazonColombiano/SazonColombiano.jpeg",
    leadParagraph:
      "Diseño integral de marca y posicionamiento de identidad para Sazón Colombiano, reflejando su riqueza cultural, tradición culinaria y calidez a través de una estética contemporánea.",
    fullStory: [
      "El desafío principal radicaba en modernizar la presencia visual del restaurante preservando intacta su esencia artesanal y el apego a los sabores de origen. Se construyó un sistema de identidad visual flexible aplicable a menús, packaging, presencia digital y señalética de salón.",
      "La dirección de fotografía se centró en texturas ricas, colores vibrantes e iluminación cálida para evocar la experiencia sensorial del comensal antes del primer bocado.",
    ],
    credits: [
      { role: "Estrategia & Branding", name: "Ultimate Media Productions" },
      { role: "Dirección Creativa", name: "Equipo de Diseño UMP" },
      { role: "Diseño Gráfico", name: "Brand Studio UMP" },
      { role: "Fotografía de Producto", name: "Estudio UMP" },
      { role: "Aplicaciones & Packaging", name: "UMP Print & Digital" },
      { role: "Año", name: "2026" },
    ],
    gallery: [
      { src: "/portfolio/Branding/SazonColombiano/image.png", alt: "Identidad Visual 1" },
      { src: "/portfolio/Branding/SazonColombiano/image copy.png", alt: "Identidad Visual 2" },
      { src: "/portfolio/Branding/SazonColombiano/image copy 2.png", alt: "Packaging & Piezas" },
      { src: "/portfolio/Branding/SazonColombiano/image copy 3.png", alt: "Aplicación de Marca" },
      { src: "/portfolio/Branding/SazonColombiano/SazonColombiano.jpeg", alt: "Emblema Principal" },
    ],
  },
};

function getFallbackProject(slug: string): ProjectData {
  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    slug,
    title: formattedTitle || "Proyecto UMP",
    subtitle: "Producción y estrategia de comunicación audiovisual",
    category: "Producción",
    year: "2026",
    client: "Ultimate Media Productions",
    deliverables: "Producción Audiovisual / Dirección / Estrategia",
    heroImage: "/portfolio/productions/BuscandoAlDealer/BusquedaDealer_TL.jpg",
    leadParagraph:
      "Exploración audiovisual y conceptual desarrollada por Ultimate Media Productions para conectar narrativas auténticas con audiencias globales.",
    fullStory: [
      "Cada proyecto en UMP parte de un entendimiento profundo del mensaje y de la audiencia. Desarrollamos soluciones personalizadas que integran la más alta tecnología técnica con una sensibilidad visual única.",
    ],
    credits: [
      { role: "Producción", name: "Ultimate Media Productions" },
      { role: "Dirección", name: "Equipo UMP" },
      { role: "Distribución", name: "Plataformas Digitales" },
    ],
    gallery: [
      { src: "/portfolio/productions/BuscandoAlDealer/BusquedaDealer_TL.jpg", alt: "Detalle del proyecto" },
    ],
  };
}

// ═════════════════════════════════════════════════════════════════════════════
// UNIFIED PROJECT DETAIL COMPONENT
// ═════════════════════════════════════════════════════════════════════════════
export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = PROJECTS_DATABASE[slug] || getFallbackProject(slug);

  const [isPlaying, setIsPlaying] = useState(false);

  // Project navigation links
  const allSlugs = Object.keys(PROJECTS_DATABASE);
  const currentIndex = allSlugs.indexOf(slug);
  const nextSlug = currentIndex >= 0 ? allSlugs[(currentIndex + 1) % allSlugs.length] : allSlugs[0];
  const nextProject = PROJECTS_DATABASE[nextSlug];

  return (
    <div className="min-h-screen bg-[#f6f6f3] text-neutral-900 selection:bg-emerald-100 selection:text-emerald-900 flex flex-col">
      
      {/* Editorial Header Section */}
      <section className="pt-36 sm:pt-44 pb-12 px-6 sm:px-8 lg:px-12 max-w-[1360px] mx-auto w-full relative z-10">
        
        {/* Back Link & Category Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10 pb-6 border-b border-neutral-200/80">
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-neutral-950 transition-colors"
          >
            <PiArrowLeftBold
              size={14}
              className="group-hover:-translate-x-1 transition-transform duration-200"
            />
            <span>Volver al portafolio</span>
          </Link>

          <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{project.category}</span>
            <span className="text-emerald-400">•</span>
            <span>{project.year}</span>
          </div>
        </div>

        {/* Animated Title & Tagline */}
        <div className="max-w-4xl space-y-3">
          <RevealText
            text={project.title}
            tag="h1"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-950 leading-[1.02] text-left block justify-start"
            stagger={0.03}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-neutral-600 font-normal leading-relaxed pt-1"
          >
            {project.subtitle}
          </motion.p>
        </div>

        {/* Structured Metadata Bento Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-8 border-t border-neutral-200/80"
        >
          <div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold block mb-1">
              Cliente
            </span>
            <p className="text-sm sm:text-base font-bold text-neutral-950">
              {project.client}
            </p>
          </div>

          <div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold block mb-1">
              Año
            </span>
            <p className="text-sm sm:text-base font-bold text-neutral-950 font-mono">
              {project.year}
            </p>
          </div>

          <div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold block mb-1">
              Categoría
            </span>
            <p className="text-sm sm:text-base font-bold text-neutral-950">
              {project.category}
            </p>
          </div>

          <div>
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold block mb-1">
              Servicios / Formato
            </span>
            <p className="text-xs sm:text-sm font-medium text-neutral-700 leading-snug">
              {project.deliverables}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Featured Hero Media Section (Completamente general: o video o imagen en formato widescreen) */}
      <section className="pb-16 sm:pb-24 px-6 sm:px-8 lg:px-12 max-w-[1360px] mx-auto w-full relative z-20">
        <div className="relative aspect-video md:aspect-[21/9] w-full rounded-3xl bg-neutral-950 border border-neutral-200/80 overflow-hidden shadow-sm group">
          {project.videoYoutubeId ? (
            isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${project.videoYoutubeId}?autoplay=1&rel=0`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0"
              />
            ) : (
              <div className="w-full h-full relative">
                <Image
                  src={
                    project.videoYoutubeId
                      ? `https://img.youtube.com/vi/${project.videoYoutubeId}/maxresdefault.jpg`
                      : project.heroImage
                  }
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1360px"
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                {/* Architectural Corner SVG Brackets */}
                <svg
                  className="absolute top-4 right-4 w-5 h-5 text-white/50 group-hover:text-emerald-400 pointer-events-none transition-colors duration-300 drop-shadow"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M16 0H6V2H14V10H16V0Z" fill="currentColor" />
                </svg>
                <svg
                  className="absolute bottom-4 left-4 w-5 h-5 text-white/50 group-hover:text-emerald-400 pointer-events-none transition-colors duration-300 drop-shadow"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M0 16H10V14H2V6H0V16Z" fill="currentColor" />
                </svg>

                {/* Big Center Play Trigger */}
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/30 transition-colors duration-300 cursor-pointer"
                  aria-label="Reproducir video"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-950/40 transition-transform duration-300 group-hover:scale-110 active:scale-95">
                    <PiPlayFill size={28} className="ml-1" />
                  </div>
                </button>
              </div>
            )
          ) : (
            <div className="w-full h-full relative">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1360px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />

              {/* Architectural Corner SVG Brackets */}
              <svg
                className="absolute top-4 right-4 w-5 h-5 text-white/60 group-hover:text-emerald-400 pointer-events-none transition-colors duration-300 drop-shadow"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M16 0H6V2H14V10H16V0Z" fill="currentColor" />
              </svg>
              <svg
                className="absolute bottom-4 left-4 w-5 h-5 text-white/60 group-hover:text-emerald-400 pointer-events-none transition-colors duration-300 drop-shadow"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path d="M0 16H10V14H2V6H0V16Z" fill="currentColor" />
              </svg>
            </div>
          )}
        </div>
      </section>

      {/* Editorial Story & Technical Sheet (Clean, sin iconos de estrellitas ni brillos) */}
      <section className="pb-20 sm:pb-28 px-6 sm:px-8 lg:px-12 max-w-[1360px] mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold block">
                Visión & Concepto
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-950 tracking-tight">
                El desafío y la narrativa detrás del proyecto
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-neutral-900 font-normal leading-relaxed">
              {project.leadParagraph}
            </p>

            <div className="space-y-4 pt-2 text-neutral-600 text-sm sm:text-base leading-relaxed">
              {project.fullStory.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Technical Sheet & Credits Box (Clean Minimalist: Sin estrellas ni brillos) */}
          <div className="lg:col-span-4 rounded-3xl bg-white border border-neutral-200/80 p-6 sm:p-7 shadow-xs">
            <div className="pb-4 mb-5 border-b border-neutral-100 flex items-center justify-between">
              <h3 className="font-bold text-neutral-950 text-base tracking-tight uppercase">
                Ficha Técnica
              </h3>
              <span className="text-[10px] font-mono text-emerald-600 uppercase font-semibold">
                Créditos
              </span>
            </div>

            <div className="space-y-4">
              {project.credits.map((credit, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-neutral-100/70 last:border-0 last:pb-0"
                >
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    {credit.role}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-950 sm:text-right">
                    {credit.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Project Gallery (Collage Masonry Completo: NO se corta ninguna imagen, salen 100% completas) */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="pb-24 sm:pb-32 px-6 sm:px-8 lg:px-12 max-w-[1360px] mx-auto w-full relative z-20">
          <div className="mb-10 sm:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-6 border-b border-neutral-200/80">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold block mb-1">
                Documentación Visual
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight">
                Galería &{" "}
                <span className="text-emerald-600 font-normal italic">
                  Detalles
                </span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 font-mono">
              {project.gallery.length} capturas completas
            </p>
          </div>

          {/* Masonry Collage: Se adaptan de forma natural y completa sin recortar bordes */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
            {project.gallery.map((img, idx) => (
              <div
                key={idx}
                className="break-inside-avoid rounded-2xl md:rounded-3xl overflow-hidden bg-neutral-200/60 border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-300 group relative"
              >
                {/* img nativo para renderizado completo sin forzar crop o ratio fijo */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-contain block transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />

                {/* Sutil bracket arquitectónico en hover */}
                <svg
                  className="absolute top-3 right-3 w-4 h-4 text-white/40 group-hover:text-emerald-400 pointer-events-none transition-colors duration-300 drop-shadow-sm"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M16 0H6V2H14V10H16V0Z" fill="currentColor" />
                </svg>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Next Project Bottom Navigation */}
      {nextProject && (
        <section className="py-16 sm:py-20 bg-neutral-100/70 border-t border-neutral-200/80 relative z-20">
          <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold block">
                Siguiente Proyecto
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                {nextProject.title}
              </h3>
              <p className="text-sm text-neutral-600">
                {nextProject.category} — {nextProject.year}
              </p>
            </div>

            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 font-medium text-xs sm:text-sm px-6 py-3.5 transition-colors shadow-xs"
            >
              <span>Explorar proyecto</span>
              <PiArrowRightBold
                size={14}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </section>
      )}

      {/* Final CTA Component */}
      <CTAFinal />
    </div>
  );
}
