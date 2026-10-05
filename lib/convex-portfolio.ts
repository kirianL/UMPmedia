import {
  fallbackPortfolio,
  getFallbackProject,
  type PortfolioProject,
} from "@/lib/portfolio-data";

type ConvexPortfolioCard = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  year: string;
  coverUrl: string | null;
};

type ConvexPortfolioProject = ConvexPortfolioCard & {
  client: string;
  deliverables: string;
  videoYoutubeId?: string;
  lead: string;
  story: string[];
  credits: { role: string; name: string }[];
  gallery: { src: string; alt: string }[];
};

const CONVEX_SITE =
  process.env.NEXT_PUBLIC_CONVEX_SITE_URL ||
  "https://fastidious-donkey-848.convex.site";

function cardToProject(project: ConvexPortfolioCard): PortfolioProject {
  return {
    slug: project.slug,
    title: project.title,
    subtitle: project.subtitle,
    excerpt: project.excerpt,
    category: project.category,
    year: project.year,
    client: "",
    deliverables: "",
    coverImage: project.coverUrl || "/portfolio/productions/LaFamily/LaFamily.jpg",
    lead: "",
    story: [],
    credits: [],
    gallery: [],
  };
}

function detailToProject(project: ConvexPortfolioProject): PortfolioProject {
  return {
    ...cardToProject(project),
    client: project.client,
    deliverables: project.deliverables,
    videoYoutubeId: project.videoYoutubeId,
    lead: project.lead,
    story: project.story,
    credits: project.credits,
    gallery: project.gallery,
  };
}

async function fetchConvex<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${CONVEX_SITE}${path}`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const remote = await fetchConvex<ConvexPortfolioCard[]>("/public/portfolio");
  if (!remote || remote.length === 0) {
    return fallbackPortfolio;
  }
  return remote.map(cardToProject);
}

export async function getPortfolioProject(
  slug: string,
): Promise<PortfolioProject | null> {
  const remote = await fetchConvex<ConvexPortfolioProject>(
    `/public/portfolio/${encodeURIComponent(slug)}`,
  );
  if (remote && !("error" in remote)) {
    return detailToProject(remote);
  }
  return getFallbackProject(slug);
}
