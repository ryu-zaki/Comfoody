import React from 'react'
import HomeSection from './components/home page/HomeSection';
import AboutUsSection from './components/about us page/AboutUsSection';
import ProductsSection from './components/products section/ProductsSection';
import IndivPro from './components/Individual Product/IndivPro';


export default function CurrentPage({activePage, setActiveInvPro, orderEvent}) {

    let currentPage; 
  switch(activePage.toLowerCase()) {
    case "home": 
      currentPage = <HomeSection orderEvent={orderEvent}/>;
    break;

    case "contacts": 
    currentPage = <AboutUsSection />;
    break;

    case "products": 
    currentPage =  <ProductsSection setActiveInvPro={setActiveInvPro} orderEvent={orderEvent}/>;
    break;

    default: 
    currentPage = <HomeSection orderEvent={orderEvent}/>;

  }

  return (
    <>
    {currentPage}
    </>
  )
}
