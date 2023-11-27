import React from 'react'

export default function NavSection({setMenuVisible, setActivePage, setLogRegVisibility, setLogSwitch, isLogin, setActiveInvPro, setCartVisible, productsCart}) {

  const navEvent = (e) => {
    setActivePage(e.target.innerText); 
    setActiveInvPro(null);
  }

  return (
    <header className='text-brown flex justify-between items-center z-20 p-5 py-7 pb-0 sm:p-7  md:p-10 xl:px-24'>
        <div className='flex items-center gap-2'>
          <p className='text-2xl'>Comfoody</p>
          <div className='w-8'>
           <img draggable='false' src='./assets/icons8-chef-hat-100.png'  alt='' width="full"/>  
          </div>
        </div>
        
        <div  className='flex gap-6 md:hidden'>
           {
             isLogin ? (
               <div onClick={() => setCartVisible(true)} className='w-8 relative cursor-pointer md:hidden'>
                {
                productsCart.length <= 0 ? null : <div className='bg-yellow text-sm font-bold flex justify-center items-center rounded-full absolute w-7 -right-4 -top-2'>{productsCart.length}</div>
              }
                 <img className='w-full' draggable="false" src='./assets/cart-icon.png' alt='' /> 
               </div>) :
               null
           }
   
           <div className="menu-con md:hidden" onClick={() => setMenuVisible(true)}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
           </div>
        </div>
       
        
        <div className='hidden md:block'>

          <ul className='menu-list flex gap-8 items-center'>
             <li onClick={navEvent} className='cursor-pointer relative'>Home</li>
             <li onClick={navEvent} className='cursor-pointer relative'>Contacts</li>
             <li onClick={navEvent} className='cursor-pointer relative'>Products</li>
          </ul>
        </div>

        {
          isLogin ? (
            <div className='hidden md:flex gap-8'>
              <div onClick={() => setCartVisible(true)} className='w-8 relative cursor-pointer'>
              {
                productsCart.length <= 0 ? null : <div className='bg-yellow text-sm font-bold flex justify-center items-center rounded-full absolute w-7 -right-4 -top-2'>{productsCart.length}</div>
              }
                <img className='w-full' draggable="false" src='./assets/cart-icon.png' alt='' /> 
              </div>
    
              <div className='w-8 cursor-pointer'>
                <img className='w-full' draggable="false" src='./assets/user-icon.png' alt='' /> 
              </div>
           </div>
          ) :

          (
            <div className='hidden md:block'>
              <ul className='flex gap-8 items-center'>
                 <li onClick={() => {setLogRegVisibility(true); setLogSwitch(false)}} className='cursor-pointer login-btn'>Login</li>
                 <li onClick={() => {setLogRegVisibility(true); setLogSwitch(true)}} className='cursor-pointer rounded-full relative p-2 py-1 startBtn'>Register</li>
              </ul>
            </div>
          )
        }
      </header>
  )
}
