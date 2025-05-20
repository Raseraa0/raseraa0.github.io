import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Timeline from "./components/Timeline";
// import { Spotlight } from "./components/ui/spotlight";
import "./style/about.css";
import Button from "./components/Button";
import Link from "next/link";
import texts from "@/lib/data-texts";
import selfieImg from "../public/selfie_v1.jpg";
import { useOnScreen } from "./hooks/useOnScreen";
import { cn } from "@/lib/utils";

function About() {
  const [aboutRef, aboutVisible] = useOnScreen<HTMLDivElement>();
  const [imgRef, imgVisible] = useOnScreen<HTMLImageElement>();
  const [descRef, descVisible] = useOnScreen<HTMLDivElement>();
  const [cvRef, cvVisible] = useOnScreen<HTMLButtonElement>();
  return (
    <ParallaxLayer
      offset={1}
      speed={0}
      className="flex min-h-[600px] flex-col items-center justify-evenly lg:flex-row"
    >
      <div
        ref={aboutRef}
        className={cn(
          "mx-4 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-white-1/65 to-blue-5/45 transition-all duration-1000 ease-in-out lg:mx-0 lg:h-5/6",
          aboutVisible ? "" : "opacity-0",
        )}
      >
        <div className="m-px flex flex-col items-center justify-evenly gap-8 rounded-2xl bg-blue-9/95 py-8 lg:h-full lg:gap-0 lg:py-0">
          <Image
            ref={imgRef}
            id="img-selfie"
            src={selfieImg}
            alt={texts.about.altPicture}
            placeholder="blur"
            className={cn(
              "w-40 rounded-full transition-all delay-100 duration-1000 ease-in-out lg:w-64",
              imgVisible ? "" : "translate-x-40 opacity-0",
            )}
          />
          <div
            ref={descRef}
            className={cn(
              "mx-12 max-w-[400px] text-sm transition-all delay-200 duration-1000 ease-in-out lg:text-base",
              descVisible ? "" : "-translate-x-40 opacity-0",
            )}
          >
            {texts.about.desc}
          </div>
          <Link href="/CV_RASERA_Arthur_FR.pdf" target="_blank">
            <Button
              ref={cvRef}
              text={texts.about.seeCV}
              className={cn(
                "transition-all delay-300 duration-1000 ease-in-out",
                cvVisible ? "" : "translate-x-40 opacity-0",
              )}
            />
          </Link>
        </div>
      </div>
      <Timeline className="scale-90 lg:scale-125" />
    </ParallaxLayer>
  );
}

export default About;
