import React from 'react'

export default function IntroProductCard({Title, Price, OldPrice, ImgSrc, orderEvent}) {

  return (
    <div className='w-1/2 flex justify-center items-center flex-col gap-2'>
      <div className='w-full h-58'>
        <img draggable="false"  className="w-full rounded-lg" src={`./assets/Products Section/${ImgSrc}`} alt=''/>
      </div>

      <div className='flex items-center justify-center gap-2 mt-4'>
        <img className='w-5' src='./assets/Products Section/star-fill.png' alt=''/>
        <img className='w-5' src='./assets/Products Section/star-fill.png' alt=''/>
        <img className='w-5' src='./assets/Products Section/star-fill.png' alt=''/>
      </div>
      <h2 className='text-center text-lg md:text-2xl'>{Title}</h2>
      <div className='flex gap-2 font-bold text-dark'>
        <span className='text-sm'><s>{OldPrice}</s></span>
        <p className='md:text-lg'>{Price}</p>
      </div>
      <button id={Title} onClick={orderEvent} className='text-white bg-brown w-9/12 p-2 rounded-full mt-3 md:text-xl sm:p-4 '>Order now</button>
    </div>
  )
}
