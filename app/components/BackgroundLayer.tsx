/**
 * @name BackgroundLayer
 * @description Représente une couche du background
 * positionné sur sa propre couche parallax afin
 * de donner l'effet parallax.
 */

import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

// Propriétés
type Props = {
  // Vitesse à transmettre à la couche parallax
  speed: number;

  path?: string;

  sky?: boolean;
};

/**
 * Fonction principale
 * @returns
 *      - Couche parallax qui va contenir la div à
 *        laquelle on va assigner le background image
 */
function BackgroundLayer({ speed, path = "", sky }: Props) {
  if (sky) {
    return (
      <ParallaxLayer className="pointer-events-none" offset={0} speed={speed}>
        <div className="h-full w-full bg-blue-1"></div>
      </ParallaxLayer>
    );
  }

  return (
    <ParallaxLayer
      className="pointer-events-none flex flex-col items-center"
      offset={0}
      speed={speed}
    >
      <div className="aspect-[1920/1080] h-full">
        <Image src={path} alt="" fill className="object-cover"></Image>
      </div>
    </ParallaxLayer>
  );
}

export default BackgroundLayer;
