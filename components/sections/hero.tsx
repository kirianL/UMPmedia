"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#32fb00] flex items-center min-h-[100vh] lg:min-h-[560px] lg:h-[92vh] lg:max-h-[820px]"
    >
      {/* ─── Hero Body ───────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-end justify-between px-6 md:px-14 pt-[calc(110px+env(safe-area-inset-top))] pb-12 lg:pt-[120px] lg:pb-16 w-full h-full max-w-7xl mx-auto gap-8">
        {/* LEFT — Copy */}
        <div className="flex flex-col justify-center flex-1 w-full max-w-[590px] lg:pb-6">
          {/* Oversized Bold Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.0rem, 7.5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#0a0a0a",
              margin: 0,
              marginBottom: "1.25rem",
            }}
          >
            Producción audiovisual para{" "}
            <span
              style={{
                display: "inline",
                background: "#ffffff",
                color: "#0a0a0a",
                borderRadius: "6px",
                padding: "0 10px 3px 10px",
                fontWeight: 800,
                fontStyle: "italic",
                whiteSpace: "nowrap",
              }}
            >
              conectar
            </span>{" "}
            e impactar
          </motion.h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 600,
              fontSize: "1.05rem",
              lineHeight: 1.6,
              color: "#0a0a0a",
              opacity: 0.85,
              maxWidth: "460px",
              marginBottom: "2.2rem",
            }}
          >
            Ultimate Media Productions te da la libertad y las herramientas para contar tu
            historia. Grabamos, editamos y distribuimos contenido audiovisual
            de calidad, desde el Caribe costarricense para el mundo.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/contact"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "#32fb00",
                background: "#0a0a0a",
                borderRadius: "4px",
                padding: "13px 26px",
                textDecoration: "none",
                transition: "transform 0.2s, box-shadow 0.2s",
                display: "inline-block",
                boxShadow: "0 4px 14px rgba(0,0,0,0.18)",
              }}
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
                transition: "background 0.2s, color 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "#0a0a0a";
                (e.currentTarget as HTMLAnchorElement).style.color = "#32fb00";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a";
              }}
            >
              Ver portafolio
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — Hero.svg sticker */}
        <div className="relative flex-shrink-0 mt-8 lg:mt-0 flex items-center justify-center lg:justify-end self-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            className="w-[320px] sm:w-[380px] md:w-[480px] lg:w-[540px] aspect-[114/106] relative"
          >
            <Image
              src="/assets/images/Hero.svg"
              alt="Hero Illustration"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}


