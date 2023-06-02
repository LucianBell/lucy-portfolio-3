import { AiOutlineSmile, AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiTypescript,
  SiSass,
  SiExpress,
  SiTailwindcss,
  SiSpring,
} from "react-icons/si";
import { FaReact, FaNode, FaJava } from "react-icons/fa";

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
          <h3 className=" xl: mb-2 text-lg">Who am I?</h3>
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
            <ul>
              <li>
                <div>
                  <AiFillHtml5 />
                </div>
              </li>
              <li>
                <div>
                  <DiCss3 />
                </div>
              </li>
              <li>
                <div>
                  <SiJavascript />
                </div>
              </li>
              <li>
                <div>
                  <SiSass />
                </div>
              </li>
              <li>
                <div>
                  <SiTailwindcss />
                </div>
              </li>
              <li>
                <div>
                  <SiTypescript />
                </div>
              </li>
              <li>
                <div>
                  <FaReact />
                </div>
              </li>
              <li>
                <div>
                  <FaNode />
                </div>
              </li>
              <li>
                <div>
                  <SiExpress />
                </div>
              </li>
              <li>
                <div>
                  <FaJava />
                </div>
              </li>
              <li>
                <div>
                  <SiSpring />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
