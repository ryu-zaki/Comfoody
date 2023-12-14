import React from 'react'

export default function LoginCard({setLogSwitch, showPass, navigate}) {

  return (
    <div className='flex flex-col gap-8 h-full justify-center items-center login'>
           <h2 className='text-4xl font-bold'>Sign in</h2>
           <ul className='flex gap-6'>
               <li><img className='cursor-pointer' width="35" alt='' src='./assets/fb-icon.png'/></li>
               <li><img className='cursor-pointer' width="35" alt='' src='./assets/instagram-icon.png'/></li>
               <li><img className='cursor-pointer' width="35" alt='' src='./assets/tiktok-icon.png'/></li>
           </ul>

           <div className='w-full input-box-con flex flex-col gap-10 items-center mt-2'>
             <div className='relative border-darkBlue w-10/12 h-12 rounded-xl'>
                <input type='email' required className='absolute bg-transparent z-10 inset-0 w-full h-full px-2 rounded-xl'/>
                <label className='absolute top-2 left-2'>Email</label>
                <i></i>
             </div>

             <div className='relative border-darkBlue w-10/12 h-12 rounded-xl'>
             <img onClick={showPass} width="23" className='absolute top-3 right-3 z-20 cursor-pointer' src='./assets/Login Section/eye-slash.png' alt=''/>
                <input type='password' required className='absolute bg-transparent z-10 inset-0 w-full h-full px-2 rounded-xl'/>
                <label className='absolute top-2 left-2'>Password</label>
                <i></i>
             </div>
           </div>

           <div className='flex items-center gap-5'>
           <button className='text-sm uppercase bg-brown text-white p-2 px-10 rounded-md'>Sign in</button>
           <button onClick={() => navigate('/register')} className='text-sm uppercase bg-white text-brown text- p-2 px-8 rounded-md "border-solid border-2 border-brown lg:hidden'>Register</button>
           </div>
           <p className='text-textGray cursor-pointer'>Forget your Password ?</p>

        </div>
  )
}
