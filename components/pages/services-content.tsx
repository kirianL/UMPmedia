"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CTAFinal } from "@/components/sections/cta-final";
import { SlotButton } from "@/components/ui/slot-button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PiCheckBold, PiArrowRightBold, PiClockBold } from "react-icons/pi";

interface ServiceBlock {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  pricePeriod?: string;
  delivery: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  ctaText: string;
  whatsappMessage: string;
}

const SERVICES: ServiceBlock[] = [
  {
    id: "audiovisual",
    title: "Producción Audiovisual",
    subtitle: "Comerciales, reels y coberturas de alto estándar",
    price: "Desde $100",
    pricePeriod: "/ proyecto",
    delivery: "3 a 7 días hábiles",
    description:
      "Diseñamos y producimos piezas audiovisuales de alto calibre para posicionar marcas y conectar con la audiencia. Cuidamos cada detalle de iluminación, dirección de arte, sonido y etalonaje de color.",
    features: [
      "Reels comerciales verticales en 4K UHD para Instagram y TikTok",
      "Videos corporativos e institucionales con tomas aéreas con dron",
      "Grabación de podcasts multi-cámara en estudio o en locación",
      "Cobertura fotográfica y de video para eventos y lanzamientos",
      "Edición dinámica, subtítulos, musicalización y master digital",
    ],
    imageSrc: "/assets/illustrations/services/audiovisual.png",
    imageAlt: "Ilustración de encuadre de cámara y producción audiovisual",
    ctaText: "Cotizar Producción Audiovisual",
    whatsappMessage: "Hola UMP, quiero cotizar un proyecto de Producción Audiovisual",
  },
  {
    id: "social-media",
    title: "Social Media & Gestión de Redes",
    subtitle: "Estrategia mensual de contenido para crecer en comunidad",
    price: "Desde $150",
    pricePeriod: "/ mes",
    delivery: "Calendario mensual activo",
    description:
      "Planes mensuales orientados a resultados. Nos encargamos de todo el ciclo: rodajes periódicos, conceptualización, guionización, edición de reels, diseño de carruseles y publicación constante.",
    features: [
      "Planes desde 10 hasta 16+ publicaciones mensuales coordinadas",
      "Sesiones de rodaje mensual en tus instalaciones o locación",
      "Creación de guiones estratégicos con llamadas a la acción comerciales",
      "Edición ágil de reels con formatos nativos de alto alcance",
      "Diseño gráfico de identidad para piezas estáticas y carruseles",
      "Informes periódicos de métricas, alcance y optimización",
    ],
    imageSrc: "/assets/illustrations/services/social.png",
    imageAlt: "Ilustración de smartphone y alcance en redes sociales",
    ctaText: "Consultar Planes de Redes",
    whatsappMessage: "Hola UMP, me interesa conocer los planes mensuales de Manejo de Redes",
  },
  {
    id: "digital-solutions",
    title: "Desarrollo Web & Soluciones Digitales",
    subtitle: "Plataformas interactivas, rápidas y a medida",
    price: "Desde $250",
    pricePeriod: "/ proyecto",
    delivery: "5 a 15 días hábiles",
    description:
      "Construimos sitios web y plataformas a medida diseñadas para convertir visitas en clientes reales. Arquitectura moderna, código limpio, carga instantánea y diseño completamente responsivo.",
    features: [
      "Landing pages comerciales optimizadas para conversión y anuncios",
      "Sitios web corporativos multi-página con catálogo o servicios",
      "Integración directa con WhatsApp, formularios y pasarelas",
      "Optimización SEO on-page y analítica de tráfico integrada",
      "Desarrollo de software y aplicaciones web a medida",
    ],
    imageSrc: "/assets/illustrations/services/digital.png",
    imageAlt: "Ilustración de desarrollo web y plataformas de código",
    ctaText: "Cotizar Desarrollo Web",
    whatsappMessage: "Hola UMP, deseo cotizar una página web o solución digital",
  },
  {
    id: "combos-360",
    title: "Combos 360 & Lanzamientos Integrales",
    subtitle: "Video, plataforma web y redes en un solo ecosistema",
    price: "Desde $750",
    pricePeriod: "/ paquete integral",
    delivery: "12 a 15 días hábiles",
    description:
      "La solución definitiva para marcas en apertura o empresas que buscan una renovación completa. Unificamos la producción de video, el sitio web y el material para redes para un debut con impacto.",
    features: [
      "Landing Page comercial completa y lista para ventas",
      "Video publicitario principal con rodaje profesional y dron",
      "Sesión fotográfica de producto, equipo y catálogo comercial",
      "Pack de reels promocionales listos para pauta y redes sociales",
      "Estrategia de lanzamiento y configuración de canales digitales",
    ],
    imageSrc: "/assets/illustrations/services/combos.png",
    imageAlt: "Ilustración de ecosistema digital 360",
    ctaText: "Cotizar Combo 360",
    whatsappMessage: "Hola UMP, quiero cotizar un Combo 360 para mi marca",
  },
];

const FAQS = [
  {
    question: "¿Cómo es el proceso desde la cotización hasta la entrega final?",
    answer:
      "Iniciamos con una conversación breve para comprender los objetivos de tu negocio. Te presentamos una propuesta clara y sin costos ocultos. Tras la confirmación, agendamos fechas de producción o kickoff técnico, avanzamos con revisiones intermedias y entregamos todos los archivos finales con el más alto estándar de calidad.",
  },
  {
    question: "¿Trabajan exclusivamente en Limón o en todo Costa Rica?",
    answer:
      "Nuestra sede principal está en Limón, pero realizamos producciones, rodajes y coberturas en todo el territorio nacional (Gran Área Metropolitana, Guanacaste, Puntarenas y zona sur). Los proyectos de desarrollo web y soluciones digitales se gestionan y entregan de forma remota para clientes nacionales e internacionales.",
  },
  {
    question: "¿Qué métodos de pago aceptan y cuáles son las condiciones?",
    answer:
      "Aceptamos transferencias bancarias (BAC Credomatic / Banco Nacional) y SINPE Móvil. Para proyectos puntuales se estipula un 50% de anticipo para reserva de agenda y un 50% contra entrega final de los materiales. Para los planes mensuales de redes sociales, el pago se realiza al inicio de cada periodo de servicio.",
  },
  {
    question: "¿Es posible personalizar un paquete a las necesidades específicas de mi marca?",
    answer:
      "Por supuesto. Cada marca tiene requerimientos y etapas distintas. Si necesitas sumar más videos a tu plan de redes, incluir tomas con dron en una cobertura o integrar una tienda en línea a tu sitio web, diseñamos una propuesta modular ajustada exactamente a tu presupuesto y metas.",
  },
];

export function ServicesContent() {
  return (
    <div className="min-h-screen bg-[#f6f6f3] text-neutral-900 selection:bg-emerald-500/20 selection:text-emerald-900">
      
      {/* Editorial Header (Clean, No Kicker Badges) */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-14 sm:pb-20 px-6 sm:px-8 lg:px-12 relative overflow-hidden border-b border-neutral-200/60">
        <div className="max-w-[1360px] mx-auto relative z-10">
          <div className="max-w-4xl space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-neutral-950 leading-[0.96]">
              Servicios que <br />
              <span className="text-emerald-600 font-normal italic">
                hacen crecer
              </span>{" "}
              tu marca.
            </h1>

            <p className="text-neutral-600 text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed pt-2">
              Producción audiovisual de alto impacto, estrategia activa para redes sociales y desarrollo web a medida. Opciones claras, entregables medibles y calidad sin atajos.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Editorial Grid (Large, Prominent Custom Visuals) */}
      <section className="py-16 sm:py-24 md:py-28 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1360px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="group relative flex flex-col justify-between rounded-[2.2rem] sm:rounded-[2.8rem] bg-white border border-neutral-200/80 shadow-xs hover:border-neutral-300 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Modern Architectural Corner Notch Accent */}
                <svg
                  className="absolute top-4 right-4 w-4 h-4 text-neutral-300 group-hover:text-emerald-600 transition-colors duration-300 pointer-events-none z-10"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 0H6V2H14V10H16V0Z" fill="currentColor" />
                </svg>

                {/* Top: Large Prominent Visual Stage */}
                <div className="relative w-full h-64 sm:h-72 md:h-80 bg-neutral-50/80 border-b border-neutral-100 flex items-center justify-center p-8 overflow-hidden">
                  <div className="relative w-full h-full max-w-[280px] max-h-[280px] transition-transform duration-500 ease-out group-hover:scale-105">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 280px, 340px"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Bottom: Comprehensive Content Body */}
                <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow">
                  <div className="space-y-4 mb-8">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight leading-tight group-hover:text-emerald-700 transition-colors duration-200">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-semibold text-emerald-700 mt-1">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Price and Delivery Indicator */}
                    <div className="pt-3 pb-4 border-y border-neutral-100 flex flex-wrap items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
                          {service.price}
                        </span>
                        {service.pricePeriod && (
                          <span className="text-xs sm:text-sm font-normal text-neutral-500">
                            {service.pricePeriod}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500">
                        <PiClockBold size={13} className="text-emerald-600" />
                        <span>Entrega: {service.delivery}</span>
                      </div>
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-3 pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 font-semibold block">
                        Alcance y entregables:
                      </span>
                      <ul className="space-y-2.5">
                        {service.features.map((feat, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-snug"
                          >
                            <span className="shrink-0 w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5">
                              <PiCheckBold size={10} className="stroke-[2.5]" />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Direct Contact Button */}
                  <div className="pt-2">
                    <SlotButton
                      href={`https://wa.me/50670609325?text=${encodeURIComponent(service.whatsappMessage)}`}
                      variant="primary"
                      className="w-full rounded-2xl py-3.5 text-xs sm:text-sm font-semibold tracking-tight normal-case justify-center bg-neutral-950 text-white hover:bg-neutral-800 shadow-xs"
                      icon={<PiArrowRightBold size={13} />}
                      iconPosition="right"
                    >
                      {service.ctaText}
                    </SlotButton>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Structured Minimalist FAQs Section */}
      <section className="py-20 sm:py-28 bg-white border-t border-neutral-200/60 px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-950 leading-tight">
              Preguntas <span className="text-emerald-600 font-normal italic">frecuentes</span>
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-normal mt-2.5 max-w-lg mx-auto">
              Todo lo que necesitas saber antes de iniciar tu producción o proyecto digital con nosotros.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#f6f6f3] border border-neutral-200/80 rounded-2xl px-5 sm:px-6 py-1 data-[state=open]:border-neutral-300 transition-colors"
              >
                <AccordionTrigger className="text-neutral-950 text-left font-bold text-sm sm:text-base hover:text-emerald-700 py-4 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 text-xs sm:text-sm leading-relaxed pb-4 font-normal">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </section>

      {/* Signature CTA Section with Emerald Light Beam */}
      <CTAFinal />

    </div>
  );
}
