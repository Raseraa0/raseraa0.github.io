import Image from "next/image";
import { RefObject, useEffect, useState } from "react";
import { IParallax, ParallaxLayer } from "@react-spring/parallax";
import "../style/scrollDownArrow.css";
import { cn } from "@/lib/utils";

import chevronImg from "../../public/chevron.svg";

type Props = {
  margin_bottom?: number;
  margin_side?: number;
  scrollThreshold?: number;
  parallaxRef: RefObject<IParallax | null>;
};

type PropsAgain = {
  className?: string;
};

function Chevron({ className = " " }: PropsAgain) {
  return (
    <Image
      src={chevronImg}
      alt=""
      className={cn(className, "rotate-90 w-5 h-5")}
      
    />
  );
}

function ThreeChevron({ className = " " }: PropsAgain) {
  return (
    <div
      className={cn(
        "p-fluide-anim absolute bottom-0 px-7 py-5 sm:px-12 sm:py-7",
        className,
      )}
    >
      <Chevron className="chevron-1" />
      <Chevron className="chevron-2" />
      <Chevron className="chevron-3" />
    </div>
  );
}

function ScrollDownArrow({ scrollThreshold = 30, parallaxRef }: Props) {
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
    <ParallaxLayer className="pointer-events-none">
      <div
        className={cn(
          "p-fluide-anim relative h-dvh",
          isVisible ? "opacity-100" : "opacity-0",
        )}
      >
        <ThreeChevron className="left-0" />
        <ThreeChevron className="right-0" />
      </div>
    </ParallaxLayer>
  );
}

export default ScrollDownArrow;
