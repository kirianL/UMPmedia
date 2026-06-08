"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Fabián Acuña",
    role: "Director General | Manager de Artistas",
    photo: "/assets/images/Team/Fabian_T.png",
    bioLink: "/team",
  },
  {
    name: "Eymar Ortiz Rojas",
    role: "Productor Audiovisual",
    photo: "/assets/images/Team/Eymar_T.png",
    bioLink: "/team",
  },
  {
    name: "Kirian Luna Quirós",
    role: "Ingeniero en Sistemas y Desarrollador Web",
    photo: "/assets/images/Team/Kirian_T.png",
    bioLink: "/team",
  },
];

export function TeamTeaser() {
  return (
    <section className="py-20 md:py-32 bg-ump-alt relative z-60 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 overflow-hidden border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-6">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-ump-accent text-xs font-bold uppercase tracking-widest mb-3 block">
            / talento local, impacto global /
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            El Equipo
          </h2>
          <p className="text-ump-secondary text-base md:text-lg">
            Las mentes creativas y técnicas detrás de Ultimate Media Productions. Desde Limón para el mundo.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center">
          {teamMembers.map((member) => (
            <Link
              key={member.name}
              href={member.bioLink}
              className="group block text-left space-y-4 max-w-[280px] sm:max-w-none mx-auto w-full"
            >
              {/* Folder-shape Clipped Card */}
              <div
                className="relative aspect-[3/4] bg-[#1a1a1c] transition-all duration-500 group-hover:bg-[#222225] overflow-hidden shadow-xl"
                style={{ clipPath: "url(#folder-clip)" }}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-contain object-bottom pt-8 px-4 pb-0 filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* SVG Outline Border */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none stroke-white/15 group-hover:stroke-[#32fb00]/50 transition-colors duration-500"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 0,8 C 0,3.6 3.6,0 8,0 L 40,0 C 44,0 46,8 50,8 L 92,8 C 96.4,8 100,11.6 100,16 L 100,92 C 100,96.4 96.4,100 92,100 L 8,100 C 3.6,100 0,96.4 0,92 Z"
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              
              {/* Text Meta */}
              <div className="space-y-1 pl-2">
                <h3 className="text-white font-bold text-xl transition-colors duration-300 group-hover:text-[#32fb00]">
                  {member.name}
                </h3>
                <span className="text-ump-secondary text-xs uppercase tracking-wider block font-medium">
                  {member.role}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Center Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:border-[#32fb00] text-ump-secondary hover:text-white transition-all duration-300 text-sm font-bold uppercase tracking-wider"
          >
            <span>Ver todo el equipo</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* SVG ClipPath Definition for the Folder Tab Shape */}
      <svg className="absolute w-0 h-0" width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="folder-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.08 C 0,0.036 0.036,0 0.08,0 L 0.40,0 C 0.44,0 0.46,0.08 0.50,0.08 L 0.92,0.08 C 0.964,0.08 1,0.116 1,0.16 L 1,0.92 C 1,0.964 0.964,1 0.92,1 L 0.08,1 C 0.036,1 0,0.964 0,0.92 Z" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
}
