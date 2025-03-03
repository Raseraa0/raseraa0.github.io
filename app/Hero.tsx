import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import { RefObject } from "react";
import BackgroundLayer from "./components/BackgroundLayer";
import Name from "./components/Name";
import ScrollDownArrow from "./components/ScrollDownArrow";

type Props = {
  parallaxRef: RefObject<IParallax>;
};

function Hero({ parallaxRef }: Props) {
  return (
    <>
      <BackgroundLayer speed={0} div_id="sky-0" />
      <BackgroundLayer speed={-1.2} div_id="clouds-1" />
      <BackgroundLayer speed={-1} div_id="mountains-2" />
      <BackgroundLayer speed={-0.8} div_id="mountains-3" />
      <BackgroundLayer speed={-0.6} div_id="mountains-4" />
      <BackgroundLayer speed={0.5} div_id="birds-5" />
      <BackgroundLayer speed={0.3} div_id="birds-6" />
      <Name
        speed={-4}
        text="Arthur Rasera"
        className="translate-y-[385px] text-8xl text-blue-7"
      />
      <Name
        speed={-2.5}
        text="Hi, I'm"
        className="translate-y-[360px] translate-x-[-250px] text-4xl text-blue-9"
      />
      <BackgroundLayer speed={-0.4} div_id="bridge-7" />
      <BackgroundLayer speed={-0.2} div_id="forest-8" />
      <BackgroundLayer speed={0} div_id="forest-9" />
      <ParallaxLayer>
        <ScrollDownArrow parallaxRef={parallaxRef}/>
      </ParallaxLayer>
    </>
  );
}

export default Hero;

//TODO problème avec le paralax que très grand écran, genre jsp vrm pk, il faut regler se probleme, peut etre regler en meme temps le pb sur telephone, jsp teouver qqch