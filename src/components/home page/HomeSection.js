import React from 'react'
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ProductsPreview from './ProductsPreview';
import ParallaxSection from './ParallaxSection';



export default function HomeSection({orderEvent}) {
  return (
    <div >
      <HeroSection/>
      <FeaturesSection />
      <ProductsPreview orderEvent={orderEvent}/>
      <ParallaxSection />
    </div>
  )
}
