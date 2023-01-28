import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';





export const Image_Slider = () => {
  const slides = [
    {
      url:"/images/web1.png",
    },
    {
      url: '/images/web6.png',
    },
    {
      url: '/images/web8.png',
    },

    {
      url: '/images/web4.png',
    },
    {
      url: '/images/web9.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <>
<h1 data-aos="fade-up"
      className='flex justify-center font-Raleway font-bold text-xl head-color md:text-4xl pt-8 '>Building efficient, beautiful websites.</h1>
<div data-aos="fade-up"
      className='max-w-[1400px] h-[23rem] md:h-[780px] mt-0  w-full m-auto py-16 px-4 relative  '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full  md:h-[107%] h-[95%] rounded-2xl bg-center bg-cover duration-500'
      >
        
      </div>
      {/* Left Arrow */}
      <div className='  group-hover:block absolute top-[48%] md:top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div  className='  group-hover:block absolute top-[48%] md:top-[50%]  -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div  className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div 
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>

    
    </>
  )
}
