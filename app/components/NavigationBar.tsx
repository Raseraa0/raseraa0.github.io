import { ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15 } from "@/lib/font";

import "../style/navigationBar.css";

type Props = {
  speed: number;
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
      className={`p-navigation-bar-text text-end text-3xl text-blue-9 sm:text-4xl ${fontJersey15.className} ${className}`}
    >
      {text}
    </span>
  );
}

function NavigationBar({ speed }: Props) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ParallaxLayer
      offset={0}
      speed={speed}
      className="flex justify-end pointer-events-none"
    >
      <div
        id="navigation-bar"
        className="pointer-events-auto flex flex-col pr-4 pt-2 sm:pr-12 sm:pt-6"
      >
        <NavigationBarText
          text={"About"}
          onClick={() => scrollToSection("persona-page")}
        ></NavigationBarText>
        <NavigationBarText
          text={"Projects"}
          onClick={() => scrollToSection("projects-page")}
        ></NavigationBarText>
        <NavigationBarText
          text={"Skills"}
          onClick={() => scrollToSection("skills-page")}
        ></NavigationBarText>
      </div>
    </ParallaxLayer>
  );
}

export default NavigationBar;
