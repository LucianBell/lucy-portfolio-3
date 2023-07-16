import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import myPokedexImage from "../../../public/project-images/myPokedexImg.png";
import { SiNounproject } from "react-icons/si";
import Sidebar from "@/components/Sidebar";
import getAllProjectsAPI from "../../../lib/getAllProjectsAPI";
import Link from "next/link";

export default async function page() {
  const projectsData: Promise<Project[]> = getAllProjectsAPI();

  const projects = await projectsData;

  const myPokedexImg = myPokedexImage;

  const content = (
    <section className=" smallmobile:grid-cols-1 smallmobile:grid smallmobile:mx-3 sm:grid sm:grid-cols-2 sm:mx-4 lg:grid lg:grid-cols-3 xl:mr-2 xl:grid xl:grid-cols-3 xl:grid-rows-3 gap-4">
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
      <section className="  sm:mx-3 md:ml-64 md:my-6 smallmobile:mt-[80px] smallmobile:mx-2 smallmobile:my-3 lg:ml-72 lg:mr-30 xl:ml-80 xl:mr-32 my-10">
        <h2 className="  smallmobile:text-sm md:text-base xl:text-xl lg:text-lg">
          Let me show you some of my...
        </h2>
        <div className=" flex items-end mb-10">
          <h1 className="smallmobile:text-3xl md:text-4xl lg:text-4xl xl:text-6xl">
            Projects
          </h1>
          <SiNounproject className=" smallmobile:text-3xl lg:text-4xl ml-4 xl:text-6xl" />
        </div>
        <div className=" flex">{[content]}</div>
      </section>
    </>
  );
}
