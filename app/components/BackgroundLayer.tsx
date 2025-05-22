/**
 * @name BackgroundLayer.tsx
 * @type Component
 */

import { ParallaxLayer } from "@react-spring/parallax";
import Image, { StaticImageData } from "next/image";

// Propriétés
type Props = {
  speed: number;
  path?: StaticImageData;
  sky?: boolean;
};

/**
 * @BackgroundLayer 
 * Fonction principale
 *
 * @description Couche du background
 * positionné sur sa propre couche parallax afin
 * de donner l'effet parallax.
 * 
 * @param speed: Vitesse à transmettre à la couche parallax
 * @param path: Chemin static de l'image
 * @param sky: Si l'élément de backgroud en question est le ciel
 *
 * Soit il y a un path avec une image, soit il y a le ciel
 * 
 */
function BackgroundLayer({ speed, path, sky }: Props) {
  // Si c'est le ciel, on return une couleur unie
  if (sky) {
    return (
      <ParallaxLayer className="pointer-events-none" offset={0} speed={speed}>
        <div className="h-full w-full bg-blue-1"></div>
      </ParallaxLayer>
    );
  }

  // Sinon on retourne l'image
  return (
    <ParallaxLayer
      className="pointer-events-none flex flex-col items-center"
      offset={0}
      speed={speed}
    >
      <div className="aspect-[1920/1080] h-full">
        <Image src={path ?? ""} alt="" fill className="object-cover"></Image>
      </div>
    </ParallaxLayer>
  );
}

export default BackgroundLayer;
