import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import myPokedexImage from "../../../public/project-images/myPokedexImg.png";
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
//import getAllProjects from "../../../lib/getAllProjects";
import Link from "next/link";
import Image from "next/image";
import { link } from "fs";

//export default async function page() {
//  //const [sidebarOpened, setSidebarOpened] = useState(false);
//  //
//  //const openSidebar = () => setSidebarOpened(true);
//  //const closeSidebar = () => setSidebarOpened(false);
//  //
//  const projectsData: Promise<Project[]> = getAllProjects();
//
//  const projects = await projectsData;
//
//  const myPokedexImg = myPokedexImage;
//
//  const content = (
//    <section>
//      <h2>
//        <Link href="/">Back to home</Link>
//      </h2>
//      <br />
//      {projects.map((project) => {
//        //  const isDeployed = (deployed: boolean) => {
//        //    if (deployed == true) {
//        //      return (
//        //        <>
//        //          <Link href={project.codeLink}>
//        //            <FaExternalLinkSquareAlt />
//        //          </Link>
//        //        </>
//        //      );
//        //    }
//        //  };
//
//        return (
//          <>
//            <div className=" bg-color-gray border border-color-light-gray rounded-lg">
//              <div className=" max-w-fit">
//                <img
//                  src={project.image}
//                  alt="Project image"
//                  className=" w-2/6"
//                />
//              </div>
//              <div className=" p-6">
//                <h2 className=" text-2xl">{project.title}</h2>
//                <h3 className=" my-2">Made with:</h3>
//                <p>{project.languages}</p>
//                <Link className="" href={project.codeLink} target="_blank">
//                  <AiFillGithub className=" mt-3 text-3xl transition-all duration-150 hover:scale-110" />
//                </Link>
//              </div>
//            </div>
//            <br />
//          </>
//        );
//      })}
//    </section>
//  );
//
//  return (
//    <>
//      <div className=" grid-cols-3">
//        <div className=" grid-cols-2">{[content]}</div>
//      </div>
//    </>
//  );
//}
//
