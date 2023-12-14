import React from 'react'
import { Route, Routes } from 'react-router-dom';
import NavSection from './components/navigation/NavSection'
import Footer from './components/footer/Footer';
import HomeSection from './components/home page/HomeSection';
import AboutUsSection from './components/about us page/AboutUsSection';
import ProductsSection from './components/products section/ProductsSection';


const MainContent = ({productsCart, setCartVisible,
                      setActiveInvPro, isLogin,
                      setLogRegVisibility, setLogSwitch, 
                      navigate, buyNowPro, setBuyNowPro, 
                      setProductsCart, proQuantity, 
                      setProQuantity, activeInvPro, 
                      orderEvent, setMenuVisible, 
                      menuVisible, logRegVisibility, logSwitch}) => {
 const logRegMarkChecker = localStorage.getItem('logRegMark');
  return (
    <>
   <NavSection 
        productsCart={productsCart} 
        setCartVisible={setCartVisible} 
        setActiveInvPro={setActiveInvPro} 
        isLogin={isLogin} 
        setLogRegVisibility={setLogRegVisibility} 
        setMenuVisible={setMenuVisible} 
        setLogSwitch={setLogSwitch}/>
          
      <Routes>
        <Route path={'home'} element={<HomeSection orderEvent={orderEvent}/>}/>
        <Route path={'/'} element={<HomeSection orderEvent={orderEvent}/>}/>
        <Route path={'contacts'} element={<AboutUsSection />}/>
        <Route path={'products'} 
               element={<ProductsSection 
                          activeInvPro={activeInvPro} 
                          setActiveInvPro={setActiveInvPro} 
                          orderEvent={orderEvent}/>}/>
      </Routes>

       {menuVisible && <MenuList setActiveInvPro={setActiveInvPro} isLogin={isLogin} setLogRegVisibility={setLogRegVisibility} setMenuVisible={setMenuVisible}/>}
       {/* <AccountAuth />  */}

       <Footer />
    </>
  )
}

export default MainContent
