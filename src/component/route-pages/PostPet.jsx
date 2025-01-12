import React from 'react'

export default function PostPet() {
  return (
    <div className='adopt-now flex flex-col gap-12 mt-12'>
    <div className='bg-[#F6E6D6] text-center p-8'>
        <h3 className='text-2xl mb-3'>Fill the details of your pet so that we can find a home for them.</h3>
        <p>Each application is analyzed for its quality of responses. A visit to our shelter is mandatory followed
by a pre-adoption interview & background checks to ensure that the animal is given a stable, loving
& permanent home.</p>
      </div>


      <div className='bg-[#F6E6D6] grid grid-cols-2 p-12 gap-4 mb-12'>
        <input className='sub-place'  type='text' placeholder='Name' required/>
        <input className='sub-place'  type='text' placeholder='Address' required/>
        <input className='sub-place'  type='text' placeholder='Email' required/>
        <input className='sub-place'  type='text' placeholder='Have any Pets?' required/>
        <input className='sub-place'  type='text' placeholder='Phone Number' required/>
        <input className='sub-place'  type='text' placeholder='Pet ID you want to adopt' required/>
        <input className='sub-place col-span-2'  type='text' placeholder='Why adoption?' required/>
        <button className='adopt-btn bg-black w-[100%] col-span-2'>Submit</button>
      </div>
  </div>
  )
}
