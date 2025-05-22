/**
 * @name BackgroundLayer.tsx
 * @type Component
 */

import { ParallaxLayer } from "@react-spring/parallax";
import Image, { StaticImageData } from "next/image";

// Propriétés
type Props = {
  speed: number;
  path: StaticImageData;
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
 *
 */
function BackgroundLayer({ speed, path }: Props) {
  // Sinon on retourne l'image
  return (
    <ParallaxLayer
      className="pointer-events-none flex flex-col items-center"
      offset={0}
      speed={speed}
    >
      <div className="aspect-[1920/1080] h-full">
        <Image
          src={path}
          alt=""
          fill
          placeholder="blur"
          className="object-cover"
        ></Image>
      </div>
    </ParallaxLayer>
  );
}

export default BackgroundLayer;
