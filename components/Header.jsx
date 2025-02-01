import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='py-5 px-5 sm:px-8 md:px-12 lg:px-28' >
        <nav className='flex justify-between items-center'>
            <h2 className='text-black text-4xl font-semibold'> 🎯 Blogger </h2>
            {/* <Image src={assets.logo} alt='Blogger' width={100} className='w-[130px] sm:w-auto' /> */}
            <button className='flex item gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>
                <span >Get Started</span>
                <Image src={assets.arrow} alt='' />
                
            </button>
        </nav>

        <div className='text-center my-24'>
          <h1 className='text-3xl sm:text-5xl font-medium '>
            Latest Blogs 
          </h1>
            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'> 
              Get the latest news and updates from our blog. Subscribe now to get daily updates.  
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quis est rem animi tenetur eaque consequuntur provident necessitatibus quo tempore.
      
            </p>
            <form className='flex justify-between max-x-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000] '>
              <input type="email" placeholder='Enter your email...' className='outline-none px-4' />
              <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>
                Subscribe
              </button>
            </form>
        </div>
        
    </div>
  )
}

export default Header