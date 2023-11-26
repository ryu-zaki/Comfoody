import './App.css';
import React from 'react';
import NavSection from './components/navigation/NavSection'
import MenuList from './components/navigation/MenuList';
import Footer from './components/footer/Footer';
import CurrentPage from './CurrentPage';
import LogRegCon from './components/login-register/container';
import AccountAuth from './components/user info/AccountAuth';
import IndivPro from './components/Individual Product/IndivPro';
import CartCard from './components/products cart/cart';

function App() {

  
  
  const [menuVisible, setMenuVisible] = React.useState(false);

  const [activePage, setActivePage] = React.useState("home");

  /* Login & Register System page Visibility*/
  const [logRegVisibility, setLogRegVisibility] = React.useState(false);


  /* Login and Register page Transitions */
  const [logSwitch, setLogSwitch] = React.useState(false);

  const [isLogin, setIsLogin] = React.useState(true);


  /* Active Individual Product */
  const [activeInvPro, setActiveInvPro] = React.useState(null);
  
  /* User product quantity */
  const [proQuantity, setProQuantity] = React.useState(1);


  const orderEvent = ({target}) => {
    setActivePage("indiv-pro");
    setActiveInvPro(target.id.toLowerCase())
  }

  /* Add to cart Functionality */
  const [productsCart, setProductsCart] = React.useState([]);
  const [cartVisible, setCartVisible] = React.useState(false);
  
  /* Buy now */
  const [buyNowPro, setBuyNowPro] = React.useState({totalProPrice: 0, proName: ""});

  return (
    <div className='main-wrapper pb-0 flex flex-col gap-0 md:px-10 xl:px-0 xl:gap-0 xl:pb-0'>
      {
        cartVisible ? <CartCard setActivePage={setActivePage} setProductsCart={setProductsCart} proQuantity={proQuantity} productsCart={productsCart} setCartVisible={setCartVisible} /> : null
      }

      {
        logRegVisibility ? 
        <LogRegCon setActivePage={setActivePage} setLogRegVisibility={setLogRegVisibility} setLogSwitch={setLogSwitch} logSwitch={logSwitch}/> :
        ( 
          <>
           <NavSection productsCart={productsCart} setCartVisible={setCartVisible} setActiveInvPro={setActiveInvPro} isLogin={isLogin} setLogRegVisibility={setLogRegVisibility} setActivePage={setActivePage} setMenuVisible={setMenuVisible} setLogSwitch={setLogSwitch}/>    

            
               <CurrentPage buyNowPro={buyNowPro}  setBuyNowPro={setBuyNowPro} setActivePage={setActivePage} setProductsCart={setProductsCart} proQuantity={proQuantity} setProQuantity={setProQuantity} activeInvPro={activeInvPro} productsCart={productsCart} orderEvent={orderEvent} activePage={activePage} setActiveInvPro={setActiveInvPro}/>
            
             {menuVisible && <MenuList setActiveInvPro={setActiveInvPro} isLogin={isLogin} setLogRegVisibility={setLogRegVisibility} setActivePage={setActivePage} setMenuVisible={setMenuVisible}/>}
             {/* <AccountAuth />  */}
      
            <Footer setActivePage={setActivePage}/>
          </>
        ) 
      }
      
    </div>
  );
}

export default App;
