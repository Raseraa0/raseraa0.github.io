/**
 * @name page
 * @description Composant principal qui va contenir tout les pages.
 */

"use client";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import LoadingScreen from "./components/LoadingScreen";
import Persona from "./Persona";
import Projects from "./Projets";
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
    <main className="bg-black-100">

      {/* Ecran de chargement; visible uniquement avant le 1er rendu du Hero */}
      {loading && <LoadingScreen />}

      {/* Conteneur parallax qui contiendra chaques pages*/}
      <Parallax ref={parallaxRef} pages={5} style={{ top: "0", left: "0" }} className="p-animation ">
          
        {/* Hero pour la page d'acceuil */}
        <Hero parallaxRef={parallaxRef} />

        <Persona />
        <Projects />
        <Skills />

        {/* Block temporaire */}
        <ParallaxLayer offset={1} speed={0}>

          <div className="text-white-1 p-20 bg-blue-9">
            <h2 className="text-3xl py-10">lorem lipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi
              fuga aspernatur nemo. Ratione suscipit animi laboriosam
              consectetur. Quae iure facilis nemo repellendus ipsa dolore
              debitis vel laboriosam atque nostrum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi
              fuga aspernatur nemo. Ratione suscipit animi laboriosam
              consectetur. Quae iure facilis nemo repellendus ipsa dolore
              debitis vel laboriosam atque nostrum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi
              fuga aspernatur nemo. Ratione suscipit animi laboriosam
              consectetur. Quae iure facilis nemo repellendus ipsa dolore
              debitis vel laboriosam atque nostrum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi
              fuga aspernatur nemo. Ratione suscipit animi laboriosam
              consectetur. Quae iure facilis nemo repellendus ipsa dolore
              debitis vel laboriosam atque nostrum?
            </p>
          </div>
        </ParallaxLayer>

      </Parallax>
    </main>
  );
}
