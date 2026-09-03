"use client";

import Image from "next/image";
import Link from "next/link";
import { PiArrowRightBold } from "react-icons/pi";
import { SlotButton } from "@/components/ui/slot-button";

const teamMembers = [
  {
    name: "Fabián Acuña",
    role: "Director General & Fundador",
    photo: "/assets/images/Team/Fabian_T.png",
    bioLink: "/team",
  },
  {
    name: "Eymar Ortiz",
    role: "Productor Audiovisual",
    photo: "/assets/images/Team/Eymar_T.png",
    bioLink: "/team",
  },
  {
    name: "Kirian Luna",
    role: "Ingeniero en Sistemas & Desarrollador Web",
    photo: "/assets/images/Team/Kirian_T.png",
    bioLink: "/team",
  },
];

export function TeamTeaser() {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#032014] text-white relative z-20 overflow-hidden">
      {/* Subtle emerald bloom */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-3 block">
            Talento Local, Impacto Global
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            El <span className="text-emerald-400 font-normal italic">equipo</span>
          </h2>
          <p className="text-emerald-200/80 text-sm sm:text-base md:text-lg font-normal leading-relaxed mt-3">
            Las personas detrás de cada producción, estrategia y línea de código en Ultimate Media Productions.
          </p>
        </div>

        {/* Responsive Grid with SVG Folder Cutouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center">
          {teamMembers.map((member) => (
            <Link
              key={member.name}
              href={member.bioLink}
              className="group block text-left space-y-4 max-w-[280px] sm:max-w-none mx-auto w-full"
            >
              {/* Folder-shape Clipped Card */}
              <div
                className="relative aspect-[3/4] bg-black/40 border border-emerald-900/50 transition-all duration-500 group-hover:bg-black/60 overflow-hidden shadow-xl"
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
                  className="absolute inset-0 w-full h-full pointer-events-none stroke-white/20 group-hover:stroke-emerald-400/60 transition-colors duration-500"
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
                <h3 className="text-white font-bold text-xl group-hover:text-emerald-300 transition-colors duration-200">
                  {member.name}
                </h3>
                <span className="text-emerald-200/70 text-xs uppercase tracking-wider block font-semibold">
                  {member.role}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Center Bottom CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <SlotButton
            href="/team"
            variant="secondary"
            className="rounded-full bg-white text-neutral-950 hover:bg-neutral-100 font-medium text-xs sm:text-sm px-6 py-3 normal-case tracking-tight shadow-xs"
            icon={<PiArrowRightBold size={13} />}
            iconPosition="right"
          >
            Conoce a todo el equipo
          </SlotButton>
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
