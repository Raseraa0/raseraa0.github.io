/**
 * @name Footer.tsx
 * @type Page
 */

import { ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";

import "./style/footer.css";
import texts from "@/lib/data-texts";

// Propriétés
type Props = {
  name: string;
  href: string;
};

/**
 * @FooterMedia
 * Fonction principale
 *
 * @description Footer qui contient mon nom et mes réseaux sociaux.
 *
 * @param name: Nom du media
 * @param href: Lien vers lequel renvoie le clique sur le texte
 */
const FooterMedia = ({ name, href }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      className="p-fluide-anim p-footer-text transform hover:scale-105 hover:text-blue-1"
    >
      {name}
    </Link>
  );
};

/**
 * @Footer
 * Fonction principale
 *
 * @description Footer qui contient mon nom et mes réseaux sociaux.
 *
 */
function Footer() {
  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      className="min-[600px] pointer-events-none relative"
    >
      <div className="pointer-events-auto absolute bottom-0 flex h-9 w-full flex-row items-center justify-evenly">
        {/* Nom Prénom */}
        <span className={cn(fontJersey15.className, "text-xl lg:text-3xl")}>
          {texts.hero.arthur}
        </span>
        <div className="h-1/2 w-px bg-white-1 md:opacity-0"></div>
        <div
          className={cn(
            fontInter.className,
            "lg:text:md flex flex-row gap-3 text-sm lg:gap-16",
          )}
        >
          {/* Media Github */}
          <FooterMedia
            name={texts.footer.git}
            href="https://github.com/Raseraa0/"
          />

          {/* Media Linkedin */}
          <FooterMedia
            name={texts.footer.linkedin}
            href="https://fr.linkedin.com/in/arthur-rasera"
          />

          {/* Media Mail */}
          <FooterMedia
            name={texts.footer.mail}
            href="mailto:raserarthur71@gmail.com"
          />
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Footer;
