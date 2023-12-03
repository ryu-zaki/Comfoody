import React from 'react'
import ContactsCard from './ContactsCard'
export default function AboutUsSection() {

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
 
  }, [])

  return (
    <div className='about-us-section flex flex-col gap-16 my-20 m xl:mt-16'>
      
      <div className='contacts-section md:mb-20 xl:mb-36'>
        <h2 className='text-5xl overflow-hidden text-center font-semibold text-brown sm:text-6xl md:text-7xl xl:text-8xl'><div>Get in Touch</div></h2>
        
        <div className='flex flex-wrap gap-16 justify-center mt-10 mx-5 sm:mx-10 sm:mb-12 md:mb-0 md:gap-20 md:mt-16 xl:mt-20 xl:gap-32'>
          <ContactsCard title="Email" src="mail-icon" accs={["sample@gmail.com", "spl2@gmail.com"]}/>
          <ContactsCard title="Phone" src="phone-icon" accs={["sample@gmail.com", "spl2@gmail.com"]}/>
          <ContactsCard title="Address" src="location-icon" accs={["sample@gmail.com", "spl2@gmail.com"]}/>
        
          </div>

          <div>

          </div>
      </div>

    </div>
  )
}
