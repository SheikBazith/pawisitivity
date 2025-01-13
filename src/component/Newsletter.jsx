import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#F6E6D6] flex flex-col lg:flex-row gap-9 justify-evenly items-center p-12 mt-6'>

        <div>
            <h4 className='text-5xl text-center'>Join our Newsletter</h4>
            <p className='text-center'>Sign up our newsletter for latest news</p>
        </div>
        <div className='flex'>
            <input className='sub-place' placeholder='Enter Email Address' type='email'/>
            <button className='sub-btn'>Subscribe</button>
        </div>
    </div>
  )
}
