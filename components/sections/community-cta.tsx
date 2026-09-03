"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PiInstagramLogoBold, PiYoutubeLogoBold, PiWhatsappLogoBold } from "react-icons/pi";

export function CommunityCTA() {
  return (
    <section
      id="community-cta-section"
      className="w-full bg-[#f6f6f3] text-neutral-900 py-16 md:py-32 lg:py-40 overflow-hidden relative z-50 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 lg:gap-8">
          {/* Left: Massive Typography */}
          <div className="max-w-3xl">
            <p className="text-neutral-500 font-mono text-xs sm:text-sm uppercase tracking-widest mb-6 md:mb-8">
              Únete a la comunidad
            </p>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter uppercase text-balance text-neutral-950">
              Sigue el <br />
              <span className="text-neutral-300">movimiento.</span>
            </h2>
            <p className="mt-8 md:mt-12 text-lg md:text-2xl text-neutral-600 max-w-lg font-medium leading-tight">
              Historias reales. Producción profesional. Únete para transformar el mundo audiovisual desde Limón.
            </p>
          </div>

          {/* Right: Minimalist Social Links */}
          <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[340px]">
            <Link
              href="https://www.instagram.com/umpmediacr?igsh=M3ByaDdlanhsa3Fv"
              target="_blank"
              className="group flex items-center justify-between p-5 sm:p-6 bg-white border border-neutral-200/60 rounded-2xl hover:border-neutral-300 hover:shadow-sm active:scale-[0.98] transition-all duration-300 ease-out"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-neutral-100 transition-colors duration-300">
                  <PiInstagramLogoBold size={22} className="text-neutral-950" />
                </div>
                <span className="font-bold text-sm sm:text-base uppercase tracking-wider text-neutral-950">
                  Instagram
                </span>
              </div>
              <ArrowUpRight
                size={20}
                className="text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </Link>

            <Link
              href="https://www.youtube.com/@UltimateMediaProductions"
              target="_blank"
              className="group flex items-center justify-between p-5 sm:p-6 bg-white border border-neutral-200/60 rounded-2xl hover:border-neutral-300 hover:shadow-sm active:scale-[0.98] transition-all duration-300 ease-out"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-neutral-100 transition-colors duration-300">
                  <PiYoutubeLogoBold size={22} className="text-neutral-950" />
                </div>
                <span className="font-bold text-sm sm:text-base uppercase tracking-wider text-neutral-950">
                  YouTube
                </span>
              </div>
              <ArrowUpRight
                size={20}
                className="text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </Link>
            
            <Link
              href="https://wa.me/50670609325"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-5 sm:p-6 bg-neutral-950 border border-neutral-950 rounded-2xl hover:bg-neutral-900 active:scale-[0.97] transition-all duration-200 ease-out mt-2 shadow-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-700 transition-colors duration-300">
                  <PiWhatsappLogoBold size={22} className="text-white" />
                </div>
                <span className="font-bold text-sm sm:text-base uppercase tracking-wider text-white">
                  Hablemos
                </span>
              </div>
              <ArrowUpRight
                size={20}
                className="text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
