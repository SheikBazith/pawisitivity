import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

export default function ErrorPage() {


  return (
    <div>
    <Navbar />
    <div className='flex flex-col justify-center items-center p-12'>
    <h3 className='text-3xl'>404 ERROR PAGE</h3>
    <p>Looks like even you are lost and need to go back home.</p>
    <img className='w-[400px]' src='images/404-NOT-FOUND.png'/>
    <button className='know-btn'>
    <NavLink to='/'>Go Back to Home</NavLink></button>
    </div>
      <Footer />
    </div>
  )
}
