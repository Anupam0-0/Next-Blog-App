"use client";
import { assets } from '@/assets/assets';
import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios';
import { toast } from 'react-toastify';

const page = () => {

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Startup', //for defualt value
    author: 'Anonymous', //for defualt value
    authorImg: '/author_img.png' //for defualt value  
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // setData({...data, [name]: value});
    setData(data => ({ ...data, [name]: value }));
    console.log(data);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();  //for sending data to server
    // formData.append('thumbnail', image);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    formData.append('image', image);
    // console.log(formData);

    const response = await axios.post('/api/blog', formData);
    if (response.data.success) {
      // toast.success('Blog added successfully');
      toast.success(response.data.msg);
      setImage(false);
      setData({
        title: '',
        description: '',
        category: 'Startup',
        author: 'Anonymous',
        authorImg: '/author_img.png'
      });


    } else {
      // toast.error('Something went wrong');
      toast.error(response.data.msg);
    }
  }


  return (
    <>
      <form onSubmit={onSubmitHandler} className='py-5 px-5 sm:py-12 md:px-16 '>
        <p className='text-xl mb-5' >Upload thumbnail</p>
        <label htmlFor="image">
          <Image src={!image ? assets.upload_area : URL.createObjectURL(image)} alt='' width={140} height={70} className='cursor-pointer' />
        </label>
        <input name='thumbnail' onChange={(e) => setImage(e.target.files[0])} type="file" id='image' className='hidden' required />

        <p className='text-xl my-4'> Blog Title </p>
        <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] my-t px-4 py-3 border ' type="text" placeholder='Type here' required />

        <p className='text-xl my-4'> Blog Description </p>
        <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] my-t px-4 py-3 border ' type="textarea" placeholder='write your lone/rant here' rows={6} required />

        <p className='text-xl mt-4'> Blog Category </p>
        <select name="category" onChange={onChangeHandler} value={data.category} id="category" className='w-40 my-4 py-3 px-4 border text-gray-500 '>
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