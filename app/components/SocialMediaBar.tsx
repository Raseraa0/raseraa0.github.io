import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";
import SocialMedia from "./SocialMedia";

type Props = {
  speed: number;
};

export default function SocialMediaBar({ speed }: Props) {
  useEffect(() => {
    headerSetup();
  }, []);

  function headerSetup() {
    const selecteur = document.getElementById("social-media-selecteur");

    const allSocialMedia = document.getElementsByClassName("p-social-media-badge");
    for (const socialMedia of Array.from(allSocialMedia) as HTMLElement[]) {
      socialMedia.addEventListener("mouseenter", () => {
        const num = parseInt(socialMedia.dataset.num ?? "0");

        const offset = document.getElementById(`social-media-badge-${num}`)?.offsetLeft ?? 0;
        const offset_first = document.getElementById(`social-media-badge-${1}`)?.offsetLeft ?? 0;

        if (selecteur) {
          selecteur.style.width = `${socialMedia.clientWidth}px`;
          selecteur.style.left = `${offset - offset_first}px`;
        }
      });

      socialMedia.addEventListener("mouseleave", () => {
        if (selecteur) {
          selecteur.style.width = `100%`;
          selecteur.style.left = `0`;
        }
      });
    }
  }

  return (
    <ParallaxLayer id="social-media-layer" offset={0} speed={speed} className="flex justify-start sm:justify-center sm:ml-0 ">
      <div id="social-media-outer" className={`flex flex-col gap-2 p-3`}>
        <div className="flex flex-row gap-7 sm:gap-10">
          <SocialMedia svgSrc="./SocialMedia/github-badge.svg" className="" num="1" />
          <SocialMedia svgSrc="./SocialMedia/linkedin-badge.svg" className="" num="2" />
          <SocialMedia svgSrc="./SocialMedia/mail-badge.svg" className="" num="3" />
        </div>
        <div id="social-media-selecteur" className="rounded-full"></div>
      </div>
    </ParallaxLayer>
  );
}
