import Image from "next/image";
import { GrClose } from "react-icons/gr";
import { GiCheckMark } from "react-icons/gi";
import { AiFillRocket } from "react-icons/ai";
import { SiNounproject } from "react-icons/si";
import { TbCertificate } from "react-icons/tb";
import { MdOutlineArticle, MdOutlineClose } from "react-icons/md";

type props = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: props) {
  const style = { color: "white" };
  return (
    <section
      className={` fixed z-30 top-0 bottom-0 right-0 text-white transition-all duration-120 ${
        open ? "w-screen bg-color-black" : "w-0"
      } md:w-[260px] md:left-0 md:bg-color-gray md:border-r-2 md:border-zinc-800 z-50`}
    >
      <div className=" p-3">
        <div>
          <div>
            <div className=" flex items-center justify-between">
              <div className=" flex gap-4 items-center">
                <a href="#">
                  <Image
                    src="/myPhoto.png"
                    alt="Lucian Bellini"
                    width={60}
                    height={60}
                    className=" border rounded-full transition-all duration-120 hover:opacity-50"
                  />
                </a>
                <div className=" block">
                  <h2 className=" font-thin text-lg">Lucian Bellini</h2>
                  <p className=" text-color-light-gray">Software Engineer</p>
                </div>
              </div>
              <div>
                <button onClick={onClose} className=" text-white">
                  <MdOutlineClose
                    width={100}
                    height={100}
                    className=" rounded p-2 text-5xl md:hidden"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className=" mt-32 p-2">
            <ul>
              <li className=" mb-10">
                <a
                  href=""
                  className=" group flex justify-between rounded-2xl p-2 font-extralight tracking-wider uppercase transition-all duration-120 hover:bg-color-btn-gray"
                >
                  <AiFillRocket className=" text-2xl transition-all duration-120 group-hover:scale-110" />{" "}
                  Experience
                </a>
              </li>
              <li className=" mb-10">
                <a
                  href=""
                  className=" group flex justify-between rounded-2xl p-2 font-extralight tracking-wider uppercase transition-all duration-120 hover:bg-color-btn-gray"
                >
                  <SiNounproject className=" text-2xl transition-all duration-120 group-hover:scale-110" />{" "}
                  Projects
                </a>
              </li>
              <li className=" mb-10">
                <a
                  href=""
                  className=" group flex justify-between rounded-2xl p-2 font-extralight tracking-wider uppercase transition-all duration-120 hover:bg-color-btn-gray"
                >
                  <TbCertificate className=" text-2xl transition-all duration-120 group-hover:scale-110" />
                  Certifications
                </a>
              </li>
              <li className=" mb-10">
                <a
                  href=""
                  className=" group flex justify-between rounded-2xl p-2 font-extralight tracking-wider uppercase transition-all duration-120 hover:bg-color-btn-gray"
                >
                  <MdOutlineArticle className=" text-2xl transition-all duration-120 group-hover:scale-110" />{" "}
                  Articles
                </a>
              </li>
              <li className=" mb-10">
                <a
                  href=""
                  className=" group flex justify-between rounded-2xl p-2 font-extralight tracking-wider uppercase transition-all duration-120 hover:bg-color-btn-gray"
                >
                  <GiCheckMark className=" text-2xl transition-all duration-120 group-hover:scale-110" />{" "}
                  Hire me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
