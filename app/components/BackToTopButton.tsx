import { fontJersey15 } from "@/lib/font";
import { cn } from "@/lib/utils";

import "../style/BackToTop.css";
import { IParallax } from "@react-spring/parallax";
import { RefObject } from "react";
import texts from "@/lib/data-texts";

type Props = {
  className?: string;
  parallaxRef: RefObject<IParallax | null>;
};

function BackToTopButton({ className = "", parallaxRef }: Props) {
  const goTop = () => {
    parallaxRef.current?.scrollTo(0);
  };

  return (
    <button
      className={cn(
        "p-backtotop fixed right-4 top-2 z-50 text-3xl text-blue-1 shadow-blue-1 transition duration-200 ease-in-out hover:scale-110 active:scale-[1.2] lg:right-10 lg:top-5 lg:text-4xl",
        className,
        fontJersey15.className,
      )}
      onClick={goTop}
    >
      {texts.hero.navBackToTop}
    </button>
  );
}

export default BackToTopButton;
