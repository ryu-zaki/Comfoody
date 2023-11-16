import React from 'react'

export default function CardFeature({title, ImgSource}) {

  return (
    <div className='rounded-xl card bg-white text-black p-7 sm:w-96 md:w-11/12 md:py-16'>
      <img draggable='false' className='w-20 block mx-auto' src={ImgSource} alt=''/>
      <div className='text-center mt-5'>
          <h3 className='text-2xl mb-3 text-dark'>{title}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, urna ac eleifend bibendum, libero dolor feugiat elit. </p>
      </div>
    </div>
  )
}
