import React from 'react'
import IntroProductCard from './IntroProductCard'
import menu from './ProductsMenu'

export default function ProductsSection() {

  const introList = menu.introProducts.map(({Title, Price, OldPrice, ImgSrc}, index) => {
    return <IntroProductCard 
                key={index} 
                Title={Title}
                Price={Price}
                OldPrice={OldPrice}
                ImgSrc={ImgSrc}
                />
  });

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
            {
              introList
            }
        </div>
       
      
    </div>
  )
}
