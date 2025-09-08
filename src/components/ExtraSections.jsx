import React from 'react'

export default function ExtraSections() {
  return (
    <section id="extra" className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white/5 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-3">How we design</h3>
          <p className="text-gray-400">Short description of processes, research and behavioural science-driven thinking.</p>
        </div>
        <div className="bg-white/5 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-3">What we build</h3>
          <p className="text-gray-400">Example of case studies, product experiences, and AI-enabled research.</p>
        </div>
      </div>
    </section>
  )
}
