import React from 'react'
import dogDetails from '../../JSON/Dog'
import DogCard from './DogCard'

export default function DogDetails() {
  return (
    <div className='animal-adoption flex flex-wrap gap-12 mt-6 mb-6 items-center justify-center'>
    {
    dogDetails.map((dog) => {
      return <DogCard 
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
