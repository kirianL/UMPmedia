"use client";

import { CTAFinal } from "@/components/sections/cta-final";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { motion } from "framer-motion";
import { RevealText } from "@/components/ui/reveal-text";

const newsArticles = {
  "produccion-puerto-viejo": {
    title: "Nueva producción documental en Puerto Viejo",
    date: "Oct 12, 2024",
    category: "Documental",
    image: "https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p class="mb-6 text-lg md:text-xl text-ump-secondary leading-relaxed font-light">Exploramos los rincones más profundos del Caribe Sur costarricense en una nueva producción documental centrada en las tradiciones de cultivo y el impacto cultural del cacao en la comunidad de Puerto Viejo.</p>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">Durante dos semanas de rodaje intenso, nuestro equipo convivió con productores locales para capturar la esencia de un proceso que va más allá de la agricultura: es un pilar de la identidad caribeña. Desde la recolección manual de las mazorcas hasta el secado tradicional, registramos cada paso en resolución 4K cinematográfica.</p>
      <h3 class="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">El Desafío en el Caribe Sur</h3>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">El principal reto de la producción fue lidiar con las condiciones climáticas cambiantes y la humedad extrema del trópico húmedo. Sin embargo, el uso de lentes anamórficos y la iluminación natural nos permitieron capturar colores vibrantes y texturas orgánicas que transmiten la magia de la selva caribeña.</p>
    `,
  },
  "lanzamiento-videoclip-caribe": {
    title: "Lanzamiento de videoclip 'Caribe'",
    date: "Sep 28, 2024",
    category: "Producción",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p class="mb-6 text-lg md:text-xl text-ump-secondary leading-relaxed font-light">En colaboración con talentosos artistas locales, presentamos oficialmente la pieza audiovisual de 'Caribe', una propuesta de video musical que fusiona la energía urbana con la exuberancia tropical caribeña.</p>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">El proyecto fue filmado íntegramente en locaciones clave de la costa limonense, utilizando contrastes de iluminación de neón nocturna sobre escenarios naturales y tradicionales del cantón. El ritmo de montaje ágil y las transiciones dinámicas buscan capturar el latido de la juventud y el sonido local.</p>
      <h3 class="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">Redefiniendo el Ritmo Visual</h3>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">El director de fotografía experimentó con tomas aéreas a baja altura y movimientos de cámara rápidos que acentúan la coreografía urbana, logrando una estética caribeña estilizada que redefine el panorama visual de la música tropical contemporánea.</p>
    `,
  },
  "workshop-iluminacion": {
    title: "Workshop: Iluminación para Cine",
    date: "Ago 15, 2024",
    category: "Educación",
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p class="mb-6 text-lg md:text-xl text-ump-secondary leading-relaxed font-light">Compartimos técnicas avanzadas de dirección de fotografía e iluminación cinematográfica en un taller gratuito impartido para la comunidad de creadores y realizadores de la provincia de Limón.</p>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">El taller abordó desde el uso de esquemas clásicos de tres puntos hasta la simulación de luces ambientales complejas y dirección de actores en relación a la luz. Los participantes tuvieron acceso práctico a equipos de nivel profesional para experimentar con el contraste, sombras y siluetas.</p>
      <h3 class="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">Fortaleciendo la Industria Local</h3>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">Nuestro objetivo es seguir capacitando y fomentando el talento local del Caribe, brindando herramientas técnicas que les permitan elevar el estándar visual de sus producciones independientes.</p>
    `,
  },
  "festival-cine": {
    title: "Ultimate Media Productions en el Festival de Cine",
    date: "Jul 02, 2024",
    category: "Noticias",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p class="mb-6 text-lg md:text-xl text-ump-secondary leading-relaxed font-light">Nos enorgullece anunciar nuestra selección oficial en el Festival Nacional de Cine con la presentación de dos cortometrajes originales producidos por nuestro equipo en Limón.</p>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">Los trabajos seleccionados narran historias humanas auténticas sobre la herencia cultural caribeña y los retos del crecimiento urbano. La postulación y aceptación en este festival de alto nivel valida nuestro esfuerzo y pasión por entregar historias cinematográficas auténticas.</p>
      <h3 class="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">Historias del Caribe en la Pantalla Grande</h3>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">Representar a nuestra provincia es una gran responsabilidad y orgullo. Seguiremos trabajando para proyectar la identidad de Limón hacia escenarios artísticos y culturales nacionales e internacionales.</p>
    `,
  },
};

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const defaultArticle = {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    date: "Oct 12, 2024",
    category: "Noticias",
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=1200&auto=format&fit=crop",
    content: `
      <p class="mb-6 text-lg md:text-xl text-ump-secondary leading-relaxed font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    `,
  };

  const article = newsArticles[slug as keyof typeof newsArticles] || defaultArticle;

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
            className="aspect-video w-full bg-neutral-900 rounded-2xl overflow-hidden mb-12 relative shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
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
            <button className="p-3 bg-ump-alt rounded-full hover:bg-ump-accent hover:text-white transition-colors text-ump-secondary">
              <Share2 size={20} />
            </button>
          </motion.div>
        </div>
      </motion.div>

      <div className="border-t border-white/10 pt-12">
        <CTAFinal />
      </div>
    </div>
  );
}
