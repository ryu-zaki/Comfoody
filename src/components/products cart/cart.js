import React from 'react'
import "./cart.css"
import ProCartPro from './ProCartPro';

export default function cart({setCartVisible, productsCart, setProductsCart, setActivePage}) {

  const products = productsCart.map(({name, quantityPro}) => {
    return <ProCartPro setProductsCart={setProductsCart} name={name} quantityPro={quantityPro}/>
  });

  const checkoutEvent = () => {
    setActivePage("account-auth");
    setCartVisible(false);
  }

  return (
    <div className='cart-con bg-cartOverlay fixed inset-0 w-full h-full z-30 flex justify-center items-start overflow-y-scroll md:justify-end'>
      
      <div className='cart-card text-brown bg-white w-11/12 my-8 rounded-xl flex justify-between relative flex-col items-center pt-10 gap-10 overflow-hidden md:mr-8 md:mt-24'>
      <img alt='' onClick={() => setCartVisible(false)} width={30} className='absolute right-3 top-3 cursor-pointer' src='./assets/Cart Section/cross-icon.png'/>
        <h2 className='text-3xl font-bold xsm:text-4xl'>Your Cart</h2>
        <div className={`w-full flex flex-col items-center cart-products-con ${productsCart.length >= 3 ? "max overflow-y-scroll" : ""} gap-7`}>
         {/* //products */}
         
         
        {
          productsCart.length > 0 ? products : <img width={60} src='./assets/Cart Section/empty-icon.png' alt=''/>
        }

      
        </div>
        <button className='py-5 bg-brown text-white w-full' onClick={checkoutEvent}>Checkout</button>
      </div>
    </div>
  )
}
