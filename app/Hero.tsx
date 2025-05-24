/**
 * @name Hero.tsx
 * @type Page
 */

import { IParallax } from "@react-spring/parallax";
import { RefObject } from "react";
import BackgroundLayer from "./components/BackgroundLayer";
import Name from "./components/Name";
import ScrollDownArrow from "./components/ScrollDownArrow";
import SocialMediaBar from "./components/SocialMediaBar";
import NavigationBar from "./components/NavigationBar";

import BackgroundColor from "./components/BackgroundColor";

import img9Forest from "../public/img/background_layer/9_Forest.png";
import img8Forest from "../public/img/background_layer/8_Forest.png";
import img7Bridge from "../public/img/background_layer/7_Bridge.png";
import img6Birds from "../public/img/background_layer/6_Birds.png";
import img5Birds from "../public/img/background_layer/5_Birds.png";
import img4Mountains from "../public/img/background_layer/4_Mountains.png";
import img3Mountains from "../public/img/background_layer/3_Mountains.png";
import img2Mountains from "../public/img/background_layer/2_Mountains.png";
import img1Clouds from "../public/img/background_layer/1_Clouds.png";
import LangSwitch from "./components/LangSwitch";
import DarkSwitch from "./components/DarkSwitch";
import { useLanguage } from "./contexts/language-context";

// Propriétés
type Props = {
  parallaxRef: RefObject<IParallax | null>;
};

/**
 * @Hero
 *
 * @description Page Hero.
 *
 * @param parallaxRef: Référence de l'élément global parallax
 *
 */
function Hero({ parallaxRef }: Props) {
  // Récupération du textes
  const { texts } = useLanguage();

  return (
    <div>
      {/* Couches pour le background */}
      <BackgroundColor color="#a2fff4" offset={0} />
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

      <LangSwitch speed={-2.2} />
      {/* <DarkSwitch speed={-2.7} /> */}

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

      {/* Couches pour le background */}
      <BackgroundLayer speed={-0.4} path={img7Bridge} />
      <BackgroundLayer speed={-0.2} path={img8Forest} />
      <BackgroundLayer speed={0} path={img9Forest} />

      {/* Fleches qui invite à scroller */}
      <ScrollDownArrow parallaxRef={parallaxRef} />
    </div>
  );
}

export default Hero;
