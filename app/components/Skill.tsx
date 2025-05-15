import { fontJersey15, fontInter } from "@/lib/font";
import skills from "@/lib/data-skills";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  id: number;
};

function Skill({ id }: Props) {
  const selectedSkill = skills.find((skill) => skill.id === id);
  const size = 25;

  return (
    <div className="pointer-events-none z-50 flex flex-col">
      <span
        className={`text-center text-2xl/6 text-blue-1 ${fontJersey15.className} lg:text-2xl`}
      >
        {selectedSkill?.title}
      </span>
      <span className="mb-2 mt-1 h-px w-4/5 self-center bg-blue-1"></span>
      <div className="ml-2 flex flex-col">
        {selectedSkill?.subSkills?.map((subSkill, index) => (
          <div key={index} className="mb-2 flex flex-row items-center">
            <Image
              alt={subSkill.name}
              src={subSkill.image}
              width={size}
              height={size}
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
