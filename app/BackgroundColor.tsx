import { ParallaxLayer } from "@react-spring/parallax";

type Props = {
  color: string;
  offset: number;
};

function BackgroundColor({ color, offset }: Props) {
  return (
    <ParallaxLayer
      offset={offset}
      className="min-h-[600px] w-full"
      style={{ backgroundColor: color }}
    ></ParallaxLayer>
  );
}

export default BackgroundColor;
