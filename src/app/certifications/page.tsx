import React from "react";
import getAllCertificationsAPI from "../../../lib/getAllCertificationsAPI";

export default async function page() {
  const certificationsData: Promise<Project[]> = getAllCertificationsAPI();

  const certifications = await projectsData;

  const content = (
    <section className=" ml-72 mr-8 grid grid-cols-3 grid-rows-3 gap-4">
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
      <h2 className=" mx-72 text-xl">Let me show you some of my...</h2>
      <h1 className=" mx-72 my-3 text-7xl">Projects</h1>
      <div className=" flex">{[content]}</div>
    </>
  );
}
