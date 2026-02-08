"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { Database } from "@/lib/supabase/types";

type NewsInsert = Database["public"]["Tables"]["news"]["Insert"];

function generateSlug(text: string) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // remove accents
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

export async function getAdminNews() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("news")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return data;
}

export async function upsertNews(data: NewsInsert) {
  const supabase = await createClient();

  // Auto-generate slugs if missing or always on create?
  // Let's ensure slugs exist.
  const slug_es = data.slug_es || generateSlug(data.title_es);
  const slug_en = data.slug_en || generateSlug(data.title_en);

  const payload = {
    ...data,
    slug_es,
    slug_en,
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase
    .from("news")
    .upsert(payload as any, { onConflict: "id" });

  if (error) {
    console.error("Upsert Error", error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/news");
  revalidatePath("/");
}

export async function deleteNews(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("news").delete().eq("id", id);

  if (error) throw new Error(error.message);
  revalidatePath("/admin/news");
}
