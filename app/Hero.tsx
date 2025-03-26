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
      <BackgroundLayer speed={0} div_id="sky-0" />
      <BackgroundLayer speed={-1.2} div_id="clouds-1" />
      <BackgroundLayer speed={-1} div_id="mountains-2" />

      {/* Barre des réseaux sociaux */}
      <SocialMediaBar speed={-3} className={"flex"} />

      {/* Couche pour le background */}
      <BackgroundLayer speed={-0.8} div_id="mountains-3" />
      <BackgroundLayer speed={-0.6} div_id="mountains-4" />
      <BackgroundLayer speed={0.5} div_id="birds-5" />
      <BackgroundLayer speed={0.3} div_id="birds-6" />

      {/* Nom et prénom */}
      <Name
        speed={-4}
        text="Arthur Rasera"
        className="translate-y-[-20px] lg:translate-y-[-30px] text-6xl lg:text-8xl text-blue-7"
      />

      {/* Hi */}
      <Name
        speed={-2.5}
        text="Hi, I'm"
        className="translate-y-[-60px] lg:translate-y-[-80px] lg:translate-x-[-230px] text-4xl text-blue-9"
      />

      {/* Couche pour le background */}
      <BackgroundLayer speed={-0.4} div_id="bridge-7" />
      <BackgroundLayer speed={-0.2} div_id="forest-8" />
      <BackgroundLayer speed={0} div_id="forest-9" />

      {/* Fleche qui invite à scroller */}
      <ScrollDownArrow parallaxRef={parallaxRef} />
    </>
  );
}

export default Hero;
