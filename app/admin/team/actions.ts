"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { Database } from "@/lib/supabase/types";

type TeamMember = Database["public"]["Tables"]["team_members"]["Row"];
type TeamMemberInsert = Database["public"]["Tables"]["team_members"]["Insert"];

export async function getAdminTeamMembers() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) throw new Error(error.message);
  return data;
}

export async function upsertTeamMember(data: TeamMemberInsert) {
  const supabase = await createClient();

  const { error } = await supabase.from("team_members").upsert(data as any);

  if (error) {
    console.error("Upsert Error", error);
    throw new Error(error.message);
  }

  revalidatePath("/admin/team");
  revalidatePath("/"); // Revalidate public cache if needed
}

export async function deleteTeamMember(id: string) {
  const supabase = await createClient();

  const { error } = await supabase.from("team_members").delete().eq("id", id);

  if (error) throw new Error(error.message);
  revalidatePath("/admin/team");
}
