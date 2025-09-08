import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function HeroParticles() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="hero-particles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          number: { value: 50 },
          size: { value: 3, random: { enable: true, minimumValue: 1 } },
          color: { value: ["#FFC107", "#FF5722", "#FFFFFF", "#FFEB3B"] },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            outModes: "out",
          },
          opacity: { value: 0.9 },
        },
        emitters: {
          direction: "none",
          rate: { delay: 0.05, quantity: 4 },
          size: { width: 0, height: 0 },
          position: { x: 50, y: 50 }, // center
        },
      }}
      className="absolute inset-0 h-full w-full"
    />
  );
}
