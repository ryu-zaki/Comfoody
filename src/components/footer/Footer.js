import React from 'react'

export default function Footer({setActivePage}) {
  return (
    <footer className='bg-brown h-48 flex flex-col items-center justify-center gap-3 text-white xl:h-52 xl:gap-7 xl:flex-row xl:justify-around'>
        
       <ul className='flex gap-7 xl:gap-8'>
        <li><img width="30" src='./assets/fb-white.png' alt=''/></li>
        <li><img width="30" src='./assets/ig-white.png' alt=''/></li>
        <li><img width="30" src='./assets/tiktok-white.png' alt=''/></li>
       </ul>

       <ul className='flex gap-5 xl:gap-10'>
        <li><a onClick={(e) => {setActivePage(e.target.innerText)}} href='#'>Home</a></li>
        <li><a onClick={(e) => {setActivePage(e.target.innerText)}} href='#'>Contacts</a></li>
        <li><a onClick={(e) => {setActivePage(e.target.innerText)}} href='#'>Products</a></li>
       </ul>
      {/*  <p>Comfoody</p> */}
       <p className='w-full text-center xl:w-fit'>&copy;2023 | All Rights Reserved</p>
    </footer>
  )
}
