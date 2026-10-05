export type PortfolioCredit = {
  role: string;
  name: string;
};

export type PortfolioGalleryItem = {
  src: string;
  alt: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  deliverables: string;
  excerpt: string;
  coverImage: string;
  videoYoutubeId?: string;
  lead: string;
  story: string[];
  credits: PortfolioCredit[];
  gallery: PortfolioGalleryItem[];
};

export const PORTFOLIO_CATEGORIES = [
  "Producción",
  "Fotografía",
  "Branding",
  "Contenido",
] as const;

export const fallbackPortfolio: PortfolioProject[] = [
  {
    slug: "buscando-al-dealer",
    title: "Buscando al dealer",
    subtitle: "Serie documental original sobre la escena urbana",
    category: "Producción",
    year: "2026",
    client: "Ultimate Media Productions",
    deliverables: "Serie web, dirección, montaje, color",
    excerpt: "Calles, códigos y relatos de la escena urbana en Costa Rica.",
    coverImage: "/portfolio/productions/BuscandoAlDealer/BusquedaDealer_TL.jpg",
    videoYoutubeId: "XvPBfqjhKP0",
    lead: "Una inmersión en las calles, códigos y realidades del movimiento urbano en Costa Rica.",
    story: [
      "El proyecto registra historias que pocas veces llegan a medios tradicionales. El tratamiento es documental, con un ritmo pensado para pantalla chica.",
      "Se rodó en locaciones reales del Caribe y de la ciudad, con audio directo y un etalonaje cálido que marca cada relato.",
    ],
    credits: [
      { role: "Producción", name: "Ultimate Media Productions" },
      { role: "Dirección", name: "Equipo UMP" },
      { role: "Fotografía", name: "Cámara y drones UMP" },
      { role: "Montaje", name: "Postproducción UMP" },
    ],
    gallery: [
      {
        src: "/portfolio/productions/BuscandoAlDealer/Galeria/BIGGI%20LOVE1.jpg.jpeg",
        alt: "Biggi Love",
      },
      {
        src: "/portfolio/productions/BuscandoAlDealer/Galeria/DEALER%201.jpg.jpeg",
        alt: "Dealer",
      },
      {
        src: "/portfolio/productions/BuscandoAlDealer/Galeria/GEMELO%201.jpg.jpeg",
        alt: "Gemelo",
      },
      {
        src: "/portfolio/productions/BuscandoAlDealer/Galeria/Kilyam.jpg.jpeg",
        alt: "Kilyam",
      },
      {
        src: "/portfolio/productions/BuscandoAlDealer/Galeria/SOLDADO.jpg.jpeg",
        alt: "Soldado",
      },
      {
        src: "/portfolio/productions/BuscandoAlDealer/Galeria/TILI.jpg.jpeg",
        alt: "Tili",
      },
    ],
  },
  {
    slug: "la-family",
    title: "La Family",
    subtitle: "Producción sobre identidad y lazos familiares",
    category: "Producción",
    year: "2026",
    client: "Ultimate Media Productions",
    deliverables: "Cortometraje, dirección, guión, postproducción",
    excerpt: "Un retrato de hermandad en el Caribe costarricense.",
    coverImage: "/portfolio/productions/LaFamily/LaFamily.jpg",
    videoYoutubeId: "ozg6sR1Qr9Y",
    lead: "Una producción sobre unión, presión y los lazos que se sostienen en el Caribe.",
    story: [
      "La Family se filmó con casting local e iluminación naturalista. El objetivo era evitar el estereotipo y quedarse con gestos concretos.",
      "La banda sonora se escribió para los puntos de quiebre, no como adorno de fondo.",
    ],
    credits: [
      { role: "Producción", name: "Ultimate Media Productions" },
      { role: "Dirección", name: "Equipo UMP" },
      { role: "Fotografía", name: "Cámara UMP" },
      { role: "Sonido", name: "Audio UMP" },
    ],
    gallery: [
      {
        src: "/portfolio/productions/LaFamily/Galeria/HERMANO%20MAYOR%202.jpg.jpeg",
        alt: "Hermano mayor",
      },
      {
        src: "/portfolio/productions/LaFamily/Galeria/HERMANO%20MENOR%201.jpg.jpeg",
        alt: "Hermano menor",
      },
      {
        src: "/portfolio/productions/LaFamily/LaFamily.jpg",
        alt: "Póster La Family",
      },
    ],
  },
  {
    slug: "sazon-colombiano",
    title: "Sazón Colombiano",
    subtitle: "Identidad visual y fotografía de marca",
    category: "Branding",
    year: "2026",
    client: "Sazón Colombiano",
    deliverables: "Marca, sistema gráfico, fotografía de producto",
    excerpt: "Identidad y fotografía para un restaurante de cocina colombiana.",
    coverImage: "/portfolio/Branding/SazonColombiano/SazonColombiano.jpeg",
    lead: "Un sistema de marca que actualiza la presencia del restaurante sin perder el origen.",
    story: [
      "El trabajo cubre menú, empaque, digital y salón. La fotografía se apoya en textura, color y luz cálida.",
    ],
    credits: [
      { role: "Branding", name: "Ultimate Media Productions" },
      { role: "Diseño", name: "Brand Studio UMP" },
      { role: "Fotografía", name: "Estudio UMP" },
    ],
    gallery: [
      {
        src: "/portfolio/Branding/SazonColombiano/image.png",
        alt: "Identidad visual",
      },
      {
        src: "/portfolio/Branding/SazonColombiano/SazonColombiano.jpeg",
        alt: "Emblema",
      },
    ],
  },
];

export function getFallbackProject(slug: string) {
  return fallbackPortfolio.find((project) => project.slug === slug) ?? null;
}
