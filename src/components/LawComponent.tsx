import Image from "next/image";
import LawImg from "/public/logotipoTransparenteAdvocacia.png";

export default function LawComponent() {
  return (
    <div>
      <Image
        className=" items-center"
        src={LawImg}
        alt="Bellini Advocacia - Law Office Logo"
        width={38}
        height={38}
      />
    </div>
  );
}
