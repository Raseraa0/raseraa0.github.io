import { fontJersey15, fontInter } from "@/lib/font";
import skills from "@/lib/data-skills";
import Image from "next/image";
import { cn } from "@/lib/utils";
import texts from "@/lib/data-texts";

type Props = {
  id: number;
  className?: string;
};

function Skill({ id, className = "" }: Props) {
  const selectedSkill = skills.find((skill) => skill.id === id);

  return (
    <div className={cn("pointer-events-none z-50 flex flex-col",className)}>
      <span
        className={cn(
          "text-center text-2xl/6 text-blue-1 lg:text-2xl",
          fontJersey15.className,
        )}
      >
        {selectedSkill?.title}
      </span>
      <span className="mb-2 mt-1 h-px w-4/5 self-center bg-blue-1"></span>
      <div className="ml-2 flex flex-col">
        {selectedSkill?.subSkills?.map((subSkill, index) => (
          <div key={index} className="mb-2 flex flex-row items-center">
            <Image
              alt={`${texts.skills.altSkills} ${subSkill.name}`}
              src={subSkill.image}
              placeholder="blur"
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
