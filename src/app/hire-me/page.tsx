"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsYoutube,
  BsTiktok,
  BsInstagram,
  BsFilePersonFill,
  BsWhatsapp,
} from "react-icons/bs";
import { MdOutlineLogoDev, MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { Playfair_Display } from "@next/font/google";
import Image from "next/image";

const playfair_display: any = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function page() {
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
            You are making...
          </h2>
          <div className=" flex items-center mb-8">
            <h1
              className={` smallmobile:text-3xl md:text-4xl lg:text-4xl xl:text-6xl ${playfair_display.variable} font-serif`}
            >
              The right choice
            </h1>
            <GiCheckMark className="  smallmobile:text-3xl lg:text-4xl ml-4 xl:text-6xl" />
          </div>

          <div className="">
            <h3 className=" text-2xl">Ways of contacting me</h3>

            <div className=" overflow-auto">
              <ul className=" block">
                <div className=" flex">
                  <li className=" xl: mr-2 mt-4">
                    <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                      <a href="mailto:lucianbellini1@gmail.com" target="_blank">
                        <MdEmail className="smallmobile:text-3xl lg:text-4xl xl:text-4xl mx-4" />
                      </a>
                    </div>
                  </li>
                  <li className="xl: mr-2 mt-4">
                    <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                      <a href="tel:05555999403500" target="_blank">
                        <IoCall className="smallmobile:text-3xl lg:text-4xl xl:text-4xl mx-4" />
                      </a>
                    </div>
                  </li>
                  <li className="xl: mr-2 mt-4">
                    <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                      <a href="https://wa.me/5555999403500" target="_blank">
                        <BsWhatsapp className="smallmobile:text-3xl lg:text-4xl xl:text-4xl mx-4" />
                      </a>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div className=" my-7">
            <h3 className=" text-2xl">My social media</h3>

            <div className=" overflow-auto">
              <ul className=" block">
                <div className=" flex">
                  <li className=" xl: mr-2 mt-4">
                    <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                      <a
                        href="https://www.linkedin.com/in/lucianbellini/"
                        target="_blank"
                      >
                        <BsLinkedin className="smallmobile:text-3xl lg:text-4xl xl:text-4xl mx-4" />
                      </a>
                    </div>
                  </li>
                  <li className="xl: mr-2 mt-4">
                    <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                      <a href="https://github.com/LucianBell" target="_blank">
                        <BsGithub className="smallmobile:text-3xl lg:text-4xl xl:text-4xl mx-4" />
                      </a>
                    </div>
                  </li>
                  <li className="xl: mr-2 mt-4">
                    <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                      <a href="https://dev.to/lucianbellini" target="_blank">
                        <MdOutlineLogoDev className="smallmobile:text-3xl lg:text-4xl xl:text-4xl mx-4" />
                      </a>
                    </div>
                  </li>
                  <li className="xl: mr-2 mt-4">
                    <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                      <a
                        href="https://www.youtube.com/channel/UCC8CbQPuKgjGm-QRUk8RICw"
                        target="_blank"
                      >
                        <BsYoutube className="smallmobile:text-3xl lg:text-4xl xl:text-4xl mx-4" />
                      </a>
                    </div>
                  </li>
                  <li className="xl: mr-2 mt-4">
                    <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                      <a
                        href="https://www.tiktok.com/@dev.lucy"
                        target="_blank"
                      >
                        <BsTiktok className="smallmobile:text-3xl lg:text-4xl xl:text-4xl mx-4" />
                      </a>
                    </div>
                  </li>
                  <li className="xl: mr-2 mt-4">
                    <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                      <a
                        href="https://www.instagram.com/lucianf.bellini/"
                        target="_blank"
                      >
                        <BsInstagram className="smallmobile:text-3xl lg:text-4xl xl:text-4xl mx-4" />
                      </a>
                    </div>
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src="/lucian-images/hire-me-photo.jpeg"
              alt="Lucian Bellini"
              width={350}
              height={350}
              className=" rounded-2xl border border-zinc-800"
            />
          </div>
        </section>
      </div>
    </>
  );
}
