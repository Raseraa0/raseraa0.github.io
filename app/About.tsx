/**
 * @name About.tsx
 * @type Page
 */

import { ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import Timeline from "./components/Timeline";
import "./style/about.css";
import Button from "./components/Button";
import Link from "next/link";
import texts from "@/lib/data-texts";
import { useOnScreen } from "./hooks/useOnScreen";
import { cn } from "@/lib/utils";

import selfieImg from "../public/img/selfie_v1.jpg";

/**
 * @About
 * Fonction principale
 *
 * @description Page About.
 *
 */
function About() {
  // Références pour l'apparition au scroll
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
      {/* Cadre contenant les infos principales */}
      <div
        ref={aboutRef}
        className={cn(
          "mx-4 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-white-1/65 to-blue-5/45 transition-all duration-500 ease-in-out lg:mx-0 lg:h-5/6",
          aboutVisible ? "" : "opacity-0",
        )}
      >
        <div className="m-px flex flex-col items-center justify-evenly gap-8 rounded-2xl bg-blue-9/95 py-8 lg:h-full lg:gap0 lg:py-0">
          {/* Photo de profil */}
          <Image
            ref={imgRef}
            id="img-selfie"
            src={selfieImg}
            alt={texts.about.altPicture}
            placeholder="blur"
            className={cn(
              "w-40 rounded-full transition-all delay-100 duration-500 ease-in-out lg:w-64",
              imgVisible ? "" : "translate-x-40 opacity-0",
            )}
          />

          {/* Description de moi même */}
          <div
            ref={descRef}
            className={cn(
              "mx-12 max-w-[400px] text-sm transition-all delay-200 duration-500 ease-in-out lg:text-base",
              descVisible ? "" : "-translate-x-40 opacity-0",
            )}
          >
            {texts.about.desc}
          </div>

          {/* Bouton qui fait télécharger le CV */}
          <Link href="/CV_RASERA_Arthur_FR.pdf" target="_blank">
            <Button
              ref={cvRef}
              text={texts.about.seeCV}
              className={cn(
                "transition-all delay-300 duration-500 ease-in-out",
                cvVisible ? "" : "translate-x-40 opacity-0",
              )}
            />
          </Link>
        </div>
      </div>

      {/* Timeline sur mon parcours */}
      <Timeline className="scale-90 lg:scale-110" />
    </ParallaxLayer>
  );
}

export default About;
