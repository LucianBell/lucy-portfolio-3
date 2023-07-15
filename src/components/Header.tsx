import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";

type props = {
  openSidebarClick: () => void;
};

export default function Header({ openSidebarClick }: props) {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` fixed top-0 bg-black w-full lg:hidden md:hidden transition-opacity duration-500 border-b-2 border-color-btn-gray`}
    >
      <div className="h-[50px] m-3 my-1.5 flex justify-between items-center">
        <div>
          <h1 className=" italic">Lucian Bellini</h1>
        </div>
        <div onClick={openSidebarClick}>
          <FiMenu />
        </div>
      </div>
    </header>
  );
}
