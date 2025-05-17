import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Timeline from "./components/Timeline";
// import { Spotlight } from "./components/ui/spotlight";
import "./style/about.css";
import Button from "./components/Button";
import Link from "next/link";
import texts from "@/lib/data-texts";
import selfieImg from "../public/selfie_v1.jpg";

function About() {
  return (
    <ParallaxLayer
      offset={1}
      speed={0}
      className="flex min-h-[600px] flex-col items-center justify-evenly lg:flex-row"
    >
      <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-white-1/65 to-blue-5/45 lg:h-5/6 mx-4 lg:mx-0">
        <div className="m-px flex flex-col items-center justify-evenly gap-8 rounded-2xl bg-blue-9/95 lg:h-full lg:gap-0 py-8 lg:py-0">
          <Image
            id="img-selfie"
            src={selfieImg}
            alt={texts.about.altPicture}
            placeholder="blur"
            className="w-40 rounded-full lg:w-64"
          />
          <div className="mx-12 max-w-[400px] text-sm lg:text-base">
            {texts.about.desc}
          </div>
          <Link href="/CV_RASERA_Arthur_FR.pdf" target="_blank">
            <Button text={texts.about.seeCV} />
          </Link>
        </div>
      </div>
      <Timeline className="scale-90 lg:scale-125" />
    </ParallaxLayer>
  );
}

export default About;
