/**
 * @name page
 * @description Composant principal qui va contenir tout les pages.
 */

"use client";
import { IParallax, Parallax } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import LoadingScreen from "./components/LoadingScreen";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import BackToTopButton from "./components/BackToTopButton";

/**
 * Fonction principal
 * @returns
 *      - Ecran de chargement temporaire
 *      - Hero (1ère page)
 *      - Block temporaire
 */
export default function Home() {
  // Booléen qui indique si la page est entrain de se charger
  const [loading, setLoading] = useState(true);

  // Référence de l'objet parallax
  const parallaxRef = useRef<IParallax>(null);

  // Lorsque la page se charge, la variable est à false
  useEffect(() => {
    setLoading(false);
  }, []);

  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    if (parallaxRef.current) {
      const scrollTop = parallaxRef.current.container.current.scrollTop;
      const pageHeight = parallaxRef.current.space;
      setIsTop(scrollTop < pageHeight);
    }
  };

  useEffect(() => {
    const container = parallaxRef.current?.container.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <main>
      {/* Ecran de chargement; visible uniquement avant le 1er rendu du Hero */}
      {loading && <LoadingScreen />}

      <BackToTopButton
        parallaxRef={parallaxRef}
        className={isTop ? "translate-x-20 opacity-0" : "opacity-100"}
      />
      {/* Conteneur parallax qui contiendra chaques pages*/}
      <Parallax
        ref={parallaxRef}
        pages={4}
        style={{ top: "0", left: "0" }}
        className="p-animation bg-blue-9"
      >
        {/* Hero pour la page d'acceuil */}
        <Hero parallaxRef={parallaxRef} />

        <About />
        <Projects />
        <Skills />
        <Footer />
      </Parallax>
    </main>
  );
}
