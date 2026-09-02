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
        
        {/* Outer Container / Bezel Frame */}
        <div className="p-2 sm:p-3.5 md:p-4 rounded-[2.2rem] sm:rounded-[2.8rem] md:rounded-[3.5rem] bg-neutral-200/60 border border-neutral-300/70 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
          
          {/* Inner Container / Focal Card */}
          <div className="w-full rounded-[1.8rem] sm:rounded-[2.3rem] md:rounded-[3rem] bg-white border border-neutral-200/80 p-8 sm:p-12 md:p-16 lg:p-20 text-center flex flex-col items-center shadow-[0_10px_35px_rgba(0,0,0,0.03)] relative overflow-hidden">
            
            {/* Hero Editorial Typography */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.2rem] font-black tracking-tighter uppercase leading-[0.92] text-neutral-950 mb-6 sm:mb-8 text-balance">
              Hagamos algo <br />
              <span className="font-serif italic font-normal text-neutral-400 lowercase tracking-tight">
                que importe.
              </span>
            </h2>

            {/* Sub-headline Kicker */}
            <p className="text-neutral-950 text-lg sm:text-xl md:text-2xl font-bold tracking-tight mb-3">
              De la idea a la ejecución.
            </p>

            {/* Narrative Description */}
            <p className="text-neutral-600 text-base sm:text-lg md:text-xl font-normal max-w-xl mx-auto leading-relaxed mb-10 sm:mb-12 text-pretty">
              Producción audiovisual, social media y soluciones digitales diseñadas para hacer crecer tu marca.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto mb-12 sm:mb-16">
              <SlotButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<PiArrowRight size={18} />}
                iconPosition="right"
                className="w-full sm:w-auto rounded-full px-8 py-4 uppercase tracking-wider text-xs sm:text-sm font-bold shadow-sm active:scale-[0.98]"
              >
                Empecemos
              </SlotButton>

              <SlotButton
                href="/portfolio"
                variant="secondary"
                size="lg"
                icon={<PiSparkle size={18} className="text-neutral-400 group-hover:text-neutral-950 transition-colors" />}
                iconPosition="left"
                className="w-full sm:w-auto rounded-full px-8 py-4 uppercase tracking-wider text-xs sm:text-sm font-bold border-neutral-200/80 bg-neutral-50 hover:bg-neutral-100 hover:border-neutral-300 shadow-sm active:scale-[0.98]"
              >
                Ver más trabajos
              </SlotButton>
            </div>

            {/* Clean Direct Email Pill */}
            <div className="flex flex-col items-center w-full max-w-full">
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3 text-center">
                O escríbenos directamente
              </p>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex items-center justify-between gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-neutral-50 border border-neutral-200/80 hover:border-neutral-300 hover:bg-white transition-all duration-200 cursor-pointer active:scale-[0.98] max-w-[90vw] sm:max-w-md shadow-2xs"
              >
                <span className="text-neutral-900 font-medium text-xs sm:text-sm truncate select-all">
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


