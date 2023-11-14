import React from 'react'

export default function ProductsSection() {


  return (
    <div className='products-section flex flex-col gap-36'>
        <div className='products-main-bg z-10 flex justify-center items-center relative'>
          <div>
          <h2 className='text-4xl text-center text-white font-bold mb-3'>Enjoy the quality <br/> of our food</h2>
          <p className='text-white text-center'>Order your cookies now!</p>
          </div>
          
         <h3 className='menu-tag absolute text-white bg-brown bottom-0 text-3xl p-14 py-5 rounded-sm'>Our Menu</h3>
        </div>
        
        <div className='pro-introduction flex gap-2 px-2'> 
            <div className='bg-brown w-1/2 flex flex-col items-center rounded-lg relative h-60 justify-end gap-3'>
              <div className='w-10/12 h-auto absolute top-0'>
                <img className='h-full w-full' src='./assets/Products Section/proIntro-1.png' alt=''/>
              </div>
              <h3 className='text-white text-xl'>Simores Brownie</h3>
              <div className='text-white flex gap-2'>
                <p className='text-sm'><s>$15.00</s></p>
                <h3 className='text-yellow'>$10.00</h3>

              </div>

              <button className='bg-white w-full p-3 rounded-br-lg rounded-bl-lg'>Order now</button>
            </div>


            <div className='bg-brown w-1/2 flex flex-col items-center rounded-lg relative h-60 justify-end gap-3'>
              <div className='w-10/12 h-auto absolute top-0'>
                <img className='h-full w-full' src='./assets/Products Section/proIntro-1.png' alt=''/>
              </div>
              <h3 className='text-white text-xl'>Simores Brownie</h3>
              <div className='text-white flex gap-2'>
                <p className='text-sm'><s>$15.00</s></p>
                <h3 className='text-yellow'>$10.00</h3>

              </div>

              <button className='bg-white w-full p-3 rounded-br-lg rounded-bl-lg'>Order now</button>
            </div>
        </div>
       
      
    </div>
  )
}
