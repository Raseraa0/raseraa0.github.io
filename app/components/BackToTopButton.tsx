import { fontJersey15 } from "@/lib/font";
import { cn } from "@/lib/utils";

import "../style/backToTop.css";
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
        "p-backtotop fixed right-0 top-0 z-50 px-4 pt-5 text-3xl text-blue-1 shadow-blue-1 transition duration-200 ease-in-out hover:scale-110 active:scale-[1.2] lg:px-12 lg:pt-9 lg:text-4xl",
        className,
        fontJersey15.className,
      )}
      onClick={goTop}
    >
      {texts.hero.nav.backToTop}
    </button>
  );
}

export default BackToTopButton;
