"use client";

import {
  Check,
  Info,
  Code,
  Layout,
  ShoppingCart,
  MessageSquare,
  Shield,
  Server,
  ArrowRight,
  Laptop,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function DigitalSolutions() {
  return (
    <section className="mb-32">
      {/* Header */}
      <div className="mb-16">
        <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
          UMP MEDIA
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Sistemas y soluciones digitales
        </h2>
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-ump-secondary leading-relaxed mb-6">
            Desarrollo de software a medida que complementa tu estrategia
            audiovisual. Tecnología moderna, segura y escalable para convertir
            visitas en clientes.
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

      {/* Maintenance Plans - Clean & Minimal */}
      <div className="bg-ump-card/10 border border-white/5 rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Soporte y mantenimiento
            </h3>
            <p className="text-ump-secondary leading-relaxed mb-6">
              Garantizamos la estabilidad y seguridad de tu plataforma con
              nuestros planes mensuales.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Info size={16} className="text-ump-accent" />
              <span>Planes mensuales obligatorios para garantía.</span>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {maintenancePlans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-xl border p-6 ${plan.isHighlight ? "bg-white/5 border-ump-accent/30" : "bg-transparent border-white/10"}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4
                    className={`font-bold ${plan.isHighlight ? "text-white" : "text-gray-400"}`}
                  >
                    {plan.title}
                  </h4>
                  {plan.isHighlight && (
                    <Shield size={18} className="text-ump-accent" />
                  )}
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-gray-500"> / mes</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <Check
                        size={14}
                        className={`mt-1 shrink-0 ${plan.isHighlight ? "text-ump-accent" : "text-gray-600"}`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  title,
  price,
  description,
  features,
  icon: Icon,
  excluded,
}: SolutionItem) {
  return (
    <div className="bg-[#151515] rounded-xl border border-white/5 flex flex-col h-full">
      <div className="p-8 flex flex-col flex-1">
        <div className="mb-6">
          <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white text-ump-accent">
            <Icon size={24} strokeWidth={1.5} />
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="flex items-baseline gap-1 mb-4">
            <span className="text-2xl font-bold text-ump-accent">{price}</span>
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              / pago único
            </span>
          </div>

          <p className="text-sm text-ump-secondary leading-relaxed border-l border-white/10 pl-4">
            {description}
          </p>
        </div>

        <div className="mt-auto pt-6 border-t border-white/5 space-y-6">
          <ul className="space-y-3">
            {features.slice(0, 4).map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-gray-400"
              >
                <div className="w-1 h-1 rounded-full bg-ump-secondary mt-2 shrink-0" />
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>

          {excluded && excluded.length > 0 && (
            <div className="pt-4 border-t border-white/5">
              <p className="text-[10px] text-gray-500 uppercase font-bold mb-2 tracking-wider">
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
          )}

          <Link href="/contact" className="block w-full">
            <Button
              variant="outline"
              className="w-full border-white/10 hover:bg-white hover:text-black hover:border-white text-gray-300 text-xs uppercase tracking-widest cursor-pointer"
            >
              Cotizar
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Data
interface SolutionItem {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: any;
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
    title: "Landing page comercial",
    price: "$450",
    description:
      "Diseñada para convertir visitas en clientes. Ideal para campañas publicitarias y lanzamientos.",
    icon: Layout,
    features: [
      "Diseño UX/UI enfocado en ventas",
      "Optimización móvil total",
      "Formularios de contacto + WhatsApp",
      "Integración Analytics y Pixel",
      "Carga ultrarrápida",
    ],
    excluded: ["Hosting: $0 - $20/mes", "Dominio: ~$20/año"],
  },
  {
    title: "Sitio web corporativo",
    price: "$900",
    description:
      "Plataforma completa para empresas que buscan autoridad digital y gestión de contenido.",
    icon: Server,
    features: [
      "Hasta 5 secciones internas",
      "Gestor de Contenido (CMS)",
      "Blog / Noticias integrado",
      "SEO Técnico avanzado",
      "Panel administrativo moderno",
    ],
    excluded: [
      "Hosting: $20/mes",
      "Base de datos: $25/mes",
      "Dominio: ~$20/año",
    ],
  },
  {
    title: "E-Commerce / Reservas",
    price: "$550",
    description:
      "Sistemas para vender productos o gestionar citas automáticamente 24/7.",
    icon: ShoppingCart,
    features: [
      "Pasarela de pagos segura",
      "Gestión de inventario/agenda",
      "Notificaciones automáticas",
      "Panel de gestión de clientes",
      "Reportes básicos",
    ],
    excluded: [
      "Hosting: $20/mes",
      "Base de datos: $25/mes",
      "Dominio: ~$20/año",
    ],
  },
  {
    title: "Catálogo digital QR",
    price: "$400",
    description:
      "Menú o catálogo interactivo autoadministrable. Ideal para restaurantes y retail.",
    icon: Laptop,
    features: [
      "Interfaz rápida sin app",
      "Filtros y categorías",
      "Botón directo a WhatsApp Pedidos",
      "Generador de QR único",
      "Autoadministrable",
    ],
    excluded: ["Hosting: $0 - $20/mes", "Dominio: ~$20/año"],
  },
  {
    title: "Automatización CRM básica",
    price: "$300",
    description:
      "Centraliza y automatiza la atención al cliente. Respuestas rápidas y organización.",
    icon: MessageSquare,
    features: [
      "Chatbots para WhatsApp/Web",
      "Respuestas automáticas",
      "Base de datos de clientes",
      "Etiquetado y seguimiento",
      "Alertas de ventas",
    ],
    excluded: [],
  },
];

const maintenancePlans: MaintenanceItem[] = [
  {
    title: "Plan técnico básico",
    price: "$50",
    features: [
      "Actualizaciones de seguridad",
      "Backup semanal",
      "Monitoreo 24/7",
      " Soporte vía correo (48h)",
    ],
  },
  {
    title: "Plan digital pro",
    price: "$120",
    features: [
      "Soporte prioritario (12h)",
      "Cambios menores mensuales",
      "Optimización SEO continua",
      "Reporte mensual",
      "Gestión de hosting",
    ],
    isHighlight: true,
  },
];
