import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const page = Number(searchParams.get("page")) || 1;


  const limit = Number(searchParams.get("limit")) || 10;

  const search = searchParams.get("search") || "";

  const sortField =
    searchParams.get("sortField") || "id";

  const sortOrder =
    searchParams.get("sortOrder") || "asc";


  const from = (page - 1) * limit;
  const to = from + limit - 1;

  let query = supabase
    .from("students")
    .select("*", { count: "exact" })
    .order(sortField, {
    ascending: sortOrder === "asc",
});

  if (search) {
    query = query.ilike("name", `${search}%`);
  }

  const { data, count, error } = await query.range(from, to);

  if (error) {
    return NextResponse.json({ error: error.message });
  }

  return NextResponse.json({
    students: data,
    totalPages: Math.ceil(count / limit),
  });
}