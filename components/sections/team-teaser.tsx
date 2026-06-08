"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Fabián Acuña",
    role: "Director General | Manager de Artistas",
    photo: "/assets/images/Team/Fabian.jpg",
    bioLink: "/team",
  },
  {
    name: "Eymar Ortiz Rojas",
    role: "Productor Audiovisual",
    photo: "/assets/images/Team/Eymar.jpg",
    bioLink: "/team",
  },
  {
    name: "Kirian Luna Quirós",
    role: "Ingeniero en Sistemas y Desarrollador Web",
    photo: "/assets/images/Team/Kirian.jpg",
    bioLink: "/team",
  },
];

export function TeamTeaser() {
  return (
    <section className="py-32 md:py-56 bg-ump-alt relative z-60 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 overflow-hidden border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div key={member.name} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-ump-alt mb-4 relative overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-500">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{member.name}</h3>
                <span className="text-ump-accent text-[10px] md:text-xs font-bold uppercase tracking-widest block mb-1">
                  {member.role}
                </span>
              </div>
              <Link
                href={member.bioLink}
                className="inline-flex items-center gap-1 text-ump-secondary hover:text-white transition-colors text-sm mt-2"
              >
                Ver Biografía <ArrowRight size={14} />
              </Link>
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
