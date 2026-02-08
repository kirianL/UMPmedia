"use client";

import { CTAFinal } from "@/components/sections/cta-final";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import Link from "next/link";

import { use } from "react";

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  // Mock content
  const article = {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    date: "Oct 12, 2024",
    category: "Producción",
    content: `
      <p class="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p class="mb-6">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h3 class="text-2xl font-bold text-white mt-8 mb-4">El Desafío en el Caribe Sur</h3>
      <p class="mb-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    `,
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-ump-secondary hover:text-white mb-8 transition-colors text-sm font-bold uppercase tracking-wider"
        >
          <ArrowLeft size={16} /> Volver a Noticias
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-ump-accent/10 text-ump-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-ump-secondary text-sm flex items-center gap-2">
              <Calendar size={14} /> {article.date}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
            {article.title}
          </h1>
        </div>

        {/* Hero Image */}
        <div className="aspect-video bg-neutral-800 rounded-xl overflow-hidden mb-16 relative">
          <div className="absolute inset-0 flex items-center justify-center text-white/20">
            Article Hero Image
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none text-ump-secondary prose-headings:text-white prose-a:text-ump-accent mb-16">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>

        {/* Share */}
        <div className="border-t border-white/10 pt-8 flex justify-between items-center mb-24">
          <span className="text-white font-bold">Compartir artículo</span>
          <button className="p-3 bg-ump-alt rounded-full hover:bg-ump-accent hover:text-white transition-colors text-ump-secondary">
            <Share2 size={20} />
          </button>
        </div>
      </div>
      <div className="border-t border-white/10 pt-12">
        <CTAFinal />
      </div>
    </div>
  );
}
