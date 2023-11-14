import React from 'react'

export default function IntroProductCard({Title, Price, OldPrice, ImgSrc}) {
  return (
    <div className='w-1/2 flex justify-center items-center flex-col gap-2'>
      <div className='w-full h-58'>
        <img draggable="false" className="w-full" src={`./assets/Products Section/${ImgSrc}`} alt=''/>
      </div>

      <div className='flex items-center justify-center gap-2 mt-4'>
        <img className='w-5' src='./assets/Products Section/star-fill.png' alt=''/>
        <img className='w-5' src='./assets/Products Section/star-fill.png' alt=''/>
        <img className='w-5' src='./assets/Products Section/star-fill.png' alt=''/>
      </div>
      <h2 className='text-center text-lg'>{Title}</h2>
      <div className='flex gap-2'>
        <span className='text-sm'><s>{Price}</s></span>
        <p>{OldPrice}</p>
      </div>
      <button className='text-white bg-brown w-9/12 p-2 rounded-full mt-3'>Order now</button>
    </div>
  )
}
