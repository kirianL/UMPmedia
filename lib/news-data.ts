export interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image: string;
  category: string;
  content: string;
}

export const newsArticles: NewsItem[] = [
  {
    title: "Nueva producción documental en Puerto Viejo",
    date: "Oct 12, 2024",
    excerpt:
      "Un vistazo exclusivo al detrás de cámaras de nuestro último rodaje en el Caribe Sur, explorando la cultura del cacao.",
    slug: "produccion-puerto-viejo",
    image: "https://images.unsplash.com/photo-1540206395-68808572332f?q=80&w=800&auto=format&fit=crop",
    category: "Documental",
    content: `
      <p class="mb-6 text-lg md:text-xl text-ump-secondary leading-relaxed font-light">Exploramos los rincones más profundos del Caribe Sur costarricense en una nueva producción documental centrada en las tradiciones de cultivo y el impacto cultural del cacao en la comunidad de Puerto Viejo.</p>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">Durante dos semanas de rodaje intenso, nuestro equipo convivió con productores locales para capturar la esencia de un proceso que va más allá de la agricultura: es un pilar de la identidad caribeña. Desde la recolección manual de las mazorcas hasta el secado tradicional, registramos cada paso en resolución 4K cinematográfica.</p>
      <h3 class="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">El Desafío en el Caribe Sur</h3>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">El principal reto de la producción fue lidiar con las condiciones climáticas cambiantes y la humedad extrema del trópico húmedo. Sin embargo, el uso de lentes anamórficos y la iluminación natural nos permitieron capturar colores vibrantes y texturas orgánicas que transmiten la magia de la selva caribeña.</p>
    `,
  },
  {
    title: "Lanzamiento de videoclip 'Caribe'",
    date: "Sep 28, 2024",
    excerpt:
      "Colaboración con artistas locales para crear una pieza visual que redefine la estética urbana tropical.",
    slug: "lanzamiento-videoclip-caribe",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop",
    category: "Producción",
    content: `
      <p class="mb-6 text-lg md:text-xl text-ump-secondary leading-relaxed font-light">En colaboración con talentosos artistas locales, presentamos oficialmente la pieza audiovisual de 'Caribe', una propuesta de video musical que fusiona la energía urbana con la exuberancia tropical caribeña.</p>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">El proyecto fue filmado íntegramente en locaciones clave de la costa limonense, utilizando contrastes de iluminación de neón nocturna sobre escenarios naturales y tradicionales del cantón. El ritmo de montaje ágil y las transiciones dinámicas buscan capturar el latido de la juventud y el sonido local.</p>
      <h3 class="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">Redefiniendo el Ritmo Visual</h3>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">El director de fotografía experimentó con tomas aéreas a baja altura y movimientos de cámara rápidos que acentúan la coreografía urbana, logrando una estética caribeña estilizada que redefine el panorama visual de la música tropical contemporánea.</p>
    `,
  },
  {
    title: "Workshop: Iluminación para Cine",
    date: "Ago 15, 2024",
    excerpt:
      "Compartiendo técnicas avanzadas de iluminación con la comunidad creativa de Limón.",
    slug: "workshop-iluminacion",
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=800&auto=format&fit=crop",
    category: "Educación",
    content: `
      <p class="mb-6 text-lg md:text-xl text-ump-secondary leading-relaxed font-light">Compartimos técnicas avanzadas de dirección de fotografía e iluminación cinematográfica en un taller gratuito impartido para la comunidad de creadores y realizadores de la provincia de Limón.</p>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">El taller abordó desde el uso de esquemas clásicos de tres puntos hasta la simulación de luces ambientales complejas y dirección de actores en relación a la luz. Los participantes tuvieron acceso práctico a equipos de nivel profesional para experimentar con el contraste, sombras y siluetas.</p>
      <h3 class="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">Fortaleciendo la Industria Local</h3>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">Nuestro objetivo es seguir capacitando y fomentando el talento local del Caribe, brindando herramientas técnicas que les permitan elevar el estándar visual de sus producciones independientes.</p>
    `,
  },
  {
    title: "Ultimate Media Productions en el Festival de Cine",
    date: "Jul 02, 2024",
    excerpt:
      "Nuestra participación en el festival nacional con dos cortometrajes seleccionados.",
    slug: "festival-cine",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop",
    category: "Noticias",
    content: `
      <p class="mb-6 text-lg md:text-xl text-ump-secondary leading-relaxed font-light">Nos enorgullece anunciar nuestra selección oficial en el Festival Nacional de Cine con la presentación de dos cortometrajes originales producidos por nuestro equipo en Limón.</p>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">Los trabajos seleccionados narran historias humanas auténticas sobre la herencia cultural caribeña y los retos del crecimiento urbano. La postulación y aceptación en este festival de alto nivel valida nuestro esfuerzo y pasión por entregar historias cinematográficas auténticas.</p>
      <h3 class="text-2xl md:text-3xl font-bold text-white mt-10 mb-4">Historias del Caribe en la Pantalla Grande</h3>
      <p class="mb-6 text-base md:text-lg text-ump-secondary leading-relaxed">Representar a nuestra provincia es una gran responsabilidad y orgullo. Seguiremos trabajando para proyectar la identidad de Limón hacia escenarios artísticos y culturales nacionales e internacionales.</p>
    `,
  },
];
