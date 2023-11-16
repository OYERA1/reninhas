"use client";

import RandomButton, { ButtonRenas } from "@/components/buttons/page";
import React from "react";
import gif from "../../../public/laughing.gif";
import FinishedModal from "@/components/modal/page";

import FooterRenas from "@/components/footer/page";
import { useDisclosure } from "@chakra-ui/react";

export default function Amor() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <main className="flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pinks-500 via-pinks-950 to-black h-screen ">
      <span className=" font-bold text-center text-[90px] mt-[250px] text-honey-600">
        AFINAL PRINCESA, VOCÊ ME AMA?
      </span>
      <div className="flex gap-10 mt-40">
        <button
          onClick={onOpen}
          className="text-whites-100 bg-gradient-to-tr from-greens-900 to-greens-600 hover:bg-gradient-to-bl  focus:outline-none rounded-sm w-24 h-10  text-center "
        >
          Sim
        </button>
        <RandomButton>Não</RandomButton>
      </div>

      <ButtonRenas className="mt-40" />
      <FooterRenas className="text-honey-600" />
      <FinishedModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </main>
  );
  {
  }
}
