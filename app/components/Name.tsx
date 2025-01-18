import { ParallaxLayer } from "@react-spring/parallax";
import { Jersey_15 } from "next/font/google";

type Props = {
  speed: number;
  text: string;
};

const jersey_15 = Jersey_15({ weight: "400", subsets: ["latin"] });

function Name({ speed, text }: Props) {
  return (
    <ParallaxLayer
      offset={0}
      speed={speed}
      className="flex justify-center text-8xl"
    >
      <p className={`aniation_layer parallax translate-y-[380px] text-blue-7 ${jersey_15.className}`}>{text}</p>
    </ParallaxLayer>
  );
}

export default Name;
