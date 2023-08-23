import React, { useEffect, useRef, useState } from 'react'
import { Card } from 'react-bootstrap'

export default function ImageSlider({images}) {

  const imagesRef = useRef()

  useEffect(()=>{
    let left = 300
    setInterval(()=>{
      if(left == -(images.length-1)*300)left = 0;
      else left -= 300;
      imagesRef.current.style.left = (left)+'px'
    },3000)
  },[])

  return (
    <div className='image-collection' >
    <div className='images' ref={imagesRef}>
      {images.map((image,i)=> <Card.Img key={'image'+i} variant="top" className='project-image' src={image} />)}
    </div>
</div>)

}
