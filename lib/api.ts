import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase/types";
import { unstable_cache } from "next/cache";

// Use direct client for public static generation to avoid cookie dependency
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

type TeamMember = Database["public"]["Tables"]["team_members"]["Row"];
type NewsPost = Database["public"]["Tables"]["news"]["Row"];

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .eq("published", true)
        .order("display_order", { ascending: true });

      if (error) throw error;
      return data || [];
    },
    ["team-members"],
    { tags: ["team"], revalidate: 3600 },
  )();
};

export const getNewsPosts = async (limit = 10): Promise<NewsPost[]> => {
  return unstable_cache(
    async () => {
      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("published", true)
        .order("published_at", { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data || [];
    },
    ["news-list", limit.toString()],
    { tags: ["news"], revalidate: 3600 },
  )();
};

export const getNewsBySlug = async (
  slug: string,
  locale: "es" | "en",
): Promise<NewsPost | null> => {
  return unstable_cache(
    async () => {
      const column = locale === "es" ? "slug_es" : "slug_en";

      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq(column, slug)
        .eq("published", true)
        .single();

      if (error) return null;
      return data;
    },
    ["news-detail", slug, locale],
    { tags: ["news"], revalidate: 3600 },
  )();
};
