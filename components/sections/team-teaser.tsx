"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function TeamTeaser() {
  return (
    <section className="py-32 md:py-56 bg-ump-alt relative z-50 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 overflow-hidden border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
              Talento
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              El Equipo
            </h2>
          </div>
          <Link
            href="/team"
            className="hidden md:flex items-center gap-2 text-ump-secondary hover:text-white transition-colors"
          >
            Conoce al equipo <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-ump-alt mb-4 relative overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-500">
                <div className="absolute inset-0 bg-neutral-800" />
                {/* Image Placeholder */}
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Nombre {i}</h4>
                <span className="text-ump-accent text-xs font-bold uppercase tracking-wide">
                  Rol {i}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/team"
          className="md:hidden flex items-center gap-2 text-ump-secondary hover:text-white transition-colors mt-12 justify-center"
        >
          Conoce al equipo <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
