import Image from "next/image";
import UriImage from "/public/URI_Logo.png";

export default function LalaComponent() {
  return (
    <div>
      <Image
        className=" items-center"
        src={UriImage}
        alt="Latin American Leadership Academy Logo"
        width={36}
        height={36}
      />
    </div>
  );
}
