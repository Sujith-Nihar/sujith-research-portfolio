import React from 'react'
import avatar from '../image/avtar/mf-avatar.png'
import home from '../image/home.svg'
export const Hero = () => {
  return (
    <>
    <div  className='md:w-auto  items-center md:h-[53rem] h-[35rem]'>
      <div className='flex w-auto flex-col justify-center items-center'>
    <h1 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"  className='flex  md:justify-center text-center head-color  md:w-auto font-Raleway subpixel-antialiased text-[21px]  md:text-4xl font-bold pt-14 font-color'>
    Machine Learning Engineer | Fullstack Developer| Videographer
    </h1>

    <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='flex sm:ml-[22 rem]  text-xs text-center subpixel-antialiased font-Ibm md:w-auto  text-[15px]    font-normal md:text-xl text-color  pt-4 '>
   I create AI-powered solutions, develop powerful backends, and design engaging frontends. Every line of code tells a story.
    </p>
    </div>
    {/* ----------------------------------- */}
<div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"  className='flex shrink justify-center  pt-10'>
    <img src={avatar} className="w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem]" alt="" />

</div>
<div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='animate__animated animate__fadeInUp flex justify-center py-24'>
    <img src={home} className="  md:w-[856px] md:h-[370px] h-[11rem] mt-[-5rem] md:mt-auto " alt="" />
</div>

    </div>
    
    
    </>
  )
}
