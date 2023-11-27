import React from 'react'

export default function MenuList({setMenuVisible, setActivePage, setLogRegVisibility, isLogin, setActiveInvPro}) {

  const navEvent = (e) => {
    setActivePage(e.target.innerText); 
    setMenuVisible(false);
    
    setActiveInvPro(null);
  }

  return (
    <div className='menuList-con fixed top-0 bottom-0 w-10/12 bg-darkBrown flex justify-between items-start flex-col z-20 pt-24 pb-10'>
           
     
    <img onClick={() => setMenuVisible(false)} className='absolute top-3 right-3 cursor-pointer' alt='' src='./assets/cross-icon.png'/>

    
    <div className='flex items-center gap-5 ml-3 flex-wrap userInfo-mobile pb-10'>
      <div className='bg-white p-2 rounded-full border-2 border-yellow border-solid'>
        <img src='./assets/user-icon.png' alt=''/>
      </div>
    <div className='text-white'>
        <p className='font-bold text-xl'>Jhonwell Espanola</p>
        <p className='text-grayBg text-sm'>Comfoody's Customer</p>
      </div>
    </div>

      <ul className='flex flex-col gap-12 text-xl items-start text-tWhite z-20 ml-8'>
        <li onClick={navEvent} className='cursor-pointer relative flex items-center gap-2'>
          <img width={30} src='./assets/home-icon.png' alt=''/><p>Home</p>
        </li>

        <li onClick={navEvent} className='cursor-pointer relative flex items-center gap-2'>
          <img width={30} src='./assets/phone-icon.png' alt=''/><p>Contacts</p>
        </li>

        <li onClick={navEvent} className='cursor-pointer relative flex items-center gap-2'>
          <img width={30} src='./assets/product-icon.png' alt=''/><p>Products</p>
        </li>
        {
          isLogin ? <li className='cursor-pointer flex items-center gap-2'>
            <img width={25} src='./assets/logout-icon.png' alt=''/><p>Log out</p>
          </li> : (
            <>
             <li onClick={(e) => {navEvent(e); setLogRegVisibility(true)}} className='cursor-pointer relative'>Login</li>
             <li onClick={(e) => {navEvent(e); setLogRegVisibility(true)}} className='cursor-pointer relative'>Register</li>
            </>
          )
        }
      </ul>

      <div className='ml-8 text-sm text-grayBg'>
        <p>Copyright&copy;2023<p>
        </p> Developed by: Jhonwell Espanola</p>
      </div>
    </div>
  )
}
