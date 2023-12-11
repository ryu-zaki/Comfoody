import React from 'react'
import NavSection from './components/navigation/NavSection'
import MenuList from './components/navigation/MenuList';
import Footer from './components/footer/Footer';
import CurrentPage from './CurrentPage';
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
    {
        logRegMarkChecker
        && <NavSection 
        productsCart={productsCart} 
        setCartVisible={setCartVisible} 
        setActiveInvPro={setActiveInvPro} 
        isLogin={isLogin} 
        setLogRegVisibility={setLogRegVisibility} 
        setMenuVisible={setMenuVisible} 
        setLogSwitch={setLogSwitch}/>
    }
          
      <CurrentPage 
        navigate={navigate}  
        isLogin={isLogin} 
        buyNowPro={buyNowPro}  
        setBuyNowPro={setBuyNowPro}  
        setProductsCart={setProductsCart} 
        proQuantity={proQuantity} 
        setProQuantity={setProQuantity} 
        activeInvPro={activeInvPro} 
        productsCart={productsCart} 
        orderEvent={orderEvent}  
        setActiveInvPro={setActiveInvPro}
        logSwitch={logSwitch}
        setLogRegVisibility={setLogRegVisibility}
        setLogSwitch={setLogSwitch}
        
        />

       {menuVisible && <MenuList setActiveInvPro={setActiveInvPro} isLogin={isLogin} setLogRegVisibility={setLogRegVisibility} setMenuVisible={setMenuVisible}/>}
       {/* <AccountAuth />  */}

      {
        logRegMarkChecker && <Footer />
      } 
    </>
  )
}

export default MainContent
