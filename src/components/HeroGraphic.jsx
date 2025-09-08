import React from 'react'

/* A simplified animated dotted network graphic using SVG + CSS animation */
export default function HeroGraphic() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-auto">
      <defs>
        <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>
      </defs>

      <rect width="100%" height="100%" fill="transparent" />

      {/* Example network — circles connected by dotted lines */}
      <g stroke="#6b7280" strokeWidth="1" strokeDasharray="2 4" fill="none" opacity="0.8">
        <line x1="200" y1="20" x2="320" y2="80" />
        <line x1="200" y1="20" x2="120" y2="70" />
        <line x1="120" y1="70" x2="80" y2="180" />
        <line x1="320" y1="80" x2="280" y2="210" />
        <line x1="80" y1="180" x2="200" y2="320" />
        <line x1="280" y1="210" x2="200" y2="320" />
      </g>

      {/* Animated dots — multiple circles with subtle up/down animation */}
      <g>
        <circle className="dot" cx="200" cy="20" r="6" fill="#fff" />
        <circle className="dot delay1" cx="320" cy="80" r="6" fill="#7c3aed" />
        <circle className="dot delay2" cx="120" cy="70" r="6" fill="#ef4444" />
        <circle className="dot delay3" cx="80" cy="180" r="6" fill="#7c3aed" />
        <circle className="dot delay4" cx="280" cy="210" r="6" fill="#2563eb" />
        <circle className="dot delay5" cx="200" cy="320" r="6" fill="#fff" />
      </g>

      <style>{`
        .dot { transform-origin: center; animation: bob 3s ease-in-out infinite; filter: url(#blur); }
        .delay1 { animation-delay: 0.2s; }
        .delay2 { animation-delay: 0.4s; }
        .delay3 { animation-delay: 0.6s; }
        .delay4 { animation-delay: 0.8s; }
        .delay5 { animation-delay: 1s; }
        @keyframes bob {
          0% { transform: translateY(0) scale(1); opacity: 0.95; }
          50% { transform: translateY(-8px) scale(1.05); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.95; }
        }
      `}</style>
    </svg>
  )
}
