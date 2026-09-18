"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { usePathname } from "next/navigation";
import { AnimatedLogo } from "@/components/ui/animated-logo";
import { SlotButton } from "@/components/ui/slot-button";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/services", label: "Servicios" },
  { href: "/about", label: "Nosotros" },
  { href: "/news", label: "Noticias" },
];

const MOBILE_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/services", label: "Servicios" },
  { href: "/about", label: "Nosotros" },
  { href: "/news", label: "Noticias" },
  { href: "/contact", label: "Contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // Dynamic page theme color for iOS notch / status bar
  const pageThemeColor = useMemo(() => {
    if (pathname.startsWith("/admin") || pathname.startsWith("/login")) {
      return "#18181b";
    }
    return "#f6f6f3"; // All public landing pages (Home, About, Services, Portfolio, News, Contact)
  }, [pathname]);

  const activeThemeColor = isOpen ? "#0c0c0c" : pageThemeColor;

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", activeThemeColor);
  }, [activeThemeColor]);

  const textColor = isOpen ? "#ffffff" : "#0f0f0f";
  const logoColor = isOpen ? "#ffffff" : "#0f0f0f";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{
          y: isOpen || isVisible ? 0 : -120,
          opacity: isOpen || isVisible ? 1 : 0,
          backgroundColor: isOpen
            ? "#0c0c0c"
            : isScrolled
            ? "#f6f6f3"
            : "transparent",
          borderColor: isScrolled && !isOpen
            ? "rgba(0,0,0,0.08)"
            : "rgba(0,0,0,0)",
          backdropFilter: isScrolled && !isOpen
            ? "blur(0px)"
            : "blur(0px)",
        }}
        transition={{
          y: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
          opacity: { duration: 0.2 },
          backgroundColor: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
          borderColor: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
          backdropFilter: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
        }}
        style={{
          borderBottomWidth: "1px",
          borderStyle: "solid",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
        className="fixed top-0 left-0 right-0 z-[99999] flex items-center justify-between px-6 md:px-14 pt-[calc(1.25rem+env(safe-area-inset-top))] pb-4 md:py-4"
      >
        {/* Logo */}
        <Link href="/" className="z-50 relative flex items-center w-[105px] h-[30px] md:w-[120px] md:h-[34px] transition-transform duration-160 ease-out active:scale-[0.97]" suppressHydrationWarning>
          <div className="relative w-full h-full">
            <AnimatedLogo
              color={logoColor}
              className="w-full h-full object-contain"
            />
          </div>
        </Link>

        {/* Desktop centre links (perfectly centered to the viewport) */}
        <nav className="hidden md:flex items-center gap-1 p-1 h-9 rounded-full bg-neutral-100/90 border border-neutral-200/60 backdrop-blur-md md:absolute md:left-1/2 md:-translate-x-1/2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative flex items-center justify-center px-3.5 h-full text-xs font-medium tracking-tight transition-colors duration-150 select-none rounded-full"
                style={{
                  color: isActive ? "#0a0a0a" : "#666666",
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="header-active-pill"
                    layout="position"
                    className="absolute inset-0 rounded-full bg-white shadow-xs border border-neutral-200/50"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                      mass: 0.6,
                    }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right: Contact link + CTA button */}
        <div className="hidden md:flex items-center gap-4 z-50">
          <Link
            href="/contact"
            className="text-xs font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
          >
            Contacto
          </Link>
          <SlotButton
            href="/contact"
            variant="primary"
            size="sm"
            className="rounded-full bg-neutral-950 text-white hover:bg-neutral-800 font-medium text-xs shadow-xs px-4 py-2"
          >
            Cotizar proyecto
          </SlotButton>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[100000] p-2 relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] focus:outline-none cursor-pointer"
          style={{
            color: textColor,
            transition:
              "color 200ms var(--ease-out), transform 160ms var(--ease-out)",
          }}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <motion.span
            animate={{
              transform: isOpen
                ? "translateY(8px) rotate(45deg)"
                : "translateY(0px) rotate(0deg)",
            }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="w-6 h-[2px] bg-current rounded-full origin-center"
          />
          <motion.span
            animate={{
              opacity: isOpen ? 0 : 1,
              transform: isOpen ? "scaleX(0)" : "scaleX(1)",
            }}
            transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
            className="w-6 h-[2px] bg-current rounded-full origin-center"
          />
          <motion.span
            animate={{
              transform: isOpen
                ? "translateY(-8px) rotate(-45deg)"
                : "translateY(0px) rotate(0deg)",
            }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="w-6 h-[2px] bg-current rounded-full origin-center"
          />
        </button>
      </motion.header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <div
      id="mobile-menu"
      data-open={isOpen ? "true" : undefined}
      aria-hidden={!isOpen}
      {...(!isOpen ? { inert: true } : {})}
      className="mobile-nav-overlay fixed inset-0 z-[99998] flex flex-col justify-between bg-[#0c0c0c] h-[100dvh] w-screen md:hidden pt-[calc(70px+env(safe-area-inset-top))] pb-[calc(20px+env(safe-area-inset-bottom))] select-none overflow-hidden"
    >
      <div className="mobile-nav-overlay__content flex flex-1 flex-col justify-between">
        <nav className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
          {MOBILE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              tabIndex={isOpen ? 0 : -1}
              className="block text-center font-bold text-white tracking-tight text-2xl sm:text-3xl transition-colors duration-200 hover:text-emerald-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-3 px-6">
          <SlotButton
            href="/contact"
            onClick={onClose}
            variant="secondary"
            size="md"
            className="w-full max-w-xs justify-center"
          >
            Cotizar proyecto
          </SlotButton>
        </div>
      </div>
    </div>
  );
}

