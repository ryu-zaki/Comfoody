import React from 'react'
import YouMayAlsoLike from './YouMayAlsoLike';
//import data from '../../data/YouMayAlsoLikeData';
import ReviewData from '../../data/ReviewsData';
import ProReview from './ProReview';
import InvProData from '../../data/InvProData';
import NavSection from '../navigation/NavSection';
import Footer from '../footer/Footer';
import { useParams } from 'react-router-dom';
import PageNotFound from '../404 page/PageNotFound';

export default function IndivPro({proQuantity, setProQuantity, orderEvent, setProductsCart, productsCart, setBuyNowPro, isLogin, navigate, setMenuVisible, setCartVisible}) {
 const {productName} = useParams();


 let msg = document.querySelector('.add-to-cart-msg');

  React.useEffect(() => {
   window.scrollTo({
     top: 0,
     left: 0,
   });

   setProQuantity(1);
  }, [])

 

  const quantityIncre = () => {
    setProQuantity((prevState) => {
    let num = prevState;
    num++;
    return num;
    })
  }

  const quantityDecre = () => {
    setProQuantity((prevState) => {
    let num = prevState;
  
    num--;
    return num <= 1 ? 1 : num;
    })
  }

  let [proData] = InvProData.filter(({proName}) => {
    return proName === productName;
  });

  if (proData === undefined) {
    proData = {proName: "false", price: "", description: "", imgSrc: ""}
  } 

  const {proName, price, description, imgSrc} = proData;

  const titleArr = proName.split(" ");
  const titleProduct = titleArr.length > 1 ? 
  titleArr[0][0].toUpperCase() + titleArr[0].slice(1) + " " + 
  titleArr[1][0].toUpperCase() + titleArr[1].slice(1) : 
  titleArr[0][0].toUpperCase() + titleArr[0].slice(1);


  const filterProduct = InvProData.filter(({proName}, index) => {
    return titleProduct.toLowerCase() !== proName;
  });
  const limitProductNum = filterProduct.filter((data, index) => {
    return index <= 2;
  });

  const usersLikeList = limitProductNum.map(({proName, price, imgSrc}, index) => {
    return <YouMayAlsoLike msg={msg} setProQuantity={setProQuantity} orderEvent={orderEvent} proName={proName} price={price} imgSrc={imgSrc} key={index} 
    />
  });

  const reviewsList = ReviewData.map(({username, date, comment, stars}, index) => {
    return <ProReview username={username} date={date} comment={comment} key={index} stars={stars}/>

  })

  
  const addCartValidation = (target) => {
    const isSamePro = productsCart.some((product) => {
      return product.name === target.id;
    });
    
    msg = document.querySelector('.add-to-cart-msg');
    msg.classList.add('active');
    setTimeout(() => {
      msg.classList.remove('active');
    }, 2000)

    if (!isLogin) {
      msg.style.color = "red";
      msg.innerText = "You must log in first.";
      return true;
    } 

    if (isSamePro) {
      msg.style.color = "red";
      msg.innerText = "Already added to your cart.";
      return true
    } 

    
    msg.style.color = "green";
    msg.innerText = "Added to your cart.";
    return false
  }

  const addToCartEvent = ({target}, quantity) => {

    if (addCartValidation(target)) {
      return;
    }

    setProductsCart((prevState) => 
     ([...prevState, {name: target.id, quantityPro: quantity}])
  );
  }

  const buyNow = (e) => {
    msg = document.querySelector('.add-to-cart-msg');
    if (!isLogin) {
      msg.classList.add('active');
      msg.style.color = "red";
      msg.innerText = "You must log in first.";

      setTimeout(() => {
        msg.classList.remove('active');
      }, 2000)
      return;
    } 
    
    navigate('/account-auth-buynow');
    setBuyNowPro({proName: e.target.id, totalProPrice: proQuantity * Number(price.slice(1)), quantity: proQuantity});
  }

  return (
    <>
      {
        !(proName === "false") ? (
          <>
    <NavSection setMenuVisible={setMenuVisible} isLogin={isLogin} setCartVisible={setCartVisible} productsCart={productsCart}/>
    <div className="mt-9 flex flex-col gap-20 mx-3 mb-10 sm:mx-10 md:mx-0 md:items-center lg:gap-24 xl:gap-32">
      <section className='flex flex-col items-center w-10/12 mx-auto gap-10 lg:flex-row xl:justify-center xl:gap-14'>
        {/* Main Product Picture */}
        <section className='inv-main-img w-72 h-64 bg-yellow overflow-hidden rounded-xl md:w-96 md:h-80 lg:w-96'>
          <img draggable="false" className='w-full h-full object-cover object-center' src={imgSrc} alt=''/>
        </section>

        {/* Buttons and Descriptions */}
        <section className="flex flex-col items-center text-center gap-3 text-brown lg:items-start lg:text-left xl:w-7/12">
          <p className='text-xl font-semibold opacity-70'>Daily Product</p>
          <h1 className="text-3xl font-semibold lg:text-4xl xl:text-6xl">{titleProduct}</h1>
          <p className='xl:text-lg'>{description}</p>

          <div className='flex gap-6 items-center mt-5 lg:flex-row-reverse'>
            <h2 className='font-bold lg:text-xl'>{price}</h2>
            <div className='w-24 h-10 rounded-lg bg-dark flex items-center justify-between px-3 text-white text-lg'>
              <span onClick={quantityDecre} className='cursor-pointer select-none'>-</span>
              <span className='select-none'>{proQuantity}</span>
              <span onClick={quantityIncre} className='cursor-pointer select-none'>+</span>
            </div>
          </div>

          <div className='flex gap-7 lg:gap-5 xl:mt-6 relative justify-center lg:justify-start'>
            <button id={titleProduct.toLowerCase()} className='rounded-xl border-solid border-brown border-2 py-2 px-4 font-semibold' onClick={(e) => addToCartEvent(e, proQuantity)}>ADD TO CART</button>
            <button id={titleProduct.toLowerCase()} onClick={buyNow} className='rounded-xl border-solid border-brown border-2 py-2 px-4 text-white bg-brown'>BUY NOW</button>
            <p className='text-md add-to-cart-msg font-bold absolute -bottom-10 '></p>
          </div>
        </section>
      </section>

      {/* You may also like */}
      <section className='w-full'>
        <h2 className='font-semibold text-center text-3xl text-dark mb-2 xl:text-5xl'>You may also like</h2>
        <section className='flex justify-center flex-wrap mt-8 w-full gap-5 gap-y-8 sm:gap-10 md:gap-10 md:mt-10'>
          
        {
          usersLikeList
        }
          
        </section>
  
        
      </section>

      {/* Grid Section */}
      <section className='grid-section inv gap-2 md:w-10/12 lg:w-9/12 xl:w-7/12'>
        <div>
          <img draggable="false" className='w-full' src='../assets/Individual Section/grid1.jpeg' alt=''/>
        </div>
        <div>
          <img draggable="false" className='w-full' src='../assets/Individual Section/grid2.png' alt=''/>
        </div>
        <div>
          <img draggable="false" className='w-full h-full' src='../assets/Individual Section/grid3.png' alt=''/>
        </div>
      </section>
      
      
      <section className=''>
         <h2 className="text-4xl text-dark text-center xl:text-5xl">All Reviews</h2>
         <div className='flex flex-col gap-16 mt-7 items-center'>
         
        {
          reviewsList
        }
         
          <div className='flex flex-col gap-5 w-11/12'>
            <textarea placeholder='Write Your Comment here..' className='p-3 outline-none rounded-lg h-20 bg-grayBg resize-none'></textarea>
            <div className='flex items-center gap-2'>
            <button className='p-3 self-center px-6 rounded-full bg-brown text-white sm:self-start'>Add Comment</button>
            
            <div class="container-loading opacity-0">
              <div className="cube"><div className="cube__inner"></div></div>
              <div className="cube"><div className="cube__inner"></div></div>
              <div className="cube"><div className="cube__inner"></div></div>
            </div>
          </div>
            
          </div>
         </div>
        </section>
    </div>
    <Footer />
   </>
        ) : <PageNotFound />
      }
    </>
    
  )
}
