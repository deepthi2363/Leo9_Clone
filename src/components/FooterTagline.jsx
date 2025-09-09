import React from "react";
import brand1 from "../assets/bmw.png";


export default function FooterTagline() {
  return (
    <section className="w-full border-t border-gray-200 dark:border-gray-700 py-8 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        
        {/* Left Text */}
        <p className="text-xl font-semibold text-black dark:text-white whitespace-nowrap">
          Your trusted UI UX design agency.
        </p>

        {/* Vertical Line */}
        <span className="mx-6 h-6 border-l border-gray-400 dark:border-gray-600"></span>

        {/* Logo Scroller */}
        <div className="relative overflow-hidden flex-1 mt-4 -ml-4">
          <div className="flex w-max animate-scroll gap-12">
            {/* First Cycle of Logos */}
        <img src="../assets/bmw.png" alt="Brand 1" className="h-12" />
        <img src="../assets/eton.png" alt="Brand 2" className="h-12" />
        <img src="../assets/huggies.png" alt="Brand 3" className="h-12" />
        <img src="../assets/kpit.png" alt="Brand 4" className="h-12" />
        <img src="../assets/P&G.png" alt="Brand 5" className="h-12" />
        <img src="../assets/sony.png" alt="Brand 5" className="h-12" />
        <img src="../assets/tata.png" alt="Brand 5" className="h-12" />

            {/* Duplicate Logos for Seamless Loop */}
        <img src="../assets/bmw.png" alt="Brand 1" className="h-12" />
        <img src="../assets/eton.png" alt="Brand 2" className="h-12" />
        <img src="../assets/huggies.png" alt="Brand 3" className="h-12" />
        <img src="../assets/kpit.png" alt="Brand 4" className="h-12" />
        <img src="../assets/P&G.png" alt="Brand 5" className="h-12" />
        <img src="../assets/sony.png" alt="Brand 5" className="h-12" />
        <img src="../assets/tata.png" alt="Brand 5" className="h-12" />
          </div>
        </div>

      </div>
    </section>
  );
}
