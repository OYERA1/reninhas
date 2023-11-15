import Image from "next/image";
import cineminha from "../../../public/cineminha.jpg";
import VAMPIRO from "../../../public/VAMPIROS.jpg";
import elevador from "../../../public/elevador.jpg";
import escovas from "../../../public/escovas.jpg";
import primeiro from "../../../public/primeiravez.jpg";

export default function Fotinhas() {
  const imageClass = "flex flex-col text-center items-center ";

  return (
    <main className="flex flex-col items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blues-900 via-blues-950 to-black h-full ">
      <div className=" text-center mb-10 max-w-lg pt-10">
        <h1 className="text-4xl font-bold text-blues-100 ">Galeria</h1>
        <span className="text-sm text-blues-100">
          Nossas fotinhas de alguns dias especiais onde fui percebendo o quão eu
          gosto de você, e onde esse sentimento foi crescendo
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-2 mt-10">
          <div className={`${imageClass} rotate-12`}>
            <div className="text-center text-blues-100 max-w-sm">
              <span className="text-blues-100">14/10</span>
              <br />
              <span className="text-blues-100">
                Nossa primeira vez fazendo uma maratona de terror, aquele noite
                mesmo morrendo de sono, estava amando cada segundo ao seu lado.
              </span>
            </div>
            <Image
              alt="nois pegando um cinema"
              title="nois pegando um cinema"
              src={cineminha}
              width={500}
              className="rounded-lg"
            />
          </div>

          <div>
            <div className={`${imageClass}`}>
              <div className="text-center  max-w-md">
                <span className="text-blues-100">13/10</span>
                <br />
                <span className="text-blues-100">
                  Nós nos preparando pra enfrentar 6 horas de filmes de terror e
                  ficando muito PUTOS com o novo filme do exorcista, mas até
                  esse filme horrivel foi divertido com você do lado fazendo
                  piadinhas.
                </span>
              </div>
              <Image
                alt="vampiros lindos"
                src={VAMPIRO}
                width={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-24">
          <div className={`${imageClass} rotate-45`}>
            <Image
              alt="nois escovando os dentes"
              src={escovas}
              width={500}
              className="rounded-lg"
            />
            <div className="text-center max-w-lg max-h-fit">
              <span className="text-blues-100">
                Seu aniversário foi realmente inesquecivel, tanto por ter sido
                uma festa incrivel, quanto por todos os momentos que tivemos
                sozinhos, foi lá que tivemos aquela conversa onde eu disse que
                meu maior objetivo é te fazer se sentir amada como sempre quis e
                como sempre mereceu.
              </span>
              <br />
              <span className="text-blues-100">22/10</span>
            </div>
          </div>
          <div className="flex flex-col -rotate-12 text-center items-center mr-16">
            <Image
              alt="vampiros lindos"
              src={elevador}
              height={500}
              className="rounded-lg"
            />
            <div className="text-center max-w-lg ">
              <span className="text-blues-100">
                A primeira vez que dormimos juntos uma noite toda e a primeira
                vez na casa da sua irmã, eu tava tão tenso e você mais ainda,
                toda nervosa com seus irmãos lá, além de estar completamente
                chapada enquanto cantava super bass melhor que a propria Nicki
                Minaj.
              </span>
              <br />
              <span className="text-blues-100">22/09</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 mb-20 flex flex-col items-center max-w-lg text-center">
        <span className="text-blues-100">11/08</span>
        <Image
          src={primeiro}
          alt="Nossa primeira foto, nosso primeiro beijo"
          className="rounded-lg"
          width={400}
        />
        <span className="mt-5 text-blues-100">
          Essa foto nem precisa de legenda né? Simplesmente o dia em que tudo
          aconteceu, as vezes ainda me pergunto o que teria acontecido se algum
          de nós não tivessemos ido nesse rolê. Mas mais importante do que se
          perguntar "O que teria acontecido se não...", é se perguntar o que vai
          acontecer daqui pra frente, é olharmos um pro outro e darmos graças a
          Deus que estavamos lá, que nosso beijo encaixou e de como ficamos até
          as 4 da manhã do dia seguinte conversando sem parar.
        </span>
      </div>

      <footer className="mb-2 text-blues-100">
        Feito com ❤️ pelo seu namorado favorito!
      </footer>
    </main>
  );
}
