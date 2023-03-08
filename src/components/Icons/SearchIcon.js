import React from 'react'

export function SearchIcon({ className = 'stroke-white', ...props }) {
  return (
    <svg
      className={className}
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11.7666" cy="11.7666" r="8.98856" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        opacity="0.5"
        d="M18.0183 18.4851L21.5423 22"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
