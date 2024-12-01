import React from 'react'

export default function Footer() {
  return (
    <div className='footer flex flex-col p-12 gap-4'>
        <div className='flex flex-col md:flex-row justify-between md:items-center gap-6'>
        <div className='flex-1'>
            <div className='flex gap-5'>
                <img className='w-[63px]'  src='images/pawsitivity 2.png'/>
                <h1 className='text-5xl text-white'>Pawsitivity</h1>
            </div>
            <p className='mt-5 text-sm'>At Pawsitivity, we believe that every living being
            deserves a second chance.</p>
            <p className='text-sm'>AND ALWAYS ADOPT, NOT SHOP.</p>
            <div className='flex-1 flex place-items-start gap-3 mt-6 w-[130px] p-3 border border-white rounded-full'>
            <button><img className='w-[20px]' src='images/social-icon/fb.png'/></button>
            <button><img className='w-[20px]' src='images/social-icon/instagram.png'/></button>
            <button><img className='w-[20px]' src='images/social-icon/ln.png'/></button>
            <button><img className='w-[20px]' src='images/social-icon/x.png'/></button>
        </div>
        </div>

        <div className='flex-1 flex flex-col items-end'>
            <h4 className='text-white text-3xl text-right mb-4'>Adopt,<br></br> Don't Shop</h4>
            <div className='flex gap-3 mb-3'>
                <p>+91 7X0XX0X1X</p>
                <div className='w-[20px]'><img src='images/phone.png'/></div>
            </div>

            <div className='flex gap-3 mb-3'>
                <p>pawsitivity@paw.com</p>
                <div className='w-[20px]'><img src='images/mail.png'/></div>
            </div>

            <div className='flex gap-3 mb-3'>
                <p>Bengaluru, Karnataka</p>
                <div className='w-[20px]'><img src='images/location.png'/></div>
            </div>
        </div>
        </div>

        <div className='bg-white h-1 '></div>
        <div className='text-white flex flex-col md:flex-row justify-between items-center gap-3'>
            <span>PAWSITIVITY - 2024 All right reserved.</span>
            <div className='flex gap-5'>
                <span>Terms of Use</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}
