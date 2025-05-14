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
    <div className="flex flex-col z-50 pointer-events-none">
      <span
        className={`text-center text-2xl/6 text-blue-1 ${fontJersey15.className} lg:text-2xl`}
      >
        {selectedSkill?.title}
      </span>
      <span className="h-px w-4/5 bg-blue-1 self-center mt-1 mb-2"></span>
      <div className="flex flex-col ml-2">
        {selectedSkill?.subSkills?.map((subSkill, index) => (
          <div key={index} className="flex flex-row items-center mb-2">
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

