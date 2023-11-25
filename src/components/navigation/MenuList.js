import React from 'react'

export default function MenuList({setMenuVisible, setActivePage, setLogRegVisibility, isLogin, setActiveInvPro}) {

  const navEvent = (e) => {
    setActivePage(e.target.innerText); 
    setMenuVisible(false);
    
    setActiveInvPro(null);
  }

  return (
    <div className='menuList-con fixed inset-0 bg-white flex justify-center items-center flex-col z-20'>
      
          <img draggable="false" className='w-full absolute inset-0 h-full object-cover object-center' src='./assets/menu-list-bg.png' alt=''/>
       
      <div className="menu-con change absolute top-7 right-5 z-20" onClick={() => setMenuVisible(false)}>
           <div className="bar1 mobile"></div>
           <div className="bar2 mobile"></div>
           <div className="bar3 mobile"></div>
        </div>
      <ul className='flex flex-col gap-12 text-3xl items-center text-tWhite z-20'>
        <li onClick={navEvent} className='cursor-pointer relative'>Home</li>
        <li onClick={navEvent} className='cursor-pointer relative'>Contacts</li>
        <li onClick={navEvent} className='cursor-pointer relative'>Products</li>
        {
          isLogin ? <li className='cursor-pointer'>Log out</li> : (
            <>
             <li onClick={(e) => {navEvent(e); setLogRegVisibility(true)}} className='cursor-pointer relative'>Login</li>
             <li onClick={(e) => {navEvent(e); setLogRegVisibility(true)}} className='cursor-pointer relative'>Register</li>
            </>
          )
        }
      </ul>
    </div>
  )
}
