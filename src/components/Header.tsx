import { FiMenu } from "react-icons/fi";

type props = {
  openSidebarClick: () => void;
};

export default function Header({ openSidebarClick }: props) {
  return (
    <header className=" fixed bg-black w-full md:hidden">
      <div className=" h-[56px] m-3 mt-1.5 flex justify-between items-center">
        <div>
          <h1>Lucian Bellini</h1>
        </div>
        <div onClick={openSidebarClick}>
          <FiMenu />
        </div>
      </div>
    </header>
  );
}
