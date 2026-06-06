import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const page = Number(searchParams.get("page")) || 1;
  const pageSize = 10;

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, count, error } = await supabase
    .from("students")
    .select("*", { count: "exact" })
    .order("id")
    .range(from, to);

  if (error) {
    return NextResponse.json({ error: error.message });
  }

  return NextResponse.json({
    students: data,
    totalPages: Math.ceil(count / pageSize),
  });
}