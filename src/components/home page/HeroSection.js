import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {

  const navigate = useNavigate();

  return (
    <div className='hero-section relative overflow-hidden p-5 pb-0 sm:p-7 md:p-10 xl:px-24 xl:overflow-visible '>
      <div className="wave -z-20 lg:z-10">
         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
         </svg>
        </div>
       
       <section className='text-brown relative mt-20 sm:mt-0'>
        <div className="mt-7 hero-text-section relative flex flex-col gap-4 items-center w-full md:items-start  lg:w-11/12 xl:w-4/5 xl:mt-0">
          <h1 className='main-text text-center overflow-hidden text-5xl font-semibold sm:text-7xl md:text-left md:text-7xl xl:text-8xl'><p>From Our</p> <p>Oven to Your</p> <p>Heart.</p></h1>
          <p className='text-black mt-3 text-xl xl:text-2xl'>Elevate Your <span className='relative z-10 text-brown ml-4'>Taste Experience!</span></p>
          <button onClick={() => navigate('/products')} className='startBtn bg-white z-20 relative mt-7 p-3 rounded-full px-6 ml-1 xl:text-xl'>Explore menu</button>
        </div>

        <div className='cookie-bg hidden absolute top-0 right-0 -z-10 md:block md:-top-20 lg:z-10'>
          <img draggable="false" className='w-full h-full opacity-60 md:opacity-100' src='./assets/cookie-bg.png' alt=''/>
        </div>
       </section>
    </div>
  )
}
