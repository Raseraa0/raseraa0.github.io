/**
 * @name Name.tsx
 * @type Component
 */

import { fontJersey15 } from "@/lib/font";
import { cn } from "@/lib/utils";
import { ParallaxLayer } from "@react-spring/parallax";

// Propriétés
type Props = {
  speed: number;
  text: string;
  className?: string;
};

/**
 * @Name
 * Fonction principale
 *
 * @description Affiche un text au centre de l'écran sur
 * une couche parallax.
 *
 * @param speed: Vitesse à transmettre à la couche parallax
 * @param text: Texte à afficher
 * @param className: Classe supplémentaire à appliquer au bouton
 * 
 */
function Name({ speed, text, className = "" }: Props) {
  return (
    <ParallaxLayer
      offset={0}
      speed={speed}
      className="pointer-events-none flex justify-center"
    >
      <p
        className={cn(
          "flex items-center transition-all duration-200 ease-in-out",
          fontJersey15.className,
          className,
        )}
      >
        <span className="pointer-events-auto">{text}</span>
      </p>
    </ParallaxLayer>
  );
}

export default Name;
