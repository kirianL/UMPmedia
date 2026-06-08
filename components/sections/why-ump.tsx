"use client";

import { motion } from "framer-motion";
import { Camera, Zap, Award, Film, Play } from "lucide-react";

interface DifferentiatorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  illustration: React.ReactNode;
}

function DifferentiatorCard({ icon, title, description, illustration }: DifferentiatorCardProps) {
  return (
    <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 lg:p-12 bg-ump-alt/60 rounded-[2rem] border border-white/5 hover:border-ump-accent/20 transition-all duration-700 items-center overflow-hidden relative cursor-default">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-ump-accent/0 to-ump-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Text Copy */}
      <div className="lg:col-span-7 space-y-6 z-10">
        <div className="w-14 h-14 rounded-2xl bg-ump-background border border-white/10 flex items-center justify-center text-ump-accent group-hover:bg-ump-accent group-hover:text-black group-hover:border-ump-accent transition-all duration-500 shadow-inner">
          {icon}
        </div>
        <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-ump-secondary text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
          {description}
        </p>
      </div>

      {/* Interactive Illustration */}
      <div className="lg:col-span-5 flex items-center justify-center h-40 md:h-52 lg:h-64 relative bg-ump-background/45 rounded-2xl border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors duration-500">
        {illustration}
      </div>
    </div>
  );
}

export function WhyUMP() {
  return (
    <section className="py-14 md:py-24 lg:py-36 bg-ump-background relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 z-40 border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-28">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-none tracking-tighter uppercase mb-6">
            ¿Por qué <br className="md:hidden" />
            <span className="text-ump-accent italic">elegir UMP?</span>
          </h2>
          <p className="text-base md:text-xl text-ump-secondary">
            Fusionamos tecnología audiovisual avanzada con una perspectiva auténtica para crear piezas memorables.
          </p>
        </div>

        {/* Differentiators list */}
        <div className="space-y-8 md:space-y-12">
          {/* Card 1: Cinema Gear */}
          <DifferentiatorCard
            icon={<Camera size={26} />}
            title="Producción de Cine y Alta Gama"
            description="Grabamos en resolución 4K y 6K con ópticas de calidad cinematográfica, estabilizadores avanzados y drones de última generación. Cuidamos cada fotograma, iluminación y color para que tu marca se perceiba con el mayor nivel posible."
            illustration={
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Viewfinder overlay - visible and pulsing REC */}
                <div className="absolute inset-4 border border-white/5 rounded-md pointer-events-none flex flex-col justify-between p-2 font-mono text-[9px] text-white/40">
                  <div className="flex justify-between w-full">
                    <div className="flex items-center gap-1.5">
                      <motion.span 
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-2 h-2 rounded-full bg-red-600" 
                      />
                      <span className="text-white/60">REC</span>
                    </div>
                    <span>24fps</span>
                  </div>
                  <div className="flex justify-between w-full">
                    <span>ISO 800</span>
                    <span>5600K</span>
                  </div>
                </div>

                {/* Lens Body - continuous slow rotation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 md:w-36 md:h-36 rounded-full border border-dashed border-white/10 flex items-center justify-center relative shadow-2xl"
                >
                  <div className="absolute inset-2 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="absolute inset-4 rounded-full border border-ump-accent/10 flex items-center justify-center bg-ump-background/40">
                      {/* Aperture blades / center pulse */}
                      <motion.div 
                        animate={{ scale: [0.92, 1.08, 0.92] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-10 h-10 rounded-full bg-gradient-to-tr from-ump-accent/5 to-ump-accent/25 border border-ump-accent/80 flex items-center justify-center"
                      />
                    </div>
                  </div>
                  {/* Lens markings */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-0.5 h-2.5 bg-ump-accent/60" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-2.5 bg-ump-accent/60" />
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 w-2.5 h-0.5 bg-ump-accent/60" />
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2.5 h-0.5 bg-ump-accent/60" />
                </motion.div>

                {/* Tech tag */}
                <div className="absolute bottom-4 bg-black/85 px-2.5 py-1 rounded-md border border-white/5 flex items-center gap-1.5">
                  <Film size={12} className="text-ump-accent" />
                  <span className="text-[10px] text-white font-mono uppercase tracking-widest">6K RAW</span>
                </div>
              </div>
            }
          />

          {/* Card 2: Workflow Speed */}
          <DifferentiatorCard
            icon={<Zap size={26} />}
            title="Flujo de Trabajo Dinámico y Veloz"
            description="Entendemos el ritmo de las plataformas digitales. Implementamos pipelines optimizados que reducen los tiempos de entrega sin sacrificar los estándares de calidad. Planificación impecable, rodaje eficiente y postproducción ágil."
            illustration={
              <div className="relative w-full h-full flex items-center justify-center px-8">
                <div className="w-full flex flex-col gap-4">
                  {/* Track 1 - Continuous horizontal scan */}
                  <div className="h-7 rounded-lg bg-white/5 border border-white/10 w-full relative overflow-hidden flex items-center px-3">
                    <motion.div
                      animate={{ x: ["-100%", "230%"] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                      className="h-3 w-1/3 bg-ump-accent/40 rounded"
                    />
                    <div className="absolute right-3 text-[8px] font-mono text-white/50 uppercase tracking-wider">A-Roll.mp4</div>
                  </div>

                  {/* Track 2 - Offset horizontal scan */}
                  <div className="h-7 rounded-lg bg-white/5 border border-white/10 w-full relative overflow-hidden flex items-center px-3">
                    <motion.div
                      animate={{ x: ["-100%", "230%"] }}
                      transition={{ duration: 3.8, repeat: Infinity, ease: "linear", delay: 1.5 }}
                      className="h-3 w-1/4 bg-white/10 rounded"
                    />
                    <div className="absolute right-3 text-[8px] font-mono text-white/50 uppercase tracking-wider">B-Roll.mp4</div>
                  </div>

                  {/* Status indicator */}
                  <div className="flex justify-between items-center px-1">
                    <motion.span 
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-[10px] font-mono text-ump-accent"
                    >
                      // RENDER STATUS: PROCESSING
                    </motion.span>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                    >
                      <Play size={13} className="text-white/80" />
                    </motion.div>
                  </div>
                </div>
              </div>
            }
          />

          {/* Card 3: Caribbean Roots */}
          <DifferentiatorCard
            icon={<Award size={26} />}
            title="Narrativa Caribeña y Visión Global"
            description="Nuestra base en Limón nos otorga un sentido único de la luz, el color y el ritmo. Fusionamos la pasión de nuestra cultura caribeña con un nivel de diseño global, logrando producciones que resuenan y destacan en cualquier parte del mundo."
            illustration={
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                {/* Glow backdrop pulsing gently */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.25, 1],
                    opacity: [0.08, 0.16, 0.08] 
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute w-36 h-36 bg-ump-accent rounded-full blur-2xl pointer-events-none"
                />

                {/* Equalizer bars - looping offset waves */}
                <div className="flex gap-2 items-end h-28 z-10">
                  {[40, 75, 55, 95, 80, 50, 90, 45, 100, 65, 85, 45, 70, 35].map((height, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        height: [12, height, 12] 
                      }}
                      transition={{
                        duration: 1.0 + (i % 5) * 0.15,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.05
                      }}
                      className="w-1.5 md:w-2 rounded-full bg-ump-accent"
                      style={{ height: 12 }}
                    />
                  ))}
                </div>
                <div className="absolute bottom-3 text-[9px] font-mono text-white/40 uppercase tracking-widest">Ritmo & Esencia</div>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}
