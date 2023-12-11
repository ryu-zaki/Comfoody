import './App.css';
import React from 'react';

import CartCard from './components/products cart/cart';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import MainContent from './MainContent';


function App() {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = React.useState(false);

  /* Login & Register System page Visibility*/
  const [logRegVisibility, setLogRegVisibility] = React.useState(false);


  /* Login and Register page Transitions */
  const [logSwitch, setLogSwitch] = React.useState(false);

  const [isLogin, setIsLogin] = React.useState(false);
 
  /* Active Individual Product */
  const [activeInvPro, setActiveInvPro] = React.useState(null);
  
  /* User product quantity */
  const [proQuantity, setProQuantity] = React.useState(1);


  const orderEvent = ({target}) => {
    const pageText = target.id.toLowerCase();
    setActiveInvPro(pageText);
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

      <MainContent 
          productsCart={productsCart} 
          setCartVisible={setCartVisible} 
          setActiveInvPro={setActiveInvPro} 
          isLogin={isLogin} 
          setLogRegVisibility={setLogRegVisibility} 
          setMenuVisible={setMenuVisible} 
          setLogSwitch={setLogSwitch} 
          navigate={navigate} 
          buyNowPro={buyNowPro}
          setBuyNowPro={setBuyNowPro}
          setProductsCart={setProductsCart}
          proQuantity={proQuantity}
          setProQuantity={setProQuantity}
          activeInvPro={activeInvPro}
          orderEvent={orderEvent}
          menuVisible={menuVisible}
          logRegVisibility={logRegVisibility}    
          logSwitch={logSwitch}
          

      />
          
      
      
    </div>
  );
}

export default App;
