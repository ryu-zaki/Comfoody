import React from 'react'
import HomeSection from './components/home page/HomeSection';
import AboutUsSection from './components/about us page/AboutUsSection';
import ProductsSection from './components/products section/ProductsSection';
import AccountAuth from './components/user info/AccountAuth';
import IndivPro from './components/Individual Product/IndivPro';
import { Route, Routes } from 'react-router-dom';

export default function CurrentPage({navigate, setActiveInvPro, orderEvent, productsCart, setProductsCart, proQuantity, setProQuantity, activeInvPro,  buyNowPro, setBuyNowPro, isLogin}) {

  

    let currentPage; 
  switch("") {
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
      currentPage = <IndivPro isLogin={isLogin} productsCart={productsCart} setProductsCart={setProductsCart} orderEvent={orderEvent} proQuantity={proQuantity} setProQuantity={setProQuantity} activeInvPro={activeInvPro} setBuyNowPro={setBuyNowPro}/>
    break;


    default: 
    currentPage = <h1>hi</h1>;

  }

  
  return (
   <Routes>
    <Route path={'/home'} element={<HomeSection orderEvent={orderEvent}/>}/>
    <Route path={'/'} element={<HomeSection orderEvent={orderEvent}/>}/>
    
    <Route path={'/contacts'} element={<AboutUsSection />}/>

    <Route path={'/products'} element={<ProductsSection activeInvPro={activeInvPro} setActiveInvPro={setActiveInvPro} orderEvent={orderEvent}/>} />

    <Route path={`/products/${activeInvPro}`} element={<IndivPro navigate={navigate} setActiveInvPro={setActiveInvPro} isLogin={isLogin} productsCart={productsCart} setProductsCart={setProductsCart} orderEvent={orderEvent} proQuantity={proQuantity} setProQuantity={setProQuantity} activeInvPro={activeInvPro} setBuyNowPro={setBuyNowPro}/>}/>

    {/* Checkout */}
    <Route path={'/account-auth'} element={<AccountAuth productsCart={productsCart}/>}/>
    <Route path={'/account-auth-buynow'} element={<AccountAuth productsCart={productsCart} buyNowPro={buyNowPro}/>}/>
    
   </Routes>
  )
}
