import React from 'react'
import PlaceHolderImg from '../../assets/placeholder.png'

export function Media({ nft }) {
  const mediaType = nft?.media[0]?.format
  switch (mediaType) {
    case 'mp4':
      return (
        <video width="350" height="350" className="h-60" controls autoPlay loop alt={mediaType}>
          <source src={nft?.media[0]?.gateway || nft?.media[0]?.raw} type="video/mp4" />
        </video>
      )
    case 'png' || 'jpeg' || 'jpg' || 'gif':
      return (
        <img
          className="h-60 rounded-3xl"
          src={nft?.media[0]?.gateway || nft?.contract?.openSea?.imageUrl || PlaceHolderImg}
          alt={mediaType}
        />
      )
    default:
      return (
        <img
          className="h-60 rounded-3xl"
          src={nft?.media[0]?.gateway || nft?.contract?.openSea?.imageUrl || PlaceHolderImg}
          alt={mediaType}
        />
      )
  }
}
