import React from 'react'

export default function YouMayAlsoLike({price, filePath, name}) {
  return (
    <section className='inv-con w-40 text-center flex flex-col overflow-hidden rounded-xl md:w-52 xl:w-64'>
      <div className='inv-con-img w-full h-36 relative flex justify-center items-center md:h-40 xl:h-52'>
        <img className='absolute inset-0 h-full w-full object-cover' src={`./assets/Products Section/${filePath}`} alt=''/>  
        <div className='absolute z-20 text-white'>
        <h2 className='text-lg font-semibold md:text-xl xl:text-2xl'>{name}</h2>
         <p className='text-yellow font-bold xl:text-xl xl:mt-2'>{price}</p>
        </div>
        
      </div>
      <button className='py-3'>Order now</button>
    </section>
  )
}
