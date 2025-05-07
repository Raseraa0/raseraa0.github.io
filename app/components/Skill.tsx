import { fontJersey15 } from "@/lib/font";

function Skill({ title }: { title: string }) {
  return (
    <div className=" flex flex-col">
      <span className={`text-center text-blue-1 ${fontJersey15.className}`}>
        {title}
      </span>
    </div>
  );
}

export default Skill;
