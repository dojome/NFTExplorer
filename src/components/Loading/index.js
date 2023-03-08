import React from 'react'

export function Loading() {
  return (
    <div className="my-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {[0, 1, 2, 3, 4, 5].map(item => (
        <div className="mx-auto w-full max-w-sm rounded-2xl  border bg-slate-800 p-4 shadow" key={item}>
          <div className="flex animate-pulse flex-col space-x-4">
            <div className="h-60 w-full rounded-2xl bg-slate-200"></div>
            <div className="mt-2 flex-1 space-y-6 py-1">
              <div className="h-2 rounded bg-slate-200"></div>
              <div className="h-2 rounded bg-slate-200"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
