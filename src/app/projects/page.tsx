import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import myPokedexImage from "../../../public/project-images/myPokedexImg.png";
import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import getAllProjectsAPI from "../../../lib/getAllProjectsAPI";
import Link from "next/link";

export default async function page() {
  //const [sidebarOpened, setSidebarOpened] = useState(false);
  //
  //const openSidebar = () => setSidebarOpened(true);
  //const closeSidebar = () => setSidebarOpened(false);
  //
  const projectsData: Promise<Project[]> = getAllProjectsAPI();

  const projects = await projectsData;

  const myPokedexImg = myPokedexImage;

  const content = (
    <section className=" grid grid-cols-4 grid-rows-5 gap-4">
      {projects.map((project) => {
        const isDeployed = (deployed: boolean) => {
          if (deployed == true) {
            return (
              <>
                <Link href={project.deployedLink} target="_blank">
                  <FaExternalLinkSquareAlt className=" text-3xl transition-all duration-150 hover:scale-110 ml-2" />
                </Link>
              </>
            );
          }
        };

        return (
          <>
            <div className=" bg-color-gray border border-color-light-gray rounded-lg">
              <div className="">
                <img
                  src={project.image}
                  alt="Project image"
                  className=" rounded-lg grayscale transition-all duration-200 hover:filter-none"
                />
              </div>
              <div className=" p-6">
                <h2 className=" text-2xl">{project.title}</h2>
                <h3 className=" my-2">Made with:</h3>
                <p>{project.languages}</p>
                <div className=" flex mt-3">
                  <Link className="" href={project.codeLink} target="_blank">
                    <AiFillGithub className=" text-3xl transition-all duration-150 hover:scale-110" />
                  </Link>
                  {isDeployed(project.isDeployed)}
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
      <div className=" flex">{[content]}</div>
    </>
  );
}
