import React from "react";
import getDevToPosts from "../../../lib/getDevToPosts";

export default function page() {
  const articlesData: Promise<Article[]> = getDevToPosts();

  return (
    <>
      <div className=" ml-80">
        <h2>AAAAAAAA</h2>
        <h1>My Articles</h1>
      </div>

      <div></div>
    </>
  );
}
