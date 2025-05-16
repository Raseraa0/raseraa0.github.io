import { useState } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Project from "./components/Project";

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
  return (
    <ParallaxLayer
      offset={2}
      speed={0}
      className="h-min-[600px] flex items-center justify-center bg-blue-9"
    >
      <div className="flex h-full w-full flex-col justify-center lg:flex-row lg:py-36">
        <Project
          id={1}
          isExpanded={expandedProjectId === 1}
          onExpand={handleExpandProject}
        />
        <Project
          id={2}
          isExpanded={expandedProjectId === 2}
          onExpand={handleExpandProject}
        />
        <Project
          id={3}
          isExpanded={expandedProjectId === 3}
          onExpand={handleExpandProject}
        />
      </div>
    </ParallaxLayer>
  );
}

export default Projects;
