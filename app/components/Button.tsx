import { cn } from "@/lib/utils";
import { Ref } from "react";

type Props = {
  ref?: Ref<HTMLButtonElement>;
  text: string;
  className?: string;
  onClick?: () => void;
};

function Button({ ref, text, className = "", onClick = () => {} }: Props) {
  return (
    <button
      ref={ref}
      className={cn("relative p-[2px]", className)}
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-4 to-blue-5" />
      <div className="group relative rounded-[6px] bg-blue-9 px-8 py-2 text-xs font-semibold transition duration-200 hover:bg-transparent hover:text-blue-9 active:blur-sm lg:text-base">
        {text}
      </div>
    </button>
  );
}

export default Button;
