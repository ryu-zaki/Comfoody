import React from 'react'

export default function NavSection({setMenuVisible, setActivePage, setLogRegVisibility}) {
  return (
    <header className='text-brown flex justify-between items-center z-20 p-5 py-7 pb-0 sm:p-7  md:p-10 xl:px-24'>
        <div className='flex items-center gap-2'>
          <p className='text-2xl'>Comfoody</p>
          <div className='w-8'>
           <img draggable='false' src='./assets/icons8-chef-hat-100.png'  alt='' width="full"/>  
          </div>
        </div>
        
        <div className="menu-con md:hidden" onClick={() => setMenuVisible(true)}>
           <div className="bar1"></div>
           <div className="bar2"></div>
           <div className="bar3"></div>
        </div>
        
        <div className='hidden md:block'>

          <ul className='menu-list flex gap-8 items-center'>
             <li onClick={(e) => setActivePage(e.target.innerText)} className='cursor-pointer relative'>Home</li>
             <li onClick={(e) => setActivePage(e.target.innerText)} className='cursor-pointer relative'>Contacts</li>
             <li onClick={(e) => setActivePage(e.target.innerText)} className='cursor-pointer relative'>Products</li>
          </ul>
        </div>

        <div className='hidden md:block'>
          <ul className='flex gap-8 items-center'>
             <li onClick={() => setLogRegVisibility(true)} className='cursor-pointer login-btn'>Login</li>
             <li onClick={() => setLogRegVisibility(true)} className='cursor-pointer rounded-full relative p-2 py-1 startBtn'>Register</li>
          </ul>
        </div>
      </header>
  )
}
