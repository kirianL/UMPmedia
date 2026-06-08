"use client";

import { CTAFinal } from "@/components/sections/cta-final";
import { EquipmentShowcase } from "@/components/sections/equipment-showcase";
import { RevealText } from "@/components/ui/reveal-text";
import { Check, Shield, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function AboutContent() {
  return (
    <div className="min-h-screen bg-ump-background">
      {/* Jeton-Style Header Banner with UMP Neon Green Background */}
      <div className="bg-[#32fb00] text-black pt-40 pb-24 md:pb-32 px-6 relative z-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-12 text-black">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <RevealText
              text="Nosotros"
              tag="h1"
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none select-none text-black"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="max-w-md md:text-right md:self-end text-black"
          >
            <p className="text-base md:text-lg font-bold leading-snug text-black/80">
              Nacimos en Limón, en el Caribe costarricense. Un territorio con pulso, ritmo y una cultura única que inspira cada una de nuestras producciones.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area Overlapping the Banner with Smooth Rounded Top */}
      <div className="bg-ump-background rounded-t-[2.5rem] md:rounded-t-[4.5rem] -mt-10 md:-mt-16 relative z-20 pt-16 md:pt-24 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-gray-300 leading-relaxed mb-16 max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              Desde aquí, Ultimate Media Productions surge en 2026 como una productora audiovisual
              comprometida con crear contenido con calidad técnica, narrativa y
              de diseño, pensado para comunicar con intención y conectar con
              audiencias reales.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
              Representamos a Limón no como un estereotipo, sino como un punto
              de partida creativo. Nuestro trabajo parte del contexto, del
              respeto por la cultura y de una mirada auténtica que evita los
              clichés turísticos.
            </motion.p>
          </div>
        </div>
      </div>

      {/* 2. Expansion & Context */}
      <section className="bg-ump-card/10 border-y border-white/5 py-16 md:py-24 mb-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <RevealText
                text="Raíces Caribeñas, Alcance Global"
                tag="h2"
                className="text-3xl md:text-5xl font-bold text-white mb-6"
              />
              <motion.p
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-lg md:text-xl text-ump-secondary leading-relaxed"
              >
                Aunque nuestras raíces están en el Caribe, nuestro alcance no se
                limita a un solo lugar. Trabajamos y nos expandimos en diferentes
                regiones de Costa Rica, colaborando con marcas, proyectos y
                personas que buscan producción audiovisual profesional, sin
                importar dónde se encuentren.
              </motion.p>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                className="w-full max-w-[520px] aspect-[4/3] relative flex items-center justify-center select-none"
              >
                {/* Floating animation container */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full relative"
                >
                  <Image
                    src="/assets/images/CostaRica-map.PNG"
                    alt="Mapa de Costa Rica con Limón en verde"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Beginning (2026) */}
      <section className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <span className="text-8xl font-bold text-white/5 block leading-none mb-4">
                2026
              </span>
              <h3 className="text-3xl font-bold text-white mb-2">
                Nuestro inicio
              </h3>
              <span className="text-ump-accent font-medium">El comienzo</span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <div className="bg-ump-card/20 p-8 md:p-12 rounded-2xl border border-white/10 hover:border-white/20 transition-colors duration-500">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Ultimate Media Productions se establece como productora audiovisual con base en
                Limón, ofreciendo servicios de video publicitario y corporativo,
                producción de podcast, cobertura de eventos, fotografía, video y
                manejo de redes sociales, manteniendo un estándar profesional
                desde el primer proyecto y una proyección de crecimiento
                nacional.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Principles */}
      <section className="container mx-auto px-6 mb-20">
        <div className="mb-12">
          <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
            FILOSOFÍA
          </span>
          <RevealText
            text="Nuestros principios"
            tag="h2"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group border-t border-white/10 pt-8 hover:border-ump-accent transition-colors duration-500"
          >
            <div className="mb-6 text-ump-accent transform group-hover:-translate-y-1 transition-transform duration-300">
              <Heart size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Autenticidad radical
            </h3>
            <p className="text-ump-secondary leading-relaxed text-sm">
              Creamos desde lo real. Cada proyecto debe representar fielmente a
              quien comunica y al entorno del que nace.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group border-t border-white/10 pt-8 hover:border-ump-accent transition-colors duration-500"
          >
            <div className="mb-6 text-ump-accent transform group-hover:-translate-y-1 transition-transform duration-300">
              <Shield size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Calidad obsesiva
            </h3>
            <p className="text-ump-secondary leading-relaxed text-sm">
              Cuidamos cada encuadre, cada sonido y cada decisión visual. Si
              algo no suma al resultado final, no se hace. Cada píxel cuenta.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group border-t border-white/10 pt-8 hover:border-ump-accent transition-colors duration-500"
          >
            <div className="mb-6 text-ump-accent transform group-hover:-translate-y-1 transition-transform duration-300">
              <Zap size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Narrativa primero
            </h3>
            <p className="text-ump-secondary leading-relaxed text-sm">
              La técnica acompaña, pero la historia manda. Todo lo que
              producimos parte de una idea clara, con propósito y dirección.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Equipment Showcase */}
      <EquipmentShowcase />

      <CTAFinal />
    </div>
  );
}
