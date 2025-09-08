import React from 'react'
import logo from '../assets/logo.png'   // 👈 update the file name if it’s svg/jpg

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="Leo9 Logo"
        className="h-10 w-auto"
      />
      <span className="font-semibold text-lg text-gray-900 dark:text-gray-100">
        leo9
      </span>
    </div>
  )
}
