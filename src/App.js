import './App.css';
import React from 'react';
import CartCard from './components/products cart/cart';
import { useNavigate, Routes, Route } from 'react-router-dom';
import HomeSection from './components/home page/HomeSection';
import AboutUsSection from './components/about us page/AboutUsSection';
import ProductsSection from './components/products section/ProductsSection';
import Footer from './components/footer/Footer';
import LoginCard from './components/login-register/container';
import PageNotFound from './components/404 page/PageNotFound';
import NavSection from './components/navigation/NavSection';
import IndivPro from './components/Individual Product/IndivPro';
import AccountAuth from './components/user info/AccountAuth';
import MenuList from './components/navigation/MenuList';


function App() {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = React.useState(false);

  /* Login & Register System page Visibility*/
  const [logRegVisibility, setLogRegVisibility] = React.useState(false);

  /* Login and Register page Transitions */
  const [logSwitch, setLogSwitch] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState(false);
  
  /* User product quantity */
  const [proQuantity, setProQuantity] = React.useState(1);
  const orderEvent = ({target}) => {
    const pageText = target.id.toLowerCase();
    navigate(`/products/${pageText}`);
  }

  const [productsCart, setProductsCart] = React.useState([]);
  const [cartVisible, setCartVisible] = React.useState(false);
  const [buyNowPro, setBuyNowPro] = React.useState({totalProPrice: 0, proName: ""});

  return (
    <div className='main-wrapper pb-0 flex flex-col gap-0 md:px-10 xl:px-0 xl:gap-0 xl:pb-0'>
      {
        cartVisible ? <CartCard  
                        navigate={navigate} 
                        setProductsCart={setProductsCart} 
                        proQuantity={proQuantity} 
                        productsCart={productsCart} 
                        setCartVisible={setCartVisible} /> : null
      }

      <Routes>
          <Route path='/' element={
          <>
            <NavSection setMenuVisible={setMenuVisible} isLogin={isLogin} setCartVisible={setCartVisible}   productsCart={productsCart}/>
            <HomeSection orderEvent={orderEvent}/>
            <Footer />
          </>}/>

          {/* Contacts Section */}
          <Route path={'/contacts'} element={
          <>
            <NavSection setMenuVisible={setMenuVisible} isLogin={isLogin} setCartVisible={setCartVisible} productsCart={productsCart}/>
             <AboutUsSection />
            <Footer />
          </>
          }/>

          <Route path={'/products'} >
            <Route index element={
              <>
                <NavSection setMenuVisible={setMenuVisible} isLogin={isLogin} setCartVisible={setCartVisible} productsCart={productsCart}/>
                  <ProductsSection orderEvent={orderEvent}/>
                  <Footer />
              </>
            }/> 

            <Route path=":productName" element={<IndivPro 
                                     navigate={navigate} 
                                     isLogin={isLogin} 
                                     setMenuVisible={setMenuVisible}
                                     setCartVisible={setCartVisible}
                                     productsCart={productsCart} 
                                     setProductsCart={setProductsCart}
                                     orderEvent={orderEvent} 
                                     proQuantity={proQuantity} 
                                     setProQuantity={setProQuantity}  
                                     setBuyNowPro={setBuyNowPro}/>}/>
           </Route>

        {/* Checkout */}
        <Route path={'/account-auth'} element={<>
          <NavSection setMenuVisible={setMenuVisible} isLogin={isLogin} setCartVisible={setCartVisible} productsCart={productsCart}/>
            <AccountAuth productsCart={productsCart}/>
          <Footer />
        </>}/>
        <Route path={'/account-auth-buynow'} element={<>
          <NavSection setMenuVisible={setMenuVisible} isLogin={isLogin} setCartVisible={setCartVisible} productsCart={productsCart}/>
           <AccountAuth productsCart={productsCart} buyNowPro={buyNowPro}/>
          <Footer />
        </>}/>
         

        {/* Login and Register Section */}
        <Route path='/login' 
               element={<LoginCard 
                            setLogRegVisibility={setLogRegVisibility}
                            setLogSwitch={setLogSwitch}
                            logSwitch={logSwitch}/>}/>
        <Route path='/register' 
               element={<LoginCard 
                            setLogRegVisibility={setLogRegVisibility}
                            setLogSwitch={setLogSwitch}
                            logSwitch={logSwitch}/>}/>

        {/* Page not Found Route */}
        <Route path='*' element={<PageNotFound />}/>
      </Routes>

      {/* Menu Tab for Mobile Devices */}
      {menuVisible && <MenuList isLogin={isLogin} setLogRegVisibility={setLogRegVisibility} setMenuVisible={setMenuVisible}/>}
    </div>
  );
}

export default App;
