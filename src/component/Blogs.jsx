import React from 'react'

export default function Blogs() {
  return (
    <div className='blog mt-12 flex flex-col gap-3'>
        <div>
            <h4 className='text-3xl'>Latest Blogs</h4>
            <p>Read out latest and interesting blogs</p>
        </div>

        <div className='flex flex-col lg:flex-row gap-4'>
        <div className='blog-box'>
            <img src='images/blog-img/blog-1.png'/>
            <span>Fruits and Vegetables That You Can Feed Your Dogs</span>
            <button>Read More</button>
        </div>
        <div className='blog-box'>
            <img src='images/blog-img/blog-2.png'/>
            <span>How Can You Train Cats? – A Quick Guide on how to train</span>
            <button>Read More</button>
        </div>
        <div className='blog-box'>
            <img src='images/blog-img/blog-3.png'/>
            <span>Tips to Introduce Your New Cat to Your
            Old Cat</span>
            <button>Read More</button>
        </div>
        </div>

        <div className='grid place-content-center'>
        <button className='know-btn w-[140px]'>View More Blogs</button>
        </div>
    </div>
  )
}
