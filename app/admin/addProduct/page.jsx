"use client";
import { assets } from '@/assets/assets';
import React, { useState } from 'react'
import Image from 'next/image'

const page = () => {

  const[image, setImage] = useState(null);
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Startup', //for defualt value
    author: 'Anonymous', //for defualt value
    authorImg: '/author_img.png' //for defualt value  
  });
    
  

  return (
    <>
      <form className='py-5 px-5 sm:py-12 sm:px-16 '>
        <p className='text-xl mb-5' >Upload thumbnail</p>
        <label htmlFor="image">
          <Image src={!image ? assets.upload_area:URL.createObjectURL(image)  } alt='' width={140} height={70} className='cursor-pointer'  /> 
        </label>
        <input onChange={(e) => setImage(e.target.files[0]) } type="file" id='image' hidden required  />

        <p className='text-xl my-4'> Blog Title </p>
        <input className='w-full sm:w-[500px] my-t px-4 py-3 border ' type="text"   placeholder='Type here' required />

        <p className='text-xl my-4'> Blog Description </p>
        <textarea className='w-full sm:w-[500px] my-t px-4 py-3 border ' type="textarea"   placeholder='write your lone/rant here' rows={6}  required />

        <p className='text-xl mt-4'> Blog Category </p>
        <select name="category" id="category" className='w-40 my-4 py-3 px-4 border text-gray-500 '>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
        <br />
        <button type='submit' className='w-40 h-12 mx-4 bg-black text-white' > ADD </button>


      </form>
    </>
  )
}

export default page