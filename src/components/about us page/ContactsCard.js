import React from 'react'

export default function ContactsCard({src, accs, title}) {

  const listAccs = accs.map((acc, index) => {
    return <li key={index} className='text-lightBrown'><b>{acc}</b></li>
  });

  return (
    <section className='contacts-card w-32 md:w-40 xl:w-52'>
            <div className='bg-brown w-full h-32 flex justify-center items-center rounded-full md:h-40 xl:h-52'>
              <div className='w-16 h-16 xl:w-24 xl:h-24'>
                <img draggable="false" className='w-full' src={`./assets/about us/${src}.png`}/>
              </div>  
            </div>
            <h2 className='text-center text-3xl text-lightBrown mt-3 xl:text-4xl'>{title}</h2>
           <ul className='text-brown text-center mt-6 w-full flex flex-col items-center'>
             {listAccs}
           </ul>
    </section>
  )
}
