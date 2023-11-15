import React from 'react'
import IntroProductCard from './IntroProductCard'
import menu from './ProductsMenu'
import ProductSecTemplate from './ProductSecTemplate';

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


  const allProductList = menu.AllProducts.map(({Title, ImgSrc}, index) => {
    return <ProductSecTemplate 
                key={index}
                Title={Title} 
                ImgSrc={ImgSrc}
                
    />
  });

  return (
    <div className='products-section flex flex-col gap-20 mt-20'>
        <div className=' products-main-bg z-10 flex justify-center items-center relative'>
          <div>
          <h2 className='text-4xl text-center text-white font-bold mb-3'>Enjoy the quality <br/> of our food</h2>
          <p className='text-white text-center'>Order your cookies now!</p>
          </div>
        
        </div>
        <h2 className='menu-title text-5xl text-center font-semibold text-brown relative w-fit mx-auto'>Our <span className='text-white ml-2'>Menu</span></h2>
        <div className='pro-introduction flex gap-2 px-2'> 
            {
              introList
            }
        </div>

        <div className='all-products'>
          <h2 className='text-4xl subTitle ml-5 font-semibold text-brown relative w-fit'>All Products</h2>

          <div className='grid-section my-10 px-2'>
            
          {allProductList}


          </div>

        </div>
       
      
    </div>
  )
}
