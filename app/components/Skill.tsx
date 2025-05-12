import { fontJersey15, fontInter } from "@/lib/font";
import skills from "@/lib/data-skills";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  id: number;
};

function Skill({ id }: Props) {
  const selectedSkill = skills.find((skill) => skill.id === id);

  return (
    <div className="flex flex-col  ">
      <span className={`text-center text-2xl/6 text-blue-1 ${fontJersey15.className}`}>
        {selectedSkill?.title}
      </span>
      <span className="h-px w-4/5 bg-blue-1 self-center mt-1 mb-2"></span>
      <div className="flex flex-col ml-2">
        {selectedSkill?.subSkills?.map((subSkill, index) => (
          <div key={index} className="flex flex-row items-center mb-2">
            <Image
              alt={subSkill.name}
              src={subSkill.image}
              width={40}
              height={40}
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

// mettre les iamge au skills qui sont associé
// TODO faire un footer