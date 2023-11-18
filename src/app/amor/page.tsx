"use client";

import RandomButton, { ButtonRenas } from "@/components/buttons/page";
import React from "react";
import gif from "../../../public/laughing.gif";
import FinishedModal from "@/components/modal/page";

import FooterRenas from "@/components/footer/page";
import { useDisclosure } from "@chakra-ui/react";

export default function Amor() {
  const gradient =
    "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]";
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <main
      className={`flex flex-col h-screen ${gradient} from-pinks-500 via-pinks-950 to-black `}
    >
      <FinishedModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <div className="flex flex-col items-center ">
        <span className="font-bold text-center text-[45px] mt-[200px] sm:text-[90px] sm:mt-[250px] md:text-[75px] md:mt-[250px] min-[540px]:mt-[350px] min-[375px]:mt-[100px] min-[414px]:mt-[300px] text-honey-600">
          AFINAL PRINCESA, VOCÊ ME AMA?
        </span>
        <div className="flex gap-10 mt-16 sm:mt-40">
          <button
            onClick={onOpen}
            className="text-whites-100 bg-gradient-to-tr from-greens-900 to-greens-600 sm:hover:bg-gradient-to-bl  focus:outline-none rounded-sm w-24 h-10  text-center "
          >
            Sim
          </button>
          <RandomButton>Não</RandomButton>
        </div>
      </div>
      <div className="flex flex-col items-center mt-auto">
        <ButtonRenas className="mb-6 min-[540px]:mb-[200px]" />
        <FooterRenas className="text-honey-600 mt-auto mb-4" />
      </div>
    </main>
  );
  {
  }
}
