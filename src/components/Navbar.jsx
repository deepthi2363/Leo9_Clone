import React from 'react'
import Logo from './Logo'

export default function Navbar({ dark, setDark }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Force logo/name to stay black */}
          <div className="text-black">
            <Logo />
          </div>

          <nav className="hidden md:flex gap-12 text-black font-semibold text-lg">
            <a className="hover:text-blue-600 transition-colors" href="#work">Work</a>
            <a className="hover:text-blue-600 transition-colors" href="#services">Services</a>
            <a className="hover:text-blue-600 transition-colors" href="#clients">Clients</a>
            <a className="hover:text-blue-600 transition-colors" href="#about">About</a>
            <a className="hover:text-blue-600 transition-colors" href="#knowledge">Knowledge</a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          {/* Theme toggle still works but navbar/logo remain unchanged */}
          <button
            aria-label="Toggle theme"
            onClick={() => setDark(!dark)}
            className="w-12 h-12 rounded-md flex items-center justify-center border border-gray-300 text-black"
          >
            {dark ? '🌙' : '☀️'}
          </button>

          <a
            className="ml-2 inline-block px-6 py-3 rounded-md bg-black text-white font-semibold hover:bg-gray-800 transition-colors text-lg"
            href="#contact"
            role="button"
          >
            Contact
          </a>

          {/* Mobile menu */}
          <button className="md:hidden ml-2 p-3 text-black text-2xl" aria-label="Open menu">☰</button>
        </div>
      </div>
    </header>
  )
}
