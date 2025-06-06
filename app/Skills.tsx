/**
 * @name Skills.tsx
 * @type Page
 */

import { ParallaxLayer } from "@react-spring/parallax";
import Skill from "./components/Skill";
import CrossSkills from "./components/CrossSkills";
import { useOnScreen } from "./hooks/useOnScreen";
import { cn } from "@/lib/utils";

/**
 * @Skills
 * Fonction principale
 *
 * @description Page Skills.
 *
 */
function Skills() {
  // Référence pour l'apparition au scroll
  const [skillsRef, skillsVisible] = useOnScreen<HTMLDivElement>();

  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      className="min-[600px] flex flex-col items-center bg-blue-9 dark:bg-blue-4"
    >
      <div
        ref={skillsRef}
        className="p-fluide-anim relative m-auto flex aspect-[2/3] w-5/6 max-w-96 flex-col lg:scale-110"
      >
        <CrossSkills />
        <div className="grid h-full w-full grid-cols-2 grid-rows-3 gap-4">
          <Skill
            id={1}
            className={cn(
              "transition-all duration-1000 ease-in-out",
              skillsVisible ? "" : "scale-0 opacity-0",
            )}
          />
          <Skill
            id={2}
            className={cn(
              "transition-all delay-100 duration-1000 ease-in-out",
              skillsVisible ? "" : "scale-0 opacity-0",
            )}
          />
          <Skill
            id={3}
            className={cn(
              "transition-all delay-200 duration-1000 ease-in-out",
              skillsVisible ? "" : "scale-0 opacity-0",
            )}
          />
          <Skill
            id={4}
            className={cn(
              "transition-all delay-300 duration-1000 ease-in-out",
              skillsVisible ? "" : "scale-0 opacity-0",
            )}
          />
          <Skill
            id={5}
            className={cn(
              "transition-all delay-[400] duration-1000 ease-in-out",
              skillsVisible ? "" : "scale-0 opacity-0",
            )}
          />
          <Skill
            id={6}
            className={cn(
              "transition-all delay-500 duration-1000 ease-in-out",
              skillsVisible ? "" : "scale-0 opacity-0",
            )}
          />
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Skills;
