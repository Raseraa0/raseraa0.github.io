import { fontJersey15 } from "@/lib/font";
import { cn } from "@/lib/utils";

import "../style/BackToTop.css";
import { IParallax } from "@react-spring/parallax";
import { RefObject } from "react";

type Props = {
  className?: string;
  parallaxRef: RefObject<IParallax | null>;
};

function BackToTopButton({ className = "", parallaxRef }: Props) {
  const goTop = () => {
    parallaxRef.current?.scrollTo(0);
    const section = document.getElementById("hero-page");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className={cn(
        "p-backtotop fixed top-2 right-4 lg:top-5 lg:right-10 z-50 text-blue-1 text-3xl shadow-blue-1 transition duration-200 ease-in-out hover:scale-110 lg:text-4xl active:scale-[1.2]",
        className,
        fontJersey15.className
      )}
      onClick={goTop}
    >
      Go to top
    </button>
  );
}

export default BackToTopButton;
