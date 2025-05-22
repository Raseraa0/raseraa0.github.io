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
import SocialMedia from "./components/SocialMedia";

import selfieImg from "../public/img/selfie_v1.jpg";
import githubBadge from "../public/img/social_media/github-badge.svg";
import linkedinBadge from "../public/img/social_media/linkedin-badge.svg";
import mailBadge from "../public/img/social_media/mail-badge.svg";

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
  const [contactRef, contactVisible] = useOnScreen<HTMLDivElement>();

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
        <div className="lg:gap0 m-px flex flex-col items-center justify-evenly gap-8 rounded-2xl bg-blue-9/95 py-8 lg:h-full lg:py-0">
          {/* Photo de profil */}
          <Image
            ref={imgRef}
            id="img-selfie"
            src={selfieImg}
            alt={texts.about.altPicture}
            placeholder="blur"
            className={cn(
              "w-40 rounded-full transition-all duration-500 ease-in-out lg:w-64",
              imgVisible ? "" : "translate-x-40 opacity-0",
            )}
          />

          {/* Description de moi même */}
          <div
            ref={descRef}
            className={cn(
              "mx-12 max-w-[400px] text-sm transition-all duration-500 ease-in-out lg:text-base",
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
                "transition-all duration-500 ease-in-out",
                cvVisible ? "" : "translate-x-40 opacity-0",
              )}
            />
          </Link>

          <div
            ref={contactRef}
            className={cn(
              "flex flex-row gap-5 transition-all duration-500 ease-in-out md:scale-125",
              contactVisible ? "" : "-translate-x-40 opacity-0",
            )}
          >
            <div className="rounded-full bg-gradient-to-tr from-blue-1 to-blue-6 p-px duration-150 hover:scale-125">
              <SocialMedia
                svgSrc={githubBadge}
                num="1"
                href="https://github.com/Raseraa0/"
                alt={texts.hero.social.altGit}
              />
            </div>

            {/* Badge Linkedin */}
            <div className="rounded-full bg-gradient-to-tr from-blue-1 to-blue-6 p-px duration-150 hover:scale-125">
              <SocialMedia
                svgSrc={linkedinBadge}
                num="2"
                href="https://fr.linkedin.com/in/arthur-rasera"
                alt={texts.hero.social.altLinkedin}
              />
            </div>

            {/* Badge Mail */}
            <div className="rounded-full bg-gradient-to-tr from-blue-1 to-blue-6 p-px duration-150 hover:scale-125">
              <SocialMedia
                svgSrc={mailBadge}
                num="3"
                href="mailto:raserarthur71@gmail.com"
                alt={texts.hero.social.altMail}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Timeline sur mon parcours */}
      <Timeline className="scale-90 lg:scale-110" />
    </ParallaxLayer>
  );
}

export default About;
