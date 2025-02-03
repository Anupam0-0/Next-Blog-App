import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='flex flex-col min-h-screen bg-slate-100 '>
        <div className='h-16 px-2 sm:pl-14 py-4 md:py-3 border border-black'>
            <Image src={assets.logo} width={120}  alt='logo' />
        </div>
        <div className='w-full md:w-80 h-full relative py-12 border border-black'>
            <div className='w-[50%] sm:w-[80%] absolute right-0'>
            <Link href='/admin/addProduct' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]'>
                <Image src={assets.add_icon} alt='' width={28}  />
                <p className='hidden md:block' >Add Blog</p>
            </Link>
            <Link href='/admin/blogList' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]'>
                <Image src={assets.blog_icon} alt='' width={28}  />
                <p className='hidden md:block' >Blog Lists</p>
            </Link>
            <Link href='/admin/subscriptions' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]'>
                <Image src={assets.email_icon} alt='' width={28}  />
                <p className='hidden md:block' >Subscriptions</p>
            </Link>

            </div>

            

        </div>
    </div>
  )
}

export default Sidebar