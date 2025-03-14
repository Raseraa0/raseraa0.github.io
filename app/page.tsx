"use client";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.querySelectorAll('[data-bg]');
    let loadedCount = 0;

    const handleImageLoad = () => {
      loadedCount += 1;
      if (loadedCount === images.length) {
        setLoading(false);
      }
    };

    images.forEach((image) => {
      const url = image.getAttribute('data-bg');
      if (url) {
        const img = new Image();
        img.src = url;
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad;
      }
    });

    if (images.length === 0) {
      setLoading(false);
    }
  }, []);


  const parallaxRef = useRef<IParallax>(null)


  return (
    <main className="bg-black-100">

      {loading && <LoadingScreen />}
      <Parallax ref={parallaxRef} pages={2} style={{ top: "0", left: "0" }} className="animation minimal-size">
        <Hero parallaxRef={parallaxRef}/>
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
