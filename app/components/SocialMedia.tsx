import Image from "next/image";
import "../style/socialMedia.css";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  svgSrc: string;
  className?: string;
  num?: string;
  href?: string;
  alt?: string;
};

function SocialMedia({
  svgSrc,
  className = "",
  num = "0",
  href = "#",
  alt = "Social media icon",
}: Props) {
  return (
    <Link href={href} target={href === "#" ? "" : "_blank"} passHref>
      <button
        className={cn(
          "p-social-media-badge animate-shimmer bg-[linear-gradient(110deg,#002545,45%,#003b64,55%,#002545)] bg-[length:200%_100%] transition-colors",
          className,
        )}
        data-num={parseInt(num)}
        id={`social-media-badge-${num}`}
      >
        <Image src={svgSrc} alt={alt} width={200} height={200} priority />
      </button>
    </Link>
  );
}

export default SocialMedia;
