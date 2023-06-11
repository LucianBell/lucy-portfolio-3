import React from "react";
import getDevToPosts from "../../../lib/getDevToPosts";
import Link from "next/link";

export default async function page() {
  const articlesData: Promise<Article[]> = getDevToPosts();

  const articles = await articlesData;

  const content =
    (console.log(articles),
    (
      <section className=" ml-72 mr-8 grid grid-cols-3 grid-rows-3 gap-4">
        {articles.map((article) => {
          return (
            <>
              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
                <div className="">
                  <img
                    src={article.cover_image}
                    alt="Project image"
                    className=" rounded-lg grayscale transition-all duration-200 hover:filter-none"
                  />
                </div>
                <div className=" p-6">
                  <h2 className=" text-2xl">{article.title}</h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>{article.created_at}</p>
                  <div className=" flex mt-3">
                    <Link
                      className=""
                      href={article.canonical_url}
                      target="_blank"
                    ></Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>
    ));

  return (
    <>
      <div className=" ml-80">
        <h2>AAAAAAAA</h2>
        <h1>My Articles</h1>
      </div>

      {console.log(articles[0])}

      <div className=" ml-80">{[content]}</div>
    </>
  );
}
