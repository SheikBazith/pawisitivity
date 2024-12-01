import React from 'react'

export default function Gallery() {
  return (
    <div className='gallery flex flex-wrap mt-12 gap-2'>
        <div className='gallery-box bg-black text-5xl'><h4>Our Gallery</h4></div>
        <img src='images/gallery/gallery-1.png'/>
        <img src='images/gallery/gallery-2.png'/>
        <img src='images/gallery/gallery-3.png'/>
        <img src='images/gallery/gallery-4.png'/>
        <img src='images/gallery/gallery-5.png'/>
        <img src='images/gallery/gallery-6.png'/>
        <div className='gallery-box bg-[#FFA750] text-5xl flex justify-center items-center'><h4>View More</h4></div>
    </div>
  )
}
