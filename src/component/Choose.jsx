import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Choose() {
  return (
    <div className='choose mt-12'>
        <h4 className='text-3xl'>Choose A Pet</h4>
        <div className='flex flex-col md:flex-row gap-12 justify-evenly mt-6'>

        <div>
        <img className='animal-img w-[600px]' src='images/dog.png' />
            <div className='flex justify-between mt-2 items-center'>
                <h4 className='text-2xl text-black'>Dog</h4>
                <NavLink to={'/dog'}><button className='arrow-box'><img className='w-[15px]' src='images/arrow.png'/></button></NavLink>
            </div>
            </div>

        <div>
        <img className='animal-img w-[600px]' src='images/cat.png' />
            <div className='flex justify-between mt-2 items-center'>
                <h4 className='text-2xl text-black'>Cat</h4>
                <NavLink to={'/cat'}><button className='arrow-box'><img className='w-[15px]' src='images/arrow.png'/></button></NavLink>
            </div>
            </div>
        </div>
    </div>
  )
}
