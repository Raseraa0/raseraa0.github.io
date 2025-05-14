import { ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";

import "./style/footer.css"

type Props = {
  name: string;
  href: string;
};

function Footer() {
  const FooterMedia = ({ name, href }: Props) => {
    return (
      <Link
        href={href}
        target="_blank"
        className="p-fluide-anim p-footer-text hover:text-blue-1 transform hover:scale-105"
      >
        {name}
      </Link>
    );
  };

  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      className="relative min-[600px] pointer-events-none"
    >
      <div className="absolute bottom-0 w-full h-9 flex flex-row items-center justify-evenly pointer-events-auto ">
        <span className={cn(fontJersey15.className, "text-xl lg:text-3xl")}>
          Arthur Rasera
        </span>
        <div
          className={cn(
            fontInter.className,
            "flex flex-row gap-3 text-sm lg:text:md lg:gap-16"
          )}
        >
          <FooterMedia name={"GitHub"} href="https://github.com/Raseraa0/" />
          <FooterMedia
            name={"Linkedin"}
            href="https://fr.linkedin.com/in/arthur-rasera"
          />
          <FooterMedia name={"E-mail"} href="mailto:raserarthur71@gmail.com" />
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Footer;
