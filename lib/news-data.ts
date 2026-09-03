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
    title: "Visita de la Ministra del MEIC a UMP: Impulso al Emprendimiento y la Industria Creativa en Limón",
    date: "Feb 24, 2026",
    excerpt:
      "La Ministra de Economía, Industria y Comercio (MEIC) visitó las instalaciones de Ultimate Media Productions en Limón para respaldar el modelo de negocio, la innovación audiovisual y el crecimiento de las PYMES creativas en la región.",
    slug: "visita-ministerial-desarrollo-ump",
    image: "/assets/images/Ministra.png",
    category: "Institucional",
    content: `
      <p class="mb-6 text-lg md:text-xl text-neutral-700 leading-relaxed font-light">La visita de la Ministra de Economía, Industria y Comercio (MEIC) a las instalaciones de Ultimate Media Productions (UMP) en Limón representó un respaldo institucional decisivo para el florecimiento del emprendimiento joven y la economía creativa en la provincia caribeña.</p>
      <p class="mb-6 text-base md:text-lg text-neutral-700 leading-relaxed">El encuentro permitió a la jerarca conocer de cerca la propuesta de valor de UMP, una empresa fundada y gestionada por talento joven local que demuestra la viabilidad de construir modelos de negocio rentables y sostenibles en el sector audiovisual y tecnológico fuera del Gran Área Metropolitana.</p>
      
      <h3 class="text-2xl md:text-3xl font-black text-neutral-950 mt-10 mb-4 tracking-tight">Reunión Estratégica con el MEIC y Apoyo al Emprendimiento Local</h3>
      <p class="mb-6 text-base md:text-lg text-neutral-700 leading-relaxed">Durante la sesión de trabajo, se discutieron las oportunidades y retos que enfrentan las micro, pequeñas y medianas empresas (PYMES) de base creativa en Limón. La Ministra subrayó la prioridad del MEIC de acompañar a los emprendedores que generan empleo de calidad y retienen el talento especializado en sus comunidades de origen.</p>
      <p class="mb-6 text-base md:text-lg text-neutral-700 leading-relaxed">El equipo de UMP compartió la historia de crecimiento de la productora, analizando las necesidades de acceso a instrumentos de fomento empresarial, simplificación de trámites y mecanismos que permitan a proyectos emergentes del Caribe acceder a encadenamientos con corporaciones e instituciones de escala nacional.</p>

      <h3 class="text-2xl md:text-3xl font-black text-neutral-950 mt-10 mb-4 tracking-tight">Innovación en Producción Audiovisual y Estándar Cinematográfico</h3>
      <p class="mb-6 text-base md:text-lg text-neutral-700 leading-relaxed">La comitiva ministerial recorrió las instalaciones operativas del estudio, donde se exhibieron los equipos de captura y postproducción cinematográfica en 4K y 6K RAW. Se demostró cómo UMP desarrolla piezas de video comercial, institucional y documental con estándares que compiten directamente con las grandes agencias del país.</p>
      <p class="mb-6 text-base md:text-lg text-neutral-700 leading-relaxed">Asimismo, se visitaron los sets dedicados a la producción de podcast y streaming en vivo, espacios creados para que marcas, creadores y organizaciones puedan conectar de forma auténtica y profesional con sus comunidades digitales.</p>

      <h3 class="text-2xl md:text-3xl font-black text-neutral-950 mt-10 mb-4 tracking-tight">Desarrollo de Soluciones Digitales para el Comercio y Empresas</h3>
      <p class="mb-6 text-base md:text-lg text-neutral-700 leading-relaxed">Más allá del lenguaje audiovisual, UMP expuso su vertical de soluciones digitales y desarrollo web moderno, diseñada para transformar y potenciar la presencia digital de los negocios del Caribe, facilitando su transición hacia plataformas ágiles y comercio en línea.</p>
      <p class="mb-6 text-base md:text-lg text-neutral-700 leading-relaxed">La jerarca del MEIC destacó la importancia de la digitalización como palanca de productividad y competitividad para las PYMES de la zona, valorando positivamente que existan empresas locales capaces de brindar este acompañamiento integral con criterio técnico avanzado.</p>

      <h3 class="text-2xl md:text-3xl font-black text-neutral-950 mt-10 mb-4 tracking-tight">Ruta de Fortalecimiento y Competitividad Regional</h3>
      <p class="mb-6 text-base md:text-lg text-neutral-700 leading-relaxed">Al término del encuentro, la Ministra del MEIC felicitó al equipo de UMP por su perseverancia, visión empresarial y estándar de excelencia, reiterando el compromiso del ministerio de seguir articulando sinergias que promuevan el crecimiento del ecosistema emprendedor en la provincia.</p>
      <p class="mb-6 text-base md:text-lg text-neutral-700 leading-relaxed">Para Ultimate Media Productions, esta visita consolida su rol como referente de la producción audiovisual y la innovación digital en el Caribe, reafirmando que con trabajo constante y rigor profesional es posible liderar la industria desde Limón para todo Costa Rica.</p>
    `,
  },
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
  {
    title: "Flujo de Color ACES y Postproducción Cinematográfica",
    date: "May 18, 2024",
    excerpt:
      "Cómo estandarizamos la gestión de color con DaVinci Resolve y espacios cromáticos amplios para producciones comerciales y documentales.",
    slug: "flujo-color-aces-davinci",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    category: "Producción",
    content: `
      <p class="mb-6 text-lg md:text-xl text-neutral-700 leading-relaxed font-light">En Ultimate Media Productions elevamos el estándar de postproducción integrando flujos de trabajo basados en ACES (Academy Color Encoding System) para todas nuestras entregas cinematográficas y comerciales.</p>
      <p class="mb-6 text-base md:text-lg text-neutral-700 leading-relaxed">Esta metodología nos permite conservar todo el rango dinámico capturado por nuestros sensores, garantizando fidelidad de color y consistencia visual entre diferentes cámaras y condiciones de iluminación del Caribe.</p>
    `,
  },
  {
    title: "Inauguración de nuestro nuevo Set de Podcast y Streaming",
    date: "Abr 10, 2024",
    excerpt:
      "Un espacio acústicamente acondicionado con cámaras 4K y consolas broadcast para que marcas y creadores conecten con sus audiencias.",
    slug: "nuevo-set-podcast-streaming",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
    category: "Institucional",
    content: `
      <p class="mb-6 text-lg md:text-xl text-neutral-700 leading-relaxed font-light">Abrimos las puertas a nuestro nuevo estudio dedicado a la grabación y transmisión en directo de podcasts, entrevistas y conferencias en Limón.</p>
      <p class="mb-6 text-base md:text-lg text-neutral-700 leading-relaxed">Equipado con microfonía Shure de referencia, conmutación multicanal en tiempo real e iluminación suave de alta precisión cromática, el set ofrece a empresas e instituciones la infraestructura ideal para producir contenido de primer nivel.</p>
    `,
  },
];
