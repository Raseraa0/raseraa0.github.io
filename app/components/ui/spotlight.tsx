"use client";
import React from "react";
import { motion } from "motion/react";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
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
          style={{
            transform: "translateY(0%) translateX(-50%) rotate(-45deg)",
            background: gradientFirst,
            width: "800px",
            height: "500px",
          }}
          className={`absolute bottom-0 left-0`}
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
          style={{
            transform: "translateY(50%) translateX(70%) rotate(-45deg)",
            background: gradientFirst,
            width: "400px",
            height: "700px",
          }}
          className={`absolute bottom-0 right-0`}
        />

        <div
          style={{
            transform: "translateY(-40%) translateX(90%) rotate(-45deg)",
            background: gradientFirst,
            width: "300px",
            height: "500px",
          }}
          className={`absolute bottom-0 right-0`}
        />
       </motion.div>
    </motion.div>
  );
};
