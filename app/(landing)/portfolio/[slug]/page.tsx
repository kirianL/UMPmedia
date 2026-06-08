"use client";

import { CTAFinal } from "@/components/sections/cta-final";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { use } from "react";
import { BuscandoDealer } from "@/components/sections/buscando-dealer";

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  if (slug === "buscando-al-dealer") {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <BuscandoDealer />
        <div className="border-t border-white/10 mt-32 pt-20">
          <CTAFinal />
        </div>
      </div>
    );
  }

  // Mock Data based on slug (In Phase 2 this comes from Supabase)
  const isLosChances = slug === "los-chances";
  const isSazonColombiano = slug === "sazon-colombiano";
  const project = {
    title: isSazonColombiano ? "Sazón Colombiano" : isLosChances ? "Los Chances" : "Project Name",
    client: isSazonColombiano ? "Sazón Colombiano" : isLosChances ? "Ultimate Media Productions" : "National Geographic",
    year: "2026",
    category: isSazonColombiano ? "Branding" : "Producción",
    role: isSazonColombiano ? "Branding & Identidad" : "Producción & Dirección",
    summary: isSazonColombiano
      ? "Diseño integral de marca y posicionamiento de identidad para Sazón Colombiano, reflejando su riqueza cultural a través de una estética visual limpia y contemporánea."
      : isLosChances
      ? "Una cautivadora producción audiovisual original del Caribe que explora la cultura y las dinámicas locales a través de una narración cinematográfica de primer nivel."
      : "Una exploración profunda de las raíces culturales del Caribe Sur costarricense, documentando tradiciones que se desvanecen.",
    credits: isSazonColombiano
      ? [
          { role: "Diseño Gráfico", name: "Ultimate Media Productions" },
          { role: "Dirección de Arte", name: "Team UMP" },
        ]
      : isLosChances
      ? [
          { role: "Director", name: "Ultimate Media Productions" },
          { role: "Producción", name: "Team UMP" },
          { role: "DP", name: "Cámara UMP" },
        ]
      : [
          { role: "Director", name: "Juan Perez" },
          { role: "DP", name: "Maria Gonzalez" },
          { role: "Editor", name: "Carlos Smith" },
        ],
    image: isSazonColombiano
      ? "/portfolio/Branding/SazonColombiano/SazonColombiano.jpeg"
      : isLosChances
      ? "/portfolio/productions/LosChances/LosChances.jpg"
      : "",
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 mb-12">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-ump-secondary hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={18} /> Volver al Portafolio
        </Link>

        {/* Hero Metadata */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-ump-accent font-bold uppercase tracking-widest mb-2 block">
              {project.category} — {project.year}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-none">
              {project.title}
            </h1>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span className="text-ump-secondary text-sm uppercase tracking-wider">
              Cliente
            </span>
            <span className="text-white font-bold text-lg">
              {project.client}
            </span>
          </div>
        </div>

        {/* Main Media (Poster/Video) */}
        <div className="w-full aspect-video md:aspect-[21/9] max-h-[300px] md:max-h-[480px] bg-neutral-900 rounded-3xl overflow-hidden mb-16 relative border border-white/5 shadow-2xl">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono">
              Project Hero Media (Video/Image)
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          {/* Summary */}
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-bold text-white mb-6">El Proyecto</h2>
            <p className="text-xl text-ump-secondary leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Credits */}
          <div className="lg:col-span-4 bg-ump-alt p-8 rounded-lg border border-white/5">
            <h3 className="text-white font-bold mb-6">Créditos</h3>
            <ul className="space-y-4">
              {project.credits.map((credit, i) => (
                <li
                  key={i}
                  className="flex justify-between border-b border-white/5 pb-2 last:border-0"
                >
                  <span className="text-ump-secondary text-sm">
                    {credit.role}
                  </span>
                  <span className="text-white font-medium">{credit.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        <h2 className="text-2xl font-bold text-white mb-8">Galería</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          <div className="aspect-video bg-neutral-900 rounded-3xl overflow-hidden relative border border-white/5">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} - Galería 1`}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="absolute inset-0 bg-neutral-800" />
            )}
          </div>
          <div className="aspect-video bg-neutral-900 rounded-3xl overflow-hidden relative border border-white/5">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} - Galería 2`}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover hover:scale-105 transition-transform duration-700 brightness-90 filter hue-rotate-15"
              />
            ) : (
              <div className="absolute inset-0 bg-neutral-800" />
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-20">
        <CTAFinal />
      </div>
    </div>
  );
}
