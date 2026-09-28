import type { Metadata } from "next";
import { NewsDetailContent } from "@/components/pages/news-detail-content";
import { getNewsArticle, getNewsArticles } from "@/lib/convex-news";
import { notFound } from "next/navigation";

export const revalidate = 60;
export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getNewsArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticle(slug);
  if (!article) return {};

  const cleanDesc = (article.excerpt || article.content)
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);

  const siteUrl = "https://studios.ultimatemediaproductions.com";

  let ogImageUrl = article.image;
  if (article.slug === "visita-ministerial-desarrollo-ump" || ogImageUrl.includes("Ministra")) {
    ogImageUrl = "/assets/Ministra-og.jpg";
  } else if (ogImageUrl.includes("unsplash.com")) {
    ogImageUrl = ogImageUrl.split("?")[0] + "?q=85&w=1200&h=630&fit=crop&crop=faces,center&auto=format";
  }

  const absoluteImageUrl = ogImageUrl.startsWith("http")
    ? ogImageUrl
    : `${siteUrl}${ogImageUrl.startsWith("/") ? "" : "/"}${ogImageUrl}`;

  const articleUrl = `${siteUrl}/news/${article.slug}`;

  return {
    title: `${article.title} | Ultimate Media Productions`,
    description: cleanDesc,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.title,
      description: cleanDesc,
      type: "article",
      url: articleUrl,
      siteName: "Ultimate Media Productions",
      locale: "es_CR",
      images: [
        {
          url: absoluteImageUrl,
          secureUrl: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: cleanDesc,
      images: [absoluteImageUrl],
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return <NewsDetailContent article={article} />;
}
