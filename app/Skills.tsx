import { ParallaxLayer } from "@react-spring/parallax";

import Skill from "./components/Skill";
import CrossSkills from "./components/CrossSkills";

function Skills() {
  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      className="min-[600px] flex flex-col items-center"
    >
      <div className="p-fluide-anim relative m-auto flex aspect-[2/3] w-5/6 max-w-96 flex-col lg:scale-110">
        <CrossSkills />
        <div className="grid h-full w-full grid-cols-2 grid-rows-3 gap-4">
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
