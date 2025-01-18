"use client";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Hero from "./Hero";

export default function Home() {
  return (
    <main className="bg-black-100">

      <Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <Hero/>
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
