/**
 *
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
import texts from "@/lib/data-texts";

import img_9_Forest from "../public/Minimaliste/Centered_Layer/9_Forest.png";
import img_8_Forest from "../public/Minimaliste/Centered_Layer/8_Forest.png";
import img_7_Bridge from "../public/Minimaliste/Centered_Layer/7_Bridge.png";
import img_6_Birds from "../public/Minimaliste/Centered_Layer/6_Birds.png";
import img_5_Birds from "../public/Minimaliste/Centered_Layer/5_Birds.png";
import img_4_Mountains from "../public/Minimaliste/Centered_Layer/4_Mountains.png";
import img_3_Mountains from "../public/Minimaliste/Centered_Layer/3_Mountains.png";
import img_2_Mountains from "../public/Minimaliste/Centered_Layer/2_Mountains.png";
import img_1_Clouds from "../public/Minimaliste/Centered_Layer/1_Clouds.png";

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
    <div>
      {/* Couche pour le background */}
      <BackgroundLayer speed={0} sky />
      <BackgroundLayer speed={-1.2} path={img_1_Clouds} />
      <BackgroundLayer speed={-1} path={img_2_Mountains} />

      {/* Barre des réseaux sociaux */}
      <SocialMediaBar speed={-3} />

      {/* Couche pour le background */}
      <BackgroundLayer speed={-0.8} path={img_3_Mountains} />
      <BackgroundLayer speed={-0.6} path={img_4_Mountains} />
      <BackgroundLayer speed={0.5} path={img_5_Birds} />
      <BackgroundLayer speed={0.3} path={img_6_Birds} />

      {/* Barre de navigation */}
      <NavigationBar speed={-2} parallaxRef={parallaxRef} />

      {/* Hi */}
      <Name
        speed={-2.5}
        text={texts.hero.hi}
        className="translate-y-[-60px] text-4xl text-blue-9 lg:translate-x-[-230px] lg:translate-y-[-80px]"
      />

      {/* Nom et prénom */}
      <Name
        speed={-4}
        text={texts.hero.arthur}
        className="translate-y-[-20px] text-6xl text-blue-7 lg:translate-y-[-30px] lg:text-8xl"
      />

      {/* Couche pour le background */}
      <BackgroundLayer speed={-0.4} path={img_7_Bridge} />
      <BackgroundLayer speed={-0.2} path={img_8_Forest} />
      <BackgroundLayer speed={0} path={img_9_Forest} />

      {/* Fleche qui invite à scroller */}
      <ScrollDownArrow parallaxRef={parallaxRef} />
    </div>
  );
}

export default Hero;
