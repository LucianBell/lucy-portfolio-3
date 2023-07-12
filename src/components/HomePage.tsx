import { AiOutlineSmile, AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiSass,
  SiExpress,
  SiTailwindcss,
  SiSpring,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGooglecloud,
} from "react-icons/si";
import { FaReact, FaNode, FaJava } from "react-icons/fa";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className=" xl: mx-80 my-10">
        <h2 className=" xl: text-base">Hello world! I am...</h2>
        <div className=" flex items-center">
          <h1 className=" xl: text-6xl">Lucian Bellini</h1>
          <AiOutlineSmile className=" ml-4 text-6xl" />
        </div>

        <div className=" bg-color-gray border-2 rounded-md border-zinc-800 xl: my-5 p-2">
          <h3 className=" xl: mb-2 text-xl">Who am I?</h3>
          <p>
            I am a talented and experienced programmer with a passion for
            fullstack development. With around 3 proud years of programming
            experience, I have oned my skills in creating robust and scalable
            web applications.
          </p>
          <p className=" xl: my-3">
            Through this years I have developed important skills and gathered
            Certifications for both frontend and backend development. In the
            first, I proudly assure I have advanced knowledge of HTML, CSS,
            Javascript, Typescript, SCSS, Tailwind and React. In the backend, I
            am prepared to use tools such as NodeJS, Typescript and Javascript,
            Express, and, as my main option, Java and Spring. For databases, I
            am able to use SQL and NoSQL databases to create scalable
            applications. With knowledge of MySQL, PostgreSQL, and, my most used
            option, MongoDB
          </p>
          <p>
            My main focus is to create great software that changes people's life
            and their way of taking their day-to-day lives. Leaving my mark on
            the world is really important to me, so let's do that together.
          </p>
        </div>

        <div>
          <h3>Programming Languages and Tools</h3>
          <div>
            <ul className=" block">
              <div className=" flex">
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a
                      href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                      target="_blank"
                    >
                      <AiFillHtml5 className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a
                      href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                      target="_blank"
                    >
                      <DiCss3 className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a
                      href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                      target="_blank"
                    >
                      <SiJavascript className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://sass-lang.com/" target="_blank">
                      <SiSass className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://tailwindcss.com/" target="_blank">
                      <SiTailwindcss className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://www.typescriptlang.org/" target="_blank">
                      <SiTypescript className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://react.dev/" target="_blank">
                      <FaReact className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://nodejs.org/en" target="_blank">
                      <FaNode className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
              </div>
              <div className=" flex">
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://expressjs.com/" target="_blank">
                      <SiExpress className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a
                      href="https://developer.oracle.com/languages/java.html"
                      target="_blank"
                    >
                      <FaJava className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://spring.io/" target="_blank">
                      <SiSpring className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://www.mysql.com/" target="_blank">
                      <SiMysql className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://www.postgresql.org/" target="_blank">
                      <SiPostgresql className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://www.mongodb.com/" target="_blank">
                      <SiMongodb className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://git-scm.com/" target="_blank">
                      <SiGit className=" xl:text-5xl mx-4" />
                    </a>
                  </div>
                </li>
                <li className=" xl: mr-2 mt-4">
                  <div className=" bg-color-gray py-4 border-2 rounded-md border-zinc-800 transition-transform duration-100 transform hover:-translate-y-2">
                    <a href="https://cloud.google.com/" target="_blank">
                      <SiGooglecloud className=" xl:text-5xl mx-4" />
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
