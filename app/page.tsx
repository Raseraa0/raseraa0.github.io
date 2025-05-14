/**
 * @name page
 * @description Composant principal qui va contenir tout les pages.
 */

"use client";
import { IParallax, Parallax } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import LoadingScreen from "./components/LoadingScreen";
import Persona from "./Persona";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

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
  const parallaxRef = useRef<IParallax>(null)

  // Lorsque la page se charge, la variable est à false
  useEffect(() => {
    setLoading(false);
  }, []);


  return (
    <main>

      {/* Ecran de chargement; visible uniquement avant le 1er rendu du Hero */}
      {loading && <LoadingScreen />}

      {/* Conteneur parallax qui contiendra chaques pages*/}
      <Parallax ref={parallaxRef} pages={4} style={{ top: "0", left: "0" }} className="bg-blue-9 p-animation ">  

        {/* Hero pour la page d'acceuil */}
        <Hero parallaxRef={parallaxRef} />

        <Persona />
        <Projects />
        <Skills />
        <Footer />

      </Parallax>
    </main>
  );
}
