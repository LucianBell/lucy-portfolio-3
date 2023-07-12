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
import { AiOutlineSmile } from "react-icons/ai";

export default function page() {
  return (
    <>
      <section className=" ml-80">
        <h2 className=" text-xl mt-10">You are making...</h2>
        <div className=" flex items-center mb-8">
          <h1 className=" text-6xl">The right choice</h1>
          <GiCheckMark className="  ml-4 pt-2 text-5xl" />
        </div>

        <div className=" flex mb-4">
          <div className=" mr-5">
            <h3 className=" text-2xl">Ways of contacting me</h3>
            <div className=" flex">
              <div className=" group items-center">
                <a
                  href="mailto:lucianbellini1@gmail.com"
                  className=" flex items-center"
                >
                  <MdEmail className=" transition-all duration-150 mr-1 group-hover:scale-110" />
                  Email
                </a>
              </div>
              <div className=" group items-center mx-4">
                <a href="tel:05555999403500" className=" flex items-center">
                  <IoCall className=" transition-all duration-150 mr-1 group-hover:scale-110" />
                  Call me
                </a>
              </div>
              <div className=" group items-center">
                <a
                  href="https://wa.me/5555999403500"
                  target="_blank"
                  className=" flex items-center"
                >
                  <BsWhatsapp className=" transition-all duration-150 mr-1 group-hover:scale-110" />
                  Whatsapp
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className=" text-2xl">My social media</h3>
            <div className=" flex items-baseline">
              <a
                href="https://www.linkedin.com/in/lucianbellini/"
                className=" transition-all duration-150 mr-3 hover:scale-110"
                target="_blank"
              >
                <BsLinkedin className=" text-lg mt-1" />
              </a>
              <a
                href="https://github.com/LucianBell"
                className=" transition-all duration-150 mr-3 hover:scale-110"
                target="_blank"
              >
                <BsGithub className=" text-lg mt-1" />
              </a>
              <a
                href="https://dev.to/lucianbellini"
                className=" transition-all duration-150 mr-3 hover:scale-110"
                target="_blank"
              >
                <MdOutlineLogoDev className=" text-lg mt-1" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCC8CbQPuKgjGm-QRUk8RICw"
                className=" transition-all duration-150 mr-3 hover:scale-110"
                target="_blank"
              >
                <BsYoutube className=" text-lg mt-1" />
              </a>
              <a
                href="https://www.tiktok.com/@dev.lucy"
                className=" transition-all duration-150 mr-3 hover:scale-110"
                target="_blank"
              >
                <BsTiktok className=" text-lg mt-1" />
              </a>
              <a
                href="https://www.instagram.com/lucianf.bellini/"
                className=" transition-all duration-150 mr-3 hover:scale-110"
                target="_blank"
              >
                <BsInstagram className=" text-lg mt-1" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className=" items-center flex">
            <h3 className=" text-2xl mb-1">Need a closer look? I get it</h3>
            <AiOutlineSmile className=" ml-4 text-3xl" />
          </div>

          <div className=" flex items-center group">
            <a
              href="https://docs.google.com/document/d/1hHY0NvO4qRalQ3x30Paegm3qhzgM_ubvFcI_21CjmGM/edit?usp=sharing"
              target="_blank"
              className=" flex items-center"
            >
              <BsFilePersonFill className=" transition-all duration-150 mr-1 group-hover:scale-110" />
              My curriculum
            </a>
          </div>
        </div>

        <h2>The Galery of Your Future Employee</h2>
      </section>
    </>
  );
}
