import React from "react";
import HeroAnimation from "./HeroAnimation";

export default function Hero() {
  return (
<section className="pt-[150px] pb-[60px] max-w-7xl mx-auto px-6 relative">
  {/* Invisible spacer to move scroll down slightly */}
  <div style={{ height: '2rem' }}></div>

  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
    {/* Left Side: Lion Animation */}
    <div className="md:col-span-6 flex justify-center items-center">
      <div className="w-full aspect-[16/9] rounded-2xl">
        <HeroAnimation />
      </div>
    </div>

    {/* Right Side: Text */}
    <div className="md:col-span-6 text-center md:text-left">
      <h1 className="text-6xl md:text-8xl font-bold text-black dark:text-white">Design</h1>
      <h1 className="text-6xl md:text-8xl font-bold text-black dark:text-white">Transform</h1>
      <h1 className="text-6xl md:text-8xl font-bold text-black dark:text-white">Accelerate</h1>
      <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
        Redefining user experiences through Behavioural Science & AI
      </p>
    </div>
  </div>
</section>

  );
}
