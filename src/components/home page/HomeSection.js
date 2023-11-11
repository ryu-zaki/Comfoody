import React from 'react'
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ProductsPreview from './ProductsPreview';
import ParallaxSection from './ParallaxSection';
import Footer from '../footer/Footer';


export default function HomeSection({setMenuVisible}) {
  return (
    <div >
      <HeroSection setMenuVisible={setMenuVisible} />
      <FeaturesSection />
      <ProductsPreview />
      <ParallaxSection />
      <Footer />
    </div>
  )
}
