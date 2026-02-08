"use client";

import { CTAFinal } from "@/components/sections/cta-final";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import { DigitalSolutions } from "@/components/sections/digital-solutions";

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* 1. Hero */}
      <div className="container mx-auto px-6 mb-16">
        <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
          Catálogo de Servicios
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          UMP MEDIA
          <br /> Productora Audiovisual.
        </h1>
        <div className="max-w-2xl">
          <p className="text-xl text-ump-secondary mb-8 leading-relaxed">
            Somos una productora audiovisual especializada en crear contenido
            estratégico que conecta marcas, proyectos y personas con su
            audiencia. Convertimos ideas en historias que comunican, posicionan
            y venden.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 space-y-24 mb-32">
        {/* Videos Publicitarios */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Videos Publicitarios y Corporativos
            </h2>
            <div className="h-1 w-20 bg-ump-accent"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
            <ServiceCard
              title="Reel Publicitario"
              price="Desde $100"
              subtitle="Duración 30 segundos"
              features={[
                "Producción",
                "Edición sencilla",
                "Equipo profesional",
              ]}
              extra="Modelo para contenido: +$40"
              imageSrc="/assets/placeholder.jpg"
            />
            <ServiceCard
              title="Video Profesional"
              price="Desde $250"
              subtitle="Calidad cinematográfica"
              features={[
                "Producción",
                "Edición profesional",
                "Productor audiovisual",
                "Equipo profesional",
                "Tomas con dron",
              ]}
              extra="Modelo para contenido: +$40"
              imageSrc="/assets/placeholder.jpg"
              isHighlight
            />
          </div>
        </section>

        {/* Podcast */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Servicio de Podcast
            </h2>
            <p className="text-ump-secondary mb-4">
              Ambas opciones incluyen soporte técnico durante la grabación y
              calidad profesional de audio y video.
            </p>
            <div className="h-1 w-20 bg-ump-accent"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
            <ServiceCard
              title="Grabación a Domicilio"
              price="₡250.000"
              subtitle="Vamos donde estés"
              features={[
                "Traslado de cámaras, trípodes, luces y micrófonos",
                "Grabación en su casa con todo el equipo incluido",
                "Edición completa del podcast",
              ]}
              imageSrc="/assets/placeholder.jpg"
            />
            <ServiceCard
              title="Grabación en Estudio"
              price="₡175.000"
              subtitle="Con pantalla verde"
              features={[
                "Grabación en estudio profesional",
                "Uso de cámaras, luces, micrófonos y pantalla verde",
                "Edición completa del podcast",
              ]}
              imageSrc="/assets/placeholder.jpg"
              isHighlight
            />
          </div>
        </section>

        {/* Cobertura de Eventos */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cobertura de Eventos
            </h2>
            <div className="h-1 w-20 bg-ump-accent"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <ServiceCard
              title="Fotografía"
              price="$80"
              priceDetail="/ hora"
              subtitle="Ideal para eventos, retratos y contenido comercial."
              features={[
                "Equipo profesional de alta gama",
                "Cobertura por hora",
                "Selección y edición básica de las mejores imágenes",
                "Entrega digital en alta resolución",
                "Entrega digital en alta resolución",
              ]}
              imageSrc="/assets/placeholder.jpg"
            />
            <ServiceCard
              title="Video"
              price="$110"
              priceDetail="/ hora"
              subtitle="Ideal para eventos sociales y corporativos."
              features={[
                "Cobertura de video profesional",
                "Grabación estable",
                "Encuadres cuidados",
                "Edición básica",
                "Entrega digital en alta resolución",
                "Entrega digital en alta resolución",
              ]}
              imageSrc="/assets/placeholder.jpg"
            />
            <ServiceCard
              title="Fotografía + Video"
              price="$160"
              priceDetail="/ hora"
              subtitle="Cobertura completa con calidad premium."
              features={[
                "Cobertura completa para eventos",
                "Equipo profesional",
                "Calidad premium",
                "Edición básica incluida",
                "Entrega digital en alta resolución",
              ]}
              imageSrc="/assets/placeholder.jpg"
              isHighlight
            />
          </div>
        </section>

        {/* Cobertura de Bodas */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cobertura de Bodas
            </h2>
            <div className="h-1 w-20 bg-ump-accent"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <ServiceCard
              title="Pack 1"
              price="₡55.000"
              subtitle="Fotografía"
              features={[
                "Cobertura de ceremonia",
                "Fotografías ilimitadas",
                "Edición profesional incluida",
                "Edición profesional incluida",
              ]}
              imageSrc="/assets/placeholder.jpg"
            />
            <ServiceCard
              title="Pack 2"
              price="₡155.000"
              subtitle="Fotografía"
              features={[
                "Cobertura de ceremonia",
                "3 horas de recepción",
                "Fotografías ilimitadas",
                "Edición profesional incluida",
                "Edición profesional incluida",
              ]}
              imageSrc="/assets/placeholder.jpg"
            />
            <ServiceCard
              title="Pack 3"
              price="₡105.000"
              subtitle="Fotografía y Video"
              features={[
                "Cobertura de ceremonia",
                "Fotografías ilimitadas",
                "Edición profesional incluida",
                "Edición profesional incluida",
              ]}
              imageSrc="/assets/placeholder.jpg"
            />
            <ServiceCard
              title="Pack 4"
              price="₡250.000"
              subtitle="Fotografía y Video"
              features={[
                "Cobertura de ceremonia",
                "3 horas de recepción",
                "Fotografías ilimitadas",
                "Edición profesional incluida",
              ]}
              imageSrc="/assets/placeholder.jpg"
              isHighlight
            />
          </div>
        </section>

        {/* Manejo de Redes Sociales */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Manejo de Redes Sociales
            </h2>
            <div className="h-1 w-20 bg-ump-accent"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8">
            <ServiceCard
              title="Pack PYME"
              price="$150"
              priceDetail=" mensuales"
              features={[
                "10 posts mensuales",
                "5 reels",
                "5 diseños",
                "1 visita mensual",
                "Guiones, Estrategia, Producción",
                "Posteo en redes sociales",
              ]}
              extra="Adicionales: Modelo +$40 | Visita extra +$100"
              imageSrc="/assets/placeholder.jpg"
            />
            <ServiceCard
              title="Pack Corporativo"
              price="$400"
              priceDetail=" mensuales"
              features={[
                "16 posts mensuales",
                "8 reels, 8 diseños",
                "1 visita mensual",
                "Plan de contenido y Guiones",
                "Grabación y Edición profesional",
                "Posteo y Reporte mensual",
                "Diagnóstico de negocio",
              ]}
              extra="Adicionales: Modelo +$40 | Visita extra +$100"
              imageSrc="/assets/placeholder.jpg"
              isHighlight
            />
          </div>
        </section>

        {/* Sistemas y Soluciones Digitales */}
        <DigitalSolutions />
      </div>

      {/* 4. FAQs */}
      <section className="container mx-auto px-6 max-w-3xl mb-32">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Preguntas Frecuentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-white hover:text-ump-accent">
              ¿Cuál es el tiempo de entrega promedio?
            </AccordionTrigger>
            <AccordionContent className="text-ump-secondary">
              Para proyectos de fotografía, 5-7 días hábiles. Para video, entre
              2 y 4 semanas dependiendo de la complejidad de la post-producción.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white hover:text-ump-accent">
              ¿Trabajan fuera de Limón?
            </AccordionTrigger>
            <AccordionContent className="text-ump-secondary">
              ¡Claro! Nos encanta viajar. Trabajamos en todo Costa Rica y
              estamos disponibles para proyectos internacionales.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-white hover:text-ump-accent">
              ¿Cómo se reservan las fechas?
            </AccordionTrigger>
            <AccordionContent className="text-ump-secondary">
              Requerimos un depósito del 50% para bloquear fechas de rodaje en
              nuestro calendario.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <CTAFinal />
    </div>
  );
}

function ServiceCard({
  title,
  price,
  priceDetail,
  subtitle,
  features,
  extra,
  imageSrc,
  isHighlight = false,
}: {
  title: string;
  price: string;
  priceDetail?: string;
  subtitle?: string;
  features: string[];
  extra?: string;
  imageSrc: string;
  isHighlight?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border transition-all duration-300 flex flex-col h-full bg-ump-card/20 hover:bg-ump-card/40 ${
        isHighlight
          ? "border-ump-accent shadow-lg shadow-ump-accent/10"
          : "border-white/10 hover:border-white/20"
      }`}
    >
      {/* Image Container */}
      <div className="relative h-32 md:h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-ump-background to-transparent z-10" />
        {/* Placeholder for actual image - using a colored div for now if src is placeholder */}
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundColor: "#1a1a1a",
          }}
        />
        <div className="absolute bottom-2 left-4 z-20">
          <h3 className="text-lg md:text-xl font-bold text-white shadow-black drop-shadow-md">
            {title}
          </h3>
        </div>
      </div>

      <div className="p-4 md:p-6 flex flex-col flex-1">
        <div className="mb-4">
          <div className="flex flex-wrap items-baseline gap-1 mb-1">
            <span className="text-2xl md:text-3xl font-bold text-ump-accent">
              {price}
            </span>
            {priceDetail && (
              <span className="text-xs md:text-sm text-ump-secondary">
                {priceDetail}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs md:text-sm text-ump-secondary italic leading-tight">
              {subtitle}
            </p>
          )}
        </div>

        <ul className="space-y-2 md:space-y-3 mb-6 flex-1">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs md:text-sm text-white/80"
            >
              <Check size={14} className="text-ump-accent mt-0.5 shrink-0" />
              <span className="leading-tight">{feature}</span>
            </li>
          ))}
          {extra && (
            <li className="flex items-start gap-2 text-xs md:text-sm text-ump-secondary pt-3 mt-3 border-t border-white/10">
              <Info size={14} className="text-ump-accent mt-0.5 shrink-0" />
              <span className="leading-tight">{extra}</span>
            </li>
          )}
        </ul>

        <Button
          variant={isHighlight ? "default" : "outline"}
          className={`w-full text-xs md:text-sm h-8 md:h-10 ${
            isHighlight
              ? "bg-ump-accent hover:bg-ump-accent/90 text-black"
              : "border-white/20 text-white hover:bg-white hover:text-black"
          }`}
        >
          Cotizar
        </Button>
      </div>
    </div>
  );
}
