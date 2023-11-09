import React from 'react'
import ProductsCard from './ProductsCard'
import data from '../data/BestSellers'

export default function ProductsPreview() {

  const bestSellerList = data.map((data, index) => {
  return  <ProductsCard 
             key={index} 
             path={data.path}
             name={data.productName}
             width={data.width}
          />
  });

  return (
    <div className='preview-section text-black'>
      <h2 className='text-center text-gradient'>Best Sellers</h2>
      <div className='preview-flex flex flex-col items-center text-center gap-16 mt-7 md:flex-row md:flex-wrap md:justify-center'>
       
        {bestSellerList}
        
      </div>
    </div>
  )
}
