import { ParallaxLayer } from "@react-spring/parallax";

function Skills() {
  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      className="w-full h-40 border-2 border-red-700"
    ></ParallaxLayer>
  );
}

export default Skills;
