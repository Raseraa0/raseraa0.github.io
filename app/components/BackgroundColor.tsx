/**
 * @name Timeline.tsx
 * @type Page
 */

import { ParallaxLayer } from "@react-spring/parallax";

// Propriétés
type Props = {
  color: string;
  offset: number;
};

/**
 * @BackgroundColor
 *
 * @description Fond de couleur uni qui va prendre tout la page, afin d'assurer
 * un fond uni quoi qu'il arrive
 * 
 * @param color: Couleur à appliquer au fond
 * @param offset: Offset à appliquer à la couche parallax
 */
function BackgroundColor({ color, offset }: Props) {
  return (
    <ParallaxLayer
      offset={offset}
      className="min-h-[600px] w-full"
      style={{ backgroundColor: color }}
    ></ParallaxLayer>
  );
}

export default BackgroundColor;
