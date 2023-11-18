"use client";

import FooterRenas from "@/components/footer/page";
import { Spotify } from "react-spotify-embed";
import { ButtonRenas } from "@/components/buttons/page";
import { useEffect, useState } from "react";

export default function SpotifyRenas() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const gradient =
    "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]";

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowWidth();

    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  return (
    <main
      className={`flex flex-col items-center ${gradient} from-greens-500 via-greens-950 to-black`}
    >
      <div className="mt-10 flex flex-col text-center gap-3 sm:max-w-[827px]">
        <h1 className="text-4xl font-bold text-transparent px-2 sm:p-0 bg-clip-text bg-gradient-to-bl from-honey-400 to-honey-600">
          Nossas playlists
        </h1>
        <span className="p-2 sm:p-0">
          Alguns trechos de musicas e algumas playlists que sempre ficam na
          minha cabeça e eu não consigo não lembrar em você
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-10 mb-9 max-w-[827px]">
        <div className="flex flex-col p-2 gap-6 sm:p-0 sm:flex-row">
          <div className=" text-center items-center justify-center flex flex-col">
            <Spotify
              width={windowWidth && windowWidth <= 640 ? 370 : 400}
              height={500}
              className="mb-4"
              link="https://open.spotify.com/playlist/0Y8fVZEoB5qjMm7pteczQP?si=04c862d2f3374fd2"
            />
            <span className="mt-2 text-center text-musics-renasrenas  ">
              "Eu quero ser exorcizado pela água benta desse olhar infindo que
              bom é ser fotografado as pelas retinas desses olhos lindos me
              deixe hipnotizado pra acabar de vez com essa disritmia"
            </span>
          </div>
          <div className=" text-center items-center justify-center flex flex-col">
            <Spotify
              width={windowWidth && windowWidth <= 640 ? 370 : 400}
              height={500}
              className="mb-4"
              link="https://open.spotify.com/playlist/6ceMvU8vrHgZUHbUPKSQha?si=0f19c4f675074a99"
            />
            <span className="mt-2 text-musics-nos ">
              "Pensei numa canção, meu bem Que falasse de amor, então vem cá Me
              dá um beijo, que eu quero teu cheiro grudado no meu edredom m,e
              ensino a ter paciência, ciência"
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Spotify
            width={windowWidth && windowWidth <= 640 ? 370 : 827}
            height={152}
            wide
            link="https://open.spotify.com/track/5QtLZNLMIIr4qKkD4oeluU"
          />
          <span className="text-center px-1 mt-2 sm:mb-2 sm:p-0 text-musics-diaADia">
            "Nada a ver ficar assim sonhando separado se no fundo a gente quer o
            dia a dia lado a lado eu não vou deixar você com esse medo de se
            aproximar Pra ter um fim toda história Um dia tem que começar."
          </span>
          <Spotify
            className="mt-6"
            wide
            width={windowWidth && windowWidth <= 640 ? 370 : 827}
            height={152}
            link="https://open.spotify.com/track/3hlksXnvbKogFdPbpO9vel?si=fb868b0e27ba450c"
          />
          <span className="text-center px-1 mb-2 mt-2 text-musics-superbass">
            "Excuse me, you're a hell of a girl you know, I really got a thing
            for Quitauna girls I mean, sigh, sickenin' eyes I can tell that
            you're in touch with your osasquense side, uh"
          </span>
        </div>
      </div>
      <ButtonRenas className="mb-6" />
      <FooterRenas className="text-honey-500 mb-4" />
    </main>
  );
}
