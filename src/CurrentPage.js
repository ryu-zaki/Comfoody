import React from 'react'
import HomeSection from './components/home page/HomeSection';
import AboutUsSection from './components/about us page/AboutUsSection';
import ProductsSection from './components/products section/ProductsSection';


export default function CurrentPage({activePage}) {

    let currentPage; 
  switch(activePage.toLowerCase()) {
    case "home": 
      currentPage = <HomeSection />;
      /* currentPage = <ProductsSection />; */
    break;

    case "contacts": 
    currentPage = <AboutUsSection />;
    break;

    case "products": 
    currentPage = <ProductsSection />;
    break;

    default: 
    currentPage = <HomeSection />;

  }

  return (
    <>
    {currentPage}
    </>
  )
}
