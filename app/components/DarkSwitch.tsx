"use client";

import { ParallaxLayer } from "@react-spring/parallax";
import { useTheme } from "../contexts/themes-context";
import { cn } from "@/lib/utils";

type Props = {
  speed: number;
};

function ThemeSwitch({ speed }: Props) {
  const { theme, toggleTheme } = useTheme();

  return (
    <ParallaxLayer offset={0} speed={speed} className="pointer-events-none">
      <div
        className="pointer-events-auto absolute bottom-1/3 right-[20%] -px flex h-10 cursor-pointer flex-row items-center gap-2 rounded-full border border-blue-9 px-4 text-xl duration-300 hover:scale-110 hover:bg-blue-7/20 active:scale-90 active:border-blue-1 active:bg-blue-7/80 md:left-40 md:right-auto md:bottom-auto md:top-8"
        onClick={toggleTheme}
      >
        <span
          className={cn(
            theme === "dark" ? "opacity-50" : "",
            "duration-200 ease-in-out",
          )}
        >
          ☀️
        </span>
        <div className="h-6 w-[2px] rotate-12 bg-blue-9"></div>
        <span
          className={cn(
            theme === "light" ? "opacity-50" : "",
            "duration-200 ease-in-out",
          )}
        >
          🌙
        </span>
      </div>
    </ParallaxLayer>
  );
}

export default ThemeSwitch;
