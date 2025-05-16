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

import img9Forest from "../public/Minimaliste/Centered_Layer/9_Forest.png";
import img8Forest from "../public/Minimaliste/Centered_Layer/8_Forest.png";
import img7Bridge from "../public/Minimaliste/Centered_Layer/7_Bridge.png";
import img6Birds from "../public/Minimaliste/Centered_Layer/6_Birds.png";
import img5Birds from "../public/Minimaliste/Centered_Layer/5_Birds.png";
import img4Mountains from "../public/Minimaliste/Centered_Layer/4_Mountains.png";
import img3Mountains from "../public/Minimaliste/Centered_Layer/3_Mountains.png";
import img2Mountains from "../public/Minimaliste/Centered_Layer/2_Mountains.png";
import img1Clouds from "../public/Minimaliste/Centered_Layer/1_Clouds.png";

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
      <BackgroundLayer speed={-1.2} path={img1Clouds} />
      <BackgroundLayer speed={-1} path={img2Mountains} />

      {/* Barre des réseaux sociaux */}
      <SocialMediaBar speed={-3} />

      {/* Couche pour le background */}
      <BackgroundLayer speed={-0.8} path={img3Mountains} />
      <BackgroundLayer speed={-0.6} path={img4Mountains} />
      <BackgroundLayer speed={0.5} path={img5Birds} />
      <BackgroundLayer speed={0.3} path={img6Birds} />

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
      <BackgroundLayer speed={-0.4} path={img7Bridge} />
      <BackgroundLayer speed={-0.2} path={img8Forest} />
      <BackgroundLayer speed={0} path={img9Forest} />

      {/* Fleche qui invite à scroller */}
      <ScrollDownArrow parallaxRef={parallaxRef} />
    </div>
  );
}

export default Hero;
