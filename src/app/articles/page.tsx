import React from "react";
import getDevToPosts from "../../../lib/getDevToPosts";
import Link from "next/link";
import { MdOutlineArticle } from "react-icons/md";

export default async function page() {
  const articlesData: Promise<Article[]> = getDevToPosts();

  const articles = await articlesData;

  const content = (
    <section className="  smallmobile:grid-cols-1 smallmobile:grid smallmobile:mx-3 sm:grid sm:grid-cols-2 sm:mx-4 lg:grid lg:grid-cols-3 xl:mr-2 xl:grid xl:grid-cols-3 xl:grid-rows-3 gap-4">
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
      <section className="  sm:mx-3 md:ml-64 md:my-6 smallmobile:mt-[80px] smallmobile:mx-2 smallmobile:my-3 lg:ml-72 lg:mr-30 xl:ml-80 xl:mr-32 my-10">
        <div className=" my-10">
          <h2 className=" smallmobile:text-sm md:text-base xl:text-xl lg:text-lg">
            Read some of my...
          </h2>
          <div className=" flex items-end">
            <h1 className=" smallmobile:text-3xl md:text-4xl lg:text-4xl xl:text-6xl">
              Articles
            </h1>
            <MdOutlineArticle className="  smallmobile:text-3xl smallmobile:ml-2 md:text-3xl md:ml-2 lg:text-3xl lg:ml-2 ml-4 xl:text-5xl" />
          </div>
        </div>

        <div className=" flex">{[content]}</div>
      </section>
    </>
  );
}
