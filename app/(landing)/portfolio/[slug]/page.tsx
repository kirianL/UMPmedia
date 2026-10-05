import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioDetailContent } from "@/components/pages/portfolio-detail-content";
import {
  getPortfolioProject,
  getPortfolioProjects,
} from "@/lib/convex-portfolio";

export const revalidate = 60;
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getPortfolioProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getPortfolioProject(slug);
  if (!project) return {};

  const description = (project.excerpt || project.lead || project.subtitle)
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);

  const siteUrl = "https://studios.ultimatemediaproductions.com";
  const imageUrl = project.coverImage.startsWith("http")
    ? project.coverImage
    : `${siteUrl}${project.coverImage.startsWith("/") ? "" : "/"}${project.coverImage}`;

  return {
    title: `${project.title} | Ultimate Media Productions`,
    description,
    openGraph: {
      title: project.title,
      description,
      type: "article",
      images: [{ url: imageUrl, alt: project.title }],
    },
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [project, projects] = await Promise.all([
    getPortfolioProject(slug),
    getPortfolioProjects(),
  ]);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject =
    currentIndex >= 0
      ? projects[(currentIndex + 1) % projects.length]
      : projects[0] || null;
  const next =
    nextProject && nextProject.slug !== project.slug ? nextProject : null;

  return <PortfolioDetailContent project={project} nextProject={next} />;
}
