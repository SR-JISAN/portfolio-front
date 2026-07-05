export async function getProjects() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/get-project`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const result = await res.json();

    return result.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
