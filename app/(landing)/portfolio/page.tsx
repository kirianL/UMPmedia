import type { Metadata } from "next";
import { PortfolioContent } from "@/components/pages/portfolio-content";

export const metadata: Metadata = {
  title: "Portafolio | Ultimate Media Productions - Producción Audiovisual",
  description:
    "Explora nuestros proyectos de producción de video, fotografía profesional y campañas digitales en Costa Rica. Narrativas visuales con identidad caribeña y alcance global.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
