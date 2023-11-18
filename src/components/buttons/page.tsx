import Link from "next/link";
import { ClassTypes } from "@/app/layout";
import { useState } from "react";

interface ButtonLinks {
  borderColor?: string;
  className?: string;
  color1?: string;
  color2?: string;
  label: string;
  links: string;
  title: string;
}

interface RandomButton {
  children?: string;
}

export function ButtonRenas({ className }: ClassTypes) {
  return (
    <Link href={"/"} className={`${className}`}>
      <button className={`bg-reds-950 text-whites-200 rounded-md w-20 h-9 `}>
        Voltar
      </button>
    </Link>
  );
}

export function ButtonMainPage({
  links,
  title,
  label,
  color1,
  color2,
  borderColor,
}: ButtonLinks) {
  return (
    <Link href={links} className="flex flex-col text-center ">
      <div
        className={`flex flex-col w-[270px] width border-2 border-b-0 ${borderColor} rounded-t-xl p-4 `}
      >
        <span className={`text-sm`}>{label}</span>
      </div>
      <button
        className={`bg-gradient-to-bl ${color1} ${color2} rounded-b w-full h-16 text-white-100`}
      >
        {title}
      </button>
    </Link>
  );
}

export function RandomButton({ children }: RandomButton) {
  const [position, setPosition] = useState({});

  const buttonHeight = 10;
  const buttonWidth = 24;

  const handleClick = () => {
    const maxWidth = window.innerWidth - (buttonWidth + 75);
    const maxHeight = window.innerHeight - (buttonHeight + 75);
    console.log(maxWidth, maxHeight, window.innerWidth, window.innerHeight);

    const x = Math.floor(Math.random() * (maxWidth + 1)) + "px";
    const y = Math.floor(Math.random() * (maxHeight + 1)) + "px";
    setPosition({ position: "absolute", top: y, left: x });
  };

  return (
    <button
      className={` text-whites-100 bg-gradient-to-tr from-greens-900 to-greens-600  sm:hover:from-reds-950 sm:hover:to-reds-600 focus:outline-none rounded-sm w-24 h-10  text-center`}
      style={{ ...position }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default RandomButton;
