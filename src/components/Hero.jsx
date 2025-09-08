import React from 'react'
import Graphic from './HeroGraphic'

export default function Hero() {
  return (
    <section className="pt-12 pb-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* graphic */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <div className="hero-graphic">
            <Graphic />
          </div>
        </div>

        {/* text */}
        <div className="md:col-span-7">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-200">
            Design <br/> Transform <br/> Accelerate
          </h1>

          <p className="mt-6 max-w-xl text-gray-400 text-lg">
            Redefining user experiences through Behavioural Science &amp; AI
          </p>

          <div className="mt-12 flex items-center gap-6">
            <p className="text-gray-400">Your trusted UI UX design agency.</p>
            <div className="h-10 border-l border-gray-700"></div>
            {/* small client badges placeholders */}
            <div className="flex gap-6 items-center">
              <div className="opacity-80">P&G</div>
              <div className="opacity-80">KPIT</div>
              <div className="opacity-80">TATA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
