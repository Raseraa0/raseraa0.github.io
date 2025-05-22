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
import texts from "@/lib/data-texts";

import img9Forest from "../public/Minimaliste/SVG_Layer/9_Forest.svg";
import img8Forest from "../public/Minimaliste/SVG_Layer/8_Forest.svg";
import img7Bridge from "../public/Minimaliste/SVG_Layer/7_Bridge.svg";
import img6Birds from "../public/Minimaliste/SVG_Layer/6_Birds.svg";
import img5Birds from "../public/Minimaliste/SVG_Layer/5_Birds.svg";
import img4Mountains from "../public/Minimaliste/SVG_Layer/4_Mountains.svg";
import img3Mountains from "../public/Minimaliste/SVG_Layer/3_Mountains.svg";
import img2Mountains from "../public/Minimaliste/SVG_Layer/2_Mountains.svg";
import img1Clouds from "../public/Minimaliste/SVG_Layer/1_Clouds.svg";
import BackgroundColor from "./BackgroundColor";

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
