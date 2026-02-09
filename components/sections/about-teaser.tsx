"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function AboutTeaser() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="py-32 md:py-64 bg-ump-alt relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-8 md:-mt-12 z-10 border-t border-white/5 shadow-[0_-5px_20px_rgba(0,0,0,0.2)]"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#18943A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Text Content - Left 5 Cols */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full border border-[#18943A]/30 text-[#18943A] text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Nuestra Esencia
              </span>
              <h2 className="text-4xl md:text-7xl font-bold text-white leading-[0.9] tracking-tighter mb-8 italic">
                CULTURA <br />
                <span className="text-[#18943A] not-italic">
                  CARIBEÑA.
                </span>{" "}
                <br />
                ACABADO <br />
                <span className="opacity-40">GLOBAL.</span>
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl md:text-2xl text-white font-medium leading-tight">
                UMPmedia no es solo una productora; es un{" "}
                <span className="border-b-2 border-[#18943A]">
                  manifiesto visual
                </span>{" "}
                nacido en Limón.
              </p>
              <p className="text-base md:text-lg text-ump-secondary leading-relaxed max-w-md">
                Combinamos la energía cruda de nuestras raíces con estándares de
                producción elite. Si tiene alma, nosotros sabemos cómo filmarla.
              </p>

              <Link
                href="/about"
                className="group flex items-center gap-4 text-white hover:text-[#18943A] transition-all duration-300 pt-4"
              >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#18943A] group-hover:border-[#18943A] transition-all">
                  <ArrowUpRight
                    size={20}
                    className="group-hover:text-black transition-colors"
                  />
                </div>
                <span className="font-bold uppercase tracking-widest text-sm">
                  Explora nuestra historia
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Photo Mosaic - Right 7 Cols */}
          <div className="lg:col-span-7 grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-6 order-1 lg:order-2 h-[400px] md:h-[700px] relative">
            {/* Large Image - Main focus */}
            <motion.div
              style={{ y: y1 }}
              className="col-span-2 md:col-span-3 h-full bg-[#18943A]/20 rounded-3xl overflow-hidden relative border border-white/5 group"
            >
              <video
                src="/assets/videos/Home-detrasdecamaras.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[#18943A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </motion.div>

            {/* Top Small Image */}
            <div className="col-span-1 md:col-span-2 grid grid-rows-2 gap-3 md:gap-6 h-full">
              <motion.div
                style={{ y: y2 }}
                className="bg-ump-card rounded-3xl overflow-hidden relative border border-white/5 group"
              >
                <div className="absolute inset-0 bg-ump-card/60 flex items-center justify-center p-2 text-center group-hover:bg-[#18943A]/20 transition-colors">
                  <p className="text-white/20 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.2em]">
                    [ FOTO: <br /> DETALLE TÉCNICO ]
                  </p>
                </div>
                <div className="absolute inset-y-0 left-0 w-1 bg-[#18943A] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500" />
              </motion.div>

              {/* Bottom Small Image - Solid Green Accent */}
              <motion.div
                style={{ y: y3 }}
                className="bg-[#18943A] rounded-3xl p-4 md:p-8 flex flex-col justify-end group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-4 md:p-8 opacity-20 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight
                    size={24}
                    className="md:w-10 md:h-10 text-black"
                  />
                </div>
                <p className="text-black font-black text-lg md:text-3xl leading-none uppercase tracking-tighter">
                  ESTO ES <br /> UMP.
                </p>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
