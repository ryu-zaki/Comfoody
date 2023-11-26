import React from 'react'
import IndivProData from '../../data/InvProData';


export default function SummaryPro({total, name, quantityPro, setTotal}) {
  
    const [{imgSrc, price}] = IndivProData.filter(({proName}) => {
        return name == proName
    });

    
  
    return (
     <div className='flex items-center w-full justify-between rounded-xl shadow-boxShadow px-3 py-3'>
        <div className='flex gap-4'>
          <div className='w-16 h-14 rounded-lg overflow-hidden'>
            <img alt='' src={imgSrc} className='w-full h-full object-cover object-center'/>
          </div>
          <div>
            <p className='font-semibold xl:text-xl'>{name}</p>
            <p>{price}</p>              
          </div>
        </div>
        <p className='ml-2 font-bold'>x{quantityPro}</p>
    </div> 
  )
}
