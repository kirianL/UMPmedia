"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Episode {
  id: number;
  number: string;
  title: string;
  description: string;
  youtubeUrl: string;
  thumbnailPlaceholder: string;
  duration: string;
  status: "Disponible" | "Próximamente" | "En Producción";
}

const episodes: Episode[] = [
  {
    id: 1,
    number: "Capítulo 01",
    title: "El Inicio del Rastro",
    description: "Primer capítulo de la serie documental original de UMPmedia. Nos adentramos en las calles de Limón para entender los códigos, la música y el inicio de una búsqueda que cambiará las reglas del juego.",
    youtubeUrl: "https://www.youtube.com/@UltimateMediaProductions",
    thumbnailPlaceholder: "Capítulo 1: El Inicio del Rastro",
    duration: "12:45",
    status: "Disponible",
  },
  {
    id: 2,
    number: "Capítulo 02",
    title: "La Conexión Caribe",
    description: "La búsqueda se intensifica. Entrevistas exclusivas con figuras locales revelan detalles antes ocultos del movimiento urbano. La tensión crece y el sonido del Caribe marca el ritmo del viaje.",
    youtubeUrl: "https://www.youtube.com/@UltimateMediaProductions",
    thumbnailPlaceholder: "Capítulo 2: La Conexión Caribe",
    duration: "15:20",
    status: "Disponible",
  },
  {
    id: 3,
    number: "Capítulo 03",
    title: "Bajo la Luz de Neon",
    description: "Exploramos la vida nocturna de la provincia. La estética visual cambia a tonos eléctricos de neón mientras seguimos pistas cruciales y nos topamos con personajes impredecibles.",
    youtubeUrl: "https://www.youtube.com/@UltimateMediaProductions",
    thumbnailPlaceholder: "Capítulo 3: Bajo la Luz de Neon",
    duration: "18:10",
    status: "Disponible",
  },
  {
    id: 4,
    number: "Capítulo 04",
    title: "Desenlace Inesperado",
    description: "El gran final de temporada. Todas las pistas convergen en un último encuentro cargado de adrenalina, música y una revelación que dejará la puerta abierta para el futuro.",
    youtubeUrl: "https://www.youtube.com/@UltimateMediaProductions",
    thumbnailPlaceholder: "Capítulo 4: Desenlace Inesperado",
    duration: "--:--",
    status: "Próximamente",
  },
];

export function BuscandoDealer() {
  const [activeEpisode, setActiveEpisode] = useState<Episode>(episodes[0]);

  return (
    <div className="container mx-auto px-6 max-w-7xl">
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 text-ump-secondary hover:text-white mb-12 transition-colors text-sm font-bold uppercase tracking-wider"
      >
        <ArrowLeft size={16} /> Volver al Portafolio
      </Link>

      {/* Title block */}
      <div className="mb-16">
        <span className="text-ump-accent font-bold uppercase tracking-widest text-xs mb-3 block">
          SERIE ORIGINAL — 2024
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none uppercase">
          Buscando al <span className="text-[#18943A] italic font-black">dealer</span>
        </h1>
      </div>

      {/* Interactive Player Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Focus Column */}
        <div className="lg:col-span-8 space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeEpisode.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Thumbnail Container */}
              <div className="aspect-video w-full rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden relative group shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Meta details */}
                <div className="absolute top-6 left-6 text-white/50 font-mono text-xs uppercase tracking-widest">
                  {activeEpisode.number}
                </div>
                
                {activeEpisode.duration !== "--:--" && (
                  <div className="absolute top-6 right-6 text-white/50 font-mono text-xs">
                    {activeEpisode.duration}
                  </div>
                )}

                {/* Center Title Placeholder */}
                <div className="text-center px-6 pointer-events-none select-none">
                  <p className="text-white/20 font-mono text-xs uppercase tracking-widest">
                    [ {activeEpisode.thumbnailPlaceholder} ]
                  </p>
                </div>

                {/* Play Trigger */}
                {activeEpisode.status === "Disponible" && (
                  <a
                    href={activeEpisode.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-[#18943A] text-black flex items-center justify-center shadow-lg"
                    >
                      <Play size={24} fill="currentColor" className="ml-1 text-black" />
                    </motion.div>
                  </a>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
                  {activeEpisode.title}
                </h2>
                <p className="text-ump-secondary text-lg leading-relaxed max-w-3xl">
                  {activeEpisode.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action button */}
          {activeEpisode.status === "Disponible" ? (
            <a
              href={activeEpisode.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#18943A] hover:bg-[#18943A]/90 text-black px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 group shadow-lg"
            >
              <span>Ver en YouTube</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <span className="inline-block text-white/30 font-mono uppercase text-xs tracking-widest pt-2">
              Próximamente disponible en YouTube
            </span>
          )}
        </div>

        {/* Right Playlist Navigation */}
        <div className="lg:col-span-4 space-y-4">
          <div className="pb-4 border-b border-white/5">
            <span className="text-xs font-bold uppercase tracking-widest text-white/40">
              Episodios ({episodes.length})
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {episodes.map((episode) => {
              const isActive = activeEpisode.id === episode.id;
              return (
                <button
                  key={episode.id}
                  onClick={() => setActiveEpisode(episode)}
                  className={`group text-left py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? "bg-white/5 text-white"
                      : "bg-transparent text-ump-secondary hover:text-white"
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#18943A]/60">
                      {episode.number}
                    </span>
                    <h3 className="font-bold text-sm uppercase tracking-tight block">
                      {episode.title}
                    </h3>
                  </div>

                  <div className="shrink-0 pl-4">
                    {isActive ? (
                      <Play size={12} className="text-[#18943A] fill-current" />
                    ) : (
                      <span className="text-[10px] font-mono text-white/20 group-hover:text-white/40">
                        {episode.duration !== "--:--" ? episode.duration : "Soon"}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
