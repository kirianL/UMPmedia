"use client";

import { CTAFinal } from "@/components/sections/cta-final";
import { EquipmentShowcase } from "@/components/sections/equipment-showcase";
import { RevealText } from "@/components/ui/reveal-text";
import { Check, Shield, Zap, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function AboutContent() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* 1. Hero & Intro */}
      <section className="container mx-auto px-6 mb-16 md:mb-20">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-6 block"
          >
            NUESTRA HISTORIA
          </motion.span>
          <RevealText
            text="DESDE LIMÓN, PARA EL MUNDO"
            tag="h1"
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.9] text-white"
            delay={0.1}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-ump-secondary leading-relaxed mb-12 max-w-3xl"
          >
            Nacimos en Limón, en el Caribe costarricense, un territorio donde el
            ritmo, el color y la identidad no se construyen: se viven.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
            className="w-20 h-1 bg-ump-accent mb-12 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-gray-300 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Desde aquí, UMPmedia surge en 2026 como una productora audiovisual
              comprometida con crear contenido con calidad técnica, narrativa y
              de diseño, pensado para comunicar con intención y conectar con
              audiencias reales.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Representamos a Limón no como un estereotipo, sino como un punto
              de partida creativo. Nuestro trabajo parte del contexto, del
              respeto por la cultura y de una mirada auténtica que evita los
              clichés turísticos.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 2. Expansion & Context */}
      <section className="bg-ump-card/10 border-y border-white/5 py-16 mb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <RevealText
              text="Raíces Caribeñas, Alcance Global"
              tag="h2"
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-ump-secondary leading-relaxed"
            >
              Aunque nuestras raíces están en el Caribe, nuestro alcance no se
              limita a un solo lugar. Trabajamos y nos expandimos en diferentes
              regiones de Costa Rica, colaborando con marcas, proyectos y
              personas que buscan producción audiovisual profesional, sin
              importar dónde se encuentren.
            </motion.p>
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
                UMPmedia se establece como productora audiovisual con base en
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
