import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='nav-bar flex mt-6 place-content-between items-center'>
       <NavLink to={'/'}><div className='flex justify-center items-center gap-4'>
            <img className='w-[63px]' src='images/pawsitivity 1.png'/>
            <h1 className='text-5xl'>Pawsitivity</h1>
        </div></NavLink>
        <div>
            <ul className='flex hidden lg:flex gap-5 items-center'>
                <NavLink to={"/"} ><li>Home</li></NavLink>
                <NavLink to={"/about"} ><li>About</li></NavLink>
                <li>Gallery</li>
                <li>Contact</li>
                <li><button>Adopt Now!</button></li>
            </ul>
        </div>
    </div>
  )
}
