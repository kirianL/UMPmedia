"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[99999] flex items-center justify-between px-6 py-4 bg-black/90 backdrop-blur-md border-b border-white/10 text-white"
      >
        {/* Logo */}
        <Link href="/" className="z-50 relative w-20 h-9">
          <Image
            src="/LogoUMP-Transparente.webp"
            alt="UMP Media"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>
        <div className="flex items-center gap-4 z-50">
          {/* Lang Switch (Static for now) */}
          <button className="text-sm font-medium hover:text-ump-accent transition-colors uppercase tracking-wider">
            ES
          </button>

          {/* Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:text-ump-accent transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const links = [
    { href: "/", label: "Home", number: "01" },
    { href: "/about", label: "Nosotros", number: "02" },
    { href: "/services", label: "Servicios", number: "03" },
    { href: "/portfolio", label: "Portafolio", number: "04" },
    { href: "/news", label: "Noticias", number: "05" },
    { href: "/team", label: "Equipo", number: "06" },
    { href: "/contact", label: "Contacto", number: "07" },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[99998] bg-ump-background flex flex-col px-6 overflow-y-auto"
    >
      <nav className="flex-1 flex flex-col justify-center gap-6 py-24 min-h-min">
        {links.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.05 }}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="group flex items-baseline gap-4 text-4xl md:text-6xl font-bold text-ump-primary hover:text-ump-accent transition-colors tracking-tight"
            >
              <span className="text-xs md:text-sm font-normal text-ump-accent font-mono">
                {link.number}
              </span>
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="pb-10 text-ump-secondary text-sm"
      >
        <p>Limón, Costa Rica</p>
        <a
          href="mailto:hello@umpmedia.com"
          className="hover:text-white transition-colors"
        >
          hello@umpmedia.com
        </a>
      </motion.div>
    </motion.div>
  );
}
