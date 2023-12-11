import React from 'react'
import HomeSection from './components/home page/HomeSection';
import AboutUsSection from './components/about us page/AboutUsSection';
import ProductsSection from './components/products section/ProductsSection';
import AccountAuth from './components/user info/AccountAuth';
import IndivPro from './components/Individual Product/IndivPro';
import LoginCard from './components/login-register/container';
import PageNotFound from './components/404 page/PageNotFound';
import { Route, Routes } from 'react-router-dom';

export default function CurrentPage({navigate, setActiveInvPro, orderEvent, productsCart, setProductsCart, proQuantity, setProQuantity, activeInvPro,  buyNowPro, setBuyNowPro, isLogin, setLogRegVisibility, setLogSwitch, logSwitch}) {
  
  return (
   <Routes>
    <Route path={'/home'} element={<HomeSection orderEvent={orderEvent}/>}/>
    <Route path={'/'} element={<HomeSection orderEvent={orderEvent}/>}/>
    
    <Route path={'/contacts'} element={<AboutUsSection />}/>

    <Route path={'/products'} 
           element={<ProductsSection 
                      activeInvPro={activeInvPro} 
                      setActiveInvPro={setActiveInvPro} 
                      orderEvent={orderEvent}/>} />

    <Route path={`/products/${activeInvPro}`} 
           element={<IndivPro navigate={navigate} 
                              setActiveInvPro={setActiveInvPro} 
                              isLogin={isLogin} 
                              productsCart={productsCart} setProductsCart={setProductsCart}
                               orderEvent={orderEvent} 
                               proQuantity={proQuantity} 
                               setProQuantity={setProQuantity} 
                               activeInvPro={activeInvPro} 
                               setBuyNowPro={setBuyNowPro}/>}/>

    {/* Checkout */}
    <Route path={'/account-auth'} element={<AccountAuth productsCart={productsCart}/>}/>
    <Route path={'/account-auth-buynow'} element={<AccountAuth productsCart={productsCart} buyNowPro={buyNowPro}/>}/>
    
    {/* Login Section */}
    <Route path='/login' 
           element={<LoginCard 
                        setLogRegVisibility={setLogRegVisibility}
                        setLogSwitch={setLogSwitch}
                        logSwitch={logSwitch}/>}/>

    {/* Page not Found Route */}
    <Route path='*' element={<PageNotFound />}/>
   </Routes>
  )
}
