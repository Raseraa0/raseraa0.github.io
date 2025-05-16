import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";
import SocialMedia from "./SocialMedia";
import texts from "@/lib/data-texts";

type Props = {
  speed: number;
};

export default function SocialMediaBar({ speed }: Props) {
  useEffect(() => {
    headerSetup();
  }, []);

  function headerSetup() {
    const selecteur = document.getElementById("social-media-selecteur");
    const selecteurText = document.getElementById(
      "social-media-selecteur-text",
    );

    const allSocialMedia = document.getElementsByClassName(
      "p-social-media-badge",
    );
    for (const socialMedia of Array.from(allSocialMedia) as HTMLElement[]) {
      socialMedia.addEventListener("mouseenter", () => {
        const num = parseInt(socialMedia.dataset.num ?? "0");

        const offset =
          document.getElementById(`social-media-badge-${num}`)?.offsetLeft ?? 0;
        const offset_first =
          document.getElementById(`social-media-badge-${1}`)?.offsetLeft ?? 0;

        if (selecteur) {
          selecteur.style.width = `${socialMedia.clientWidth}px`;
          selecteur.style.left = `${offset - offset_first}px`;
        }
        if (selecteurText) {
          switch (num) {
            case 1:
              selecteurText.textContent = texts.footer.git;
              break;
            case 2:
              selecteurText.textContent = texts.footer.linkedin;
              break;
            case 3:
              selecteurText.textContent = texts.footer.mail;
              break;
          }
        }
      });

      socialMedia.addEventListener("mouseleave", () => {
        if (selecteur) {
          selecteur.style.width = `100%`;
          selecteur.style.left = `0`;
        }
        if (selecteurText) {
          selecteurText.textContent = " ";
        }
      });
    }
  }

  return (
    <ParallaxLayer
      id="social-media-layer"
      offset={0}
      speed={speed}
      className="flex justify-start sm:ml-0 sm:justify-center"
    >
      <div id="social-media-outer" className="flex flex-col gap-2 p-3">
        <div className="flex flex-row gap-7 sm:gap-10">
          <SocialMedia
            svgSrc="./SocialMedia/github-badge.svg"
            num="1"
            href="https://github.com/Raseraa0/"
            alt={texts.hero.social.altGit}
          />
          <SocialMedia
            svgSrc="./SocialMedia/linkedin-badge.svg"
            num="2"
            href="https://fr.linkedin.com/in/arthur-rasera"
            alt={texts.hero.social.altLinkedin}
          />
          <SocialMedia
            svgSrc="./SocialMedia/mail-badge.svg"
            num="3"
            href="mailto:raserarthur71@gmail.com"
            alt={texts.hero.social.altMail}
          />
        </div>
        <div
          id="social-media-selecteur"
          className="flex flex-col items-center rounded-full"
        >
          <div
            id="social-media-selecteur-text"
            className="mt-2 text-nowrap text-center text-sm text-blue-8"
          ></div>
        </div>
      </div>
    </ParallaxLayer>
  );
}
