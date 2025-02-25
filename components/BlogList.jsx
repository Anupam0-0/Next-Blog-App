"use client";

import { blog_data } from '@/assets/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'


const BlogList = () => {

    const [menu, setMenu] = useState('All');


    return (
        <>
            <div className='flex justify-center items-center gap-6 my-10'>
                <button onClick={() => setMenu('All')}  className={ menu === 'All' && 'bg-black text-white py-1 px-4 rounded'}> All </button>
                <button onClick={() => setMenu('Technology')} className={ menu === 'Technology' && 'bg-black text-white py-1 px-4 rounded'}>Technology</button>
                <button onClick={() => setMenu('Startup')} className={ menu === 'Startup' && 'bg-black text-white py-1 px-4 rounded'} >Startup</button>
                <button onClick={() => setMenu('Lifestyle')} className={ menu === 'Lifestyle' && 'bg-black text-white py-1 px-4 rounded'} >Lifestyle</button>
            </div>

            <div className='flex flex-wrap justify-around gap-2 gap-y-10 mb-16 mx-8 md:mx-16 xl:mx-24'>
                {blog_data.filter((item) => menu === 'All' ? true : item.category === menu).map((item, index) => {
                    return <BlogItem key={index} id={item.id} image={item.image} title={item.title} description={item.description} category={item.category} />
                })}

            </div>
        </>
    )
}

export default BlogList