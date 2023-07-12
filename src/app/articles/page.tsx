import React from "react";
import getDevToPosts from "../../../lib/getDevToPosts";
import Link from "next/link";
import { MdOutlineArticle } from "react-icons/md";

export default async function page() {
  const articlesData: Promise<Article[]> = getDevToPosts();

  const articles = await articlesData;

  const content = (
    <section className=" mr-8 grid grid-cols-3 grid-rows-3 gap-4">
      {articles.map((article) => {
        const smallDate = (date: string) => {
          const correctData = date.slice(0, 10);

          return correctData;
        };

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
                <p className=" my-2 italic">
                  Posted at: {smallDate(article.published_at)}
                </p>
                <div className=" flex mt-3">
                  <Link
                    className=""
                    href={article.canonical_url}
                    target="_blank"
                  >
                    <div className=" group transition-all duration-150 px-3 py-1 rounded bg-white hover:bg-color-btn-gray">
                      <p className=" transition-all duration-150 text-lg text-color-gray group-hover:text-white">
                        Read article
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );

  return (
    <>
      <section className=" ml-80">
        <h2 className=" text-xl mt-10">Let me show you some of my...</h2>
        <div className=" flex items-center mb-8">
          <h1 className=" text-6xl">Articles</h1>
          <MdOutlineArticle className="  ml-4 p-1 text-5xl" />
        </div>

        <div className=" flex">{[content]}</div>
      </section>
    </>
  );
}
