"use client";

import { CTAFinal } from "@/components/sections/cta-final";
import { EquipmentShowcase } from "@/components/sections/equipment-showcase";
import { RevealText } from "@/components/ui/reveal-text";
import { Check } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* 1. Hero */}
      <section className="container mx-auto px-6 mb-24 md:mb-32">
        <RevealText
          text="DESDE LIMÓN, PARA EL MUNDO"
          tag="h1"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-white"
          delay={0.1}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-xl text-ump-secondary leading-relaxed max-w-5xl">
          <p>
            Nacimos en el Caribe, donde el ritmo y el color son el lenguaje
            natural. UMPmedia es la respuesta a una necesidad: contar nuestras
            historias con la calidad técnica que merecen.
          </p>
          <p className="text-white font-medium">
            No somos solo un estudio de producción. Somos guardianes de una
            estética auténtica, lejos de los clichés turísticos.
          </p>
        </div>
      </section>

      {/* 2. Timeline / History */}
      <section className="bg-ump-alt py-24 mb-24 border-y border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-16">
            Nuestra Trayectoria
          </h2>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {[
              {
                year: "2020",
                title: "El Origen",
                desc: "Iniciamos como un colectivo de fotografía urbana documentando la vida en Puerto Limón.",
              },
              {
                year: "2022",
                title: "Consolidación",
                desc: "Establecimos nuestro estudio físico y expandimos servicios a producción de video comercial.",
              },
              {
                year: "2024",
                title: "Expansión",
                desc: "Colaboraciones internacionales y enfoque en cine documental y branding de alto nivel.",
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <span className="text-6xl font-bold text-ump-card group-hover:text-ump-accent/20 transition-colors absolute -top-10 -left-6 z-0">
                  {item.year}
                </span>
                <div className="relative z-10">
                  <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-ump-secondary text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Values */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Autenticidad Radical",
            "Calidad Obsesiva",
            "Narrativa Primero",
          ].map((val, i) => (
            <div
              key={i}
              className="bg-ump-card/30 p-8 border border-white/5 rounded-lg"
            >
              <Check className="text-ump-accent mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{val}</h3>
              <p className="text-sm text-ump-secondary">
                Creemos en hacer las cosas bien o no hacerlas. Cada pixel
                cuenta.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Equipment Showcase */}
      <EquipmentShowcase />

      {/* 5. Process */}
      <section className="container mx-auto px-6 mb-32">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">
          Nuestro Proceso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Descubrimiento",
              desc: "Entendemos el núcleo de tu mensaje.",
            },
            {
              step: "02",
              title: "Concepto",
              desc: "Traducimos ideas a lenguaje visual.",
            },
            {
              step: "03",
              title: "Producción",
              desc: "Ejecución técnica impecable en set.",
            },
            { step: "04", title: "Post", desc: "Donde nace la magia final." },
          ].map((p, i) => (
            <div key={i} className="border-t border-ump-accent/30 pt-6">
              <span className="text-ump-accent text-sm font-bold mb-2 block">
                {p.step}
              </span>
              <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-ump-secondary">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTAFinal />
    </div>
  );
}
