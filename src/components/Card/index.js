import React from 'react'
import { Media } from '../Media'

export function Card({ nft, onClick }) {
  return (
    <div
      className="flex max-w-sm cursor-pointer flex-col gap-2 rounded-3xl border-2 border-slate-800 bg-slate-800 p-3 hover:animate-pulse hover:border-2 hover:border-slate-500 hover:shadow-md"
      onClick={() => onClick()}
    >
      <div className="flex h-60 items-center justify-center">
        <Media nft={nft} />
      </div>
      <div className="flex flex-col text-center">
        <div className="text-pink-500">{nft?.title || `#${nft?.tokenId}`}</div>
        <div className="font-medium text-cyan-500">{nft?.contract?.name}</div>
      </div>
    </div>
  )
}
