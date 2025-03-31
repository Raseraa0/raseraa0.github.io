import Image from "next/image";
import { RefObject, useEffect, useState } from "react";
import { IParallax, ParallaxLayer } from "@react-spring/parallax";

type Props = {
  margin_bottom?: number;
  margin_side?: number;
  size?: number;
  scrollThreshold?: number;
  parallaxRef: RefObject<IParallax | null>;
};

type PropsAgain = {
  size: number;
};

function Chevron({ size }: PropsAgain) {
  return (
    <Image
      src="./chevron.svg"
      alt=""
      width={size}
      height={size}
      className="animate-pulse"
      style={{ transform: "rotateZ(90deg)" }}
    />
  );
}

function ScrollDownArrow({
  margin_side = 70,
  margin_bottom = 30,
  size = 20,
  scrollThreshold = 30,
  parallaxRef,
}: Props) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkScrollPosition = () => {
      if (parallaxRef.current) {
        const currentScrollPos = parallaxRef.current.current;
        setIsVisible(currentScrollPos < scrollThreshold);
      }
    };

    const intervalId = setInterval(checkScrollPosition, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, [scrollThreshold, parallaxRef]);

  return (

    <ParallaxLayer className="p-no-pointer-layer">
      <div
        className={`h-dvh p-fluide-anim relative ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <div
          className={`absolute`}
          style={{ bottom: margin_bottom, left: margin_side }}
        >
          <Chevron size={size} />
          <Chevron size={size} />
          <Chevron size={size} />
        </div>
        <div
          className={`absolute`}
          style={{ bottom: margin_bottom, right: margin_side }}
        >
          <Chevron size={size} />
          <Chevron size={size} />
          <Chevron size={size} />
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default ScrollDownArrow;
