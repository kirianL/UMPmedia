"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Videos Publicitarios",
    description:
      "Reels, comerciales y contenido estratégico para potenciar tu marca.",
  },
  {
    id: "02",
    title: "Servicio de Podcast",
    description:
      "Grabación profesional en estudio o a domicilio con audio y video premium.",
  },
  {
    id: "03",
    title: "Cobertura de Eventos",
    description:
      "Fotografía y video de alta gama para capturar cada momento importante.",
  },
  {
    id: "04",
    title: "Cobertura de Bodas",
    description:
      "Inmortalizamos tu historia de amor con un estilo cinematográfico único.",
  },
  {
    id: "05",
    title: "Social Media",
    description:
      "Estrategia, diseño y producción de contenido viral para tu negocio.",
  },
];

export function ServicesTeaser() {
  return (
    <section className="py-32 md:py-56 bg-ump-alt border-t border-white/5 relative z-30 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
              Lo que hacemos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Servicios
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden md:flex items-center gap-2 text-ump-secondary hover:text-white transition-colors mt-6 md:mt-0"
          >
            Ver todos los servicios <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.id}
              href="/services"
              className={`group relative p-8 rounded-2xl border border-white/5 bg-ump-card/20 hover:bg-ump-card/40 hover:border-ump-accent transition-all duration-300 flex flex-col justify-between h-[300px] ${
                index === 0 ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="text-4xl font-mono font-bold text-white/10 group-hover:text-ump-accent transition-colors">
                  {service.id}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-ump-accent group-hover:text-black transition-colors border border-transparent group-hover:border-ump-accent">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                  {service.title}
                </h3>
                <p className="text-ump-secondary text-sm leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/services"
          className="md:hidden flex items-center gap-2 text-ump-secondary hover:text-white transition-colors mt-12 justify-center"
        >
          Ver todos los servicios <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  );
}
