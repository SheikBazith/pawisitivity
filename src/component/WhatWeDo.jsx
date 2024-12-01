import React from 'react'

export default function WhatWeDo() {
  return (
    <div className='what-we-do flex flex-col md:flex-row items-center justify-between mt-20 gap-6'>
        <div className='flex flex-col w-[92vw] gap-2 flex-1'>
        <div className='weDo-box h-[29.7vh] ] side-box'>
            <img className='w-[60px]' src='images/wwd-icon/icon-2.png'/>
            <h5>Adopt</h5>
            <p>Add a new member to your family</p>
        </div>
        <div className='weDo-box h-[29.7vh] side-box'>
            <img className='w-[60px]' src='images/wwd-icon/icon-4.png'/>
            <h5>Donate</h5>
            <p>Change lives one penny at a time</p></div>
        </div>

        <div className='adopt-box flex-1 flex flex-col justify-between items-center  h-[60vh]'>
        <div className='flex flex-col place-items-center mt-24 text-center'>
        <h5 className='text-[2.5rem]'>Adopt Now!!!</h5>
            <p>There are many wonderful pets
            waiting for you to take them
            home.</p>
            <button className='adopt-btn w-[100px] mt-3'>Adopt Now</button>
        </div>
        <div>
        <img src='images/dog-peek.png'/>
        </div>
        </div>

        <div className='w-[92vw] flex flex-col gap-2 flex-1'>
        <div className='weDo-box h-[29.7vh] side-box'>
            <img className='w-[60px]' src='images/wwd-icon/icon-1.png'/>
            <h5>Foster</h5>
            <p>Shelter until you can with out help</p></div>
        <div className='weDo-box h-[29.7vh] side-box'>
            <img className='w-[60px]' src='images/wwd-icon/icon-3.png'/>
            <h5>Volunteer</h5>
            <p>Help out with events & fundraisers</p>
        </div>
        </div>
    </div>
  )
}
