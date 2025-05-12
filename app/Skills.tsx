import { ParallaxLayer } from "@react-spring/parallax";

import Skill from "./components/Skill";
import CrossSkills from "./components/CrossSkills";

function Skills() {
  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      className="flex flex-col min-[600px] bg-blue-9 items-center"
    >

      <div className=" w-5/6 aspect-[2/3] relative flex flex-col m-auto max-w-96 lg:scale-110 p-fluide-anim">
        <CrossSkills />
        <div className="grid grid-cols-2 grid-rows-3 gap-4 h-full w-full">
          <Skill id={1} />
          <Skill id={2} />
          <Skill id={3} />
          <Skill id={4} />
          <Skill id={5} />
          <Skill id={6} />
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Skills;
