"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoShowcase() {
  return (
    <section className="py-32 md:py-64 bg-ump-background relative z-20 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 overflow-hidden border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
            Nuestra Calidad
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Producción profesional
          </h2>
          <p className="text-ump-secondary max-w-2xl mx-auto">
            El resultado habla por sí mismo. Descubre el nivel de detalle y
            profesionalismo que aportamos a cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VideoCard
            title="Showreel Audiovisual"
            category="Cinematografía"
            videoSrc="/assets/videos/Presentacion1.mp4"
          />
          <VideoCard
            title="Nuestra Esencia"
            category="Branding"
            videoSrc="/assets/videos/Presentacion2.mp4"
          />
        </div>
      </div>
    </section>
  );
}

function VideoCard({
  title,
  category,
  videoSrc,
}: {
  title: string;
  category: string;
  videoSrc: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="group">
      <div className="relative rounded-2xl overflow-hidden aspect-video bg-ump-card/20 border border-white/10 hover:border-ump-accent/50 transition-colors mb-4">
        <video
          ref={videoRef}
          src={videoSrc}
          poster="/assets/images/UMP-miniatura.png"
          preload="none"
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
          loop
          muted={false}
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />

        <div
          className={`absolute inset-0 flex items-center justify-center z-10 transition-opacity duration-300 ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"}`}
        >
          <Button
            variant="ghost"
            size="icon"
            className="relative z-20 w-14 h-14 rounded-full border border-white/20 bg-white/5 backdrop-blur-[2px] text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-500 cursor-pointer"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause size={24} strokeWidth={1.5} />
            ) : (
              <Play size={24} strokeWidth={1.5} className="ml-1" />
            )}
          </Button>
        </div>
      </div>

      <div className="px-1">
        <span className="text-ump-accent text-xs font-bold uppercase tracking-wider mb-2 block">
          {category}
        </span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
}
