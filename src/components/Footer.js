import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-brown h-48 flex flex-col items-center justify-center gap-3 text-white xl:h-52 xl:gap-7 xl:flex-row xl:justify-around'>
        
       <ul className='flex gap-7 xl:gap-8'>
        <li><img width="30" src='./assets/fb-white.png' alt=''/></li>
        <li><img width="30" src='./assets/ig-white.png' alt=''/></li>
        <li><img width="30" src='./assets/tiktok-white.png' alt=''/></li>
       </ul>

       <ul className='flex gap-5 xl:gap-10'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About Us</a></li>
        <li><a href='#'>Products</a></li>
       </ul>
      {/*  <p>Comfoody</p> */}
       <p className='w-full text-center xl:w-fit'>Copyright &copy;2023 <br/> All Rights Reserved</p>
    </footer>
  )
}