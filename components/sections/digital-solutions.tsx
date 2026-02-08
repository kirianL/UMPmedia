"use client";

import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DigitalSolutions() {
  return (
    <section className="mb-32">
      {/* Header */}
      <div className="mb-12">
        <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
          UMP MEDIA
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Sistemas y Soluciones Digitales
        </h2>
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-ump-secondary leading-relaxed mb-6">
            Soluciones digitales modernas que complementan el contenido
            audiovisual y convierten visitas en clientes reales. Desarrolladas
            con tecnologías actuales de alto rendimiento, seguras y escalables.
          </p>
          <div className="h-1 w-20 bg-ump-accent"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {solutions.map((item, index) => (
          <SolutionCard key={index} {...item} />
        ))}
      </div>

      {/* Maintenance Plans */}
      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
          Mantenimiento y Soporte Técnico
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {maintenancePlans.map((plan, index) => (
            <MaintenanceCard key={index} {...plan} />
          ))}
        </div>
        <p className="text-center text-ump-secondary text-sm mt-6">
          El soporte técnico se ofrece únicamente mediante planes mensuales.
        </p>
      </div>

      {/* Important Notes */}
      <div className="bg-ump-card/10 border border-white/5 rounded-2xl p-8 max-w-4xl mx-auto">
        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
          <Info className="text-ump-accent" size={20} />
          Notas Importantes
        </h4>
        <ul className="space-y-2 text-ump-secondary text-sm md:text-base list-disc list-inside">
          <li>
            Todos los sistemas se desarrollan con tecnologías modernas de alto
            rendimiento.
          </li>
          <li>
            Los costos de hosting, base de datos y dominio son independientes
            del desarrollo.
          </li>
          <li>Cambios adicionales se cotizan por separado.</li>
        </ul>
      </div>
    </section>
  );
}

function SolutionCard({
  title,
  price,
  description,
  features,
  excluded,
  isHighlight = false,
}: SolutionItem) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 flex flex-col h-full bg-ump-card/20 hover:bg-ump-card/40 ${
        isHighlight
          ? "border-ump-accent shadow-lg shadow-ump-accent/10"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-ump-accent transition-colors">
            {title}
          </h3>
          <div className="flex items-baseline gap-1 mb-3">
            <span className="text-2xl md:text-3xl font-bold text-ump-accent">
              {price}
            </span>
            <span className="text-sm text-ump-secondary">/ pago único</span>
          </div>
          <p className="text-sm md:text-base text-ump-secondary leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-6 flex-1">
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3 opacity-80">
              Incluye:
            </h4>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-white/90"
                >
                  <Check
                    size={16}
                    className="text-ump-accent mt-0.5 shrink-0"
                  />
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {excluded && excluded.length > 0 && (
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold text-ump-secondary uppercase tracking-wider mb-2 opacity-80">
                Costos externos:
              </h4>
              <ul className="space-y-1">
                {excluded.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-ump-secondary/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-ump-secondary mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-8">
          <Button
            variant={isHighlight ? "default" : "outline"}
            className={`w-full ${
              isHighlight
                ? "bg-ump-accent hover:bg-ump-accent/90 text-black font-bold"
                : "border-white/20 text-white hover:bg-white hover:text-black"
            }`}
          >
            Cotizar
          </Button>
        </div>
      </div>
    </div>
  );
}

function MaintenanceCard({
  title,
  price,
  features,
  isHighlight = false,
}: MaintenanceItem) {
  return (
    <div
      className={`rounded-2xl border p-6 md:p-8 flex flex-col bg-ump-card/10 ${
        isHighlight
          ? "border-ump-accent bg-ump-accent/5"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl md:text-4xl font-bold text-ump-accent">
          {price}
        </span>
        <span className="text-sm text-ump-secondary">/ mes</span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white/90">
            <Check size={16} className="text-ump-accent mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          isHighlight
            ? "bg-ump-accent hover:bg-ump-accent/90 text-black font-bold"
            : "bg-white/10 hover:bg-white/20 text-white"
        }`}
      >
        Cotizar
      </Button>
    </div>
  );
}

// Data
interface SolutionItem {
  title: string;
  price: string;
  description: string;
  features: string[];
  excluded?: string[];
  isHighlight?: boolean;
}

interface MaintenanceItem {
  title: string;
  price: string;
  features: string[];
  isHighlight?: boolean;
}

const solutions: SolutionItem[] = [
  {
    title: "Landing Page Comercial",
    price: "Desde $450",
    description:
      "Página estratégica diseñada para campañas publicitarias, lanzamientos y captación de clientes. ¡Nuestro producto estrella!",
    features: [
      "Página enfocada en conversión",
      "Diseño moderno y adaptable a móviles",
      "Estructura estratégica de contenido",
      "Formulario de contacto y WhatsApp",
      "Pixel Meta / Google Analytics",
      "Optimización para campañas con video",
    ],
    excluded: [
      "Hosting (Vercel): $0 - $20 / mes",
      "Dominio web: $15 - $25 / año",
    ],
    isHighlight: true,
  },
  {
    title: "Sitio Web Profesional",
    price: "Desde $900",
    description:
      "Presencia digital sólida para empresas y marcas establecidas.",
    features: [
      "Sitio web de hasta 5 secciones",
      "Diseño alineado a la marca",
      "Optimización SEO básica",
      "Alta velocidad y rendimiento",
      "Panel de administración simple",
      "Integración con redes sociales",
    ],
    excluded: [
      "Hosting (Vercel): $20 / mes",
      "Base de datos (Supabase): $25 / mes",
      "Dominio web: $15 - $25 / año",
    ],
  },
  {
    title: "Sistema de Reservas",
    price: "Desde $550",
    description: "Gestión digital de citas para negocios de servicios.",
    features: [
      "Agenda de reservas online",
      "Panel administrativo",
      "Confirmaciones automáticas (Email/WhatsApp)",
      "Diseño adaptado a la marca",
      "Acceso desde cualquier dispositivo",
      "Infraestructura moderna y segura",
    ],
    excluded: [
      "Hosting (Vercel): $20 / mes",
      "Base de datos (Supabase): $25 / mes",
      "Dominio web: $15 - $25 / año",
    ],
  },
  {
    title: "Catálogo / Menú Digital",
    price: "Desde $400",
    description: "Ideal para restaurantes, tiendas y comercios.",
    features: [
      "Catálogo visual de productos o servicios",
      "Diseño moderno y optimizado para móviles",
      "Botón de contacto por WhatsApp",
      "Generación de código QR",
      "Tecnologías modernas",
    ],
    excluded: [
      "Hosting (Vercel): $0 - $20 / mes",
      "Dominio web: $15 - $25 / año",
    ],
  },
  {
    title: "Automatización Básica",
    price: "Desde $300",
    description:
      "Optimiza la atención al cliente y reduce tiempos de respuesta.",
    features: [
      "Formularios inteligentes",
      "Respuestas automáticas por WhatsApp o email",
      "Organización básica de contactos via CRM ligero",
      "Notificaciones automáticas escalables",
    ],
    excluded: [],
  },
];

const maintenancePlans: MaintenanceItem[] = [
  {
    title: "Plan Técnico Básico",
    price: "$50",
    features: [
      "Soporte técnico estándar",
      "Actualizaciones de seguridad",
      "Copias de seguridad (Backups)",
      "Monitoreo básico de actividad",
    ],
  },
  {
    title: "Plan Digital Completo",
    price: "$120",
    features: [
      "Soporte prioritario 24/7",
      "Cambios menores mensuales en contenido",
      "Optimización continua de rendimiento",
      "Gestión técnica de hosting y base de datos",
      "Reporte mensual de métricas básico",
    ],
    isHighlight: true,
  },
];
