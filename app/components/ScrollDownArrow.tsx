import Image from "next/image";
import { RefObject, useEffect, useState } from "react";
import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import "../style/scrollDownArrow.css";

type Props = {
  margin_bottom?: number;
  margin_side?: number;
  size?: number;
  scrollThreshold?: number;
  parallaxRef: RefObject<IParallax | null>;
};

type PropsAgain = {
  size: number;
  className?: string;
};

function Chevron({ size, className = ' ' }: PropsAgain) {
  return (
    <Image
      src="./chevron.svg"
      alt=""
      width={size}
      height={size}
      className={`${className}`}
      style={{ transform: "rotateZ(90deg)" }}
    />
  );
}

function ThreeChevron({
  size,
  className = ' '
}: PropsAgain) {
  return (

    <div
      className={`absolute py-5 px-7 bottom-0 sm:py-7 sm:px-12 p-fluide-anim ${className}`}
    >
      <Chevron size={size} className="chevron-1" />
      <Chevron size={size} className="chevron-2" />
      <Chevron size={size} className="chevron-3" />
    </div>
  )
}


function ScrollDownArrow({
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
        <ThreeChevron size={size} className="left-0"/>
        <ThreeChevron size={size} className="right-0"/>
      </div>
    </ParallaxLayer>
  );
}

export default ScrollDownArrow;
