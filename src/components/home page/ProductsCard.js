import React from 'react'

export default function ProductsCard({path, name, width, orderEvent}) {

  React.useEffect(() => {
    const orderCard = document.querySelectorAll('.order-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      })
      
    }, {threshold: 1});

    orderCard.forEach(card => {
      observer.observe(card);
    })
  })
  
  const orderHover = ({target}) => {
     target.parentElement.classList.toggle("hover-active");
  }

  const orderLeave = ({target}) => {
    target.parentElement.classList.remove("hover-active");
     
  }
  
  return (

   
      <div className='order-card bg-white w-72 h-80 flex justify-end flex-col items-center gap-4 rounded-lg relative'>
          <img src='./assets/orig-logo.jpg' className='product-logo w-20 absolute -top-6 -left-6 rounded-full' alt=''/>
            
             <img width={width} draggable="false" className='rounded-lg' src={path}   alt='' />
          
            <h3 className='mb-2 text-xl'>{name}</h3>
          <button id={name} onClick={orderEvent} onMouseOver={(e) => orderHover(e)} onMouseLeave={orderLeave} className='bg-brown w-full p-3 text-white rounded-br-lg rounded-bl-lg'>Order now</button>
        </div>
    
  )
}
