import React from 'react'
import './style.css';
import YouMayAlsoLike from './YouMayAlsoLike';
import data from '../../data/YouMayAlsoLikeData';
import ReviewData from '../../data/ReviewsData';
import ProReview from './ProReview';


export default function IndivPro() {
  const usersLikeList = data.map(({name, price, filePath}, index) => {
    return <YouMayAlsoLike name={name} price={price}filePath={filePath} key={index} 
    />
  });

  const reviewsList = ReviewData.map(({username, date, comment, stars}, index) => {
    return <ProReview username={username} date={date} comment={comment} key={index} stars={stars}/>

  })

  return (
    <div className="mt-9 flex flex-col gap-20 mx-3 mb-10 sm:mx-10 md:mx-0 md:items-center lg:gap-24 xl:gap-32">
      <section className='flex flex-col items-center w-10/12 mx-auto gap-10 lg:flex-row xl:justify-center xl:gap-14'>
        {/* Main Product Picture */}
        <section className='inv-main-img w-full bg-yellow overflow-hidden rounded-xl sm:w-9/12 md:w-7/12'>
          <img draggable="false" className='w-full' src='./assets/Products Section/proIntro-2.png' alt=''/>
        </section>

        {/* Buttons and Descriptions */}
        <section className="flex flex-col items-center text-center gap-3 text-brown lg:items-start lg:text-left xl:w-7/12">
          <p className='text-xl font-semibold opacity-70'>Daily Product</p>
          <h1 className="text-3xl font-semibold lg:text-4xl xl:text-6xl">Butterscotch</h1>
          <p className='xl:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, urna ac eleifend bibendum, libero dolor feugiat elit. </p>

          <div className='flex gap-6 items-center mt-5 lg:flex-row-reverse'>
            <h2 className='font-bold lg:text-xl'>$6.00</h2>
            <div className='w-24 h-10 rounded-lg bg-dark flex items-center justify-between px-3 text-white text-lg'>
              <span className='cursor-pointer'>-</span>
              <span>1</span>
              <span className='cursor-pointer'>+</span>
            </div>
          </div>

          <div className='flex gap-7 lg:gap-5 xl:mt-6'>
            <button className='rounded-xl border-solid border-brown border-2 py-2 px-4 font-semibold '>ADD TO CART</button>
            <button className='rounded-xl border-solid border-brown border-2 py-2 px-4 text-white bg-brown'>BUY NOW</button>
          </div>
        </section>
      </section>

      {/* You may also like */}
      <section className='w-full'>
        <h2 className='font-semibold text-center text-3xl text-dark mb-2 xl:text-5xl'>You may also like</h2>
        <section className='flex justify-center flex-wrap mt-8 w-full gap-5 gap-y-8 sm:gap-10 md:gap-10 md:mt-10'>
          
        {
          usersLikeList
        }
          
        </section>
  
        
      </section>

      {/* Grid Section */}
      <section className='grid-section gap-2 md:w-10/12 lg:w-9/12 xl:w-7/12'>
        <div>
          <img draggable="false" className='w-full' src='./assets/Individual Section/grid1.jpeg' alt=''/>
        </div>
        <div>
          <img draggable="false" className='w-full' src='./assets/Individual Section/grid2.png' alt=''/>
        </div>
        <div>
          <img draggable="false" className='w-full h-full' src='./assets/Individual Section/grid3.png' alt=''/>
        </div>
      </section>
      
      
      <section className=''>
         <h2 className="text-4xl text-dark text-center xl:text-5xl">All Reviews</h2>
         <div className='flex flex-col gap-16 mt-7 items-center'>
         
        {
          reviewsList
        }
         
          <div className='flex flex-col gap-5 w-11/12'>
            <textarea placeholder='Write Your Comment here..' className='p-3 outline-none rounded-lg h-20 bg-grayBg resize-none'></textarea>
            <div className='flex items-center gap-2'>
            <button className='p-3 self-center px-6 rounded-full bg-brown text-white sm:self-start'>Add Comment</button>
            
            <div class="container-loading opacity-0">
              <div class="cube"><div class="cube__inner"></div></div>
              <div class="cube"><div class="cube__inner"></div></div>
              <div class="cube"><div class="cube__inner"></div></div>
            </div>
          </div>
            
          </div>
         </div>
        </section>
    </div>
  )
}
