"use client";

import cineminha from "../../../public/cineminha.jpg";
import VAMPIRO from "../../../public/VAMPIROS.jpg";
import elevador from "../../../public/elevador.jpg";
import escovas from "../../../public/escovas.jpg";
import primeiro from "../../../public/primeiravez.jpg";
import FooterRenas from "@/components/footer/page";
import { useEffect, useState } from "react";
import { ButtonRenas } from "@/components/buttons/page";
import { PhotoRenasFirst } from "@/components/photos/page";

export default function Fotinhas() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  // Efeito que atualiza a largura da janela ao montar o componente
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Atualiza a largura da janela inicialmente
    updateWindowWidth();

    // Adiciona um ouvinte de redimensionamento da janela
    window.addEventListener("resize", updateWindowWidth);

    // Remove o ouvinte de redimensionamento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const gradientClass =
    "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]";

  return (
    <main
      className={`flex flex-col items-center flex-wrap p-2 sm:flex-nowrap sm:p-0 ${gradientClass} from-blues-700 via-blues-950 to-black`}
    >
      <div className=" text-center mb-10 max-w-lg mt-10">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-pinks-600 to-pinks-950">
          Galeria
        </h1>
        <span className="text-sm text-blues-100">
          Nossas fotinhas de alguns dias especiais onde fui percebendo o quão eu
          gosto de você, e onde esse sentimento foi crescendo
        </span>
      </div>
      <div className="flex flex-col mt-10 p-2 sm:p-0 sm:gap-2  sm:flex-row">
        <PhotoRenasFirst
          teste={true}
          modifyDiv="sm:rotate-12 gap-3 sm:gap-0"
          modify="max-w-sm"
          alt="Pegando um cineminha"
          title="Pegando um cineminha"
          date="14/10"
          label="Nossa primeira vez fazendo uma maratona de terror, aquele noite mesmo morrendo de sono, estava amando cada segundo ao seu lado."
          photos={cineminha}
        />

        <PhotoRenasFirst
          teste={true}
          modifyDiv="gap-3 mt-10 sm:gap-0 sm:mt-0"
          modify={"max-w-md "}
          alt="vampiros lindos"
          title="vampiros lindos"
          date="13/10"
          label="Nós nos preparando pra enfrentar 6 horas de filmes de terror e ficando muito PUTOS com o novo filme do exorcista, mas até esse filme horrivel foi divertido com você do lado fazendo piadinhas."
          photos={VAMPIRO}
        />
      </div>
      <div className="flex flex-col mt-10 p-2 sm:flex-row sm:gap-24">
        <PhotoRenasFirst
          teste={windowWidth && windowWidth <= 640 ? true : false}
          modifyDiv="gap-3 sm:gap-0 sm:rotate-45"
          alt="Nois escovando os dentes"
          title="Nois escovando os dentes"
          date="22/10"
          label="Seu aniversário foi realmente inesquecivel, tanto por ter sido
        uma festa incrivel, quanto por todos os momentos que tivemos
        sozinhos, foi lá que tivemos aquela conversa onde eu disse que
        meu maior objetivo é te fazer se sentir amada como sempre quis e
        como sempre mereceu."
          photos={escovas}
        />
        <PhotoRenasFirst
          teste={windowWidth && windowWidth <= 640 ? true : false}
          modifyDiv="gap-3 mt-10 sm:-rotate-12 sm:gap-0 sm:mr-16"
          alt="Nois escovando os dentes"
          title="Nois escovando os dentes"
          date="22/09"
          label="A primeira vez que dormimos juntos uma noite toda e a primeira
          vez na casa da sua irmã, eu tava tão tenso e você mais ainda,
          toda nervosa com seus irmãos lá, além de estar completamente
          chapada enquanto cantava super bass melhor que a propria Nicki
          Minaj."
          width={281}
          photos={elevador}
        />
      </div>
      <PhotoRenasFirst
        mid
        date="11/08"
        modifyDiv="max-w-lg mt-20 sm:mt-24 "
        modify="mb-10 mt-5 "
        alt="Nossa primeira foto, nosso primeiro beijo"
        title="Nossa primeira foto, nosso primeiro beijo"
        label='Essa foto nem precisa de legenda né? Simplesmente o dia em que tudo
          aconteceu, as vezes ainda me pergunto o que teria acontecido se algum
          de nós não tivessemos ido nesse rolê. Mas mais importante do que se
          perguntar "O que teria acontecido se não...", é se perguntar o que vai
          acontecer daqui pra frente, é olharmos um pro outro e darmos graças a
          Deus que estavamos lá, que nosso beijo encaixou e de como ficamos até
          as 4 da manhã do dia seguinte conversando sem parar.'
        width={
          typeof window !== "undefined" && window.innerWidth <= 650 ? 300 : 400
        }
        photos={primeiro}
      />
      <ButtonRenas />
      <FooterRenas className="text-purple-400" />
    </main>
  );
}
