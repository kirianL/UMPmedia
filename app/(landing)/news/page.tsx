import type { Metadata } from "next";
import { NewsContent } from "@/components/pages/news-content";
import { getNewsArticles } from "@/lib/convex-news";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Noticias y Novedades | Ultimate Media Productions",
  description:
    "Mantente al día con las últimas producciones, rodajes detrás de cámaras, proyectos y talleres creativos de Ultimate Media Productions en Limón, Costa Rica.",
};

export default async function NewsPage() {
  const articles = await getNewsArticles();
  return <NewsContent articles={articles} />;
}
