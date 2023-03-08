import React from 'react'
import { Logo } from '../../components'

export function NavBar() {
  return (
    <div className="fixed z-50 flex w-full items-center border-b border-slate-700 bg-slate-900 px-5 py-5 shadow-2xl">
      <Logo />
      <div className="w-full text-center text-3xl font-bold text-pink-500">NFT EXPLORER</div>
    </div>
  )
}
