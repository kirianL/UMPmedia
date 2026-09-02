"use client";

import { useState } from "react";
import { SlotButton } from "@/components/ui/slot-button";
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
    <section className="w-full bg-[#f6f6f3] text-neutral-900 pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-14 md:pb-20 overflow-hidden relative z-50">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Outer Shell with Full-Bezel Traveling Emerald Beam */}
        <div className="relative p-2 sm:p-3 md:p-4 rounded-[2.2rem] sm:rounded-[2.8rem] md:rounded-[3.5rem] overflow-hidden bg-[#eaeae6] border border-neutral-300/80 shadow-[0_10px_35px_rgba(0,0,0,0.03)]">
          
          {/* Subtle green ambient tint */}
          <div className="absolute inset-0 bg-emerald-500/[0.04] pointer-events-none" />

          {/* Diffused Glow Beam (spreads through the entire gray bezel) */}
          <div 
            className="absolute -inset-[180%] pointer-events-none opacity-85 blur-md will-change-transform"
            style={{
              animation: "spin 15s linear infinite",
              background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 230deg, rgba(16, 185, 129, 0.25) 260deg, rgba(16, 185, 129, 0.85) 315deg, #10b981 345deg, #059669 358deg, transparent 360deg)"
            }}
          />

          {/* Sharp Core Light Beam (travels directly through the bezel track) */}
          <div 
            className="absolute -inset-[180%] pointer-events-none opacity-95 will-change-transform"
            style={{
              animation: "spin 15s linear infinite",
              background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 250deg, rgba(16, 185, 129, 0.4) 280deg, #34d399 330deg, #10b981 350deg, #059669 358deg, transparent 360deg)"
            }}
          />

          {/* Inner Container / Focal Card (Solid White Center) */}
          <div className="relative z-10 w-full rounded-[1.8rem] sm:rounded-[2.3rem] md:rounded-[3rem] bg-white border border-neutral-200/90 px-5 py-8 sm:px-10 sm:py-14 md:p-16 lg:p-20 pb-10 sm:pb-16 md:pb-20 text-center flex flex-col items-center shadow-[0_10px_35px_rgba(0,0,0,0.04)] overflow-hidden">
            
            {/* Hero Editorial Typography */}
            <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-[6.2rem] font-black tracking-tighter uppercase leading-[0.92] text-neutral-950 mb-5 sm:mb-8 text-balance">
              Creemos algo <br />
              <span className="font-serif italic font-normal text-neutral-400 lowercase tracking-tight">
                inolvidable.
              </span>
            </h2>

            {/* Sub-headline Kicker */}
            <p className="text-neutral-950 text-base sm:text-xl md:text-2xl font-bold tracking-tight mb-2 sm:mb-3">
              De la idea a la ejecución.
            </p>

            {/* Narrative Description */}
            <p className="text-neutral-600 text-sm sm:text-lg md:text-xl font-normal max-w-xl mx-auto leading-relaxed mb-8 sm:mb-12 text-pretty px-2">
              Producción audiovisual, social media y soluciones digitales diseñadas para hacer crecer tu marca.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto mb-8 sm:mb-12">
              <SlotButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<PiArrowRight size={18} />}
                iconPosition="right"
                className="w-full sm:w-auto rounded-full px-8 py-3.5 sm:py-4 uppercase tracking-wider text-xs sm:text-sm font-bold shadow-sm active:scale-[0.98]"
              >
                Empecemos
              </SlotButton>

              <SlotButton
                href="/portfolio"
                variant="secondary"
                size="lg"
                icon={<PiSparkle size={18} className="text-neutral-400 group-hover:text-neutral-950 transition-colors" />}
                iconPosition="left"
                className="w-full sm:w-auto rounded-full px-8 py-3.5 sm:py-4 uppercase tracking-wider text-xs sm:text-sm font-bold border-neutral-200/80 bg-neutral-50 hover:bg-neutral-100 hover:border-neutral-300 shadow-sm active:scale-[0.98]"
              >
                Ver más trabajos
              </SlotButton>
            </div>

            {/* Clean Direct Email Pill */}
            <div className="flex flex-col items-center w-full max-w-full mt-1">
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2.5 text-center">
                O escríbenos directamente
              </p>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex items-center justify-between gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 hover:bg-white transition-all duration-200 cursor-pointer active:scale-[0.98] w-full max-w-[340px] sm:max-w-md shadow-2xs"
              >
                <span className="text-neutral-900 font-medium text-xs sm:text-sm truncate min-w-0 text-left select-all">
                  {email}
                </span>
                <span className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-neutral-200/60 text-[11px] font-semibold text-neutral-600 group-hover:bg-neutral-100 group-hover:text-neutral-950 transition-colors">
                  {copied ? <PiCheck size={13} className="text-emerald-600 stroke-[3]" /> : <PiCopy size={13} />}
                  <span className="overflow-hidden py-0.5 inline-block">
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
        </div>
      </div>
    </section>
  );
}


