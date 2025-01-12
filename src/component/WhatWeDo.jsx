import React from 'react'
import { NavLink } from 'react-router-dom'

export default function WhatWeDo() {
  return (
    <div className='what-we-do mt-12 flex flex-col md:flex-row gap-6'>
        <div className='flex flex-col gap-5 flex-[0.35]'>
        <div className='weDo-box side-box'>
            <img className='w-[60px]' src='images/wwd-icon/icon-2.png'/>
            <h5>Adopt</h5>
            <p>Add a new member to your family</p>
        </div>
        <div className='weDo-box side-box'>
            <img className='w-[60px]' src='images/wwd-icon/icon-4.png'/>
            <h5>Donate</h5>
            <p>Change lives one penny at a time</p></div>
        </div>

        <div className='adopt-box flex flex-col gap-6 justify-between items-center text-center flex-[0.3] pl-2 pr-2'>
        <div>
        <h5 className='text-[2.5rem]'>Adopt Now!!!</h5>
            <p>There are many wonderful pets
            waiting for you to take them
            home.</p>
            <NavLink to="/adopt-now"><button className='adopt-btn w-[100px] mt-3'>Adopt Now</button></NavLink>
        </div>
        <div>
        <img src='images/dog-peek.png'/>
        </div>
        </div>

        <div className='flex flex-col gap-5 flex-[0.35]'>
        <div className='weDo-box side-box'>
            <img className='w-[60px]' src='images/wwd-icon/icon-1.png'/>
            <h5>Foster</h5>
            <p>Shelter until you can with out help</p></div>
        <div className='weDo-box side-box'>
            <img className='w-[60px]' src='images/wwd-icon/icon-3.png'/>
            <h5>Volunteer</h5>
            <p>Help out with events & fundraisers</p>
        </div>
        </div>
    </div>
  )
}
