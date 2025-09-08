import React from 'react'
export default function Clients() {
  return (
    <section id="clients" className="max-w-7xl mx-auto px-6 pb-12">
      <div className="border-t border-gray-800 pt-8">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <p className="text-gray-400">Trusted by</p>
          <div className="flex gap-8 items-center flex-wrap">
            {['P&G','FAB','KPIT','TATA','BMW','SONY','HUGGIES'].map((c)=>(
              <div key={c} className="opacity-80">{c}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
