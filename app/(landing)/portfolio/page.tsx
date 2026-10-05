import type { Metadata } from "next";
import { PortfolioContent } from "@/components/pages/portfolio-content";
import { getPortfolioProjects } from "@/lib/convex-portfolio";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Portafolio | Ultimate Media Productions - Producción Audiovisual",
  description:
    "Proyectos de producción, fotografía y marca de Ultimate Media Productions en Costa Rica.",
};

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();
  return <PortfolioContent projects={projects} />;
}
