import React from 'react'


export default function RegisterCard({setLogSwitch, showPass, navigate}) {
  return (
    <div className='flex flex-col gap-8 h-full justify-center items-center register'>
           <h2 className='text-4xl font-bold'>Register</h2>
           <ul className='flex gap-6'>
               <li><img width="35" alt='' src='./assets/fb-icon.png'/></li>
               <li><img width="35" alt='' src='./assets/instagram-icon.png'/></li>
               <li><img width="35" alt='' src='./assets/tiktok-icon.png'/></li>
               
           </ul>

           <div className='w-full input-box-con flex flex-col gap-8 items-center mt-2'>
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

             <div className='relative border-darkBlue w-10/12 h-12 rounded-xl'>
             <img onClick={showPass} width="23" className='absolute top-3 right-3 z-20 cursor-pointer' alt='' src='./assets/Login Section/eye-slash.png'/> 
                <input type='password' required className='absolute bg-transparent z-10 inset-0 w-full h-full px-2 rounded-xl' alt=''/>
                <label className='absolute top-2 left-2'>Confirm Password</label>
                <i></i>
             </div>
           </div>

           <div className='flex items-center gap-5'>
           <button onClick={() => navigate('/login')} className='text-sm uppercase bg-white text-brown p-2 px-8 rounded-md border-solid border-2 border-brown lg:hidden'>Sign in</button>
           <button className='text-sm uppercase bg-brown text-white p-2 px-8 rounded-md'>Register</button>
           </div>

        </div>
  )
}
