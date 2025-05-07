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

      <div className=" w-5/6 aspect-square relative flex flex-col m-auto">
        <CrossSkills />
        {/* TODO Mettre tout les skills associé dans les 4 catégorie ( voir si je rajoute catégorie 5 et 6 (genre abap odata sap sql) et une autre jsp ? genre outils git docker etc !!) */}
        {/* Mettre ca dans le data skills pour plus de modularité */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full w-full">
          <Skill title="Artificial Intelligence" />
          <Skill title="Web development" />
          <Skill title="Low-level development" />
          <Skill title="Java" />
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Skills;
