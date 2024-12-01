import React from 'react'

export default function Scope() {
  return (
    <div className='scope mt-12 flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
            <h4 className='text-2xl'>What We Do</h4>
            <button className='know-btn'>Know More</button>
        </div>

        <div className='flex flex-col md:flex-row justify-between gap-6'>
            <div className='scope-box flex-1'>
                <p>Controlling the population of stray animals through
                    humane sterilization and
                    vaccination drives,
                    preventing the spread of
                    diseases.</p>
                <span>Sterilization & Vaccination</span>
            </div>

            <div className='scope-box flex-1'>
                <p>
                Providing critical rescue services for animals in distress, whether injured in accidents or abandoned by their owners.
                </p>
                <span>Emergency Rescue</span>
            </div>

            <div className='scope-box flex-1'>
                <p>
                Our state-of-the-art facility offers essential medical care, surgeries, and rehabilitation to help animals recover and
                thrive.
                </p>
                <span>Medical Care & Rehabilitation</span>
            </div>
        </div>
    </div>
  )
}
