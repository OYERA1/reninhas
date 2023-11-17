"use client";

import Image from "next/image";
import love from "../../public/renasSite.png";
import Link from "next/link";
import FooterRenas from "@/components/footer/page";
import { ButtonMainPage } from "@/components/buttons/page";

export default function Home() {
  return (
    <main
      className="flex flex-col h-full sm:h-screen
     bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
    from-reds-900 via-reds-950 to-black items-center
    
    "
    >
      <div className="mt-8 ml-4">
        <Link href="https://instagram.com/renaspotato" target="_blank">
          <Image
            src={love}
            alt="a mais linda de todas"
            title="A mais linda de todas"
            width={400}
          />
        </Link>
      </div>
      <span className="mt-16 ">
        Ainda vou te fazer perder a aposta, princesa!
      </span>

      <div className="flex flex-col gap-16 mt-8 mb-16 sm:flex sm:flex-row m-0 sm:mb-10">
        <ButtonMainPage
          links="/fotinhas"
          title="Fotinhas"
          label="As fotos mais lindas"
          color1="from-blues-500"
          color2="to-blues-900"
          borderColor="border-blues-500"
        />
        <ButtonMainPage
          links="/playlist"
          title="Playlists"
          label="Nossas músicas"
          color1="from-green-800"
          color2="to-greens-950"
          borderColor="border-green-900"
        />
      </div>

      <div>
        <ButtonMainPage
          links="/amor"
          title="Amor?"
          label="Será que você realmente não me ama?"
          color1="from-pinks-700"
          color2="to-reds-950"
          borderColor="border-pinks-900"
        />
      </div>
      <FooterRenas className="mt-14" />
    </main>
  );
}
