import Image from "next/image";
import UofAkronImage from "/public/University_of_Akron_Logo.png";

export default function LalaComponent() {
  return (
    <div>
      <Image
        className=" items-center"
        src={UofAkronImage}
        alt="The University of Akron Logo"
        width={38}
        height={38}
      />
    </div>
  );
}
