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

export default function page() {
  return (
    <>
      <section className=" ml-80">
        <div>
          <h2>You are making...</h2>
          <h1>The right choice</h1>
        </div>

        <div>
          <h3>Need a closer look? See my curriculum</h3>
          <div className=" flex items-center group">
            <BsFilePersonFill className=" transition-all duration-150 mr-1 group-hover:scale-110" />
            <a href="" target="_blank">
              My curriculum
            </a>
          </div>
        </div>

        <div>
          <h3>Ways of contacting me</h3>
          <div className=" flex">
            <div className=" group flex items-center">
              <MdEmail className=" transition-all duration-150 mr-1 group-hover:scale-110" />
              <a href="mailto:lucianbellini1@gmail.com">Email</a>
            </div>
            <div className=" group flex items-center mx-4">
              <IoCall className=" transition-all duration-150 mr-1 group-hover:scale-110" />
              <a href="tel:05555999403500">Call me</a>
            </div>
            <div className=" flex items-center group">
              <BsWhatsapp className=" transition-all duration-150 mr-1 group-hover:scale-110" />
              <a href="https://wa.me/5555999403500" target="_blank">
                Whatsapp
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3>My social media</h3>
          <div className=" flex">
            <a
              href=""
              className=" transition-all duration-150 mr-3 hover:scale-110"
            >
              <BsLinkedin />
            </a>
            <a
              href=""
              className=" transition-all duration-150 mr-3 hover:scale-110"
            >
              <BsGithub />
            </a>
            <a
              href=""
              className=" transition-all duration-150 mr-3 hover:scale-110"
            >
              <MdOutlineLogoDev />
            </a>
            <a
              href=""
              className=" transition-all duration-150 mr-3 hover:scale-110"
            >
              <BsYoutube />
            </a>
            <a
              href=""
              className=" transition-all duration-150 mr-3 hover:scale-110"
            >
              <BsTiktok />
            </a>
            <a
              href=""
              className=" transition-all duration-150 mr-3 hover:scale-110"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
