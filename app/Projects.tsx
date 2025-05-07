import { useState } from "react"; // AJOUTE POUR GÉRER L'ÉTAT
import { ParallaxLayer } from "@react-spring/parallax";
import Project from "./components/Project";

function Projects() {
  const [expandedProjectId, setExpandedProjectId] = useState(-1);

  const handleExpandProject = (id : number) => {
    setExpandedProjectId(expandedProjectId === id ? -1 : id);
  };

  return (
    <ParallaxLayer
      offset={2}
      speed={0}
      className="flex flex-col min-[600px] bg-blue-9"
    >
      <Project id={1} isExpanded={expandedProjectId === 1} onExpand={handleExpandProject} /> 
      <Project id={2} isExpanded={expandedProjectId === 2} onExpand={handleExpandProject} /> 
      <Project id={3} isExpanded={expandedProjectId === 3} onExpand={handleExpandProject} /> 
    </ParallaxLayer>
  );
}

export default Projects;
