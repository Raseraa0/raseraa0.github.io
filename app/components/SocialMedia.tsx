/**
 * @name SocialMedia.tsx
 * @type Component
 */
import Image, { StaticImageData } from "next/image";
import "../style/socialMedia.css";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Propriétés
type Props = {
  svgSrc: StaticImageData;
  className?: string;
  num?: string;
  href?: string;
  alt?: string;
};

/**
 * @SocialMedia
 * Fonction principale
 *
 * @description Icone redirigant vers un lien correspondant à 
 * un de mes réseaux sociaux, avec image associée.
 * 
 * @param svgSrc: Image static du réseaux concerné
 * @param className: Classe supplémentaire à appliquer au bouton 
 * @param num: Numéro du badge afin de pouvoir l'identifier
 * @param href: Lien correspondant 
 * @param alt: Alt correspondant 
 * 
 */
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
        <Image src={svgSrc} alt={alt} priority />
      </button>
    </Link>
  );
}

export default SocialMedia;
