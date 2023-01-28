import React from 'react'
import facebook from "../image/social_icon/facebook.png"
import insta from "../image/social_icon/insta.png"
import github from "../image/social_icon/github.png"
import twitter from "../image/social_icon/twitter.png"
import dribble from "../image/social_icon/dribbble.png"
import mail from "../image/social_icon/mail.png"
import 'animate.css';
export const Footer = () => {
  return (
    <>
     
    <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='flex justify-center  items-center w-[100%] z-10 mt-44' >
        <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"  className=' w-[87%] 2xl:w-[63%] md:w-[90%]  flex-col md:flex-row drop-shadow-2xl  bg-[#141C3A] h-[21rem] md:h-[10rem] absolute rounded-lg flex items-center mt-12 md:mt-0'>
          <h1 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"  className=' font-Raleway text-[28px]  md:text-4xl font-bold text-white ml-0 mt-8 md:mt-0 md:ml-24'>Start a project</h1>

         <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"  className='font-Ibm text-white text-center leading-relaxed  md:font-normal md:ml-16 text-[17px] md:text-lg md:w-[31rem] w-[16rem] mt-8 md:mt-0'>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
         <a href="/">

 <button type="button"   className="inline-block px-6 md:px-12 md:ml-10 py-3 md:py-4 border-2 border-[#0BFDAB] text-white font-medium text-lg leading-tight  rounded-full hover:bg-[#0BFDAB] hover:text-[#141C3A] focus:outline-none focus:ring-0 transition duration-500 ease-in-out md:mt-0 mt-7"> Let’s do this</button>
 </a>
        </div>
    </div>
    <div className='flex flex-col bg-[#7510F7] h-[70vh] md:h-[55vh] justify-center items-center'>
          <h1 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='flex font-Ibm text-white text-[20px]  md:text-2xl mt-24 text-center w-[20rem]'>Living, learning, & leveling up one day at a time.</h1>
         <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='flex flex-row space-x-4 mt-12' >
              <img src={facebook} className=" w-[2rem] md:w-[3rem]  cursor-pointer focus:ring-0 transition duration-500 ease-in-out hover:bg-white rounded-full border-white"  alt="" />
              <img src={insta} className="   w-[2rem] md:w-[3rem] cursor-pointer focus:ring-0 transition duration-500 ease-in-out hover:bg-white rounded-full border-white "  alt="" />
              <img src={twitter} className="w-[2rem] md:w-[3rem] cursor-pointer focus:ring-0 transition duration-500 ease-in-out hover:bg-white rounded-full border-white  "  alt="" />
              <img src={dribble} className="w-[2rem] md:w-[3rem] cursor-pointer focus:ring-0 transition duration-500 ease-in-out hover:bg-white rounded-full border-white  "  alt="" />
              <img src={github} className="w-[2rem] md:w-[3rem] cursor-pointer focus:ring-0 transition duration-500 ease-in-out hover:bg-white rounded-full border-white  "  alt="" />
              <img src={mail} className="w-[2rem] md:w-[3rem] cursor-pointer focus:ring-0 transition duration-500 ease-in-out hover:bg-white rounded-full border-white  "  alt="" />
             
         </div>

         <h1 data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className='font-Raleway text-white text-center  antialiased font-semibold text-lg mt-10'>Developed By Omprakash</h1>
    </div>
    </>
  )
}
