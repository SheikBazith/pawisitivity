import React from 'react'
import CatCard from './CatCard'
import catDetails from '../../JSON/Cat'

export default function CatDetails() {
  return (
    <div className='animal-adoption flex flex-wrap gap-12 mt-6 mb-6 items-center justify-center'>
    {
    catDetails.map((dog) => {
      return <CatCard 
        key={dog.id}
        name={dog.name}
        img={dog.photo}
        breed={dog.breed}
      />
    })
    }
    </div>
  )
}
