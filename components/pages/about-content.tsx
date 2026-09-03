"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  PiArrowRightBold, 
  PiStarFill, 
  PiFilmSlateBold, 
  PiSparkleBold,
  PiWaveformBold
} from "react-icons/pi";
import { CTAFinal } from "@/components/sections/cta-final";
import { EquipmentShowcase } from "@/components/sections/equipment-showcase";
import { TextMotion } from "@/components/ui/text-motion";
import { SlotButton } from "@/components/ui/slot-button";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.05,
      ease: [0.23, 1, 0.32, 1] as const,
    },
  }),
};

export function AboutContent() {
  return (
    <div className="min-h-screen bg-[#f6f6f3] text-neutral-900 selection:bg-neutral-950 selection:text-white">
      
      {/* 1. Header Section matching Fabrica Studio reference */}
      <section className="pt-36 sm:pt-44 md:pt-48 pb-12 sm:pb-16 border-b border-neutral-200/60">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Main Giant Display Headline with Masked Text Motion Reveal */}
          <div className="overflow-hidden mb-12 sm:mb-16">
            <motion.h1
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-bold tracking-tight text-neutral-950 block"
            >
              Nosotros.
            </motion.h1>
          </div>

          {/* 3-Part Subtitle Row with Staggered Text Motion */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-start mb-12 sm:mb-16">
            
            {/* Left Col: Category label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
              className="md:col-span-2 flex items-center"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold select-none">
                Sobre nosotros
              </span>
            </motion.div>

            {/* Center Col: Two-tone bold statement + Vision Copy */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="md:col-span-6 lg:col-span-6 space-y-4"
            >
              <p className="text-xl sm:text-2xl md:text-[1.65rem] font-normal leading-snug tracking-tight text-neutral-500">
                <span className="font-bold text-neutral-950">Nacimos en Limón con una idea clara:</span> crear desde aquí para llegar mucho más lejos.
              </p>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed pt-1">
                Somos un estudio creativo que combina producción audiovisual, contenido digital y soluciones digitales para convertir ideas en proyectos que conectan con las personas y generan impacto.
              </p>

              {/* Social Proof: Avatar Cluster + Rating */}
              <div className="flex items-center gap-3 pt-2">
                <div className="flex -space-x-2.5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#f6f6f3] shadow-xs">
                    <Image
                      src="/assets/images/Team/Fabian.jpg"
                      alt="Fabián Forbes"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#f6f6f3] shadow-xs">
                    <Image
                      src="/assets/images/Team/Kirian.jpg"
                      alt="Kirian"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#f6f6f3] shadow-xs">
                    <Image
                      src="/assets/images/Team/Eymar.jpg"
                      alt="Eymar"
                      fill
                      sizes="32px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-amber-500 text-xs">
                    <PiStarFill size={11} />
                    <PiStarFill size={11} />
                    <PiStarFill size={11} />
                    <PiStarFill size={11} />
                    <PiStarFill size={11} />
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500 tracking-tight">
                    Fabián Forbes · Kirian · Eymar
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Col: Light context description */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="md:col-span-4 lg:col-span-4 md:pt-1"
            >
              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                Proyectos auténticos construidos con visión, técnica cinematográfica y propósito estratégico.
              </p>
            </motion.div>

          </div>

          {/* 2. Large Hero Banner Photo */}
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.45,
              delay: 0.2,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.3/1] rounded-3xl md:rounded-[2.5rem] overflow-hidden relative shadow-xs bg-neutral-900 border border-neutral-200/80"
          >
            <Image
              src="/assets/Footer.jpeg"
              alt="Ultimate Media Productions Cinema Rig"
              fill
              priority
              sizes="(max-width: 1360px) 100vw, 1360px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10 pointer-events-none" />
            
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-10 z-10 text-white space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                Producción Cinematográfica
              </span>
              <p className="text-sm sm:text-base font-medium text-white/90">
                Ultimate Media Productions | Estudio Audiovisual & Cobertura Nacional
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Deep Narrative & Team Section */}
      <section className="py-16 sm:py-24 border-b border-neutral-200/60">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Story Column */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15px" }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold block">
                Trayectoria & Origen
              </span>

              <p className="text-xl sm:text-2xl font-normal text-neutral-900 leading-relaxed">
                Durante nuestro camino hemos trabajado para dar visibilidad al talento, las historias y las iniciativas de Limón, llevando la identidad de nuestra provincia a nuevos espacios y demostrando que desde el Caribe también se pueden crear proyectos con visión, calidad y alcance.
              </p>

              <p className="text-base sm:text-lg text-neutral-500 font-normal leading-relaxed">
                Hoy seguimos creciendo sin perder nuestro origen. Cada proyecto es una oportunidad para crear, conectar y dejar algo.
              </p>
            </motion.div>

            {/* Team Column: Fabián Forbes, Kirian, Eymar */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15px" }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-5 space-y-4"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
                Equipo Creativo & Fundadores
              </span>

              <div className="space-y-3">
                {[
                  {
                    name: "Fabián Forbes",
                    role: "Director Creativo & Fundador",
                    image: "/assets/images/Team/Fabian.jpg",
                  },
                  {
                    name: "Kirian",
                    role: "Desarrollo & Producción Digital",
                    image: "/assets/images/Team/Kirian.jpg",
                  },
                  {
                    name: "Eymar",
                    role: "Producción Audiovisual & Cámara",
                    image: "/assets/images/Team/Eymar.jpg",
                  },
                ].map((member, i) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
                    className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:border-neutral-300 transition-[border-color,box-shadow] duration-200"
                  >
                    {/* Rounded Square Frame (No circle cropping) */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-neutral-200/80 shrink-0 bg-neutral-100 shadow-2xs">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="(max-width: 640px) 64px, 80px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-neutral-950 leading-tight">
                        {member.name}
                      </h4>
                      <p className="text-xs sm:text-sm font-mono text-neutral-500 mt-1">
                        {member.role}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. Metric Stats Row with Scroll Text Motion */}
      <section className="py-14 sm:py-20 border-b border-neutral-200/60">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            
            {[
              { value: "150+", label: "Producciones, rodajes y coberturas ejecutadas con éxito" },
              { value: "30+", label: "Marcas, instituciones y creadores que confían en nosotros" },
              { value: "98%", label: "Tasa de satisfacción y fidelidad de clientes recurrentes" },
              { value: "4K/6K", label: "Estándar cinematográfico RAW, ACES y audio broadcast" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15px" }}
                transition={{
                  duration: 0.38,
                  delay: i * 0.05,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="space-y-2"
              >
                <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-950 block">
                  {stat.value}
                </span>
                <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-snug">
                  {stat.label}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* 5. Rich Emerald Approach Section with Costa Rica Map & User Copy */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="rounded-3xl md:rounded-[2.5rem] bg-[#032014] text-white p-8 sm:p-12 md:p-16 border border-emerald-900/50 shadow-xs relative overflow-hidden">
            
            {/* Subtle optical background gradient bloom */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              
              {/* Left Column: Statement, Subtext & CTA Pill with TextMotion */}
              <div className="lg:col-span-7 space-y-6">
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Hechos en Limón. Creados para el mundo.
                </h2>

                <TextMotion
                  text="Trabajamos de forma directa, estratégica y cercana, combinando creatividad, tecnología y producción para construir proyectos que tienen un propósito y se sienten auténticos."
                  highlightWords={["Trabajamos", "de", "forma", "directa", "estratégica", "y", "cercana"]}
                  highlightClass="font-bold text-white"
                  normalClass="text-emerald-200/80"
                  className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed tracking-tight"
                  stagger={0.015}
                  delay={0.05}
                />

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15px" }}
                  transition={{ duration: 0.35, delay: 0.2, ease: [0.23, 1, 0.32, 1] as const }}
                  className="pt-2"
                >
                  <SlotButton
                    href="/portfolio"
                    variant="secondary"
                    className="rounded-full bg-white text-neutral-950 hover:bg-neutral-100 font-medium text-xs md:text-sm shadow-xs px-5 py-2.5 normal-case tracking-tight"
                    icon={<PiArrowRightBold size={13} />}
                    iconPosition="right"
                  >
                    Ver portafolio
                  </SlotButton>
                </motion.div>
              </div>

              {/* Right Column: Costa Rica Map with Limón highlighted */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-15px" }}
                transition={{ duration: 0.45, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="lg:col-span-5 flex items-center justify-center"
              >
                <div className="relative w-full max-w-[420px] aspect-[4/3] select-none">
                  <Image
                    src="/assets/images/CostaRica-map.PNG"
                    alt="Mapa de Costa Rica con Limón destacado en verde"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                  />
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. Our Clients (2016–25©) Section matching Fabrica Studio reference */}
      <section className="py-16 sm:py-24 border-b border-neutral-200/60">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Column: Heading & Year tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15px" }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="lg:col-span-4 flex items-baseline gap-3"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold select-none">
                Our clients
              </span>
              <span className="text-xs font-mono text-neutral-400">
                (2016–25©)
              </span>
            </motion.div>

            {/* Right Column: 3x2 Grid of White Rounded Cards */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { name: "DN Express", src: "/assets/LogosHero/DnExpress.png" },
                  { name: "Grupo Caribeños", src: "/assets/LogosHero/Caribenos.png", invertDark: true },
                  { name: "Bufete Morgan JM", src: "/assets/LogosHero/JM.png" },
                  { name: "Sazón Colombiano", src: "/assets/LogosHero/SazonColombiano.png" },
                  { name: "Dra. Jeinnel Newball", src: "/assets/LogosHero/Newball.png" },
                  { name: "Soda El Patty", src: "/assets/LogosHero/SodaElpatty.png" },
                ].map((client, i) => (
                  <motion.div
                    key={client.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15px" }}
                    transition={{
                      duration: 0.35,
                      delay: i * 0.04,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-xs flex items-center justify-center min-h-[180px] sm:min-h-[220px]"
                  >
                    {/* Logo in Full Original Color, perfectly centered, no hover animation */}
                    <div className="w-full h-24 sm:h-28 flex items-center justify-center">
                      <Image
                        src={client.src}
                        alt={client.name}
                        width={260}
                        height={96}
                        className={`max-h-20 sm:max-h-24 max-w-[190px] sm:max-w-[230px] w-auto h-auto object-contain ${
                          client.invertDark ? "brightness-0" : ""
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Caribbean Roots & Technical Principles with Scroll Motion */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15px" }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="mb-10 sm:mb-12"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-semibold block mb-2">
              Nuestra Esencia
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950">
              Raíces caribeñas, estándar global.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {[
              {
                icon: PiFilmSlateBold,
                title: "Autenticidad radical",
                desc: "Creamos desde lo real. Cada encuadre y relato representa fielmente a la marca y al entorno cultural del que nace, evitando clichés turísticos.",
              },
              {
                icon: PiSparkleBold,
                title: "Calidad obsesiva",
                desc: "Cuidamos iluminación, colorimetría en espacio ACES y acústica broadcast. Si un detalle no suma al impacto final de la pieza, no se ejecuta.",
              },
              {
                icon: PiWaveformBold,
                title: "Narrativa primero",
                desc: "La tecnología acompaña, pero la historia manda. Todo proyecto parte de una intención estratégica clara para convertir espectadores en aliados.",
              },
            ].map((principle, i) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15px" }}
                  transition={{
                    duration: 0.35,
                    delay: i * 0.05,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200/80 shadow-xs flex flex-col justify-between space-y-6"
                >
                  <div className="w-10 h-10 rounded-2xl bg-neutral-100 text-neutral-900 flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-neutral-950 tracking-tight">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* 6. Technical Equipment Showcase Component */}
      <EquipmentShowcase />

      {/* 7. Global CTA Section */}
      <CTAFinal />
    </div>
  );
}
