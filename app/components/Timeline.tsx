import "../style/timeline.css";
import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

type PropsAgain = {
  name: string;
  desc: string;
  right?: boolean;
};

type PropsAgainAgain = {
  name: string;
  desc: string;
  right?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
};

function Timeline({ className = "" }: Props) {
  const TimelineText = ({ name, desc, right = false }: PropsAgain) => {
    return (
      <div
        className={cn(
          "p-fluide-anim flex w-20 flex-col items-center hover:scale-110 md:w-40",
          right
            ? "timeline-end hover:translate-x-3"
            : "timeline-start hover:-translate-x-3",
        )}
      >
        <span className={cn("text-center text-base/4", fontJersey15.className)}>
          {name}
        </span>
        <div
          className={cn(
            "mt-2 hidden text-center text-xs opacity-75 md:inline-block",
            fontInter.className,
          )}
        >
          {desc}
        </div>
      </div>
    );
  };

  const TimelineMiddle = () => {
    return (
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
  };

  const TimelineStep = ({
    name,
    desc,
    right = false,
    isFirst = false,
    isLast = false,
  }: PropsAgainAgain) => {
    return (
      <li>
        <hr className={isFirst ? "first-hr" : ""} />
        <TimelineMiddle />
        <TimelineText name={name} desc={desc} right={right} />
        <hr className={isLast ? "last-hr" : ""} />
      </li>
    );
  };

  return (
    <ul className={cn("timeline lg:timeline-vertical", className)}>
      <TimelineStep
        name="Ensimag"
        desc="Filière Ingénérie des systèmes d'informations"
        isFirst
      />
      <TimelineStep
        name="Oxyl"
        desc="Stage / intelligence artificielle / DevOps / Software Development"
        right
      />
      <TimelineStep
        name="Univerisité Polytechnique de Catalone"
        desc="Echange universitaire / Cours en anglais"
      />
      <TimelineStep
        name="Sopra Steria"
        desc="Stage / SAP development / Intelligence artificielle"
        right
        isLast
      />
    </ul>
  );
}

export default Timeline;
