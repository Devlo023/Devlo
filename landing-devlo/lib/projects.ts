import { supabase } from "./supabase";

export async function createProject(name: string) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Usuario no autenticado");
  }

  const { data, error } = await supabase
    .from("projects")
    .insert({
      name,
      user_id: user.id,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function getProjects() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}