import React from 'react'
import { useNavigate } from 'react-router-dom';
import homeImg from './imgs/home-icon.png'
import productImg from './imgs/product-icon.png';
import phoneImg from './imgs/phone-icon.png';
import userIcon from './imgs/user-icon.png';
import crossImg from './imgs/cross-icon.png';

export default function MenuList({setMenuVisible, setLogRegVisibility, isLogin}) {
  const navigate = useNavigate();
  const navEvent = () => {
    setMenuVisible(false);
  }

  return (
    <>
    <div className='fixed inset-0 bg-cartOverlay w-full h-screen z-20'></div>
    <div className='menuList-con fixed top-0 bottom-0 bg-darkBrown flex justify-between items-start flex-col z-20 pt-24 pb-10'>
        
        <img onClick={() => setMenuVisible(false)} className='absolute top-3 right-3 cursor-pointer' alt='' src={crossImg} />
    
        <div className='flex items-center gap-5 ml-3 flex-wrap userInfo-mobile pb-10'>
          <div className='bg-white p-2 rounded-full border-2 border-yellow border-solid'>
            <img src={userIcon} alt=''/>
          </div>
        <div className='text-white'>
            <p className='font-bold text-xl'>Jhonwell Espanola</p>
            <p className='text-grayBg text-sm'>Comfoody's Customer</p>
          </div>
        </div>
    
          <ul className='flex flex-col gap-12 text-xl items-start text-tWhite z-20 ml-8'>
            <li onClick={navEvent} className='cursor-pointer relative flex items-center gap-2'>
              <img width={30} src={homeImg} alt=''/><p>Home</p>
            </li>
    
            <li onClick={navEvent} className='cursor-pointer relative flex items-center gap-2'>
              <img width={30} src={phoneImg} alt=''/><p>Contacts</p>
            </li>
    
            <li onClick={navEvent} className='cursor-pointer relative flex items-center gap-2'>
              <img width={30} src={productImg} alt=''/><p>Products</p>
            </li>
            {
              false ? <li className='cursor-pointer flex items-center gap-2'>
                <img width={25} src='./assets/logout-icon.png' alt=''/><p>Log out</p>
              </li> : (
                <>
                 <li onClick={(e) => {navEvent(e); navigate("/login");}} className='cursor-pointer relative'>Login</li>
                 <li onClick={(e) => {navEvent(e); navigate("/register")}} className='cursor-pointer relative'>Register</li>
                </>
              )
            }
          </ul>
    
          <div className='ml-8 text-sm text-grayBg'>
            <p>Copyright&copy;2023<p>
            </p> Developed by: Jhonwell Espanola</p>
          </div>
        </div>
    </> 
  )
}
