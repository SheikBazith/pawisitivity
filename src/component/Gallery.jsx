import React from 'react'
import { NavLink } from 'react-router-dom'

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
        <NavLink className="w-[100%]" to="/gallery"><div className='gallery-box bg-[#FFA750] text-5xl flex justify-center items-center'><button>View More</button></div></NavLink>
    </div>
  )
}
