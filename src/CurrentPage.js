import React from 'react'
import HomeSection from './components/home page/HomeSection';
import AboutUsSection from './components/about us page/AboutUsSection';
import ProductsSection from './components/products section/ProductsSection';
import AccountAuth from './components/user info/AccountAuth';
import IndivPro from './components/Individual Product/IndivPro';

export default function CurrentPage({activePage, setActiveInvPro, orderEvent, productsCart, setProductsCart, proQuantity, setProQuantity, activeInvPro, setActivePage, buyNowPro, setBuyNowPro}) {

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

    case "account-auth": 
    if (productsCart.length <= 0) {
      currentPage = <HomeSection orderEvent={orderEvent}/>;
    } 
    else {
      currentPage = <AccountAuth productsCart={productsCart}/>;

    }
    break;

    case "account-auth-buynow": 
    currentPage = <AccountAuth productsCart={productsCart} buyNowPro={buyNowPro}/>;
     break;

    case "indiv-pro":
      currentPage = <IndivPro setActivePage={setActivePage} productsCart={productsCart} setProductsCart={setProductsCart} orderEvent={orderEvent} proQuantity={proQuantity} setProQuantity={setProQuantity} activeInvPro={activeInvPro} setBuyNowPro={setBuyNowPro}/>
    break;


    default: 
    currentPage = <h1>hi</h1>;

  }

  return (
    <>
    {currentPage}
    </>
  )
}
