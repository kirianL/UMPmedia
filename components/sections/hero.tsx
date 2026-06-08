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
            UMP Media te da la libertad y las herramientas para contar tu
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

        {/* RIGHT — Portrait: smaller, crops at bottom edge of section */}
        <div className="relative flex-shrink-0 mt-8 lg:mt-0 flex items-end justify-center lg:justify-end self-center lg:self-end">
          {/* Decorative burst — top-right of portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute"
            style={{ top: "-2%", right: "-3%", zIndex: 20 }}
          >
            <BurstLines />
          </motion.div>

          {/* Polygon-framed grayscale portrait — bottom-aligned, overflow crops it */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
            style={{
              position: "relative",
              zIndex: 10,
              /* Push the bottom ~60px below the section edge so it gets clipped on desktop */
              marginBottom: "-20px",
            }}
          >
            {/* Outer white irregular polygon border */}
            <div
              style={{
                width: "clamp(220px, 28vw, 360px)",
                aspectRatio: "0.78 / 1",
                clipPath:
                  "polygon(16% 0%, 84% 3%, 100% 20%, 97% 79%, 80% 100%, 14% 96%, 0% 68%, 3% 16%)",
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                padding: "9px",
              }}
            >
              {/* Inner image, same clip */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  clipPath:
                    "polygon(16% 0%, 84% 3%, 100% 20%, 97% 79%, 80% 100%, 14% 96%, 0% 68%, 3% 16%)",
                  overflow: "hidden",
                  position: "relative",
                  background: "#1a1a1a",
                }}
              >
                <Image
                  src="/assets/images/hero-portrait.png"
                  alt="Realizador audiovisual de UMP Media"
                  fill
                  className="object-cover object-top"
                  style={{ filter: "grayscale(100%) contrast(1.12)" }}
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Small burst — lower-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="absolute"
            style={{ bottom: "20%", right: "-6%", zIndex: 20 }}
          >
            <SmallBurst />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Decorative SVG elements ────────────────────────────────────────────── */

function BurstLines() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="30"
        y="0"
        width="13"
        height="50"
        rx="6.5"
        fill="white"
        transform="rotate(20 41 41)"
      />
      <rect
        x="48"
        y="5"
        width="10"
        height="38"
        rx="5"
        fill="white"
        transform="rotate(44 41 41)"
      />
      <rect
        x="12"
        y="7"
        width="9"
        height="32"
        rx="4.5"
        fill="white"
        transform="rotate(-4 41 41)"
      />
    </svg>
  );
}

function SmallBurst() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="19"
        y="0"
        width="9"
        height="32"
        rx="4.5"
        fill="white"
        transform="rotate(25 24 24)"
      />
      <rect
        x="28"
        y="3"
        width="7"
        height="24"
        rx="3.5"
        fill="white"
        transform="rotate(52 24 24)"
      />
    </svg>
  );
}
