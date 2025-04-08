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
      {/* todo enlever le pink bg a la fin !!! mettre blue 9 */}
      <Parallax ref={parallaxRef} pages={5} style={{ top: "0", left: "0" }} className="bg-blue-9 p-animation ">  

        {/* Hero pour la page d'acceuil */}
        <Hero parallaxRef={parallaxRef} />

        <Persona />
        <Projects />
        <Skills />

      </Parallax>
    </main>
  );
}

// TODO mettre dans cn pour concatener les classe partout