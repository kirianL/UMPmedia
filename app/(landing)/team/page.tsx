"use client";

import { CTAFinal } from "@/components/sections/cta-final";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Nombre 1",
    role: "Director Creativo",
    bio: "Visionario con más de 10 años en la industria cinematográfica caribeña.",
    specialties: ["Dirección", "Guion", "Conceptualización"],
    image: "", // Placeholder
  },
  {
    name: "Nombre 2",
    role: "Director de Fotografía",
    bio: "Obsesionado con la luz natural y la composición geométrica.",
    specialties: ["Iluminación", "Cámara Cine", "Color"],
    image: "", // Placeholder
  },
  {
    name: "Nombre 3",
    role: "Productora Ejecutiva",
    bio: "La fuerza que hace que las cosas imposibles sucedan a tiempo.",
    specialties: ["Logística", "Presupuestos", "Casting"],
    image: "", // Placeholder
  },
  {
    name: "Nombre 4",
    role: "Editor & Motion",
    bio: "Narrador visual en la post-producción. Ritmo y detalle.",
    specialties: ["Premiere", "After Effects", "Davinci"],
    image: "", // Placeholder
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 mb-24">
        <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
          El Equipo
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Personas detrás
          <br /> de la cámara.
        </h1>
      </div>

      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] bg-neutral-800 mb-6 rounded-sm overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-bold flex items-center gap-2">
                    Ver Bio <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {member.name}
              </h3>
              <span className="text-ump-accent text-xs font-bold uppercase tracking-widest block mb-4">
                {member.role}
              </span>
              <p className="text-ump-secondary text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">
                {member.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                {member.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] uppercase font-bold text-white/50 border border-white/10 px-2 py-1 rounded-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTAFinal />
    </div>
  );
}
