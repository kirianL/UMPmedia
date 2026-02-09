"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiInstagram, SiYoutube, SiWhatsapp } from "react-icons/si";

export function CommunityCTA() {
  return (
    <section
      id="community-cta-section"
      className="bg-[#18943A] py-16 px-4 md:py-32 lg:py-40 overflow-hidden relative border-t border-black/5 z-70 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Tier 1: Massive Headline (Full Width) */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-6xl sm:text-8xl lg:text-[11rem] font-black text-black leading-[0.8] tracking-tighter uppercase text-balance text-left">
            Sigue el <br />
            <span className="opacity-40">movimiento.</span>
          </h2>
        </div>

        {/* Tier 2: Description + Social Cards (2 Columns on Medium+) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Description Content */}
          <div className="space-y-6">
            <p className="text-2xl md:text-4xl text-black font-bold leading-[1.1] max-w-lg">
              Historias reales. <br />
              Producción profesional.
            </p>
            <p className="text-lg md:text-xl text-black/70 max-w-md font-medium leading-relaxed">
              Únete a nuestra comunidad y descubre cómo transformamos el mundo
              audiovisual desde Limón.
            </p>
          </div>

          {/* Right: Social Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="group flex flex-col justify-between p-6 md:p-10 bg-black/5 border border-black/10 rounded-3xl aspect-square hover:bg-black hover:text-[#18943A] transition-all duration-700 ease-in-out"
            >
              <SiInstagram size={32} className="md:w-16 md:h-16" />
              <div className="flex justify-between items-end">
                <span className="font-black text-lg md:text-2xl uppercase tracking-tighter">
                  IG
                </span>
                <ArrowUpRight
                  size={20}
                  className="md:w-10 md:h-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </div>
            </Link>

            <Link
              href="https://youtube.com"
              target="_blank"
              className="group flex flex-col justify-between p-6 md:p-10 bg-black/5 border border-black/10 rounded-3xl aspect-square hover:bg-black hover:text-[#18943A] transition-all duration-700 ease-in-out"
            >
              <SiYoutube size={32} className="md:w-16 md:h-16" />
              <div className="flex justify-between items-end">
                <span className="font-black text-lg md:text-2xl uppercase tracking-tighter">
                  YT
                </span>
                <ArrowUpRight
                  size={20}
                  className="md:w-10 md:h-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </div>
            </Link>

            <Link
              href="https://wa.me/something"
              target="_blank"
              className="group col-span-2 flex items-center justify-between p-6 md:p-10 bg-black text-[#18943A] rounded-3xl hover:bg-neutral-900 transition-all duration-500"
            >
              <div className="flex items-center gap-4 md:gap-8">
                <SiWhatsapp size={32} className="md:w-16 md:h-16" />
                <div className="flex flex-col">
                  <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-[#18943A]/60">
                    Hablemos ahora
                  </span>
                  <span className="text-xl md:text-5xl font-black uppercase tracking-tight">
                    WhatsApp
                  </span>
                </div>
              </div>
              <ArrowUpRight
                size={24}
                className="md:w-16 md:h-16 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Visual Accent */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
