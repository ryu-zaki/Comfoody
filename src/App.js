import './App.css';
import React from 'react';
import NavSection from './components/NavSection'
import MenuList from './components/MenuList';
import HomeSection from './components/HomeSection';

function App() {
  const [menuVisible, setMenuVisible] = React.useState(false);
  return (
    <div className='main-wrapper pb-0 flex flex-col gap-20 sm:gap-14 md:px-10 xl:px-0 xl:gap-0 xl:pb-0'>
      <NavSection setMenuVisible={setMenuVisible}/>
      <HomeSection setMenuVisible={setMenuVisible} />
      {menuVisible && <MenuList setMenuVisible={setMenuVisible}/>}
    </div>
  );
}

export default App;
