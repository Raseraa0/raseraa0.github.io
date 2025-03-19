import { ParallaxLayer } from "@react-spring/parallax";
import { Jersey_15 } from "next/font/google";

type Props = {
  speed: number;
  text: string;
  className? : string;
};

const jersey_15 = Jersey_15({ weight: "400", subsets: ["latin"] });

function Name({ speed, text, className= '' }: Props) {
  return (
    <ParallaxLayer
      offset={0}
      speed={speed}
      className="no_pointer_layer flex justify-center"
    >
      <p
        className={`flex items-center transition-all duration-200 ease-in-out ${jersey_15.className} ${className}`}
      >
        {text}
      </p>
    </ParallaxLayer>
  );
}

export default Name;
