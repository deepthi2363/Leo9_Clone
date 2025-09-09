import React from "react";

export default function Hero() {
  return (
    <section className="pt-[100px] pb-[60px] max-w-7xl mx-auto px-6 relative">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Side (Placeholder for animation/graphic) */}
        <div className="md:col-span-6 flex justify-center">
          <div className="w-full h-[350px] md:h-[450px] bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">
              Animation / Graphic will go here
            </span>
          </div>
        </div>

        {/* Right Side (Text content) */}
        <div className="md:col-span-6 text-center md:text-left">
        <h1 class="text-6xl md:text-8xl font-bold text-black dark:text-white">
          Design
        </h1>
        <h1 class="text-6xl md:text-8xl font-bold text-black dark:text-white">
          Transform
        </h1>
        <h1 class="text-6xl md:text-8xl font-bold text-black dark:text-white">
          Accelerate
        </h1>
          <p class="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Redefining user experiences through Behavioural Science & AI
          </p>
        </div>

      </div>
    </section>
  );
}
