"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { AnimatedLogo } from "@/components/ui/animated-logo";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/services", label: "Servicios" },
  { href: "/about", label: "Nosotros" },
  { href: "/news", label: "Noticias" },
];

const MOBILE_LINKS = [
  { href: "/", label: "INICIO" },
  { href: "/about", label: "NOSOTROS" },
  { href: "/services", label: "SERVICIOS" },
  { href: "/portfolio", label: "PORTAFOLIO" },
  { href: "/news", label: "NOTICIAS" },
  { href: "/team", label: "EQUIPO" },
  { href: "/contact", label: "CONTACTO" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const themeColor = "#0a0a0a";

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  // Automatically close mobile menu if screen resizes to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically update theme-color meta tag to control iPhone status bar color
  useEffect(() => {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", themeColor);
  }, [themeColor]);

  const textColor = "#ffffff";
  const borderColor = "rgba(255,255,255,0.08)";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          backgroundColor: isOpen
            ? "transparent"
            : "rgba(10,10,10,0.75)",
          borderColor: isScrolled && !isOpen
            ? borderColor
            : "rgba(0,0,0,0)",
          backdropFilter: isOpen
            ? "blur(0px)"
            : "blur(12px)",
        }}
        transition={{
          y: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
          opacity: { duration: 0.4 },
          backgroundColor: { duration: 0.3, ease: "easeInOut" },
          borderColor: { duration: 0.3, ease: "easeInOut" },
          backdropFilter: { duration: 0.3, ease: "easeInOut" },
        }}
        style={{
          borderBottomWidth: isScrolled && !isOpen ? "1px" : "0px",
          borderStyle: "solid",
        }}
        className="fixed top-0 left-0 right-0 z-[99999] flex items-center justify-between px-6 md:px-14 pt-[calc(1.25rem+env(safe-area-inset-top))] pb-5 md:py-5"
      >
        {/* Logo — Animated drawing outline effect */}
        <Link href="/" className="z-50 relative flex items-center w-[105px] h-[30px] md:w-[120px] md:h-[34px]" suppressHydrationWarning>
          <div className="relative w-full h-full">
            <AnimatedLogo
              color="#ffffff"
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Desktop centre links */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                fontSize: "0.875rem",
                color: textColor,
                textDecoration: "none",
                opacity: pathname === link.href ? 1 : 0.75,
                transition: "opacity 0.2s, color 0.45s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.opacity =
                  pathname === link.href ? "1" : "0.75")
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Contact link + CTA bordered button (desktop) */}
        <div className="hidden md:flex items-center gap-5 z-50">
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              fontSize: "0.875rem",
              color: textColor,
              textDecoration: "none",
              opacity: 0.8,
              transition: "color 0.45s ease-in-out, opacity 0.2s",
            }}
          >
            Contacto
          </Link>
          <Link
            href="/portfolio"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: "0.02em",
              color: textColor,
              border: `2px solid rgba(255,255,255,0.25)`,
              borderRadius: "4px",
              padding: "7px 16px",
              textDecoration: "none",
              transition: "all 0.35s ease-in-out",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#ffffff";
              el.style.color = "#0a0a0a";
              el.style.borderColor = "#ffffff";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = textColor;
              el.style.borderColor = "rgba(255,255,255,0.25)";
            }}
          >
            Ver Portafolio
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[100000] p-2 relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] focus:outline-none"
          style={{ color: textColor, transition: "color 0.4s ease-in-out" }}
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-6 h-[2px] bg-current rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-[2px] bg-current rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-6 h-[2px] bg-current rounded-full"
          />
        </button>
      </motion.header>

      {/* Mobile Menu Overlay — Estudio Shout style */}
      <AnimatePresence>
        {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Estudio Shout–style mobile menu: dark bg, centred bold accent links,
   logo top-left, CTA pill at the bottom.
   ═══════════════════════════════════════════════════════════════════════════ */
function MobileMenu({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.35,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const navVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 15 },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.28, ease: "easeOut" as const },
    },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 z-[99998] flex flex-col bg-[#0c0c0c] h-[100dvh] w-screen md:hidden"
    >
      {/* Spacer to push content below the fixed header */}
      <div className="h-16 flex-shrink-0" />

      {/* Centred nav links */}
      <motion.nav
        variants={navVariants}
        className="flex-1 flex flex-col items-center justify-center gap-4 px-6"
      >
        {MOBILE_LINKS.map((link) => (
          <motion.div key={link.href} variants={linkVariants}>
            <Link
              href={link.href}
              onClick={onClose}
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 6.2vw, 2.3rem)",
                letterSpacing: "-0.01em",
                color: "#ffffff",
                textDecoration: "none",
                display: "block",
                textAlign: "center",
                transition: "color 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#32fb00";
                el.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#ffffff";
                el.style.transform = "scale(1)";
              }}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      {/* Bottom CTA pill */}
      <motion.div
        variants={linkVariants}
        className="flex flex-col items-center gap-3 pb-8 px-6"
      >
        <Link
          href="/contact"
          onClick={onClose}
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 700,
            fontSize: "0.95rem",
            color: "#0a0a0a",
            background: "#ffffff",
            borderRadius: "999px",
            padding: "14px 44px",
            textDecoration: "none",
            display: "inline-block",
            textAlign: "center",
            boxShadow: "0 8px 24px rgba(255,255,255,0.05)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "scale(1.04)";
            el.style.boxShadow = "0 12px 28px rgba(255,255,255,0.15)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "scale(1)";
            el.style.boxShadow = "0 8px 24px rgba(255,255,255,0.05)";
          }}
        >
          Cotizar proyecto
        </Link>
      </motion.div>
    </motion.div>
  );
}
