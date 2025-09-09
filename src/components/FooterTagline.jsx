import React from "react";
import bmw from "../assets/bmw.png";
import eton from "../assets/eton.png";
import huggies from "../assets/huggies.png";
import kpit from "../assets/kpit.png";
import pg from "../assets/P&G.png"; 
import sony from "../assets/sony.png";
import tata from "../assets/tata.png";

const brands = [bmw, eton, huggies, kpit, pg, sony, tata];

export default function FooterTagline() {
  return (
    <section className="w-full border-t border-gray-200 dark:border-gray-700 py-8 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center">

        {/* Left Text */}
        <p className="text-xl font-semibold text-black dark:text-white whitespace-nowrap">
          Your trusted UI UX design agency.
        </p>

        {/* Vertical Line */}
        <span className="mx-6 h-4 border-l border-gray-400 dark:border-gray-600"></span>

        {/* Logo Scroller */}
        <div className="relative overflow-hidden flex-1 mt-4 -ml-4">
          <div className="flex w-max animate-scroll gap-12 items-center">
            {/* First Cycle */}
            {brands.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Brand ${i + 1}`}
                className="h-12 dark:filter dark:invert"
              />
            ))}

            {/* Duplicate Cycle for seamless loop */}
            {brands.map((logo, i) => (
              <img
                key={`dup-${i}`}
                src={logo}
                alt={`Brand duplicate ${i + 1}`}
                className="h-12 dark:filter dark:invert"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
