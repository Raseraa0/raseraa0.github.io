/**
 * @name Skill.tsx
 * @type Component
 */

import { fontJersey15, fontInter } from "@/lib/font";
import skills from "@/lib/data-skills";
import Image from "next/image";
import { cn } from "@/lib/utils";
import texts from "@/lib/data-texts";

// Propriétés
type Props = {
  id: number;
  className?: string;
};

/**
 * @Skill
 * Fonction principale
 *
 * @description Une case de skill, qui regroupe plusieurs technologies
 * couvrant un domaine, est alors affiché le titre du domaine et toute les
 * technologie avec des images associées.
 * 
 * @param id: Id du skill à afficher
 * @param className: Classe supplémentaire à appliquer au bouton 
 * 
 */
function Skill({ id, className = "" }: Props) {
  // Récupération du skill correspondant à l'id
  const selectedSkill = skills.find((skill) => skill.id === id);

  return (
    <div className={cn("pointer-events-none z-50 flex flex-col",className)}>

      {/* Titre du domaine de skills */}
      <span
        className={cn(
          "text-center text-2xl/6 text-blue-1 lg:text-2xl",
          fontJersey15.className,
        )}
      >
        {selectedSkill?.title}
      </span>

      {/* Ligne pour marquer une séparation */}
      <span className="mb-2 mt-1 h-px w-4/5 self-center bg-blue-1"></span>

      {/* Liste de tout les subskills avec leurs images associées */}
      <div className="ml-2 flex flex-col">
        {selectedSkill?.subSkills?.map((subSkill, index) => (
          <div key={index} className="mb-2 flex flex-row items-center">
            <Image
              alt={`${texts.skills.altSkills} ${subSkill.name}`}
              src={subSkill.image}
              // placeholder="blur"
              className="w-7"
            />
            <span className={cn(fontInter.className, "ml-2 text-sm")}>
              {subSkill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
