export default async function getAllProjects() {
  const response = await fetch(
    "https://personal-api-v1.onrender.com/api/projects"
  );

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
}
