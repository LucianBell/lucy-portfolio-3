import React from "react";

export default async function getDevToPosts() {
  const response = await fetch(
    "https://dev.to/api/articles?username=lucianbellini&per_page=2"
  );

  if (!response.ok) throw new Error("Failed to fetch data.");

  return response.json();
}
