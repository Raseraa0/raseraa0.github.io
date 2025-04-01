import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";

function Persona() {
  return (
    <ParallaxLayer offset={1} speed={0} className="bg-blue-9">
      <Image src={"./selfie_v1.jpg"} alt="" width={200} height={200} />
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Saepe natus, animi illo laudantium temporibus vel recusandae.
        Iure modi quaerat magnam et repudiandae, mollitia expedita
        molestiae ab amet consequatur omnis vero.</div>

    </ParallaxLayer>
  )
}

export default Persona
