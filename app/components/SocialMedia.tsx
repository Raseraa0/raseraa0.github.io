import Image from "next/image";
import "../style/SocialMedia.css";

type Props = {
  svgSrc: string;
  className?: string;
  num: string;
};
function SocialMedia({ svgSrc, className = "", num = "0" }: Props) {
  return (
    <button
      className={`social-media-badge animate-shimmer bg-[linear-gradient(110deg,#002545,45%,#003b64,55%,#002545)] bg-[length:200%_100%]  transition-colors ${className}`}
      data-num={parseInt(num)}
      id = {`social-media-badge-${num}`}
    >
      <Image src={svgSrc} alt="" width={200} height={200} />
    </button>
  );
}

export default SocialMedia;
