/**
 * @name Button.tsx
 * @type Component
 */

import { cn } from "@/lib/utils";
import { Ref } from "react";

// Propriétés
type Props = {
  ref?: Ref<HTMLButtonElement>;
  text: string;
  className?: string;
  onClick?: () => void;
};

/**
 * @Button
 * Fonction principale
 *
 * @description Bouton avec des styles appliqués.
 *
 * @param ref: Reference qui sert pour l'apparition au scroll
 * @param text: Texte a afficher dans le boutton
 * @param className: Classe supplémentaire à appliquer au bouton
 * @param onClick: Fonction qui va s'éxécuter lors du click sur le bouton
 *
 */
function Button({ ref, text, className = "", onClick = () => {} }: Props) {
  return (
    <button
      ref={ref}
      className={cn("relative p-[2px]", className)}
      onClick={onClick}
    >
      {/* Outer  */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-4 to-blue-5" />

      {/* Inner */}
      <div className="group relative rounded-[6px] bg-blue-9 px-8 py-2 text-xs font-semibold transition duration-200 hover:bg-transparent hover:text-blue-9 active:blur-sm lg:text-base">
        {text}
      </div>
    </button>
  );
}

export default Button;
