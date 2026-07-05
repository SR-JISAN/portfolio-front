import { IProject } from "@/lib/types";

export async function getProjects(): Promise<IProject[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-project`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}
