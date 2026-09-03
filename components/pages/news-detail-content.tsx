"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ChevronDown,
  Bookmark,
} from "lucide-react";
import {
  PiXLogoBold,
  PiWhatsappLogoBold,
  PiFacebookLogoBold,
  PiInstagramLogoBold,
  PiLinkedinLogoBold,
  PiLinkSimpleBold,
  PiCheckBold,
  PiInfo,
  PiCaretDown,
} from "react-icons/pi";
import { CTAFinal } from "@/components/sections/cta-final";
import { NewsItem } from "@/lib/news-data";
import { Tooltip } from "@/components/motion/tooltip";

interface NewsDetailContentProps {
  article: NewsItem;
}

interface TocItem {
  id: string;
  title: string;
}

export function NewsDetailContent({ article }: NewsDetailContentProps) {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // Calculate standardized dynamic reading time based on word count
  const readingTime = useMemo(() => {
    const text = (article.content + " " + (article.excerpt || ""))
      .replace(/<[^>]*>/g, " ")
      .trim();
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(wordCount / 180));
  }, [article.content, article.excerpt]);

  // Standardized TOC extraction from real article content headings
  const { processedHtml, tocItems } = useMemo(() => {
    // Clean up content styling for standardized light editorial presentation
    let rawContent = article.content
      .replace(/text-white/g, "text-neutral-950 font-bold")
      .replace(/text-ump-secondary/g, "text-neutral-700");

    const items: TocItem[] = [];
    let headingIndex = 0;

    // Inject anchor IDs strictly into genuine headings (h2, h3)
    const enriched = rawContent.replace(
      /<(h[23])([^>]*)>(.*?)<\/\1>/gi,
      (_, tag, attrs, text) => {
        const cleanText = text.replace(/<[^>]*>/g, "").trim();
        const id = `seccion-${headingIndex++}`;
        items.push({ id, title: cleanText });
        return `<${tag} id="${id}" class="scroll-mt-28 font-black uppercase text-xl sm:text-2xl text-neutral-950 mt-10 mb-4 tracking-tight" ${attrs}>${text}</${tag}>`;
      }
    );

    return { processedHtml: enriched, tocItems: items };
  }, [article.content]);

  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());

  // Track active and completed sections dynamically on scroll
  useEffect(() => {
    if (tocItems.length === 0) return;

    const handleScroll = () => {
      const triggerY = window.scrollY + 220;
      let currentActive = "";
      const completed = new Set<string>();

      for (let i = 0; i < tocItems.length; i++) {
        const item = tocItems[i];
        const el = document.getElementById(item.id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top + window.scrollY;

        if (triggerY >= top) {
          currentActive = item.id;
          for (let j = 0; j < i; j++) {
            completed.add(tocItems[j].id);
          }
        }
      }

      // If at bottom of page, mark all completed
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 250
      ) {
        tocItems.forEach((it) => completed.add(it.id));
        if (tocItems.length > 0) {
          currentActive = tocItems[tocItems.length - 1].id;
        }
      }

      if (currentActive) {
        setActiveSection(currentActive);
      } else if (tocItems.length > 0) {
        setActiveSection(tocItems[0].id);
      }
      setCompletedSections(completed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tocItems]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMobileTocOpen(false);
    }
  };

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleShare = (platform: "x" | "whatsapp" | "facebook" | "linkedin" | "instagram") => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = article.title;
    let shareUrl = "";

    if (platform === "x") {
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`;
    } else if (platform === "whatsapp") {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
        `${title} - ${url}`
      )}`;
    } else if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}`;
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`;
    } else if (platform === "instagram") {
      // Copy article link to clipboard and open Instagram
      handleCopyLink();
      shareUrl = "https://www.instagram.com/";
    }

    if (shareUrl && typeof window !== "undefined") {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f6f6f3] text-[#111111] selection:bg-emerald-600 selection:text-white overflow-x-clip">
      {/* SVG filter */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="scroll-motion-blur" x="0%" y="-10%" width="100%" height="120%">
            <feGaussianBlur stdDeviation="0 0" />
          </filter>
        </defs>
      </svg>

      {/* Main Container with Smooth Optical Reveal */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.45,
          ease: [0.23, 1, 0.32, 1] as const,
        }}
        className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20 will-change-[transform,opacity]"
      >
        
        {/* Mobile Header Bar (Navigation) */}
        <div className="lg:hidden mb-6">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors py-1 mb-3"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300 ease-out" /> TODAS LAS NOTICIAS
          </Link>
        </div>

        {/* 3-Column Architectural Layout (Full height columns for sticky sidebars) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* ═════════════════════════════════════════════════════════
              LEFT COLUMN (Table of Contents & About Card)
              ═════════════════════════════════════════════════════════ */}
          <motion.aside
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block lg:col-span-3"
          >
            <div className="sticky top-28 space-y-6">
              
              {/* Standard Brand Info Card */}
              <div className="bg-white border border-neutral-200/80 rounded-xl p-3.5 shadow-xs">
                <button
                  type="button"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="w-full flex items-center justify-between text-left font-bold text-xs uppercase tracking-wider text-neutral-900 hover:text-black transition-colors select-none cursor-pointer group outline-none focus:outline-none"
                >
                  <span className="flex items-center gap-2 shrink-0 select-none pointer-events-none">
                    <PiInfo size={16} className="text-neutral-500 group-hover:text-black transition-colors shrink-0" />
                    <span className="inline-block leading-none">Sobre UMP</span>
                  </span>
                  <span className="w-4 h-4 flex items-center justify-center shrink-0 pointer-events-none">
                    <PiCaretDown
                      size={16}
                      className={`text-neutral-400 group-hover:text-neutral-700 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center ${
                        isAboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        height: { duration: 0.55, ease: [0.25, 1, 0.5, 1] },
                        opacity: { duration: 0.42, ease: [0.25, 1, 0.5, 1] },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 mt-3 border-t border-neutral-100 text-xs text-neutral-600 leading-relaxed space-y-2">
                        <p>
                          Productora audiovisual y estudio creativo con base en Limón.
                          Especialistas en video publicitario y corporativo, podcast,
                          cobertura de eventos, redes sociales y soluciones digitales,
                          con estándar profesional y proyección nacional.
                        </p>
                        <Link
                          href="/about"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-900 hover:text-black uppercase tracking-wider transition-colors pt-0.5"
                        >
                          Conoce más ▸
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Table of Contents (Koyeb Reference Style) */}
              {tocItems.length > 0 && (
                <nav aria-label="Tabla de contenidos" className="space-y-3 pt-2">
                  <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-400 font-bold select-none">
                    TEMAS
                  </p>

                  <div className="relative border-l-2 border-neutral-200/90 pl-3.5 py-0.5 space-y-3">
                    {tocItems.map((item) => {
                      const isActive = activeSection === item.id;

                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`group relative block w-full text-left text-xs font-mono uppercase tracking-wider leading-snug transition-colors duration-150 cursor-pointer ${
                            isActive
                              ? "text-neutral-950 font-bold"
                              : "text-neutral-400 hover:text-neutral-800 font-normal"
                          }`}
                        >
                          {/* Active Black Indicator Bar directly on the left border */}
                          {isActive && (
                            <motion.span
                              layoutId="active-toc-bar"
                              className="absolute -left-[16px] top-0 bottom-0 w-[2.5px] bg-neutral-950 rounded-xs"
                              transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                            />
                          )}
                          <span className="block">{item.title}</span>
                        </button>
                      );
                    })}
                  </div>
                </nav>
              )}
            </div>
          </motion.aside>

          {/* ═════════════════════════════════════════════════════════
              CENTER COLUMN (Main Standard Article Card)
              ═════════════════════════════════════════════════════════ */}
          <main className="lg:col-span-6">
            <motion.article
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-white border border-neutral-200/80 rounded-2xl p-6 sm:p-10 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] will-change-[transform,opacity]"
            >
              
              {/* Desktop Breadcrumb Navigation */}
              <div className="hidden lg:flex items-center mb-6 pb-2 border-b border-neutral-100">
                <Link
                  href="/news"
                  className="group inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-neutral-500 hover:text-neutral-950 transition-colors"
                >
                  <ArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform duration-300 ease-out" /> TODAS LAS NOTICIAS
                </Link>
              </div>

              {/* Header */}
              <div>
                {/* Standardized Category, Date & Dynamic Read Time */}
                <div className="flex items-center flex-wrap gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 select-none">
                  <span className="text-neutral-950 font-bold tracking-widest">{article.category}</span>
                  <span className="text-neutral-300 font-light">|</span>
                  <span className="flex items-center gap-1.5 text-neutral-600 font-semibold">
                    <Calendar size={13} className="text-neutral-400" />
                    {article.date}
                  </span>
                  <span className="text-neutral-300 font-light">|</span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-neutral-400" />
                    {readingTime} MIN DE LECTURA
                  </span>
                </div>

                {/* Master Headline */}
                <h1 className="font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl uppercase tracking-[-0.035em] leading-[1.04] text-neutral-950 mb-6 sm:mb-8">
                  {article.title}
                </h1>
              </div>

              {/* Featured Image with Silky Optical Focus Transition & Zero Layout Shift */}
              <div className="relative mb-8 sm:mb-10 overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
                <motion.div
                  initial={shouldReduceMotion ? false : { scale: 1.02, filter: "blur(2px)", opacity: 0.95 }}
                  animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative w-full aspect-[16/10] sm:aspect-[16/9] will-change-[transform,filter]"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>

              {/* Mobile Table of Contents Accordion (if headings exist) */}
              {tocItems.length > 0 && (
                <div className="lg:hidden mb-8 border border-neutral-200 rounded-xl p-3.5 bg-neutral-50/80">
                  <button
                    onClick={() => setMobileTocOpen(!mobileTocOpen)}
                    className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider font-bold text-neutral-800 cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Bookmark size={14} className="text-emerald-600" />
                      ÍNDICE DE TEMAS ({completedSections.size}/{tocItems.length})
                    </span>
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-200 ${
                        mobileTocOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileTocOpen && (
                    <div className="mt-3 pt-3 border-t border-neutral-200/70 space-y-1.5">
                      {tocItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="w-full text-left text-xs font-mono uppercase py-1.5 px-2 rounded-md hover:bg-neutral-200/50 text-neutral-700 flex items-center justify-between cursor-pointer"
                        >
                          <span className="truncate">{item.title}</span>
                          <span className="text-neutral-400 text-[10px]">▸</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Standard Article Excerpt */}
              {article.excerpt && (
                <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-medium mb-8 pb-6 border-b border-neutral-100">
                  {article.excerpt}
                </p>
              )}

              {/* Standard Article Body */}
              <div
                className="prose prose-neutral max-w-none text-neutral-700 leading-relaxed text-base sm:text-[17px] prose-p:my-5 prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-headings:text-neutral-950 prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: processedHtml }}
              />

              {/* Mobile Authors and Share Section */}
              <div className="lg:hidden mt-10 pt-6 border-t border-neutral-100 space-y-6">
                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3">
                    AUTORES
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2 overflow-hidden">
                      <img
                        src="/assets/images/Team/Kirian.jpg"
                        alt="Kirian Luna"
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                      />
                      <img
                        src="/assets/images/Team/Eymar.jpg"
                        alt="Eymar"
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                      />
                      <img
                        src="/assets/images/Team/Fabian.jpg"
                        alt="Fabian"
                        className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                      />
                    </div>
                    <div className="text-xs">
                      <p className="font-bold text-neutral-900">
                        Kirian Luna, Eymar, Fabian
                      </p>
                      <p className="text-neutral-500 text-[11px]">
                        Equipo Creativo UMP Media
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-bold mb-3 select-none">
                    COMPARTIR
                  </p>
                  <div className="flex items-center gap-2">
                    <motion.button
                      onClick={() => handleShare("x")}
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-black border border-neutral-200/80 hover:border-black flex items-center justify-center text-neutral-800 hover:text-white transition-colors duration-200 shadow-xs cursor-pointer"
                    >
                      <PiXLogoBold size={17} />
                    </motion.button>

                    <motion.button
                      onClick={() => handleShare("whatsapp")}
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-[#25D366] border border-neutral-200/80 hover:border-[#25D366] flex items-center justify-center text-neutral-800 hover:text-white transition-colors duration-200 shadow-xs cursor-pointer"
                    >
                      <PiWhatsappLogoBold size={18} />
                    </motion.button>

                    <motion.button
                      onClick={() => handleShare("facebook")}
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-[#1877F2] border border-neutral-200/80 hover:border-[#1877F2] flex items-center justify-center text-neutral-800 hover:text-white transition-colors duration-200 shadow-xs cursor-pointer"
                    >
                      <PiFacebookLogoBold size={18} />
                    </motion.button>

                    <motion.button
                      onClick={() => handleShare("instagram")}
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-[#E1306C] border border-neutral-200/80 hover:border-[#E1306C] flex items-center justify-center text-neutral-800 hover:text-white transition-colors duration-200 shadow-xs cursor-pointer"
                    >
                      <PiInstagramLogoBold size={18} />
                    </motion.button>

                    <motion.button
                      onClick={() => handleShare("linkedin")}
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-[#0A66C2] border border-neutral-200/80 hover:border-[#0A66C2] flex items-center justify-center text-neutral-800 hover:text-white transition-colors duration-200 shadow-xs cursor-pointer"
                    >
                      <PiLinkedinLogoBold size={18} />
                    </motion.button>

                    <motion.button
                      onClick={handleCopyLink}
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                      className={`w-10 h-10 rounded-lg border flex items-center justify-center relative overflow-hidden transition-colors duration-200 cursor-pointer shadow-xs ${
                        copied
                          ? "bg-neutral-950 border-neutral-950 text-white"
                          : "bg-white hover:bg-neutral-950 hover:border-neutral-950 hover:text-white border-neutral-200/80 text-neutral-800"
                      }`}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {copied ? (
                          <motion.span
                            key="check"
                            initial={{ y: 8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -8, opacity: 0 }}
                            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                            className="flex items-center justify-center text-white"
                          >
                            <PiCheckBold size={18} />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="link"
                            initial={{ y: 8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -8, opacity: 0 }}
                            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                            className="flex items-center justify-center"
                          >
                            <PiLinkSimpleBold size={18} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          </main>

          {/* ═════════════════════════════════════════════════════════
              RIGHT COLUMN (Authors & Share - Desktop Sticky)
              ═════════════════════════════════════════════════════════ */}
          <motion.aside
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block lg:col-span-3"
          >
            <div className="sticky top-28 space-y-8">
              
              {/* Authors Section (NO slash!) */}
              <div className="space-y-3">
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-400 font-bold select-none">
                  AUTORES
                </p>

                <div className="flex items-center gap-3 bg-white border border-neutral-200/80 rounded-xl p-3.5 shadow-xs">
                  <div className="flex -space-x-2 shrink-0">
                    <img
                      src="/assets/images/Team/Kirian.jpg"
                      alt="Kirian Luna"
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    />
                    <img
                      src="/assets/images/Team/Eymar.jpg"
                      alt="Eymar"
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    />
                    <img
                      src="/assets/images/Team/Fabian.jpg"
                      alt="Fabian"
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                    />
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-neutral-950 leading-tight">
                      Kirian Luna, Eymar, Fabian
                    </p>
                    <p className="text-neutral-500 text-[11px] mt-0.5">
                      Equipo Creativo UMP
                    </p>
                  </div>
                </div>
              </div>

              {/* Share Section (NO slash!) */}
              <div className="space-y-3">
                <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-neutral-400 font-bold select-none">
                  COMPARTIR
                </p>

                <div className="flex items-center gap-2">
                  <Tooltip content="Compartir en X" side="bottom" align="start">
                    <motion.button
                      onClick={() => handleShare("x")}
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-black border border-neutral-200/80 hover:border-black flex items-center justify-center text-neutral-800 hover:text-white transition-colors duration-200 shadow-xs cursor-pointer"
                    >
                      <PiXLogoBold size={17} />
                    </motion.button>
                  </Tooltip>

                  <Tooltip content="Compartir en WhatsApp" side="bottom">
                    <motion.button
                      onClick={() => handleShare("whatsapp")}
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-[#25D366] border border-neutral-200/80 hover:border-[#25D366] flex items-center justify-center text-neutral-800 hover:text-white transition-colors duration-200 shadow-xs cursor-pointer"
                    >
                      <PiWhatsappLogoBold size={18} />
                    </motion.button>
                  </Tooltip>

                  <Tooltip content="Compartir en Facebook" side="bottom">
                    <motion.button
                      onClick={() => handleShare("facebook")}
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-[#1877F2] border border-neutral-200/80 hover:border-[#1877F2] flex items-center justify-center text-neutral-800 hover:text-white transition-colors duration-200 shadow-xs cursor-pointer"
                    >
                      <PiFacebookLogoBold size={18} />
                    </motion.button>
                  </Tooltip>

                  <Tooltip content="Compartir en Instagram" side="bottom">
                    <motion.button
                      onClick={() => handleShare("instagram")}
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-[#E1306C] border border-neutral-200/80 hover:border-[#E1306C] flex items-center justify-center text-neutral-800 hover:text-white transition-colors duration-200 shadow-xs cursor-pointer"
                    >
                      <PiInstagramLogoBold size={18} />
                    </motion.button>
                  </Tooltip>

                  <Tooltip content="Compartir en LinkedIn" side="bottom">
                    <motion.button
                      onClick={() => handleShare("linkedin")}
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                      className="w-10 h-10 rounded-lg bg-white hover:bg-[#0A66C2] border border-neutral-200/80 hover:border-[#0A66C2] flex items-center justify-center text-neutral-800 hover:text-white transition-colors duration-200 shadow-xs cursor-pointer"
                    >
                      <PiLinkedinLogoBold size={18} />
                    </motion.button>
                  </Tooltip>

                  <Tooltip content={copied ? "Enlace copiado" : "Copiar enlace"} side="bottom" align="end">
                    <motion.button
                      onClick={handleCopyLink}
                      whileHover={{ y: -2, scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
                      className={`w-10 h-10 rounded-lg border flex items-center justify-center relative overflow-hidden transition-colors duration-200 cursor-pointer shadow-xs ${
                        copied
                          ? "bg-neutral-950 border-neutral-950 text-white"
                          : "bg-white hover:bg-neutral-950 hover:border-neutral-950 hover:text-white border-neutral-200/80 text-neutral-800"
                      }`}
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {copied ? (
                          <motion.span
                            key="check"
                            initial={{ y: 8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -8, opacity: 0 }}
                            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                            className="flex items-center justify-center text-white"
                          >
                            <PiCheckBold size={18} />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="link"
                            initial={{ y: 8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -8, opacity: 0 }}
                            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                            className="flex items-center justify-center"
                          >
                            <PiLinkSimpleBold size={18} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </motion.aside>

        </div>
      </motion.div>

      {/* Global CTA Section at bottom */}
      <CTAFinal />
    </div>
  );
}
