import React from 'react'
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ProductsPreview from './ProductsPreview';
import ParallaxSection from './ParallaxSection';
import NavSection from '../navigation/NavSection';
import Footer from '../footer/Footer';



export default function HomeSection({orderEvent}) {

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
 
  }, []);

  return (
    <div >
        <HeroSection/>
        <FeaturesSection />
        <ProductsPreview orderEvent={orderEvent}/>
        <ParallaxSection />
    </div>
  )
}
