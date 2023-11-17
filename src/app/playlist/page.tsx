"use client";

import FooterRenas from "@/components/footer/page";
import { Spotify } from "react-spotify-embed";
import { ButtonRenas } from "@/components/buttons/page";

export default function SpotifyRenas() {
  return (
    <main className="flex flex-col items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-greens-500 via-greens-950 to-black h-full ">
      <div className="mt-10 flex flex-col text-center gap-3 max-w-[827px]">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-bl from-honey-400 to-honey-600">
          Nossas playlists
        </h1>
        <span>
          Alguns trechos de musicas e algumas playlists que sempre ficam na
          minha cabeça e eu não consigo não lembrar em você
        </span>
      </div>
      <div className="flex flex-col gap-4 mt-10 mb-9 max-w-[827px]">
        <div className="flex gap-6">
          <div className=" text-center items-center justify-center flex flex-col">
            <Spotify
              width={400}
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
              width={400}
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
        <div>
          <Spotify
            height={152}
            wide
            link="https://open.spotify.com/track/5QtLZNLMIIr4qKkD4oeluU"
          />
          <span className="text-center flex flex-col mb-2 mt-2 text-musics-diaADia">
            "Nada a ver ficar assim sonhando separado se no fundo a gente quer o
            dia a dia lado a lado eu não vou deixar você com esse medo de se
            aproximar Pra ter um fim toda história Um dia tem que começar."
          </span>
        </div>
        <div>
          <Spotify
            wide
            height={152}
            link="https://open.spotify.com/track/3hlksXnvbKogFdPbpO9vel?si=fb868b0e27ba450c"
          />
          <span className="text-center flex flex-col mb-2 mt-2 text-musics-superbass">
            "Excuse me, you're a hell of a girl you know, I really got a thing
            for Quitauna girls I mean, sigh, sickenin' eyes I can tell that
            you're in touch with your osasquense side, uh"
          </span>
        </div>
      </div>
      <ButtonRenas />
      <FooterRenas className="text-honey-500" />
    </main>
  );
}
