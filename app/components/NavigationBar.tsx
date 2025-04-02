import { ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15 } from "@/lib/font";

import "../style/navigationBar.css"

type Props = {
    speed: number;
};

type PropsAgain = {
    text: string;
    className?: string;
};

function NavigationBarText({ text, className = "" }: PropsAgain) {
    return (
        <span
            className={`p-navigation-bar-text text-end text-3xl text-blue-9 sm:text-4xl ${fontJersey15.className} ${className}`}
        >
            {text}
        </span>
    );
}

function NavigationBar({ speed }: Props) {
    return (
        <ParallaxLayer offset={0} speed={speed} className="flex justify-end p-no-pointer-layer">
            <div id="navigation-bar" className="p-pointer-layer flex flex-col pr-4 pt-2 sm:pr-12 sm:pt-6">
                <NavigationBarText text={"About"}></NavigationBarText>
                <NavigationBarText text={"Projects"}></NavigationBarText>
                <NavigationBarText text={"Skills"}></NavigationBarText>
            </div>
        </ParallaxLayer>
    );
}

export default NavigationBar;

//    const scrollToNextSection = () => {
//     if (parallaxRef.current) {
//       const current = parallaxRef.current.current;
//       const next = Math.min(current + 1, 2 - 1);
//       parallaxRef.current.scrollTo(next);
//     }
//   };
