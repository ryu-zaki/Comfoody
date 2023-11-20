import './App.css';
import React from 'react';
import NavSection from './components/navigation/NavSection'
import MenuList from './components/navigation/MenuList';
import Footer from './components/footer/Footer';
import CurrentPage from './CurrentPage';
import LogRegCon from './components/login-register/container';


function App() {
  
  const [menuVisible, setMenuVisible] = React.useState(false);

  const [activePage, setActivePage] = React.useState("home");

  /* Login & Register System page Visibility*/
  const [logRegVisibility, setLogRegVisibility] = React.useState(false);


  const [logSwitch, setLogSwitch] = React.useState(false);

  return (
    <div className='main-wrapper pb-0 flex flex-col gap-0 md:px-10 xl:px-0 xl:gap-0 xl:pb-0'>
      {
        logRegVisibility ? 
        <LogRegCon setActivePage={setActivePage} setLogRegVisibility={setLogRegVisibility} setLogSwitch={setLogSwitch} logSwitch={logSwitch}/> :
        ( 
          <>
           <NavSection setLogRegVisibility={setLogRegVisibility} setActivePage={setActivePage} setMenuVisible={setMenuVisible} setLogSwitch={setLogSwitch}/>
            <CurrentPage activePage={activePage}/>
             {menuVisible && <MenuList setLogRegVisibility={setLogRegVisibility} setActivePage={setActivePage} setMenuVisible={setMenuVisible}/>}
      
            <Footer setActivePage={setActivePage}/>
          </>
        ) 
      }

      
    </div>
  );
}

export default App;
