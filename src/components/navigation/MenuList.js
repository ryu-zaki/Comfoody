import React from 'react'

export default function MenuList({setMenuVisible}) {
  return (
    <div className='menuList-con fixed inset-0 bg-white flex justify-center items-center flex-col z-20'>
      <div className='nav-cookie-bg absolute top-10 -right-6 -z-10'>
          <img draggable="false" className='w-full h-full opacity-40' src='./assets/cookie-bg.png' alt=''/>
        </div>
      <div className="menu-con change absolute top-7 right-5" onClick={() => setMenuVisible(false)}>
           <div className="bar1"></div>
           <div className="bar2"></div>
           <div className="bar3"></div>
        </div>
      <ul className='flex flex-col gap-12 text-2xl items-center text-black'>
        <li>Home</li>
        <li>Contacts</li>
        <li>Products</li>
        <li>Login</li>
        <li>Register</li>
      </ul>
    </div>
  )
}
