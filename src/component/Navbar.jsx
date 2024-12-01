import React from 'react'

export default function Navbar() {
  return (
    <div className='nav-bar flex mt-6 place-content-between items-center'>
        <div className='flex justify-center items-center gap-4'>
            <img className='w-[63px]' src='images/pawsitivity 1.png'/>
            <h1 className='text-5xl'>Pawsitivity</h1>
        </div>
        <div>
            <ul className='flex hidden lg:flex gap-5 items-center'>
                <li>Home</li>
                <li>About</li>
                <li>Gallery</li>
                <li>Contact</li>
                <li><button>Adopt Now!</button></li>
            </ul>
        </div>
    </div>
  )
}
