import React from 'react'

export default function Homepage() {
  return (
    <div className='home-page mt-6 flex flex-col md:flex-row justify-between'>
        <div className='p-[2rem] flex flex-col justify-center items-center md:items-start mt-12 ml-6'>
            <h2 className='text-8xl lg:text-[180px] leading-[3rem] text-center md:text-left md:leading-[5.5rem]'>ADOPT,<br></br><span className='text-5xl md:text-8xl'>DON'T SHOP</span></h2>
            <p className='text-center md:text-left'>Open your heart and home to an animal in need. <br></br>
            Bring home a forever friend.</p>
            <button className='adopt-btn mt-9 bg-black w-[100px]'>Adopt Now!</button>
        </div>
            <img className='lg:w-[45%]' src='images/cat-bg.png'/>
    </div>
  )
}