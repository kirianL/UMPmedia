import { newsArticles, type NewsItem } from "@/lib/news-data";

type ConvexNewsCard = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  coverUrl: string | null;
  readMinutes: number;
};

type ConvexNewsArticle = ConvexNewsCard & {
  intro: string[];
  sections: {
    title: string;
    paragraphs: string[];
    imageUrl?: string | null;
    linkUrl?: string | null;
    linkLabel?: string | null;
  }[];
  authors: { id?: string; name: string; photo?: string }[];
  teamLabel: string;
  topics: string[];
};

const CONVEX_SITE =
  process.env.NEXT_PUBLIC_CONVEX_SITE_URL ||
  "https://fastidious-donkey-848.convex.site";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatNewsDate(ymd: string) {
  const [year, month, day] = ymd.split("-").map(Number);
  if (!year || !month || !day) return ymd;
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function paragraphsToHtml(paragraphs: string[], lead = false) {
  return paragraphs
    .map((paragraph, index) => {
      const className =
        index === 0 && lead
          ? "mb-6 text-lg md:text-xl text-neutral-700 leading-relaxed font-light"
          : "mb-6 text-base md:text-lg text-neutral-700 leading-relaxed";
      return `<p class="${className}">${escapeHtml(paragraph)}</p>`;
    })
    .join("\n");
}

function articleToHtml(article: ConvexNewsArticle) {
  const intro = paragraphsToHtml(article.intro, true);
  const sections = article.sections
    .map((section) => {
      const title = section.title
        ? `<h3 class="text-2xl md:text-3xl font-black text-neutral-950 mt-10 mb-4 tracking-tight">${escapeHtml(
            section.title,
          )}</h3>`
        : "";
      const image = section.imageUrl
        ? `<figure class="my-6 overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100"><img src="${escapeHtml(
            section.imageUrl,
          )}" alt="${escapeHtml(
            section.title || "Foto de la sección",
          )}" class="w-full h-auto object-cover" /></figure>`
        : "";
      const link =
        section.linkUrl && /^https?:\/\//i.test(section.linkUrl)
          ? `<p class="mb-6"><a href="${escapeHtml(
              section.linkUrl,
            )}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 underline decoration-emerald-700/30 underline-offset-4 hover:decoration-emerald-700">${escapeHtml(
              section.linkLabel || section.linkUrl,
            )}</a></p>`
          : "";
      return `${title}\n${image}\n${paragraphsToHtml(section.paragraphs)}\n${link}`;
    })
    .join("\n");
  return [intro, sections].filter(Boolean).join("\n");
}

function cardToNewsItem(article: ConvexNewsCard): NewsItem {
  return {
    title: article.title,
    date: formatNewsDate(article.publishedAt),
    excerpt: article.excerpt,
    slug: article.slug,
    image: article.coverUrl || "/assets/Ministra.jpeg",
    category: article.category,
    content: "",
    publishedAt: article.publishedAt,
  };
}

function detailToNewsItem(article: ConvexNewsArticle): NewsItem {
  return {
    ...cardToNewsItem(article),
    content: articleToHtml(article),
    authors: article.authors,
    teamLabel: article.teamLabel,
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

export async function getNewsArticles(): Promise<NewsItem[]> {
  const remote = await fetchConvex<ConvexNewsCard[]>("/public/news");
  if (!remote || remote.length === 0) {
    return newsArticles;
  }
  return remote.map(cardToNewsItem);
}

export async function getNewsArticle(slug: string): Promise<NewsItem | null> {
  const remote = await fetchConvex<ConvexNewsArticle>(
    `/public/news/${encodeURIComponent(slug)}`,
  );
  if (remote && !("error" in remote)) {
    return detailToNewsItem(remote);
  }
  return newsArticles.find((article) => article.slug === slug) ?? null;
}
