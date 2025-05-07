import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Timeline from "./components/Timeline";
import { Spotlight } from "./components/ui/spotlight";
import "./style/Persona.css";
import Button from "./components/Button";

function Persona() {
  const imageSize = 200;

  return (
    <ParallaxLayer
      offset={1}
      speed={0}
      className="bg-blue-9 flex flex-col items-center justify-center min-h-[600px] lg:flex-row lg:p-32 lg:justify-around"
    >
      <Image
        id="img-selfie"
        src={"./selfie_v1.jpg"}
        alt=""
        width={imageSize}
        height={imageSize}
        className="rounded-full w-40 mb-8 lg:w-72"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="mx-12 mb-6 text-sm max-w-[400px] lg:text-base lg:mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe natus,
          animi illo laudantium temporibus vel recusandae. Iure modi quaerat
          magnam et repudiandae, mollitia expedita molestiae ab amet consequatur
          omnis vero.{" "}
        </div>
        <Button text="Click to see my CV" className="mb-10" />
      </div>
      <Timeline className="scale-90 lg:scale-125" />
      <Spotlight />
    </ParallaxLayer>
  );
}

export default Persona;

// TODO ajouter de hover au dessus de chaque case de la Timeline, pour juste expliquer quoi était quoi
// TODO mes expérience les mettre plus en valeurs, genre dire ce que j'ai dedans et tout (limite c'est une page maintenant)