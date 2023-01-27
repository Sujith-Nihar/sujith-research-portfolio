import React from 'react'
import img1 from "../image/Downpart/fiverr.png"
import img2 from "../image/Downpart/upwork.png"
import img3 from "../image/Downpart/mail.png"
export const Downpart = () => {
  return (
    <>
    <h1 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='font-Raleway text-[24px] md:text-4xl text-center mt-16 font-bold head-color antialiased'>Available on other Platforms </h1>
    <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='font-Ibm violet text-[15px] md:text-lg font-medium antialiased text-center'>easy to contact 24*7 available </p>

        <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='flex flex-col md:flex-row items-center justify-center md:space-x-44 space-y-14 mt-16' >

          <div className='mt-12'>
          <img src={img1} alt="" className='md:w-[8rem] w-[6rem] cursor-pointer' />
          <button className="px-8 mt-4 md:ml-3 py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg"><a href="/">Fiverr</a></button>
          </div>
            
            <div>
            <img src={img3} alt="" className='md:w-[8rem] w-[5rem] cursor-pointer' />
            <button className="px-8 md:ml-4 py-2 text-white mt-4 bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg"><a href="/">Mail</a></button>
            </div>
            
            <div>
            <img src={img2} alt="" className='md:w-[8rem] w-[5rem] ml-4 cursor-pointer' />
            <button className="px-8 md:ml-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-700 active:shadow-lg"><a href="/">UpWork</a></button>
            </div>
            
            
        </div>
        
        <hr className='w-auto  mt-16'/>
        <div className='flex flex-col items-center justify-center mt-[6rem]'>
        <h1 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className=' font-Raleway text-[19px] md:text-3xl font-bold head-color antialiased  text-center'>Interested in collaborating with me?</h1>
        <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='font-Ibm text-[17px] text-center md:text-xl font-normal antialiased mt-[4rem] w-[24rem]md:w-auto'>I’m always open to discussing product design work or partnership opportunities.</p>
        <a href="/" className='mt-12 items-center '>

 <button data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" type="button"   className="inline-block px-6 py-3 md:py-4 border-2 border-purple-600 text-purple-600 font-medium text-lg leading-tight  rounded-full hover:bg-violet-600 hover:text-white focus:outline-none focus:ring-0 transition duration-500 ease-in-out"> Start a converstion</button>
 </a>
        </div>
    </>
  )
}
