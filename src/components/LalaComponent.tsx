import Image from "next/image";
import LalaImg from "/public/LALA-Vertical-Logo-RGB-FullColor.png";

export default function LalaComponent() {
  return (
    <div>
      <Image
        className=" items-center"
        src={LalaImg}
        alt="Latin American Leadership Academy Logo"
        width={38}
        height={38}
      />
    </div>
  );
}
