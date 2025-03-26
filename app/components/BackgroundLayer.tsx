/**
 * @name BackgroundLayer
 * @description Représente une couche du background
 * positionné sur sa propre couche parallax afin 
 * de donner l'effet parallax.
 */

import { ParallaxLayer } from "@react-spring/parallax";

// Propriétés
type Props = {

  // Id à transmettre à la div enfant (pour assigner le background image)
  div_id: string;

  // Vitesse à transmettre à la couche parallax
  speed: number;
};

/**
 * Fonction principale
 * @returns 
 *      - Couche parallax qui va contenir la div à
 *        laquelle on va assigner le background image
 */
function BackgroundLayer({ div_id, speed }: Props) {
  return (
    <ParallaxLayer className="p-no-pointer-layer" offset={0} speed={speed}>
      <div className="p-background-layer" id={div_id}></div>
    </ParallaxLayer>
  );
}

export default BackgroundLayer;
