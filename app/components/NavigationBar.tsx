import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15 } from "@/lib/font";

import "../style/navigationBar.css";
import { RefObject } from "react";
import { cn } from "@/lib/utils";
import texts from "@/lib/data-texts";

type Props = {
  speed: number;
  parallaxRef: RefObject<IParallax | null>;
};

type PropsAgain = {
  text: string;
  className?: string;
  onClick?: () => void;
};

function NavigationBarText({
  text,
  className = "",
  onClick = () => {},
}: PropsAgain) {
  return (
    <span
      onClick={onClick}
      className={cn(
        "p-navigation-bar-text px-4 py-1 text-end text-3xl text-blue-9 lg:px-12 lg:text-4xl",
        fontJersey15.className,
        className,
      )}
    >
      {text}
    </span>
  );
}

function NavigationBar({ speed, parallaxRef }: Props) {
  const scrollToSection = (sectionOffset: number) => {
    parallaxRef.current?.scrollTo(sectionOffset);
  };

  return (
    <ParallaxLayer
      offset={0}
      speed={speed}
      className="pointer-events-none flex justify-end"
    >
      <div
        id="navigation-bar"
        className="pointer-events-auto flex flex-col pt-4 lg:pt-8"
      >
        <NavigationBarText
          text={texts.hero.nav.about}
          onClick={() => scrollToSection(1)}
        ></NavigationBarText>
        <NavigationBarText
          text={texts.hero.nav.projects}
          onClick={() => scrollToSection(2)}
        ></NavigationBarText>
        <NavigationBarText
          text={texts.hero.nav.skills}
          onClick={() => scrollToSection(3)}
        ></NavigationBarText>
      </div>
    </ParallaxLayer>
  );
}

export default NavigationBar;
