"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTAFinal() {
  return (
    <section className="py-16 md:py-32 lg:py-56 bg-ump-alt relative overflow-hidden z-80 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ump-background to-ump-card/20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
          ¿Tienes un proyecto en mente?
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-ump-secondary mb-10 md:mb-12 max-w-2xl mx-auto">
          Llevémoslo al siguiente nivel. Agendemos una llamada para entender tu
          visión.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              color: "#0a0a0a",
              background: "#ffffff",
              borderRadius: "4px",
              padding: "13px 26px",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: "0 4px 14px rgba(255,255,255,0.12)",
            }}
            className="w-full sm:w-auto text-center inline-block"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 8px 20px rgba(255,255,255,0.22)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 4px 14px rgba(255,255,255,0.12)";
            }}
          >
            Hablemos
          </Link>
          <Link
            href="/portfolio"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 700,
              fontSize: "0.9rem",
              color: "#ffffff",
              background: "transparent",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "4px",
              padding: "11px 26px",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s",
            }}
            className="w-full sm:w-auto text-center inline-block"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "#ffffff";
              (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#ffffff";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255, 255, 255, 0.2)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            Ver más trabajos
          </Link>
        </div>

        <div className="mt-16 text-ump-secondary text-sm">
          <p>O escríbenos directamente a:</p>
          <a
            href="mailto:fabian@ultimatemediaproductions.com"
            className="text-white hover:underline transition-colors text-lg font-medium mt-2 block"
          >
            fabian@ultimatemediaproductions.com
          </a>
        </div>
      </div>
    </section>
  );
}
