import type { Metadata } from "next";
import { NewsContent } from "@/components/pages/news-content";

export const metadata: Metadata = {
  title: "Noticias y Novedades | Ultimate Media Productions",
  description:
    "Mantente al día con las últimas producciones, rodajes detrás de cámaras, proyectos y talleres creativos de Ultimate Media Productions en Limón, Costa Rica.",
};

export default function NewsPage() {
  return <NewsContent />;
}
