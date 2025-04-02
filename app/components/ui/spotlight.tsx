"use client";
import React from "react";
import { motion } from "motion/react";

type SpotlightProps = {
  gradientFirst?: string;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .09) 0, hsla(210, 100%, 55%, .0) 50%)",
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <motion.div
        animate={{
          x: [0, xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{ background: gradientFirst }}
          className="absolute bottom-0 left-0 
                    w-[800px] h-[500px] lg:w-[1200px] lg:h-[1200px] 
                    -translate-x-1/2 rotate-[-45deg] lg:translate-x-[-40%] lg:translate-y-[20%]"
        />
      </motion.div>

      <motion.div
        animate={{
          x: [0, -xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{ background: gradientFirst }}
          className="absolute bottom-0 right-0 
                    w-[400px] h-[700px] lg:w-[1400px] lg:h-[1400px] 
                    translate-x-[70%] translate-y-1/2 rotate-[-45deg] lg:translate-x-[-10%] lg:translate-y-[70%]"
        />

        <div
          style={{ background: gradientFirst }}
          className="absolute bottom-0 right-0 
                    w-[300px] h-[500px] lg:w-[1000px] lg:h-[1000px] 
                    translate-x-[90%] -translate-y-[40%] rotate-[-45deg] lg:translate-x-[30%] lg:translate-y-[0%]"
        />
      </motion.div>
    </motion.div>
  );
};
