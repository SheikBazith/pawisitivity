import React from 'react'

export default function AboutUsRoute() {
  return (
    <div className='about-page flex flex-col gap-6 mt-6 mb-6'>
        <img src='images/about-page/about-wall.png'/>

        <div className='flex flex-col text-center md:flex-row md:text-left items-center gap-16'>
          <div className='flex-[0.7]'>
            <h4 className='text-3xl'>Our Mission</h4>
            <p>Pawisitivity is a compassionate and dedicated adoption group focused on connecting loving homes with rescued pets in need. With a mission to promote kindness, care, and positive change, Pawisitivity works tirelessly to provide a safe haven for animals, ensuring they receive the love and attention they deserve. Through foster
            programs, education, and community outreach, Pawisitivity helps create lifelong bonds between pets and families, making a lasting impact on
            both animals and their new owners.</p>
          </div>
          <div className='flex-[0.3]' >
          <img className='rounded-xl' src='images/about-page/story-img.png'/>

          </div>
        </div>

        <div className='flex flex-col gap-4 p-6 bg-[#F6E6D6] text-center'>
            <h4 className='text-3xl'>Our Story</h4>
            <p>Pawisitivity was founded in 2015 by a group of passionate animal advocates who wanted to make a difference in the lives of pets in need. What started as a small team of volunteers rescuing dogs and cats from high-kill shelters quickly grew into a well-established adoption group, committed to promoting animal welfare and ensuring that every pet has a chance to thrive in a loving home.</p>
            <img src='images/about-page/help-doggo.png'/>
            <p>Pawisitivity is not just an adoption group, but a community-driven movement, working to raise awareness about the importance of responsible pet ownership and advocating for better conditions in animal shelters. The organization continues to grow and evolve, all while staying true to its core values of kindness, compassion, and making a lasting impact on both animals and the people who adopt them.</p>
        </div>
          
        <div className='p-6'>
        <h4 className='text-3xl mb-3'>Founder</h4>
        <p>The organization’s founders were motivated by the overwhelming number of animals in need of
            rescue and the belief that every pet deserves a second chance. They initially focused on fostering
            and finding homes for stray, abandoned, and neglected animals, but as their mission gained
            momentum, Pawisitivity expanded its efforts to include community education, spay and neuter
            programs, and partnerships with other local rescue groups.</p>
        </div>

        <div className='flex flex-col md:flex-row gap-6 p-6 bg-[#FFA750]'>
          <h5 className='text-3xl flex-[0.7] mt-7 text-white'>
                    “Helping vulnerable animals and keeping pets in
          safe and loving homes requires a commitment from
          all of us—advocates, pet owners, shelters,
          leaders, and entire communities. When we work
          together under a common cause, we’re both saving
          lives and elevating our society and its laws to
          ensure cruelty victims and other at-risk animals
          receive the protection and care they deserve.”
          </h5>

          <div className='flex-[0.3] text-center text-2xl '>
            <img className='mb-3' src='images/about-page/founder.png'/>
            <h5>Matthew Chandrasekhar
            </h5>
            <h5>Pawsitivity President & CEO</h5>
          </div>
        </div>
    </div>
  )
}
