"use client";

import { CTAFinal } from "@/components/sections/cta-final";
import { ArrowLeft, Calendar, Share2, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { RevealText } from "@/components/ui/reveal-text";
import { NewsItem } from "@/lib/news-data";
import { useState } from "react";

interface NewsDetailContentProps {
  article: NewsItem;
}

export function NewsDetailContent({ article }: NewsDetailContentProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const title = article.title;
    const text = article.excerpt || article.title;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-ump-background overflow-x-hidden">
      {/* Jeton-Style Header Banner with UMP Neon Green Background */}
      <motion.div
        initial={{ opacity: 0, y: -45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#32fb00] text-black pt-36 pb-24 md:pb-32 px-6 relative z-10"
      >
        <div className="container mx-auto max-w-4xl text-black">
          {/* Back button link inside green area */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-black/70 hover:text-black transition-colors text-sm font-bold uppercase tracking-wider"
            >
              <ArrowLeft size={16} /> Volver a Noticias
            </Link>
          </motion.div>

          <div className="mb-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 text-black"
            >
              <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-black/70 text-sm flex items-center gap-2 font-medium">
                <Calendar size={14} /> {article.date}
              </span>
            </motion.div>
          </div>

          <RevealText
            text={article.title}
            tag="h1"
            mode="mask"
            delay={0.3}
            className="text-4xl md:text-6xl font-bold tracking-tight text-black leading-tight"
          />
        </div>
      </motion.div>

      {/* Main Content Area Overlapping the Banner with Smooth Rounded Top */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="bg-ump-background rounded-t-[2.5rem] md:rounded-t-[4.5rem] -mt-10 md:-mt-16 relative z-20 pt-16 md:pt-24 pb-20 px-6"
      >
        <div className="container mx-auto max-w-4xl">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-video md:aspect-[21/9] max-h-[280px] md:max-h-[380px] bg-neutral-900 rounded-2xl overflow-hidden mb-12 relative shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="prose prose-invert prose-lg max-w-none text-ump-secondary prose-headings:text-white prose-a:text-ump-accent mb-16"
          >
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </motion.article>

          {/* Share */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border-t border-white/10 pt-8 flex justify-between items-center mb-24"
          >
            <span className="text-white font-bold">Compartir artículo</span>
            <div className="flex items-center gap-3">
              {copied && (
                <span className="text-xs font-bold text-[#32fb00] bg-ump-alt/80 border border-[#32fb00]/10 px-3 py-1.5 rounded-full select-none">
                  ¡Enlace copiado!
                </span>
              )}
              <button
                onClick={handleShare}
                aria-label="Compartir artículo"
                className="p-3 bg-ump-alt rounded-full hover:bg-ump-accent hover:text-black transition-colors text-ump-secondary flex items-center justify-center cursor-pointer"
              >
                {copied ? <Check size={20} className="text-[#32fb00]" /> : <Share2 size={20} />}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="border-t border-white/10 pt-12">
        <CTAFinal />
      </div>
    </div>
  );
}
