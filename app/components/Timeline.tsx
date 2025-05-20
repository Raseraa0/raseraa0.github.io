import texts from "@/lib/data-texts";
import "../style/timeline.css";
import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import { useOnScreen } from "../hooks/useOnScreen";

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
  date: string;
  right?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
};

type PropsAgainReally = {
  date: string;
  right?: boolean;
};

function Timeline({ className = "" }: Props) {
  const [lineRef, lineVisible] = useOnScreen<HTMLUListElement>();

  const TimelineText = ({ name, desc, right = false }: PropsAgain) => {
    return (
      <div
        className={cn(
          "p-fluide-anim flex w-20 flex-col items-center hover:scale-110 md:w-40 lg:h-32",
          right
            ? "timeline-end hover:translate-x-3"
            : "timeline-start hover:-translate-x-3",
        )}
      >
        <span
          className={cn(
            "text-center text-base/4 opacity-90 lg:text-xl/5",
            fontJersey15.className,
          )}
        >
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

  const TimelineDate = ({ date, right = false }: PropsAgainReally) => {
    return (
      <div
        className={cn(
          "text-xs opacity-75",
          right ? "timeline-start" : "timeline-end",
        )}
      >
        {date}
      </div>
    );
  };

  const TimelineStep = ({
    name,
    desc,
    date,
    right = false,
    isFirst = false,
    isLast = false,
  }: PropsAgainAgain) => {
    return (
      <li>
        <hr className={isFirst ? "first-hr" : ""} />
        <TimelineMiddle />
        <TimelineText name={name} desc={desc} right={right} />
        <TimelineDate date={date} right={right} />

        <hr className={isLast ? "last-hr" : ""} />
      </li>
    );
  };

  return (
    <ul
      ref={lineRef}
      className={cn(
        "timeline transition-all duration-1000 delay-400 ease-in-out lg:timeline-vertical",
        className,
        lineVisible ? "" : "opacity-0 -translate-y-20 lg:-translate-y-0 lg:-translate-x-20",
      )}
    >
      <TimelineStep
        name={texts.about.timeline.ensimag.name}
        desc={texts.about.timeline.ensimag.desc}
        date={texts.about.timeline.ensimag.date}
        isFirst
      />
      <TimelineStep
        name={texts.about.timeline.oxyl.name}
        desc={texts.about.timeline.oxyl.desc}
        date={texts.about.timeline.oxyl.date}
        right
      />
      <TimelineStep
        name={texts.about.timeline.upc.name}
        desc={texts.about.timeline.upc.desc}
        date={texts.about.timeline.upc.date}
      />
      <TimelineStep
        name={texts.about.timeline.sopra.name}
        desc={texts.about.timeline.sopra.desc}
        date={texts.about.timeline.sopra.date}
        right
        isLast
      />
    </ul>
  );
}

export default Timeline;
