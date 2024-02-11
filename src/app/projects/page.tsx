"use client";

import Image from "next/image";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { SiNounproject } from "react-icons/si";
import Link from "next/link";
import { Playfair_Display } from "@next/font/google";

const playfair_display: any = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default async function page() {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  return (
    <>
      <div className=" bg-color-black">
        <Header openSidebarClick={openSidebar} />
        <Sidebar open={sidebarOpened} onClose={closeSidebar} />
        <section className="  sm:mx-3 md:ml-64 md:my-6 smallmobile:mt-[80px] smallmobile:mx-2 smallmobile:my-3 lg:ml-72 lg:mr-30 xl:ml-80 xl:mr-32 my-10">
          <h2 className=" smallmobile:text-sm md:text-base xl:text-xl lg:text-lg text-second-title-gray">
            Let me show you some of my...
          </h2>
          <div className=" flex mb-5">
            <h1
              className={` smallmobile:text-3xl md:text-4xl lg:text-4xl xl:text-6xl ${playfair_display.variable} font-serif`}
            >
              Projects
            </h1>
            <SiNounproject className=" smallmobile:text-3xl lg:text-4xl mt-2 ml-4 xl:text-6xl" />
          </div>

          <section>
            <h3
              className={` smallmobile:text-3xl md:text-4xl lg:text-4xl xl:text-4xl ${playfair_display.variable} font-serif mb-5`}
            >
              Hackathon projects
            </h3>

            <div className=" smallmobile:grid-cols-1 smallmobile:grid smallmobile:mx-3 sm:grid sm:grid-cols-2 sm:mx-4 lg:grid lg:grid-cols-3 xl:mr-2 xl:grid xl:grid-cols-3 gap-4">
              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
                <div>
                <Image
                    src="/project-images/paleBlueDotImage.png"
                    alt="Lucian Bellini"
                    width={420}
                    height={120}
                    className=" rounded-lg transition-all duration-120 grayscale hover:grayscale-0"
                  />
                </div>
                <div className=" p-6 pt-2">
                  <h2 className=" text-2xl">
                    BeeInsightful Analytics - Pale Blue Dot Data Visualization
                  </h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>Python - Streamlit - Jupyter Notebook - CookieCutter</p>
                  <div className=" flex mt-3">
                    <Link className="" href="https://github.com/LucianBell/Data-Visualization-PaleBlueDot" target="_blank">
                      <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
              <div className="">
                <Image
                    src="/project-images/nasaSAC23.png"
                    alt="Lucian Bellini"
                    width={420}
                    height={120}
                    className=" rounded-lg transition-all duration-120 grayscale hover:grayscale-0"
                  />
                </div>
                <div className=" p-6">
                  <h2 className=" text-2xl">TARS 2023 GeoAI Reimagined - Space Apps Challenge (Global Nominee)</h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>Python - OpenCV - Numpy - Matplotlib - Meta&apos;s SAM - Google Earth Engine</p>
                  <div className=" flex mt-3">
                    <Link href="https://www.spaceappschallenge.org/2023/find-a-team/tars/?tab=project" target="_blank">
                      <FaExternalLinkSquareAlt className=" text-3xl transition-all duration-150 hover:scale-110 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3
              className={` smallmobile:text-3xl md:text-4xl lg:text-4xl xl:text-4xl ${playfair_display.variable} font-serif my-5`}
            >
              Other projects
            </h3>

            <div className=" smallmobile:grid-cols-1 smallmobile:grid smallmobile:mx-3 sm:grid sm:grid-cols-2 sm:mx-4 lg:grid lg:grid-cols-3 xl:mr-2 xl:grid xl:grid-cols-3 gap-4">
              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
              <div>
                <Image
                    src="/project-images/nextflowRNASeq.png"
                    alt="Lucian Bellini"
                    width={420}
                    height={120}
                    className=" rounded-lg transition-all duration-120 grayscale hover:grayscale-0"
                  />
                </div>
                <div className=" p-6 pt-2">
                  <h2 className=" text-2xl">RNASeq Workflow</h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>Nextflow - Python - Shell - FastQC - MultiQC - Salmon - STAR</p>
                  <div className=" flex mt-3">
                    <Link className="" href="google.com" target="_blank">
                      <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                    </Link>
                    <Link href="google.com" target="_blank">
                      <FaExternalLinkSquareAlt className=" text-3xl transition-all duration-150 hover:scale-110 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
                <div className=""></div>
                <div className=" p-6">
                  <h2 className=" text-2xl">
                    ETL Pipeline - Businesses Programing Languages
                  </h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>Jupyter Notebook - Python - Requests</p>
                  <div className=" flex mt-3">
                    <Link className="" href="google.com" target="_blank">
                      <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                    </Link>
                    <Link href="google.com" target="_blank">
                      <FaExternalLinkSquareAlt className=" text-3xl transition-all duration-150 hover:scale-110 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
                <div className=""></div>
                <div className=" p-6">
                  <h2 className=" text-2xl">
                    ETL Pipeline - Analyzing a Music Service
                  </h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>Jupyter Notebook - Python - SQL</p>
                  <div className=" flex mt-3">
                    <Link className="" href="google.com" target="_blank">
                      <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                    </Link>
                    <Link href="google.com" target="_blank">
                      <FaExternalLinkSquareAlt className=" text-3xl transition-all duration-150 hover:scale-110 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
              <div>
                <Image
                    src="/project-images/movieLens.png"
                    alt="Lucian Bellini"
                    width={420}
                    height={120}
                    className=" rounded-lg transition-all duration-120 grayscale hover:grayscale-0"
                  />
                </div>
                <div className=" p-6 pt-2">
                  <h2 className=" text-2xl">MovieLens Analysis and Visualization</h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>Python - Jupyter Notebook - Pandas - Seaborn</p>
                  <div className=" flex mt-3">
                    <Link className="" href="google.com" target="_blank">
                      <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                    </Link>
                    <Link href="google.com" target="_blank">
                      <FaExternalLinkSquareAlt className=" text-3xl transition-all duration-150 hover:scale-110 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
                <div className=""></div>
                <div className=" p-6">
                  <h2 className=" text-2xl">Lil Wrench: Colonization Adventure (Pyxel-Game)</h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>Python - Pyxel</p>
                  <div className=" flex mt-3">
                    <Link className="" href="google.com" target="_blank">
                      <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                    </Link>
                    <Link href="google.com" target="_blank">
                      <FaExternalLinkSquareAlt className=" text-3xl transition-all duration-150 hover:scale-110 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
                <div className=" p-6 pt-2">
                  <h2 className=" text-2xl">Histórias Não Contadas Website</h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>NextJS - React - Typescript - TailwindCSS</p>
                  <div className=" flex mt-3">
                    <Link className="" href="google.com" target="_blank">
                      <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                    </Link>
                    <Link href="google.com" target="_blank">
                      <FaExternalLinkSquareAlt className=" text-3xl transition-all duration-150 hover:scale-110 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
                <div className=""></div>
                <div className=" p-6">
                  <h2 className=" text-2xl">Data Pipeline - Company Merge</h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>Python - Jupyter Notebook - CSV - JSON</p>
                  <div className=" flex mt-3">
                    <Link className="" href="https://github.com/LucianBell/DataPipeline-MakeupMerging" target="_blank">
                      <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
                <div className="">
                <Image
                    src="/project-images/guessingGameC.png"
                    alt="Lucian Bellini"
                    width={420}
                    height={120}
                    className=" rounded-lg transition-all duration-120 grayscale hover:grayscale-0"
                  />
                </div>
                <div className=" p-6 pt-2">
                  <h2 className=" text-2xl">Lucy&apos;s Guessing Game</h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>C</p>
                  <div className=" flex mt-3">
                    <Link className="" href="https://github.com/LucianBell/LucysGuessingGame-C" target="_blank">
                      <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
                <div className=""></div>
                <div className=" p-6">
                  <h2 className=" text-2xl">Programming Languages II - OOP</h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>Python</p>
                  <div className=" flex mt-3">
                    <Link className="" href="https://github.com/LucianBell/Linguagem-de-Progr-II" target="_blank">
                      <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
                <div className=""></div>
                <div className=" p-6">
                  <h2 className=" text-2xl">Programming Languages I - Structural Paradigm</h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>C</p>
                  <div className=" flex mt-3">
                    <Link className="" href="https://github.com/LucianBell/Linguagem-de-Progr-I" target="_blank">
                      <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
                <div className=""></div>
                <div className=" p-6">
                  <h2 className=" text-2xl">Algorithms and Data Structures I</h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>C - JavaScript</p>
                  <div className=" flex mt-3">
                    <Link className="" href="https://github.com/LucianBell/Algoritmo-E-Estrutura-De-Dados-I" target="_blank">
                      <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" bg-color-gray border border-color-light-gray rounded-lg">
                <div className=""></div>
                <div className=" p-6">
                  <h2 className=" text-2xl">Daily Dev Motivational</h2>
                  <h3 className=" my-2">Made with:</h3>
                  <p>Spring - Java - React - Typescript - SQL - TailwindCSS</p>
                  <div className=" flex mt-3">
                    <Link className="" href="https://github.com/LucianBell/Daily-Dev-Motivational" target="_blank">
                      <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                    </Link>
                  </div>
                </div>
              </div>


            </div>
          </section>
        </section>
      </div>
    </>
  );
}
