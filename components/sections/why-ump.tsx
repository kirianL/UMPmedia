"use client";

import { motion } from "framer-motion";
import { Camera, Zap, Trophy, Film, Play } from "lucide-react";
import { SlotBadge } from "@/components/ui/slot-badge";

interface DifferentiatorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  illustration: React.ReactNode;
  index: number;
}

function DifferentiatorCard({ icon, title, description, illustration, index }: DifferentiatorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15px" }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.23, 1, 0.32, 1] }}
      className="group grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 p-6 md:p-10 lg:p-12 bg-ump-alt/60 rounded-2xl md:rounded-[2rem] border border-white/5 hover:border-ump-accent/20 transition-[border-color,background-color] duration-300 items-center overflow-hidden relative cursor-default active:scale-[0.99]"
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-ump-accent/0 to-ump-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
      
      {/* Text Copy */}
      <div className="lg:col-span-7 space-y-4 md:space-y-5 z-10">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-ump-background border border-white/10 flex items-center justify-center text-ump-accent group-hover:bg-ump-accent group-hover:text-black group-hover:border-ump-accent transition-[background-color,color,border-color,transform] duration-250 group-hover:scale-105 shadow-inner">
          {icon}
        </div>
        <h3 className="text-lg md:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-ump-secondary text-sm md:text-base leading-relaxed max-w-xl">
          {description}
        </p>
      </div>

      {/* Interactive Illustration */}
      <div className="lg:col-span-5 flex items-center justify-center h-36 md:h-48 lg:h-60 relative bg-ump-background/45 rounded-xl md:rounded-2xl border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors duration-300">
        {illustration}
      </div>
    </motion.div>
  );
}

export function WhyUMP() {
  return (
    <section className="py-14 md:py-24 lg:py-36 bg-ump-background relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 z-20 border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20 lg:mb-28"
        >
          <div className="mb-3 flex justify-center">
            <SlotBadge text="El Estándar UMP" variant="accent" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-none tracking-tighter uppercase mb-4 md:mb-6">
            ¿Por qué <br className="md:hidden" />
            <span className="text-ump-accent italic">elegir UMP?</span>
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-ump-secondary">
            Fusionamos tecnología audiovisual avanzada con una perspectiva auténtica para crear piezas memorables.
          </p>
        </motion.div>

        {/* Differentiators list */}
        <div className="space-y-6 md:space-y-10">
          {/* Card 1: Cinema Gear */}
          <DifferentiatorCard
            index={0}
            icon={<Camera size={24} />}
            title="Producción de Cine y Alta Gama"
            description="Grabamos en resolución 4K y 6K con ópticas de calidad cinematográfica, estabilizadores avanzados y drones de última generación. Cuidamos cada fotograma, iluminación y color para que tu marca se perciba con el mayor nivel posible."
            illustration={
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Viewfinder overlay */}
                <div className="absolute inset-3 md:inset-4 border border-white/5 rounded-md pointer-events-none flex flex-col justify-between p-2 font-mono text-[9px] text-white/40">
                  <div className="flex justify-between w-full">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                      <span className="text-white/60">REC</span>
                    </div>
                    <span>24fps</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>ISO 800</span>
                    <span>5600K</span>
                  </div>
                </div>

                {/* Lens Body with subtle GPU rotation */}
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border border-dashed border-white/10 flex items-center justify-center relative group-hover:rotate-45 transition-transform duration-700 ease-out">
                  <div className="absolute inset-2 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="absolute inset-3 md:inset-4 rounded-full border border-ump-accent/15 flex items-center justify-center bg-ump-background/40">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-tr from-ump-accent/10 to-ump-accent/30 border border-ump-accent/60 flex items-center justify-center shadow-sm" />
                    </div>
                  </div>
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-ump-accent/60" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-ump-accent/60" />
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-ump-accent/60" />
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-ump-accent/60" />
                </div>

                {/* Tech tag */}
                <div className="absolute bottom-3 bg-black/85 px-2.5 py-1 rounded-md border border-white/5 flex items-center gap-1.5">
                  <Film size={12} className="text-ump-accent" />
                  <span className="text-[9px] md:text-[10px] text-white font-mono uppercase tracking-widest">6K RAW</span>
                </div>
              </div>
            }
          />

          {/* Card 2: Workflow Speed */}
          <DifferentiatorCard
            index={1}
            icon={<Zap size={24} />}
            title="Flujo de Trabajo Dinámico y Veloz"
            description="Entendemos el ritmo de las plataformas digitales. Implementamos pipelines optimizados que reducen los tiempos de entrega sin sacrificar los estándares de calidad. Planificación impecable, rodaje eficiente y postproducción ágil."
            illustration={
              <div className="relative w-full h-full flex items-center justify-center px-6 md:px-8">
                <div className="w-full flex flex-col gap-3 md:gap-4">
                  {/* Track 1 */}
                  <div className="h-6 md:h-7 rounded-lg bg-white/5 border border-white/10 w-full relative overflow-hidden flex items-center px-3">
                    <div className="h-3 w-1/3 bg-ump-accent/40 rounded transition-all duration-300 group-hover:w-2/3" />
                    <div className="absolute right-3 text-[8px] font-mono text-white/50 uppercase tracking-wider">A-Roll.mp4</div>
                  </div>

                  {/* Track 2 */}
                  <div className="h-6 md:h-7 rounded-lg bg-white/5 border border-white/10 w-full relative overflow-hidden flex items-center px-3">
                    <div className="h-3 w-1/4 bg-white/10 rounded transition-all duration-300 group-hover:w-1/2" />
                    <div className="absolute right-3 text-[8px] font-mono text-white/50 uppercase tracking-wider">B-Roll.mp4</div>
                  </div>

                  {/* Status indicator */}
                  <div className="flex justify-between items-center px-1">
                    <span className="text-[9px] md:text-[10px] font-mono text-ump-accent">
                      // RENDER STATUS: READY
                    </span>
                    <Play size={12} className="text-white/80" />
                  </div>
                </div>
              </div>
            }
          />

          {/* Card 3: Caribbean Roots */}
          <DifferentiatorCard
            index={2}
            icon={<Trophy size={24} />}
            title="Narrativa Caribeña y Visión Global"
            description="Nuestra base en Limón nos otorga un sentido único de la luz, el color y el ritmo. Fusionamos la pasión de nuestra cultura caribeña con un nivel de diseño global, logrando producciones que resuenan y destacan en cualquier parte del mundo."
            illustration={
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <div className="absolute w-32 h-32 bg-ump-accent/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex gap-1.5 md:gap-2 items-end h-20 md:h-28 z-10">
                  {[24, 48, 36, 60, 52, 32, 56, 28, 64, 40, 52, 28, 44, 22].map((height, i) => (
                    <div
                      key={i}
                      className="w-1 md:w-1.5 lg:w-2 rounded-full bg-ump-accent transition-all duration-300 group-hover:opacity-100 opacity-70"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-3 text-[8px] md:text-[9px] font-mono text-white/40 uppercase tracking-widest">Ritmo & Esencia</div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}


