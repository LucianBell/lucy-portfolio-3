import Image from "next/image";
import LBBCImage from "/public/experience-images/lbbc-cc-logo.png";

export default function LalaComponent() {
  return (
    <div>
      <a
        href="https://sites.google.com/view/bioinformaticainca/home?authuser=0"
        target="_blank"
      >
        <Image
          className=" items-center ml-[7px]"
          src={LBBCImage}
          alt="Laboratório de Bioinformática e Biologia Computacional Logo"
          width={28}
          height={28}
        />
      </a>
    </div>
  );
}
