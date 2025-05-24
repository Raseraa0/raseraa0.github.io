import { ParallaxLayer } from "@react-spring/parallax";
import Image, { StaticImageData } from "next/image";

type Props = {
  speed: number;
  path: StaticImageData;
};

function BackgroundLayer({ speed, path }: Props) {
  return (
    <ParallaxLayer
      className="pointer-events-none flex flex-col items-center"
      offset={0}
      speed={speed}
    >
      <div className="aspect-[1920/1080] h-full">
        <Image
          src={path}
          alt=""
          fill
          placeholder="blur"
          className="object-cover"
        />
      </div>
    </ParallaxLayer>
  );
}

export default BackgroundLayer;
