import { ParallaxLayer } from "@react-spring/parallax";
import { fontJersey15, fontInter } from "@/lib/font";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  name: string;
  link: string;
};

function Footer() {
  const FooterMedia = ({ name, link }: Props) => {
    return (
      <Link
        href={link}
        className="p-fluide-anim hover:text-blue-6 transform hover:scale-105 hover:shadow-2xl"
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
          <FooterMedia name={"Linkedin"} link="www.google.come" />
          <FooterMedia name={"GitHub"} link="www.google.come" />
          <FooterMedia name={"E-mail"} link="www.google.come" />
        </div>
      </div>
    </ParallaxLayer>
  );
}

export default Footer;
