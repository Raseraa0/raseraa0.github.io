/**
 * @name Hero
 * @description Hero qui va contenir la 1ère page.
 */

import { IParallax } from "@react-spring/parallax";
import { RefObject } from "react";
import BackgroundLayer from "./components/BackgroundLayer";
import Name from "./components/Name";
import ScrollDownArrow from "./components/ScrollDownArrow";
import SocialMediaBar from "./components/SocialMediaBar";
import NavigationBar from "./components/NavigationBar";

// Propriétés
type Props = {
  // Référence du conteneur parallax
  parallaxRef: RefObject<IParallax | null>;
};

/**
 * Fonction principale
 * @returns
 *      - Les images pour l'effet parallax du background
 *      - La barre des réseaux sociaux
 *      - Mon nom, avec la mention "Hi, I'm" devant
 *      - Des fleches invitant à scroller
 */
function Hero({ parallaxRef }: Props) {
  return (
    <>
      {/* Couche pour le background */}
      <BackgroundLayer speed={0} sky />
      <BackgroundLayer
        speed={-1.2}
        path="./Minimaliste/Centered_Layer/1_Clouds.png"
      />
      <BackgroundLayer
        speed={-1}
        path="./Minimaliste/Centered_Layer/2_Mountains.png"
      />

      {/* Barre des réseaux sociaux */}
      <SocialMediaBar speed={-3} />

      {/* Couche pour le background */}
      <BackgroundLayer
        speed={-0.8}
        path="./Minimaliste/Centered_Layer/3_Mountains.png"
      />
      <BackgroundLayer
        speed={-0.6}
        path="./Minimaliste/Centered_Layer/4_Mountains.png"
      />
      <BackgroundLayer
        speed={0.5}
        path="./Minimaliste/Centered_Layer/5_Birds.png"
      />
      <BackgroundLayer
        speed={0.3}
        path="./Minimaliste/Centered_Layer/6_Birds.png"
      />

      {/* Barre de navigation */}
      <NavigationBar speed={-2} />

      {/* Hi */}
      <Name
        speed={-2.5}
        text="Hi, I'm"
        className="translate-y-[-60px] lg:translate-y-[-80px] lg:translate-x-[-230px] text-4xl text-blue-9"
      />

      {/* Nom et prénom */}
      <Name
        speed={-4}
        text="Arthur Rasera"
        className="translate-y-[-20px] lg:translate-y-[-30px] text-6xl lg:text-8xl text-blue-7"
      />

      {/* Couche pour le background */}
      <BackgroundLayer
        speed={-0.4}
        path="./Minimaliste/Centered_Layer/7_Bridge.png"
      />
      <BackgroundLayer
        speed={-0.2}
        path="./Minimaliste/Centered_Layer/8_Forest.png"
      />
      <BackgroundLayer
        speed={0}
        path="./Minimaliste/Centered_Layer/9_Forest.png"
      />

      {/* Fleche qui invite à scroller */}
      <ScrollDownArrow parallaxRef={parallaxRef} />
    </>
  );
}

export default Hero;
