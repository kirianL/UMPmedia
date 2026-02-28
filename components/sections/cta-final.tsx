"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTAFinal() {
  return (
    <section className="py-32 md:py-56 bg-ump-alt relative overflow-hidden z-90 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ump-background to-ump-card/20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-xl text-ump-secondary mb-12 max-w-2xl mx-auto">
          Llevémoslo al siguiente nivel. Agendemos una llamada para entender tu
          visión.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full bg-ump-accent hover:bg-ump-accentHover text-white px-10 h-16 text-lg font-bold shadow-lg shadow-ump-accent/20"
            >
              Hablemos
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full border-white/20 text-white hover:bg-white hover:text-black px-10 h-16 text-lg"
            >
              Ver más trabajos
            </Button>
          </Link>
        </div>

        <div className="mt-16 text-ump-secondary text-sm">
          <p>O escríbenos directamente a:</p>
          <a
            href="mailto:hello@umpmedia.com"
            className="text-white hover:text-ump-accent transition-colors text-lg font-medium mt-2 block"
          >
            hello@umpmedia.com
          </a>
        </div>
      </div>
    </section>
  );
}
