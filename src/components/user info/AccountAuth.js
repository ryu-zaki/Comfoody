import React from 'react'
import SummaryPro from './SummaryPro'
import IndivProData from '../../data/InvProData';



export default function AccountAuth({productsCart, buyNowPro}) {
  const buyNowCondition = buyNowPro === undefined;

  let productsList = productsCart.map(({name, quantityPro}) => {
     return <SummaryPro name={name} quantityPro={quantityPro
    }/>
  })

  let totalArr = [];
  for (let i = 0; i < productsCart.length; i++) {
      const [{price}] = IndivProData.filter(({proName}) => {
      return productsCart[i].name.toLowerCase() === proName.toLowerCase();
     });
     totalArr.push({price: price, quan: productsCart[i].quantityPro});

  }

  let exactTotal = 0;
  for (let i = 0; i < totalArr.length; i++) {
    exactTotal += (Number(totalArr[i].price.slice(1)) * Number(totalArr[i].quan))

  }
  
  const sf = 7;

  if (!buyNowCondition) {
    const {proName, quantity} = buyNowPro;
    productsList = <SummaryPro name={proName} quantityPro={quantity}/>;
  }

  console.log(buyNowPro)
  return (
    <div className='account-auth-section container text-brown flex flex-col gap-16 w-11/12 mx-auto mt-10 sm:w-full xl:flex-row xl:gap-10 xl:mx-16 xl:w-auto 2xl:mx-24 2xl:gap-16'>
      <section className='flex flex-col gap-12 sm:gap-24 2xl:gap-16'>
        <section>
           <h2 className='text-2xl font-semibold text-center sm:text-3xl lg:text-left 2xl:text-2xl'>Billing Details</h2>
           <div className='flex flex-col gap-5 mt-8 sm:flex-row'>
              <div className='flex flex-col gap-5 sm:w-1/2 md:text-lg 2xl:text-md'>
                  <div className='flex flex-col gap-2'>
                      <label>Full Name:</label>
                      <input required id="fullName" name="Full Name" placeholder='Kim Ashlie Española'/>
                  </div>
      
                  <div className='flex flex-col gap-2'> 
                      <label>Phone Number</label>
                      <input required name='Full Name' id="phoneNumber"  placeholder='+639514406062'/>
                  </div>
              </div>
      
              <div className='flex flex-col gap-2 sm:w-1/2 md:text-lg'>
                  <label>Email</label>
                  <input required id="email" name="Email" placeholder='Sample@gmail.com'/>
              </div>
           </div>
        </section>

        <section className='w-full flex flex-col'>
            <h2 className='text-2xl font-semibold text-center sm:text-3xl lg:text-left 2xl:text-2xl'>Shipping Info</h2>
            <div className='flex flex-col gap-5 mt-5 md:text-lg 2xl:text-md'>
              <div className='flex flex-col gap-2'>
                  <label>Address</label>
                  <input placeholder='Enter your address'/>
              </div>

              <div className='flex flex-col gap-5 sm:flex-row'>
                <div className='flex flex-col gap-2 sm:w-1/2'>
                    <label>ZIP</label>
                    <input placeholder='1400'/>
                </div>
                <div className='flex flex-col gap-2 sm:w-1/2'>
                    <label>City</label>
                    <input placeholder='Enter your city'/>
                </div>
              </div>
            </div>
        </section>

        <section className='flex flex-col xl:mb-20'>
            <h2 className='text-2xl font-semibold text-center sm:text-3xl lg:text-left 2xl:text-2xl'>Payment Details</h2>
            <div className='flex text-lg gap-2 mt-5 self-center lg:self-start'>
              <h3 className='font-semibold opacity-80'>Payment Method:</h3>
              <p>Cash on Delivery</p>             
            </div>
            <div className='flex items-center flex-col-reverse mt-6 gap-2 md:text-lg lg:flex-row lg:gap-4'>
                <img alt='' width="70" src='./assets/Account Auth/peso-icon.png'/>
                <p className='text-center lg:text-left'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>
        </section>
      </section>

      <section className='flex flex-col gap-8 summary-section mb-10'>
        <h2 className='font-bold text-2xl text-center sm:text-3xl lg:text-left'>Summary</h2>
        <section className='mt-2 product'>
      
           {productsList}
           
        </section>
        
        <section className='flex flex-col gap-4 text-xl'>
            <div className='flex gap-3'>
                <p className='font-semibold'>Total:</p>
                {
                  buyNowCondition ? <p>${exactTotal.toFixed(2)}</p> : <p>${buyNowPro.totalProPrice.toFixed(2)}</p>
                }
                
            </div>

            <div className='flex gap-3'>
                <p className='font-semibold'>Shipping:</p>
                <p>${sf.toFixed(2)}</p>
            </div>

            <div className='flex gap-3'>
                <p className='font-semibold'>Grand Total:</p>
                {
                    buyNowCondition ? <p>${sf + exactTotal}</p> : <p>${(sf + buyNowPro.totalProPrice).toFixed(2)}</p>
                }
            </div>
        </section>

        <button className='self-center text-xl font-bold p-5 rounded-full 2xl:self-start'>Place an order</button>
      </section>
    </div>
  )
}
