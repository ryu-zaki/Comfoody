import React from 'react'
import productsData from '../../data/InvProData';
import deleteSrc from './imgs/delete-icon.png';
import { useLocation } from 'react-router-dom';

export default function ProCartPro({navigate, productsCart, name, quantityPro, setProductsCart}) {

  const {pathname} = useLocation();

  
  const [{proName, price, imgSrc}] = productsData.filter(({proName}) => {
    return proName === name;
  })

  const removeProduct = ({target}) => {

    if (productsCart.length <= 1 && 
       (pathname ===  '/account-auth-buynow' || 
       pathname === '/account-auth')) {
      navigate('/');
    }

    setProductsCart((prevState) => {
        const filterArr = prevState.filter(({name}) => {
            return name !== target.id
        });

        return filterArr;
    })
  }

  return (
    /* './assets/Products Section/red-velvet.png' */
    <div className='flex items-center w-10/12 justify-between rounded-lg'>
        <div className='flex gap-4'>
          <div className='w-16 h-14 rounded-lg overflow-hidden'>
            <img alt='' src={imgSrc} className='w-full h-full object-cover object-center'/>
          </div>
          <div>
            <p className='font-semibold'>{proName}</p>
            <p>{price}<span className='ml-2 font-bold'>x{quantityPro}</span></p>              
          </div>
        </div>
        <img onClick={removeProduct} id={name} className='cursor-pointer' src={deleteSrc} alt=''/>
       
    </div>
  )
}
