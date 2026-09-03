"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
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
  { href: "/team", label: "Equipo" },
  { href: "/contact", label: "Contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  const themeColor = "#0a0a0a";

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
    meta.setAttribute("content", themeColor);
  }, [themeColor]);

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
            ? "transparent"
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
          backgroundColor: { duration: 0.3, ease: [0.23, 1, 0.32, 1] },
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
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[100000] p-2 relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] focus:outline-none cursor-pointer"
          style={{ color: textColor, transition: "color 0.3s ease-out" }}
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
            className="w-6 h-[2px] bg-current rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.15 }}
            className="w-6 h-[2px] bg-current rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
            className="w-6 h-[2px] bg-current rounded-full"
          />
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleLinkClick = () => {
    document.body.style.overflow = "unset";
    onClose();
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.22,
        ease: [0.32, 0.72, 0, 1] as const,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1] as const,
      },
    },
  };

  const navVariants = {
    closed: {},
    open: {
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.06,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, transform: "translateY(12px) scale(0.96)" },
    open: {
      opacity: 1,
      transform: "translateY(0px) scale(1)",
      transition: { duration: 0.22, ease: [0.23, 1, 0.32, 1] as const },
    },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="closed"
      className="fixed inset-0 z-[99998] flex flex-col justify-between bg-[#0c0c0c] h-[100dvh] w-screen md:hidden pt-[calc(70px+env(safe-area-inset-top))] pb-8"
    >
      <motion.nav
        variants={navVariants}
        className="flex-1 flex flex-col items-center justify-center gap-4 px-6"
      >
        {MOBILE_LINKS.map((link) => (
          <motion.div key={link.href} variants={linkVariants}>
            <Link
              href={link.href}
              onClick={handleLinkClick}
              className="block text-center font-bold text-white tracking-tight text-2xl sm:text-3xl transition-colors duration-200 active:scale-[0.97] hover:text-emerald-400"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      <motion.div
        variants={linkVariants}
        className="flex flex-col items-center gap-3 px-6"
      >
        <SlotButton
          href="/contact"
          onClick={handleLinkClick}
          variant="secondary"
          size="md"
          className="w-full max-w-xs justify-center"
        >
          Cotizar proyecto
        </SlotButton>
      </motion.div>
    </motion.div>
  );
}

