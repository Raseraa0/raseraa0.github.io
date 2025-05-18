import { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Project from "./components/Project";
import { useOnScreen } from "@/lib/useOnScreen";
import { cn } from "@/lib/utils";

function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState(-1);

  const handleExpandProject = (id: number) => {
    if (window.innerWidth > 768) {
      setExpandedProjectId(-1);
    } else {
      setExpandedProjectId(expandedProjectId === id ? -1 : id);
    }
  };

  window.addEventListener("resize", () => {
    handleExpandProject(-1);
  });

  const [project1Ref, project1Visible] = useOnScreen<HTMLDivElement>();
  const [project2Ref, project2Visible] = useOnScreen<HTMLDivElement>();
  const [project3Ref, project3Visible] = useOnScreen<HTMLDivElement>();

  return (
    <ParallaxLayer
      offset={2}
      speed={0}
      className="h-min-[600px] flex items-center justify-center"
    >
      <div className="flex h-full w-full flex-col justify-center lg:flex-row lg:py-36">
        <Project
          ref={project1Ref}
          id={1}
          isExpanded={expandedProjectId === 1}
          onExpand={handleExpandProject}
          className={cn(
            "transition-all duration-1000 ease-in-out",
            project1Visible ? "" : "-translate-x-full opacity-0 pointer-events-none",
          )}
        />
        <Project
          ref={project2Ref}
          id={2}
          isExpanded={expandedProjectId === 2}
          onExpand={handleExpandProject}
          className={cn(
            "transition-all duration-1000 ease-in-out",
            project2Visible ? "" : "-translate-x-[200%] opacity-0",
          )}
        />
        <Project
          ref={project3Ref}
          id={3}
          isExpanded={expandedProjectId === 3}
          onExpand={handleExpandProject}
          className={cn(
            "transition-all duration-1000 ease-in-out",
            project3Visible ? "" : "-translate-x-[300%] opacity-0",
          )}
        />
      </div>
    </ParallaxLayer>
  );
}
TODO PROBLEME AVEC LES ANIMATION AU SCROLL POUR PROJET ET LA TIMELINE PUIS MEME AVEC LES AUTRE? LE PB C4EST QUE SI JE DIT ANIMATION TRANSLATE, BAS CA PEUT NE JAMAIS RE APARAITRE
SOLUTION
SOLUTION
SOLUTION
SOLUTION
--------------------->>> ne mettre que des transition de opacité ???????????????
SOLUTION
SOLUTION
SOLUTION
SOLUTION
SOLUTION

export default Projects;
