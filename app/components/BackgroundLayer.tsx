import { ParallaxLayer } from "@react-spring/parallax";

type Props = {
  div_id: string;
  speed: number;
};

function BackgroundLayer({ div_id, speed }: Props) {
  return (
    <ParallaxLayer className="no_pointer_layer" offset={0} speed={speed}>
      <div className="animation_layer parallax " id={div_id}></div>
    </ParallaxLayer>
  );
}

export default BackgroundLayer;
