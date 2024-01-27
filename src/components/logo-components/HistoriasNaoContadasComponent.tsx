import Image from "next/image";
import HNCImage from "/public/experience-images/Logomarca_Amarelo.png";

export default function HistoriasNaoContadasComponent() {
  return (
    <div>
      <a href="https://historias-nao-contadas.vercel.app/" target="_blank">
        <Image
          className=" items-center"
          src={HNCImage}
          alt="Histórias Não Contadas Project Logo"
          width={40}
          height={40}
        />
      </a>
    </div>
  );
}
