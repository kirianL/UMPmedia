"use client";

import { Check, Zap, Crown, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DigitalCombos() {
  return (
    <section className="mb-32">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
            Paquetes Integrales
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Combos estratégicos
          </h2>
          <p className="text-lg text-ump-secondary max-w-2xl leading-relaxed">
            Unimos producción audiovisual y desarrollo web para crear
            ecosistemas digitales que funcionan. Diseño, contenido y tecnología
            en un solo lugar.
          </p>
          <div className="h-1 w-20 bg-ump-accent mt-8"></div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* 1. INICIAL - Minimal Blue Accent */}
          <PricingCard
            title="Inicial"
            subtitle="Presencia digital esencial"
            price="$750"
            description="Para emprendedores que necesitan verse profesionales hoy mismo."
            accentColor="blue-500"
            icon={Zap}
            features={[
              "Landing Page Comercial (Conversión)",
              "Diseño adaptable a móviles",
              "Formulario + Botón WhatsApp",
              "Video Reel Promocional (30s)",
              "Optimización básica para anuncios",
            ]}
            excluded={["Hosting: $0 - $20/mes", "Dominio: ~$20/año"]}
          />

          {/* 2. PROFESIONAL - Minimal Amber Accent */}
          <PricingCard
            title="Profesional"
            subtitle="Lanzamiento comercial"
            price="$1,250"
            description="El paquete ideal para marcas establecidas que buscan crecimiento real."
            accentColor="amber-500"
            icon={Crown}
            features={[
              "Landing Page Comercial PRO",
              "Video Publicitario Producción Completa",
              "Sesión de Fotos Corporativa/Producto",
              "Integración Campañas Meta/Google",
              "Automatización de Contactos CRM",
              "1 Mes de Soporte Técnico Incluido",
            ]}
            excluded={["Hosting: $20/mes", "Dominio: ~$20/año"]}
          />

          {/* 3. CORPORATIVO - Minimal Red Accent */}
          <PricingCard
            title="Corporativo"
            subtitle="Sistema digital completo"
            price="$2,200"
            description="Solución robusta para empresas. Web completa y contenido de alta gama."
            accentColor="red-500"
            icon={BarChart3}
            features={[
              "Sitio Web Corporativo (5 secciones)",
              "Video Corporativo Institucional",
              "Fotografía Profesional Avanzada",
              "Sistema de Reservas o Catálogo",
              "SEO Técnico y Velocidad Premium",
              "2 Meses de Soporte Técnico Incluido",
            ]}
            excluded={[
              "Hosting: $20/mes",
              "Base de Datos: $25/mes",
              "Dominio: ~$20/año",
            ]}
          />
        </div>

        {/* Closing Value Proposition */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-12 text-center md:text-left">
          <div className="p-6">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2 justify-center md:justify-start">
              <div className="w-2 h-2 rounded-full bg-ump-accent"></div>
              Solución unificada
            </h4>
            <p className="text-sm text-ump-secondary leading-relaxed">
              No contrates fotógrafo, videógrafo y programador por separado.
              Nosotros integramos todo.
            </p>
          </div>
          <div className="p-6 border-l border-r border-white/5">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2 justify-center md:justify-start">
              <div className="w-2 h-2 rounded-full bg-ump-accent"></div>
              Escalabilidad real
            </h4>
            <p className="text-sm text-ump-secondary leading-relaxed">
              Sistemas hechos con código real (Next.js), no plantillas lentas.
              Crecen contigo.
            </p>
          </div>
          <div className="p-6">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2 justify-center md:justify-start">
              <div className="w-2 h-2 rounded-full bg-ump-accent"></div>
              Enfoque en ventas
            </h4>
            <p className="text-sm text-ump-secondary leading-relaxed">
              "El negocio no solo se tiene que ver bien, tiene que generar
              clientes desde el primer mes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  excluded: string[];
  accentColor: string;
  icon: any;
}

function PricingCard({
  title,
  subtitle,
  price,
  description,
  features,
  excluded,
  accentColor,
  icon: Icon,
}: PricingCardProps) {
  // Tailwind color classes mapping based on accentColor prop
  const colorMap: Record<string, string> = {
    "blue-500": "text-blue-500",
    "amber-500": "text-amber-500",
    "red-500": "text-red-500",
  };

  const accentClass = colorMap[accentColor] || "text-white";

  return (
    <div
      className={`relative flex flex-col h-full rounded-2xl p-8 transition-all duration-300 border bg-transparent border-white/5`}
    >
      <div className="mb-8">
        <div
          className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${accentClass}`}
        >
          <Icon size={20} />
        </div>

        <h3 className="text-lg font-bold text-white mb-1 tracking-wide">
          {title}
        </h3>
        <p className={`text-sm font-medium mb-4 opacity-80 ${accentClass}`}>
          {subtitle}
        </p>

        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-4xl font-bold text-white">{price}</span>
        </div>

        <p className="text-sm text-ump-secondary leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex-1 mb-8 pt-6 border-t border-white/5">
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-gray-300"
            >
              <Check size={14} className={`mt-1 shrink-0 ${accentClass}`} />
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-4">
          <p className="text-[10px] text-gray-600 uppercase font-bold mb-2 tracking-wider">
            No incluye:
          </p>
          <div className="flex flex-wrap gap-2">
            {excluded.map((item, i) => (
              <span
                key={i}
                className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-500 border border-white/5"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Link href="/contact" className="block w-full">
        <Button
          className={`w-full font-bold tracking-wide bg-white/5 text-white hover:bg-white/10 border border-white/10 cursor-pointer`}
        >
          Cotizar {title}
        </Button>
      </Link>
    </div>
  );
}
