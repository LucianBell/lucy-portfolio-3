import Image from "next/image";
import DaPazImage from "/public/Da_Paz_Logo.png";

export default function LalaComponent() {
  return (
    <div>
      <Image
        className=" items-center"
        src={DaPazImage}
        alt="Instituto Sinodal Da Paz Logo"
        width={38}
        height={38}
      />
    </div>
  );
}
