import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Timeline from "./components/Timeline";
// import { Spotlight } from "./components/ui/spotlight";
import "./style/Persona.css";
import Button from "./components/Button";
import Link from "next/link";

function Persona() {
  const imageSize = 200;

  return (
    <ParallaxLayer
      offset={1}
      speed={0}
      className="flex min-h-[600px] flex-col items-center justify-evenly bg-blue-9 lg:flex-row"
    >
      <div className="flex flex-col items-center justify-evenly gap-8 lg:h-5/6 lg:gap-0">
        <Image
          id="img-selfie"
          src={"./selfie_v1.jpg"}
          alt=""
          width={imageSize}
          height={imageSize}
          className="lg:w-50 w-40 rounded-full"
        />
        <div className="mx-12 max-w-[400px] text-sm lg:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe natus,
          animi illo laudantium temporibus vel recusandae. Iure modi quaerat
          magnam et repudiandae, mollitia expedita molestiae ab amet consequatur
          omnis vero.{" "}
        </div>
        <Link href="/CV_RASERA_Arthur_FR.pdf" target="_blank">
          <Button text="Click to see my CV" />
        </Link>
      </div>
      <Timeline className="scale-90 lg:scale-125" />
      {/* <Spotlight /> */}
    </ParallaxLayer>
  );
}

export default Persona;
