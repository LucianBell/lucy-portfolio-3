import {
  SiSpring,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGooglecloud,
  SiNumpy,
  SiJupyter,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiStreamlit,
  SiNextdotjs,
} from "react-icons/si";
import { FaNode, FaPython } from "react-icons/fa";
import { TbRobot } from "react-icons/tb";
import { Playfair_Display } from "@next/font/google";

const playfair_display: any = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export default function HomePage() {
  return (
    <>
      <div className=" bg-color-black sm:mx-3 md:ml-64 md:my-6 smallmobile:mt-[80px] smallmobile:mx-2 smallmobile:my-3 lg:ml-72 lg:mr-36 xl:ml-80 xl:mr-44 my-10">
        <h2
          className={`smallmobile:text-sm xl:text-xl lg:text-lg text-second-title-gray`}
        >
          Hello world! I am...
        </h2>
        <div className=" flex items-center">
          <h1
            className={` smallmobile:text-3xl lg:text-4xl xl:text-6xl ${playfair_display.variable} font-serif`}
          >
            Lucian Bellini
          </h1>
          <TbRobot className=" smallmobile:text-3xl lg:text-4xl xl:text-6xl ml-5 mt-1" />
        </div>

        <div className=" smallmobile:my-3 lg:my-5 bg-color-gray border-2 rounded-md border-zinc-800 xl:my-5 p-2">
          <h3
            className={` smallmobile:text-lg mb-2 lg:text-2xl xl:text-2xl ${playfair_display.variable} font-serif`}
          >
            Who am I?
          </h3>
          <p className=" lg:text-lg xl:text-lg">
            I am a talented and experienced problem-solver with a passion for AI
            and data science. With around 3 proud years of programming
            experience, I have oned my skills in tackling challenging problems
            and leveraging AI and data science to find innovative solutions.
          </p>
          <p className="  lg:text-lg xl: my-3 xl:text-lg">
            Over the years, I&apos;ve cultivated crucial skills and acquired
            certifications in the realm of data science. On the technical front,
            I bring forth a robust proficiency in various programming languages
            and tools. With expertise in Python and many of its most crucial
            libraries, I bring a robust skill set to the table. Additionally, I
            possess excellent knowledge of SQL and NoSQL databases, complemented
            by a sufficient understanding of backend development. These skills,
            when combined, make me a more versatile and valuable professional.
          </p>
          <p className=" lg:text-lg xl:text-lg">
            My primary goal revolves around crafting impactful data-driven
            solutions that enhance people&apos;s lives and transform their
            day-to-day experiences. Making a meaningful contribution to the
            world is a significant personal endeavor for me, and I am eager to
            collaborate with others in achieving this shared vision. Let&apos;s
            work together to make a positive impact and leave our mark on the
            world.
          </p>
        </div>

        <div>
          <h3
            className={` lg:text-2xl ${playfair_display.variable} font-serif`}
          >
            My Magic Tools:
          </h3>

          <div className=" overflow-auto">
            <ul className=" block">
              <div className=" flex">
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://www.python.org/" target="_blank">
                      <FaPython className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://numpy.org/" target="_blank">
                      <SiNumpy className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://jupyter.org/" target="_blank">
                      <SiJupyter className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://pandas.pydata.org/" target="_blank">
                      <SiPandas className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://scikit-learn.org/stable/" target="_blank">
                      <SiScikitlearn className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a
                      href="https://www.tensorflow.org/?hl=pt-br"
                      target="_blank"
                    >
                      <SiTensorflow className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://pytorch.org/" target="_blank">
                      <SiPytorch className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://streamlit.io/" target="_blank">
                      <SiStreamlit className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
              </div>
              <div className="flex">
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://www.mysql.com/" target="_blank">
                      <SiMysql className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://www.postgresql.org/" target="_blank">
                      <SiPostgresql className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://www.mongodb.com/" target="_blank">
                      <SiMongodb className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://spring.io/" target="_blank">
                      <SiSpring className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://nodejs.org/en" target="_blank">
                      <FaNode className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://nextjs.org/" target="_blank">
                      <SiNextdotjs className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://git-scm.com/" target="_blank">
                      <SiGit className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className="xl: mr-2 mt-4">
                  <div className="bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://cloud.google.com/" target="_blank">
                      <SiGooglecloud className="smallmobile:text-3xl lg:text-4xl xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
