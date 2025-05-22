/**
 * @Unused
 */

import { ParallaxLayer } from "@react-spring/parallax";

// import Bird from "../public/bird/bird3.svg";
// import Image from "next/image";
import Bird from "./components/Bird";
import BirdBis from "./components/BirdBis";
// import Image from "next/image";

function ElementBackground() {
  return (
    <div className="hidden lg:inline-block">
      <ParallaxLayer offset={1} speed={0.05} className="relative min-h-[600px]">
        <div className="absolute -left-44 top-20">
          <Bird color="#a2fff4" width={520} className="" />{" "}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-l from-blue-9/15 to-blue-9" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={-0.03} className="relative min-h-[600px]">
        <div className="absolute -bottom-12 right-12">
          <BirdBis color="#a2fff4" width={520} className="" />{" "}
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-blue-9/15 to-blue-9" />
        </div>
      </ParallaxLayer>

    </div>
  );
}
export default ElementBackground;
