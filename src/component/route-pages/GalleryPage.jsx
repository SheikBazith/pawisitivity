import React from 'react'
import shelterPhotos from '../../JSON/Shelter'


export default function GalleryPage() {
  return (
    <div className=' gallery-box flex flex-wrap gap-6 justify-center mt-12 mb-12'>
        {
            shelterPhotos.map((shelter)=>{
                return <img src={shelter.photo}/>
            })
        }
    </div>
  )
}
