import Image from "next/image";
import UriImage from "/public/education-images/URI_Logo.png";

export default function LalaComponent() {
  return (
    <div>
      <a href="https://san.uri.br/sites/site_novo/" target="_blank">
        <Image
          className=" items-center"
          src={UriImage}
          alt="Universidade Regional Integrada do Alto do Uruguai e Das Missões's Logo"
          width={36}
          height={36}
        />
      </a>
    </div>
  );
}
