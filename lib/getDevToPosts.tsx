import React from "react";

export default async function getDevToPosts() {
  const response = await fetch(
    "https://dev.to/api/articles?username=lucianbellini",
    { cache: "no-store" }
  );

  if (!response.ok) throw new Error("Failed to fetch data.");

  return response.json();
}
