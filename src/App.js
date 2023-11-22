import './App.css';
import React from 'react';
import NavSection from './components/navigation/NavSection'
import MenuList from './components/navigation/MenuList';
import Footer from './components/footer/Footer';
import CurrentPage from './CurrentPage';
import LogRegCon from './components/login-register/container';
import AccountAuth from './components/user info/AccountAuth';
import IndivPro from './components/Individual Product/IndivPro';


function App() {
  
  const [menuVisible, setMenuVisible] = React.useState(false);

  const [activePage, setActivePage] = React.useState("home");

  /* Login & Register System page Visibility*/
  const [logRegVisibility, setLogRegVisibility] = React.useState(false);


  /* Login and Register page Transitions */
  const [logSwitch, setLogSwitch] = React.useState(false);

  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <div className='main-wrapper pb-0 flex flex-col gap-0 md:px-10 xl:px-0 xl:gap-0 xl:pb-0'>
      {
        logRegVisibility ? 
        <LogRegCon setActivePage={setActivePage} setLogRegVisibility={setLogRegVisibility} setLogSwitch={setLogSwitch} logSwitch={logSwitch}/> :
        ( 
          <>
           <NavSection isLogin={isLogin} setLogRegVisibility={setLogRegVisibility} setActivePage={setActivePage} setMenuVisible={setMenuVisible} setLogSwitch={setLogSwitch}/>
            {/* <CurrentPage activePage={activePage}/> */}
            <IndivPro />
             {menuVisible && <MenuList isLogin={isLogin} setLogRegVisibility={setLogRegVisibility} setActivePage={setActivePage} setMenuVisible={setMenuVisible}/>}
             {/* <AccountAuth />  */}
      
            <Footer setActivePage={setActivePage}/>
          </>
        ) 
      }
      
    </div>
  );
}

export default App;
