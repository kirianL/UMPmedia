"use client";

import { useState } from "react";
import { SlotButton } from "@/components/ui/slot-button";
import { SlotBadge } from "@/components/ui/slot-badge";
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
    <section className="py-16 md:py-32 lg:py-52 bg-ump-alt relative overflow-hidden z-80 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ump-background to-ump-card/20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-4 flex justify-center">
          <SlotBadge text="Inicia tu Proyecto" variant="accent" />
        </div>

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-ump-secondary mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Llevémoslo al siguiente nivel. Agendemos una llamada para entender tu visión.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <SlotButton
            href="/contact"
            variant="secondary"
            size="lg"
            icon={<PiArrowRight size={18} />}
            iconPosition="right"
            className="w-full sm:w-auto"
          >
            Hablemos
          </SlotButton>

          <SlotButton
            href="/portfolio"
            variant="outline"
            size="lg"
            icon={<PiSparkle size={18} className="text-ump-accent" />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Ver más trabajos
          </SlotButton>
        </div>

        {/* Interactive Copy Email Section with tactile SlotText */}
        <div className="mt-16 text-ump-secondary text-sm flex flex-col items-center">
          <p className="text-xs uppercase tracking-widest text-white/50 mb-3">
            O escríbenos directamente
          </p>

          <button
            onClick={handleCopyEmail}
            className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-ump-accent/40 transition-[background-color,border-color,transform] duration-200 cursor-pointer active:scale-[0.97]"
          >
            <span className="text-white text-base md:text-lg font-medium select-all">
              {email}
            </span>

            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-xs font-semibold text-white/80 group-hover:text-ump-accent transition-colors">
              {copied ? <PiCheck size={14} className="text-ump-accent font-bold" /> : <PiCopy size={14} />}
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

