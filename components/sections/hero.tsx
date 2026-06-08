"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroGradient } from "@/components/ui/hero-gradient";

export function Hero() {
  const title = "Producción audiovisual para conectar e impactar";
  const words = title.split(" ");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      setIsMenuOpen(document.body.style.overflow === "hidden");
    };

    const observer = new MutationObserver(checkOverflow);
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    // Initial check
    checkOverflow();

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-[#32fb00] pt-[calc(88px+env(safe-area-inset-top))] pb-12 md:pt-[calc(120px+env(safe-area-inset-top))] md:pb-24">
      {/* Dynamic 3D Shader Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ display: isMenuOpen ? "none" : "block" }}
      >
        <HeroGradient />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto flex flex-col items-center w-full"
        >
          {/* Main Title with Spring Letter Reveal */}
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-extrabold mb-4 tracking-tighter leading-[1.1] md:leading-none text-black select-none">
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="inline-block mr-2 md:mr-3 last:mr-0"
              >
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.08 + letterIndex * 0.02,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-black"
                  >
                    {letter}
                  </motion.span>
                ))}
                {wordIndex < words.length - 1 && <span className="inline-block w-2 md:w-3">&nbsp;</span>}
              </span>
            ))}
          </h1>

          {/* Subtext description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-black/85 font-semibold text-sm sm:text-base md:text-lg max-w-2xl mb-6 sm:mb-10 leading-relaxed px-2"
          >
            Ultimate Media Productions te da la libertad y las herramientas para contar tu historia. Grabamos, editamos y distribuimos contenido audiovisual de calidad, desde el Caribe costarricense para el mundo.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto max-w-[280px] sm:max-w-none justify-center"
          >
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#ffffff",
                background: "#0a0a0a",
                borderRadius: "4px",
                padding: "13px 26px",
                textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
              }}
              className="w-full sm:w-auto text-center inline-block"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 8px 20px rgba(0,0,0,0.28)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 4px 14px rgba(0,0,0,0.18)";
              }}
            >
              Cotizar Proyecto
            </Link>
            <Link
              href="/portfolio"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#0a0a0a",
                background: "transparent",
                border: "2px solid #0a0a0a",
                borderRadius: "4px",
                padding: "11px 26px",
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s, transform 0.2s",
              }}
              className="w-full sm:w-auto text-center inline-block"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#0a0a0a";
                (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              Ver portafolio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
