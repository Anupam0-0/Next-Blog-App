"use client";

import { assets, blog_data } from '@/assets/assets';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const page = ({params}) => {
    const [data, setData] = useState('null');
    const [id, setId] = useState(null);

    useEffect(() => {
        if (params) {
            setId(params.id);
        }
    }, [params]);
    // instead of using the static data, we can fetch the data from the server using the id
    // instead of {params.id}, we do useEffect the id state to fetch the data from the server  

    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(params.id) === blog_data[i].id) {
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break;
                
            }
        }
    }

    useEffect(() => {
        fetchBlogData();
    }, []);

    return ( data ? <>
        <div>
            <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
                    <Link href='/'>
                    <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' /> 
                    </Link>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]' >
                        Get Started <Image src={assets.arrow} alt=''/>
                    </button>
                
                </div>
                <div className='text-center my-24'>
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto ' >{data.title}</h1>
                    <Image src={data.author_img} width={60} height={60} className='mx-auto mt-6 border-white rounded-full' />
                    <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto' >{data.author}</p>

                </div>
            </div>
        </div>
        <div className='mx-4 px-4 sm:px-10 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image src={data.image} width={1280} height={720} alt='' className='border-4 border-white' />
            <h1 className='my-8 text-3xl font-semibold ml-2' >Introduction:</h1>
            <p >{data.description}</p>
            <h3 className='my-5 text-2xl font-semibold' >
                Step 1 : Self-Reflection and Goal Setting 
            </h3>
            <p className='my-3' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maxime enim eum odio dignissimos dicta minima veniam earum sint aliquid non et commodi perspiciatis aspernatur fugit in, pariatur perferendis porro.
            </p>
            <p className='my-3' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maxime enim eum odio dignissimos dicta minima veniam earum sint aliquid non et commodi perspiciatis aspernatur fugit in, pariatur perferendis porro.
            </p>
            <h3 className='my-5 text-2xl font-semibold' >
                Step 2 : Self-Reflection and Goal Setting 
            </h3>
            <p className='my-3' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maxime enim eum odio dignissimos dicta minima veniam earum sint aliquid non et commodi perspiciatis aspernatur fugit in, pariatur perferendis porro.
            </p>
            <p className='my-3' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maxime enim eum odio dignissimos dicta minima veniam earum sint aliquid non et commodi perspiciatis aspernatur fugit in, pariatur perferendis porro.
            </p>
            <h3 className='my-5 text-2xl font-semibold' >
                Step 3 : Self-Reflection and Goal Setting 
            </h3>
            <p className='my-3' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maxime enim eum odio dignissimos dicta minima veniam earum sint aliquid non et commodi perspiciatis aspernatur fugit in, pariatur perferendis porro.
            </p>
            <p className='my-3' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maxime enim eum odio dignissimos dicta minima veniam earum sint aliquid non et commodi perspiciatis aspernatur fugit in, pariatur perferendis porro.
            </p>
            <h3 className='my-5 text-2xl font-semibold' >
                Conclusion
            </h3>
            <p className='my-3' >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maxime enim eum odio dignissimos dicta minima veniam earum sint aliquid non et commodi perspiciatis aspernatur fugit in, pariatur perferendis porro.
            </p>
            <div className='my-24'>
                <p className='text-black font font-semibold my-4'>Share this article on social media</p>
                <div className='flex '>
                    <Image src={assets.facebook_icon} width={40} className='cursor-pointer' />
                    <Image src={assets.twitter_icon} width={40} className='cursor-pointer' />
                    <Image src={assets.googleplus_icon} width={40} className='cursor-pointer' />
                </div>

            </div>



        </div>
        <Footer/>
        </> : <h1>Loading...</h1>
    )
}

export default page;