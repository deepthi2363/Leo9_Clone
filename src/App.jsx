import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import ExtraSections from './components/ExtraSections'

export default function App() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.body.style.background = dark ? 'var(--leo-bg)' : '#ffffff'
  }, [dark])

  return (
    <div className="min-h-screen font-display text-gray-100 dark:text-gray-200">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Clients />
        <ExtraSections />
      </main>
    </div>
  )
}
