"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Episode {
  id: number;
  number: string;
  title: string;
  description: string;
  youtubeUrl: string;
  youtubeId: string;
  duration: string;
  status: "Disponible" | "Próximamente" | "En Producción";
}

const episodes: Episode[] = [
  {
    id: 1,
    number: "Capítulo 01",
    title: "Buscando al dealer - Cap 1",
    description: "Primer capítulo de la serie documental original de Ultimate Media Productions. Nos adentramos en las calles para entender los códigos, la música y las realidades del movimiento urbano local.",
    youtubeUrl: "https://youtu.be/XvPBfqjhKP0",
    youtubeId: "XvPBfqjhKP0",
    duration: "10:35",
    status: "Disponible",
  },
  {
    id: 2,
    number: "Capítulo 02",
    title: "Buscando al dealer - Cap 2",
    description: "La búsqueda se intensifica. Entrevistas exclusivas revelan detalles inéditos sobre la cultura de la calle, la música y el pulso local.",
    youtubeUrl: "https://youtu.be/HNWP0Ut8z40",
    youtubeId: "HNWP0Ut8z40",
    duration: "11:20",
    status: "Disponible",
  },
  {
    id: 3,
    number: "Capítulo 03",
    title: "Buscando al dealer - Cap 3",
    description: "Nuevas pistas y conexiones locales bajo el ritmo y la esencia urbana. Exploramos historias reales que marcan el camino.",
    youtubeUrl: "https://youtu.be/IdAsBE-73B8",
    youtubeId: "IdAsBE-73B8",
    duration: "14:15",
    status: "Disponible",
  },
  {
    id: 4,
    number: "Capítulo 04",
    title: "Buscando al dealer - Cap 4",
    description: "La tensión aumenta a medida que nos acercamos a las figuras clave del movimiento. Cada escena retrata la realidad con un acabado premium.",
    youtubeUrl: "https://youtu.be/Py0itclDITQ",
    youtubeId: "Py0itclDITQ",
    duration: "12:50",
    status: "Disponible",
  },
  {
    id: 5,
    number: "Capítulo 05",
    title: "Buscando al dealer - Cap 5",
    description: "Un recorrido visual por las locaciones más icónicas de la producción, destacando testimonios con perspectivas globales.",
    youtubeUrl: "https://youtu.be/ozg6sR1Qr9Y",
    youtubeId: "ozg6sR1Qr9Y",
    duration: "13:05",
    status: "Disponible",
  },
  {
    id: 6,
    number: "Capítulo 06",
    title: "Buscando al dealer - Cap 6",
    description: "Camino hacia el desenlace. Análisis profundo de los acontecimientos que han redefinido la serie en esta temporada.",
    youtubeUrl: "https://youtu.be/NLrm6YhVb74",
    youtubeId: "NLrm6YhVb74",
    duration: "15:40",
    status: "Disponible",
  },
  {
    id: 7,
    number: "Capítulo 07",
    title: "Buscando al dealer - Cap 7",
    description: "Gran cierre de temporada. Conclusiones impactantes y el final del viaje de esta producción documental original.",
    youtubeUrl: "https://youtu.be/6VZvExkr6XM",
    youtubeId: "6VZvExkr6XM",
    duration: "16:22",
    status: "Disponible",
  },
];

const galleryImages = [
  {
    src: "/portfolio/productions/BuscandoAlDealer/BusquedaDealer_TL.jpg",
    alt: "Detrás de cámaras - Producción 2026",
  },
  {
    src: "https://img.youtube.com/vi/XvPBfqjhKP0/maxresdefault.jpg",
    alt: "Escena Capítulo 1 - Códigos de Calle",
  },
  {
    src: "https://img.youtube.com/vi/IdAsBE-73B8/maxresdefault.jpg",
    alt: "Escena Capítulo 3 - Conexiones Locales",
  },
  {
    src: "https://img.youtube.com/vi/6VZvExkr6XM/maxresdefault.jpg",
    alt: "Escena Capítulo 7 - Gran Cierre de Temporada",
  },
];

export function BuscandoDealer() {
  const [activeEpisode, setActiveEpisode] = useState<Episode>(episodes[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Stop video playback when changing active episode
  useEffect(() => {
    setIsPlaying(false);
  }, [activeEpisode]);

  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 text-ump-secondary hover:text-white mb-12 transition-colors text-sm font-bold uppercase tracking-wider cursor-pointer"
      >
        <ArrowLeft size={16} /> Volver al Portafolio
      </Link>

      {/* Title block */}
      <div className="mb-16">
        <span className="text-ump-accent font-bold uppercase tracking-widest text-xs mb-3 block">
          SERIE ORIGINAL — 2026
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none uppercase">
          Buscando al <span className="text-[#32fb00] italic font-black">dealer</span>
        </h1>
      </div>

      {/* Interactive Player Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Focus Column */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-6">
            {/* Thumbnail / Video Container */}
            <div className="aspect-video w-full rounded-3xl bg-neutral-950 border border-white/5 overflow-hidden relative shadow-2xl flex items-center justify-center">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${activeEpisode.youtubeId}?autoplay=1&rel=0`}
                  title={activeEpisode.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0 absolute inset-0"
                />
              ) : (
                <div className="w-full h-full relative">
                  <Image
                    src={`https://img.youtube.com/vi/${activeEpisode.youtubeId}/maxresdefault.jpg`}
                    alt={activeEpisode.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                    className="object-cover transition-transform duration-700 ease-out"
                  />
                  
                  {/* Minimalist overlay shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  
                  {/* Meta details */}
                  <div className="absolute top-6 left-6 text-white/80 font-mono text-xs uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    {activeEpisode.number}
                  </div>
                  
                  {activeEpisode.duration !== "--:--" && (
                    <div className="absolute top-6 right-6 text-white/80 font-mono text-xs bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      {activeEpisode.duration}
                    </div>
                  )}

                  {/* Play Trigger (Overlay) */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/35 transition-colors duration-500 cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      transition={{ ease: "easeOut", duration: 0.3 }}
                      className="w-16 h-16 rounded-full bg-[#32fb00] text-black flex items-center justify-center shadow-lg"
                    >
                      <Play size={24} fill="currentColor" className="ml-1 text-black" />
                    </motion.div>
                  </button>
                </div>
              )}
            </div>

            {/* Title & Description with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEpisode.id}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
                  {activeEpisode.title}
                </h2>
                <p className="text-ump-secondary text-lg leading-relaxed max-w-3xl">
                  {activeEpisode.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action button */}
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="inline-flex items-center gap-3 bg-[#32fb00] hover:bg-[#32fb00]/90 text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 cursor-pointer"
            >
              <Play size={16} fill="currentColor" />
              <span>Reproducir ahora</span>
            </button>
          )}
        </div>

        {/* Right Playlist Navigation */}
        <div className="lg:col-span-4 space-y-4">
          <div className="pb-4 border-b border-white/5">
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">
              Episodios ({episodes.length})
            </span>
          </div>

          <div className="flex flex-col gap-2 max-h-[520px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {episodes.map((episode) => {
              const isActive = activeEpisode.id === episode.id;
              return (
                <button
                  key={episode.id}
                  onClick={() => setActiveEpisode(episode)}
                  className={`group text-left py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? "bg-white/5 border-white/10 text-white"
                      : "bg-transparent border-transparent text-ump-secondary hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#32fb00]" />
                      )}
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#32fb00]/80 font-bold">
                        {episode.number}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm uppercase tracking-tight block">
                      {episode.title}
                    </h3>
                  </div>

                  <div className="shrink-0 pl-4">
                    {isActive ? (
                      <Play size={12} className="text-[#32fb00] fill-current" />
                    ) : (
                      <span className="text-[10px] font-mono text-white/20 group-hover:text-white/40">
                        {episode.duration}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Galería de imágenes (Todas horizontales aspect-video) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-24 pt-16 border-t border-white/5"
      >
        <div className="mb-12">
          <span className="text-ump-accent font-bold uppercase tracking-widest text-xs mb-3 block">
            PRODUCCIÓN
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
            Galería del <span className="text-[#32fb00] italic font-black">Rodaje</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group aspect-video rounded-3xl overflow-hidden relative bg-neutral-900 border border-white/5 shadow-lg cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <span className="text-ump-accent text-xs font-bold uppercase tracking-widest mb-1 block">
                    Buscando al Dealer
                  </span>
                  <p className="text-white font-bold text-lg">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
