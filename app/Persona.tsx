import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Timeline from "./components/Timeline";
import { Spotlight } from "./components/ui/spotlight";
import "./style/Persona.css"
import Button from "./components/Button";

function Persona() {
  const imageSize = 200;

  return (
    <ParallaxLayer offset={1} speed={0} className="bg-blue-9 flex flex-col items-center justify-center min-h-[600px]">
      <Image id="img-selfie" src={"./selfie_v1.jpg"} alt="" width={imageSize} height={imageSize} className="rounded-full w-40 mb-8 " />
      <div className="mx-12 mb-6 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Saepe natus, animi illo laudantium temporibus vel recusandae.
        Iure modi quaerat magnam et repudiandae, mollitia expedita
        molestiae ab amet consequatur omnis vero. </div>
<Button text="Click to see my CV" className="mb-10"/>
      <Timeline className="scale-90" />
      <Spotlight />


    </ParallaxLayer>
  )
}

export default Persona

// TODO ajouter de hover au dessus de chaque case de la Timeline, pour juste expliquer quoi était quoi
// la version mobile est ok, maintenant il faut faire la version pc ( et faire attention a la version intermédiaire)
// linke le createVerify, et link le bouton de la bare de navigation
// link mail github et linkedin