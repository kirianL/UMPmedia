"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const team = [
  {
    name: "Fabián Acuña",
    role: "Director General | Manager de Artistas",
    bio: "Fabián Acuña es un joven empresario y estratega creativo limonense que ha hecho de la comunicación y el arte su plataforma para impactar vidas. Con una visión clara de crecimiento y proyección internacional, se ha consolidado como impulsor de talento emergente, apostando por la disciplina, el respeto y la excelencia como pilares fundamentales. Como fundador del sello UMP, trabaja en el desarrollo integral de artistas jóvenes, construyendo no solo música, sino marcas con identidad y propósito. Empresario en el área de marketing digital y producción audiovisual, Fabián combina estrategia, creatividad y pasión para posicionar marcas, talentos y proyectos con una visión moderna y auténtica. Su misión es clara: elevar el talento limonense al escenario internacional y demostrar que desde Limón se puede construir grandeza.",
    specialties: [
      "Estrategia Creativa",
      "Marketing Digital",
      "Producción Audiovisual",
      "Talento Emergente",
    ],
    image: "/assets/images/Team/Fabian.jpg",
  },
  {
    name: "Eymar Ortiz Rojas",
    role: "Productor Audiovisual",
    bio: "Eymar Ortiz Rojas es productor audiovisual limonense, graduado de la Universidad Creativa, con más de 4 años de experiencia en el mundo de la fotografía y el video. Ha trabajado en estudios de fotografía en Limón y se desempeñó como productor en Noticias Caribe, donde lideró proyectos de transmisión en vivo como los toros y desfiles, además de la producción de programas especiales para la municipalidad.\n\nCuenta con amplia experiencia como editor de video y ha desarrollado proyectos para instituciones y marcas como UCreativa, TecSpace, GenteOPA y Noticias Caribe. Actualmente dirige la productora UMP Media, donde ha producido y dirigido videos musicales para distintos artistas, combinando técnica, narrativa visual y una identidad caribeña marcada.",
    specialties: [
      "Producción",
      "Dirección",
      "Contenido Audiovisual",
      "Fotografía",
      "Edición",
      "Animación",
    ],
    image: "/assets/images/Team/Eymar.jpg",
  },
  {
    name: "Camila Castillo Aguilar",
    role: "Creadora de Contenido",
    bio: "Es Lashista y creadora de contenido con proyección en el mundo digital, construyendo su marca desde temprana edad.",
    specialties: ["Contenido Digital", "Redes Sociales", "Storytelling"],
    image: "/assets/images/Team/Camila.jpg",
  },
  {
    name: "Kirian Luna Quirós",
    role: "Ingeniero en Sistemas y Desarrollador Web",
    bio: "Kirian Luna Quirós es ingeniero en sistemas y desarrollador web, especializado en la creación de sistemas y páginas web modernas. Cuenta con más de dos años de experiencia desarrollando soluciones digitales, combinando tecnología, diseño y creatividad para construir plataformas funcionales y visualmente atractivas.\n\nA lo largo de su trayectoria ha trabajado con restaurantes, empresas de exportación, instituciones públicas y distintos negocios que buscan fortalecer su presencia digital mediante herramientas tecnológicas bien estructuradas.\n\nSu enfoque se centra en el desarrollo de aplicaciones y sitios web optimizados para la experiencia del usuario, cuidando tanto la arquitectura del sistema como la parte visual y creativa de cada proyecto. Actualmente continúa desarrollando plataformas digitales y sistemas web, explorando nuevas tecnologías y tendencias de diseño para crear productos modernos, eficientes y con identidad propia.",
    specialties: ["Desarrollo Web", "Sistemas", "UI/UX"],
    image: "/assets/images/Team/Kirian.jpg",
  },
];

type TeamMember = (typeof team)[number];

export default function TeamPage() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (selected) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [selected]);

  const closeModal = () => setSelected(null);

  return (
    <div className="bg-ump-background min-h-screen pt-32 relative">
      <div className="container mx-auto px-6 mb-24">
        <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
          El Equipo
        </span>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          El talento detrás
          <br /> de cada historia.
        </h1>
      </div>

      <section className="container mx-auto px-6 pb-40 md:pb-56">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col">
              {/* Photo */}
              <button
                onClick={() => setSelected(member)}
                className="relative aspect-[3/4] bg-neutral-800 mb-4 rounded-sm overflow-hidden grayscale hover:grayscale-0 [transition:filter_0.9s_cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                aria-label={`Ver bio de ${member.name}`}
              >
                {member.image && (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                  />
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out flex items-end p-4 md:p-6">
                  <span className="text-white font-bold flex items-center gap-2 text-sm md:text-base translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    Ver Bio <ArrowUpRight size={16} />
                  </span>
                </div>
              </button>

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-base md:text-xl font-bold text-white mb-0.5 leading-tight">
                  {member.name}
                </h3>
                <span className="text-ump-accent text-[10px] md:text-xs font-bold uppercase tracking-widest block mb-3">
                  {member.role}
                </span>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed line-clamp-2 mb-3">
                  {member.bio}
                </p>
                <button
                  onClick={() => setSelected(member)}
                  className="text-xs font-bold text-white/30 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-1"
                >
                  Ver Bio <ArrowUpRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modern, Horizontal & Fluid Bio Modal — Mobile-First Bottom Sheet */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-[100] flex items-end justify-center pointer-events-none">
            {/* Full screen backdrop — Covers everything */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer pointer-events-auto"
            />

            {/* Modal Content — Optimized for all devices (Mobile, Laptop, Desktop) */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{
                type: "spring",
                damping: 40,
                stiffness: 450,
                mass: 1,
              }}
              className="relative w-full h-[88dvh] md:h-[75dvh] bg-neutral-950 border-t border-white/10 rounded-t-[3.5rem] md:rounded-t-[4rem] overflow-hidden z-[101] shadow-[0_-30px_100px_-20px_rgba(0,0,0,0.9)] pointer-events-auto"
            >
              <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden no-scrollbar">
                {/* Photo panel — Balanced proportions */}
                <div className="relative w-full h-[350px] md:w-[35%] xl:w-[30%] md:h-full shrink-0">
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  {/* Premium fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-neutral-950/20 md:to-neutral-950" />
                </div>

                {/* Info panel — justify-start to prevent cutting off content on any screen */}
                <div className="flex-1 px-8 py-20 md:px-16 md:py-24 flex flex-col justify-start relative bg-neutral-950 md:overflow-y-auto custom-scrollbar">
                  <div className="max-w-3xl">
                    <span className="text-ump-accent text-sm font-bold uppercase tracking-widest mb-4 block">
                      {selected.role}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                      {selected.name}
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 font-medium whitespace-pre-wrap">
                      {selected.bio}
                    </p>

                    <div className="pt-10 border-t border-white/10">
                      <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold mb-6 flex items-center gap-2">
                        <span className="w-8 h-px bg-ump-accent/30" />
                        Especialidades y Experiencia
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {selected.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="group/tag relative flex items-center gap-2 text-xs md:text-sm uppercase font-bold text-white/90 bg-white/5 border border-white/10 px-4 py-2.5 rounded-sm hover:border-ump-accent/50 transition-all duration-300"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-ump-accent shadow-[0_0_8px_rgba(50,251,0,0.6)]" />
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={closeModal}
                className="absolute top-6 right-6 md:top-8 md:right-8 z-[105] w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-black shadow-2xl hover:scale-110 active:scale-90 transition-all duration-300"
                aria-label="Cerrar biografía"
              >
                <X
                  size={28}
                  strokeWidth={2.5}
                  className="w-5 h-5 md:w-8 md:h-8"
                />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA Section — inline, sin overlap */}
      <section className="border-t border-white/5 py-24 md:py-32">
        <div className="container mx-auto px-6 text-center text-white">
          <span className="text-ump-accent text-xs font-bold uppercase tracking-widest mb-4 block">
            Próximo paso
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            ¿Tienes un proyecto
            <br className="hidden md:block" /> en mente?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Llevémoslo al siguiente nivel. Agendemos una llamada para entender
            tu visión.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-ump-accent hover:bg-ump-accentHover text-black px-10 h-14 text-base font-bold transition-colors shadow-lg shadow-ump-accent/40"
            >
              Hablemos
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black px-10 h-14 text-base transition-colors"
            >
              Ver más trabajos
            </a>
          </div>
          <p className="text-white/30 text-sm mt-10">
            O escríbenos a{" "}
            <a
              href="mailto:hello@umpmedia.com"
              className="text-white/60 hover:text-ump-accent transition-colors"
            >
              hello@umpmedia.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
