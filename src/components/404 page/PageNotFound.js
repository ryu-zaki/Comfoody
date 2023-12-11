import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  const navigate = useNavigate();

    
  return (
    <div className='page-not-found relative flex flex-col justify-center items-center gap-9 my-10 mx-5 md:w-full md:my-0 md:items-start md:mx-0 xl:pl-40'>
      {/* Text Section */}
      <section className='flex flex-col gap-2 items-center my-8 text-black md:items-start md:gap-5 md:w-4/6 xl:w-auto'>
        <h1 className='text-5xl font-semibold text-brown text-center sm:text-7xl md:text-left xl:text-8xl'>Page <br /> Not Found</h1>
        <img className="sm:w-4/5 md:hidden" src={`./assets/404 Page/pageNotFound.png`} alt=""/>
        <h2 className='text-2xl text-center md:text-left md:text-4xl'>There's nothing in here...</h2>
        {/* <p className="text-textGray font-semibold md:text-lg">We could'nt find this page</p> */}
        <button onClick={() => navigate('/')} className="mt-5 border-2 border-black border-solid p-3 px-4 rounded-md md:text-xl">Back to home</button>
      </section>

      <img className="hidden md:block absolute -right-36 xl:right-32" draggable="false" src={`./assets/404 Page/pageNotFound.png`} alt=""/>
     

    </div>
  )
}
