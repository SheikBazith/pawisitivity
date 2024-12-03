import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className='about flex flex-col md:flex-row place-items-center gap-12 mt-12'>
        <div className='flex flex-col items-center md:items-start gap-6'>
            <h3 className='text-4xl'>About Us</h3>
            <p>Pawsitivity is a dedicated nonprofit organization focused on the
                rescue, rehabilitation, and care of stray and abandoned animals.
                Since 2010, we have been creating a safe haven where every
                animal receives the love, respect, and medical care they 
                deserve.</p>
                <button className='know-btn w-[100px]'>
                <NavLink to='/about'>Know More</NavLink></button>
        </div>
        <img className='md:w-[35%] rounded-xl' src='images/random-img.png'/>
    </div>
  )
}
