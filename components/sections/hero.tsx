"use client";

import { motion } from "framer-motion";
import { SlotButton } from "@/components/ui/slot-button";

export function Hero() {
  return (
    <section className="relative min-h-[92dvh] sm:min-h-[100dvh] md:h-[100dvh] md:max-h-[100dvh] w-full flex flex-col justify-between items-center overflow-hidden bg-[#f6f6f3] text-[#111111] px-4 sm:px-6 pt-[calc(70px+env(safe-area-inset-top))] sm:pt-[calc(80px+env(safe-area-inset-top))] pb-0 select-none">
      
      {/* Background Texture & Warm Lighting */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0 mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(#d5d5d0 0.75px, transparent 0.75px)`,
          backgroundSize: "24px 24px"
        }}
      />

      {/* Koyeb 3D Wireframe Globe & Floating Nodes */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-[340px] sm:w-[620px] md:w-[860px] lg:w-[960px] h-[340px] sm:h-[620px] md:h-[860px] lg:h-[960px] flex items-center justify-center">
          
          <svg
            viewBox="0 0 1000 1000"
            className="w-full h-full"
            fill="none"
          >
            {/* Latitude Arcs (Perspective Globe) */}
            <ellipse cx="500" cy="500" rx="460" ry="460" stroke="#d8d8d3" strokeWidth="1.2" />
            <ellipse cx="500" cy="500" rx="460" ry="160" stroke="#d8d8d3" strokeWidth="1.2" />
            <ellipse cx="500" cy="500" rx="460" ry="300" stroke="#d8d8d3" strokeWidth="1.2" />
            <ellipse cx="500" cy="380" rx="420" ry="120" stroke="#d8d8d3" strokeWidth="1" strokeDasharray="4 4" />
            <ellipse cx="500" cy="620" rx="420" ry="120" stroke="#d8d8d3" strokeWidth="1" />

            {/* Longitude Ellipses */}
            <ellipse cx="500" cy="500" rx="160" ry="460" stroke="#d8d8d3" strokeWidth="1.2" />
            <ellipse cx="500" cy="500" rx="310" ry="460" stroke="#d8d8d3" strokeWidth="1.2" />
            <line x1="500" y1="40" x2="500" y2="960" stroke="#d8d8d3" strokeWidth="1.2" />
            <line x1="40" y1="500" x2="960" y2="500" stroke="#d8d8d3" strokeWidth="1.2" />

            {/* Subtle Caribbean emerald accent arc */}
            <path
              d="M 500 800 C 650 800, 780 730, 830 630"
              stroke="#059669"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.45"
            />
          </svg>
        </div>
      </div>

      {/* Main Content (Koyeb Condensed Typography) */}
      <div className="relative z-10 container mx-auto max-w-4xl flex flex-col items-center text-center my-auto pt-2 sm:pt-4">
        
        {/* Condensed Architectural Master Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-[-0.04em] leading-[0.96] text-[#111111] uppercase select-none max-w-3xl mx-auto"
        >
          PRODUCCIÓN AUDIOVISUAL
          <span className="block mt-1">
            CON ALMA DEL <span className="text-emerald-600">CARIBE</span>
          </span>
        </motion.h1>

        {/* Subtext description with enhanced contrast */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="text-xs sm:text-sm md:text-base text-[#222222] font-semibold max-w-xl mx-auto leading-relaxed mt-3 sm:mt-5 mb-6 sm:mb-8 px-4"
        >
          Producción comercial, cinematográfica y narrativa estratégica en 4K/6K RAW con estándares de nivel global.
        </motion.p>

        {/* Koyeb Action Buttons with Mobile-optimized Vertical Stack */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center w-full max-w-[280px] sm:max-w-none mx-auto"
        >
          <SlotButton
            href="/contact"
            variant="primary"
            size="md"
            className="w-full sm:w-auto rounded-lg bg-[#141414] hover:bg-black text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_14px_rgba(0,0,0,0.18)] px-7 py-3 sm:py-2.5 text-center flex justify-center items-center"
          >
            ▸ COTIZAR PROYECTO
          </SlotButton>

          <SlotButton
            href="/portfolio"
            variant="ghost"
            size="md"
            className="w-full sm:w-auto text-xs font-bold uppercase tracking-wider text-black/90 hover:text-black transition-colors px-4 py-2.5 sm:py-2 text-center flex justify-center items-center"
          >
            ▸ VER PORTAFOLIO ◂
          </SlotButton>
        </motion.div>
      </div>

      {/* Koyeb Bottom Terminal Console Peek */}
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="w-full h-8 sm:h-9 bg-[#111111] rounded-t-xl sm:rounded-t-2xl border-t border-x border-black/15 shadow-2xl flex items-center px-4 gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#059669]" />
          <span className="ml-3 text-[10px] font-mono text-white/40 uppercase tracking-widest hidden sm:inline">
            UMP MEDIA • 6K CINEMA ENGINE
          </span>
        </div>
      </div>

    </section>
  );
}

