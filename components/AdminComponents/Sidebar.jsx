import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className='flex flex-col min-h-screen bg-slate-100 '>
                <Link href={'/'} className='flex justify-center max-h-[60px] py-3 border border-black bg-white' >
                    <Image src={assets.logo} height={40} width={120} alt='logo' className='scale-75 md:scale-100' />
                </Link>
            
            <div className='w-full lg:w-80 h-full relative py-12 border border-black'>
                <div className='w-fit lg:w-[80%] absolute right-5'>
                    <Link href='/admin/addProduct' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]'>
                        <Image src={assets.add_icon} alt='' width={28} />
                        <p className='hidden lg:block' >Add Blog</p>
                    </Link>
                    <Link href='/admin/blogList' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]'>
                        <Image src={assets.blog_icon} alt='' width={28} />
                        <p className='hidden lg:block' >Blog Lists</p>
                    </Link>
                    <Link href='/admin/subscriptions' className='mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000]'>
                        <Image src={assets.email_icon} alt='' width={28} />
                        <p className='hidden lg:block' >Subscriptions</p>
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default Sidebar