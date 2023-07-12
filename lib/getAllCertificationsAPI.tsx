export default async function getAllCertificationsAPI() {
  const response = await fetch(
    "https://personal-api-v1.onrender.com/api/certifications",
    { cache: "no-store" }
  );

  if (!response.ok) throw new Error("Failed to fetch data");

  return response.json();
}
