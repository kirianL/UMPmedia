"use client";

import { CTAFinal } from "@/components/sections/cta-final";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { use } from "react";

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  // Mock Data based on slug (In Phase 2 this comes from Supabase)
  const project = {
    title: slug === "caribe-roots" ? "Caribe Roots" : "Project Name",
    client: "National Geographic",
    year: "2024",
    category: "Documental",
    role: "Producción & Dirección",
    summary:
      "Una exploración profunda de las raíces culturales del Caribe Sur costarricense, documentando tradiciones que se desvanecen y la nueva generación que las preserva.",
    credits: [
      { role: "Director", name: "Juan Perez" },
      { role: "DP", name: "Maria Gonzalez" },
      { role: "Editor", name: "Carlos Smith" },
    ],
    gallery: [1, 2, 3, 4], // Placeholder IDs
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
        <div className="w-full aspect-video bg-neutral-800 rounded-lg overflow-hidden mb-16 relative">
          {/* <video ... /> or <Image ... /> */}
          <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono">
            Project Hero Media (Video/Image)
          </div>
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
          <div className="aspect-[4/5] bg-neutral-800 rounded-sm relative">
            {/* Img 1 */}
          </div>
          <div className="flex flex-col gap-6">
            <div className="aspect-video bg-neutral-800 rounded-sm relative" />
            <div className="aspect-square bg-neutral-800 rounded-sm relative" />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-20">
        <CTAFinal />
      </div>
    </div>
  );
}
