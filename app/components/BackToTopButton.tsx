/**
 * @name BackToTopButton.tsx
 * @type Component
 */

import "../style/backToTop.css";
import { fontJersey15 } from "@/lib/font";
import { cn } from "@/lib/utils";
import { IParallax } from "@react-spring/parallax";
import { RefObject } from "react";
import { useLanguage } from "../contexts/language-context";

// Propriétés
type Props = {
  className?: string;
  parallaxRef: RefObject<IParallax | null>;
};

/**
 * @BackToTopButton
 * Fonction principale
 *
 * @description Bouton qui permet de revenir à la première page,
 * ce bouton n'apparait que lorsque l'on quitte la première page
 * et est toujours positionné en haut à droite.
 *
 * @param className: Classe supplémentaire à appliquer au bouton
 * @param parallaxRef: Référence de l'élément global parallax
 *
 */
function BackToTopButton({ className = "", parallaxRef }: Props) {
  /**
   * Permet un retour à la première page de façon fluide
   */
  const goTop = () => {
    parallaxRef.current?.scrollTo(0);
  };

  // Récupération du textes
  const { texts } = useLanguage();

  return (
    <button
      className={cn(
        "p-backtotop fixed right-0 top-0 z-50 px-4 pt-5 text-3xl text-blue-1 shadow-blue-1 transition duration-200 ease-in-out hover:scale-110 active:scale-[1.2] dark:text-blue-9 dark:shadow-blue-9 lg:px-12 lg:pt-9 lg:text-4xl",
        className,
        fontJersey15.className,
      )}
      onClick={goTop}
    >
      {texts.hero.nav.backToTop}
    </button>
  );
}

export default BackToTopButton;
