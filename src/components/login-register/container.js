import React from 'react'
import LoginCard from './LoginCard'
import RegisterCard from './RegisterCard';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Container({setLogRegVisibility}) {

  const {pathname} = useLocation();
  const navigate = useNavigate();
  const showPass = (e) => {
    
    const inputEl = e.target.nextElementSibling;
    const inputType = e.target.nextElementSibling.type;

    if (inputType === "text") {
        inputEl.type = "password";
        e.target.src = "./assets/Login Section/eye-slash.png";
        return;
    }
    inputEl.type = "text";
    e.target.src = "./assets/Login Section/eye.png";

  }  

  const mobileNavArrow = ({target}) => {
    target.parentElement.classList.toggle("active");

  }

  const logRegMenuNav = () => {
    setLogRegVisibility(false);
    localStorage.setItem("logRegMark", true);
  }

  return (
    <div className={`logreg-con h-screen flex justify-center items-center ${pathname.slice(1) === "register" ? "switch" : ""}`}>
       <div class="custom-shape-divider-bottom-1700143696">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>

<div className='absolute navigation-con top-2 z-50 flex flex-col items-center gap-3 xl:left-5 xl:top-auto'>
  <nav className='flex gap-6 navigation p-4 px-6 bg-white rounded-xl xl:flex-col xl:gap-10 xl:py-9'>
    <Link to={'/'}  onClick={logRegMenuNav} id="home" className='relative flex justify-center items-center'><img id="home" alt='' className='cursor-pointer xl:w-10' width="30" src='./assets/Login Section/home-icon.png'/></Link>

    <Link to={'/products'} id="products" onClick={logRegMenuNav} className='relative flex justify-center items-center'><img id="products" alt='' className='cursor-pointer xl:w-10' width="30" src='./assets/Login Section/box-icon.png'/></Link>

    <Link to={'/contacts'} id="contacts" onClick={logRegMenuNav} className='relative flex justify-center items-center'><img alt='' id="contacts" className='cursor-pointer xl:w-10' width="30" src='./assets/Login Section/phone-icon.png'/></Link>

  </nav>
  <img className='arrow-down cursor-pointer px-2 py-1 xl:hidden' onClick={mobileNavArrow} alt="" src='./assets/Login Section/arrow-down.png'/>
</div>
      
      <div className='logreg-card w-11/12 bg-white rounded-lg flex overflow-hidden relative'>
        
        <LoginCard showPass={showPass} navigate={navigate} />
        <RegisterCard showPass={showPass} navigate={navigate} />
        <div className='bg-brown w-1/2 h-full absolute z-30 brown-section hidden lg:block overflow-hidden'>
        <div className='w-full h-full text-white absolute sign-in-text z-30 hidden lg:flex flex-col items-center justify-center left-0 px-10'>
          <h1 className='text-4xl font-bold'>Welcome Back!</h1>
          <p className='text-center mt-3'>Enter your personal details to use all our features</p>
          <button onClick={() => navigate("/login")} className='text-sm uppercase text-white p-2 px-8 rounded-md border-solid border-2 border-white mt-7 hover:bg-white hover:text-brown hover:font-semibold'>Sign in</button>
        </div>

        <div className='w-full h-full text-white absolute register-text z-30 hidden lg:flex flex-col items-center justify-center right-0  px-10'>
        <h1 className='text-4xl font-bold'>Join us!</h1>
          <p className='text-center mt-3'>Register your personal details to use all our features</p>
          <button onClick={() => navigate("/register")} className='text-sm uppercase text-white p-2 px-8 rounded-md border-solid border-2 border-white mt-7 hover:bg-white hover:text-brown hover:font-semibold'>Register</button>
        </div>

        </div>
      </div>

    </div>
  )
}
