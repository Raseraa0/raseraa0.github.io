import { ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";

import "./style/footer.css";

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
        className="p-fluide-anim p-footer-text transform hover:scale-105 hover:text-blue-1"
      >
        {name}
      </Link>
    );
  };

  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      className="min-[600px] pointer-events-none relative"
    >
      <div className="pointer-events-auto absolute bottom-0 flex h-9 w-full flex-row items-center justify-evenly">
        <span className={cn(fontJersey15.className, "text-xl lg:text-3xl")}>
          Arthur Rasera
        </span>
        <div
          className={cn(
            fontInter.className,
            "lg:text:md flex flex-row gap-3 text-sm lg:gap-16",
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
