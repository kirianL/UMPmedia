import type { Metadata } from "next";
import { newsArticles } from "@/lib/news-data";
import { NewsDetailContent } from "@/components/pages/news-detail-content";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return {};

  const cleanDesc = article.content
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);

  return {
    title: `${article.title} | Ultimate Media Productions`,
    description: cleanDesc,
    openGraph: {
      title: article.title,
      description: cleanDesc,
      type: "article",
      images: [
        {
          url: article.image,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return <NewsDetailContent article={article} />;
}
