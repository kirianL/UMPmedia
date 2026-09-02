import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f6f6f3] text-neutral-900 border-t border-neutral-200/60 pt-10 sm:pt-14 md:pt-16 overflow-hidden select-none">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Navigation & Copyright Bar matching Reference */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 md:pb-10 text-xs font-mono uppercase tracking-wider">
          {/* Left: Copyright */}
          <div className="flex items-center gap-2.5 text-neutral-500">
            <span>&copy; {currentYear} UMP.</span>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-400">Limón, Costa Rica</span>
          </div>

          {/* Right: Minimal Navigation Links */}
          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap items-center gap-5 sm:gap-8">
            <Link
              href="/portfolio"
              className="text-neutral-500 hover:text-neutral-950 transition-colors duration-150"
            >
              Portafolio
            </Link>
            <Link
              href="/services"
              className="text-neutral-500 hover:text-neutral-950 transition-colors duration-150"
            >
              Servicios
            </Link>
            <Link
              href="/about"
              className="text-neutral-500 hover:text-neutral-950 transition-colors duration-150"
            >
              Nosotros
            </Link>
            <Link
              href="/news"
              className="text-neutral-500 hover:text-neutral-950 transition-colors duration-150"
            >
              Noticias
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-neutral-950 font-bold hover:text-emerald-700 transition-colors duration-150 group"
            >
              <span>Contacto</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </nav>
        </div>
      </div>

      {/* Caribbean Landscape Panorama (Footer.jpeg) */}
      <div
        className="relative w-full h-64 sm:h-80 md:h-[420px] lg:h-[480px] overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 0%, black 14%, black 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 14%, black 100%)",
        }}
      >
        {/* Subtle sky blend at the very top edge */}
        <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#f6f6f3] via-[#f6f6f3]/30 to-transparent z-10 pointer-events-none" />

        {/* Scenic Caribbean Photo - Anchored to bottom to reveal boats and turquoise sea */}
        <Image
          src="/assets/Footer.jpeg"
          alt="Costa caribeña de Limón - Ultimate Media Productions"
          fill
          priority={false}
          quality={95}
          sizes="100vw"
          className="object-cover object-bottom select-none pointer-events-none"
        />
      </div>

      {/* Mobile Overscroll Shelf: matches bottom of Caribbean image so rubber-banding never flashes dark */}
      <div className="w-full h-0 relative">
        <div className="absolute top-0 inset-x-0 h-[100vh] bg-[#47633b] pointer-events-none" />
      </div>
    </footer>
  );
}
