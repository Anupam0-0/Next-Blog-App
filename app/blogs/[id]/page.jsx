"use client";

import { assets, blog_data } from '@/assets/assets';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import axios from 'axios';

const page = ({ params }) => {
    const [data, setData] = useState(null);

    const fetchBlogData = async () => {
        const response = await axios.get('/api/blog', {
            params: {
                id: params.id
            }
        })
        console.log(response.data);
        setData(response.data);
    }

    useEffect(() => {
        fetchBlogData();
    }, []);

    return (data ? <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Link href='/'>
                    <Image src={assets.logo} width={180} alt='Logo' className='w-[130px] sm:w-auto' />
                </Link>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]' >
                    Get Started <Image src={assets.arrow} alt='Arrow' />
                </button>
            </div>
            <div className='text-center my-24'>
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto ' >{data.title}</h1>
                <Image src={data.authorImg?.trimStart() || `https://placehold.co/60x60`} width={60} height={60} className='mx-auto mt-6 border-white rounded-full' alt='Author' />
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto' >{data.author}</p>
            </div>
        </div>

        <div className='mx-4 px-4 sm:px-10 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image src={data.image?.trimStart() || `https://placehold.co/1280x720`} width={1280} height={720} alt='Blog Image' className='border-4 border-white' />
            <div className='blog-content' dangerouslySetInnerHTML={{ __html: data.description }}></div>
            <div className='my-24'>
                <p className='text-black font font-semibold my-4'>Share this article on social media</p>
                <div className='flex '>
                    <Image src={assets.facebook_icon} width={40} className='cursor-pointer' alt='Facebook' />
                    <Image src={assets.twitter_icon} width={40} className='cursor-pointer' alt='Twitter' />
                    <Image src={assets.googleplus_icon} width={40} className='cursor-pointer' alt='Google Plus' />
                </div>
            </div>
        </div>
        <Footer />
    </> : <h1>Loading...</h1>
    )
}

export default page;