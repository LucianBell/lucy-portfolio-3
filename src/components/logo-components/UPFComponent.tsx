import Image from "next/image";
import UPFImage from "/public/education-images/upf50-branco.png";

export default function UPFComponent() {
  return (
    <div className="mt-1">
      <a href="https://www.upf.br/" target="_blank">
        <Image
          className=" items-center"
          src={UPFImage}
          alt="Universidade de Passo Fundo's Logo"
          width={54}
          height={54}
        />
      </a>
    </div>
  );
}
