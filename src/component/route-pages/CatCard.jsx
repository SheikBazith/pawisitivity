import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DogCard(props) {
  return (
        <div className='p-2 bg-white rounded-md'>
            <img className='w-[300px]' src={props.img}/>
            <h3 className='text-center text-xl mt-2'>{props.name}</h3>
            <p className='text-center text-sm mb-2'>{props.breed}</p>
            <NavLink to="/adopt-now"><button className='adopt-btn bg-black w-[100%] col-span-2'>Adopt</button></NavLink>
        </div>
  )
}
