import Image from "next/image";
import love from "../../public/renasSite.png";
import Link from "next/link";

export default function Home() {
  const divButton = "flex flex-col border-2 border-blues-500 rounded-t-xl p-4";
  const button = "bg-blues-500 rounded-b w-full h-16 text-white-100";

  return (
    <main className="flex flex-col h-screen w-screen bg-reds-950 items-center ">
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

      <div className="flex gap-16 mt-8">
        <Link href="/fotinhas">
          <div className={divButton}>
            <span className="text-sm">Nossas fotos mais lindas</span>
          </div>
          <button className={button}>Fotinhas</button>
        </Link>
        <Link href="/fotinhas">
          <div className={divButton}>
            <span className="text-sm">Nossas fotos mais lindas</span>
          </div>
          <button className={button}>Fotinhas</button>
        </Link>
        <Link href="/fotinhas">
          <div className={divButton}>
            <span className="text-sm">Nossas fotos mais lindas</span>
          </div>
          <button className={button}>Fotinhas</button>
        </Link>
      </div>
    </main>
  );
}
