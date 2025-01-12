import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [navMode, setNavMode] = useState(false);

  const toggleNav = () => {
    setNavMode(!navMode);
    console.log(navMode);
  }

  
  return (
    <div className='nav-bar flex flex-col lg:flex-row mt-6 place-content-between items-center gap-6'>
    <div className='flex items-center gap-36'>
        <NavLink to={'/'}><div className='flex justify-center items-center gap-4'>
            <img className='w-[33px]' src='images/pawsitivity 1.png'/>
            <h1 className='text-4xl'>Pawsitivity</h1>
        </div>
        </NavLink>
        <div className='md:hidden w-[20px] cursor-pointer' onClick={toggleNav}><img src='images/nav-icon.png'/></div>
    </div>
        <div className={navMode ? "block" : "hidden md:block"}>
            <ul className='flex flex-col md:flex-row gap-5 items-center'>
                <NavLink to={"/"} ><li className='list-nav'>Home</li></NavLink>
                <NavLink to={"/about"} ><li className='list-nav'>About</li></NavLink>
                <NavLink to={"/gallery"} ><li className='list-nav'>Gallery</li></NavLink>
                <NavLink to={"/contact"}><li className='list-nav'>Contact</li></NavLink>
                <NavLink to={"/adopt-now"}><li className='list-nav'><button>Adopt Now!</button></li></NavLink>
            </ul>
        </div>
    </div>
  )
}
