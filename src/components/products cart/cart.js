import React from 'react'

export default function cart() {
  return (
    <div className='cart-con'>
      <div className='cart-card'>
        <h2>Your Cart</h2>
        <div>
         {/* //products */}
         <div>
          <div>
            <div>
              <img />
            </div>
            <div>
              <p>Product Name</p>
              <p>$10.00</p>              
            </div>
          </div>
            
          <div>
            <img src='./assets/Cart Section' alt=''/>
          </div>
         </div>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  )
}
