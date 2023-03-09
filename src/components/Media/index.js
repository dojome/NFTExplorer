import React from 'react'
import PlaceHolderImg from '../../assets/placeholder.png'

export function Media({ media }) {
  const mediaType = media[0]?.format
  switch (mediaType) {
    case 'mp4':
      return (
        <video width="350" height="350" className="h-60" controls autoPlay loop>
          <source src={media[0]?.raw} type="video/mp4" />
        </video>
      )
    case 'png':
      return <img className="h-60 rounded-3xl" src={media[0]?.thumbnail || PlaceHolderImg} alt="" />
    default:
      return <img className="h-60 rounded-3xl" src={media[0]?.thumbnail || PlaceHolderImg} alt="" />
  }
}
