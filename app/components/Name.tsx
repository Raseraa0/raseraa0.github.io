/**
 * @name name
 * @description Affiche un text au centre de l'écran
 */

import { fontJersey15 } from "@/lib/font";
import { ParallaxLayer } from "@react-spring/parallax";

// Propriétés
type Props = {

  // Vitesse à transmettre à la couche parallax
  speed: number;

  // Texte à afficher
  text: string;

  // Class supplémentaire
  className?: string;
};

/**
 * Fonction principale
 * @returns 
 *      - Couche parallax qui va contenir le texte
 */
function Name({ speed, text, className = '' }: Props) {
  return (
    <ParallaxLayer
      offset={0}
      speed={speed}
      className="p-no-pointer-layer flex justify-center"
    >
      <p
        className={`flex items-center transition-all duration-200 ease-in-out ${fontJersey15.className} ${className}`}
      >
        <span className="p-pointer-layer">
          {text}
        </span>
      </p>
    </ParallaxLayer>
  );
}

export default Name;
