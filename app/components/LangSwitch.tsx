import { ParallaxLayer } from "@react-spring/parallax";
import { useLanguage } from "../contexts/language-context";
import { cn } from "@/lib/utils";
import frFlag from "../../public/img/fr_flag.png";
import enFlag from "../../public/img/en_flag.png";
import Image from "next/image";

type Props = {
  speed: number;
};

function LangSwitch({ speed }: Props) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <ParallaxLayer offset={0} speed={speed} className="pointer-events-none">
      <div
        className="pointer-events-auto absolute right-2 top-40 m-px flex h-10 cursor-pointer flex-row items-center gap-2 rounded-full border border-blue-9 px-4 text-xl duration-300 hover:scale-110 hover:bg-blue-7/20 active:scale-90 active:border-blue-1 active:bg-blue-7/80 md:left-8 md:right-auto md:top-8"
        onClick={toggleLanguage}
      >
        <span
          className={cn(
            language === "en" ? "opacity-50" : "",
            "duration-200 ease-in-out",
          )}
        >
          <Image
            src={frFlag}
            placeholder="blur"
            alt="French flag"
            className="h-6 w-auto lg:h-8"
          />
        </span>
        <div className="h-6 w-[2px] rotate-12 bg-blue-9"></div>
        <span
          className={cn(
            language === "fr" ? "opacity-50" : "",
            "duration-200 ease-in-out",
          )}
        >
          <Image
            src={enFlag}
            placeholder="blur"
            alt="English flag"
            className="h-6 w-auto lg:h-8"
          />
        </span>
      </div>
    </ParallaxLayer>
  );
}

export default LangSwitch;
