import Image from "next/image";

interface ImageProps {
  alt?: string;
  title?: string;
  modify?: string;
  modifyDiv?: string;
  up?: boolean;
  down?: boolean;
  teste?: boolean;
  mid?: boolean;
  width?: number;
  date?: string;
  photos: any;
  label: string;
}

export function PhotoRenasFirst({
  photos,
  alt,
  title,
  date,
  label,
  modify,
  modifyDiv,
  width,
  up,
  teste,
  mid,
  down,
}: ImageProps) {
  const imageClass = "flex flex-col text-center items-center ";

  return (
    <>
      {teste == true && (
        <div className={`flex flex-col text-center items-center ${modifyDiv}`}>
          <div className={`text-center text-blues-100 ${modify}`}>
            <span className="text-blues-100">{date}</span>
            <br />
            <span className="text-blues-100">{label}</span>
          </div>
          <Image
            alt={`${alt}`}
            title={title}
            src={photos}
            width={width ? width : 500}
            className="rounded-lg"
          />
        </div>
      )}
      {mid && (
        <div className={`flex flex-col text-center items-center ${modifyDiv}`}>
          <span className="text-blues-100">{date}</span>
          <Image
            alt={`${alt}`}
            title={title}
            src={photos}
            width={width ? width : 500}
            className="rounded-lg"
          />
          <div className={`text-center text-blues-100 max-w-lg ${modify}`}>
            <span className="text-blues-100">{label}</span>
          </div>
        </div>
      )}
      {teste == false && (
        <div className={`flex flex-col text-center items-center ${modifyDiv}`}>
          <Image
            alt={`${alt}`}
            title={title}
            src={photos}
            width={width ? width : 500}
            className="rounded-lg"
          />
          <div className={`text-center text-blues-100 max-w-lg ${modify}`}>
            <span className="text-blues-100">{label}</span>
            <br />
            <span className="text-blues-100">{date}</span>
          </div>
        </div>
      )}
    </>
  );
}
