import React from 'react'

export default function ParallaxSection() {

  React.useEffect(() => {
    const parallaxSection = document.querySelector('.parallax-section');

    const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
     })
    }, {threshold: .8});

    observer.observe(parallaxSection);

  }, [])

  return (
    <div className='parallax-section mt-20 flex justify-center items-center relative'>

        <h2 className='text-white text-2xl z-10 text-center relative sm:text-3xl xl:text-5xl'>
            " This is a place<br />
            where Quality meets Taste. "
        </h2>
      
    </div>
  )
}
