"use client";

import { motion } from "framer-motion";
import { SlotButton } from "@/components/ui/slot-button";

const BRAND_TEMPLATES = [
  {
    name: "VERTEX",
    svg: (
      <svg className="h-5 sm:h-6 md:h-7 w-auto fill-current" viewBox="0 0 110 28" fill="none">
        <path d="M10 4h5l6 15 6-15h5L23 24h-4L10 4zm28 0h14v4.5h-9v3h7v4h-7v3.5h9V24H38V4zm20 0h9c5 0 8 3 8 7.5 0 3-1.5 5.5-4 6.5l5 6h-6l-4-5h-3v5h-5V4zm5 9h4c2 0 3.5-1 3.5-2.5S59 8 57 8h-4v5zM76 8.5h-5V4h15v4.5h-5V24h-5V8.5z" />
      </svg>
    ),
  },
  {
    name: "LUMEN",
    svg: (
      <svg className="h-5 sm:h-6 md:h-7 w-auto fill-current" viewBox="0 0 110 28" fill="none">
        <path d="M10 4h5v15h9v5H10V4zM30 4h5v12c0 3 2 4 4.5 4s4.5-1 4.5-4V4h5v12c0 6-4 9-9.5 9s-9.5-3-9.5-9V4zM55 4h6l5 11 5-11h6v20h-5V11l-4.5 9h-3L63 11v13h-5V4zM83 4h15v4.5h-10v3h8v4h-8v3.5h10V24H83V4z" />
      </svg>
    ),
  },
  {
    name: "NEXUS",
    svg: (
      <svg className="h-5 sm:h-6 md:h-7 w-auto fill-current" viewBox="0 0 110 28" fill="none">
        <path d="M10 4h5l10 14V4h5v20h-5L15 10v14h-5V4zM36 4h15v4.5h-10v3h8v4h-8v3.5h10V24H36V4zM57 4l5 8-5 8h6l3-5 3 5h6l-5-8 5-8h-6l-3 5-3-5h-6zM78 4h5v12c0 3 2 4 4.5 4s4.5-1 4.5-4V4h5v12c0 6-4 9-9.5 9s-9.5-3-9.5-9V4z" />
      </svg>
    ),
  },
  {
    name: "PULSE",
    svg: (
      <svg className="h-5 sm:h-6 md:h-7 w-auto fill-current" viewBox="0 0 100 28" fill="none">
        <path d="M10 4h9c5 0 8 3 8 7.5s-3 7.5-8 7.5h-4v5h-5V4zm5 10h4c2.5 0 4-1 4-2.5S21.5 9 19 9h-4v5zM33 4h5v15h8v5H33V4zM49 4h5v12c0 3 2 4 4.5 4s4.5-1 4.5-4V4h5v12c0 6-4 9-9.5 9s-9.5-3-9.5-9V4zM70 4h5v15h8v5H70V4z" />
      </svg>
    ),
  },
  {
    name: "KINETIC",
    svg: (
      <svg className="h-5 sm:h-6 md:h-7 w-auto fill-current" viewBox="0 0 120 28" fill="none">
        <path d="M10 4h5v9l7-9h6l-8 10 9 10h-6l-8-9v9h-5V4zM32 4h5v20h-5V4zM43 4h5l10 14V4h5v20h-5L48 10v14h-5V4zM69 4h14v4.5h-9v3h7v4h-7v3.5h9V24H69V4zM90 8.5h-5V4h15v4.5h-5V24h-5V8.5z" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full flex flex-col justify-between items-center overflow-hidden bg-[#f6f6f3] text-[#111111] px-4 sm:px-6 pt-[calc(68px+env(safe-area-inset-top))] pb-[calc(14px+env(safe-area-inset-bottom))] sm:pb-6 select-none">
      
      {/* Background Texture & Warm Lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0 mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#d5d5d0 0.75px, transparent 0.75px)`,
          backgroundSize: "24px 24px"
        }}
      />

      {/* Koyeb 3D Wireframe Globe & Floating Nodes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <div className="relative w-[480px] h-[480px] sm:w-[680px] sm:h-[680px] md:w-[780px] md:h-[780px] lg:w-[840px] lg:h-[840px] shrink-0 flex items-center justify-center opacity-45">
          
          <svg
            viewBox="0 0 1000 1000"
            className="w-full h-full"
            fill="none"
          >
            {/* Latitude Arcs (Perspective Globe) */}
            <ellipse cx="500" cy="500" rx="460" ry="460" stroke="#d0d0ca" strokeWidth="1.2" />
            <ellipse cx="500" cy="500" rx="460" ry="160" stroke="#d0d0ca" strokeWidth="1.2" />
            <ellipse cx="500" cy="500" rx="460" ry="300" stroke="#d0d0ca" strokeWidth="1.2" />
            <ellipse cx="500" cy="380" rx="420" ry="120" stroke="#d0d0ca" strokeWidth="1.2" strokeDasharray="4 4" />
            <ellipse cx="500" cy="620" rx="420" ry="120" stroke="#d0d0ca" strokeWidth="1.2" />

            {/* Longitude Ellipses */}
            <ellipse cx="500" cy="500" rx="160" ry="460" stroke="#d0d0ca" strokeWidth="1.2" />
            <ellipse cx="500" cy="500" rx="310" ry="460" stroke="#d0d0ca" strokeWidth="1.2" />
            <line x1="500" y1="40" x2="500" y2="960" stroke="#d0d0ca" strokeWidth="1.2" />
            <line x1="40" y1="500" x2="960" y2="500" stroke="#d0d0ca" strokeWidth="1.2" />

            {/* Subtle Caribbean emerald accent arc */}
            <path
              d="M 500 800 C 650 800, 780 730, 830 630"
              stroke="#059669"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      {/* Main Content (Centered Vertically & Horizontally) */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center my-auto pt-1 sm:pt-2">
        
        {/* Condensed Architectural Master Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="font-black tracking-[-0.035em] leading-[0.96] text-[#111111] uppercase select-none w-full max-w-3xl mx-auto"
        >
          <span className="block text-[29px] xs:text-[33px] sm:text-5xl md:text-6xl lg:text-[74px]">HACEMOS CRECER</span>
          <span className="block text-[29px] xs:text-[33px] sm:text-5xl md:text-6xl lg:text-[74px] mt-0.5 sm:mt-1">MARCAS</span>
          <span className="block text-[21px] xs:text-[25px] sm:text-4xl md:text-5xl lg:text-[58px] mt-1.5 sm:mt-2">
            DESDE EL
          </span>
          <span className="block text-[33px] xs:text-[38px] sm:text-5xl md:text-6xl lg:text-[76px] mt-0.5 sm:mt-1 text-emerald-600">
            CARIBE
          </span>
        </motion.h1>

        {/* Subtext description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="text-[11px] sm:text-sm md:text-base text-[#222222] font-medium max-w-lg mx-auto leading-relaxed mt-2.5 sm:mt-4 mb-3.5 sm:mb-6 px-2"
        >
          Producción audiovisual, social media y soluciones digitales.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center items-center w-full max-w-[280px] sm:max-w-none mx-auto"
        >
          <SlotButton
            href="/contact"
            variant="primary"
            size="md"
            className="w-full sm:w-auto rounded-lg bg-[#141414] hover:bg-black text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-[0_4px_14px_rgba(0,0,0,0.18)] px-6 sm:px-7 py-2.5 text-center flex justify-center items-center active:scale-[0.97] transition-transform"
          >
            ▸ COTIZAR PROYECTO
          </SlotButton>

          <SlotButton
            href="/portfolio"
            variant="ghost"
            size="md"
            className="w-full sm:w-auto text-[11px] sm:text-xs font-bold uppercase tracking-wider text-black/90 hover:text-black transition-colors px-4 py-2 text-center flex justify-center items-center active:scale-[0.97]"
          >
            ▸ VER PORTAFOLIO ◂
          </SlotButton>
        </motion.div>
      </div>

      {/* Free, Unboxed Trust Section with Smooth Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 w-full max-w-5xl mx-auto mt-auto shrink-0 flex flex-col items-center gap-2 sm:gap-3.5 pb-1 sm:pb-0"
      >
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-[#111111]/50 text-center select-none">
          EMPRESAS QUE CONFÍAN EN NOSOTROS
        </p>

        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="animate-marquee-smooth flex items-center gap-10 sm:gap-16 md:gap-20 text-[#141414]">
            {[...BRAND_TEMPLATES, ...BRAND_TEMPLATES].map((brand, i) => (
              <div
                key={i}
                className="opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer flex items-center shrink-0"
                title={brand.name}
              >
                {brand.svg}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
