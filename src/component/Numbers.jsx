import React from 'react'

export default function Numbers() {
  return (
    <div className='numbers flex flex-col md:flex-row justify-evenly gap-20 mt-20'>
        <div className='flex flex-col items-center'>
            <h4 className='text-4xl'>40000+</h4>
            <p className='text-xl'>Adoption Applications</p>
        </div>
        <div className='flex flex-col items-center'>
        <h4 className='text-4xl'>6000+</h4>
        <p className='text-xl'>Dogs Adopted</p>
        </div>
        <div className='flex flex-col items-center'>
        <h4 className='text-4xl'>4000+</h4>
        <p className='text-xl'>Cats Adopted</p>
        </div>
    </div>
  )
}
