"use client";

import { motion } from "framer-motion";
import { PiSparkleBold, PiLightningBold, PiWaveformBold } from "react-icons/pi";

interface DifferentiatorCardProps {
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  illustration: React.ReactNode;
  index: number;
}

function DifferentiatorCard({
  icon,
  category,
  title,
  description,
  illustration,
  index,
}: DifferentiatorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15px" }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: [0.23, 1, 0.32, 1] }}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-neutral-200/80 hover:border-neutral-300 shadow-xs hover:shadow-sm transition-all duration-300 items-center overflow-hidden relative select-none"
    >
      {/* Modern SVG corner architectural notch */}
      <svg
        className="absolute top-3 right-3 w-4 h-4 text-neutral-300 group-hover:text-emerald-600 pointer-events-none transition-colors duration-300"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 0H6V2H14V10H16V0Z" fill="currentColor" />
      </svg>

      {/* Copy Column */}
      <div className="lg:col-span-7 space-y-3 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-100 transition-all duration-200">
            {icon}
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold">
            {category}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-950 tracking-tight">
          {title}
        </h3>

        <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
          {description}
        </p>
      </div>

      {/* Modern Interactive Graphic Column */}
      <div className="lg:col-span-5 flex items-center justify-center h-40 sm:h-48 lg:h-56 relative bg-neutral-50 rounded-2xl border border-neutral-200/60 overflow-hidden group-hover:border-neutral-300 transition-colors duration-300 p-4">
        {illustration}
      </div>
    </motion.div>
  );
}

export function WhyUMP() {
  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#f6f6f3] text-neutral-900 relative z-20 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header without black background or badges */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 leading-[1.1]">
            ¿Por qué <span className="text-emerald-600 font-normal italic">elegir UMP?</span>
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mt-3 font-normal">
            Combinamos estrategia digital, calidad visual y una perspectiva auténtica para construir proyectos que destacan.
          </p>
        </div>

        {/* Modern Differentiators List with Clean White Cards */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Item 1: Calidad Visual y Estándar Técnico */}
          <DifferentiatorCard
            index={0}
            icon={<PiSparkleBold size={20} />}
            category="Estándar Visual"
            title="Calidad de Producción de Alto Impacto"
            description="Producimos en ultra alta definición con iluminación controlada, audio balanceado y postproducción cuidada. Cada pieza está optimizada para proyectar prestigio y solidez de marca en cualquier pantalla."
            illustration={
              <div className="w-full h-full flex flex-col justify-between relative p-2 font-mono text-xs">
                <div className="flex items-center justify-between text-neutral-400 text-[10px]">
                  <span>4K / UHD RES</span>
                  <span className="text-emerald-600 font-medium">COLOR CALIBRADO</span>
                </div>
                
                <div className="relative flex items-center justify-center my-auto">
                  <div className="w-24 h-24 rounded-2xl border border-neutral-200 flex items-center justify-center relative bg-white shadow-xs">
                    <div className="w-16 h-16 rounded-xl border border-dashed border-emerald-400/60 flex items-center justify-center group-hover:rotate-45 transition-transform duration-700 ease-out">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-400" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-neutral-400 text-[10px]">
                  <span>10-BIT LOG</span>
                  <span>ACES PIPELINE</span>
                </div>
              </div>
            }
          />

          {/* Item 2: Flujo Ágil y Velocidad */}
          <DifferentiatorCard
            index={1}
            icon={<PiLightningBold size={20} />}
            category="Eficiencia"
            title="Flujo de Trabajo Dinámico y Veloz"
            description="Entendemos el ritmo de las plataformas y las necesidades comerciales actuales. Implementamos procesos ágiles desde la conceptualización hasta la entrega final sin comprometer el estándar visual."
            illustration={
              <div className="w-full h-full flex flex-col justify-center gap-3 px-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                    <span>Rodaje y Captura</span>
                    <span className="text-emerald-600 font-semibold">Completado</span>
                  </div>
                  <div className="h-2 rounded-full bg-neutral-200 overflow-hidden">
                    <div className="h-full bg-emerald-500 w-full rounded-full" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                    <span>Edición y Montaje</span>
                    <span className="text-emerald-600 font-semibold">En proceso</span>
                  </div>
                  <div className="h-2 rounded-full bg-neutral-200 overflow-hidden">
                    <div className="h-full bg-emerald-500/80 w-3/4 rounded-full group-hover:w-5/6 transition-all duration-500" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                    <span>Master Digital</span>
                    <span className="text-neutral-400">Listo para entrega</span>
                  </div>
                  <div className="h-2 rounded-full bg-neutral-200 overflow-hidden">
                    <div className="h-full bg-neutral-400 w-1/3 rounded-full group-hover:w-1/2 transition-all duration-500" />
                  </div>
                </div>
              </div>
            }
          />

          {/* Item 3: Identidad Caribeña y Alcance Global */}
          <DifferentiatorCard
            index={2}
            icon={<PiWaveformBold size={20} />}
            category="Identidad"
            title="Perspectiva Caribeña con Visión Global"
            description="Nuestra base en Limón nos aporta una sensibilidad única para el color, el ritmo y la narrativa espontánea. Fusionamos esa autenticidad con estándares de diseño contemporáneos para que tu mensaje resuene donde sea."
            illustration={
              <div className="relative w-full h-full flex flex-col items-center justify-center gap-3">
                <div className="flex gap-1.5 items-end h-16">
                  {[28, 52, 38, 70, 58, 36, 64, 30, 72, 44, 58, 32, 48, 26].map((height, i) => (
                    <div
                      key={i}
                      className="w-1.5 sm:w-2 rounded-full bg-emerald-600/80 group-hover:bg-emerald-600 transition-all duration-300"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase">
                  Ritmo y Narrativa Auténtica
                </span>
              </div>
            }
          />

        </div>

      </div>
    </section>
  );
}
