import React from 'react'

export default function ProductSecTemplate({Title, ImgSrc, orderEvent}) {


  return (
    <section>
       <div className='relative w-full h-auto overflow-hidden rounded-lg'>
       <img className='absolute bg-img inset-0 w-full h-full object-cover object-center' src={`./assets/Products Section/${ImgSrc}`} alt=''/>
         <img className='absolute z-10' src='./assets/orig-logo.jpg'  width="40" alt=''/>
       <button onClick={orderEvent} id={Title} className='py-3 w-4/6 absolute z-10 text-white top-1/2 left-1/2 text-sm font-semibold rounded-full md:py-4'>Order now</button>
       </div>

       <h3 className='text-center mt-2 font-semibold text-dark sm:text-xl'>{Title}</h3>
    </section>
  )
}
