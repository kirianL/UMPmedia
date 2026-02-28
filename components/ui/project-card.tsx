"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  image: string;
  slug: string;
  className?: string;
}

export function ProjectCard({
  title,
  category,
  year,
  image,
  slug,
  className = "",
}: ProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className={`block group relative overflow-hidden bg-ump-card ${className}`}
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full relative aspect-[4/5]"
      >
        {/* Placeholder for Image - using standard gray if src is missing or placeholder */}
        <div className="absolute inset-0 bg-neutral-800" />

        {image && (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-ump-accent text-xs font-bold uppercase tracking-widest mb-2 block">
              {category}
            </span>
            <div className="flex justify-between items-end">
              <h3 className="text-2xl font-bold text-white">{title}</h3>
              <span className="text-sm font-mono text-white/80">{year}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
