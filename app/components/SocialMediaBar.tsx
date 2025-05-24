/**
 * @name SocialmediaBar.tsx
 * @type Component
 */

import { ParallaxLayer } from "@react-spring/parallax";
import { useEffect } from "react";
import SocialMedia from "./SocialMedia";


import githubBadge from "../../public/img/social_media/github-badge.svg";
import linkedinBadge from "../../public/img/social_media/linkedin-badge.svg";
import mailBadge from "../../public/img/social_media/mail-badge.svg";
import { useLanguage } from "../contexts/language-context";

// Propriétés
type Props = {
  speed: number;
};

/**
 * @SocialMediaBar
 * Fonction principale
 *
 * @description Bar des réseaux sociaux qui va contenir les liens
 * pour y accéder. avec bar juste en dessous qui suis la ou est la souris
 * et texte decrivant le texte hover, dans sa propre couche parallax.
 *
 * @param speed: Vitesse à transmettre à la couche parallax
 *
 */
export default function SocialMediaBar({ speed }: Props) {
  // Effectué uniquement au début
  useEffect(() => {
    headerSetup();
  }, );

  /**
   * Va mettre en place le suivie de la barre en dessous des badge
   * ainsi que le texte qui décrit la ou pointe la souris.
   */
  function headerSetup() {
    // Récupération de la barre
    const selecteur = document.getElementById("social-media-selecteur");

    // Récupération du texte en dessous de la barre
    const selecteurText = document.getElementById(
      "social-media-selecteur-text",
    );

    // Récupération d'un tableau contenant tout les badge social media
    const allSocialMedia = document.getElementsByClassName(
      "p-social-media-badge",
    );

    // On itère sur chaque badge
    for (const socialMedia of Array.from(allSocialMedia) as HTMLElement[]) {
      // Lorsque l'on entre dans un état hover
      socialMedia.addEventListener("mouseenter", () => {
        // Récupération du numéro du badge
        const num = parseInt(socialMedia.dataset.num ?? "0");

        // Récupération de son propre offset gauche
        const offset = socialMedia?.offsetLeft ?? 0;

        // Récupération de l'offset gauche du premier badge
        const offset_first =
          document.getElementById(`social-media-badge-${1}`)?.offsetLeft ?? 0;

        // Ajustement de la barre en dessous du badge concerné
        if (selecteur) {
          selecteur.style.width = `${socialMedia.clientWidth}px`;
          selecteur.style.left = `${offset - offset_first}px`;
        }

        // Ajustement du texte avec le contenue adéquat
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

      // Lorsque l'on sort de l'état hover
      socialMedia.addEventListener("mouseleave", () => {
        // La barre revient dans son état normal
        if (selecteur) {
          selecteur.style.width = `100%`;
          selecteur.style.left = `0`;
        }
        // Le texte reprend une valeur vide
        if (selecteurText) {
          selecteurText.textContent = " ";
        }
      });
    }
  }

  // Récupération du textes
  const { texts } = useLanguage();
  
  return (
    <ParallaxLayer
      id="social-media-layer"
      offset={0}
      speed={speed}
      className="flex justify-start sm:ml-0 sm:justify-center"
    >
      <div id="social-media-outer" className="flex flex-col gap-2 p-3">
        <div className="flex flex-row gap-7 sm:gap-10">
          {/* Badge Github */}
          <SocialMedia
            svgSrc={githubBadge}
            num="1"
            href="https://github.com/Raseraa0/"
            alt={texts.hero.social.altGit}
          />

          {/* Badge Linkedin */}
          <SocialMedia
            svgSrc={linkedinBadge}
            num="2"
            href="https://fr.linkedin.com/in/arthur-rasera"
            alt={texts.hero.social.altLinkedin}
          />

          {/* Badge Mail */}
          <SocialMedia
            svgSrc={mailBadge}
            num="3"
            href="mailto:raserarthur71@gmail.com"
            alt={texts.hero.social.altMail}
          />
        </div>

        {/* Barre qui suit le badge séléctionné */}
        <div
          id="social-media-selecteur"
          className="flex flex-col items-center rounded-full"
        >
          {/* Texte qui s'adapte */}
          <div
            id="social-media-selecteur-text"
            className="mt-2 text-nowrap text-center text-sm text-blue-8"
          ></div>
        </div>
      </div>
    </ParallaxLayer>
  );
}
