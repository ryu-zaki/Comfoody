import React from 'react'
import CardFeature from './CardFeature'

export default function FeaturesSection() {

  React.useEffect(() => {
    const featureSection = document.querySelector(".features-section");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      })

    }, {threshold: 1});

    observer.observe(featureSection);
  }, []);

  return (
    <div className='h-screen grid-wrapper'>
    <div className='features-section text-white p-5 pt-10 bg-brown w-full lg:pt-20'>
        <div>
        <h2 className='text-center text-3xl lg:text-4xl xl:text-5xl'>Why you should choose us?</h2>
        <p className='text-center mt-5 lg:w-4/5 lg:mx-auto xl:w-7/12 xl:text-lg'>Curabitur scelerisque vestibulum lectus, ut cursus massa ullamcorper et.</p>
        </div>
        
          <div className='grid-section flex flex-col gap-5 items-center xl:flex-row xl:justify-center'>
            <CardFeature title={"Fast Delivery"} ImgSource={'./assets/truck-black.png'}/>
            <CardFeature title={"High quality"} ImgSource={'./assets/cookie-black.png'}/>
            <CardFeature title={"Affordability"} ImgSource={'./assets/money-black.png'}/>
          </div>
    </div>
        
    </div>
  )
}
