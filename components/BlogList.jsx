// import { blog_data } from '@/Assets/assets'
"use client";

import React from 'react'
import BlogItem from './BlogItem'
import { useState, useEffect } from 'react'
import axios from 'axios'

const BlogList = () => {

  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  console.log(blogs);

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs)
    console.log(response.data.blogs);
  }

  useEffect(() => {
    fetchBlogs();
  }, [])

  return (
    <div>
      <div className='flex justify-center gap-6 my-10'>
        <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>All</button>
        <button onClick={() => setMenu('Technology')} className={menu === "Technology" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Technology</button>
        <button onClick={() => setMenu('Startup')} className={menu === "Startup" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Startup</button>
        <button onClick={() => setMenu('Lifestyle')} className={menu === "Lifestyle" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}>Lifestyle</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24' suppressHydrationWarning >
        {blogs.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => {
          return <BlogItem key={item._id} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
          // return <><Items id={item._id} /></>
        })}
      </div>
    </div>

  )
}

export default BlogList
