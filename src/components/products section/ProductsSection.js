import React from 'react'
import IntroProductCard from './IntroProductCard'
import menu from './ProductsMenu'
import ProductSecTemplate from './ProductSecTemplate';

export default function ProductsSection({setActiveInvPro, orderEvent}) {

  

  React.useEffect(() => {
    
    const menuTitle = document.querySelector(".products-section .menu-title");
    const introProductsCon = document.querySelector('.products-section .pro-introduction');
    const subTitle = document.querySelector('.products-section .all-products .subTitle');

    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } 
      })
    }, {
      threshold: .6
    });

    observer.observe(menuTitle);
    observer.observe(introProductsCon);
    observer.observe(subTitle);


    
  }, [])


  const introList = menu.introProducts.map(({Title, Price, OldPrice, ImgSrc}, index) => {
    return <IntroProductCard 
                key={index} 
                Title={Title}
                Price={Price}
                OldPrice={OldPrice}
                ImgSrc={ImgSrc}
                orderEvent={orderEvent}
                />
  });


  const allProductList = menu.AllProducts.map(({Title, ImgSrc}, index) => {
    return <ProductSecTemplate 
                key={index}
                Title={Title} 
                ImgSrc={ImgSrc}
                orderEvent={orderEvent}
                
    />
  });

  return (
    <div className='products-section flex flex-col gap-20 mt-20 sm:mt-10'>
        <div className='products-main-bg z-10 flex justify-center items-center relative xl:justify-start'>
          <div className='xl:ml-12 products-header'>
          <h2 className='text-4xl text-center text-white font-bold mb-3 sm:text-5xl xl:text-left xl:text-8xl xl:mb-6'>Enjoy the quality <br/> of our food</h2>
          <p className='text-white text-center sm:text-lg xl:text-left xl:text-3xl'>Order your cookies now!</p>
          </div>
        
        </div>
        <h2 className='menu-title text-5xl text-center font-semibold text-brown relative w-fit mx-auto sm:text-6xl lg:text-7xl xl:text-8xl'>Our <span className='text-white ml-2'>Menu</span></h2>

        <div className='pro-introduction flex gap-2 px-2 sm:px-5 md:w-11/12 md:mx-auto md:gap-5'> 
            {
              introList
            }
        </div>

        <div className='all-products xl:mt-10'>
          <h2 className='text-4xl mx-auto block subTitle  font-semibold text-brown relative w-fit sm:text-5xl xl:text-7xl'>All Products</h2>

          <div className='grid-section my-10 mt-20 px-2 flex flex-wrap gap-3 gap-y-10 justify-center xl:gap-6'>
            
          {allProductList}


          </div>

        </div>
       
      
    </div>
  )
}
