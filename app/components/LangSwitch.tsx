import { ParallaxLayer } from "@react-spring/parallax";
import { useLanguage } from "../contexts/language-context";
import { cn } from "@/lib/utils";

type Props = {
  speed: number;
};

function LangSwitch({ speed }: Props) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <ParallaxLayer offset={0} speed={speed} className="pointer-events-none">
      <div
        className="pointer-events-auto absolute top-40 right-2 m-px flex h-10 md:left-8 md:right-auto md:top-8 cursor-pointer flex-row items-center gap-2 rounded-full border border-blue-9 px-4 text-xl duration-300 hover:scale-110 active:scale-90 hover:bg-blue-7/20 active:border-blue-1 active:bg-blue-7/80"
        onClick={toggleLanguage}
      >
        <span
          className={cn(
            language === "en" ? "opacity-50" : "",
            "duration-200 ease-in-out",
          )}
        >
          🇫🇷
        </span>
        <div className="h-6 w-[2px] rotate-12 bg-blue-9"></div>
        <span
          className={cn(
            language === "fr" ? "opacity-50" : "",
            "duration-200 ease-in-out",
          )}
        >
          🇬🇧
        </span>
      </div>
    </ParallaxLayer>
  );
}

export default LangSwitch;
