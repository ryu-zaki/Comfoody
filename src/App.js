import './App.css';
import React from 'react';
import NavSection from './components/navigation/NavSection'
import MenuList from './components/navigation/MenuList';
import HomeSection from './components/home page/HomeSection';
import AboutUsSection from './components/about us page/AboutUsSection';
import Footer from './components/footer/Footer';
import ProductsSection from './components/products section/ProductsSection';


function App() {
  
  const [menuVisible, setMenuVisible] = React.useState(false);

  const [activePage, setActivePage] = React.useState("home");

  let currentPage; 
  switch(activePage.toLocaleLowerCase()) {
    case "home": 
      /* currentPage = <HomeSection />; */
      currentPage = <ProductsSection />;
    break;

    case "contacts": 
    currentPage = <AboutUsSection />;
    break;

    case "products": 
    currentPage = <ProductsSection />;
    break;

  }

  return (
    <div className='main-wrapper pb-0 flex flex-col gap-20 sm:gap-14 md:px-10 xl:px-0 xl:gap-0 xl:pb-0'>
      <NavSection setActivePage={setActivePage} setMenuVisible={setMenuVisible}/>
      {currentPage}
      {menuVisible && <MenuList setMenuVisible={setMenuVisible}/>}
      
      <Footer />
    </div>
  );
}

export default App;
