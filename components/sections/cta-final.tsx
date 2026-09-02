"use client";

import { useState } from "react";
import Link from "next/link";
import { SlotText } from "slot-text/react";
import { PiArrowRight, PiCopy, PiCheck, PiSparkle } from "react-icons/pi";

export function CTAFinal() {
  const [copied, setCopied] = useState(false);
  const email = "fabian@ultimatemediaproductions.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="w-full bg-[#f6f6f3] text-neutral-900 py-20 md:py-32 lg:py-48 overflow-hidden relative z-50 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        <p className="text-neutral-500 font-mono text-xs sm:text-sm uppercase tracking-widest mb-6 md:mb-8">
          Inicia tu Proyecto
        </p>
        
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.85] tracking-tighter uppercase text-balance text-neutral-950 mb-6 md:mb-8">
          ¿Tienes un proyecto <br className="hidden md:block" />
          <span className="text-neutral-300">en mente?</span>
        </h2>
        
        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
          Llevémoslo al siguiente nivel. Agendemos una llamada para entender tu visión.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <SlotButton
            href="/contact"
            variant="primary"
            size="lg"
            icon={<PiArrowRight size={18} />}
            iconPosition="right"
            className="w-full sm:w-auto rounded-full px-8 py-4 uppercase tracking-wider text-sm"
          >
            Hablemos
          </SlotButton>

          <SlotButton
            href="/portfolio"
            variant="secondary"
            size="lg"
            icon={<PiSparkle size={18} className="text-neutral-400 group-hover:text-neutral-950 transition-colors" />}
            iconPosition="left"
            className="w-full sm:w-auto rounded-full px-8 py-4 uppercase tracking-wider text-sm"
          >
            Ver más trabajos
          </SlotButton>
        </div>

        {/* Interactive Copy Email Section with tactile SlotText */}
        <div className="mt-20 flex flex-col items-center">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
            O escríbenos directamente
          </p>

          <button
            onClick={handleCopyEmail}
            className="group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border border-neutral-200/60 hover:border-neutral-300 hover:shadow-sm transition-all duration-300 cursor-pointer active:scale-[0.98]"
          >
            <span className="text-neutral-950 text-base md:text-lg font-medium select-all">
              {email}
            </span>
            
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-100 text-xs font-bold text-neutral-500 group-hover:text-neutral-950 group-hover:bg-neutral-200 transition-colors">
              {copied ? <PiCheck size={16} className="text-emerald-600" /> : <PiCopy size={16} />}
              <span className="inline-block overflow-hidden py-0.5">
                <SlotText
                  text={copied ? "¡Copiado!" : "Copiar"}
                  options={{
                    direction: copied ? "up" : "down",
                    rollBy: "character",
                    duration: 250,
                  }}
                />
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

