export default async function getAllProjectsAPI() {
  const response = await fetch(
    "https://personal-api-v1.onrender.com/api/projects",
    { cache: "no-store" }
  );

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
}
