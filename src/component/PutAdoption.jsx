import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PutAdoption() {
  return (
    <div className='about flex flex-col md:flex-row place-items-center gap-12 mt-12 text-center md:text-left'>
               <img className='md:w-[35%] rounded-xl' src='images/adoption-desire.jpg'/>
           <div className='flex flex-col items-center md:items-start gap-6'>
               <h3 className='text-4xl'>Put Your Pets for Adoption</h3>
               <p>It's understood that caring for pets might be challenging at times. In such cases, we are here to assist you. Instead of abandoning your pet on the street, find a nice environment for them. Put your pet's information on our website so we can locate a home for them.</p>
                   <button className='know-btn w-[100px]'>
                   <NavLink to='/post-adoption'>Sign In</NavLink></button>
           </div>
       </div>
  )
}
