"use client";

import { motion } from "framer-motion";
import { SlotButton } from "@/components/ui/slot-button";

const CLIENT_LOGOS = [
  { name: "Caribeños", src: "/assets/LogosHero/Caribenos.png", invert: true },
  { name: "DN Express", src: "/assets/LogosHero/DnExpress.png" },
  { name: "Bufete Morgan JM", src: "/assets/LogosHero/JM.png" },
  { name: "Neon Party", src: "/assets/LogosHero/NeonParty.png" },
  { name: "Dra. Jeinnel Newball", src: "/assets/LogosHero/Newball.png" },
  { name: "Pollo Kerrico", src: "/assets/LogosHero/PolloKerrico.png" },
  { name: "Sazón Colombiano", src: "/assets/LogosHero/SazonColombiano.png" },
  { name: "Soda El Patty", src: "/assets/LogosHero/SodaElpatty.png" },
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

        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee-smooth flex items-center gap-12 sm:gap-16 md:gap-20 text-[#141414]">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((brand, i) => (
              <div
                key={i}
                className="group cursor-pointer flex items-center justify-center shrink-0 px-2 sm:px-4"
                title={brand.name}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className={`h-9 sm:h-11 md:h-12 lg:h-13 w-auto max-w-[130px] sm:max-w-[160px] md:max-w-[190px] object-contain select-none pointer-events-none grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 ${
                    brand.invert ? "invert" : ""
                  }`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
