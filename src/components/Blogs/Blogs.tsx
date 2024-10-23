"use client"
import React, { useState } from 'react';
import Header from '../Header';
import img1 from '../../../public/Rectangle 652 (1).png';
import img2 from '../../../public/Rectangle 652 (2).png';
import img3 from '../../../public/Rectangle 652.png';
import { BsArrow90DegLeft, BsArrow90DegRight, BsSearch } from 'react-icons/bs';
import Image, { StaticImageData } from 'next/image';

type BlogData = {
  id: number,
  title: string,
  author: string,
  category: string,
  img: StaticImageData,
  description: string,

}
const blogData: BlogData[] = [
  { id: 1, title: 'Care of Your Teeth', author: 'Anita Jackson', category: 'Self Care', img: img1, description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 2, title: 'Healthy Living', author: 'John Doe', category: 'Wellness', img: img2, description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 3, title: 'Mental Health', author: 'Sarah Lee', category: 'Psychology', img: img3, description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 4, title: 'Fitness and You', author: 'Jane Smith', category: 'Fitness', img: img1, description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 5, title: 'Balanced Diet', author: 'Tom Brown', category: 'Nutrition', img: img2, description: 'Lorem ipsum dolor sit amet consectetur.' },
  { id: 6, title: 'Skin Care', author: 'Emily White', category: 'Beauty', img: img3, description: 'Lorem ipsum dolor sit amet consectetur.' },
];

const Blogs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;


  const nextSlide = () => {
    if (currentIndex < blogData.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };


  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center mx-2 md:mx-6 gap-14 my-14">
      <Header title="Blogs" des="We use only the best quality materials on the market in order to provide the best products to our patients." />
      <div className='relative'>
        <input type="search" className='py-2 px-8 border border-[#CFCFCF] rounded-md outline-none' placeholder="search" />
        <BsSearch className='text-[#CFCFCF] absolute top-2.5 left-2' />
      </div>

      <div className=" w-full flex items-center justify-center">
        <div className="flex items-center justify-center gap-8 overflow-hidden ">
          {blogData.slice(currentIndex, currentIndex + itemsPerPage).map((blog) => (
            <div key={blog.id} className='min-w-[300px] flex flex-col gap-3 p-4 bg-lightBlue rounded-lg'>
              <Image src={blog.img} className='w-full h-72 rounded-lg object-contain transition-transform hover:scale-105' width={400} height={280} alt={blog.title} />
              <div className='flex items-center justify-between'>
                <button className='px-4 py-2 bg-darkBlue hover:bg-blue-950 text-white rounded-lg'>{blog.category}</button>
                <h4 className='text-bodytext'>~ {blog.author}</h4>
              </div>
              <h4 className='text-darkBlue '>{blog.title}</h4>
              <p className='text-bodytext'>{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <button onClick={nextSlide} className=" bg-darkBlue text-white px-6 py-2 ">
          <BsArrow90DegLeft />
        </button>
        <button onClick={prevSlide} className=" bg-darkBlue text-white px-6 py-2 ">
          <BsArrow90DegRight />
        </button>
      </div>
    </section>
  );
};

export default Blogs;
