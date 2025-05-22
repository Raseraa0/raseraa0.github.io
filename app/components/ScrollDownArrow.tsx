/**
 * @name ScrollDownArrow.tsx
 * @type Component
 */

import Image from "next/image";
import { RefObject, useEffect, useState } from "react";
import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import "../style/scrollDownArrow.css";
import { cn } from "@/lib/utils";

import chevronImg from "../../public/chevron.svg";

// Propriétés de ScrollDownArrow
type Props = {
  margin_bottom?: number;
  margin_side?: number;
  scrollThreshold?: number;
  parallaxRef: RefObject<IParallax | null>;
};

// Propriétés de Chevron et ThreeChevron
type PropsAgain = {
  className?: string;
};

/**
 * @Chevron
 *
 * @description Simple chevron.
 *
 * @param className: Classe supplémentaire à appliquer au bouton
 *
 */
function Chevron({ className = " " }: PropsAgain) {
  return (
    <Image
      src={chevronImg}
      alt=""
      className={cn(className, "rotate-90 w-5 h-5")}
      
    />
  );
}

/**
 * @ThreeChevron
 *
 * @description Trois chevron les uns au dessus des autres.
 *
 * @param className: Classe supplémentaire à appliquer au bouton
 *
 */
function ThreeChevron({ className = " " }: PropsAgain) {
  return (
    <div
      className={cn(
        "p-fluide-anim absolute bottom-0 px-7 py-5 sm:px-12 sm:py-7",
        className,
      )}
    >
      <Chevron className="chevron-1" />
      <Chevron className="chevron-2" />
      <Chevron className="chevron-3" />
    </div>
  );
}

/**
 * @ScrollDownArrow
 * Fonction principale
 *
 * @description A droite et à gauche, en bas de l'écran, des chevrons animé
 * indique a l'utilisateur qu'il peut scroll vers le bas,
 * ces chevron disparaissent lorsque l'on quitte la 1ère page.
 *
 * @param scrollThreshold: Seuil avant que les chevrons disparaissent 
 * @param parallaxRef: Référence de l'élément global parallax
 *
 */
function ScrollDownArrow({ scrollThreshold = 30, parallaxRef }: Props) {

  // Défini si le threshold doit être visible ou pas
  const [isVisible, setIsVisible] = useState(true);

  // Exécuté uniquement au début
  useEffect(() => {
    /**
     * Check la position du scroll et set visible à true uniquement
     * si l'on ne dépasse pas le threshold.
     */
    const checkScrollPosition = () => {
      if (parallaxRef.current) {
        const currentScrollPos = parallaxRef.current.current;
        setIsVisible(currentScrollPos < scrollThreshold);
      }
    };

    // Appel cette fonction toute les secondes
    const intervalId = setInterval(checkScrollPosition, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [scrollThreshold, parallaxRef]);

  return (
    <ParallaxLayer className="pointer-events-none">
      <div
        className={cn(
          "p-fluide-anim relative h-dvh",
          isVisible ? "opacity-100" : "opacity-0",
        )}
      >
        <ThreeChevron className="left-0" />
        <ThreeChevron className="right-0" />
      </div>
    </ParallaxLayer>
  );
}

export default ScrollDownArrow;
