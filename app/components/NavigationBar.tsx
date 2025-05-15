import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15 } from "@/lib/font";

import "../style/navigationBar.css";
import { RefObject } from "react";

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
      className={`p-navigation-bar-text text-end text-3xl text-blue-9 lg:text-4xl ${fontJersey15.className} ${className}`}
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
        className="pointer-events-auto flex flex-col pr-4 pt-2 sm:pr-12 sm:pt-6"
      >
        <NavigationBarText
          text={"About"}
          onClick={() => scrollToSection(1)}
        ></NavigationBarText>
        <NavigationBarText
          text={"Projects"}
          onClick={() => scrollToSection(2)}
        ></NavigationBarText>
        <NavigationBarText
          text={"Skills"}
          onClick={() => scrollToSection(3)}
        ></NavigationBarText>
      </div>
    </ParallaxLayer>
  );
}

export default NavigationBar;
