import { ParallaxLayer } from "@react-spring/parallax";
import Project from "./components/Project";

function Projects() {
  return (
    <ParallaxLayer
      offset={2}
      speed={0}
      className="flex flex-col min-[600px] bg-blue-9"
    >
      <Project id={1} />
      <Project id={2} />
      <Project id={3} />
    </ParallaxLayer>
  );
}

export default Projects;
