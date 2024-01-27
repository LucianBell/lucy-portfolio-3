import Image from "next/image";
import DaPazImage from "/public/education-images/Da_Paz_Logo.png";

export default function LalaComponent() {
  return (
    <div>
      <a href="https://dapaz.com.br/home" target="_blank">
        <Image
          className=" items-center"
          src={DaPazImage}
          alt="Instituto Sinodal Da Paz Logo"
          width={38}
          height={38}
        />
      </a>
    </div>
  );
}
