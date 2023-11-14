import React from 'react'

export default function IntroProductCard({Title, Price, OldPrice, ImgSrc}) {
  return (
    <div className='bg-lowOpacityBrown w-1/2 flex flex-col items-center rounded-lg relative h-56 justify-end gap-3'>
      <div className='w-10/12 h-auto absolute top-0'>
        <img className='h-full w-full' src={`./assets/Products Section/${ImgSrc}`} alt=''/>
      </div>
      <h3 className='text-white text-lg'>{Title}</h3>
      <div className='text-white flex gap-2'>
        <p className='text-sm'><s>{OldPrice}</s></p>
        <h3 className='text-yellow'>{Price}</h3>  
      </div> 
      <button className='bg-white w-full p-3 rounded-br-lg rounded-bl-lg'>Order now</button>
    </div>
  )
}
