import React from 'react'

export default function Contact() {
  return (
    <div className='contact flex justify-center m-4 gap-3'>
    <div className=''>
    <img className='w-[400px]' src='/images/contact/contact-img.png'/>
    </div>

      <div className='bg-[#F6E6D6] flex flex-col justify-center items-center gap-5 p-12'>
        <h3 className='text-4xl'>Contact Us</h3>
        <input className='sub-place' placeholder='Full Name' type='email'/>
        <input className='sub-place' placeholder='Email' type='email'/>
        <input className='sub-place' placeholder='Message' type='email'/>
        <button className='adopt-btn bg-black w-[100%]'>Submit</button>
      </div>
    </div>
  )
}
