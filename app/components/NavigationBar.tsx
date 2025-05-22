/**
 * @name Navigationbar.tsx
 * @type Component
 */

import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15 } from "@/lib/font";
import "../style/navigationBar.css";
import { RefObject } from "react";
import { cn } from "@/lib/utils";
import texts from "@/lib/data-texts";

// Propriétés de NavigationBar
type Props = {
  speed: number;
  parallaxRef: RefObject<IParallax | null>;
}; 

// Propriétés de NavigationBarText
type PropsAgain = {
  text: string;
  className?: string;
  onClick?: () => void;
};

/**
 * @NavigationBarText
 *
 * @description Texte qui va servir de lien cliquable
 * afin de renvoyer aux autre section du porte folio.
 * 
 * @param text: Texte qui sera affiché
 * @param className: Classe supplémentaire à appliquer au bouton
 * @param onClick: Fonction qui va etre réalisé lors du clique sur le texte
 * 
 */
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

/**
 * @NavigationBar
 *
 * @description Barre de navigation qui comportera des liens pour 
 * aller aux autres sections du porte folio, sur sa proche couche parallax.
 * 
 * @param speed: Vitesse à transmettre à la couche parallax
 * @param parallaxRef: Référence de l'élément global parallax
 * 
 */
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
        {/* Navigation section About */}
        <NavigationBarText
          text={texts.hero.nav.about}
          onClick={() => scrollToSection(1)}
        ></NavigationBarText>

        {/* Navigation section Projects */}
        <NavigationBarText
          text={texts.hero.nav.projects}
          onClick={() => scrollToSection(2)}
        ></NavigationBarText>

        {/* Navigation section Skills */}
        <NavigationBarText
          text={texts.hero.nav.skills}
          onClick={() => scrollToSection(3)}
        ></NavigationBarText>
      </div>
    </ParallaxLayer>
  );
}

export default NavigationBar;
