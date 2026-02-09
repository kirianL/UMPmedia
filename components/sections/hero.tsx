"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { RevealText } from "@/components/ui/reveal-text";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-ump-background text-white flex items-center">
      {/* Background (Video/Image Placeholder) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
        <video
          src="/assets/videos/Presentacion1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
        ></video>
        <div className="w-full h-full bg-neutral-900" />
      </div>

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-4xl">
          <RevealText
            text="ESTUDIO AUDIOVISUAL INDEPENDIENTE"
            tag="h1"
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight md:leading-[0.9] break-words"
            delay={0.2}
          />

          <p className="text-xl md:text-2xl text-white/80 max-w-xl mb-10 font-light leading-relaxed">
            Desde <span className="text-ump-accent font-bold">Limón</span>,
            Costa Rica. Creamos narrativas visuales que conectan y perduran.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/portfolio">
              <Button
                size="lg"
                className="rounded-full bg-ump-accent hover:bg-ump-accentHover text-white px-8 h-14 text-lg"
              >
                Ver Portafolio
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-white text-white hover:bg-white hover:text-black px-8 h-14 text-lg"
              >
                Contactar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
