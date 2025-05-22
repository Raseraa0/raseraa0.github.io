/**
 * @name Project
 * @type Component
 */

"use client";

import { cn } from "@/lib/utils";
import Button from "./Button";
import { fontJersey15 } from "@/lib/font";
import projects from "@/lib/data-projects";
import "../style/project.css";
import SocialMedia from "./SocialMedia";
import texts from "@/lib/data-texts";
import Image from "next/image";
import { Ref } from "react";

import githubBadge from "../../public/SocialMedia/github-badge.svg";

// Propriétés
type Props = {
  ref?: Ref<HTMLDivElement>;
  id: number;
  isExpanded: boolean;
  onExpand: (id: number) => void;
  className?: string;
};

/**
 * @Project
 * Fonction principale
 *
 * @description Affichage d'un projet, avec son titre
 * sa description, une image représentative et un lien github.
 *
 * @param ref: Reference qui sert pour l'apparition au scroll
 * @param id: Id du projet à afficher
 * @param isExpended: Indicateur si le projet est actuellement expand
 * @param onExpand: Fonction a éxécuter lorsque un projet s'extand
 * @param className: Classe supplémentaire à appliquer au bouton
 *
 */
function Project({ ref, id, isExpanded, onExpand, className }: Props) {
  // Récupération du projet correspondant à l'id
  const selectedProject = projects.find((project) => project.id === id);

  // Couleur de fond du projet
  const bg_col = selectedProject?.color ?? "#000000";

  /**
   * Assombrie la couleur passée en paramètre.
   *
   * @param color: Couleur initiale au format hexadécimal #FFFFFF
   * @param percent: Intensité du filtre sombre à appliquer
   * @returns La couleur assombrie, au format hexadécimal #FFFFFF
   */
  const darkenColor = (color: string, percent: number) => {
    // Supression du #
    const hex = color.replace("#", "");

    // Récupération des composante RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Diminution de la valeur de chaques composantes
    const newR = Math.floor(r * (1 - percent));
    const newG = Math.floor(g * (1 - percent));
    const newB = Math.floor(b * (1 - percent));

    // Concaténation des valeurs assombrie et rajout du #
    return `#${((1 << 24) | (newR << 16) | (newG << 8) | newB)
      .toString(16)
      .slice(1)}`;
  };

  // Affectation de la couleur plus sombre
  const darkenedColor = darkenColor(bg_col, 0.2);

  return (
    <div
      ref={ref}
      className={cn(
        "group relative mx-4 my-2 flex-grow overflow-hidden rounded-md border-2 border-blue-7/50 transition-all duration-500 hover:border-blue-6/80 lg:w-96 lg:flex-grow-0 lg:hover:-translate-y-7 lg:hover:scale-105",
        className,
      )}
      style={{
        background: `linear-gradient(45deg, ${darkenedColor}, ${bg_col} 20%, ${darkenedColor} 45%,${bg_col} 70%, ${darkenedColor})`,
      }}
    >
      {/* badge Github qui renvoie vers la page github du projet */}
      <SocialMedia
        svgSrc={githubBadge}
        className="p-fluide-anim absolute bottom-1 right-1 z-50 scale-90 shadow-[0_0_5px] shadow-blue-1 lg:bottom-4 lg:right-4 lg:scale-125"
        href={selectedProject?.link}
        alt={`${texts.projects.altProjects} ${selectedProject?.title}`}
      />

      <div className="p-bg-lines h-full w-full">
        <div className="p-bg-lines relative flex h-full w-full flex-col items-center justify-around">
          {/* Titre présent tout en haut de la carte projet (disparait lorsque expand) */}
          {!isExpanded && (
            <span
              className={cn(
                "z-10 text-center text-2xl text-white-1 lg:text-4xl",
                fontJersey15.className,
              )}
            >
              {selectedProject?.title}
            </span>
          )}

          <div className="flex h-full flex-col items-center justify-evenly gap-12 md:h-auto md:flex-row lg:flex-col">
            <div
              className={cn(
                "relative flex aspect-[1920/1080] w-64 items-center justify-center overflow-hidden rounded-lg border border-blue-9 transition-all duration-0 lg:w-80 lg:duration-300 lg:group-hover:scale-110",
                isExpanded ? "aspect-auto h-full w-full" : "",
              )}
            >
              {/* Image représentative du projet, qui couvrira toute la carte lorsque expand */}
              {/* L'expand se dépclenche lors du clique sur l'image */}
              <Image
                src={selectedProject?.image_path ?? ""}
                placeholder="blur"
                alt=""
                className={cn(
                  "absolute inset-0 duration-700",
                  isExpanded
                    ? "h-full w-full object-cover brightness-[0.4]"
                    : "",
                )}
                onClick={() => onExpand(id)}
              ></Image>

              {/* Bouton qui permet l'expand  */}
              {!isExpanded && (
                <Button
                  text={texts.projects.seeMore}
                  className="absolute z-20 mb-3 scale-90 self-end md:hidden"
                  onClick={() => onExpand(id)}
                />
              )}

              {/* Section avec le titre et la description qui apparait lors de l'expand */}
              {isExpanded && (
                <div className="relative z-30 p-4 text-center text-white-1">
                  <h2
                    className={cn(
                      "mb-2 text-2xl font-bold",
                      fontJersey15.className,
                    )}
                  >
                    {selectedProject?.title}
                  </h2>
                  <p className="text-sm">
                    {selectedProject?.description ??
                      texts.projects.noDescription}
                  </p>
                </div>
              )}
            </div>

            {/* Description qui est affiché lorsque l'on est sur grand écran et donc qu'il n'y a pas d'expand */}
            <p className="mx-4 hidden w-1/3 rounded-md bg-[#00000033] p-2 text-center text-sm md:inline-block lg:w-auto lg:text-base">
              {selectedProject?.description ?? texts.projects.noDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
