import React from 'react'

export function MetadataItem({ label, value, isCopy }) {
  return (
    <div className="w-100 flex flex-col border-b border-slate-500 py-3 md:flex-row">
      <div className="w-1/3 font-medium">{label}</div>
      <div className="group relative w-full cursor-pointer md:w-2/3">
        {value}
        {isCopy && (
          <div className="absolute top-0 right-0 hidden font-medium text-cyan-500 group-hover:block">Click to Copy</div>
        )}
      </div>
    </div>
  )
}
